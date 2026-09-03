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
      className={`flex max-w-3xl flex-col items-center text-center sm:${
        isCentered ? 'mx-auto items-center text-center' : 'items-start text-left'
      }`}
    >
      {eyebrow && (
        <div className="flex items-center justify-center gap-4 sm:justify-start">
          {!isCentered && (
            <span
              className={`hidden h-px w-10 sm:block ${
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
        className={`mt-5 w-full text-center font-heading text-5xl font-semibold leading-[0.98] tracking-[-0.025em] sm:text-left sm:text-6xl lg:text-7xl ${
          isCentered ? 'sm:text-center' : ''
        } ${isDark ? 'text-white' : 'text-primary-950'}`}
      >
        {title}
      </h2>

      {description && (
        <p
          className={`mt-7 max-w-2xl text-center text-base leading-8 sm:text-lg ${
            isCentered ? 'sm:text-center' : 'sm:text-left'
          } ${isDark ? 'text-primary-100' : 'text-muted'}`}
        >
          {description}
        </p>
      )}
    </div>
  )
}

export default SectionHeading