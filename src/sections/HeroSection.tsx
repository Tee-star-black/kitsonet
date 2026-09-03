import { ArrowRight, Heart, Phone, ShieldCheck } from 'lucide-react'

function HeroSection() {
  return (
    <section
      id="home"
      className="hero-background relative isolate min-h-[calc(100vh-76px)] scroll-mt-24 overflow-hidden"
      aria-label="Kitso-Net community care"
    >
      <div aria-hidden="true" className="absolute inset-0 bg-[linear-gradient(90deg,rgba(6,20,16,.92)_0%,rgba(9,28,22,.76)_42%,rgba(9,28,22,.24)_70%,rgba(9,28,22,.08)_100%)]" />
      <div aria-hidden="true" className="absolute inset-0 bg-[linear-gradient(180deg,rgba(5,18,14,.34)_0%,transparent_32%,rgba(5,18,14,.5)_100%)]" />

      <div className="relative mx-auto flex min-h-[calc(100vh-76px)] max-w-[1400px] items-center px-5 py-16 sm:px-8 lg:px-12 xl:px-20">
        <div className="mx-auto max-w-3xl py-10 text-center text-white sm:mx-0 sm:text-left">
          <div className="reveal-up mb-7 inline-flex items-center gap-2 border border-white/25 bg-white/10 px-4 py-2 text-xs font-bold uppercase tracking-[.18em] text-white shadow-lg backdrop-blur-md">
            <ShieldCheck size={15} />
            Community care since 2003
          </div>

          <h1 className="reveal-up delay-2 text-center font-heading text-[3.6rem] font-semibold leading-[.92] tracking-[-.045em] text-white drop-shadow-[0_8px_30px_rgba(0,0,0,.28)] sm:text-left sm:text-[5.2rem] lg:text-[5.7rem] xl:text-[6.5rem]">
            Care that helps older persons{' '}
            <span className="text-accent-200">live with dignity.</span>
          </h1>

          <p className="reveal-up mx-auto mt-7 max-w-2xl text-center text-lg leading-8 text-white/85 drop-shadow-md sm:mx-0 sm:text-left">
            Practical home-based care, health support and meaningful connection for older persons and families across Johannesburg.
          </p>

          <div className="reveal-up mt-9 flex flex-col gap-3 sm:flex-row">
            <a
              href="/contact"
              className="green-button inline-flex min-h-14 items-center justify-center gap-2 px-7 font-semibold text-white transition"
            >
              <Phone size={18} />
              Request assistance
            </a>
            <a
              href="/get-involved"
              className="group inline-flex min-h-14 items-center justify-center gap-2 border border-white/70 bg-white/10 px-7 font-semibold text-white shadow-lg backdrop-blur-md transition hover:-translate-y-0.5 hover:bg-white hover:text-primary-950"
            >
              <Heart size={18} />
              Support our work
              <ArrowRight size={18} className="transition group-hover:translate-x-1" />
            </a>
          </div>

          <div className="reveal-up mx-auto mt-12 grid max-w-2xl grid-cols-3 gap-px border border-white/20 bg-white/20 text-center shadow-2xl backdrop-blur-md sm:mx-0">
            <div className="bg-primary-950/55 p-4 sm:p-5">
              <strong className="block font-heading text-3xl text-white">23+</strong>
              <span className="text-[10px] font-semibold uppercase tracking-wider text-white/70 sm:text-xs">Years serving</span>
            </div>
            <div className="bg-primary-950/55 p-4 sm:p-5">
              <strong className="block font-heading text-3xl text-white">215+</strong>
              <span className="text-[10px] font-semibold uppercase tracking-wider text-white/70 sm:text-xs">People reached</span>
            </div>
            <div className="bg-primary-950/55 p-4 sm:p-5">
              <strong className="block font-heading text-3xl text-white">4</strong>
              <span className="text-[10px] font-semibold uppercase tracking-wider text-white/70 sm:text-xs">Core programmes</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
