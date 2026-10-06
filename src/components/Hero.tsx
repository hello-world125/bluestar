import { motion } from 'framer-motion'
import { ArrowRight, CircleCheck } from 'lucide-react'
import Starfield from './Starfield'
import { StarMark } from './Logo'
import { hero } from '../content'

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] as const },
})

export default function Hero() {
  return (
    <section
      id="top"
      aria-labelledby="hero-heading"
      className="relative isolate flex min-h-[100svh] items-center overflow-hidden bg-midnight pb-20 pt-28 text-white"
    >
      {/* Background photo (above the fold, so it loads eagerly) */}
      <img
        src={hero.image.src}
        srcSet={hero.image.srcSet}
        sizes="100vw"
        alt={hero.image.alt}
        fetchPriority="high"
        decoding="async"
        className="absolute inset-0 -z-20 h-full w-full object-cover object-center"
      />
      {/* Readability overlay */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-gradient-to-b from-midnight/70 via-midnight/25 to-midnight"
      />
      <div aria-hidden="true" className="absolute inset-0 -z-10 bg-gradient-to-r from-midnight/80 via-midnight/30 to-transparent" />
      <div aria-hidden="true" className="absolute inset-0 -z-10">
        <Starfield />
      </div>

      {/* The "blue star": a large, softly pulsing brand star on wide screens */}
      <motion.div
        aria-hidden="true"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.4, delay: 0.3, ease: 'easeOut' }}
        className="pointer-events-none absolute right-[6%] top-1/2 -z-10 hidden -translate-y-1/2 lg:block"
      >
        <div className="relative h-[26rem] w-[26rem] xl:h-[30rem] xl:w-[30rem]">
          <div className="animate-star-pulse absolute inset-0 rounded-full bg-[radial-gradient(circle,rgba(125,227,255,0.45)_0%,rgba(47,107,255,0.18)_35%,transparent_70%)]" />
          <StarMark className="absolute inset-[22%] h-auto w-[56%] drop-shadow-[0_0_40px_rgba(125,227,255,0.9)]" />
        </div>
      </motion.div>

      <div className="container-x">
        <div className="max-w-3xl">
          <motion.p
            {...fadeUp(0)}
            className="inline-flex items-center gap-2 rounded-full border border-cyan/30 bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-cyan backdrop-blur"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-cyan shadow-[0_0_8px_2px_rgba(34,211,238,0.8)]" />
            {hero.eyebrow}
          </motion.p>

          <motion.h1
            {...fadeUp(0.1)}
            id="hero-heading"
            className="mt-6 text-4xl font-bold leading-[1.08] sm:text-6xl lg:text-7xl"
          >
            {hero.headline}{' '}
            <span className="star-glow bg-gradient-to-r from-sky-300 via-cyan to-white bg-clip-text text-transparent">
              {hero.headlineAccent}
            </span>
          </motion.h1>

          <motion.p {...fadeUp(0.2)} className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-300 sm:text-xl">
            {hero.subheadline}
          </motion.p>

          <motion.div {...fadeUp(0.3)} className="mt-10 flex flex-col gap-4 sm:flex-row">
            <a href={hero.primaryCta.href} className="btn-primary px-8 py-3.5 text-base">
              {hero.primaryCta.label}
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </a>
            <a href={hero.secondaryCta.href} className="btn-ghost px-8 py-3.5 text-base">
              {hero.secondaryCta.label}
            </a>
          </motion.div>

          <motion.ul {...fadeUp(0.4)} className="mt-12 flex flex-col gap-3 text-sm text-slate-300 sm:flex-row sm:gap-8">
            {hero.highlights.map((item) => (
              <li key={item} className="flex items-center gap-2">
                <CircleCheck className="h-4 w-4 text-cyan" aria-hidden="true" />
                {item}
              </li>
            ))}
          </motion.ul>
        </div>
      </div>
    </section>
  )
}
