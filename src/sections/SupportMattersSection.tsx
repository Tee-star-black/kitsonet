import {
  BusFront,
  GraduationCap,
  HeartHandshake,
  PackageCheck,
} from 'lucide-react'

import SectionHeading from '../components/SectionHeading'

const supportNeeds = [
  {
    title: 'Reliable Transportation',
    description:
      'Transport helps older persons attend medical appointments and access essential services.',
    icon: BusFront,
  },
  {
    title: 'More Caregivers & Volunteers',
    description:
      'Additional support allows us to reach more older persons in our communities.',
    icon: HeartHandshake,
  },
  {
    title: 'Care Supplies & Equipment',
    description:
      'Practical resources help caregivers provide safe and dignified support.',
    icon: PackageCheck,
  },
  {
    title: 'Training & Development',
    description:
      'Ongoing learning strengthens the skills and confidence of our care team.',
    icon: GraduationCap,
  },
]

function SupportMattersSection() {
  return (
    <section className="bg-primary-800 px-5 py-20 text-white sm:px-8 lg:py-28">
      <div className="mx-auto grid max-w-[1200px] items-center gap-14 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <SectionHeading
            eyebrow="Why Support Matters"
            title="Your Support Turns Care Into Action"
            description="Community care depends on practical resources, skilled people and reliable transport. Every contribution helps us reach further."
            theme="dark"
          />

          <div className="mt-10 grid gap-5 sm:grid-cols-2">
            {supportNeeds.map((need) => {
              const Icon = need.icon

              return (
                <article
                  key={need.title}
                  className="rounded-[1.5rem] border border-white/10 bg-white/10 p-6 backdrop-blur-sm"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-accent-400 text-primary-950">
                    <Icon size={24} strokeWidth={1.8} aria-hidden="true" />
                  </div>

                  <h3 className="mt-5 font-heading text-xl font-bold">
                    {need.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-primary-100">
                    {need.description}
                  </p>
                </article>
              )
            })}
          </div>
        </div>

        <div className="relative flex min-h-[420px] items-center justify-center lg:min-h-[520px]">
          <div className="absolute inset-8 rounded-full bg-white/5 blur-3xl" aria-hidden="true" />

          <img
            src="/images/elderly-care-assistance.png"
            alt="Illustration of a caregiver helping an older person walk safely"
            className="relative z-10 w-full max-w-[470px] object-contain drop-shadow-2xl"
          />

          <div className="absolute bottom-6 left-6 right-6 z-20 rounded-2xl border border-white/20 bg-primary-950/80 p-6 backdrop-blur-md">
            <p className="font-heading text-2xl font-bold">
              Every contribution creates practical impact
            </p>

            <p className="mt-3 text-sm leading-6 text-primary-100">
              Support helps fund care, transport, training and essential
              programme resources.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SupportMattersSection