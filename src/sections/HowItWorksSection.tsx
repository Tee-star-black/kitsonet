import {
  ClipboardCheck,
  HeartHandshake,
  MessageCircle,
  Phone,
  Users,
} from 'lucide-react'

import SectionHeading from '../components/SectionHeading'

const supportSteps = [
  {
    number: '01',
    title: 'Contact Kitso-Net',
    description:
      'Reach out to us by phone, email or through the website contact form.',
    icon: Phone,
  },
  {
    number: '02',
    title: 'Initial Discussion',
    description:
      'We speak with you to understand the situation and the support required.',
    icon: MessageCircle,
  },
  {
    number: '03',
    title: 'Needs Assessment',
    description:
      'Our team considers the person’s needs, location and programme eligibility.',
    icon: ClipboardCheck,
  },
  {
    number: '04',
    title: 'Service or Referral',
    description:
      'We provide an appropriate service or refer the person to another provider.',
    icon: HeartHandshake,
  },
  {
    number: '05',
    title: 'Ongoing Support',
    description:
      'Our caregivers and support team continue assisting where capacity allows.',
    icon: Users,
  },
]

function HowItWorksSection() {
  return (
    <section className="bg-white px-5 py-20 sm:px-8 lg:py-28">
      <div className="mx-auto max-w-[1200px]">
        <SectionHeading
          eyebrow="Getting Help"
          title="How to Access Support"
          description="We keep the process clear and personal, helping families understand the available support and the next appropriate step."
          align="center"
        />

        <div className="relative mt-16">
          <div
            aria-hidden="true"
            className="absolute left-[10%] right-[10%] top-10 hidden border-t-2 border-dashed border-primary-200 lg:block"
          />

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
            {supportSteps.map((step) => {
              const Icon = step.icon

              return (
                <article
                  key={step.number}
                  className="relative rounded-[1.5rem] border border-primary-100 bg-cream-50 p-6 text-center shadow-sm"
                >
                  <div className="relative z-10 mx-auto flex h-20 w-20 items-center justify-center rounded-full border-8 border-white bg-primary-700 text-white shadow-md">
                    <Icon size={29} strokeWidth={1.8} aria-hidden="true" />
                  </div>

                  <p className="mt-5 text-xs font-bold uppercase tracking-[0.2em] text-accent-600">
                    Step {step.number}
                  </p>

                  <h3 className="mt-2 font-heading text-xl font-bold text-primary-800">
                    {step.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-muted">
                    {step.description}
                  </p>
                </article>
              )
            })}
          </div>
        </div>

        <div className="mx-auto mt-12 max-w-3xl rounded-2xl border border-accent-200 bg-accent-50 px-6 py-5 text-center">
          <p className="text-sm leading-6 text-accent-900">
            Programme placement depends on eligibility, service area, available
            funding and caregiver capacity. Where immediate support is
            unavailable, Kitso-Net may provide an appropriate referral.
          </p>
        </div>
      </div>
    </section>
  )
}

export default HowItWorksSection