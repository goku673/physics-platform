'use client'

import { useEffect, useState } from 'react'
import { Header } from '@/components/header'
import { createClient } from '@/lib/supabase/client'

interface ProgressData {
  trimester: number
  title: string
  topics: Array<{
    name: string
    completed: number
    total: number
    score: number
  }>
}

export default function ProgressPage() {
  const [user, setUser] = useState<any>(null)
  const [profile, setProfile] = useState<any>(null)
  const [progressData, setProgressData] = useState<ProgressData[]>([])
  const [loading, setLoading] = useState(true)
  const supabase = createClient()

  useEffect(() => {
    const loadData = async () => {
      try {
        const {
          data: { user },
        } = await supabase.auth.getUser()

        if (!user) {
          window.location.href = '/auth/login'
          return
        }

        setUser(user)

        // Load profile
        const { data: profileData } = await supabase.from('profiles').select('*').eq('id', user.id).single()
        setProfile(profileData)

        // Simulated progress data
        const data: ProgressData[] = [
          {
            trimester: 1,
            title: 'Matemática Aplicada',
            topics: [
              { name: 'Vectores Básicos', completed: 12, total: 12, score: 95 },
              { name: 'Escalares y Magnitudes', completed: 10, total: 12, score: 85 },
              { name: 'Trigonometría', completed: 7, total: 12, score: 72 },
              { name: 'Operaciones Vectoriales', completed: 5, total: 10, score: 68 },
            ],
          },
          {
            trimester: 2,
            title: 'Análisis Vectorial',
            topics: [
              { name: 'Vectores 3D', completed: 6, total: 12, score: 65 },
              { name: 'Producto Punto', completed: 4, total: 10, score: 58 },
              { name: 'Producto Cruz', completed: 2, total: 10, score: 40 },
              { name: 'Mecánica Básica', completed: 0, total: 12, score: 0 },
            ],
          },
          {
            trimester: 3,
            title: 'Ondas y Fenómenos',
            topics: [
              { name: 'Introducción a Ondas', completed: 0, total: 12, score: 0 },
              { name: 'Movimiento Ondulatorio', completed: 0, total: 12, score: 0 },
              { name: 'Sonido y Luz', completed: 0, total: 12, score: 0 },
              { name: 'Fenómenos Naturales', completed: 0, total: 10, score: 0 },
            ],
          },
        ]

        setProgressData(data)
      } catch (error) {
        console.error('Error loading progress data:', error)
      } finally {
        setLoading(false)
      }
    }

    loadData()
  }, [])

  if (loading) {
    return (
      <>
        <Header />
        <div className="min-h-screen bg-background flex items-center justify-center">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-2 border-primary border-t-transparent mx-auto mb-4"></div>
            <p className="text-muted-foreground">Cargando progreso...</p>
          </div>
        </div>
      </>
    )
  }

  const calculateTrimesterProgress = (topics: ProgressData['topics']) => {
    const totalCompleted = topics.reduce((sum, topic) => sum + topic.completed, 0)
    const total = topics.reduce((sum, topic) => sum + topic.total, 0)
    return Math.round((totalCompleted / total) * 100)
  }

  const calculateAverageScore = (topics: ProgressData['topics']) => {
    const completedTopics = topics.filter((t) => t.completed > 0)
    if (completedTopics.length === 0) return 0
    const avgScore = completedTopics.reduce((sum, topic) => sum + topic.score, 0) / completedTopics.length
    return Math.round(avgScore)
  }

  const overallProgress = Math.round(
    progressData.reduce((sum, t) => sum + calculateTrimesterProgress(t.topics), 0) / progressData.length
  )

  return (
    <>
      <Header />
      <main className="min-h-screen bg-background">
        <div className="container mx-auto px-4 py-12">
          {/* Header */}
          <div className="mb-12">
            <h1 className="text-4xl font-bold text-foreground mb-2">Mi Progreso</h1>
            <p className="text-lg text-muted-foreground">
              Visualiza tu avance en todos los trimestres y tópicos
            </p>
          </div>

          {/* Overall Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-12">
            <div className="glass-effect rounded-lg p-6 text-center">
              <p className="text-muted-foreground text-sm mb-2">Progreso General</p>
              <p className="text-4xl font-bold gradient-math bg-clip-text text-transparent">{overallProgress}%</p>
              <p className="text-xs text-muted-foreground mt-2">Completado</p>
            </div>
            <div className="glass-effect rounded-lg p-6 text-center">
              <p className="text-muted-foreground text-sm mb-2">Nivel Actual</p>
              <p className="text-4xl font-bold text-primary">{profile?.level || 1}</p>
              <p className="text-xs text-muted-foreground mt-2">
                {Math.round((profile?.total_points || 0) / 100)} puntos
              </p>
            </div>
            <div className="glass-effect rounded-lg p-6 text-center">
              <p className="text-muted-foreground text-sm mb-2">Ejercicios Completados</p>
              <p className="text-4xl font-bold text-accent">
                {progressData.reduce(
                  (sum, t) => sum + t.topics.reduce((s, top) => s + top.completed, 0),
                  0
                )}
              </p>
              <p className="text-xs text-muted-foreground mt-2">Total</p>
            </div>
            <div className="glass-effect rounded-lg p-6 text-center">
              <p className="text-muted-foreground text-sm mb-2">Racha Actual</p>
              <p className="text-4xl font-bold text-secondary">{profile?.streak || 0}</p>
              <p className="text-xs text-muted-foreground mt-2">días consecutivos</p>
            </div>
          </div>

          {/* Trimester Progress */}
          <div className="space-y-8">
            {progressData.map((trimester) => (
              <div key={trimester.trimester} className="glass-effect rounded-lg p-8">
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <h2 className="text-2xl font-bold text-foreground">Trimestre {trimester.trimester}</h2>
                    <p className="text-muted-foreground">{trimester.title}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-3xl font-bold gradient-wave bg-clip-text text-transparent">
                      {calculateTrimesterProgress(trimester.topics)}%
                    </p>
                    <p className="text-sm text-muted-foreground">Completado</p>
                  </div>
                </div>

                {/* Overall Trimester Progress Bar */}
                <div className="mb-8">
                  <div className="w-full bg-card rounded-full h-3">
                    <div
                      className="gradient-wave h-3 rounded-full transition-all duration-300"
                      style={{ width: `${calculateTrimesterProgress(trimester.topics)}%` }}
                    ></div>
                  </div>
                </div>

                {/* Topics */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {trimester.topics.map((topic, idx) => (
                    <div key={idx} className="bg-card rounded-lg p-6">
                      <div className="flex items-start justify-between mb-3">
                        <div>
                          <h4 className="font-bold text-foreground text-lg mb-1">{topic.name}</h4>
                          <p className="text-sm text-muted-foreground">
                            {topic.completed} de {topic.total} ejercicios
                          </p>
                        </div>
                        {topic.completed > 0 && (
                          <span className="px-2 py-1 rounded bg-primary text-primary-foreground text-sm font-bold">
                            {topic.score}%
                          </span>
                        )}
                      </div>

                      {/* Progress Bar */}
                      <div className="w-full bg-background rounded-full h-2 mb-3">
                        <div
                          className="gradient-math h-2 rounded-full transition-all duration-300"
                          style={{ width: `${Math.round((topic.completed / topic.total) * 100)}%` }}
                        ></div>
                      </div>

                      {/* Stats */}
                      <div className="flex justify-between text-xs text-muted-foreground">
                        <span>{Math.round((topic.completed / topic.total) * 100)}% completado</span>
                        {topic.score > 0 && <span>Puntuación: {topic.score}%</span>}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Trimester Summary */}
                <div className="mt-6 pt-6 border-t border-border">
                  <div className="grid grid-cols-3 gap-4 text-center">
                    <div>
                      <p className="text-muted-foreground text-sm mb-1">Promedio</p>
                      <p className="text-2xl font-bold text-primary">{calculateAverageScore(trimester.topics)}%</p>
                    </div>
                    <div>
                      <p className="text-muted-foreground text-sm mb-1">Completados</p>
                      <p className="text-2xl font-bold text-accent">
                        {trimester.topics.reduce((sum, t) => sum + t.completed, 0)}
                      </p>
                    </div>
                    <div>
                      <p className="text-muted-foreground text-sm mb-1">Totales</p>
                      <p className="text-2xl font-bold text-secondary">
                        {trimester.topics.reduce((sum, t) => sum + t.total, 0)}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Learning Recommendations */}
          <section className="mt-12 glass-effect rounded-lg p-8">
            <h3 className="text-2xl font-bold text-foreground mb-6">Recomendaciones</h3>
            <div className="space-y-4">
              <div className="bg-card rounded-lg p-4 border-l-4 border-primary">
                <p className="font-bold text-foreground mb-1">Próximo Paso</p>
                <p className="text-muted-foreground text-sm">
                  Has completado el 70% del Trimestre 1. Continúa con los ejercicios de Trigonometría para consolidar
                  tus conocimientos.
                </p>
              </div>
              <div className="bg-card rounded-lg p-4 border-l-4 border-accent">
                <p className="font-bold text-foreground mb-1">Área de Mejora</p>
                <p className="text-muted-foreground text-sm">
                  Los Productos Cruz necesitan más práctica. Intenta completar los ejercicios del Trimestre 2 antes de
                  continuar.
                </p>
              </div>
              <div className="bg-card rounded-lg p-4 border-l-4 border-secondary">
                <p className="font-bold text-foreground mb-1">Logro Cercano</p>
                <p className="text-muted-foreground text-sm">
                  Te falta completar 5 ejercicios para desbloquear el badge "Matemático". ¡Casi lo logras!
                </p>
              </div>
            </div>
          </section>
        </div>
      </main>
    </>
  )
}
