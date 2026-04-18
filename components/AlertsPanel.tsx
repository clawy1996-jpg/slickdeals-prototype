"use client";

import { useState } from "react";
import type { AlertItem } from "@/data/mockData";

export function AlertsPanel({ initialAlerts }: { initialAlerts: AlertItem[] }) {
  const [alerts, setAlerts] = useState(initialAlerts);
  const [keyword, setKeyword] = useState("");

  return (
    <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
      <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
        <h2 className="mb-4 text-xl font-bold">Create a custom alert</h2>
        <div className="grid gap-4 md:grid-cols-2">
          <input value={keyword} onChange={(e) => setKeyword(e.target.value)} placeholder="Keyword or product" className="rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none focus:border-blue-500" />
          <input placeholder="Store" className="rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none focus:border-blue-500" />
          <input placeholder="Category" className="rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none focus:border-blue-500" />
          <input placeholder="Brand" className="rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none focus:border-blue-500" />
          <select className="rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none focus:border-blue-500"><option>Instant</option><option>Daily</option></select>
          <select className="rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none focus:border-blue-500"><option>Email</option><option>Push</option><option>In-app</option></select>
        </div>
        <button
          onClick={() => keyword && setAlerts([{ id: crypto.randomUUID(), keyword, cadence: "Instant", channel: "Push" }, ...alerts])}
          className="mt-4 rounded-xl bg-[var(--accent)] px-4 py-3 text-sm font-semibold text-white"
        >
          Save alert
        </button>
      </section>

      <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
        <h2 className="mb-4 text-xl font-bold">Notification preferences</h2>
        <div className="space-y-3 text-sm text-slate-700">
          <label className="flex items-center justify-between rounded-xl bg-slate-50 px-4 py-3"><span>In-app badges</span><input type="checkbox" defaultChecked /></label>
          <label className="flex items-center justify-between rounded-xl bg-slate-50 px-4 py-3"><span>Email digests</span><input type="checkbox" defaultChecked /></label>
          <label className="flex items-center justify-between rounded-xl bg-slate-50 px-4 py-3"><span>Mobile push</span><input type="checkbox" /></label>
        </div>
      </section>

      <section className="lg:col-span-2 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
        <h2 className="mb-4 text-xl font-bold">Saved alerts</h2>
        <div className="space-y-3">
          {alerts.map((alert) => (
            <div key={alert.id} className="flex flex-wrap items-center justify-between gap-3 rounded-xl border border-slate-200 px-4 py-3">
              <div>
                <div className="font-semibold text-slate-900">{alert.keyword}</div>
                <div className="text-sm text-slate-500">{[alert.store, alert.category, alert.brand].filter(Boolean).join(" • ") || "Any store/category"}</div>
              </div>
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-slate-500">
                <span className="rounded-full bg-blue-50 px-3 py-1 text-blue-700">{alert.cadence}</span>
                <span className="rounded-full bg-slate-100 px-3 py-1">{alert.channel}</span>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
