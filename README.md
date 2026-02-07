# Physics Lab - Interactive Physics Learning Platform

Una plataforma educativa moderna para aprender física mediante simulaciones interactivas, gamificación y herramientas pedagógicas avanzadas.

## Características

### Simuladores Interactivos
- **Simulador de Ondas**: Visualiza y controla parámetros de ondas (amplitud, frecuencia, longitud de onda)
- **Simulador de Vectores**: Explora operaciones vectoriales (suma, resta, producto punto, producto cruz)

### Sistema de Gamificación
- Sistema de niveles y puntos
- Badges y logros desbloqueables
- Racha de aprendizaje diario
- Leaderboard global con ranking de estudiantes

### Contenido Educativo Estructurado
- **Trimestre 1**: Matemática Aplicada (Vectores, Escalares, Trigonometría)
- **Trimestre 2**: Análisis Vectorial (Vectores 3D, Productos vectoriales, Mecánica)
- **Trimestre 3**: Ondas y Fenómenos (Movimiento ondulatorio, Sonido, Luz)

### Herramientas Pedagógicas
- Calculadora científica interactiva
- Conversor de unidades
- Referencias de constantes físicas
- Colección de fórmulas importantes

### Seguimiento de Progreso
- Dashboard personalizado con estadísticas
- Análisis detallado de progreso por trimestre y tópico
- Recomendaciones personalizadas

## Estructura del Proyecto

```
app/
├── (authenticated)/          # Rutas protegidas
│   ├── dashboard/           # Dashboard principal
│   ├── simulators/          # Simuladores
│   │   ├── waves/
│   │   └── vectors/
│   ├── achievements/        # Página de logros
│   ├── progress/            # Seguimiento de progreso
│   ├── leaderboard/         # Ranking global
│   ├── tools/               # Herramientas
│   └── trimester/[id]/      # Detalle de trimestre
├── auth/                    # Autenticación
│   ├── login/
│   ├── sign-up/
│   └── error/
├── about/                   # Página acerca de
├── faq/                     # Preguntas frecuentes
└── page.tsx                 # Homepage

components/
├── header.tsx              # Header con navegación
├── trimester-card.tsx      # Tarjeta de trimestre
├── badge-card.tsx          # Tarjeta de badge
├── wave-simulator.tsx      # Componente simulador de ondas
├── vector-simulator.tsx    # Componente simulador de vectores
└── scientific-calculator.tsx # Calculadora científica

lib/
└── supabase/               # Configuración de Supabase
    ├── client.ts
    ├── server.ts
    └── proxy.ts

scripts/
└── 001_create_tables.sql   # Schema de base de datos
```

## Tecnologías Utilizadas

- **Frontend**: Next.js 16, React 19, TypeScript
- **Styling**: Tailwind CSS con tema neon oscuro personalizado
- **Autenticación**: Supabase Auth
- **Base de Datos**: Supabase (PostgreSQL)
- **Canvas**: JavaScript Canvas API para simuladores
- **State Management**: React Hooks, SWR

## Tema Visual

### Paleta de Colores Neon Futurista
- **Fondo**: Deep Blue (`#0f0f23`)
- **Primario**: Purple Neon (`#9370db`)
- **Secundario**: Pink Neon (`#f093fb`)
- **Acentos**: Cyan Neon (`#4facfe`)

### Efectos Visuales
- Glassmorphism en tarjetas
- Neon glow en elementos interactivos
- Animaciones suaves (float, pulse)
- Gradientes por trimestre

## Instalación y Configuración

### Requisitos Previos
- Node.js 18+
- npm o yarn
- Cuenta de Supabase

### Pasos de Instalación

1. Clonar el repositorio
```bash
git clone <repository-url>
cd physics-lab
```

2. Instalar dependencias
```bash
npm install
```

3. Configurar variables de entorno
```bash
# .env.local
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_key
```

4. Configurar base de datos
```bash
# Ejecutar el script SQL en Supabase
psql -d your_database < scripts/001_create_tables.sql
```

5. Ejecutar en desarrollo
```bash
npm run dev
```

La aplicación estará disponible en `http://localhost:3000`

## Características por Completar

- [ ] Integración de ejercicios interactivos con evaluación automática
- [ ] Sistema de notificaciones
- [ ] Exportación de certificados
- [ ] Modo offline para algunos simuladores
- [ ] Integración con plataformas LMS (Moodle, Google Classroom)
- [ ] Versión móvil optimizada
- [ ] Soporte multiidioma

## Seguridad

- Row Level Security (RLS) activado en todas las tablas
- Autenticación segura con Supabase
- Encriptación de datos en tránsito
- Validación de entrada en cliente y servidor

## Rendimiento

- Optimizaciones de Next.js (Code splitting, Image optimization)
- Lazy loading de componentes
- Caching inteligente
- Canvas rendering optimizado para simuladores

## Contribuir

Las contribuciones son bienvenidas. Por favor:
1. Fork el proyecto
2. Crea una rama para tu feature
3. Commit tus cambios
4. Push a la rama
5. Abre un Pull Request

## Licencia

Este proyecto está bajo licencia MIT.

## Contacto

Para preguntas o sugerencias, contacta a: support@physicslab.local

## Agradecimientos

- Inspirado en plataformas educativas modernas
- Simuladores basados en físicas reales y verificadas
- Diseño educativo basado en principios de gamificación
