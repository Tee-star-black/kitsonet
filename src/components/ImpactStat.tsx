import type { ImpactStatItem } from '../types'

interface ImpactStatProps {
  stat: ImpactStatItem
}

function ImpactStat({ stat }: ImpactStatProps) {
  const Icon = stat.icon

  return (
    <article className="flex flex-col items-center px-5 py-8 text-center">
      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary-50 text-primary-700">
        <Icon size={24} strokeWidth={1.8} aria-hidden="true" />
      </div>

      <p className="mt-4 font-heading text-4xl font-bold text-primary-800">
        {stat.value}
      </p>

      <p className="mt-2 max-w-[150px] text-sm font-semibold leading-5 text-muted">
        {stat.label}
      </p>
    </article>
  )
}

export default ImpactStat