import Reveal from './Reveal'
import SectionHeading from './SectionHeading'
import { valuePoints, whySection } from '../content'

export default function WhyBlueStar() {
  return (
    <section
      id="why"
      aria-labelledby="why-heading"
      className="relative isolate overflow-hidden bg-midnight py-20 text-white sm:py-28"
    >
      {/* soft star-white glow */}
      <div
        aria-hidden="true"
        className="absolute -right-40 -top-40 -z-10 h-[32rem] w-[32rem] rounded-full bg-electric/20 blur-3xl"
      />

      <div className="container-x grid gap-12 lg:grid-cols-[1fr_1.4fr] lg:items-center lg:gap-16">
        <div>
          <SectionHeading
            id="why-heading"
            eyebrow={whySection.eyebrow}
            title={whySection.title}
            intro={whySection.intro}
            tone="dark"
            align="left"
          />
          <Reveal delay={0.1} className="mt-10 hidden lg:block">
            <img
              src={whySection.image.src}
              alt={whySection.image.alt}
              width={900}
              height={1100}
              loading="lazy"
              decoding="async"
              className="aspect-[4/3] w-full rounded-2xl object-cover ring-1 ring-white/10"
            />
          </Reveal>
        </div>

        <ul className="grid gap-5 sm:grid-cols-2">
          {valuePoints.map(({ icon: Icon, title, metaphor, description }, i) => (
            <Reveal
              as="li"
              key={title}
              delay={i * 0.08}
              className="rounded-2xl border border-white/10 bg-white/[0.04] p-7 backdrop-blur transition duration-300 hover:border-cyan/40 hover:bg-white/[0.07]"
            >
              <div className="flex items-center gap-4">
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-cyan/10 text-cyan ring-1 ring-cyan/30 shadow-[0_0_24px_-6px_rgba(34,211,238,0.8)]">
                  <Icon className="h-6 w-6" aria-hidden="true" />
                </span>
                <div>
                  <h3 className="text-xl font-semibold">{title}</h3>
                  <p className="text-xs font-semibold uppercase tracking-widest text-sky-300">{metaphor}</p>
                </div>
              </div>
              <p className="mt-4 leading-relaxed text-slate-300">{description}</p>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  )
}
