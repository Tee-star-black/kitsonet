import ProgrammeCard from '../components/ProgrammeCard'
import SectionHeading from '../components/SectionHeading'
import { programmes } from '../data/programmes'

function ProgrammesSection() {
  return (
    <section
      id="programmes"
      className="scroll-mt-24 bg-primary-50 px-5 py-20 sm:px-8 lg:py-28"
    >
      <div className="mx-auto max-w-[1200px]">
        <SectionHeading
          eyebrow="What We Do"
          title="Our Programmes"
          description="Our programmes respond to the practical, emotional and social needs of older persons while supporting their independence and connection to the community."
          align="center"
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-2">
          {programmes.map((programme, index) => (
            <ProgrammeCard
              key={programme.title}
              programme={programme}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default ProgrammesSection