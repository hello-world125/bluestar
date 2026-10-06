/**
 * ─────────────────────────────────────────────────────────────
 *  BlueStar Technology: site content
 * ─────────────────────────────────────────────────────────────
 *  All editable copy lives in this file. Change text here and the
 *  page updates; you shouldn't need to touch the components.
 *
 *  Items marked  PLACEHOLDER  must be replaced before launch.
 *  To swap an image, drop a new file in src/assets/images and change
 *  the matching import below (keep the `alt` text in sync).
 */
import type { LucideIcon } from 'lucide-react'
import {
  Compass,
  Smartphone,
  Cloud,
  Headset,
  ShieldCheck,
  Workflow,
  Sun,
  Gauge,
  Navigation,
  Zap,
  Search,
  ClipboardList,
  CodeXml,
  LifeBuoy,
} from 'lucide-react'

import heroImg1920 from './assets/images/hero-blue-star-1920.webp'
import heroImg960 from './assets/images/hero-blue-star-960.webp'
import nebulaImg from './assets/images/nebula-blue.webp'
import starfieldImg from './assets/images/starfield-milky-way.webp'
import serverRoomImg from './assets/images/cloud-server-room.webp'
import teamImg from './assets/images/team-collaboration.webp'
import whiteboardImg from './assets/images/strategy-whiteboard.webp'

/* ── Company ─────────────────────────────────────────────── */
export const company = {
  name: 'BlueStar Technology',
  legalName: 'Bluestar Technology LLC',
  location: 'Florida',
  email: 'hello@bluestartech.example', // PLACEHOLDER
  phone: '(555) 010-0000', // PLACEHOLDER
  phoneHref: 'tel:+15550100000', // PLACEHOLDER
  hours: 'Mon–Fri, 9am–6pm ET', // PLACEHOLDER
  copyrightYear: 2026,
}

/* ── Navigation ──────────────────────────────────────────── */
export const navLinks = [
  { label: 'Services', href: '#services' },
  { label: 'About', href: '#about' },
  { label: 'Process', href: '#process' },
  { label: 'Contact', href: '#contact' },
]

export const navCta = { label: 'Get a Free Consultation', href: '#contact' }

/* ── Hero ────────────────────────────────────────────────── */
/*
 * Tagline alternatives you can swap into `hero.eyebrow` or `hero.headline`:
 *   • "Your guiding star in technology"      (current)
 *   • "Clear direction for every tech decision"
 *   • "Brighter technology. Clearer path."
 *   • "Navigate technology with confidence"
 */
export const hero = {
  eyebrow: 'IT consulting · Florida',
  headline: 'Your guiding star',
  headlineAccent: 'in technology',
  subheadline:
    'BlueStar Technology helps small and growing businesses make confident technology decisions, then builds, secures, and supports what you need to move forward.',
  primaryCta: { label: 'Get Started', href: '#contact' },
  secondaryCta: { label: 'Our Services', href: '#services' },
  highlights: ['Honest, plain-English advice', 'Senior, hands-on expertise', 'Local to Florida'],
  image: {
    src: heroImg1920,
    srcSet: `${heroImg960} 960w, ${heroImg1920} 1920w`,
    alt: 'A single bright blue star shining in a deep blue night sky',
  },
}

/* ── Services ────────────────────────────────────────────── */
export type Service = { icon: LucideIcon; title: string; description: string }

export const servicesSection = {
  eyebrow: 'Services',
  title: 'Technology help, end to end',
  intro:
    'From the first strategy conversation to day-to-day support, we cover the essentials a growing business needs, without the enterprise overhead.',
  image: {
    src: serverRoomImg,
    alt: 'Two IT professionals with laptops standing beside a row of illuminated server racks',
  },
}

export const services: Service[] = [
  {
    icon: Compass,
    title: 'IT Consulting & Strategy',
    description:
      'Technology roadmaps, vendor selection, and budgeting advice that line up with your business goals, not the latest hype.',
  },
  {
    icon: Smartphone,
    title: 'Web & Mobile App Development',
    description:
      'Fast, modern websites and native-quality iOS and Android apps, designed around your customers and built to last.',
  },
  {
    icon: Cloud,
    title: 'Cloud & Infrastructure',
    description:
      'Migrations, Microsoft 365 / Google Workspace, backups, and networks set up properly so they scale with you.',
  },
  {
    icon: Headset,
    title: 'Managed IT Support',
    description:
      'Responsive help desk, device management, and proactive monitoring, so small problems never become big ones.',
  },
  {
    icon: ShieldCheck,
    title: 'Cybersecurity Basics',
    description:
      'MFA, endpoint protection, staff awareness training, and practical policies that close the most common gaps.',
  },
  {
    icon: Workflow,
    title: 'Software Integration / APIs',
    description:
      'Connect your CRM, accounting, e-commerce, and internal tools so data flows automatically and nothing is typed twice.',
  },
]

/* ── Why BlueStar (the star metaphor) ────────────────────── */
export type ValuePoint = { icon: LucideIcon; title: string; metaphor: string; description: string }

export const whySection = {
  eyebrow: 'Why BlueStar',
  title: 'Named for the brightest stars in the sky',
  intro:
    'Blue stars burn hotter and shine brighter than any other, and for centuries travelers have navigated by the stars. That is the kind of partner we aim to be.',
  image: {
    src: nebulaImg,
    alt: 'A glowing blue nebula surrounded by countless stars in deep space',
  },
}

