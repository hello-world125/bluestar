import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import Logo from './Logo'
import { navCta, navLinks } from '../content'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Close the mobile menu on Escape or when the viewport grows to desktop size
  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false)
    const mq = window.matchMedia('(min-width: 768px)')
    const onMq = () => mq.matches && setOpen(false)
    window.addEventListener('keydown', onKey)
    mq.addEventListener('change', onMq)
    return () => {
      window.removeEventListener('keydown', onKey)
      mq.removeEventListener('change', onMq)
    }
  }, [open])

  const solid = scrolled || open

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        solid ? 'border-b border-white/10 bg-midnight/90 shadow-lg shadow-black/20 backdrop-blur-md' : 'bg-transparent'
      }`}
    >
      <nav aria-label="Main" className="container-x flex h-16 items-center justify-between md:h-20">
        <a href="#top" aria-label="BlueStar Technology, back to top" className="shrink-0">
          <Logo />
        </a>

        <ul className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a href={link.href} className="text-sm font-medium text-slate-200 transition hover:text-cyan">
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <a href={navCta.href} className="btn-primary hidden md:inline-flex">
          {navCta.label}
        </a>

        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-full text-white hover:bg-white/10 md:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            className="border-t border-white/10 md:hidden"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
          >
            <ul className="container-x flex flex-col gap-1 py-4">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="block rounded-lg px-3 py-3 text-base font-medium text-slate-100 hover:bg-white/10"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li className="pt-2">
                <a href={navCta.href} onClick={() => setOpen(false)} className="btn-primary w-full">
                  {navCta.label}
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
