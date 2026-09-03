import { ArrowUpRight } from 'lucide-react'
import type { ProgrammeItem } from '../types'

interface ProgrammeCardProps {
  programme: ProgrammeItem
  index: number
}

function ProgrammeCard({ programme, index }: ProgrammeCardProps) {
  return (
    <article className="group relative overflow-hidden border border-primary-100/80 bg-white/90 shadow-[0_18px_50px_rgba(15,23,42,0.08)] backdrop-blur-sm transition duration-500 hover:-translate-y-1 hover:border-primary-300 hover:shadow-[0_24px_70px_rgba(15,23,42,0.14)]">
      <div className="relative overflow-hidden border-b border-primary-100/80 bg-primary-950">
        <img
          src={programme.image}
          alt={programme.imageAlt}
          className="aspect-[16/10] w-full object-cover transition duration-700 group-hover:scale-[1.035] group-hover:opacity-95"
        />

        <div className="absolute inset-x-0 bottom-0 h-px bg-white/40" />

        <div className="absolute left-0 top-0 border-b border-r border-white/25 bg-primary-950/90 px-4 py-3 font-mono text-xs font-semibold tracking-[0.18em] text-white backdrop-blur-md">
          0{index + 1}
        </div>

        <div className="absolute right-0 top-0 h-14 w-14 border-b border-l border-white/20">
          <span className="absolute right-3 top-3 h-2 w-2 bg-accent-400 shadow-[0_0_18px_rgba(251,191,36,0.9)]" />
        </div>
      </div>

      <div className="relative p-6 text-center sm:p-8 sm:text-left">
        <div className="absolute left-0 top-0 h-full w-px bg-primary-100 transition duration-500 group-hover:bg-primary-300" />

        <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.2em] text-primary-500">
          Kitso-Net Programme
        </p>

        <h3 className="font-heading text-2xl font-bold leading-snug text-primary-900 sm:text-[1.7rem]">
          {programme.title}
        </h3>

        <p className="mx-auto mt-4 max-w-xl leading-7 text-muted sm:mx-0">
          {programme.description}
        </p>

        <div className="mt-7 flex flex-col items-center justify-center gap-4 border-t border-primary-100 pt-5 sm:flex-row sm:justify-between">
          <a
            href={programme.href}
            className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.12em] text-primary-700 transition duration-300 hover:text-primary-950"
          >
            Learn more
            <ArrowUpRight
              size={17}
              aria-hidden="true"
              className="transition duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </a>

          <div className="h-px w-12 bg-primary-200 transition-all duration-500 group-hover:w-20 group-hover:bg-primary-500" />
        </div>
      </div>
    </article>
  )
}

export default ProgrammeCard