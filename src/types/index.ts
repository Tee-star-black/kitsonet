import type { LucideIcon } from 'lucide-react'

export interface NavigationItem {
  label: string
  href: string
}

export interface ImpactStatItem {
  value: string
  label: string
  icon: LucideIcon
}

export interface ProgrammeItem {
  title: string
  description: string
  image: string
  imageAlt: string
  href: string
}