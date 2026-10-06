import Reveal from './Reveal'
import SectionHeading from './SectionHeading'
import { about } from '../content'

export default function About() {
  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="relative isolate overflow-hidden bg-navy py-20 text-white sm:py-28"
    >
      <div
        aria-hidden="true"
        className="absolute -bottom-48 -left-40 -z-10 h-[30rem] w-[30rem] rounded-full bg-cyan/10 blur-3xl"
      />
      <div className="container-x grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
        <Reveal className="order-last lg:order-first">
          <div className="relative">
            <img
              src={about.image.src}
              alt={about.image.alt}
              width={1000}
              height={666}
              loading="lazy"
              decoding="async"
              className="aspect-[4/3] w-full rounded-2xl object-cover ring-1 ring-white/10"
            />
            <div
              aria-hidden="true"
              className="absolute -bottom-4 -right-4 -z-10 h-full w-full rounded-2xl border border-cyan/30"
            />
          </div>
        </Reveal>

        <div>
          <SectionHeading id="about-heading" eyebrow={about.eyebrow} title={about.title} tone="dark" align="left" />
          <Reveal delay={0.1} className="mt-6 space-y-4 text-lg leading-relaxed text-slate-300">
            {about.paragraphs.map((p) => (
              <p key={p.slice(0, 24)}>{p}</p>
            ))}
          </Reveal>

          <Reveal delay={0.2}>
            <dl className="mt-10 grid grid-cols-3 gap-4 border-t border-white/10 pt-8">
              {about.stats.map((stat) => (
                <div key={stat.label} className="flex flex-col">
                  <dt className="text-sm text-slate-400">{stat.label}</dt>
                  <dd className="star-glow order-first font-display text-3xl font-bold text-white sm:text-4xl">
                    {stat.value}
                  </dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
