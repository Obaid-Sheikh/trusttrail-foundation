import { createFileRoute } from "@tanstack/react-router";
import {
  AlertTriangle,
  ArrowRight,
  BadgeCheck,
  Clock3,
  FileSearch,
  ListChecks,
  ShieldCheck,
  UsersRound,
} from "lucide-react";
import { Brand } from "@/components/layout/Brand";
import { Button } from "@/components/ui/button";

const verificationQueue = [
  { name: "Priya Mehta", type: "Identity verification", submitted: "18 min ago", status: "Needs review" },
  { name: "Daniel Wong", type: "Business verification", submitted: "42 min ago", status: "Needs review" },
  { name: "Maya Patel", type: "Document review", submitted: "1h ago", status: "In progress" },
  { name: "Noah Williams", type: "Identity verification", submitted: "2h ago", status: "In progress" },
];

const requests = [
  { id: "REQ-1048", subject: "Address verification", customer: "Alex Sharma", status: "In review", age: "2h" },
  { id: "REQ-1047", subject: "Document replacement", customer: "Priya Mehta", status: "Pending", age: "5h" },
  { id: "REQ-1046", subject: "Profile update", customer: "Daniel Wong", status: "Completed", age: "Yesterday" },
];

function StatusBadge({ status }: { status: string }) {
  const tone =
    status === "Completed"
      ? "bg-success/10 text-success"
      : status === "Needs review"
        ? "bg-warning/10 text-warning"
        : "bg-muted text-muted-foreground";
  return <span className={`inline-flex rounded-full px-2.5 py-1 text-xs font-semibold ${tone}`}>{status}</span>;
}

export const Route = createFileRoute("/admin")({
  head: () => ({
    meta: [
      { title: "TrustTrail Admin — Demo dashboard" },
      { name: "description", content: "TrustTrail administrative dashboard preview with mock data." },
    ],
  }),
  component: AdminDashboard,
});

