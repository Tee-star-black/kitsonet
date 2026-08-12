import {
  HeartHandshake,
  Home,
  Users,
  UserRound,
  HandHeart,
  Activity,
} from 'lucide-react'

import type { ImpactStatItem } from '../types'

export const impactStats: ImpactStatItem[] = [
  {
    value: '23',
    label: 'Years of Service',
    icon: HeartHandshake,
  },
  {
    value: '155',
    label: 'Home-Based Care Beneficiaries',
    icon: Home,
  },
  {
    value: '60',
    label: 'Service Centre Beneficiaries',
    icon: Users,
  },
  {
    value: '12',
    label: 'Caregivers',
    icon: UserRound,
  },
  {
    value: '13',
    label: 'Volunteers',
    icon: HandHeart,
  },
  {
    value: '5',
    label: 'Health Promoters',
    icon: Activity,
  },
]