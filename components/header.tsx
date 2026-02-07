'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { createClient } from '@/lib/supabase/client'

export function Header() {
  const [user, setUser] = useState<any>(null)
  const supabase = createClient()

  useEffect(() => {
    const getUser = async () => {
      const {
        data: { user },
      } = await supabase.auth.getUser()
      setUser(user)
    }
    getUser()
  }, [])

  const handleLogout = async () => {
    await supabase.auth.signOut()
    window.location.href = '/auth/login'
  }

  return (
    <header className="glass-effect sticky top-0 z-50 border-b border-border">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <div className="gradient-math p-2 rounded-lg">
            <span className="text-xl font-bold text-white">⚛️</span>
          </div>
          <div>
            <h1 className="text-xl font-bold text-foreground">Physics Lab</h1>
            <p className="text-xs text-muted-foreground">Interactive Learning</p>
          </div>
        </Link>

        <nav className="hidden md:flex items-center gap-6">
          {user && (
            <>
              <Link href="/dashboard" className="text-foreground hover:text-primary transition text-sm">
                Dashboard
              </Link>
              <Link href="/progress" className="text-foreground hover:text-primary transition text-sm">
                Progress
              </Link>
              <Link href="/achievements" className="text-foreground hover:text-primary transition text-sm">
                Logros
              </Link>
              <Link href="/leaderboard" className="text-foreground hover:text-primary transition text-sm">
                Ranking
              </Link>
              <Link href="/tools" className="text-foreground hover:text-primary transition text-sm">
                Herramientas
              </Link>
            </>
          )}
        </nav>

        <div className="flex items-center gap-4">
          {user ? (
            <>
              <span className="text-sm text-muted-foreground hidden md:inline">{user.email}</span>
              <button
                onClick={handleLogout}
                className="px-4 py-2 rounded-lg bg-primary text-primary-foreground hover:opacity-90 transition text-sm font-medium"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link
                href="/auth/login"
                className="px-4 py-2 rounded-lg text-primary hover:bg-primary hover:bg-opacity-10 transition text-sm font-medium"
              >
                Login
              </Link>
              <Link
                href="/auth/sign-up"
                className="px-4 py-2 rounded-lg bg-primary text-primary-foreground hover:opacity-90 transition text-sm font-medium"
              >
                Sign Up
              </Link>
            </>
          )}
        </div>
      </div>
    </header>
  )
}
