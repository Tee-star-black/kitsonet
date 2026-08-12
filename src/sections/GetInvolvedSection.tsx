import {
  ArrowRight,
  Building2,
  HandHeart,
  Heart,
  Users,
} from 'lucide-react'

import SectionHeading from '../components/SectionHeading'

const involvementOptions = [
  {
    title: 'Donate',
    description:
      'Your contribution can help provide home visits, transport, care supplies and programme support.',
    buttonLabel: 'Support Our Work',
    href: '/contact',
    icon: Heart,
  },
  {
    title: 'Volunteer',
    description:
      'Share your time, skills and experience to support older persons and community activities.',
    buttonLabel: 'Volunteer With Us',
    href: '/contact',
    icon: Users,
  },
  {
    title: 'Partner With Us',
    description:
      'Companies and organisations can support programmes, equipment, training and community initiatives.',
    buttonLabel: 'Discuss a Partnership',
    href: '/contact',
    icon: Building2,
  },
]

function GetInvolvedSection() {
  return (
    <section
      id="get-involved"
      className="scroll-mt-24 bg-cream-50 px-5 py-20 sm:px-8 lg:py-28"
    >
      <div className="mx-auto max-w-[1200px]">
        <SectionHeading
          eyebrow="Get Involved"
          title="Help Us Care for More Older Persons"
          description="Whether you contribute time, professional expertise, equipment or financial support, your involvement can create meaningful change."
          align="center"
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {involvementOptions.map((option, index) => {
            const Icon = option.icon
            const isFeatured = index === 0

            return (
              <article
                key={option.title}
                className={`group relative overflow-hidden image-cut border p-7 transition duration-300 hover:-translate-y-1 hover:shadow-xl sm:p-8 ${
                  isFeatured
                    ? 'border-primary-700 bg-primary-800 text-white'
                    : 'border-primary-100 bg-white text-primary-900'
                }`}
              >
                <div
                  className={`flex h-14 w-14 items-center justify-center rounded-full ${
                    isFeatured
                      ? 'bg-accent-400 text-primary-950'
                      : 'bg-primary-50 text-primary-700'
                  }`}
                >
                  <Icon size={27} strokeWidth={1.8} aria-hidden="true" />
                </div>

                <h3
                  className={`mt-6 font-heading text-3xl font-bold ${
                    isFeatured ? 'text-white' : 'text-primary-800'
                  }`}
                >
                  {option.title}
                </h3>

                <p
                  className={`mt-4 leading-7 ${
                    isFeatured ? 'text-primary-100' : 'text-muted'
                  }`}
                >
                  {option.description}
                </p>

                <a
                  href={option.href}
                  className={`mt-8 inline-flex items-center gap-2 rounded-full px-6 py-3 font-semibold transition ${
                    isFeatured
                      ? 'bg-white text-primary-800 hover:bg-accent-100'
                      : 'bg-primary-700 text-white hover:bg-primary-800'
                  }`}
                >
                  {option.buttonLabel}
                  <ArrowRight
                    size={18}
                    aria-hidden="true"
                    className="transition group-hover:translate-x-1"
                  />
                </a>

                <div
                  aria-hidden="true"
                  className={`absolute -bottom-16 -right-16 h-40 w-40 rounded-full ${
                    isFeatured ? 'bg-white/5' : 'bg-primary-50'
                  }`}
                />
              </article>
            )
          })}
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-5 image-cut border border-accent-200 bg-accent-50 px-6 py-7 text-center sm:px-8 lg:flex-row lg:text-left">
          <div className="flex flex-col items-center gap-4 sm:flex-row lg:items-start">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-accent-400 text-primary-950">
              <HandHeart size={24} aria-hidden="true" />
            </div>

            <div>
              <h3 className="font-heading text-2xl font-bold text-primary-800">
                Donate useful resources
              </h3>

              <p className="mt-2 max-w-2xl leading-7 text-muted">
                Kitso-Net may also require computers, office furniture, care
                supplies, activity equipment and transport support.
              </p>
            </div>
          </div>

          <a
            href="/contact"
            className="shrink-0 rounded-full border border-primary-300 bg-white px-6 py-3 font-semibold text-primary-800 transition hover:border-primary-500 hover:bg-primary-50"
          >
            Ask About Current Needs
          </a>
        </div>
      </div>
    </section>
  )
}

export default GetInvolvedSection