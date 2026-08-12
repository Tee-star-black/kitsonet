import { CheckCircle2 } from 'lucide-react'
import SectionHeading from '../components/SectionHeading'

const supportGroups = [
  'Frail and semi-frail older persons',
  'Older persons who require support at home',
  'Socially isolated seniors',
  'Independently living seniors',
  'Families caring for an older relative',
  'Older persons requiring health or social-service referrals',
]

function WhoWeSupportSection() {
  return (
    <section
      id="impact"
      className="scroll-mt-24 bg-cream-50 px-5 py-20 sm:px-8 lg:py-28"
    >
      <div className="mx-auto grid max-w-[1200px] items-center gap-14 lg:grid-cols-2">
        <div className="relative order-2 lg:order-1">
          <div className="overflow-hidden image-cut shadow-xl">
            <img
              src="/images/who-we-support.png"
              alt="An older person living actively and independently"
              className="aspect-[4/3] w-full object-cover lg:aspect-[4/5]"
            />
          </div>

          <div className="absolute -bottom-6 right-4 max-w-xs rounded-2xl bg-primary-800 p-6 text-white shadow-xl sm:right-8">
            <p className="font-heading text-2xl font-bold">
              Independence with support
            </p>

            <p className="mt-3 text-sm leading-6 text-primary-100">
              Helping older persons remain active, connected and secure within
              their communities.
            </p>
          </div>
        </div>

        <div className="order-1 lg:order-2">
          <SectionHeading
            eyebrow="Who We Support"
            title="Supporting Older Persons and Their Families"
            description="Kitso-Net primarily supports people aged 60 and above who live within our operational communities."
          />

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {supportGroups.map((group) => (
              <div
                key={group}
                className="flex items-start gap-3 rounded-2xl border border-primary-100 bg-white p-4 shadow-sm"
              >
                <CheckCircle2
                  size={21}
                  className="mt-0.5 shrink-0 text-accent-600"
                  aria-hidden="true"
                />

                <p className="text-sm font-medium leading-6 text-primary-900">
                  {group}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-8 rounded-2xl border border-primary-100 bg-primary-50 p-6">
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-primary-700">
              Current service areas
            </p>

            <p className="mt-3 leading-7 text-muted">
              Rosettenville, Turffontein, Crown Gardens and selected retirement
              communities within Johannesburg.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default WhoWeSupportSection