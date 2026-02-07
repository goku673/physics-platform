'use client'

import { useEffect, useState } from 'react'
import { Header } from '@/components/header'
import { createClient } from '@/lib/supabase/client'

interface LeaderboardEntry {
  rank: number
  username: string
  level: number
  totalPoints: number
  streak: number
  badge: string
  isCurrentUser?: boolean
}

export default function LeaderboardPage() {
  const [leaderboard, setLeaderboard] = useState<LeaderboardEntry[]>([])
  const [user, setUser] = useState<any>(null)
  const [filter, setFilter] = useState<'all' | 'week' | 'month'>('all')
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

        // Simulated leaderboard data
        const mockLeaderboard: LeaderboardEntry[] = [
          {
            rank: 1,
            username: 'AlexPhysics',
            level: 12,
            totalPoints: 4850,
            streak: 28,
            badge: '👑',
          },
          {
            rank: 2,
            username: 'SarahVectors',
            level: 11,
            totalPoints: 4320,
            streak: 21,
            badge: '🌟',
          },
          {
            rank: 3,
            username: 'JohnWaves',
            level: 10,
            totalPoints: 3950,
            streak: 18,
            badge: '🎯',
          },
          {
            rank: 4,
            username: 'EmilyMath',
            level: 9,
            totalPoints: 3580,
            streak: 14,
            badge: '🚀',
          },
          {
            rank: 5,
            username: 'MarcusScience',
            level: 9,
            totalPoints: 3425,
            streak: 12,
            badge: '⚡',
          },
          {
            rank: 6,
            username: 'SophiaCalculus',
            level: 8,
            totalPoints: 3100,
            streak: 9,
            badge: '💎',
          },
          {
            rank: 7,
            username: 'LiamNewton',
            level: 8,
            totalPoints: 2980,
            streak: 8,
            badge: '🏆',
          },
          {
            rank: 8,
            username: 'OliviaQuantum',
            level: 7,
            totalPoints: 2750,
            streak: 6,
            badge: '⭐',
          },
          {
            rank: 9,
            username: 'NoahForce',
            level: 7,
            totalPoints: 2620,
            streak: 5,
            badge: '🔥',
          },
          {
            rank: 10,
            username: 'IsabellaStar',
            level: 6,
            totalPoints: 2450,
            streak: 4,
            badge: '✨',
          },
          {
            rank: 42,
            username: 'CurrentUser',
            level: 5,
            totalPoints: 1280,
            streak: 3,
            badge: '🌱',
            isCurrentUser: true,
          },
        ]

        setLeaderboard(mockLeaderboard)
      } catch (error) {
        console.error('Error loading leaderboard:', error)
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
            <p className="text-muted-foreground">Cargando clasificación...</p>
          </div>
        </div>
      </>
    )
  }

  const topThree = leaderboard.slice(0, 3)
  const restOfLeaderboard = leaderboard.slice(3)

  return (
    <>
      <Header />
      <main className="min-h-screen bg-background">
        <div className="container mx-auto px-4 py-12">
          {/* Header */}
          <div className="mb-12">
            <h1 className="text-4xl font-bold text-foreground mb-2">Clasificación Global</h1>
            <p className="text-lg text-muted-foreground">Compite con otros estudiantes y sube en el ranking</p>
          </div>

          {/* Filter Tabs */}
          <div className="flex gap-4 mb-12">
            {(['all', 'week', 'month'] as const).map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`px-6 py-2 rounded-lg font-medium transition ${
                  filter === f
                    ? 'bg-primary text-primary-foreground'
                    : 'bg-card text-foreground hover:bg-border'
                }`}
              >
                {f === 'all' && 'Todo el Tiempo'}
                {f === 'week' && 'Esta Semana'}
                {f === 'month' && 'Este Mes'}
              </button>
            ))}
          </div>

          {/* Top 3 Podium */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-foreground mb-8 text-center">Podio</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              {/* Second Place */}
              {topThree[1] && (
                <div className="order-2 md:order-1">
                  <div className="glass-effect rounded-lg p-8 text-center relative">
                    <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-secondary text-secondary-foreground w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg">
                      🥈
                    </div>
                    <p className="text-5xl font-bold gradient-vector bg-clip-text text-transparent mb-2">2</p>
                    <p className="font-bold text-foreground mb-2">{topThree[1].username}</p>
                    <div className="space-y-1 text-sm text-muted-foreground">
                      <p>Nivel {topThree[1].level}</p>
                      <p className="font-bold text-primary">{topThree[1].totalPoints} puntos</p>
                      <p>{topThree[1].streak} días de racha</p>
                    </div>
                  </div>
                </div>
              )}

              {/* First Place */}
              {topThree[0] && (
                <div className="order-1 md:order-2">
                  <div className="glass-effect rounded-lg p-8 text-center relative neon-glow-purple">
                    <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 text-6xl">👑</div>
                    <p className="text-6xl font-bold gradient-math bg-clip-text text-transparent mb-2 pt-6">1</p>
                    <p className="font-bold text-foreground mb-2 text-lg">{topThree[0].username}</p>
                    <div className="space-y-1 text-sm text-muted-foreground">
                      <p>Nivel {topThree[0].level}</p>
                      <p className="font-bold text-primary">{topThree[0].totalPoints} puntos</p>
                      <p>{topThree[0].streak} días de racha</p>
                    </div>
                  </div>
                </div>
              )}

              {/* Third Place */}
              {topThree[2] && (
                <div className="order-3">
                  <div className="glass-effect rounded-lg p-8 text-center relative">
                    <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-accent text-accent-foreground w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg">
                      🥉
                    </div>
                    <p className="text-5xl font-bold gradient-wave bg-clip-text text-transparent mb-2">3</p>
                    <p className="font-bold text-foreground mb-2">{topThree[2].username}</p>
                    <div className="space-y-1 text-sm text-muted-foreground">
                      <p>Nivel {topThree[2].level}</p>
                      <p className="font-bold text-primary">{topThree[2].totalPoints} puntos</p>
                      <p>{topThree[2].streak} días de racha</p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Full Leaderboard */}
          <div className="glass-effect rounded-lg overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-card border-b border-border">
                  <tr>
                    <th className="px-6 py-4 text-left text-sm font-bold text-foreground">Puesto</th>
                    <th className="px-6 py-4 text-left text-sm font-bold text-foreground">Usuario</th>
                    <th className="px-6 py-4 text-left text-sm font-bold text-foreground">Nivel</th>
                    <th className="px-6 py-4 text-left text-sm font-bold text-foreground">Puntos</th>
                    <th className="px-6 py-4 text-left text-sm font-bold text-foreground">Racha</th>
                  </tr>
                </thead>
                <tbody>
                  {restOfLeaderboard.map((entry) => (
                    <tr
                      key={entry.rank}
                      className={`border-b border-border hover:bg-card transition ${
                        entry.isCurrentUser ? 'bg-primary bg-opacity-10' : ''
                      }`}
                    >
                      <td className="px-6 py-4">
                        <span className="font-bold text-lg text-primary">#{entry.rank}</span>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-3">
                          <span className="text-2xl">{entry.badge}</span>
                          <div>
                            <p className="font-bold text-foreground">{entry.username}</p>
                            {entry.isCurrentUser && (
                              <p className="text-xs text-accent font-bold">Tú</p>
                            )}
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <span className="px-3 py-1 rounded-full bg-primary text-primary-foreground text-sm font-bold">
                          Nivel {entry.level}
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        <span className="font-bold text-foreground">{entry.totalPoints}</span>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-2">
                          <span className="text-lg">🔥</span>
                          <span className="font-bold text-secondary">{entry.streak}</span>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Your Stats Card */}
          {user && (
            <div className="mt-12 glass-effect rounded-lg p-8">
              <h3 className="text-2xl font-bold text-foreground mb-6">Tu Posición Actual</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="bg-card rounded-lg p-4 text-center">
                  <p className="text-muted-foreground text-sm mb-2">Tu Puesto</p>
                  <p className="text-4xl font-bold gradient-math bg-clip-text text-transparent">42</p>
                </div>
                <div className="bg-card rounded-lg p-4 text-center">
                  <p className="text-muted-foreground text-sm mb-2">Puntos Necesarios</p>
                  <p className="text-4xl font-bold text-accent">1,220</p>
                </div>
                <div className="bg-card rounded-lg p-4 text-center">
                  <p className="text-muted-foreground text-sm mb-2">Posición Objetivo</p>
                  <p className="text-4xl font-bold text-primary">10</p>
                </div>
                <div className="bg-card rounded-lg p-4 text-center">
                  <p className="text-muted-foreground text-sm mb-2">Racha Actual</p>
                  <p className="text-4xl font-bold text-secondary">3</p>
                </div>
              </div>
              <div className="mt-6 p-4 bg-card rounded-lg border-l-4 border-primary">
                <p className="font-bold text-foreground mb-2">Próximo Nivel:</p>
                <p className="text-muted-foreground text-sm mb-3">
                  Te faltan 1,220 puntos para entrar en el top 10. ¡Sigue completando ejercicios!
                </p>
                <div className="w-full bg-background rounded-full h-2">
                  <div
                    className="gradient-math h-2 rounded-full"
                    style={{ width: '34%' }}
                  ></div>
                </div>
              </div>
            </div>
          )}
        </div>
      </main>
    </>
  )
}
