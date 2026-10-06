import Reveal from './Reveal'
import SectionHeading from './SectionHeading'
import { services, servicesSection } from '../content'

export default function Services() {
  return (
    <section id="services" aria-labelledby="services-heading" className="bg-mist py-20 sm:py-28">
      <div className="container-x">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <SectionHeading
            id="services-heading"
            eyebrow={servicesSection.eyebrow}
            title={servicesSection.title}
            intro={servicesSection.intro}
            align="left"
          />
          <Reveal delay={0.1}>
            <img
              src={servicesSection.image.src}
              alt={servicesSection.image.alt}
              width={1000}
              height={667}
              loading="lazy"
              decoding="async"
              className="aspect-[3/2] w-full rounded-2xl object-cover shadow-xl shadow-navy/20"
            />
          </Reveal>
        </div>

        <ul className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map(({ icon: Icon, title, description }, i) => (
            <Reveal
              as="li"
              key={title}
              delay={(i % 3) * 0.08}
              className="group relative rounded-2xl border border-slate-200 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-electric/40 hover:shadow-xl hover:shadow-electric/10"
            >
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-electric to-cyan text-white shadow-md shadow-electric/30">
                <Icon className="h-6 w-6" aria-hidden="true" />
              </span>
              <h3 className="mt-5 text-xl font-semibold text-midnight">{title}</h3>
              <p className="mt-3 leading-relaxed text-slate-600">{description}</p>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  )
}
