import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ShieldCheck, UserRound, UsersRound } from "lucide-react";
import { Brand } from "@/components/layout/Brand";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/get-started")({
  head: () => ({
    meta: [
      { title: "Get started — TrustTrail" },
      {
        name: "description",
        content: "Choose the TrustTrail workspace you want to explore.",
      },
    ],
  }),
  component: GetStarted,
});

function GetStarted() {
  return (
    <main className="min-h-screen bg-muted/30">
      <header className="border-b border-border bg-background">
        <div className="mx-auto flex h-[76px] max-w-[1440px] items-center justify-between px-5 sm:px-8 lg:px-12">
          <Brand />
          <Link
            to="/"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            Back to home
          </Link>
        </div>
      </header>

      <div className="mx-auto flex min-h-[calc(100vh-76px)] max-w-5xl items-center px-5 py-12 sm:px-8">
        <div className="w-full">
          <div className="mx-auto max-w-2xl text-center">
            <span className="inline-flex rounded-full bg-warning/10 px-3 py-1.5 text-xs font-semibold text-warning">
              Demo preview
            </span>
            <h1 className="mt-5 font-display text-4xl font-semibold tracking-tight sm:text-5xl">
              Choose your TrustTrail experience.
            </h1>
            <p className="mx-auto mt-4 max-w-xl text-base leading-7 text-muted-foreground">
              Select whether you are exploring the customer experience or the administrative workspace.
              Authentication will be connected in the next phase.
            </p>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-2">
            <Link
              to="/customer"
              className="group rounded-2xl border border-border bg-card p-7 transition-all hover:-translate-y-0.5 hover:border-primary/40 hover:shadow-lg md:p-9"
            >
              <div className="flex size-12 items-center justify-center rounded-xl bg-brand-soft text-primary">
                <UserRound className="size-6" />
              </div>
              <p className="mt-8 text-xs font-bold uppercase tracking-[0.17em] text-primary">
                User / Customer
              </p>
              <h2 className="mt-2 font-display text-2xl font-semibold">Customer dashboard</h2>
              <p className="mt-3 text-sm leading-7 text-muted-foreground">
                Manage your profile, follow verification, review requests, and see your recent activity.
              </p>
              <span className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-primary">
                Open customer dashboard
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
              </span>
            </Link>

            <Link
              to="/admin"
              className="group rounded-2xl border border-border bg-card p-7 transition-all hover:-translate-y-0.5 hover:border-primary/40 hover:shadow-lg md:p-9"
            >
              <div className="flex size-12 items-center justify-center rounded-xl bg-brand-soft text-primary">
                <UsersRound className="size-6" />
              </div>
              <p className="mt-8 text-xs font-bold uppercase tracking-[0.17em] text-primary">
                Admin / Operations
              </p>
              <h2 className="mt-2 font-display text-2xl font-semibold">Admin dashboard</h2>
              <p className="mt-3 text-sm leading-7 text-muted-foreground">
                Review users, verification work, requests, activity, and operational status.
              </p>
              <span className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-primary">
                Open admin dashboard
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
              </span>
            </Link>
          </div>

          <div className="mx-auto mt-7 flex max-w-2xl items-start gap-3 rounded-xl border border-border bg-background p-4 text-xs leading-5 text-muted-foreground">
            <ShieldCheck className="mt-0.5 size-4 shrink-0 text-primary" />
            <span>
              These are mock-data dashboards for the current UI phase. Role enforcement and Supabase
              authentication will be added before these become protected production routes.
            </span>
          </div>

          <p className="mt-8 text-center text-sm text-muted-foreground">
            Already have an account?{" "}
            <Link to="/login" className="font-semibold text-primary hover:underline">
              Go to login
            </Link>
          </p>
        </div>
      </div>
    </main>
  );
}
