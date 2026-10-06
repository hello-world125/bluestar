import { Quote } from 'lucide-react'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'
import { testimonials, testimonialsArePlaceholders, testimonialsSection } from '../content'

export default function Testimonials() {
  return (
    <section id="testimonials" aria-labelledby="testimonials-heading" className="bg-mist py-20 sm:py-28">
      <div className="container-x">
        <SectionHeading
          id="testimonials-heading"
          eyebrow={testimonialsSection.eyebrow}
          title={testimonialsSection.title}
        />
        {testimonialsArePlaceholders && (
          <p className="mx-auto mt-4 w-fit rounded-full bg-amber-100 px-4 py-1.5 text-center text-sm font-medium text-amber-900">
            Placeholder testimonials: replace with real client quotes before launch.
          </p>
        )}

        <ul className="mt-14 grid gap-6 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <Reveal
              as="li"
              key={i}
              delay={i * 0.1}
              className="flex flex-col rounded-2xl border border-slate-200 bg-white p-8 shadow-sm"
            >
              <figure className="flex h-full flex-col">
                <Quote className="h-8 w-8 text-electric/70" aria-hidden="true" />
                <blockquote className="mt-4 flex-1 leading-relaxed text-slate-700">“{t.quote}”</blockquote>
                <figcaption className="mt-6 flex items-center gap-3 border-t border-slate-100 pt-6">
                  <span
                    aria-hidden="true"
                    className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-electric to-cyan font-semibold text-white"
                  >
                    {t.name.charAt(0)}
                  </span>
                  <span>
                    <span className="block font-semibold text-midnight">
                      {t.name}
                      {testimonialsArePlaceholders && (
                        <span className="ml-2 rounded bg-amber-100 px-1.5 py-0.5 align-middle text-[10px] font-semibold uppercase tracking-wider text-amber-900">
                          Placeholder
                        </span>
                      )}
                    </span>
                    <span className="block text-sm text-slate-500">{t.role}</span>
                  </span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  )
}
