'use client'

export interface BadgeCardProps {
  name: string
  description: string
  icon: string
  color: string
  earned?: boolean
}

export function BadgeCard({ name, description, icon, color, earned = false }: BadgeCardProps) {
  return (
    <div
      className={`glass-effect rounded-lg p-6 text-center transition-all duration-300 ${
        earned ? 'neon-glow-purple hover:scale-105' : 'opacity-50'
      }`}
    >
      <div className={`text-6xl mb-4 ${earned ? 'animate-float' : 'grayscale'}`}>{icon}</div>
      <h3 className="font-bold text-foreground mb-2 text-lg">{name}</h3>
      <p className="text-sm text-muted-foreground mb-3">{description}</p>
      {earned && <span className={`inline-block px-3 py-1 rounded-full text-xs font-bold text-white ${color}`}>Desbloqueado</span>}
    </div>
  )
}
