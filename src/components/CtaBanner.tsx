import { ArrowRight } from 'lucide-react'
import Reveal from './Reveal'
import { StarMark } from './Logo'
import { ctaBanner } from '../content'

export default function CtaBanner() {
  return (
    <section aria-labelledby="cta-heading" className="relative isolate overflow-hidden bg-midnight py-20 text-white sm:py-24">
      <img
        src={ctaBanner.image.src}
        alt={ctaBanner.image.alt}
        width={1600}
        height={750}
        loading="lazy"
        decoding="async"
        className="absolute inset-0 -z-20 h-full w-full object-cover"
      />
      <div aria-hidden="true" className="absolute inset-0 -z-10 bg-gradient-to-r from-midnight/90 via-midnight/60 to-midnight/90" />

      <Reveal className="container-x flex flex-col items-center text-center">
        <StarMark className="h-14 w-14 drop-shadow-[0_0_18px_rgba(125,227,255,0.8)]" />
        <h2 id="cta-heading" className="star-glow mt-6 max-w-2xl text-3xl font-bold sm:text-5xl">
          {ctaBanner.title}
        </h2>
        <p className="mt-5 max-w-xl text-lg text-slate-200">{ctaBanner.text}</p>
        <a href={ctaBanner.button.href} className="btn-primary mt-9 px-8 py-3.5 text-base">
          {ctaBanner.button.label}
          <ArrowRight className="h-4 w-4" aria-hidden="true" />
        </a>
      </Reveal>
    </section>
  )
}
