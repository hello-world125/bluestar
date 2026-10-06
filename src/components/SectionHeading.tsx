import Reveal from './Reveal'

type SectionHeadingProps = {
  id?: string
  eyebrow: string
  title: string
  intro?: string
  tone?: 'light' | 'dark'
  align?: 'center' | 'left'
}

export default function SectionHeading({
  id,
  eyebrow,
  title,
  intro,
  tone = 'light',
  align = 'center',
}: SectionHeadingProps) {
  const dark = tone === 'dark'
  return (
    <Reveal className={`max-w-2xl ${align === 'center' ? 'mx-auto text-center' : ''}`}>
      <p className={`text-sm font-semibold uppercase tracking-[0.2em] ${dark ? 'text-cyan' : 'text-electric'}`}>
        {eyebrow}
      </p>
      <h2 id={id} className={`mt-3 text-3xl font-bold sm:text-4xl ${dark ? 'text-white' : 'text-midnight'}`}>
        {title}
      </h2>
      {intro && (
        <p className={`mt-4 text-lg leading-relaxed ${dark ? 'text-slate-300' : 'text-slate-600'}`}>{intro}</p>
      )}
    </Reveal>
  )
}
