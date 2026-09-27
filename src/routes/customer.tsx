import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowRight,
  Bell,
  CheckCircle2,
  Clock3,
  FileCheck2,
  Fingerprint,
  History,
  ShieldCheck,
  UserRound,
} from "lucide-react";
import { Brand } from "@/components/layout/Brand";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";

const verificationSteps = [
  { label: "Identity information", status: "Complete", complete: true },
  { label: "Contact details", status: "Complete", complete: true },
  { label: "Document review", status: "In review", complete: false },
];

const requests = [
  { title: "Address verification", type: "Verification", status: "In review", date: "Today" },
  { title: "Profile update", type: "Profile", status: "Completed", date: "Sep 24" },
  { title: "Document replacement", type: "Document", status: "Pending", date: "Sep 22" },
];

const activity = [
  { icon: CheckCircle2, title: "Contact details verified", detail: "Verification check completed", time: "2h ago" },
  { icon: FileCheck2, title: "Document submitted", detail: "Passport document received", time: "Yesterday" },
  { icon: UserRound, title: "Profile updated", detail: "Company information changed", time: "Sep 24" },
];

function StatusBadge({ status }: { status: string }) {
  const tone =
    status === "Completed" || status === "Complete"
      ? "bg-success/10 text-success"
      : status === "In review"
        ? "bg-warning/10 text-warning"
        : "bg-muted text-muted-foreground";

  return <span className={`inline-flex rounded-full px-2.5 py-1 text-xs font-semibold ${tone}`}>{status}</span>;
}

export const Route = createFileRoute("/customer")({
  head: () => ({
    meta: [
      { title: "My TrustTrail — Demo dashboard" },
      { name: "description", content: "TrustTrail customer dashboard preview with mock data." },
    ],
  }),
  component: CustomerDashboard,
});

