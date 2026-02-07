'use client'

import { useParams } from 'next/navigation'
import { Header } from '@/components/header'

const trimesterContent: Record<
  string,
  {
    title: string
    description: string
    gradient: string
    icon: string
    topics: Array<{ name: string; description: string; exercises: number; progress: number }>
  }
> = {
  '1': {
    title: 'Matemática Aplicada',
    description:
      'Fundamentos matemáticos esenciales para la física. Aprenderás sobre vectores, escalares, trigonometría y operaciones matemáticas básicas.',
    gradient: 'gradient-math',
    icon: '📐',
    topics: [
      {
        name: 'Vectores Básicos',
        description: 'Introducción a los vectores, componentes y representación gráfica',
        exercises: 12,
        progress: 100,
      },
      {
        name: 'Escalares y Magnitudes',
        description: 'Cantidades escalares y sus operaciones básicas',
        exercises: 12,
        progress: 83,
      },
      {
        name: 'Trigonometría',
        description: 'Funciones trigonométricas y aplicaciones en física',
        exercises: 12,
        progress: 58,
      },
      {
        name: 'Operaciones Vectoriales',
        description: 'Suma, resta y multiplicación de vectores',
        exercises: 10,
        progress: 50,
      },
    ],
  },
  '2': {
    title: 'Análisis Vectorial',
    description:
      'Análisis profundo de vectores en tres dimensiones y sus aplicaciones en mecánica. Dominarás el producto punto y producto cruz.',
    gradient: 'gradient-vector',
    icon: '⬆️',
    topics: [
      {
        name: 'Vectores 3D',
        description: 'Trabajo con vectores en el espacio tridimensional',
        exercises: 12,
        progress: 50,
      },
      {
        name: 'Producto Punto',
        description: 'Producto escalar y sus interpretaciones geométricas',
        exercises: 10,
        progress: 40,
      },
      {
        name: 'Producto Cruz',
        description: 'Producto vectorial y sus aplicaciones',
        exercises: 10,
        progress: 20,
      },
      {
        name: 'Mecánica Básica',
        description: 'Introducción a las leyes de Newton y movimiento',
        exercises: 12,
        progress: 0,
      },
    ],
  },
  '3': {
    title: 'Ondas y Fenómenos',
    description:
      'Exploración del movimiento ondulatorio, propagación de ondas, sonido y luz. Comprenderás los fenómenos naturales a través de las ondas.',
    gradient: 'gradient-wave',
    icon: '〰️',
    topics: [
      {
        name: 'Introducción a Ondas',
        description: 'Conceptos fundamentales del movimiento ondulatorio',
        exercises: 12,
        progress: 0,
      },
      {
        name: 'Movimiento Ondulatorio',
        description: 'Análisis profundo de cómo se propagan las ondas',
        exercises: 12,
        progress: 0,
      },
      {
        name: 'Sonido y Luz',
        description: 'Propiedades del sonido y la luz como ondas',
        exercises: 12,
        progress: 0,
      },
      {
        name: 'Fenómenos Naturales',
        description: 'Aplicaciones de ondas en fenómenos naturales',
        exercises: 10,
        progress: 0,
      },
    ],
  },
}

export default function TrimesterPage() {
  const params = useParams()
  const trimesterId = params.id as string
  const trimester = trimesterContent[trimesterId] || trimesterContent['1']

  const totalExercises = trimester.topics.reduce((sum, t) => sum + t.exercises, 0)
  const avgProgress = Math.round(trimester.topics.reduce((sum, t) => sum + t.progress, 0) / trimester.topics.length)

  return (
    <>
      <Header />
      <main className="min-h-screen bg-background">
        <div className="container mx-auto px-4 py-12">
          {/* Header */}
          <div className="glass-effect rounded-2xl p-12 mb-12 relative overflow-hidden">
            <div className={`absolute inset-0 opacity-20 ${trimester.gradient}`}></div>
            <div className="relative z-10">
              <div className="flex items-start justify-between mb-6">
                <div>
                  <p className="text-lg text-muted-foreground mb-2">
                    Trimestre {trimesterId}
                  </p>
                  <h1 className="text-5xl font-bold text-foreground mb-4">{trimester.title}</h1>
                  <p className="text-lg text-muted-foreground max-w-2xl">
                    {trimester.description}
                  </p>
                </div>
                <div className="text-7xl">{trimester.icon}</div>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 mt-8">
                <div className="bg-card bg-opacity-50 rounded-lg p-4">
                  <p className="text-muted-foreground text-sm mb-2">Total de Ejercicios</p>
                  <p className="text-3xl font-bold text-primary">{totalExercises}</p>
                </div>
                <div className="bg-card bg-opacity-50 rounded-lg p-4">
                  <p className="text-muted-foreground text-sm mb-2">Progreso Promedio</p>
                  <p className="text-3xl font-bold text-accent">{avgProgress}%</p>
                </div>
                <div className="bg-card bg-opacity-50 rounded-lg p-4">
                  <p className="text-muted-foreground text-sm mb-2">Tópicos</p>
                  <p className="text-3xl font-bold text-secondary">{trimester.topics.length}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Topics */}
          <div className="space-y-6">
            {trimester.topics.map((topic, idx) => (
              <div key={idx} className="glass-effect rounded-lg p-8 group hover:neon-glow-purple transition-all duration-300">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-foreground mb-2">{topic.name}</h3>
                    <p className="text-muted-foreground mb-4">{topic.description}</p>
                    <div className="flex items-center gap-4">
                      <div className="bg-card rounded-lg px-3 py-1 text-sm font-medium text-foreground">
                        {topic.exercises} ejercicios
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-4xl font-bold gradient-math bg-clip-text text-transparent mb-2">
                      {topic.progress}%
                    </p>
                    <span className="inline-block px-3 py-1 rounded-full text-xs font-bold text-white bg-primary">
                      {topic.progress === 100 ? 'Completado' : 'En progreso'}
                    </span>
                  </div>
                </div>

                {/* Progress Bar */}
                <div className="w-full bg-card rounded-full h-3 mb-4">
                  <div
                    className={`h-3 rounded-full transition-all duration-300 ${trimester.gradient}`}
                    style={{ width: `${topic.progress}%` }}
                  ></div>
                </div>

                {/* Action Button */}
                <button className="mt-4 px-6 py-2 rounded-lg bg-primary text-primary-foreground hover:opacity-90 transition font-medium group-hover:neon-glow-purple">
                  {topic.progress === 0 ? 'Comenzar' : 'Continuar'} →
                </button>
              </div>
            ))}
          </div>

          {/* Learning Path */}
          <section className="mt-12 glass-effect rounded-lg p-8">
            <h3 className="text-2xl font-bold text-foreground mb-6">Ruta de Aprendizaje Recomendada</h3>
            <div className="space-y-4">
              {trimester.topics.map((topic, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-4 p-4 bg-card rounded-lg"
                >
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-white ${
                    topic.progress === 100 ? 'bg-green-600' : topic.progress > 0 ? 'bg-primary' : 'bg-muted'
                  }`}>
                    {idx + 1}
                  </div>
                  <div className="flex-1">
                    <p className="font-bold text-foreground">{topic.name}</p>
                    <p className="text-sm text-muted-foreground">{topic.description}</p>
                  </div>
                  <div className="text-right">
                    <p className="font-bold text-foreground">{topic.progress}%</p>
                    <p className="text-xs text-muted-foreground">{topic.exercises} ejercicios</p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </main>
    </>
  )
}
