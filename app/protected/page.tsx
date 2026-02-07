'use client'

import { useEffect, useState } from 'react'
import { createClient } from '@/lib/supabase/client'
import Link from 'next/link'

export default function ProtectedPage() {
  const [user, setUser] = useState<any>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const getUser = async () => {
      const supabase = createClient()
      const {
        data: { user },
      } = await supabase.auth.getUser()

      if (user) {
        setUser(user)
        // Redirect to dashboard after 2 seconds
        setTimeout(() => {
          window.location.href = '/dashboard'
        }, 2000)
      } else {
        window.location.href = '/auth/login'
      }
      setLoading(false)
    }

    getUser()
  }, [])

  if (loading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-2 border-primary border-t-transparent mx-auto mb-4"></div>
          <p className="text-muted-foreground">Configurando tu cuenta...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background flex items-center justify-center">
      <div className="glass-effect rounded-2xl p-12 max-w-md w-full mx-4 text-center">
        <div className="text-6xl mb-6">✓</div>
        <h1 className="text-4xl font-bold text-foreground mb-2">Bienvenido</h1>
        <p className="text-lg text-muted-foreground mb-8">
          Tu email ha sido confirmado exitosamente. Tu cuenta está lista para usar.
        </p>

        <div className="space-y-4">
          <p className="text-muted-foreground">Redirigiendo al dashboard...</p>
          <Link
            href="/dashboard"
            className="inline-block px-8 py-3 rounded-lg bg-primary text-primary-foreground hover:opacity-90 transition font-bold"
          >
            Ir al Dashboard Ahora
          </Link>
        </div>
      </div>
    </div>
  )
}
