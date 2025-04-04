import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { ChevronDown } from 'lucide-react';
import { useTheme } from 'next-themes';

// Importamos los componentes que necesitamos
import { ThemeSwitcher } from '@/components/theme-switcher';
import { ThemeLogo } from '@/components/theme-logo';
import { ThemeToggle } from '@/components/theme-toggle';

// Componente para Auth Button
const AuthButtonSection = () => {
  return (
    <div className="flex gap-2">
      <Button asChild size="sm" variant="outline" className="text-black dark:text-white border-gray-200 dark:border-white/20 hover:bg-gray-100 dark:hover:bg-white/5">
        <Link href="/sign-in">Sign in</Link>
      </Button>
      <Button asChild size="sm" className="bg-[#E84D3D] hover:bg-[#E84D3D]/90 border-none text-white">
        <Link href="/sign-up">Sign up</Link>
      </Button>
    </div>
  );
};

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#0D1117] dark:bg-[#0D1117] bg-white text-black dark:text-white">
      {/* Header y navegación */}
      <header className="w-full bg-white dark:bg-[#0D1117] border-b border-gray-200 dark:border-white/10 h-[60px]">
        <div className="container mx-auto max-w-[1200px] h-full flex items-center justify-between px-4">
          {/* Logo */}
          <div className="flex items-center">
            <ThemeLogo />
          </div>
          
          {/* Navegación Principal */}
          <div className="flex items-center space-x-8">
            <Link href="/" className="flex items-center text-[#E84D3D] hover:text-[#E84D3D]/90">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2">
                <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
                <polyline points="9 22 9 12 15 12 15 22"/>
              </svg>
              Inicio
            </Link>
            
            <div className="relative flex items-center group">
              <button className="flex items-center text-black dark:text-white/90 hover:text-black hover:dark:text-white">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2">
                  <path d="M3 3v18h18"/>
                  <path d="m19 9-5 5-4-4-3 3"/>
                </svg>
                Portfolios <ChevronDown className="h-4 w-4 ml-1" />
              </button>
              <div className="absolute left-0 top-[calc(100%+0px)] w-[350px] z-10">
                <div className="h-[10px]"></div>
                <div className="bg-white dark:bg-[#0E1421] border border-gray-200 dark:border-white/10 rounded-md p-6 invisible group-hover:visible opacity-0 group-hover:opacity-100 transition-all duration-300 shadow-lg">
                  <div className="flex flex-col gap-8">
                    <div>
                      <div className="p-2 -mx-2 rounded-md hover:bg-gray-100 dark:hover:bg-white/5 transition-colors">
                        <Link href="/portfolios" className="flex items-center text-[#E84D3D] mb-2 hover:text-[#E84D3D]/90">
                          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2">
                            <circle cx="12" cy="12" r="10"/>
                            <polyline points="12 6 12 12 16 14"/>
                          </svg>
                          Mis Portfolios
                        </Link>
                        <p className="text-gray-600 dark:text-gray-400">Visualiza y gestiona tus portfolios existentes</p>
                      </div>
                    </div>
                    
                    <div>
                      <div className="p-2 -mx-2 rounded-md hover:bg-gray-100 dark:hover:bg-white/5 transition-colors">
                        <Link href="/crear-portfolio" className="flex items-center text-[#E84D3D] mb-2 hover:text-[#E84D3D]/90">
                          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2">
                            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                            <polyline points="17 8 12 3 7 8"/>
                            <line x1="12" x2="12" y1="3" y2="15"/>
                          </svg>
                          Crear Portfolio
                        </Link>
                        <p className="text-gray-600 dark:text-gray-400">Crea un nuevo portfolio personalizado paso a paso</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative flex items-center group">
              <button className="flex items-center text-black dark:text-white/90 hover:text-black hover:dark:text-white">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2">
                  <rect width="20" height="14" x="2" y="5" rx="2"/>
                  <line x1="2" x2="22" y1="10" y2="10"/>
                </svg>
                Gestión Patrimonial <ChevronDown className="h-4 w-4 ml-1" />
              </button>
              <div className="absolute left-0 top-[calc(100%+0px)] w-[350px] z-10">
                <div className="h-[10px]"></div>
                <div className="bg-white dark:bg-[#0E1421] border border-gray-200 dark:border-white/10 rounded-md p-6 invisible group-hover:visible opacity-0 group-hover:opacity-100 transition-all duration-300 shadow-lg">
                  <div className="flex flex-col gap-8">
                    <div>
                      <div className="p-2 -mx-2 rounded-md hover:bg-gray-100 dark:hover:bg-white/5 transition-colors">
                        <Link href="/patrimonio/dashboard" className="flex items-center text-[#E84D3D] mb-2 hover:text-[#E84D3D]/90">
                          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2">
                            <path d="M20.42 4.58a5.4 5.4 0 0 0-7.65 0l-.77.78-.77-.78a5.4 5.4 0 0 0-7.65 0C1.46 6.7 1.33 10.28 4 13l8 8 8-8c2.67-2.72 2.54-6.3.42-8.42z"/>
                          </svg>
                          Mi Patrimonio
                        </Link>
                        <p className="text-gray-600 dark:text-gray-400">Gestión integral de tu patrimonio con visión 360°</p>
                      </div>
                    </div>
                    
                    <div>
                      <div className="p-2 -mx-2 rounded-md hover:bg-gray-100 dark:hover:bg-white/5 transition-colors">
                        <Link href="/informes" className="flex items-center text-[#E84D3D] mb-2 hover:text-[#E84D3D]/90">
                          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2">
                            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                            <path d="M14 2v6h6"/>
                            <path d="M16 13H8"/>
                            <path d="M16 17H8"/>
                            <path d="M10 9H8"/>
                          </svg>
                          Informes y Análisis
                        </Link>
                        <p className="text-gray-600 dark:text-gray-400">Informes detallados sobre tus inversiones y patrimonio</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Controles secundarios */}
          <div className="flex items-center gap-4">
            <ThemeToggle />
            <AuthButtonSection />
          </div>
        </div>
      </header>

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="py-12 md:py-24 bg-white dark:bg-[#0D1117]">
          <div className="container mx-auto max-w-[1200px] px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-black dark:text-white">
                Portfolio Creator: Gestión avanzada de inversiones y patrimonio
        </h1>
        
              <p className="text-lg md:text-xl text-gray-600 dark:text-white/70 mb-8">
                Plataforma completa para la gestión de tus inversiones y patrimonio con
                herramientas avanzadas de análisis y planificación.
        </p>
        
        <div className="flex flex-col md:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="md:text-lg bg-[#E84D3D] hover:bg-[#E84D3D]/90 border-none">
            <Link href="/crear-portfolio">
                    Crear portfolio
            </Link>
          </Button>
          
                <Button asChild variant="outline" size="lg" className="md:text-lg text-black dark:text-white border-gray-300 dark:border-white/20 hover:bg-gray-100 dark:hover:bg-white/5">
                  <Link href="/patrimonio/dashboard">
                    Dashboard patrimonial
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Feature Cards Section */}
        <section className="pb-24 bg-white dark:bg-[#0D1117]">
          <div className="container mx-auto max-w-[1200px] px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Card 1 */}
              <div className="bg-gray-50 dark:bg-white/5 rounded-lg p-6 border border-gray-200 dark:border-white/10">
                <div className="mb-6 text-[#E84D3D]">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 7 12 2 3 7l9 5 9-5Z"/>
                    <path d="m3 7 9 5 9-5"/>
                    <path d="m3 12 9 5 9-5"/>
                    <path d="m3 17 9 5 9-5"/>
                  </svg>
                </div>
                <h2 className="text-xl font-semibold mb-3 text-black dark:text-white">Portfolios</h2>
                <p className="text-gray-600 dark:text-white/70 mb-4">
                  Crea y gestiona portfolios de inversión personalizados adaptados a diferentes objetivos.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center">
                    <span className="w-1.5 h-1.5 bg-[#E84D3D] rounded-full mr-2"></span>
                    <span className="text-gray-600 dark:text-white/70">Asistente de creación paso a paso</span>
                  </li>
                  <li className="flex items-center">
                    <span className="w-1.5 h-1.5 bg-[#E84D3D] rounded-full mr-2"></span>
                    <span className="text-gray-600 dark:text-white/70">Distribución óptima de activos</span>
                  </li>
                  <li className="flex items-center">
                    <span className="w-1.5 h-1.5 bg-[#E84D3D] rounded-full mr-2"></span>
                    <span className="text-gray-600 dark:text-white/70">Evaluación de riesgo personalizada</span>
                  </li>
                </ul>
                <Button asChild variant="outline" className="w-full text-black dark:text-white border-gray-300 dark:border-white/20 hover:bg-gray-100 dark:hover:bg-white/5">
            <Link href="/portfolios">
              Ver mis portfolios
            </Link>
          </Button>
        </div>
        
              {/* Card 2 */}
              <div className="bg-gray-50 dark:bg-white/5 rounded-lg p-6 border border-gray-200 dark:border-white/10">
                <div className="mb-6 text-[#E84D3D]">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M3 3v18h18"/>
                    <path d="m19 9-5 5-4-4-3 3"/>
                  </svg>
                </div>
                <h2 className="text-xl font-semibold mb-3 text-black dark:text-white">Gestión Patrimonial</h2>
                <p className="text-gray-600 dark:text-white/70 mb-4">
                  Gestión integral de tu patrimonio con visión 360°
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center">
                    <span className="w-1.5 h-1.5 bg-[#E84D3D] rounded-full mr-2"></span>
                    <span className="text-gray-600 dark:text-white/70">Dashboard patrimonial consolidado</span>
                  </li>
                  <li className="flex items-center">
                    <span className="w-1.5 h-1.5 bg-[#E84D3D] rounded-full mr-2"></span>
                    <span className="text-gray-600 dark:text-white/70">Análisis avanzado de riesgo</span>
                  </li>
                  <li className="flex items-center">
                    <span className="w-1.5 h-1.5 bg-[#E84D3D] rounded-full mr-2"></span>
                    <span className="text-gray-600 dark:text-white/70">Gestión multi-activo</span>
                  </li>
                </ul>
                <Button asChild className="w-full bg-[#E84D3D] hover:bg-[#E84D3D]/90 border-none text-white">
                  <Link href="/patrimonio/dashboard">
                    Acceder a mi patrimonio
                  </Link>
                </Button>
          </div>
          
              {/* Card 3 */}
              <div className="bg-gray-50 dark:bg-white/5 rounded-lg p-6 border border-gray-200 dark:border-white/10">
                <div className="mb-6 text-[#E84D3D]">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 16a4 4 0 1 0 0-8 4 4 0 0 0 0 8z"/>
                    <path d="M12 2v2"/>
                    <path d="M12 20v2"/>
                    <path d="m4.93 4.93 1.41 1.41"/>
                    <path d="m17.66 17.66 1.41 1.41"/>
                    <path d="M2 12h2"/>
                    <path d="M20 12h2"/>
                    <path d="m6.34 17.66-1.41 1.41"/>
                    <path d="m19.07 4.93-1.41 1.41"/>
                  </svg>
                </div>
                <h2 className="text-xl font-semibold mb-3 text-black dark:text-white">Planificación Financiera</h2>
                <p className="text-gray-600 dark:text-white/70 mb-4">
                  Planificación financiera personalizada para alcanzar tus metas
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center">
                    <span className="w-1.5 h-1.5 bg-[#E84D3D] rounded-full mr-2"></span>
                    <span className="text-gray-600 dark:text-white/70">Definición de objetivos financieros</span>
                  </li>
                  <li className="flex items-center">
                    <span className="w-1.5 h-1.5 bg-[#E84D3D] rounded-full mr-2"></span>
                    <span className="text-gray-600 dark:text-white/70">Proyecciones y simulaciones</span>
                  </li>
                  <li className="flex items-center">
                    <span className="w-1.5 h-1.5 bg-[#E84D3D] rounded-full mr-2"></span>
                    <span className="text-gray-600 dark:text-white/70">Optimización fiscal</span>
                  </li>
                </ul>
                <Button asChild variant="outline" className="w-full text-black dark:text-white border-gray-300 dark:border-white/20 hover:bg-gray-100 dark:hover:bg-white/5">
                  <Link href="/planificacion">
                    Planificar mi futuro
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      {/* Footer */}
      <footer className="py-8 border-t border-gray-200 dark:border-white/10 bg-white dark:bg-[#0D1117]">
        <div className="container mx-auto max-w-[1200px] px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-gray-500 dark:text-white/50 text-sm">
              © {new Date().getFullYear()} Singular Bank. Todos los derechos reservados.
            </div>
            <div className="flex gap-4">
              <Link href="/legal" className="text-gray-500 hover:text-gray-700 dark:text-white/50 dark:hover:text-white text-sm">
                Aviso legal
              </Link>
              <Link href="/privacidad" className="text-gray-500 hover:text-gray-700 dark:text-white/50 dark:hover:text-white text-sm">
                Política de privacidad
              </Link>
              <Link href="/cookies" className="text-gray-500 hover:text-gray-700 dark:text-white/50 dark:hover:text-white text-sm">
                Cookies
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