function AdminDashboard() {
  return (
    <main className="min-h-screen bg-muted/30">
      <header className="border-b border-border bg-background">
        <div className="mx-auto flex h-[76px] max-w-[1440px] items-center justify-between gap-4 px-5 sm:px-8 lg:px-12">
          <Brand />
          <div className="flex items-center gap-3">
            <span className="rounded-full bg-warning/10 px-3 py-1.5 text-xs font-semibold text-warning">Demo data</span>
            <div className="hidden text-right sm:block">
              <p className="text-sm font-semibold">Operations team</p>
              <p className="text-xs text-muted-foreground">Admin workspace</p>
            </div>
            <div className="flex size-9 items-center justify-center rounded-full bg-ink-soft text-xs font-bold text-primary-foreground">AD</div>
          </div>
        </div>
      </header>

      <div className="mx-auto max-w-[1440px] px-5 py-8 sm:px-8 lg:px-12 lg:py-10">
        <div className="mb-8 flex flex-col justify-between gap-5 lg:flex-row lg:items-end">
          <div>
            <p className="mb-2 text-xs font-bold uppercase tracking-[0.17em] text-primary">Admin dashboard</p>
            <h1 className="font-display text-3xl font-semibold tracking-tight sm:text-4xl">Operational overview.</h1>
            <p className="mt-2 max-w-2xl text-sm leading-7 text-muted-foreground">Review verification, requests, users, and activity from one focused workspace.</p>
          </div>
          <Button variant="outline" className="w-fit">Export activity <ArrowRight /></Button>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { label: "Total users", value: "248", note: "+12 this month", icon: UsersRound },
            { label: "Pending verification", value: "12", note: "4 need attention", icon: BadgeCheck },
            { label: "Open requests", value: "18", note: "6 due today", icon: ListChecks },
            { label: "Review queue", value: "7", note: "2 high priority", icon: AlertTriangle },
          ].map((stat) => (
            <section key={stat.label} className="rounded-xl border border-border bg-card p-5">
              <div className="flex items-start justify-between">
                <div className="flex size-10 items-center justify-center rounded-lg bg-brand-soft text-primary"><stat.icon className="size-5" /></div>
                <span className="text-xs font-medium text-muted-foreground">Mock</span>
              </div>
              <p className="mt-5 text-xs font-bold uppercase tracking-widest text-muted-foreground">{stat.label}</p>
              <p className="mt-1 font-display text-3xl font-semibold">{stat.value}</p>
              <p className="mt-1 text-xs text-muted-foreground">{stat.note}</p>
            </section>
          ))}
        </div>

        <div className="mt-4 grid gap-4 lg:grid-cols-[1.3fr_0.7fr]">
          <section className="rounded-xl border border-border bg-card">
            <div className="flex items-center justify-between border-b border-border px-6 py-5">
              <div>
                <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Verification</p>
                <h2 className="mt-1 font-display text-xl font-semibold">Review queue</h2>
              </div>
              <Button variant="ghost" size="sm">View queue <ArrowRight /></Button>
            </div>
            <div className="divide-y divide-border">
              {verificationQueue.map((item) => (
                <div key={item.name} className="flex flex-col gap-3 px-6 py-4 sm:flex-row sm:items-center sm:justify-between">
                  <div className="flex items-start gap-3">
                    <div className="mt-0.5 flex size-9 shrink-0 items-center justify-center rounded-lg bg-muted text-primary"><FileSearch className="size-4" /></div>
                    <div>
                      <p className="font-medium">{item.name}</p>
                      <p className="mt-1 text-xs text-muted-foreground">{item.type} · {item.submitted}</p>
                    </div>
                  </div>
                  <StatusBadge status={item.status} />
                </div>
              ))}
            </div>
          </section>

          <section className="rounded-xl border border-border bg-card">
            <div className="border-b border-border px-6 py-5">
              <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Today</p>
              <h2 className="mt-1 font-display text-xl font-semibold">Workload</h2>
            </div>
            <div className="space-y-5 p-6">
              <div>
                <div className="flex justify-between text-sm"><span>Verification reviews</span><span className="font-semibold">12 / 20</span></div>
                <div className="mt-2 h-2 overflow-hidden rounded-full bg-muted"><div className="h-full w-[60%] bg-primary" /></div>
              </div>
              <div>
                <div className="flex justify-between text-sm"><span>Requests resolved</span><span className="font-semibold">14 / 18</span></div>
                <div className="mt-2 h-2 overflow-hidden rounded-full bg-muted"><div className="h-full w-[78%] bg-primary" /></div>
              </div>
              <div className="rounded-lg bg-brand-soft/60 p-4">
                <div className="flex items-center gap-2 text-sm font-semibold"><ShieldCheck className="size-4 text-primary" /> Review principle</div>
                <p className="mt-1 text-xs leading-5 text-muted-foreground">Verification status reflects specific checks. It is not a guarantee of overall trustworthiness.</p>
              </div>
            </div>
          </section>
        </div>

        <section className="mt-4 rounded-xl border border-border bg-card">
          <div className="flex items-center justify-between border-b border-border px-6 py-5">
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Requests</p>
              <h2 className="mt-1 font-display text-xl font-semibold">Recent requests</h2>
            </div>
            <Button variant="ghost" size="sm">Manage requests <ArrowRight /></Button>
          </div>
          <div className="divide-y divide-border">
            {requests.map((request) => (
              <div key={request.id} className="grid gap-2 px-6 py-4 md:grid-cols-[120px_1fr_180px_100px_100px] md:items-center">
                <span className="font-mono text-xs text-muted-foreground">{request.id}</span>
                <div><p className="font-medium">{request.subject}</p><p className="text-xs text-muted-foreground">{request.customer}</p></div>
                <StatusBadge status={request.status} />
                <span className="text-xs text-muted-foreground">{request.age}</span>
                <Button variant="outline" size="sm" className="w-fit">Review</Button>
              </div>
            ))}
          </div>
        </section>

        <div className="mt-4 grid gap-4 md:grid-cols-3">
          {[
            ["User management", "248 customer profiles", UsersRound],
            ["Activity trail", "36 events today", Clock3],
            ["Trust & risk", "7 items require review", ShieldCheck],
          ].map(([title, detail, Icon]) => (
            <section key={title as string} className="rounded-xl border border-border bg-card p-5">
              <Icon className="size-5 text-primary" />
              <h3 className="mt-4 font-display font-semibold">{title as string}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{detail as string}</p>
              <Button variant="ghost" size="sm" className="mt-3 px-0">Open section <ArrowRight /></Button>
            </section>
          ))}
        </div>

        <div className="mt-6 flex items-center gap-2 text-xs text-muted-foreground">
          <Clock3 className="size-4" />
          <span>Preview only — role checks, live records, and backend actions will be connected after the dashboard UI is approved.</span>
        </div>
      </div>
    </main>
  );
}
