interface SectionHeadingProps {
  eyebrow?: string
  title: string
  description?: string
  align?: 'left' | 'center'
  theme?: 'light' | 'dark'
}

function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'left',
  theme = 'light',
}: SectionHeadingProps) {
  const isCentered = align === 'center'
  const isDark = theme === 'dark'

  return (
    <div
      className={`flex max-w-3xl flex-col ${
        isCentered ? 'mx-auto items-center text-center' : 'items-start'
      }`}
    >
      {eyebrow && (
        <div className="flex items-center gap-4">
          {!isCentered && (
            <span
              className={`h-px w-10 ${
                isDark ? 'bg-accent-300' : 'bg-accent-500'
              }`}
            />
          )}

          <p
            className={`text-xs font-bold uppercase tracking-[0.24em] ${
              isDark ? 'text-accent-300' : 'text-primary-700'
            }`}
          >
            {eyebrow}
          </p>
        </div>
      )}

      <h2
        className={`mt-5 font-heading text-5xl font-semibold leading-[0.98] tracking-[-0.025em] sm:text-6xl lg:text-7xl ${
          isDark ? 'text-white' : 'text-primary-950'
        }`}
      >
        {title}
      </h2>

      {description && (
        <p
          className={`mt-7 max-w-2xl text-base leading-8 sm:text-lg ${
            isDark ? 'text-primary-100' : 'text-muted'
          }`}
        >
          {description}
        </p>
      )}
    </div>
  )
}

export default SectionHeading