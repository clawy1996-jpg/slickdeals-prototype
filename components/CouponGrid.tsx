"use client";

import { Copy, Tag } from "lucide-react";
import type { Coupon } from "@/data/mockData";
import { useState } from "react";

export function CouponGrid({ coupons }: { coupons: Coupon[] }) {
  const [copied, setCopied] = useState<string | null>(null);

  return (
    <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
      {coupons.map((coupon) => (
        <article key={coupon.id} className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
          <div className="mb-3 flex items-center justify-between gap-3">
            <div>
              <div className="text-xs font-semibold uppercase tracking-wide text-slate-500">{coupon.category}</div>
              <h3 className="text-lg font-bold text-slate-900">{coupon.store}</h3>
            </div>
            <span className="rounded-full bg-blue-50 px-3 py-1 text-sm font-bold text-blue-700">{coupon.savings}</span>
          </div>
          <div className="mb-3 text-sm font-semibold text-slate-800">{coupon.title}</div>
          <p className="mb-4 text-sm text-slate-600">{coupon.description}</p>
          <div className="mb-3 flex items-center justify-between rounded-xl border border-dashed border-slate-300 bg-slate-50 px-3 py-2">
            <div className="inline-flex items-center gap-2 font-mono text-sm font-bold text-slate-900">
              <Tag className="h-4 w-4 text-slate-500" />
              {coupon.code ?? "AUTO-APPLY"}
            </div>
            <button
              onClick={() => setCopied(coupon.id)}
              className="inline-flex items-center gap-1 rounded-lg bg-slate-900 px-3 py-1.5 text-xs font-semibold text-white"
            >
              <Copy className="h-3.5 w-3.5" /> {copied === coupon.id ? "Copied" : "Copy"}
            </button>
          </div>
          <div className="text-xs font-medium text-emerald-700">{coupon.successRate}</div>
        </article>
      ))}
    </div>
  );
}
