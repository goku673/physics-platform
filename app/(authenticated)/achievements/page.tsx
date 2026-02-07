'use client'

import { useEffect, useState } from 'react'
import { Header } from '@/components/header'
import { BadgeCard } from '@/components/badge-card'
import { createClient } from '@/lib/supabase/client'

export default function AchievementsPage() {
  const [user, setUser] = useState<any>(null)
  const [badges, setBadges] = useState<any[]>([])
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

        // Load badges (simulated data)
        const userBadges = [
          {
            id: '1',
            name: 'Primer Paso',
            description: 'Completa tu primer ejercicio',
            icon: '🚀',
            color: 'gradient-math',
            earned: true,
          },
          {
            id: '2',
            name: 'Matemático',
            description: 'Completa todos los ejercicios del Trimestre 1',
            icon: '📐',
            color: 'gradient-math',
            earned: true,
          },
          {
            id: '3',
            name: 'Vectorista',
            description: 'Domina las operaciones vectoriales',
            icon: '⬆️',
            color: 'gradient-vector',
            earned: true,
          },
          {
            id: '4',
            name: 'Experto en Ondas',
            description: 'Completa todos los ejercicios de ondas',
            icon: '〰️',
            color: 'gradient-wave',
            earned: false,
          },
          {
            id: '5',
            name: 'Racha de Fuego',
            description: 'Mantén una racha de 7 días consecutivos',
            icon: '🔥',
            color: 'bg-red-600',
            earned: false,
          },
          {
            id: '6',
            name: 'Maestro Físico',
            description: 'Alcanza el nivel 10',
            icon: '👑',
            color: 'bg-yellow-600',
            earned: false,
          },
          {
            id: '7',
            name: 'Explorador',
            description: 'Visita todos los simuladores',
            icon: '🧭',
            color: 'bg-blue-600',
            earned: false,
          },
          {
            id: '8',
            name: 'Coleccionista',
            description: 'Desbloquea 5 badges',
            icon: '💎',
            color: 'bg-purple-600',
            earned: false,
          },
        ]

        setBadges(userBadges)
      } catch (error) {
        console.error('Error loading achievements:', error)
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
            <p className="text-muted-foreground">Cargando logros...</p>
          </div>
        </div>
      </>
    )
  }

  const earnedBadges = badges.filter((b) => b.earned)

  return (
    <>
      <Header />
      <main className="min-h-screen bg-background">
        <div className="container mx-auto px-4 py-12">
          {/* Header */}
          <div className="mb-12">
            <h1 className="text-4xl font-bold text-foreground mb-2">Logros y Badges</h1>
            <p className="text-lg text-muted-foreground">
              Desbloquea badges completando desafíos y alcanzando hitos
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-12">
            <div className="glass-effect rounded-lg p-6 text-center">
              <p className="text-muted-foreground text-sm mb-2">Badges Desbloqueados</p>
              <p className="text-4xl font-bold text-primary">{earnedBadges.length}</p>
              <p className="text-xs text-muted-foreground mt-2">de {badges.length}</p>
            </div>
            <div className="glass-effect rounded-lg p-6 text-center">
              <p className="text-muted-foreground text-sm mb-2">Progreso</p>
              <p className="text-4xl font-bold text-accent">{Math.round((earnedBadges.length / badges.length) * 100)}%</p>
              <p className="text-xs text-muted-foreground mt-2">Completado</p>
            </div>
            <div className="glass-effect rounded-lg p-6 text-center">
              <p className="text-muted-foreground text-sm mb-2">Próximo Badge</p>
              <p className="text-2xl font-bold text-secondary">Racha de Fuego</p>
              <p className="text-xs text-muted-foreground mt-2">7 días consecutivos</p>
            </div>
            <div className="glass-effect rounded-lg p-6 text-center">
              <p className="text-muted-foreground text-sm mb-2">Puntos Totales</p>
              <p className="text-4xl font-bold gradient-math bg-clip-text text-transparent">250</p>
              <p className="text-xs text-muted-foreground mt-2">Del sistema</p>
            </div>
          </div>

          {/* Earned Badges Section */}
          {earnedBadges.length > 0 && (
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-foreground mb-6">Badges Desbloqueados</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {earnedBadges.map((badge) => (
                  <BadgeCard
                    key={badge.id}
                    name={badge.name}
                    description={badge.description}
                    icon={badge.icon}
                    color={badge.color}
                    earned={true}
                  />
                ))}
              </div>
            </section>
          )}

          {/* Locked Badges Section */}
          <section>
            <h2 className="text-2xl font-bold text-foreground mb-6">Próximos Desafíos</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {badges
                .filter((b) => !b.earned)
                .map((badge) => (
                  <BadgeCard
                    key={badge.id}
                    name={badge.name}
                    description={badge.description}
                    icon={badge.icon}
                    color={badge.color}
                    earned={false}
                  />
                ))}
            </div>
          </section>

          {/* Badge Information */}
          <section className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="glass-effect rounded-lg p-8">
              <h3 className="text-xl font-bold text-foreground mb-4">Sistema de Badges</h3>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Desbloquea badges completando actividades y alcanzando hitos. Cada badge representa un logro específico
                  en tu trayecto de aprendizaje.
                </p>
                <div>
                  <p className="font-bold text-foreground mb-2">Cómo ganar badges:</p>
                  <ul className="list-disc list-inside space-y-1">
                    <li>Completar ejercicios y simuladores</li>
                    <li>Mantener rachas de aprendizaje diario</li>
                    <li>Alcanzar nuevos niveles</li>
                    <li>Dominar tópicos específicos</li>
                    <li>Explorar todas las características</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="glass-effect rounded-lg p-8">
              <h3 className="text-xl font-bold text-foreground mb-4">Tu Progreso</h3>
              <div className="space-y-6">
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <p className="text-foreground font-semibold">Trimestre 1</p>
                    <p className="text-accent font-bold">70%</p>
                  </div>
                  <div className="w-full bg-card rounded-full h-3">
                    <div className="gradient-math h-3 rounded-full" style={{ width: '70%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <p className="text-foreground font-semibold">Trimestre 2</p>
                    <p className="text-accent font-bold">40%</p>
                  </div>
                  <div className="w-full bg-card rounded-full h-3">
                    <div className="gradient-vector h-3 rounded-full" style={{ width: '40%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <p className="text-foreground font-semibold">Trimestre 3</p>
                    <p className="text-accent font-bold">0%</p>
                  </div>
                  <div className="w-full bg-card rounded-full h-3">
                    <div className="gradient-wave h-3 rounded-full" style={{ width: '0%' }}></div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
    </>
  )
}
