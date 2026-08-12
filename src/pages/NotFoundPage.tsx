import Seo from '../components/Seo'

export default function NotFoundPage() {
  return (
    <section className="px-5 py-24 text-center sm:px-8 lg:py-32">
      <Seo
        title="Page Not Found | Kitso-Net"
        description="The page you requested could not be found. Return to the Kitso-Net homepage or contact our care team."
        path={window.location.pathname}
        noIndex
      />
      <p className="text-sm font-bold uppercase tracking-[.2em] text-primary-700">404</p>
      <h1 className="mt-4 font-heading text-5xl font-bold text-primary-950">This page has wandered off.</h1>
      <p className="mx-auto mt-5 max-w-xl text-lg leading-8 text-muted">The address may have changed, or the link may be incorrect. Unlike some websites, we will not pretend this was part of the journey.</p>
      <div className="mt-8 flex justify-center"><a href="/" className="green-button inline-flex min-h-14 items-center justify-center px-7 font-semibold text-white transition">Return Home</a></div>
    </section>
  )
}
