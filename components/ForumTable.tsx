import { Flame, Pin } from "lucide-react";
import type { ForumThread } from "@/data/mockData";

export function ForumTable({ threads }: { threads: ForumThread[] }) {
  return (
    <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
      <div className="grid grid-cols-[1.6fr_120px_100px_110px] gap-3 border-b border-slate-200 bg-slate-50 px-4 py-3 text-xs font-bold uppercase tracking-wide text-slate-500">
        <div>Thread</div>
        <div>Replies</div>
        <div>Views</div>
        <div>Last post</div>
      </div>
      {threads.map((thread) => (
        <div key={thread.id} className="grid grid-cols-[1.6fr_120px_100px_110px] gap-3 border-b border-slate-100 px-4 py-4 text-sm last:border-b-0">
          <div>
            <div className="mb-1 flex items-center gap-2 font-semibold text-slate-900">
              {thread.sticky && <Pin className="h-4 w-4 text-blue-600" />}
              {thread.hot && <Flame className="h-4 w-4 text-orange-500" />}
              <span>{thread.title}</span>
              {thread.badge && <span className="rounded-full bg-blue-50 px-2 py-0.5 text-xs font-bold text-blue-700">{thread.badge}</span>}
            </div>
            <div className="text-xs text-slate-500">{thread.forum} • posted by {thread.author}</div>
          </div>
          <div className="font-semibold text-slate-700">{thread.replies}</div>
          <div className="text-slate-600">{thread.views}</div>
          <div className="text-slate-500">{thread.lastPost}</div>
        </div>
      ))}
    </div>
  );
}
