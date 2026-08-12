import { ArrowUpRight, Clock3, Mail, MapPin, Phone } from 'lucide-react'
import { navigationItems } from '../data/navigation'

function Footer() {
  return (
    <footer className="footer-grid bg-primary-950 px-5 pb-8 pt-16 text-white sm:px-8 lg:pt-20">
      <div className="mx-auto max-w-[1200px]">
        <div className="grid gap-12 border-b border-white/12 pb-14 md:grid-cols-2 lg:grid-cols-[1.25fr_.75fr_.9fr_1fr]">
          <div>
            <a href="/" className="inline-flex items-center gap-3" aria-label="Kitso-Net home">
              <span className="logo-cube grid h-11 w-11 place-items-center bg-accent-400 font-heading text-xl font-bold text-primary-950">K</span>
              <span className="font-heading text-3xl font-bold">Kitso-Net</span>
            </a>
            <p className="mt-5 max-w-sm leading-7 text-primary-200">Compassionate, community-based care and support that helps older persons live with dignity, independence and meaningful connection.</p>
            <p className="mt-6 text-xs font-bold uppercase tracking-[.18em] text-accent-300">Serving Johannesburg since 2003</p>
          </div>

          <div>
            <h2 className="text-sm font-bold uppercase tracking-[.18em] text-white">Explore</h2>
            <nav aria-label="Footer navigation" className="mt-5 grid gap-3">
              {navigationItems.map(item => <a key={item.href} href={item.href} className="footer-link inline-flex items-center gap-2 text-sm text-primary-200 hover:text-white">{item.label}<ArrowUpRight size={14}/></a>)}
            </nav>
          </div>

          <div>
            <h2 className="text-sm font-bold uppercase tracking-[.18em] text-white">Contact</h2>
            <div className="mt-5 space-y-4 text-sm text-primary-200">
              <a href="tel:+27114353453" className="flex items-start gap-3 hover:text-white"><Phone size={17} className="mt-0.5 shrink-0 text-accent-300"/>011 435 3453</a>
              <a href="mailto:Kitsonet@classicmail.co.za" className="flex items-start gap-3 break-all hover:text-white"><Mail size={17} className="mt-0.5 shrink-0 text-accent-300"/>Kitsonet@classicmail.co.za</a>
              <a href="https://www.google.com/maps/search/?api=1&query=Johannesburg%2C%20South%20Africa" className="flex items-start gap-3 hover:text-white" target="_blank" rel="noreferrer"><MapPin size={17} className="mt-0.5 shrink-0 text-accent-300"/>Johannesburg, South Africa</a>
              <p className="flex items-start gap-3"><Clock3 size={17} className="mt-0.5 shrink-0 text-accent-300"/>Monday to Friday<br/>08:00 to 16:30</p>
            </div>
          </div>

          <div>
            <h2 className="text-sm font-bold uppercase tracking-[.18em] text-white">Organisation</h2>
            <p className="mt-5 text-sm leading-6 text-primary-200">Kitso-Net is a community-focused non-profit organisation supporting older persons and families in Johannesburg.</p>
            <a href="/contact" className="green-button mt-6 inline-flex px-5 py-3 text-sm font-bold">Contact our team</a>
          </div>
        </div>

        <div className="flex flex-col gap-4 pt-7 text-xs text-primary-300 md:flex-row md:items-center md:justify-between">
          <p>© 2026 Kitso-Net. All rights reserved.</p>
          <div className="flex flex-wrap gap-x-6 gap-y-2"><a href="/privacy" className="hover:text-white">Privacy Policy</a><a href="/terms" className="hover:text-white">Terms of Use</a><a href="/contact" className="hover:text-white">Accessibility & enquiries</a></div>
        </div>
      </div>
    </footer>
  )
}
export default Footer
