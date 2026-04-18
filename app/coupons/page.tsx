import Link from "next/link";
import { CouponGrid } from "@/components/CouponGrid";
import { coupons, featuredStores } from "@/data/mockData";

export default function CouponsPage() {
  return (
    <main className="mx-auto max-w-7xl px-4 py-6 lg:px-6">
      <div className="space-y-6">
        <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
          <div className="grid gap-6 lg:grid-cols-[1fr_280px]">
            <div>
              <div className="text-xs font-semibold uppercase tracking-[0.18em] text-blue-700">Coupons</div>
              <h1 className="mt-2 text-3xl font-black text-slate-900">Promo codes and merchant offers</h1>
              <p className="mt-2 max-w-3xl text-sm text-slate-600">Dense coupon browsing with store tiles, category cues, and code-first cards. The structure intentionally mimics the “lots of value in a small space” feeling.</p>
            </div>
            <div className="rounded-2xl bg-slate-50 p-4">
              <div className="text-xs font-semibold uppercase tracking-wide text-slate-500">Featured stores</div>
              <div className="mt-3 flex flex-wrap gap-2">
                {featuredStores.map((store) => <Link key={store} href={`/coupons/${store.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`} className="rounded-full bg-white px-3 py-1.5 text-sm font-medium text-slate-700">{store}</Link>)}
              </div>
            </div>
          </div>
        </section>
        <CouponGrid coupons={coupons} />
      </div>
    </main>
  );
}
