"use client";

import { useState } from "react";
import FadeUp from "@/components/ui/FadeUp";

const eventTypes = [
  "Corporate",
  "Birthday",
  "Bachelorette/Bachelor",
  "Wedding-Related",
  "Holiday Party",
  "Family Celebration",
  "Full Venue Buyout",
  "Other",
];

const guestRanges = ["8–20", "20–40", "40–80", "80–140", "140–220"];

const budgetRanges = ["Under $2k", "$2–5k", "$5–10k", "$10k+", "Not sure yet"];

const referralSources = [
  "Google",
  "Instagram",
  "Facebook",
  "Friend or Colleague",
  "Drove by / Saw the Barn",
  "Corporate Referral",
  "Event Planner",
  "Other",
];

function todayISO() {
  const d = new Date();
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, "0");
  const day = String(d.getDate()).padStart(2, "0");
  return `${y}-${m}-${day}`;
}

type FormState = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  eventType: string;
  eventDate: string;
  guestCount: string;
  budget: string;
  referral: string;
  details: string;
};

const initialState: FormState = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  eventType: "",
  eventDate: "",
  guestCount: "",
  budget: "",
  referral: "",
  details: "",
};

export default function InquiryForm() {
  const [form, setForm] = useState<FormState>(initialState);
  const [submitted, setSubmitted] = useState(false);
  const today = todayISO();

  const update = <K extends keyof FormState>(key: K, value: FormState[K]) =>
    setForm((f) => ({ ...f, [key]: value }));

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Private event inquiry:", form);
    setSubmitted(true);
  };

  return (
    <section
      id="plan"
      aria-labelledby="plan-heading"
      className="bg-bg-off py-24 md:py-32 scroll-mt-24"
    >
      <div className="max-w-4xl mx-auto px-6 md:px-12">
        <div className="text-center mb-14 md:mb-16">
          <FadeUp>
            <p className="eyebrow text-brand-accent text-sm mb-5">Plan Your Event</p>
          </FadeUp>
          <FadeUp delay={0.08}>
            <h2
              id="plan-heading"
              className="font-playfair font-normal text-4xl md:text-6xl text-text-dark leading-[1.1] mb-6"
            >
              Tell us about your event.
            </h2>
          </FadeUp>
          <FadeUp delay={0.16}>
            <p className="font-barlow text-text-dark/80 text-base md:text-lg leading-[1.7] max-w-2xl mx-auto">
              The more you share, the faster and more useful our response. We aim to reply
              within one business day.
            </p>
          </FadeUp>
        </div>

        <FadeUp delay={0.22}>
          {submitted ? (
            <div
              role="status"
              aria-live="polite"
              className="bg-bg-cream border-t-2 border-brand-accent shadow-sm p-10 md:p-12 text-center"
            >
              <p className="eyebrow text-brand-accent text-sm mb-4">Inquiry Received</p>
              <h3 className="font-playfair font-normal text-3xl md:text-4xl text-text-dark mb-4">
                Thanks — we&apos;ll be in touch.
              </h3>
              <p className="font-barlow text-text-dark/80 text-base leading-[1.7] max-w-lg mx-auto">
                We aim to reply within one business day. Check your email, including the spam
                folder just in case.
              </p>
            </div>
          ) : (
            <form
              onSubmit={submit}
              noValidate
              className="bg-bg-cream border-t-2 border-brand-accent shadow-sm p-6 md:p-10"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
                <Field label="First Name" htmlFor="first-name" required>
                  <input
                    id="first-name"
                    type="text"
                    required
                    autoComplete="given-name"
                    value={form.firstName}
                    onChange={(e) => update("firstName", e.target.value)}
                    className={inputClass}
                  />
                </Field>
                <Field label="Last Name" htmlFor="last-name" required>
                  <input
                    id="last-name"
                    type="text"
                    required
                    autoComplete="family-name"
                    value={form.lastName}
                    onChange={(e) => update("lastName", e.target.value)}
                    className={inputClass}
                  />
                </Field>
                <Field label="Email" htmlFor="email" required>
                  <input
                    id="email"
                    type="email"
                    required
                    autoComplete="email"
                    value={form.email}
                    onChange={(e) => update("email", e.target.value)}
                    className={inputClass}
                  />
                </Field>
                <Field label="Phone" htmlFor="phone" required>
                  <input
                    id="phone"
                    type="tel"
                    required
                    autoComplete="tel"
                    value={form.phone}
                    onChange={(e) => update("phone", e.target.value)}
                    className={inputClass}
                  />
                </Field>
                <Field label="Event Type" htmlFor="event-type" required>
                  <select
                    id="event-type"
                    required
                    value={form.eventType}
                    onChange={(e) => update("eventType", e.target.value)}
                    className={inputClass}
                  >
                    <option value="" disabled>Select…</option>
                    {eventTypes.map((t) => (
                      <option key={t} value={t}>{t}</option>
                    ))}
                  </select>
                </Field>
                <Field label="Event Date" htmlFor="event-date">
                  <input
                    id="event-date"
                    type="date"
                    min={today}
                    value={form.eventDate}
                    onChange={(e) => update("eventDate", e.target.value)}
                    className={inputClass}
                  />
                </Field>
                <Field label="Guest Count" htmlFor="guest-count" required>
                  <select
                    id="guest-count"
                    required
                    value={form.guestCount}
                    onChange={(e) => update("guestCount", e.target.value)}
                    className={inputClass}
                  >
                    <option value="" disabled>Select…</option>
                    {guestRanges.map((g) => (
                      <option key={g} value={g}>{g}</option>
                    ))}
                  </select>
                </Field>
                <Field label="Budget Range" htmlFor="budget">
                  <select
                    id="budget"
                    value={form.budget}
                    onChange={(e) => update("budget", e.target.value)}
                    className={inputClass}
                  >
                    <option value="" disabled>Select…</option>
                    {budgetRanges.map((b) => (
                      <option key={b} value={b}>{b}</option>
                    ))}
                  </select>
                </Field>
                <div className="md:col-span-2">
                  <Field label="How Did You Hear About Us?" htmlFor="referral">
                    <select
                      id="referral"
                      value={form.referral}
                      onChange={(e) => update("referral", e.target.value)}
                      className={inputClass}
                    >
                      <option value="" disabled>Select…</option>
                      {referralSources.map((r) => (
                        <option key={r} value={r}>{r}</option>
                      ))}
                    </select>
                  </Field>
                </div>
                <div className="md:col-span-2">
                  <Field label="Event Details" htmlFor="details">
                    <textarea
                      id="details"
                      rows={6}
                      value={form.details}
                      onChange={(e) => update("details", e.target.value)}
                      placeholder="Format (seated dinner, cocktail reception, bay tournament), must-haves, dietary notes, anything else we should know."
                      className={`${inputClass} resize-y min-h-[140px]`}
                    />
                  </Field>
                </div>
              </div>

              <div className="mt-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <p className="font-barlow text-text-dark/60 text-xs leading-relaxed max-w-md">
                  We&apos;ll only use your info to reply to this inquiry.
                </p>
                <button type="submit" className={submitClass}>
                  Send Inquiry
                </button>
              </div>
            </form>
          )}
        </FadeUp>
      </div>
    </section>
  );
}

function Field({
  label,
  htmlFor,
  required,
  children,
}: {
  label: string;
  htmlFor: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={htmlFor} className="eyebrow text-[11px] text-text-dark/75">
        {label}
        {required && <span className="text-brand-accent ml-1" aria-hidden="true">*</span>}
      </label>
      {children}
    </div>
  );
}

const inputClass =
  "w-full bg-white/80 border border-text-dark/15 px-4 py-3 font-barlow text-text-dark text-sm focus:outline-none focus:border-brand-accent transition-colors rounded-none";

const submitClass =
  "inline-flex items-center justify-center eyebrow text-sm bg-brand-accent text-text-dark px-8 py-4 hover:bg-brand-accent-dark hover:-translate-y-0.5 transition-all duration-300 shadow-sm hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent focus-visible:ring-offset-2";
