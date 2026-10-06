import Reveal from './Reveal'
import SectionHeading from './SectionHeading'
import { processSection, processSteps } from '../content'

export default function Process() {
  return (
    <section id="process" aria-labelledby="process-heading" className="bg-white py-20 sm:py-28">
      <div className="container-x grid gap-12 lg:grid-cols-2 lg:gap-20">
        <div>
          <SectionHeading
            id="process-heading"
            eyebrow={processSection.eyebrow}
            title={processSection.title}
            intro={processSection.intro}
            align="left"
          />
          <Reveal delay={0.1} className="mt-10">
            <img
              src={processSection.image.src}
              alt={processSection.image.alt}
              width={1000}
              height={750}
              loading="lazy"
              decoding="async"
              className="aspect-[4/3] w-full rounded-2xl object-cover shadow-xl shadow-navy/15"
            />
          </Reveal>
        </div>

        {/* Vertical timeline: a glowing line connects each numbered step */}
        <ol className="relative space-y-10 lg:self-center">
          <span
            aria-hidden="true"
            className="absolute bottom-6 left-6 top-6 w-px bg-gradient-to-b from-electric via-cyan to-electric/10"
          />
          {processSteps.map(({ icon: Icon, title, description }, i) => (
            <Reveal as="li" key={title} delay={i * 0.1} className="relative flex gap-6">
              <span className="relative z-10 inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-midnight text-cyan ring-4 ring-white shadow-[0_0_20px_-4px_rgba(47,107,255,0.9)]">
                <Icon className="h-5 w-5" aria-hidden="true" />
              </span>
              <div className="pt-1">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-electric">
                  Step {String(i + 1).padStart(2, '0')}
                </p>
                <h3 className="mt-1 text-2xl font-semibold text-midnight">{title}</h3>
                <p className="mt-2 leading-relaxed text-slate-600">{description}</p>
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  )
}
