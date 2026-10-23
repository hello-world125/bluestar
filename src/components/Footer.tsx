import Logo from './Logo'
import { company, footer, imageCredits, navLinks } from '../content'

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-midnight text-slate-400">
      <div className="container-x grid gap-10 py-14 md:grid-cols-[1.5fr_1fr_1fr]">
        <div>
          <a href="#top" aria-label="BlueStar Technology, back to top">
            <Logo />
          </a>
          <p className="mt-4 max-w-sm text-sm leading-relaxed">{footer.blurb}</p>
        </div>

        <nav aria-label="Footer">
          <h2 className="text-sm font-semibold uppercase tracking-widest text-white">Quick links</h2>
          <ul className="mt-4 space-y-2 text-sm">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="hover:text-cyan">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h2 className="text-sm font-semibold uppercase tracking-widest text-white">Get in touch</h2>
          <ul className="mt-4 space-y-2 text-sm">
            <li>
              <a href={`mailto:${company.email}`} className="hover:text-cyan">
                {company.email}
              </a>
            </li>
            <li>{company.phone}</li>
            <li>{company.location}</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-x flex flex-col gap-3 py-6 text-xs sm:flex-row sm:items-start sm:justify-between">
          <p className="shrink-0">
            © {company.copyrightYear} {company.legalName}. All rights reserved.
          </p>
          <p className="sm:text-right">
            Photos from{' '}
            <a href="https://unsplash.com/?utm_source=bluestar&utm_medium=referral" className="underline-offset-2 hover:text-cyan hover:underline">
              Unsplash
            </a>{' '}
            by{' '}
            {imageCredits.map((c, i) => (
              <span key={c.url}>
                <a href={c.url} className="underline-offset-2 hover:text-cyan hover:underline">
                  {c.photographer}
                </a>
                {i < imageCredits.length - 1 ? ', ' : '.'}
              </span>
            ))}
          </p>
        </div>
      </div>
    </footer>
  )
}
