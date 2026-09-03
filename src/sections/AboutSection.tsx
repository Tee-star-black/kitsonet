import {
  Heart,
  ShieldCheck,
  Users,
  Scale,
  HandHeart,
} from 'lucide-react'

import SectionHeading from '../components/SectionHeading'

const values = [
  {
    label: 'Compassion',
    icon: Heart,
  },
  {
    label: 'Dignity',
    icon: ShieldCheck,
  },
  {
    label: 'Community',
    icon: Users,
  },
  {
    label: 'Accountability',
    icon: Scale,
  },
  {
    label: 'Respect',
    icon: HandHeart,
  },
]

function AboutSection() {
  return (
    <section
      id="about"
      className="scroll-mt-24 bg-cream-50 px-5 py-20 sm:px-8 lg:py-28"
    >
      <div className="mx-auto grid max-w-[1200px] items-center gap-14 lg:grid-cols-[1.05fr_0.95fr]">
        <div>
          <SectionHeading
            eyebrow="About Kitso-Net"
            title="Who We Are"
            description="Kitso-Net is a registered non-profit organisation that has been serving Johannesburg communities since 2003."
          />

          <div className="mt-7 space-y-5 text-base leading-8 text-muted">
            <p>
              The organisation began with peer education and door-to-door
              community awareness campaigns. Through this work, Kitso-Net
              identified a serious need for practical home-based care and
              support for older persons.
            </p>

            <p>
              Today, we provide home visits, health promotion, emotional
              support, social activities, referrals and practical assistance
              that help older persons remain safe, connected and independent.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3 xl:grid-cols-5">
            {values.map((value) => {
              const Icon = value.icon

              return (
                <div
                  key={value.label}
                  className="flex min-h-28 flex-col items-center justify-center rounded-2xl border border-primary-100 bg-white px-3 py-5 text-center shadow-sm"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary-50 text-primary-700">
                    <Icon size={20} strokeWidth={1.8} aria-hidden="true" />
                  </div>

                  <p className="mt-3 text-sm font-semibold text-primary-900">
                    {value.label}
                  </p>
                </div>
              )
            })}
          </div>
        </div>

        <div className="relative flex min-h-[420px] items-center justify-center lg:min-h-[520px]">
          <div
            aria-hidden="true"
            className="absolute inset-8 rounded-full bg-white/70 blur-3xl"
          />

          <img
            src="/images/elderly-care-companion.png"
            alt="Illustration of a caregiver sharing a warm moment with an older person"
            className="relative z-10 w-full max-w-[470px] object-contain drop-shadow-2xl"
          />

          <div className="absolute -bottom-6 -left-3 z-20 max-w-xs rounded-2xl border border-white/50 bg-primary-800 p-6 text-white shadow-xl sm:-left-6">
            <p className="font-heading text-2xl font-bold">
              More than two decades of care
            </p>

            <p className="mt-3 text-sm leading-6 text-primary-100">
              Supporting older persons, families and communities with
              compassion since 2003.
            </p>
          </div>

          <div
            aria-hidden="true"
            className="absolute -right-5 -top-5 h-32 w-32 rounded-full bg-accent-200/70"
          />
        </div>
      </div>
    </section>
  )
}

export default AboutSection