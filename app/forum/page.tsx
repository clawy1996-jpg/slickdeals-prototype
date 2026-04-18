import { ForumTable } from "@/components/ForumTable";
import { forumThreads } from "@/data/mockData";

export default function ForumPage() {
  return (
    <main className="mx-auto max-w-7xl px-4 py-6 lg:px-6">
      <div className="space-y-6 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <div className="text-xs font-semibold uppercase tracking-[0.18em] text-blue-700">Forums</div>
            <h1 className="text-3xl font-black text-slate-900">Hot deal discussions</h1>
          </div>
          <div className="flex flex-wrap gap-2">
            {['Newest','Most replied','Most viewed','Ending soon'].map((filter) => (
              <button key={filter} className={`rounded-full px-3 py-1.5 text-sm font-semibold ${filter === 'Newest' ? 'bg-[var(--accent)] text-white' : 'bg-slate-100 text-slate-600'}`}>{filter}</button>
            ))}
          </div>
        </div>
        <ForumTable threads={forumThreads} />
        <div className="flex items-center justify-between rounded-2xl bg-slate-50 px-4 py-3 text-sm text-slate-600">
          <span>Showing 1-6 of 124 mock threads</span>
          <div className="flex gap-2">
            {[1,2,3,4].map((page) => <button key={page} className={`h-9 w-9 rounded-lg ${page === 1 ? 'bg-[var(--accent)] text-white' : 'bg-white text-slate-700 border border-slate-200'}`}>{page}</button>)}
          </div>
        </div>
      </div>
    </main>
  );
}
