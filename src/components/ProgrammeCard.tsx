import { ArrowUpRight } from 'lucide-react'
import type { ProgrammeItem } from '../types'

interface ProgrammeCardProps {
  programme: ProgrammeItem
  index: number
}

function ProgrammeCard({ programme, index }: ProgrammeCardProps) {
  return (
    <article className="group overflow-hidden rounded-[1.75rem] border border-primary-100 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl">
      <div className="relative overflow-hidden">
        <img
          src={programme.image}
          alt={programme.imageAlt}
          className="aspect-[4/3] w-full object-cover transition duration-500 group-hover:scale-105"
        />

        <div className="absolute left-5 top-5 flex h-11 w-11 items-center justify-center rounded-full bg-primary-800 font-heading text-lg font-bold text-white shadow-lg">
          {index + 1}
        </div>
      </div>

      <div className="p-6 sm:p-7">
        <h3 className="font-heading text-2xl font-bold leading-snug text-primary-800">
          {programme.title}
        </h3>

        <p className="mt-4 leading-7 text-muted">
          {programme.description}
        </p>

        <a
          href={programme.href}
          className="mt-6 inline-flex items-center gap-2 font-semibold text-primary-700 transition hover:text-accent-700"
        >
          Learn more
          <ArrowUpRight
            size={18}
            aria-hidden="true"
            className="transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          />
        </a>
      </div>
    </article>
  )
}

export default ProgrammeCard