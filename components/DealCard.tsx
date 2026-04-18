"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowBigDown, ArrowBigUp, Bookmark, MessageSquare, Share2 } from "lucide-react";
import type { Deal } from "@/data/mockData";
import { useState } from "react";

export function DealCard({ deal, compact = false }: { deal: Deal; compact?: boolean }) {
  const [score, setScore] = useState(deal.temperature);
  const [saved, setSaved] = useState(false);

  return (
    <article className={`grid gap-3 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm ${compact ? "grid-cols-[72px_1fr]" : "grid-cols-[92px_1fr] lg:grid-cols-[88px_120px_1fr_120px]"}`}>
      <div className="flex flex-col items-center justify-start gap-1 rounded-xl bg-slate-50 px-2 py-3 text-slate-600">
        <button onClick={() => setScore((v) => v + 1)} className="rounded-md p-1 hover:bg-white"><ArrowBigUp className="h-5 w-5 text-orange-500" /></button>
        <div className="text-lg font-bold leading-none text-slate-900">{score}</div>
        <button onClick={() => setScore((v) => Math.max(v - 1, 0))} className="rounded-md p-1 hover:bg-white"><ArrowBigDown className="h-5 w-5 text-slate-400" /></button>
      </div>

      {!compact && (
        <div className="relative hidden overflow-hidden rounded-xl bg-slate-100 lg:block">
          <Image src={deal.image} alt={deal.title} fill className="object-cover" sizes="120px" />
        </div>
      )}

      <div className="space-y-2">
        <div className="flex flex-wrap items-center gap-2 text-xs font-semibold uppercase tracking-wide text-slate-500">
          <span className="rounded-full bg-blue-50 px-2 py-1 text-blue-700">{deal.tag}</span>
          <span>{deal.category}</span>
          <span>by {deal.submittedBy}</span>
          <span>{deal.submittedAt}</span>
        </div>
        {deal.externalUrl ? (
          <a href={deal.externalUrl} target="_blank" rel="noopener noreferrer" className="block text-lg font-semibold leading-tight text-slate-900 hover:text-blue-700">
            {deal.title}
          </a>
        ) : (
          <Link href={`/deals/${deal.slug}`} className="block text-lg font-semibold leading-tight text-slate-900 hover:text-blue-700">
            {deal.title}
          </Link>
        )}
        <p className="text-sm text-slate-600">{deal.summary}</p>
        <div className="flex flex-wrap items-center gap-3 text-sm text-slate-600">
          <span className="font-semibold text-slate-900">{deal.store}</span>
          {deal.shipping && <span>{deal.shipping}</span>}
          <span>{deal.brand}</span>
        </div>
        <div className="flex flex-wrap items-center gap-3 text-sm">
          <button onClick={() => setSaved((v) => !v)} className={`inline-flex items-center gap-1 rounded-full border px-3 py-1.5 ${saved ? "border-blue-600 bg-blue-50 text-blue-700" : "border-slate-200 text-slate-600"}`}>
            <Bookmark className="h-4 w-4" /> {saved ? "Saved" : "Save"}
          </button>
          <button onClick={async () => {
            const shareUrl = deal.externalUrl ?? `${window.location.origin}/deals/${deal.slug}`;
            if (navigator.share) {
              await navigator.share({ title: deal.title, url: shareUrl });
              return;
            }
            await navigator.clipboard.writeText(shareUrl);
          }} className="inline-flex items-center gap-1 rounded-full border border-slate-200 px-3 py-1.5 text-slate-600"><Share2 className="h-4 w-4" /> Share</button>
          {deal.externalUrl ? (
            <a href={deal.externalUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 rounded-full border border-slate-200 px-3 py-1.5 text-slate-600"><MessageSquare className="h-4 w-4" /> Open live</a>
          ) : (
            <Link href={`/deals/${deal.slug}#comments`} className="inline-flex items-center gap-1 rounded-full border border-slate-200 px-3 py-1.5 text-slate-600"><MessageSquare className="h-4 w-4" /> {deal.comments} comments</Link>
          )}
        </div>
      </div>

      <div className="flex flex-col items-start justify-between gap-3 rounded-xl bg-slate-50 p-3 lg:items-end">
        <div className="text-left lg:text-right">
          <div className="text-2xl font-black text-[var(--accent)]">{deal.currentPrice}</div>
          {deal.oldPrice && <div className="text-sm text-slate-500 line-through">{deal.oldPrice}</div>}
        </div>
        {deal.externalUrl ? (
          <a href={deal.externalUrl} target="_blank" rel="noopener noreferrer" className="rounded-xl bg-[var(--accent)] px-4 py-2 text-sm font-semibold text-white shadow-sm hover:opacity-90">
            Open deal
          </a>
        ) : (
          <Link href={`/deals/${deal.slug}`} className="rounded-xl bg-[var(--accent)] px-4 py-2 text-sm font-semibold text-white shadow-sm hover:opacity-90">
            View deal
          </Link>
        )}
      </div>
    </article>
  );
}
