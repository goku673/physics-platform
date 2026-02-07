'use client'

import { useEffect, useState } from 'react'
import { Header } from '@/components/header'
import { TrimesterCard } from '@/components/trimester-card'
import { createClient } from '@/lib/supabase/client'

export default function DashboardPage() {
  const [user, setUser] = useState<any>(null)
  const [profile, setProfile] = useState<any>(null)
  const [loading, setLoading] = useState(true)
  const supabase = createClient()

  useEffect(() => {
    const loadUserData = async () => {
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
      } catch (error) {
        console.error('Error loading user data:', error)
      } finally {
        setLoading(false)
      }
    }

    loadUserData()
  }, [])

  const trimesters = [
    {
      trimester: 1,
      title: 'Matemática Aplicada',
      description: 'Fundamentos matemáticos para la física',
      topics: ['Vectores', 'Escalares', 'Trigonometría'],
      gradient: 'gradient-math',
      icon: '📐',
      progress: 45,
    },
    {
      trimester: 2,
      title: 'Análisis Vectorial',
      description: 'Movimiento y fuerzas en el espacio',
      topics: ['Vectores 3D', 'Operaciones', 'Mecánica'],
      gradient: 'gradient-vector',
      icon: '⬆️',
      progress: 30,
    },
    {
      trimester: 3,
      title: 'Ondas y Fenómenos',
      description: 'Movimiento ondulatorio y propagación',
      topics: ['Ondas', 'Sonido', 'Luz'],
      gradient: 'gradient-wave',
      icon: '〰️',
      progress: 0,
    },
  ]

  if (loading) {
    return (
      <>
        <Header />
        <div className="min-h-screen bg-background flex items-center justify-center">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-2 border-primary border-t-transparent mx-auto mb-4"></div>
            <p className="text-muted-foreground">Cargando...</p>
          </div>
        </div>
      </>
    )
  }

  return (
    <>
      <Header />
      <main className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="container mx-auto px-4 py-12">
          <div className="glass-effect rounded-2xl p-8 mb-12 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-40 h-40 gradient-math opacity-20 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-40 h-40 gradient-wave opacity-20 rounded-full blur-3xl"></div>

            <div className="relative z-10">
              <h2 className="text-4xl font-bold text-foreground mb-2">
                ¡Bienvenido, {profile?.username || 'Estudiante'}!
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                Explora los fascinantes mundos de la física a través de simulaciones interactivas
              </p>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 mt-8">
                <div className="bg-card rounded-lg p-4">
                  <p className="text-muted-foreground text-sm mb-1">Nivel</p>
                  <p className="text-3xl font-bold text-primary">{profile?.level || 1}</p>
                </div>
                <div className="bg-card rounded-lg p-4">
                  <p className="text-muted-foreground text-sm mb-1">Puntos Totales</p>
                  <p className="text-3xl font-bold text-accent">{profile?.total_points || 0}</p>
                </div>
                <div className="bg-card rounded-lg p-4">
                  <p className="text-muted-foreground text-sm mb-1">Racha</p>
                  <p className="text-3xl font-bold text-secondary">{profile?.streak || 0} días</p>
                </div>
              </div>
            </div>
          </div>

          {/* Trimesters */}
          <div>
            <h3 className="text-2xl font-bold text-foreground mb-6">Trimestres Disponibles</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {trimesters.map((trimester) => (
                <TrimesterCard key={trimester.trimester} {...trimester} />
              ))}
            </div>
          </div>

          {/* Quick Actions */}
          <section className="mt-12">
            <h3 className="text-2xl font-bold text-foreground mb-6">Acciones Rápidas</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <a
                href="/simulators/waves"
                className="glass-effect rounded-lg p-6 hover:neon-glow-purple transition-all duration-300 group cursor-pointer"
              >
                <div className="flex items-center gap-4">
                  <div className="text-4xl">🧪</div>
                  <div>
                    <h4 className="font-bold text-foreground group-hover:text-primary transition">
                      Simulador de Ondas
                    </h4>
                    <p className="text-sm text-muted-foreground">Explora el movimiento ondulatorio</p>
                  </div>
                </div>
              </a>
              <a
                href="/simulators/vectors"
                className="glass-effect rounded-lg p-6 hover:neon-glow-cyan transition-all duration-300 group cursor-pointer"
              >
                <div className="flex items-center gap-4">
                  <div className="text-4xl">📊</div>
                  <div>
                    <h4 className="font-bold text-foreground group-hover:text-accent transition">
                      Análisis de Vectores
                    </h4>
                    <p className="text-sm text-muted-foreground">Visualiza operaciones vectoriales</p>
                  </div>
                </div>
              </a>
            </div>
          </section>
        </section>
      </main>
    </>
  )
}
