import { ArrowRight, Heart } from 'lucide-react'

function FinalCallToAction() {
  return (
    <section className="relative overflow-hidden bg-primary-900">
      <img
        src="/images/final-cta.jpg"
        alt=""
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover opacity-20"
      />

      <div className="absolute inset-0 bg-gradient-to-r from-primary-950 via-primary-900/95 to-primary-800/80" />

      <img
        src="/images/care-handshake.png"
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute right-[-2rem] top-1/2 hidden w-[320px] -translate-y-1/2 object-contain opacity-90 drop-shadow-2xl lg:block xl:w-[390px]"
      />

      <div className="relative mx-auto flex max-w-[1200px] flex-col gap-8 px-5 py-20 sm:px-8 lg:flex-row lg:items-center lg:justify-between lg:py-24">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent-300">
            Make a Difference
          </p>

          <h2 className="mt-4 font-heading text-4xl font-bold leading-tight text-white sm:text-5xl">
            Together, We Can Help Older Persons Live With Dignity
          </h2>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-primary-100">
            Your support can help an older person receive practical care,
            emotional support, companionship and assistance in accessing
            essential services.
          </p>
        </div>

        <div className="relative z-10 flex shrink-0 flex-col gap-4 sm:flex-row lg:flex-col xl:flex-row">
          <a
            href="/get-involved"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-accent-400 px-7 py-4 font-semibold text-primary-950 transition hover:bg-accent-300"
          >
            <Heart size={19} aria-hidden="true" />
            Support Our Work
          </a>

          <a
            href="/contact"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-white/30 bg-white/10 px-7 py-4 font-semibold text-white backdrop-blur-sm transition hover:bg-white/20"
          >
            Partner With Us
            <ArrowRight size={19} aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  )
}

export default FinalCallToAction