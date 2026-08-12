import { useEffect, useState } from 'react'
import { Heart, Menu, X } from 'lucide-react'
import { navigationItems } from '../data/navigation'
import MobileMenu from './MobileMenu'

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const closeMenu = () => setIsMenuOpen(false)
  const activePath = window.location.pathname

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 16)
    const handleResize = () => window.innerWidth >= 1024 && closeMenu()
    window.addEventListener('scroll', handleScroll, { passive: true })
    window.addEventListener('resize', handleResize)
    handleScroll()
    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  useEffect(() => {
    document.body.classList.toggle('menu-open', isMenuOpen)
    return () => document.body.classList.remove('menu-open')
  }, [isMenuOpen])

  return (
    <>
      <header className={`sticky top-0 z-50 border-b transition-all duration-300 ${isScrolled || isMenuOpen ? 'border-primary-100 bg-white/92 shadow-[0_10px_35px_rgba(25,51,46,.1)] backdrop-blur-xl' : 'border-transparent bg-white/80 backdrop-blur-md'}`}>
        <div className="mx-auto flex h-[78px] max-w-[1400px] items-center justify-between px-5 sm:px-8 lg:px-12">
          <a href="/" onClick={closeMenu} className="group flex items-center gap-3" aria-label="Kitso-Net home">
            <span className="logo-cube grid h-10 w-10 place-items-center bg-primary-800 font-heading text-xl font-bold text-white shadow-lg transition group-hover:bg-primary-950">K</span>
            <span><span className="block font-heading text-2xl font-bold leading-none text-primary-950">Kitso-Net</span><span className="mt-1 hidden text-[10px] font-bold uppercase tracking-[.2em] text-primary-600 sm:block">Care. Dignity. Community.</span></span>
          </a>

          <nav aria-label="Main navigation" className="hidden items-center gap-1 lg:flex">
            {navigationItems.map((item) => {
              const active = activePath === item.href
              return <a key={item.href} href={item.href} aria-current={active ? 'page' : undefined} className={`nav-link px-4 py-2.5 text-sm font-semibold transition ${active ? 'text-primary-900' : 'text-muted hover:text-primary-900'}`}>{item.label}</a>
            })}
          </nav>

          <a href="/get-involved" className="green-button hidden items-center gap-2 px-5 py-3 text-sm font-semibold shadow-lg transition hover:-translate-y-0.5 hover:shadow-xl lg:inline-flex"><Heart size={16} aria-hidden="true" />Support Our Work</a>
          <button type="button" onClick={() => setIsMenuOpen((current) => !current)} aria-expanded={isMenuOpen} aria-controls="mobile-navigation" aria-label={isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'} className="grid h-11 w-11 place-items-center text-primary-950 transition hover:bg-primary-50 lg:hidden">{isMenuOpen ? <X size={25} /> : <Menu size={25} />}</button>
        </div>
      </header>
      <MobileMenu isOpen={isMenuOpen} onClose={closeMenu} />
    </>
  )
}
export default Header
