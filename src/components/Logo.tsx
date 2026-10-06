import { useId } from 'react'

/** Four-point "blue star" mark with a hot white core and soft halo. */
export function StarMark({ className = 'h-9 w-9' }: { className?: string }) {
  const id = useId()
  return (
    <svg viewBox="0 0 64 64" className={className} aria-hidden="true">
      <defs>
        <radialGradient id={`${id}-core`} cx="50%" cy="50%" r="50%">
          <stop offset="0" stopColor="#ffffff" />
          <stop offset="0.35" stopColor="#7de3ff" />
          <stop offset="1" stopColor="#2f6bff" />
        </radialGradient>
        <radialGradient id={`${id}-halo`} cx="50%" cy="50%" r="50%">
          <stop offset="0" stopColor="#7de3ff" stopOpacity="0.55" />
          <stop offset="1" stopColor="#2f6bff" stopOpacity="0" />
        </radialGradient>
      </defs>
      <circle cx="32" cy="32" r="22" fill={`url(#${id}-halo)`} />
      <path
        d="M32 4 L37.5 26.5 L60 32 L37.5 37.5 L32 60 L26.5 37.5 L4 32 L26.5 26.5 Z"
        fill={`url(#${id}-core)`}
      />
      <path d="M32 18 L34 30 L46 32 L34 34 L32 46 L30 34 L18 32 L30 30 Z" fill="#ffffff" opacity="0.9" />
    </svg>
  )
}

/** Star mark + "BlueStar Technology" wordmark (for dark backgrounds). */
export default function Logo({ className = '' }: { className?: string }) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <StarMark />
      <span className="font-display text-lg font-semibold leading-none tracking-tight text-white">
        BlueStar <span className="font-medium text-cyan">Technology</span>
      </span>
    </span>
  )
}