function CustomerDashboard() {
  return (
    <main className="min-h-screen bg-muted/30">
      <header className="border-b border-border bg-background">
        <div className="mx-auto flex h-[76px] max-w-[1440px] items-center justify-between gap-4 px-5 sm:px-8 lg:px-12">
          <Brand />
          <div className="flex items-center gap-2 sm:gap-4">
            <span className="hidden rounded-full bg-warning/10 px-3 py-1.5 text-xs font-semibold text-warning sm:inline-flex">
              Demo data
            </span>
            <Button variant="ghost" size="icon" aria-label="Notifications">
              <Bell className="size-5" />
            </Button>
            <div className="flex size-9 items-center justify-center rounded-full bg-brand-soft text-sm font-bold text-primary">
              AS
            </div>
          </div>
        </div>
      </header>

      <div className="mx-auto max-w-[1440px] px-5 py-8 sm:px-8 lg:px-12 lg:py-10">
        <div className="mb-8 flex flex-col justify-between gap-5 lg:flex-row lg:items-end">
          <div>
            <p className="mb-2 text-xs font-bold uppercase tracking-[0.17em] text-primary">Customer dashboard</p>
            <h1 className="font-display text-3xl font-semibold tracking-tight sm:text-4xl">Good morning, Alex.</h1>
            <p className="mt-2 max-w-2xl text-sm leading-7 text-muted-foreground">
              A clearer view of your profile, verification progress, requests, and recent activity.
            </p>
          </div>
          <Button className="w-fit">Update profile <ArrowRight /></Button>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          <section className="rounded-xl border border-border bg-card p-6 md:col-span-2">
            <div className="flex flex-col justify-between gap-6 sm:flex-row">
              <div>
                <div className="mb-3 flex size-10 items-center justify-center rounded-lg bg-brand-soft text-primary">
                  <ShieldCheck className="size-5" />
                </div>
                <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Verification status</p>
                <h2 className="mt-2 font-display text-2xl font-semibold">In progress</h2>
                <p className="mt-1 text-sm text-muted-foreground">2 of 3 checks are complete.</p>
              </div>
              <div className="flex items-center gap-5">
                <div className="relative flex size-24 items-center justify-center rounded-full border-8 border-brand-soft">
                  <span className="font-display text-xl font-semibold text-primary">67%</span>
                </div>
              </div>
            </div>
            <Progress value={67} className="mt-6" />
            <div className="mt-6 grid gap-3 sm:grid-cols-3">
              {verificationSteps.map((step) => (
                <div key={step.label} className="rounded-lg border border-border p-3">
                  <div className="flex items-center gap-2">
                    {step.complete ? <CheckCircle2 className="size-4 text-success" /> : <Clock3 className="size-4 text-warning" />}
                    <span className="text-xs font-semibold">{step.status}</span>
                  </div>
                  <p className="mt-2 text-xs leading-5 text-muted-foreground">{step.label}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="rounded-xl border border-border bg-card p-6">
            <div className="flex size-10 items-center justify-center rounded-lg bg-brand-soft text-primary">
              <UserRound className="size-5" />
            </div>
            <p className="mt-5 text-xs font-bold uppercase tracking-widest text-muted-foreground">Profile completeness</p>
            <div className="mt-2 flex items-end justify-between">
              <h2 className="font-display text-3xl font-semibold">84%</h2>
              <span className="text-xs font-medium text-muted-foreground">Good</span>
            </div>
            <Progress value={84} className="mt-4" />
            <p className="mt-4 text-sm leading-6 text-muted-foreground">Add your company registration details to complete your profile.</p>
            <Button variant="outline" className="mt-5 w-full">Complete profile</Button>
          </section>
        </div>

        <div className="mt-4 grid gap-4 lg:grid-cols-[1.35fr_0.65fr]">
          <section className="rounded-xl border border-border bg-card">
            <div className="flex items-center justify-between border-b border-border px-6 py-5">
              <div>
                <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Requests</p>
                <h2 className="mt-1 font-display text-xl font-semibold">Recent requests</h2>
              </div>
              <Button variant="ghost" size="sm">View all <ArrowRight /></Button>
            </div>
            <div className="divide-y divide-border">
              {requests.map((request) => (
                <div key={request.title} className="flex flex-col gap-3 px-6 py-4 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <p className="font-medium">{request.title}</p>
                    <p className="mt-1 text-xs text-muted-foreground">{request.type} · {request.date}</p>
                  </div>
                  <StatusBadge status={request.status} />
                </div>
              ))}
            </div>
          </section>

          <section className="rounded-xl border border-border bg-card">
            <div className="border-b border-border px-6 py-5">
              <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Account</p>
              <h2 className="mt-1 font-display text-xl font-semibold">Your profile</h2>
            </div>
            <div className="space-y-4 p-6">
              <div><p className="text-xs text-muted-foreground">Name</p><p className="mt-1 font-medium">Alex Sharma</p></div>
              <div><p className="text-xs text-muted-foreground">Company</p><p className="mt-1 font-medium">Northstar Labs</p></div>
              <div><p className="text-xs text-muted-foreground">Email</p><p className="mt-1 font-medium">alex@example.com</p></div>
              <div className="rounded-lg bg-brand-soft/60 p-4">
                <div className="flex items-center gap-2 text-sm font-semibold"><Fingerprint className="size-4 text-primary" /> Verification identity</div>
                <p className="mt-1 text-xs leading-5 text-muted-foreground">Identity details are shown here once verification is connected.</p>
              </div>
            </div>
          </section>
        </div>

        <section className="mt-4 rounded-xl border border-border bg-card">
          <div className="flex items-center justify-between border-b border-border px-6 py-5">
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Activity</p>
              <h2 className="mt-1 font-display text-xl font-semibold">Recent activity</h2>
            </div>
            <Button variant="ghost" size="sm">Activity history <ArrowRight /></Button>
          </div>
          <div className="grid gap-0 md:grid-cols-3">
            {activity.map((item) => (
              <div key={item.title} className="border-b border-border p-6 last:border-b-0 md:border-b-0 md:border-r md:last:border-r-0">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex size-9 items-center justify-center rounded-lg bg-muted text-primary"><item.icon className="size-4" /></div>
                  <span className="text-xs text-muted-foreground">{item.time}</span>
                </div>
                <p className="mt-4 font-medium">{item.title}</p>
                <p className="mt-1 text-sm leading-6 text-muted-foreground">{item.detail}</p>
              </div>
            ))}
          </div>
        </section>

        <div className="mt-6 flex items-center gap-2 text-xs text-muted-foreground">
          <History className="size-4" />
          <span>Preview only — authentication and live account data will be connected in the next phase.</span>
        </div>
      </div>
    </main>
  );
}
