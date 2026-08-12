interface PageHeroProps {
  eyebrow: string
  title: string
  description: string
  image: string
  imageAlt: string
}

function PageHero({ eyebrow, title, description, image, imageAlt }: PageHeroProps) {
  return (
    <section className="page-hero overflow-hidden bg-primary-950 px-5 py-16 text-white sm:px-8 lg:py-24">
      <div className="mx-auto grid max-w-[1200px] items-center gap-12 lg:grid-cols-[1fr_.88fr]">
        <div className="reveal-up">
          <p className="text-sm font-bold uppercase tracking-[.22em] text-accent-300">{eyebrow}</p>
          <h1 className="mt-5 max-w-3xl font-heading text-5xl font-bold leading-[.98] sm:text-6xl lg:text-7xl">{title}</h1>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-primary-100">{description}</p>
        </div>
        <div className="depth-scene reveal-up delay-2">
          <div className="image-cut depth-card">
            <img src={image} alt={imageAlt} className="aspect-[5/4] w-full object-cover" />
          </div>
          <div className="depth-tile" aria-hidden="true" />
        </div>
      </div>
    </section>
  )
}
export default PageHero
