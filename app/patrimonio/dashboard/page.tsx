'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

// Definir interfaces para los datos
interface PatrimonioDataItem {
  month: string;
  value: number;
}

interface ActivoDistribucion {
  nombre: string;
  valor: number;
  porcentaje: number;
  color: string;
}

interface PieSegment {
  path: string;
  color: string;
  nombre: string;
  porcentaje: number;
}

// Datos simulados para la evolución del patrimonio
const patrimonioData: PatrimonioDataItem[] = [
  { month: 'may 2023', value: 385000 },
  { month: 'jun 2023', value: 395000 },
  { month: 'jul 2023', value: 410000 },
  { month: 'ago 2023', value: 405000 },
  { month: 'sept 2023', value: 425000 },
  { month: 'oct 2023', value: 440000 },
  { month: 'nov 2023', value: 454500 }
];

// Datos simulados para la distribución de activos
const activosDistribucion: ActivoDistribucion[] = [
  { nombre: 'Inmuebles', valor: 350000, porcentaje: 77, color: '#FF9F43' },
  { nombre: 'Renta Variable', valor: 37500, porcentaje: 8.25, color: '#4F86F7' },
  { nombre: 'Renta Fija', valor: 20000, porcentaje: 4.4, color: '#1DB954' },
  { nombre: 'Efectivo', valor: 15000, porcentaje: 3.3, color: '#9C27B0' },
  { nombre: 'Oro', valor: 8000, porcentaje: 1.75, color: '#673AB7' },
  { nombre: 'Criptomonedas', valor: 9000, porcentaje: 1.98, color: '#E91E63' },
  { nombre: 'Otros', valor: 15000, porcentaje: 3.32, color: '#3F51B5' }
];