export const valuePoints: ValuePoint[] = [
  {
    icon: Sun,
    title: 'Clarity',
    metaphor: 'Brightness',
    description:
      'We cut through jargon and explain your options plainly, so every decision is one you understand.',
  },
  {
    icon: Gauge,
    title: 'Reliability',
    metaphor: 'Heat & energy',
    description:
      'Systems built with care and monitored closely. Steady performance you can count on, day after day.',
  },
  {
    icon: Navigation,
    title: 'Guidance',
    metaphor: 'The guiding star',
    description:
      'We stay beside you from first question to long-term support, pointing the way as your needs change.',
  },
  {
    icon: Zap,
    title: 'Speed',
    metaphor: 'Stellar velocity',
    description:
      'A small, senior team means fast answers, quick turnarounds, and no waiting in a ticket queue.',
  },
]

/* ── Process ─────────────────────────────────────────────── */
export type ProcessStep = { icon: LucideIcon; title: string; description: string }

export const processSection = {
  eyebrow: 'Our process',
  title: 'A clear path from idea to outcome',
  intro: 'Four simple stages, with no surprises and a clear next step at every point.',
  image: {
    src: whiteboardImg,
    alt: 'A consultant presenting a plan on a whiteboard to a small team with laptops',
  },
}

export const processSteps: ProcessStep[] = [
  {
    icon: Search,
    title: 'Discover',
    description:
      'We listen first: your goals, your current setup, and what is getting in the way.',
  },
  {
    icon: ClipboardList,
    title: 'Plan',
    description:
      'You get a clear, prioritized plan with honest timelines and transparent pricing.',
  },
  {
    icon: CodeXml,
    title: 'Build',
    description:
      'We implement in small, visible steps, keeping you informed and in control throughout.',
  },
  {
    icon: LifeBuoy,
    title: 'Support',
    description:
      'After launch we stay on call, monitoring, maintaining, and improving as you grow.',
  },
]

/* ── About ─────────────────────────────────────────────────
 * PLACEHOLDER: rewrite this story in your own words.        */
export const about = {
  eyebrow: 'About us',
  title: 'A small firm that rolls up its sleeves',
  paragraphs: [
    'BlueStar Technology was founded in Florida with a simple idea: small and mid-sized businesses deserve the same thoughtful technology guidance that large companies take for granted, delivered by people who actually pick up the phone.',
    'We are a deliberately small, hands-on team. When you work with us you talk directly to the people designing and building your solution: no account managers, no hand-offs, no hidden fees.',
    'Whether you need a full app built, a cloud migration planned, or simply a trusted advisor to call when something breaks, we are here to help you find your direction.',
  ],
  stats: [
    // PLACEHOLDER: replace with your real numbers (or remove)
    { value: '10+', label: 'Years of experience' },
    { value: '50+', label: 'Projects delivered' },
    { value: '24h', label: 'Typical response time' },
  ],
  image: {
    src: teamImg,
    alt: 'A small team collaborating around a wooden table with laptops',
  },
}

/* ── Testimonials ──────────────────────────────────────────
 * PLACEHOLDER: these are sample quotes, not real clients.
 * Replace with genuine testimonials (with permission) before launch,
 * then set `testimonialsArePlaceholders` to false.            */
export const testimonialsArePlaceholders = true

export const testimonialsSection = {
  eyebrow: 'Testimonials',
  title: 'What clients say',
}

export const testimonials = [
  {
    quote:
      'BlueStar untangled years of mismatched systems in a few weeks. For the first time, I actually understand our technology and what it costs us.',
    name: 'Client Name',
    role: 'Owner, Sample Company',
  },
  {
    quote:
      'They built our customer app on time and explained every decision along the way. Responsive, honest, and genuinely invested in our success.',
    name: 'Client Name',
    role: 'Operations Director, Sample Company',
  },
  {
    quote:
      'Having BlueStar on call means our team just works. Problems get solved before we even notice them.',
    name: 'Client Name',
    role: 'Practice Manager, Sample Company',
  },
]

/* ── CTA banner ──────────────────────────────────────────── */
export const ctaBanner = {
  title: 'Ready to find your direction?',
  text: 'Book a free, no-obligation consultation. We will listen, ask good questions, and suggest a clear next step.',
  button: { label: 'Get a Free Consultation', href: '#contact' },
  image: {
    src: starfieldImg,
    alt: '', // decorative background
  },
}

/* ── Contact ─────────────────────────────────────────────── */
export const contactSection = {
  eyebrow: 'Contact',
  title: 'Let’s talk about your project',
  intro:
    'Tell us a little about what you need and we will get back to you within one business day.',
  successMessage:
    'Thanks! Your email app should open with your message ready to send. If it doesn’t, email us directly at the address on this page.',
}

/* ── Footer ──────────────────────────────────────────────── */
export const footer = {
  blurb: 'Hands-on IT consulting for growing businesses. Your guiding star in technology.',
}

/* ── Image credits (shown in the footer; see IMAGE_CREDITS.md) ── */
export const imageCredits = [
  { photographer: 'Rylan Hill', url: 'https://unsplash.com/photos/3o6NXErKXwo' },
  { photographer: 'Aron Visuals', url: 'https://unsplash.com/photos/4bVfDlj_yFE' },
  { photographer: 'Timur Kozmenko', url: 'https://unsplash.com/photos/yEFtNvBB0QM' },
  { photographer: 'Christina @ wocintechchat.com', url: 'https://unsplash.com/photos/glRqyWJgUeY' },
  { photographer: 'Annie Spratt', url: 'https://unsplash.com/photos/QckxruozjRg' },
  { photographer: 'Austin Distel', url: 'https://unsplash.com/photos/wD1LRb9OeEo' },
]
