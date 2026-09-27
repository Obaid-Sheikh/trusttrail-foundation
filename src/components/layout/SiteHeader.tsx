import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowUpRight, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTitle, SheetTrigger, SheetClose } from "@/components/ui/sheet";
import { Brand } from "./Brand";

const navigation = [
  { label: "How it works", href: "/#how-it-works" },
  { label: "Features", href: "/#features" },
  { label: "Why TrustTrail", href: "/#why-trusttrail" },
  { label: "FAQ", href: "/#faq" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/95 backdrop-blur-md">
      <div className="mx-auto flex h-[76px] max-w-[1440px] items-center justify-between gap-6 px-5 sm:px-8 lg:px-12">
        <Brand />
        <nav aria-label="Main navigation" className="hidden items-center gap-8 lg:flex">
          {navigation.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring"
            >
              {item.label}
            </a>
          ))}
        </nav>
        <div className="hidden items-center gap-3 lg:flex">
          <Button variant="ghost" asChild>
            <Link to="/customer">Login</Link>
          </Button>
          <Button asChild className="h-10 px-5">
            <Link to="/customer">
              Get started <ArrowUpRight />
            </Link>
          </Button>
        </div>
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="lg:hidden" aria-label="Open menu">
              <Menu />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[min(88vw,360px)] p-7">
            <SheetTitle className="mb-9 text-left">
              <Brand />
            </SheetTitle>
            <nav aria-label="Mobile navigation" className="flex flex-col gap-1">
              {navigation.map((item) => (
                <SheetClose key={item.label} asChild>
                  <a
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="border-b border-border py-4 text-base font-medium text-foreground"
                  >
                    {item.label}
                  </a>
                </SheetClose>
              ))}
            </nav>
            <div className="mt-8 flex flex-col gap-3">
              <Button asChild className="h-11">
                <Link to="/customer" onClick={() => setOpen(false)}>
                  Get started <ArrowUpRight />
                </Link>
              </Button>
              <Button variant="outline" asChild className="h-11">
                <Link to="/customer" onClick={() => setOpen(false)}>
                  Login
                </Link>
              </Button>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
