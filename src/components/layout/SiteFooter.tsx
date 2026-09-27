import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { Brand } from "./Brand";

export function SiteFooter() {
  return (
    <footer className="bg-ink-soft text-primary-foreground">
      <div className="mx-auto max-w-[1440px] px-5 pb-8 pt-16 sm:px-8 lg:px-12">
        <div className="grid gap-12 border-b border-primary-foreground/20 pb-16 md:grid-cols-[1fr_auto_auto] md:gap-20">
          <div>
            <Brand light />
            <p className="mt-5 max-w-xs text-sm leading-7 text-primary-foreground/65">
              A clearer view of profiles, verification, requests, and activity.
            </p>
          </div>
          <div>
            <p className="mb-5 text-xs font-semibold uppercase tracking-widest text-primary-foreground/55">
              Explore
            </p>
            <div className="flex flex-col gap-3 text-sm">
              <a href="/#how-it-works" className="hover:underline">
                How it works
              </a>
              <a href="/#features" className="hover:underline">
                Features
              </a>
              <a href="/#why-trusttrail" className="hover:underline">
                Why TrustTrail
              </a>
              <a href="/#faq" className="hover:underline">
                FAQ
              </a>
            </div>
          </div>
          <div>
            <p className="mb-5 text-xs font-semibold uppercase tracking-widest text-primary-foreground/55">
              Experiences
            </p>
            <div className="flex flex-col gap-3 text-sm">
              <Link to="/customer" className="inline-flex items-center gap-1 hover:underline">
                Customer <ArrowUpRight className="size-3.5" />
              </Link>
              <Link to="/admin" className="inline-flex items-center gap-1 hover:underline">
                Admin <ArrowUpRight className="size-3.5" />
              </Link>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap items-center justify-between gap-3 pt-7 text-xs text-primary-foreground/55">
          <span>© {new Date().getFullYear()} TrustTrail</span>
          <span>Clarity in every interaction.</span>
        </div>
      </div>
    </footer>
  );
}
