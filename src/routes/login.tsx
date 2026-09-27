import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, LockKeyhole, ShieldCheck, UserRound, UsersRound } from "lucide-react";
import { Brand } from "@/components/layout/Brand";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/login")({
  head: () => ({
    meta: [
      { title: "Login — TrustTrail" },
      {
        name: "description",
        content: "Sign in to the TrustTrail customer or admin workspace.",
      },
    ],
  }),
  component: Login,
});

function Login() {
  return (
    <main className="min-h-screen bg-background">
      <header className="border-b border-border">
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

      <div className="mx-auto flex min-h-[calc(100vh-76px)] max-w-4xl items-center px-5 py-12 sm:px-8">
        <div className="w-full">
          <div className="mx-auto max-w-xl text-center">
            <span className="inline-flex items-center gap-2 rounded-full bg-brand-soft px-3 py-1.5 text-xs font-semibold text-primary">
              <LockKeyhole className="size-3.5" />
              Sign in
            </span>
            <h1 className="mt-5 font-display text-4xl font-semibold tracking-tight sm:text-5xl">
              Welcome back.
            </h1>
            <p className="mt-4 text-base leading-7 text-muted-foreground">
              Choose the workspace you want to enter. Live Supabase authentication is being connected
              in the next phase.
            </p>
          </div>

          <div className="mx-auto mt-10 grid max-w-3xl gap-5 md:grid-cols-2">
            <section className="rounded-2xl border border-border bg-card p-7 md:p-8">
              <div className="flex size-11 items-center justify-center rounded-lg bg-brand-soft text-primary">
                <UserRound className="size-5" />
              </div>
              <h2 className="mt-6 font-display text-xl font-semibold">Customer login</h2>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                Enter the customer workspace and continue managing your profile and verification.
              </p>
              <Button asChild className="mt-7 w-full">
                <Link to="/customer">
                  Continue as customer <ArrowRight />
                </Link>
              </Button>
            </section>

            <section className="rounded-2xl border border-border bg-card p-7 md:p-8">
              <div className="flex size-11 items-center justify-center rounded-lg bg-brand-soft text-primary">
                <UsersRound className="size-5" />
              </div>
              <h2 className="mt-6 font-display text-xl font-semibold">Admin login</h2>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                Enter the operations workspace for verification, requests, users, and activity.
              </p>
              <Button asChild className="mt-7 w-full">
                <Link to="/admin">
                  Continue as admin <ArrowRight />
                </Link>
              </Button>
            </section>
          </div>

          <div className="mx-auto mt-7 flex max-w-3xl items-start gap-3 rounded-xl border border-border bg-muted/40 p-4 text-xs leading-5 text-muted-foreground">
            <ShieldCheck className="mt-0.5 size-4 shrink-0 text-primary" />
            <span>
              Demo mode: these buttons open the dashboard previews directly. Passwords, sessions,
              role checks, and protected routes will be wired to Supabase Auth later.
            </span>
          </div>

          <p className="mt-8 text-center text-sm text-muted-foreground">
            New to TrustTrail?{" "}
            <Link to="/get-started" className="font-semibold text-primary hover:underline">
              Get started
            </Link>
          </p>
        </div>
      </div>
    </main>
  );
}
