import { GiveawayHero } from "@/components/GiveawayHero";
import { giveaway } from "@/data/mockData";

export default function GiveawaysPage() {
  return (
    <main className="mx-auto max-w-7xl space-y-6 px-4 py-6 lg:px-6">
      <GiveawayHero {...giveaway} />
      <section className="grid gap-6 lg:grid-cols-[1fr_320px]">
        <div className="space-y-4 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-black text-slate-900">Community comments</h2>
          {["Entered for the desk setup, staying for the comment chaos.", "A giveaway page needs urgency, proof, and a big obvious CTA, this nails the prototype feel.", "Would love bonus entries for posting a deal or referring a friend in a fuller version."].map((comment, idx) => (
            <div key={idx} className="rounded-2xl border border-slate-200 p-4 text-sm text-slate-700">
              <div className="mb-2 text-xs font-semibold uppercase tracking-wide text-slate-500">entrant_{idx + 7} • {idx + 1} hr ago</div>
              {comment}
            </div>
          ))}
        </div>
        <aside className="space-y-4">
          <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
            <div className="text-xs font-semibold uppercase tracking-wide text-slate-500">How entry works</div>
            <ul className="mt-3 space-y-2 text-sm text-slate-700">
              <li>Tap the entry button.</li>
              <li>Store a fake state locally.</li>
              <li>Surface confirmation and urgency.</li>
            </ul>
          </div>
        </aside>
      </section>
    </main>
  );
}
