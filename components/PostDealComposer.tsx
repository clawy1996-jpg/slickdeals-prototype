"use client";

import { useMemo, useState } from "react";

export function PostDealComposer() {
  const [form, setForm] = useState({
    url: "https://store.example.com/deal/linenlane-sheet-bundle",
    title: "LinenLane Cooling Sheet Bundle, Queen Size",
    description: "Soft bamboo blend sheet set with six color options and deep pockets.",
    price: "$39",
    oldPrice: "$88",
    store: "HomeCanvas",
    category: "Home",
    image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=900&q=80",
  });

  const preview = useMemo(() => form, [form]);

  return (
    <div className="grid gap-6 lg:grid-cols-[1fr_420px]">
      <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
        <h2 className="mb-4 text-xl font-bold">Submit a deal</h2>
        <div className="grid gap-4">
          {Object.entries(form).map(([key, value]) => (
            <label key={key} className="grid gap-1 text-sm font-medium text-slate-700">
              <span className="capitalize">{key}</span>
              <input value={value} onChange={(e) => setForm((prev) => ({ ...prev, [key]: e.target.value }))} className="rounded-xl border border-slate-200 px-4 py-3 outline-none focus:border-blue-500" />
            </label>
          ))}
        </div>
        <div className="mt-4 flex gap-3">
          <a href={preview.url} target="_blank" rel="noopener noreferrer" className="rounded-xl bg-[var(--accent)] px-4 py-3 text-sm font-semibold text-white">Preview post</a>
          <button onClick={async () => { await navigator.clipboard.writeText(JSON.stringify(preview, null, 2)); }} className="rounded-xl border border-slate-200 px-4 py-3 text-sm font-semibold text-slate-700">Save draft</button>
        </div>
      </section>

      <aside className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
        <h2 className="mb-4 text-xl font-bold">Live preview</h2>
        <div className="overflow-hidden rounded-2xl border border-slate-200">
          <img src={preview.image} alt={preview.title} className="h-52 w-full object-cover" />
          <div className="space-y-3 p-4">
            <div className="text-xs font-semibold uppercase tracking-wide text-slate-500">{preview.category} • {preview.store}</div>
            <div className="text-lg font-bold text-slate-900">{preview.title}</div>
            <div className="flex items-end gap-2"><span className="text-2xl font-black text-[var(--accent)]">{preview.price}</span><span className="text-sm text-slate-500 line-through">{preview.oldPrice}</span></div>
            <p className="text-sm text-slate-600">{preview.description}</p>
            <div className="rounded-xl bg-slate-50 p-3 text-xs text-slate-500">Link preview: {preview.url}</div>
          </div>
        </div>
      </aside>
    </div>
  );
}
