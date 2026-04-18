import { PostDealComposer } from "@/components/PostDealComposer";

export default function PostDealPage() {
  return (
    <main className="mx-auto max-w-7xl px-4 py-6 lg:px-6">
      <section className="space-y-6 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
        <div>
          <div className="text-xs font-semibold uppercase tracking-[0.18em] text-blue-700">Post a deal</div>
          <h1 className="mt-2 text-3xl font-black text-slate-900">Submit a community find</h1>
          <p className="mt-2 max-w-3xl text-sm text-slate-600">Prototype flow for URL-first deal submission, compact forms, and a live side preview that keeps the post feeling credible before publish.</p>
        </div>
        <PostDealComposer />
      </section>
    </main>
  );
}
