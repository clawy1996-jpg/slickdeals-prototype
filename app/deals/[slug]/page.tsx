import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { deals, relatedDeals } from "@/data/mockData";
import { DealCard } from "@/components/DealCard";

export default async function DealDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const deal = deals.find((item) => item.slug === slug);
  if (!deal) notFound();

  return (
    <main className="mx-auto max-w-7xl px-4 py-6 lg:px-6">
      <div className="grid gap-6 lg:grid-cols-[1fr_320px]">
        <div className="space-y-6">
          <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="mb-4 flex flex-wrap items-center gap-2 text-xs font-semibold uppercase tracking-wide text-slate-500">
              <Link href="/">Frontpage</Link>
              <span>/</span>
              <span>{deal.category}</span>
              <span>/</span>
              <span>{deal.store}</span>
            </div>
            <div className="grid gap-5 lg:grid-cols-[300px_1fr]">
              <div className="relative overflow-hidden rounded-3xl bg-slate-100">
                <Image src={deal.image} alt={deal.title} width={800} height={800} className="h-full w-full object-cover" />
              </div>
              <div className="space-y-4">
                <div className="text-xs font-semibold uppercase tracking-[0.18em] text-blue-700">{deal.tag}</div>
                <h1 className="text-4xl font-black leading-tight text-slate-900">{deal.title}</h1>
                <div className="flex flex-wrap items-end gap-3">
                  <span className="text-4xl font-black text-[var(--accent)]">{deal.currentPrice}</span>
                  {deal.oldPrice && <span className="pb-1 text-lg text-slate-500 line-through">{deal.oldPrice}</span>}
                  <span className="pb-1 text-sm text-slate-500">{deal.shipping}</span>
                </div>
                <div className="flex flex-wrap gap-3 text-sm text-slate-600">
                  <span>Merchant: <strong className="text-slate-900">{deal.store}</strong></span>
                  <span>{deal.temperature} heat</span>
                  <span>{deal.comments} comments</span>
                  <span>Posted {deal.submittedAt}</span>
                </div>
                <div className="flex flex-wrap gap-3">
                  <button className="rounded-xl bg-[var(--accent)] px-5 py-3 text-sm font-semibold text-white">Go to merchant</button>
                  <button className="rounded-xl border border-slate-200 px-5 py-3 text-sm font-semibold text-slate-700">Save</button>
                  <button className="rounded-xl border border-slate-200 px-5 py-3 text-sm font-semibold text-slate-700">Share</button>
                </div>
                <div className="grid gap-4 lg:grid-cols-3">
                  <div className="rounded-2xl bg-slate-50 p-4"><div className="text-xs font-semibold uppercase tracking-wide text-slate-500">Editor notes</div><p className="mt-2 text-sm text-slate-700">{deal.editorNote}</p></div>
                  <div className="rounded-2xl bg-slate-50 p-4"><div className="text-xs font-semibold uppercase tracking-wide text-slate-500">Community notes</div><p className="mt-2 text-sm text-slate-700">{deal.communityNote}</p></div>
                  <div className="rounded-2xl bg-slate-50 p-4"><div className="text-xs font-semibold uppercase tracking-wide text-slate-500">Poster</div><p className="mt-2 text-sm text-slate-700">Found by <strong>{deal.submittedBy}</strong>, category {deal.category}, brand {deal.brand}.</p></div>
                </div>
              </div>
            </div>
          </section>

          <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="mb-4 text-2xl font-black text-slate-900">Deal details</h2>
            <p className="mb-4 text-sm leading-7 text-slate-600">{deal.summary} The prototype intentionally mirrors the long-form forum-to-commerce blend: headline, price proof, merchant CTA, then a wall of useful context and community validation.</p>
            <ul className="space-y-3 text-sm text-slate-700">
              {deal.bullets.map((item) => <li key={item} className="rounded-xl bg-slate-50 px-4 py-3">{item}</li>)}
            </ul>
          </section>

          <section id="comments" className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="mb-4 text-2xl font-black text-slate-900">Comments</h2>
            <div className="space-y-4">
              {["Heat is real, the older model never dipped this low.", "Merchant shipping estimate looks decent, but check color availability.", "Prototype note: comments should feel busy, nested, and opinionated."].map((comment, idx) => (
                <div key={idx} className="rounded-2xl border border-slate-200 p-4">
                  <div className="mb-2 text-xs font-semibold uppercase tracking-wide text-slate-500">user_{idx + 14} • {idx + 2} min ago</div>
                  <p className="text-sm text-slate-700">{comment}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-black text-slate-900">Related deals</h2>
            {relatedDeals.map((item) => <DealCard key={item.id} deal={item} compact />)}
          </section>
        </div>

        <aside className="space-y-4">
          <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
            <div className="text-xs font-semibold uppercase tracking-wide text-slate-500">Deal score</div>
            <div className="mt-2 text-5xl font-black text-orange-500">{deal.temperature}</div>
            <div className="mt-2 text-sm text-slate-600">Compact scoring block and CTA cluster inspired by deal-community layouts.</div>
          </div>
          <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
            <div className="text-xs font-semibold uppercase tracking-wide text-slate-500">Price history</div>
            <div className="mt-3 space-y-3">
              <div className="h-3 rounded-full bg-gradient-to-r from-blue-200 via-blue-500 to-blue-700" />
              <div className="flex justify-between text-xs text-slate-500"><span>90d ago {deal.oldPrice}</span><span>today {deal.currentPrice}</span></div>
            </div>
          </div>
        </aside>
      </div>
    </main>
  );
}