// Componente para el dashboard de patrimonio
export default function DashboardPatrimonio() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Calcular valores para el gráfico de línea
  const maxValue = Math.max(...patrimonioData.map(item => item.value));
  const minValue = Math.min(...patrimonioData.map(item => item.value));
  const normalizeValue = (value: number): number => {
    return 180 - ((value - minValue) / (maxValue - minValue) * 150);
  };

  // Crear puntos SVG para el gráfico de línea
  const svgPoints = patrimonioData.map((item, index) => {
    const x = (index * (700 / (patrimonioData.length - 1)));
    const y = normalizeValue(item.value);
    return `${x},${y}`;
  }).join(' ');

  // Crear áreas y segmentos para el gráfico circular
  const pieSegments: PieSegment[] = [];
  let currentAngle = 0;

  activosDistribucion.forEach((item) => {
    const angle = (item.porcentaje / 100) * 360;
    const startAngle = currentAngle;
    const endAngle = currentAngle + angle;
    currentAngle = endAngle;

    // Convertir ángulos a coordenadas para un gráfico SVG
    const startX = 100 + 80 * Math.cos((Math.PI * startAngle) / 180);
    const startY = 100 + 80 * Math.sin((Math.PI * startAngle) / 180);
    const endX = 100 + 80 * Math.cos((Math.PI * endAngle) / 180);
    const endY = 100 + 80 * Math.sin((Math.PI * endAngle) / 180);

    // Determinar si es un arco mayor (> 180 grados)
    const largeArcFlag = angle > 180 ? 1 : 0;

    pieSegments.push({
      path: `M 100 100 L ${startX} ${startY} A 80 80 0 ${largeArcFlag} 1 ${endX} ${endY} Z`,
      color: item.color,
      nombre: item.nombre,
      porcentaje: item.porcentaje
    });
  });

  if (!mounted) {
    return null;
  }

  // Variantes de animación para los componentes
  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.6 } }
  };

  const slideUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const drawLine = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: { 
      pathLength: 1, 
      opacity: 1, 
      transition: { 
        pathLength: { duration: 2, ease: "easeInOut" },
        opacity: { duration: 0.3 }
      } 
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { 
        duration: 0.5,
        delay: 0.1
      } 
    }
  };

  // Variante para los elementos que aparecen en secuencia
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariant = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4
      }
    }
  };

  return (
    <div className="min-h-screen bg-[#0D1117] text-white">
      <div className="container mx-auto max-w-[1200px] py-8 px-4">
        <div className="flex items-center gap-2 mb-6">
          <Link href="/" className="text-white/70 hover:text-white flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-1">
              <path d="m15 18-6-6 6-6"/>
            </svg>
            Volver al inicio
          </Link>
        </div>
        
        <motion.h1 
          className="text-3xl font-bold mb-2"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          Gestión Patrimonial
        </motion.h1>
        
        {/* Tabs de navegación */}
        <motion.div 
          className="flex gap-4 mt-6 mb-8 border-b border-white/10"
          variants={fadeIn}
          initial="hidden"
          animate="visible"
        >
          <Link href="/patrimonio/dashboard" className="px-4 py-2 text-[#E84D3D] border-b-2 border-[#E84D3D]">
            Dashboard
          </Link>
          <Link href="/patrimonio/activos" className="px-4 py-2 text-white/70 hover:text-white">
            Activos
          </Link>
          <Link href="/patrimonio/analisis" className="px-4 py-2 text-white/70 hover:text-white">
            Análisis
          </Link>
          <Link href="/patrimonio/planificacion" className="px-4 py-2 text-white/70 hover:text-white">
            Planificación
          </Link>
        </motion.div>
        
        {/* Header del Dashboard */}
        <motion.div 
          className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8"
          variants={slideUp}
          initial="hidden"
          animate="visible"
        >
          <div>
            <h2 className="text-2xl font-bold mb-2">Dashboard de Patrimonio</h2>
            <p className="text-white/70">Gestión integral de todos tus activos en un solo lugar</p>
          </div>
          <div className="flex gap-3 mt-4 md:mt-0">
            <Button variant="outline" size="sm" className="border-white/20 hover:bg-white/5">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2">
                <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"/>
              </svg>
              Filtrar
            </Button>
            <Button variant="outline" size="sm" className="border-white/20 hover:bg-white/5">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2">
                <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7"/>
                <line x1="16" x2="22" y1="5" y2="5"/>
                <line x1="19" x2="19" y1="2" y2="8"/>
                <circle cx="12" cy="12" r="3"/>
                <path d="m16.24 7.76 5.5 5.5-1.41 1.41-5.5-5.5"/>
              </svg>
              Actualizar
            </Button>
            <Button variant="outline" size="sm" className="border-white/20 hover:bg-white/5">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                <polyline points="17 8 12 3 7 8"/>
                <line x1="12" x2="12" y1="3" y2="15"/>
              </svg>
              Exportar
            </Button>
            <Button size="sm" className="bg-[#E84D3D] hover:bg-[#E84D3D]/90 text-white">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2">
                <path d="M5 12h14"/>
                <path d="M12 5v14"/>
              </svg>
              Añadir Activo
            </Button>
          </div>
        </motion.div>
        
        {/* Grids con widgets */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Widget de Resumen del Patrimonio */}
          <motion.div 
            className="bg-[#111827]/50 rounded-lg p-6 border border-white/10 col-span-2"
            variants={cardVariants}
            initial="hidden"
            animate="visible"
          >
            <h3 className="text-lg font-medium mb-4">Resumen del Patrimonio</h3>
            <motion.div 
              className="flex flex-col"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              <div className="text-4xl font-bold mb-2">454.500 €</div>
              <div className="flex items-center text-green-500">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-1">
                  <polyline points="18 15 12 9 6 15"/>
                </svg>
                +1,25% <span className="text-white/50 ml-1 text-sm">último mes</span>
              </div>
            </motion.div>
            
            <motion.div 
              className="grid grid-cols-3 gap-4 mt-8"
              variants={container}
              initial="hidden"
              animate="visible"
            >
              <motion.div className="text-center" variants={itemVariant}>
                <div className="text-white/50 mb-2 text-sm flex justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-1">
                    <path d="M20.42 4.58a5.4 5.4 0 0 0-7.65 0l-.77.78-.77-.78a5.4 5.4 0 0 0-7.65 0C1.46 6.7 1.33 10.28 4 13l8 8 8-8c2.67-2.72 2.54-6.3.42-8.42z"/>
                  </svg>
                  Activos
                </div>
                <div className="text-xl font-medium">8</div>
              </motion.div>
              <motion.div className="text-center" variants={itemVariant}>
                <div className="text-white/50 mb-2 text-sm flex justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-1">
                    <path d="M3 3v18h18"/>
                    <path d="m19 9-5 5-4-4-3 3"/>
                  </svg>
                  Clases
                </div>
                <div className="text-xl font-medium">8</div>
              </motion.div>
              <motion.div className="text-center" variants={itemVariant}>
                <div className="text-white/50 mb-2 text-sm flex justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-1">
                    <circle cx="12" cy="12" r="10"/>
                    <path d="m8 14 2.5-2.5"/>
                    <path d="m12.5 9.5 1.5 1.5"/>
                    <path d="M16 14 14 16"/>
                  </svg>
                  Divisas
                </div>
                <div className="text-xl font-medium">3</div>
              </motion.div>
            </motion.div>
            
            <motion.div 
              className="grid grid-cols-2 gap-4 mt-6 pt-6 border-t border-white/10"
              variants={container}
              initial="hidden"
              animate="visible"
              transition={{ delayChildren: 0.3 }}
            >
              <motion.div variants={itemVariant}>
                <div className="text-white/50 text-sm mb-1">Rentabilidad YTD</div>
                <div className="text-green-500 text-lg font-medium">+5,43 %</div>
              </motion.div>
              <motion.div variants={itemVariant}>
                <div className="text-white/50 text-sm mb-1">Rentabilidad Total</div>
                <div className="text-green-500 text-lg font-medium">+14,80 %</div>
              </motion.div>
            </motion.div>
          </motion.div>
          
          {/* Widget de Métricas de Riesgo */}
          <motion.div 
            className="bg-[#111827]/50 rounded-lg p-6 border border-white/10"
            variants={cardVariants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.2 }}
          >
            <h3 className="text-lg font-medium mb-6">Métricas de Riesgo</h3>
            
            <motion.div 
              className="space-y-6"
              variants={container}
              initial="hidden"
              animate="visible"
            >
              <motion.div variants={itemVariant}>
                <div className="flex justify-between mb-1">
                  <div className="text-white/70 text-sm">Volatilidad</div>
                  <div className="text-[#E84D3D] text-sm font-medium">7.5% <span className="text-[#E84D3D] ml-1">↘</span></div>
                </div>
                <div className="text-xs text-white/50">Desviación estándar anualizada</div>
              </motion.div>
              
              <motion.div variants={itemVariant}>
                <div className="flex justify-between mb-1">
                  <div className="text-white/70 text-sm">Ratio de Sharpe</div>
                  <div className="text-green-500 text-sm font-medium">1.20 <span className="text-green-500 ml-1">↗</span></div>
                </div>
                <div className="text-xs text-white/50">Rentabilidad ajustada al riesgo</div>
              </motion.div>
              
              <motion.div variants={itemVariant}>
                <div className="flex justify-between mb-1">
                  <div className="text-white/70 text-sm">Drawdown Máximo</div>
                  <div className="text-amber-500 text-sm font-medium">12.3% <span className="text-amber-500 ml-1">→</span></div>
                </div>
                <div className="text-xs text-white/50">Caída máxima desde máximos</div>
              </motion.div>
              
              <motion.div variants={itemVariant}>
                <div className="flex justify-between mb-1">
                  <div className="text-white/70 text-sm">Beta</div>
                  <div className="text-[#E84D3D] text-sm font-medium">0.85 <span className="text-[#E84D3D] ml-1">↘</span></div>
                </div>
                <div className="text-xs text-white/50">Correlación con el mercado</div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
        
        {/* Segunda fila de widgets */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
          {/* Widget de Evolución del Patrimonio */}
          <motion.div 
            className="bg-[#111827]/50 rounded-lg p-6 border border-white/10 col-span-2"
            variants={cardVariants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.3 }}
          >
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-lg font-medium">Evolución del Patrimonio</h3>
              <div className="text-green-500 text-sm font-medium">+3.30%</div>
            </div>
            <div className="text-xs text-white/50 mb-2">may 2023 - nov 2023</div>
            
            {/* Gráfico de evolución con SVG */}
            <motion.div 
              className="mt-4 h-[200px] relative"
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.5 }}
            >
              <svg className="w-full h-full overflow-visible" viewBox="0 0 700 200">
                {/* Líneas de cuadrícula */}
                <motion.line 
                  x1="0" y1="30" x2="700" y2="30" 
                  stroke="#ffffff20" strokeDasharray="2,2"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.7, duration: 1 }}
                />
                <motion.line 
                  x1="0" y1="80" x2="700" y2="80" 
                  stroke="#ffffff20" strokeDasharray="2,2"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.8, duration: 1 }}
                />
                <motion.line 
                  x1="0" y1="130" x2="700" y2="130" 
                  stroke="#ffffff20" strokeDasharray="2,2"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.9, duration: 1 }}
                />
                <motion.line 
                  x1="0" y1="180" x2="700" y2="180" 
                  stroke="#ffffff20" strokeDasharray="2,2"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1, duration: 1 }}
                />
                
                {/* Área bajo la curva */}
                <motion.path
                  d={`M 0 ${normalizeValue(patrimonioData[0].value)} ${svgPoints} ${700} ${180} 0 ${180} Z`}
                  fill="url(#lineGradient)"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 0.2 }}
                  transition={{ delay: 1, duration: 1 }}
                />
                
                {/* Línea de tendencia */}
                <motion.polyline
                  points={svgPoints}
                  fill="none"
                  stroke="#3b82f6"
                  strokeWidth="2"
                  variants={drawLine}
                  initial="hidden"
                  animate="visible"
                />
                
                {/* Puntos de datos */}
                {patrimonioData.map((item, index) => {
                  const x = (index * (700 / (patrimonioData.length - 1)));
                  const y = normalizeValue(item.value);
                  return (
                    <motion.circle
                      key={index}
                      cx={x}
                      cy={y}
                      r="4"
                      fill="#3b82f6"
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 1 + (index * 0.1), duration: 0.5 }}
                    />
                  );
                })}
                
                {/* Gradient para el área */}
                <defs>
                  <linearGradient id="lineGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.8" />
                    <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.1" />
                  </linearGradient>
                </defs>
              </svg>
            </motion.div>
            
            {/* Meses (eje X) */}
            <motion.div 
              className="flex justify-between text-xs text-white/50 mt-2"
              variants={container}
              initial="hidden"
              animate="visible"
              transition={{ delayChildren: 1.3, staggerChildren: 0.07 }}
            >
              {patrimonioData.map((item, index) => (
                <motion.div key={index} variants={itemVariant}>{item.month}</motion.div>
              ))}
            </motion.div>
          </motion.div>
          
          {/* Widget de Distribución de Activos */}
          <motion.div 
            className="bg-[#111827]/50 rounded-lg p-6 border border-white/10"
            variants={cardVariants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.4 }}
          >
            <h3 className="text-lg font-medium mb-6">Distribución de Activos</h3>
            
            {/* Gráfico de distribución con SVG */}
            <motion.div 
              className="flex justify-center mb-6"
              initial={{ opacity: 0, rotateY: 90 }}
              animate={{ opacity: 1, rotateY: 0 }}
              transition={{ delay: 0.5, duration: 0.8, type: "spring" }}
            >
              <div className="relative">
                <svg width="200" height="200" viewBox="0 0 200 200">
                  {pieSegments.map((segment, index) => (
                    <motion.path
                      key={index}
                      d={segment.path}
                      fill={segment.color}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.8 + (index * 0.1), duration: 0.4 }}
                    />
                  ))}
                  {/* Círculo interior para crear efecto donut */}
                  <motion.circle 
                    cx="100" cy="100" r="40" 
                    fill="#111827"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 1.6, duration: 0.3 }}
                  />
                </svg>
              </div>
            </motion.div>
            
            {/* Leyenda */}
            <motion.div 
              className="space-y-2"
              variants={container}
              initial="hidden"
              animate="visible"
              transition={{ delayChildren: 1.2, staggerChildren: 0.1 }}
            >
              {activosDistribucion.map((item, index) => (
                <motion.div key={index} className="flex items-center justify-between" variants={itemVariant}>
                  <div className="flex items-center">
                    <div className="w-3 h-3 rounded-full mr-2" style={{ backgroundColor: item.color }}></div>
                    <div className="text-sm">{item.nombre}</div>
                  </div>
                  <div className="text-sm text-white/70">{item.porcentaje.toFixed(1)}%</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
        
        {/* Widget de Exposición por Divisa */}
        <motion.div 
          className="bg-[#111827]/50 rounded-lg p-6 border border-white/10 mt-6"
          variants={cardVariants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.5 }}
        >
          <h3 className="text-lg font-medium mb-6">Exposición por Divisa</h3>
          
          <motion.div 
            className="space-y-6"
            variants={container}
            initial="hidden"
            animate="visible"
            transition={{ delayChildren: 0.6, staggerChildren: 0.2 }}
          >
            {/* Euro */}
            <motion.div variants={itemVariant}>
              <div className="flex justify-between items-center mb-2">
                <div className="flex items-center">
                  <span className="w-6 h-6 flex items-center justify-center text-sm font-medium mr-2">€</span>
                  <span>Euro</span>
                </div>
                <div>420.500 €</div>
              </div>
              <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                <motion.div 
                  className="h-full bg-blue-500 rounded-full" 
                  initial={{ width: 0 }}
                  animate={{ width: '92.3%' }}
                  transition={{ delay: 0.8, duration: 1, ease: "easeOut" }}
                />
              </div>
              <div className="text-right text-xs text-white/50 mt-1">92.3%</div>
            </motion.div>
            
            {/* Dólar */}
            <motion.div variants={itemVariant}>
              <div className="flex justify-between items-center mb-2">
                <div className="flex items-center">
                  <span className="w-6 h-6 flex items-center justify-center text-sm font-medium mr-2">$</span>
                  <div>
                    <div>Dólar</div>
                    <div className="text-xs text-white/50">estadounidense</div>
                  </div>
                </div>
                <div>25.000 US$</div>
              </div>
              <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                <motion.div 
                  className="h-full bg-teal-400 rounded-full" 
                  initial={{ width: 0 }}
                  animate={{ width: '5.5%' }}
                  transition={{ delay: 1, duration: 1, ease: "easeOut" }}
                />
              </div>
              <div className="text-right text-xs text-white/50 mt-1">5.5%</div>
            </motion.div>
            
            {/* Bitcoin */}
            <motion.div variants={itemVariant}>
              <div className="flex justify-between items-center mb-2">
                <div className="flex items-center">
                  <span className="w-6 h-6 flex items-center justify-center text-sm font-medium mr-2">₿</span>
                  <span>Bitcoin</span>
                </div>
                <div>9000 €</div>
              </div>
              <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                <motion.div 
                  className="h-full bg-blue-600 rounded-full" 
                  initial={{ width: 0 }}
                  animate={{ width: '2%' }}
                  transition={{ delay: 1.2, duration: 1, ease: "easeOut" }}
                />
              </div>
              <div className="text-right text-xs text-white/50 mt-1">2.0%</div>
            </motion.div>
          </motion.div>
        </motion.div>
        
        {/* Tabla de Listado de Activos */}
        <motion.div 
          className="bg-[#111827]/50 rounded-lg p-6 border border-white/10 mt-6"
          variants={cardVariants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.6 }}
        >
          <h3 className="text-lg font-medium mb-6">Listado de Activos</h3>
          
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="text-left pb-4 text-white/70 font-medium">Nombre</th>
                  <th className="text-left pb-4 text-white/70 font-medium">Tipo</th>
                  <th className="text-left pb-4 text-white/70 font-medium">Valor actual</th>
                  <th className="text-left pb-4 text-white/70 font-medium">Valor adquisición</th>
                  <th className="text-left pb-4 text-white/70 font-medium">Rendimiento</th>
                  <th className="text-left pb-4 text-white/70 font-medium">Acciones</th>
                </tr>
              </thead>
              <motion.tbody
                variants={container}
                initial="hidden"
                animate="visible"
                transition={{ delayChildren: 0.8, staggerChildren: 0.1 }}
              >
                <motion.tr className="border-b border-white/5" variants={itemVariant}>
                  <td className="py-4">Acciones BBVA</td>
                  <td className="py-4">Acciones</td>
                  <td className="py-4">12.500 €</td>
                  <td className="py-4">10.000 €</td>
                  <td className="py-4 text-green-500">+25.00% <span className="text-green-500 ml-1">↗</span></td>
                  <td className="py-4">
                    <button className="text-white/50 hover:text-white">
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="12" cy="12" r="1"/>
                        <circle cx="19" cy="12" r="1"/>
                        <circle cx="5" cy="12" r="1"/>
                      </svg>
                    </button>
                  </td>
                </motion.tr>
                
                {/* Incluir el resto de las filas con la misma animación */}
                <motion.tr className="border-b border-white/5" variants={itemVariant}>
                  <td className="py-4">Bonos del Tesoro Español</td>
                  <td className="py-4">Bonos</td>
                  <td className="py-4">20.000 €</td>
                  <td className="py-4">20.000 €</td>
                  <td className="py-4 text-white/50">0.00% <span className="text-white/50 ml-1">→</span></td>
                  <td className="py-4">
                    <button className="text-white/50 hover:text-white">
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="12" cy="12" r="1"/>
                        <circle cx="19" cy="12" r="1"/>
                        <circle cx="5" cy="12" r="1"/>
                      </svg>
                    </button>
                  </td>
                </motion.tr>
                
                {/* Continuar con el resto de filas... */}
                <motion.tr className="border-b border-white/5" variants={itemVariant}>
                  <td className="py-4">Apartamento en Madrid</td>
                  <td className="py-4">Inmuebles</td>
                  <td className="py-4">350.000 €</td>
                  <td className="py-4">300.000 €</td>
                  <td className="py-4 text-green-500">+16.67% <span className="text-green-500 ml-1">↗</span></td>
                  <td className="py-4">
                    <button className="text-white/50 hover:text-white">
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="12" cy="12" r="1"/>
                        <circle cx="19" cy="12" r="1"/>
                        <circle cx="5" cy="12" r="1"/>
                      </svg>
                    </button>
                  </td>
                </motion.tr>
                
                {/* Resto de filas de la tabla aquí... */}
                
                {/* Resto de las filas omitidas por brevedad */}
              </motion.tbody>
            </table>
          </div>
        </motion.div>
      </div>
    </div>
  );
} 