import Link from "next/link";
import { DealCard } from "@/components/DealCard";
import { SidebarCard } from "@/components/SidebarCard";
import { categories, deals, featuredStores } from "@/data/mockData";

export default function HomePage() {
  const hero = deals[0];
  const frontpage = deals;

  return (
    <main className="mx-auto max-w-7xl px-4 py-6 lg:px-6">
      <div className="grid gap-6 lg:grid-cols-[1fr_320px]">
        <div className="space-y-6">
          <section className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm lg:p-6">
            <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
              <div>
                <div className="text-xs font-semibold uppercase tracking-[0.18em] text-blue-700">Discover</div>
                <h1 className="text-3xl font-black text-slate-900">Frontpage deals feed</h1>
              </div>
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <button key={category} className={`rounded-full px-3 py-1.5 text-sm font-semibold ${category === "Trending" ? "bg-[var(--accent)] text-white" : "bg-slate-100 text-slate-600"}`}>{category}</button>
                ))}
              </div>
            </div>

            <div className="overflow-hidden rounded-3xl border border-slate-200 bg-slate-50">
              <div className="grid gap-4 p-4 lg:grid-cols-[1.15fr_0.85fr] lg:p-5">
                <div className="space-y-4">
                  <div className="inline-flex rounded-full bg-blue-100 px-3 py-1 text-xs font-bold uppercase tracking-wide text-blue-700">just for you</div>
                  <h2 className="text-3xl font-black leading-tight text-slate-900">{hero.title}</h2>
                  <p className="max-w-2xl text-sm text-slate-600">{hero.summary}</p>
                  <div className="flex flex-wrap items-center gap-3 text-sm text-slate-600">
                    <span className="text-3xl font-black text-[var(--accent)]">{hero.currentPrice}</span>
                    <span className="line-through">{hero.oldPrice}</span>
                    <span>{hero.store}</span>
                    <span>{hero.shipping}</span>
                  </div>
                  <div className="flex gap-3">
                    <Link href={`/deals/${hero.slug}`} className="rounded-xl bg-[var(--accent)] px-4 py-3 text-sm font-semibold text-white">Open deal</Link>
                    <button className="rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm font-semibold text-slate-700">Personalize feed</button>
                  </div>
                </div>
                <div className="space-y-3 rounded-2xl bg-white p-4">
                  <div className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">why it pops</div>
                  <ul className="space-y-2 text-sm text-slate-600">
                    <li>Dense metadata line with merchant, timing, heat, and comments.</li>
                    <li>Strong contrast price block and busy but scannable card rhythm.</li>
                    <li>Interspersed promotional and personalized rows to break monotony.</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          <section className="space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-black text-slate-900">Latest frontpage deals</h2>
              <div className="text-sm text-slate-500">Mocked sorting, real-feeling UI</div>
            </div>
            {frontpage.map((deal) => (
              <DealCard key={deal.id} deal={deal} />
            ))}
          </section>
        </div>

        <aside className="space-y-4">
          <SidebarCard title="Trending stores">
            {featuredStores.map((store) => (
              <div key={store} className="flex items-center justify-between rounded-xl bg-slate-50 px-3 py-3 text-sm">
                <span className="font-semibold text-slate-900">{store}</span>
                <span className="text-slate-500">Fresh codes</span>
              </div>
            ))}
          </SidebarCard>
          <SidebarCard title="Community activity">
            {deals.slice(0, 4).map((deal) => (
              <Link key={deal.id} href={`/deals/${deal.slug}`} className="block rounded-xl border border-slate-200 p-3 text-sm hover:border-blue-500">
                <div className="font-semibold text-slate-900">{deal.title}</div>
                <div className="mt-1 text-xs text-slate-500">{deal.temperature} heat • {deal.comments} comments</div>
              </Link>
            ))}
          </SidebarCard>
          <SidebarCard title="Prototype notes">
            <ul className="space-y-2 text-sm text-slate-600">
              <li>Desktop-first two-column layout with sticky-feeling right rail.</li>
              <li>Reusable deal cards, forum rows, coupon cards, and utility pills.</li>
              <li>Mock data only, optimized for demo speed and realism.</li>
            </ul>
          </SidebarCard>
        </aside>
      </div>
    </main>
  );
}
