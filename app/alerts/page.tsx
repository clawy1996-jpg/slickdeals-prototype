import { AlertsPanel } from "@/components/AlertsPanel";
import { alerts } from "@/data/mockData";

export default function AlertsPage() {
  return (
    <main className="mx-auto max-w-7xl px-4 py-6 lg:px-6">
      <section className="space-y-6 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
        <div>
          <div className="text-xs font-semibold uppercase tracking-[0.18em] text-blue-700">Deal alerts</div>
          <h1 className="mt-2 text-3xl font-black text-slate-900">Follow exactly the deals you care about</h1>
          <p className="mt-2 max-w-3xl text-sm text-slate-600">Keyword, store, category, and brand alerts with fake notification preferences. All state is local, but the flow feels like a working product.</p>
        </div>
        <AlertsPanel initialAlerts={alerts} />
      </section>
    </main>
  );
}
