import { Link } from "@tanstack/react-router";

export function Brand({ light = false }: { light?: boolean }) {
  return (
    <Link to="/" aria-label="TrustTrail home" className={`inline-flex items-center gap-2.5 font-display text-[20px] font-semibold ${light ? "text-primary-foreground" : "text-foreground"}`}>
      <span className={`flex size-8 items-center justify-center rounded-md ${light ? "bg-primary-foreground text-primary" : "bg-primary text-primary-foreground"}`} aria-hidden="true">
        <svg viewBox="0 0 32 32" fill="none" className="size-6" aria-hidden="true"><path d="M6 9h10v10h10" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/><circle cx="6" cy="9" r="2" fill="currentColor"/><circle cx="16" cy="19" r="2" fill="currentColor"/><circle cx="26" cy="19" r="2" fill="currentColor"/></svg>
      </span>
      <span>TrustTrail<span className="text-primary">.</span></span>
    </Link>
  );
}