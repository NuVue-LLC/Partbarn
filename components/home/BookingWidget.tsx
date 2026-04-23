"use client";

import { useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { BUSINESS } from "@/lib/constants";

type Tab = "bay" | "table" | "event";

const tabs: { id: Tab; label: string }[] = [
  { id: "bay", label: "Bay" },
  { id: "table", label: "Table" },
  { id: "event", label: "Event" },
];

const microcopy: Record<Tab, string> = {
  bay: "Up to 6 per bay. Food and drinks brought to you while you play.",
  table: "The kitchen runs till 10. Full bar, Barlow-perfect pours.",
  event: "Host 8 to 220. Custom menus, bays reserved, the night shaped around your group.",
};

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

const guestRanges = ["8-20", "20-40", "40-80", "80-140", "140-220"];

const times = (() => {
  const out: string[] = [];
  for (let h = 9; h <= 21; h++) {
    for (const m of [0, 30]) {
      const hh = String(h).padStart(2, "0");
      const mm = String(m).padStart(2, "0");
      out.push(`${hh}:${mm}`);
    }
  }
  return out;
})();

function todayISO() {
  const d = new Date();
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, "0");
  const day = String(d.getDate()).padStart(2, "0");
  return `${y}-${m}-${day}`;
}

export default function BookingWidget() {
  const router = useRouter();
  const [tab, setTab] = useState<Tab>("bay");
  const today = useMemo(todayISO, []);

  const [bay, setBay] = useState({ date: today, time: "18:00", party: 4 });
  const [table, setTable] = useState({ date: today, time: "19:00", party: 2 });
  const [event, setEvent] = useState({ type: "Corporate", guests: "20-40" });

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (tab === "bay") {
      const url = `${BUSINESS.booking.bayUrl}?date=${bay.date}&time=${bay.time}&party=${bay.party}`;
      window.open(url, "_blank", "noopener,noreferrer");
    } else if (tab === "table") {
      const url = `${BUSINESS.booking.tableUrl}?date=${table.date}&time=${table.time}&party=${table.party}`;
      window.open(url, "_blank", "noopener,noreferrer");
    } else {
      const params = new URLSearchParams({
        type: event.type,
        guests: event.guests,
      });
      router.push(`/private-events?${params.toString()}#form`);
    }
  };

  return (
    <div
      id="hero-booking"
      className="w-full bg-bg-cream/95 backdrop-blur-sm shadow-2xl border-t-2 border-brand-accent text-text-dark"
    >
      <div className="flex border-b border-text-dark/10" role="tablist" aria-label="Booking type">
        {tabs.map((t) => {
          const active = tab === t.id;
          return (
            <button
              key={t.id}
              role="tab"
              aria-selected={active}
              onClick={() => setTab(t.id)}
              className={`flex-1 eyebrow text-sm py-3 px-4 transition-all duration-300 relative ${
                active
                  ? "text-text-dark"
                  : "text-text-dark/45 hover:text-text-dark/70"
              }`}
            >
              {t.label}
              <span
                className={`absolute left-1/2 -translate-x-1/2 bottom-0 h-[3px] bg-brand-accent transition-all duration-300 ${
                  active ? "w-12" : "w-0"
                }`}
              />
            </button>
          );
        })}
      </div>

      <form onSubmit={submit} className="px-5 md:px-6 py-5 md:py-6">
        {tab === "bay" && (
          <div className="flex flex-col gap-3">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              <Field label="Date">
                <input
                  type="date"
                  value={bay.date}
                  min={today}
                  onChange={(e) => setBay({ ...bay, date: e.target.value })}
                  className={inputClass}
                />
              </Field>
              <Field label="Time">
                <select
                  value={bay.time}
                  onChange={(e) => setBay({ ...bay, time: e.target.value })}
                  className={inputClass}
                >
                  {times.map((t) => (
                    <option key={t} value={t}>{format12(t)}</option>
                  ))}
                </select>
              </Field>
              <Field label="Party">
                <select
                  value={bay.party}
                  onChange={(e) => setBay({ ...bay, party: Number(e.target.value) })}
                  className={inputClass}
                >
                  {[1, 2, 3, 4, 5, 6].map((n) => (
                    <option key={n} value={n}>{n}</option>
                  ))}
                </select>
              </Field>
            </div>
            <button type="submit" className={submitClass}>Search Availability</button>
          </div>
        )}

        {tab === "table" && (
          <div className="flex flex-col gap-3">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              <Field label="Date">
                <input
                  type="date"
                  value={table.date}
                  min={today}
                  onChange={(e) => setTable({ ...table, date: e.target.value })}
                  className={inputClass}
                />
              </Field>
              <Field label="Time">
                <select
                  value={table.time}
                  onChange={(e) => setTable({ ...table, time: e.target.value })}
                  className={inputClass}
                >
                  {times.map((t) => (
                    <option key={t} value={t}>{format12(t)}</option>
                  ))}
                </select>
              </Field>
              <Field label="Party">
                <select
                  value={table.party}
                  onChange={(e) => setTable({ ...table, party: Number(e.target.value) })}
                  className={inputClass}
                >
                  {Array.from({ length: 12 }, (_, i) => i + 1).map((n) => (
                    <option key={n} value={n}>{n}</option>
                  ))}
                </select>
              </Field>
            </div>
            <button type="submit" className={submitClass}>Search Availability</button>
          </div>
        )}

        {tab === "event" && (
          <div className="flex flex-col gap-3">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <Field label="Event Type">
                <select
                  value={event.type}
                  onChange={(e) => setEvent({ ...event, type: e.target.value })}
                  className={inputClass}
                >
                  {eventTypes.map((t) => (
                    <option key={t} value={t}>{t}</option>
                  ))}
                </select>
              </Field>
              <Field label="Guests">
                <select
                  value={event.guests}
                  onChange={(e) => setEvent({ ...event, guests: e.target.value })}
                  className={inputClass}
                >
                  {guestRanges.map((g) => (
                    <option key={g} value={g}>{g}</option>
                  ))}
                </select>
              </Field>
            </div>
            <button type="submit" className={submitClass}>Plan Your Event</button>
          </div>
        )}

        <p className="font-barlow text-xs text-text-dark/55 mt-4 leading-relaxed text-center">
          {microcopy[tab]}
        </p>
      </form>
    </div>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="flex flex-col gap-1">
      <span className="eyebrow text-[10px] text-text-dark/60">{label}</span>
      {children}
    </label>
  );
}

const inputClass =
  "w-full bg-white/80 border border-text-dark/15 px-3 py-2.5 font-barlow text-text-dark text-sm focus:outline-none focus:border-brand-accent transition-colors rounded-none";

const submitClass =
  "w-full eyebrow text-sm bg-brand-accent text-text-dark px-6 py-3 hover:bg-brand-accent-dark hover:-translate-y-0.5 transition-all duration-300 shadow-sm hover:shadow-md";

function format12(t: string) {
  const [h, m] = t.split(":").map(Number);
  const h12 = ((h + 11) % 12) + 1;
  const ampm = h < 12 ? "AM" : "PM";
  return `${h12}:${String(m).padStart(2, "0")} ${ampm}`;
}
