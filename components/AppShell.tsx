import Link from "next/link";
import { Bell, Gift, MessageSquareText, Search, SquarePen, TicketPercent } from "lucide-react";

const navItems = [
  { href: "/", label: "Frontpage" },
  { href: "/forum", label: "Forums" },
  { href: "/coupons", label: "Coupons" },
  { href: "/alerts", label: "Deal Alerts" },
  { href: "/post", label: "Post a Deal" },
  { href: "/giveaways", label: "Giveaways" },
];

export function AppShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-[var(--page)] text-slate-900">
      <div className="border-b border-slate-200 bg-[var(--navy)] text-white">
        <div className="mx-auto flex max-w-7xl items-center gap-4 px-4 py-3 lg:px-6">
          <Link href="/" className="flex items-center gap-3 font-semibold tracking-tight">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[var(--accent)] text-sm font-black text-white">DD</div>
            <div>
              <div className="text-sm uppercase tracking-[0.18em] text-blue-200">DealDeck</div>
              <div className="text-lg font-bold leading-none">community bargains</div>
            </div>
          </Link>
          <div className="hidden flex-1 items-center gap-3 rounded-xl bg-white/10 px-3 py-2 md:flex">
            <Search className="h-4 w-4 text-blue-100" />
            <input
              className="w-full bg-transparent text-sm text-white outline-none placeholder:text-blue-100"
              placeholder="Search deals, brands, stores, categories"
            />
          </div>
          <div className="hidden items-center gap-2 md:flex">
            <Link href="/post" className="rounded-lg bg-white/10 px-3 py-2 text-sm font-medium">Sign in</Link>
            <Link href="/alerts" className="rounded-lg bg-[var(--accent)] px-3 py-2 text-sm font-semibold text-white">Join free</Link>
          </div>
        </div>
        <div className="mx-auto flex max-w-7xl items-center gap-2 overflow-x-auto px-4 pb-3 lg:px-6">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-sm text-blue-50 transition hover:bg-white/10">
              {item.label}
            </Link>
          ))}
        </div>
      </div>

      <div className="border-b border-slate-200 bg-white">
        <div className="mx-auto flex max-w-7xl items-center gap-3 overflow-x-auto px-4 py-2 text-xs font-medium text-slate-600 lg:px-6">
          <span className="inline-flex items-center gap-1"><Bell className="h-3.5 w-3.5" /> personalized alerts</span>
          <span className="inline-flex items-center gap-1"><TicketPercent className="h-3.5 w-3.5" /> coupon stacks</span>
          <span className="inline-flex items-center gap-1"><MessageSquareText className="h-3.5 w-3.5" /> active community threads</span>
          <span className="inline-flex items-center gap-1"><SquarePen className="h-3.5 w-3.5" /> submit your own finds</span>
          <span className="inline-flex items-center gap-1"><Gift className="h-3.5 w-3.5" /> seasonal giveaways</span>
        </div>
      </div>

      {children}
    </div>
  );
}
