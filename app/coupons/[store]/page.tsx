import { notFound } from "next/navigation";
import { coupons } from "@/data/mockData";
import { CouponGrid } from "@/components/CouponGrid";

export default async function StoreCouponsPage({ params }: { params: Promise<{ store: string }> }) {
  const { store } = await params;
  const filtered = coupons.filter((coupon) => coupon.storeSlug === store);
  if (!filtered.length) notFound();

  return (
    <main className="mx-auto max-w-7xl px-4 py-6 lg:px-6">
      <section className="space-y-6 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
        <div>
          <div className="text-xs font-semibold uppercase tracking-[0.18em] text-blue-700">Merchant coupons</div>
          <h1 className="mt-2 text-3xl font-black text-slate-900">{filtered[0].store}</h1>
          <p className="mt-2 text-sm text-slate-600">Merchant-specific coupon landing page with code cards, verification messaging, and a compact benefit-first presentation.</p>
        </div>
        <CouponGrid coupons={filtered} />
      </section>
    </main>
  );
}
