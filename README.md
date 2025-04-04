# Portfolio Creator

<p align="center">
  Una plataforma moderna para crear y gestionar portfolios de inversión personalizados.
</p>

## Características

- **Creación guiada de portfolios**: Un asistente paso a paso que te lleva a través del proceso completo de creación de un portfolio.
- **Evaluación de riesgo**: Determina tu perfil de inversión mediante un cuestionario personalizado.
- **Selección de empresas**: Explora y filtra empresas por sector y características para incluir en tu portfolio.
- **Distribución de activos**: Asigna porcentajes a cada activo para equilibrar riesgo y rendimiento.
- **Dashboard patrimonial**: Visualización completa de tu patrimonio con gráficos interactivos y animados.
- **Métricas de riesgo**: Análisis detallado de la volatilidad, drawdown máximo, ratio de Sharpe y más.
- **Interfaz moderna**: Construida con Next.js y diseñada con Tailwind CSS y componentes de shadcn/ui.
- **Autenticación segura**: Gestión de usuarios mediante Supabase Auth.
- **Base de datos en la nube**: Almacenamiento persistente con Supabase.
- **Animaciones**: Gráficos y elementos de UI con animaciones fluidas mediante Framer Motion.

## Tecnologías

- **Frontend**: Next.js App Router, React, TypeScript
- **Estilo**: Tailwind CSS, shadcn/ui
- **Autenticación**: Supabase Auth
- **Base de datos**: Supabase
- **Estado**: Zustand, React Query
- **Formularios**: React Hook Form, Zod
- **UI/UX**: Framer Motion, Lucide icons, tailwindcss-animate
- **Gráficos**: SVG nativos animados con Framer Motion

## Estructura del proyecto

```
portfolio-creator/
├── app/                    # Estructura de la aplicación Next.js App Router
│   ├── api/                # Endpoints de API
│   ├── auth/               # Rutas de autenticación
│   ├── crear-portfolio/    # Página de creación de portfolios
│   ├── portfolios/         # Página de visualización de portfolios
│   ├── patrimonio/         # Sección de gestión patrimonial
│   │   ├── dashboard/      # Dashboard con gráficos animados
│   │   ├── activos/        # Gestión de activos
│   │   ├── analisis/       # Análisis de rendimiento
│   │   └── planificacion/  # Planificación financiera
│   └── ...                 # Otras páginas y layouts
├── components/             # Componentes reutilizables
│   ├── portfolio-wizard/   # Componentes del asistente de creación
│   ├── ui/                 # Componentes UI básicos (shadcn/ui)
│   └── ...                 # Otros componentes
├── lib/                    # Utilidades y lógica compartida
├── hooks/                  # Hooks de React personalizados
├── public/                 # Archivos estáticos
└── ...                     # Archivos de configuración
```

## Cómo empezar

1. Clona este repositorio:
   ```bash
   git clone <url-repositorio>
   cd portfolio-creator
   ```

2. Instala las dependencias:
   ```bash
   npm install
   ```

3. Configura las variables de entorno:
   - Crea un archivo `.env.local` basado en `.env.example`
   - Configura tus credenciales de Supabase

4. Inicia el servidor de desarrollo:
   ```bash
   npm run dev
   ```

5. Abre [http://localhost:3000](http://localhost:3000) en tu navegador para ver la aplicación.

## Proceso de creación de portfolio

El asistente de creación de portfolio guía a los usuarios a través de varios pasos:

1. **Información básica**: Nombra tu portfolio y establece objetivos.
2. **Evaluación de riesgo**: Responde preguntas para determinar tu perfil de riesgo.
3. **Selección de empresas**: Explora y selecciona empresas para incluir en tu portfolio.
4. **Asignación de porcentajes**: Define cuánto invertir en cada empresa seleccionada.
5. **Resumen y confirmación**: Revisa y confirma tu portfolio antes de guardarlo.

## Dashboard de Patrimonio

El Dashboard de Patrimonio ofrece una visión integral de tus activos e inversiones:

1. **Resumen global**: Visualización del valor total del patrimonio y su evolución.
2. **Distribución por activos**: Gráfico interactivo con la distribución porcentual entre diferentes clases de activos.
3. **Exposición por divisa**: Análisis de exposición a diferentes monedas con barras de progreso animadas.
4. **Métricas de riesgo**: Indicadores clave como volatilidad, ratio de Sharpe, drawdown máximo y beta.
5. **Evolución temporal**: Gráfico interactivo con la evolución del patrimonio a lo largo del tiempo.
6. **Listado de activos**: Tabla detallada con todos los activos, su valoración y rendimiento.

Todas las visualizaciones incluyen animaciones fluidas que mejoran la experiencia de usuario y la comprensión de los datos, implementadas con Framer Motion y SVG nativos.

## Desarrollo

Para contribuir al proyecto, sigue estos pasos:

1. Crea una rama para tu función o corrección:
   ```bash
   git checkout -b nombre-caracteristica
   ```

2. Haz tus cambios y realiza commits:
   ```bash
   git commit -m "Descripción de los cambios"
   ```

3. Envía tu rama y crea un pull request:
   ```bash
   git push origin nombre-caracteristica
   ```

## Licencia

Este proyecto está licenciado bajo la licencia MIT.
