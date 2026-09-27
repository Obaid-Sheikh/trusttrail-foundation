import { Link } from "@tanstack/react-router";
import { ArrowLeft, ArrowUpRight, type LucideIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Brand } from "./Brand";

export function AppEntryLayout({ eyebrow, title, description, icon: Icon, capabilities }: { eyebrow: string; title: string; description: string; icon: LucideIcon; capabilities: string[] }) {
  return <main className="min-h-screen bg-background">
    <header className="border-b border-border"><div className="mx-auto flex h-[76px] max-w-6xl items-center justify-between px-5 sm:px-8"><Brand /><Button variant="ghost" asChild><Link to="/"><ArrowLeft /> Back to website</Link></Button></div></header>
    <div className="mx-auto grid max-w-6xl gap-14 px-5 py-20 sm:px-8 md:py-28 lg:grid-cols-[1fr_0.8fr] lg:items-center lg:gap-24">
      <div><div className="mb-7 flex size-14 items-center justify-center rounded-md bg-brand-soft text-primary"><Icon className="size-7" /></div><p className="mb-4 text-xs font-bold uppercase tracking-widest text-primary">{eyebrow}</p><h1 className="max-w-2xl font-display text-4xl font-semibold leading-tight sm:text-5xl">{title}</h1><p className="mt-6 max-w-xl text-lg leading-8 text-muted-foreground">{description}</p><p className="mt-8 border-l-2 border-primary pl-4 text-sm leading-7 text-muted-foreground">This area is part of the planned TrustTrail experience. Sign-in and live account features are not available yet.</p><Button asChild className="mt-8 h-11 px-6"><Link to="/">Explore TrustTrail <ArrowUpRight /></Link></Button></div>
      <div className="border-t border-border pt-8 lg:border-l lg:border-t-0 lg:py-8 lg:pl-12"><p className="mb-8 text-xs font-bold uppercase tracking-widest text-muted-foreground">Planned capabilities</p><ul className="space-y-0">{capabilities.map((capability, index) => <li key={capability} className="flex items-center gap-5 border-b border-border py-5"><span className="font-display text-sm text-primary">0{index + 1}</span><span className="font-medium">{capability}</span></li>)}</ul></div>
    </div>
  </main>;
}