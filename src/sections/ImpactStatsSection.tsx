import ImpactStat from '../components/ImpactStat'
import { impactStats } from '../data/impactStats'

function ImpactStatsSection() {
  return (
    <section
      aria-label="Kitso-Net impact statistics"
      className="border-y border-primary-100 bg-white"
    >
      <div className="mx-auto grid max-w-[1200px] grid-cols-2 sm:grid-cols-3 lg:grid-cols-6">
        {impactStats.map((stat, index) => (
          <div
            key={stat.label}
            className={`
              border-primary-100
              ${index % 2 !== 0 ? 'border-l' : ''}
              ${index >= 2 ? 'border-t sm:border-t-0' : ''}
              ${index >= 3 ? 'sm:border-t lg:border-t-0' : ''}
              ${index > 0 ? 'lg:border-l' : ''}
            `}
          >
            <ImpactStat stat={stat} />
          </div>
        ))}
      </div>
    </section>
  )
}

export default ImpactStatsSection