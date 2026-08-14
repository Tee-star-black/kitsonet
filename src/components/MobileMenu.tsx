import { ArrowUpRight, Heart } from 'lucide-react'

import { navigationItems } from '../data/navigation'

interface MobileMenuProps {
  isOpen: boolean
  onClose: () => void
}

function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  return (
    <div
      id="mobile-navigation"
      aria-hidden={!isOpen}
      className={`fixed inset-0 top-[73px] z-40 bg-white transition duration-500 lg:hidden ${
        isOpen
          ? 'visible translate-y-0 opacity-100'
          : 'invisible -translate-y-6 opacity-0'
      }`}
    >
      <nav
        aria-label="Mobile navigation"
        className="flex h-full flex-col overflow-y-auto px-6 pb-10 pt-8"
      >
        <div className="flex flex-1 flex-col">
          {navigationItems.map((item, index) => (
            <a
              key={item.href}
              href={item.href}
              onClick={onClose}
              className="group flex items-center justify-between border-b border-black/10 py-5"
            >
              <span className="font-heading text-4xl font-semibold text-primary-900">
                {item.label}
              </span>

              <span className="flex items-center gap-3">
                <span className="text-xs font-semibold tracking-[0.16em] text-muted">
                  {String(index + 1).padStart(2, '0')}
                </span>

                <ArrowUpRight
                  size={21}
                  className="text-primary-700 transition group-hover:translate-x-1 group-hover:-translate-y-1"
                  aria-hidden="true"
                />
              </span>
            </a>
          ))}
        </div>

        <a
          href="/get-involved"
          onClick={onClose}
          className="mt-8 inline-flex items-center justify-center gap-2 bg-primary-800 px-6 py-4 font-semibold text-white transition hover:bg-primary-900"
        >
          <Heart size={18} aria-hidden="true" />
          Support Our Work
        </a>

        <div className="mt-8 border-t border-black/10 pt-6 text-sm leading-7 text-muted">
          <a
            href="https://www.google.com/maps/search/?api=1&query=No.%201%20Rose%20Street%2C%20Rosettenville%2C%20Johannesburg%2C%202190"
            target="_blank"
            rel="noreferrer"
            className="block transition hover:text-primary-800"
          >
            No. 1 Rose Street, Rosettenville<br />
            Johannesburg, 2190
          </a>
          <a
            href="mailto:Kitsonet@classicmail.co.za"
            className="mt-2 inline-block transition hover:text-primary-800"
          >
            Kitsonet@classicmail.co.za
          </a>
        </div>
      </nav>
    </div>
  )
}

export default MobileMenu
