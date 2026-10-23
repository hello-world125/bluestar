import { useRef, useState, type ChangeEvent, type FormEvent, type ReactNode } from 'react'
import { CircleAlert, CircleCheck, Clock, Mail, MapPin, Phone, Send } from 'lucide-react'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'
import { company, contactSection } from '../content'

type Fields = { name: string; email: string; company: string; message: string }
type Errors = Partial<Record<keyof Fields, string>>

const empty: Fields = { name: '', email: '', company: '', message: '' }
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/

function validate(f: Fields): Errors {
  const errors: Errors = {}
  if (!f.name.trim()) errors.name = 'Please enter your name.'
  if (!f.email.trim()) errors.email = 'Please enter your email address.'
  else if (!EMAIL_RE.test(f.email.trim())) errors.email = 'Please enter a valid email address.'
  if (f.message.trim().length < 10) errors.message = 'Please tell us a bit more (at least 10 characters).'
  return errors
}

/**
 * No backend: on a valid submit we open the visitor's email client with a pre-filled message.
 * To use a form service (Formspree, Netlify Forms, your own API…), replace this function.
 */
function submitForm(f: Fields) {
  const subject = `Consultation request from ${f.name}${f.company ? ` (${f.company})` : ''}`
  const body = `Name: ${f.name}\nEmail: ${f.email}\nCompany: ${f.company || '-'}\n\n${f.message}`
  window.location.href = `mailto:${company.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
}

export default function Contact() {
  const [fields, setFields] = useState<Fields>(empty)
  const [errors, setErrors] = useState<Errors>({})
  const [touched, setTouched] = useState(false)
  const [sent, setSent] = useState(false)
  const formRef = useRef<HTMLFormElement>(null)

  const update = (key: keyof Fields) => (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const next = { ...fields, [key]: e.target.value }
    setFields(next)
    if (touched) setErrors(validate(next)) // re-validate live only after the first submit attempt
  }

  const onSubmit = (e: FormEvent) => {
    e.preventDefault()
    setTouched(true)
    const result = validate(fields)
    setErrors(result)
    const firstInvalid = (Object.keys(result) as (keyof Fields)[])[0]
    if (firstInvalid) {
      formRef.current?.querySelector<HTMLElement>(`[name="${firstInvalid}"]`)?.focus()
      return
    }
    submitForm(fields)
    setSent(true)
    setFields(empty)
    setTouched(false)
  }

  const inputClass = (invalid: boolean) =>
    `mt-2 block w-full rounded-xl border bg-white px-4 py-3 text-midnight placeholder:text-slate-400 shadow-sm transition focus:outline-none focus:ring-4 ${
      invalid
        ? 'border-red-500 focus:border-red-500 focus:ring-red-500/20'
        : 'border-slate-300 focus:border-electric focus:ring-electric/20'
    }`

  const info = [
    { icon: Mail, label: 'Email', value: company.email, href: `mailto:${company.email}` },
    { icon: Phone, label: 'Phone', value: company.phone },
    { icon: MapPin, label: 'Location', value: company.location },
    { icon: Clock, label: 'Hours', value: company.hours },
  ]

  return (
    <section id="contact" aria-labelledby="contact-heading" className="bg-white py-20 sm:py-28">
      <div className="container-x grid gap-12 lg:grid-cols-[1fr_1.3fr] lg:gap-16">
        <div>
          <SectionHeading
            id="contact-heading"
            eyebrow={contactSection.eyebrow}
            title={contactSection.title}
            intro={contactSection.intro}
            align="left"
          />
          <Reveal delay={0.1}>
            <ul className="mt-10 space-y-5">
              {info.map(({ icon: Icon, label, value, href }) => (
                <li key={label} className="flex items-start gap-4">
                  <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-starlight text-electric">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <span>
                    <span className="block text-sm text-slate-500">{label}</span>
                    {href ? (
                      <a href={href} className="font-medium text-midnight underline-offset-4 hover:text-electric hover:underline">
                        {value}
                      </a>
                    ) : (
                      <span className="font-medium text-midnight">{value}</span>
                    )}
                  </span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        <Reveal delay={0.15}>
          <form
            ref={formRef}
            onSubmit={onSubmit}
            noValidate
            aria-describedby="form-note"
            className="rounded-3xl border border-slate-200 bg-mist p-6 shadow-sm sm:p-10"
          >
            <div className="grid gap-6 sm:grid-cols-2">
              <Field label="Name" name="name" required error={errors.name}>
                <input
                  id="name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  value={fields.name}
                  onChange={update('name')}
                  aria-invalid={!!errors.name}
                  aria-describedby={errors.name ? 'name-error' : undefined}
                  className={inputClass(!!errors.name)}
                />
              </Field>
              <Field label="Email" name="email" required error={errors.email}>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  value={fields.email}
                  onChange={update('email')}
                  aria-invalid={!!errors.email}
                  aria-describedby={errors.email ? 'email-error' : undefined}
                  className={inputClass(!!errors.email)}
                />
              </Field>
              <Field label="Company" name="company" className="sm:col-span-2">
                <input
                  id="company"
                  name="company"
                  type="text"
                  autoComplete="organization"
                  value={fields.company}
                  onChange={update('company')}
                  className={inputClass(false)}
                />
              </Field>
              <Field label="Message" name="message" required error={errors.message} className="sm:col-span-2">
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={fields.message}
                  onChange={update('message')}
                  aria-invalid={!!errors.message}
                  aria-describedby={errors.message ? 'message-error' : undefined}
                  placeholder="What can we help you with?"
                  className={`${inputClass(!!errors.message)} resize-y`}
                />
              </Field>
            </div>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <p id="form-note" className="text-sm text-slate-500">
                <span aria-hidden="true">*</span> Required fields
              </p>
              <button type="submit" className="btn-primary px-8 py-3.5 text-base">
                Send message
                <Send className="h-4 w-4" aria-hidden="true" />
              </button>
            </div>

            <div aria-live="polite">
              {sent && (
                <p className="mt-6 flex items-start gap-3 rounded-xl bg-emerald-50 p-4 text-sm text-emerald-900">
                  <CircleCheck className="mt-0.5 h-5 w-5 shrink-0" aria-hidden="true" />
                  {contactSection.successMessage}
                </p>
              )}
            </div>
          </form>
        </Reveal>
      </div>
    </section>
  )
}

function Field({
  label,
  name,
  required,
  error,
  className = '',
  children,
}: {
  label: string
  name: string
  required?: boolean
  error?: string
  className?: string
  children: ReactNode
}) {
  return (
    <div className={className}>
      <label htmlFor={name} className="text-sm font-semibold text-midnight">
        {label}
        {required && (
          <>
            <span aria-hidden="true" className="text-red-600">
              {' '}
              *
            </span>
            <span className="sr-only"> (required)</span>
          </>
        )}
      </label>
      {children}
      {error && (
        <p id={`${name}-error`} className="mt-2 flex items-center gap-1.5 text-sm text-red-700">
          <CircleAlert className="h-4 w-4 shrink-0" aria-hidden="true" />
          {error}
        </p>
      )}
    </div>
  )
}
