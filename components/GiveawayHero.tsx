"use client";

import { useEffect, useState } from "react";

export function GiveawayHero({ title, prize, bannerImage, entries, description }: { title: string; prize: string; bannerImage: string; entries: number; description: string }) {
  const [seconds, setSeconds] = useState(60 * 60 * 36 + 17 * 60 + 12);

  useEffect(() => {
    const id = setInterval(() => setSeconds((s) => Math.max(0, s - 1)), 1000);
    return () => clearInterval(id);
  }, []);

  const days = Math.floor(seconds / 86400);
  const hours = Math.floor((seconds % 86400) / 3600);
  const mins = Math.floor((seconds % 3600) / 60);

  return (
    <section className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
      <div className="grid lg:grid-cols-[1.1fr_0.9fr]">
        <div className="relative min-h-[320px]">
          <img src={bannerImage} alt={title} className="absolute inset-0 h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/80 to-slate-900/10" />
          <div className="relative z-10 flex h-full flex-col justify-end gap-4 p-6 text-white lg:p-8">
            <div className="inline-flex w-fit rounded-full bg-white/15 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em]">Featured giveaway</div>
            <h1 className="max-w-xl text-4xl font-black leading-tight">{title}</h1>
            <p className="max-w-lg text-sm text-blue-50/90">{description}</p>
          </div>
        </div>
        <div className="space-y-6 p-6 lg:p-8">
          <div>
            <div className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">Prize</div>
            <div className="mt-2 text-2xl font-black text-slate-900">{prize}</div>
          </div>
          <div className="grid grid-cols-3 gap-3">
            {[`${days}d`, `${hours}h`, `${mins}m`].map((value, idx) => (
              <div key={idx} className="rounded-2xl bg-slate-50 p-4 text-center">
                <div className="text-2xl font-black text-[var(--accent)]">{value}</div>
                <div className="text-xs uppercase tracking-wide text-slate-500">remaining</div>
              </div>
            ))}
          </div>
          <div className="rounded-2xl bg-blue-50 p-4 text-sm text-blue-900">{entries.toLocaleString()} entries so far. Join the crowd and fake an instant success state with local-only interaction.</div>
          <button className="w-full rounded-2xl bg-[var(--accent)] px-4 py-3 text-sm font-semibold text-white">Enter giveaway</button>
        </div>
      </div>
    </section>
  );
}
