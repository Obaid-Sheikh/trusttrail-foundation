import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  ArrowUpRight,
  BadgeCheck,
  CircleHelp,
  ClipboardList,
  FileClock,
  Fingerprint,
  Layers3,
  ListChecks,
  ScanSearch,
  ShieldCheck,
  UserRound,
  UsersRound,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";
import heroImage from "@/assets/trusttrail-hero.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "TrustTrail — A clearer view of every interaction" },
      {
        name: "description",
        content:
          "Explore TrustTrail: a structured place for profiles, verification status, requests, activity, and administrative review.",
      },
      { property: "og:title", content: "TrustTrail — A clearer view of every interaction" },
      {
        property: "og:description",
        content:
          "A structured place for profiles, verification status, requests, activity, and administrative review.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const features = [
  {
    icon: UserRound,
    number: "01",
    title: "Profiles",
    text: "Keep important profile information organized in one place.",
  },
  {
    icon: BadgeCheck,
    number: "02",
    title: "Verification",
    text: "See where verification stands and what may need attention.",
  },
  {
    icon: ClipboardList,
    number: "03",
    title: "Requests",
    text: "Follow requests, their progress, and the actions around them.",
  },
  {
    icon: FileClock,
    number: "04",
    title: "Activity",
    text: "Understand what has happened through a relevant activity history.",
  },
  {
    icon: ScanSearch,
    number: "05",
    title: "Trust information",
    text: "Bring useful context into view without reducing trust to a single promise.",
  },
  {
    icon: UsersRound,
    number: "06",
    title: "Admin oversight",
    text: "Give authorized teams a clear place to review and manage work.",
  },
];
const steps = [
  {
    number: "01",
    title: "Create a profile",
    text: "Bring essential information together in a structured space.",
  },
  {
    number: "02",
    title: "Complete verification",
    text: "See verification steps and understand your current status.",
  },
  {
    number: "03",
    title: "Build a history",
    text: "Keep relevant activity and updates visible over time.",
  },
  {
    number: "04",
    title: "Manage interactions",
    text: "Track requests and know what needs your attention.",
  },
];
const faqs = [
  {
    q: "What is TrustTrail?",
    a: "TrustTrail is a product being developed to make interactions easier to understand through structured profiles, verification status, requests, and activity history.",
  },
  {
    q: "Who is TrustTrail for?",
    a: "TrustTrail is designed for customers managing their own information and for authorized administrators reviewing verification, requests, and activity.",
  },
  {
    q: "Does verification guarantee someone is trustworthy?",
    a: "No. Verification describes the status of specific checks or information. It is not a guarantee of someone’s overall trustworthiness.",
  },
  {
    q: "What will I be able to see in my account?",
    a: "The planned customer experience brings together a profile, verification status, requests, and relevant activity in one place.",
  },
  {
    q: "Is the customer or admin application available yet?",
    a: "Not yet. TrustTrail is being built in phases. The public website is the first step; account and administrative functionality will follow.",
  },
];

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="mb-5 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.17em] text-primary">
      <span className="h-px w-6 bg-primary" />
      {children}
    </p>
  );
}

function Index() {
  return (
    <>
      <SiteHeader />
      <main>
        <section className="relative isolate flex min-h-[600px] items-center overflow-hidden bg-ink-soft text-primary-foreground md:min-h-[690px] lg:min-h-[730px]">
          <img
            src={heroImage}
            alt="Organized documents in transparent folders on a sunlit desk"
            width={1600}
            height={1000}
            className="absolute inset-0 -z-20 h-full w-full object-cover object-[57%_center]"
          />
          <div className="absolute inset-0 -z-10 bg-ink-soft/40 md:bg-ink-soft/25" />
          <div className="mx-auto w-full max-w-[1440px] px-5 py-24 sm:px-8 lg:px-12">
            <div className="max-w-[650px]">
              <p className="mb-8 inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.17em] text-primary-foreground/90">
                <span className="size-2 rounded-full bg-primary-foreground" /> Clarity, from the
                start
              </p>
              <h1 className="font-display text-[clamp(2.8rem,5vw,5rem)] font-semibold leading-[1.13]">
                TrustTrail.
                <br />
                <span className="text-primary-foreground/80">
                  A clearer view of every interaction.
                </span>
              </h1>
              <p className="mt-7 max-w-[560px] text-base leading-8 text-primary-foreground/90 sm:text-lg">
                Bring profiles, verification status, requests, and activity into one place—so the
                information that matters is easier to see and understand.
              </p>
              <div className="mt-9 flex flex-wrap gap-3">
                <Button
                  asChild
                  size="lg"
                  className="h-12 bg-background px-6 text-foreground hover:bg-background/90"
                >
                  <Link to="/customer">
                    Get started <ArrowUpRight />
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="h-12 border-primary-foreground/70 bg-transparent px-6 text-primary-foreground hover:bg-primary-foreground/15 hover:text-primary-foreground"
                >
                  <a href="#how-it-works">
                    See how it works <ArrowRight />
                  </a>
                </Button>
              </div>
            </div>
          </div>
          <div className="absolute bottom-0 left-0 right-0 border-t border-primary-foreground/30 bg-ink-soft/30">
            <div className="mx-auto flex max-w-[1440px] items-center gap-4 px-5 py-4 text-xs font-medium uppercase tracking-[0.13em] text-primary-foreground/90 sm:px-8 lg:px-12">
              <span>Profiles</span>
              <span className="text-primary-foreground/50">/</span>
              <span>Verification</span>
              <span className="text-primary-foreground/50">/</span>
              <span>Activity</span>
            </div>
          </div>
        </section>

        <section className="border-b border-border bg-background py-20 md:py-28">
          <div className="mx-auto grid max-w-[1440px] gap-8 px-5 sm:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-24 lg:px-12">
            <div>
              <SectionLabel>The challenge</SectionLabel>
              <h2 className="max-w-xl font-display text-3xl font-semibold leading-tight sm:text-4xl">
                Important context shouldn’t be hard to find.
              </h2>
            </div>
            <div className="max-w-2xl self-end">
              <p className="text-lg leading-8 text-muted-foreground">
                When information lives in different places, it can be difficult to know what’s been
                checked, what needs attention, or what happened before. TrustTrail is being designed
                to bring that context together in a more understandable way.
              </p>
              <div className="mt-8 h-px w-full bg-border" />
              <p className="mt-6 text-sm font-semibold text-primary">
                Less guesswork. More clarity.
              </p>
            </div>
          </div>
        </section>

        <section id="how-it-works" className="scroll-mt-20 bg-brand-soft py-20 md:py-28">
          <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
            <SectionLabel>The journey</SectionLabel>
            <div className="mb-12 flex flex-wrap items-end justify-between gap-6">
              <h2 className="max-w-xl font-display text-3xl font-semibold leading-tight sm:text-4xl">
                How TrustTrail works
              </h2>
              <p className="max-w-md text-sm leading-7 text-muted-foreground">
                A simple path from information to a clearer picture of ongoing interactions.
              </p>
            </div>
            <div className="grid border-t border-primary/20 md:grid-cols-2 lg:grid-cols-4">
              {steps.map((step, i) => (
                <div
                  key={step.number}
                  className="relative border-b border-primary/20 py-8 pr-8 lg:border-b-0 lg:pr-10"
                >
                  <div className="mb-10 flex items-center justify-between">
                    <span className="font-display text-sm font-semibold text-primary">
                      {step.number} / 04
                    </span>
                    {i < 3 && <ArrowRight className="hidden size-5 text-primary/50 lg:block" />}
                  </div>
                  <h3 className="font-display text-xl font-semibold">{step.title}</h3>
                  <p className="mt-3 max-w-xs text-sm leading-7 text-muted-foreground">
                    {step.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="features" className="scroll-mt-20 bg-background py-20 md:py-28">
          <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
            <SectionLabel>What comes together</SectionLabel>
            <h2 className="mb-4 max-w-2xl font-display text-3xl font-semibold leading-tight sm:text-4xl">
              The essentials, in one connected experience.
            </h2>
            <p className="mb-12 max-w-2xl text-base leading-8 text-muted-foreground">
              TrustTrail’s planned foundation focuses on the information and actions people need to
              understand.
            </p>
            <div className="grid border-l border-t border-border sm:grid-cols-2 lg:grid-cols-3">
              {features.map((feature) => (
                <article
                  key={feature.title}
                  className="min-h-64 border-b border-r border-border bg-card p-7 transition-colors hover:bg-brand-soft/50 md:p-8"
                >
                  <div className="mb-9 flex items-start justify-between">
                    <div className="flex size-11 items-center justify-center rounded-md bg-brand-soft text-primary">
                      <feature.icon className="size-5" strokeWidth={1.8} />
                    </div>
                    <span className="text-xs font-medium text-muted-foreground">
                      {feature.number}
                    </span>
                  </div>
                  <h3 className="font-display text-lg font-semibold">{feature.title}</h3>
                  <p className="mt-3 max-w-xs text-sm leading-7 text-muted-foreground">
                    {feature.text}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-ink-soft py-20 text-primary-foreground md:py-28">
          <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
            <p className="mb-5 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.17em] text-primary-foreground/70">
              <span className="h-px w-6 bg-primary-foreground/70" /> Two perspectives, one platform
            </p>
            <h2 className="mb-12 max-w-2xl font-display text-3xl font-semibold leading-tight sm:text-4xl">
              Built for the people using it. And the teams behind it.
            </h2>
            <div className="grid gap-px bg-primary-foreground/20 md:grid-cols-2">
              <div className="bg-ink-soft py-8 md:pr-12">
                <UserRound className="mb-10 size-7 text-primary-foreground/75" strokeWidth={1.5} />
                <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-primary-foreground/60">
                  For customers
                </p>
                <h3 className="font-display text-2xl font-semibold">A view that feels personal.</h3>
                <p className="mt-4 max-w-md text-sm leading-7 text-primary-foreground/70">
                  A place to manage your profile, follow verification, view your status, handle
                  requests, and keep up with your activity.
                </p>
                <Button
                  asChild
                  variant="link"
                  className="mt-6 h-auto p-0 text-primary-foreground hover:text-primary-foreground/80"
                >
                  <Link to="/customer">
                    Explore customer area <ArrowUpRight />
                  </Link>
                </Button>
              </div>
              <div className="bg-ink-soft py-8 md:pl-12">
                <Layers3 className="mb-10 size-7 text-primary-foreground/75" strokeWidth={1.5} />
                <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-primary-foreground/60">
                  For administrators
                </p>
                <h3 className="font-display text-2xl font-semibold">A view made for oversight.</h3>
                <p className="mt-4 max-w-md text-sm leading-7 text-primary-foreground/70">
                  A dedicated workspace planned for reviewing users, verification, requests,
                  trust-related context, and activity.
                </p>
                <Button
                  asChild
                  variant="link"
                  className="mt-6 h-auto p-0 text-primary-foreground hover:text-primary-foreground/80"
                >
                  <Link to="/admin">
                    Explore admin area <ArrowUpRight />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-background py-20 md:py-28">
          <div className="mx-auto grid max-w-[1440px] gap-12 px-5 sm:px-8 lg:grid-cols-2 lg:items-center lg:gap-24 lg:px-12">
            <div>
              <SectionLabel>A thoughtful approach</SectionLabel>
              <h2 className="max-w-lg font-display text-3xl font-semibold leading-tight sm:text-4xl">
                Verification is context, not a guarantee.
              </h2>
              <p className="mt-6 max-w-xl text-base leading-8 text-muted-foreground">
                Knowing the status of specific checks can help make information easier to interpret.
                It does not tell the whole story about a person or guarantee an outcome.
              </p>
              <p className="mt-5 max-w-xl text-base leading-8 text-muted-foreground">
                TrustTrail aims to make those statuses and next steps clear, without asking you to
                read between the lines.
              </p>
            </div>
            <div className="relative border border-border bg-card p-7 sm:p-10">
              <div className="mb-8 flex items-center justify-between border-b border-border pb-6">
                <div className="flex items-center gap-3">
                  <span className="flex size-11 items-center justify-center rounded-md bg-brand-soft text-primary">
                    <Fingerprint className="size-6" />
                  </span>
                  <span className="font-display text-lg font-semibold">Clear by design</span>
                </div>
                <span className="text-xs font-medium text-muted-foreground">01 — 03</span>
              </div>
              <div className="space-y-7">
                {[
                  {
                    icon: ListChecks,
                    title: "Visible status",
                    text: "Understand where a specific process stands.",
                  },
                  {
                    icon: CircleHelp,
                    title: "Understandable next steps",
                    text: "See what may still need attention.",
                  },
                  {
                    icon: ShieldCheck,
                    title: "Relevant history",
                    text: "Follow the activity connected to a process.",
                  },
                ].map((item) => (
                  <div key={item.title} className="flex gap-4">
                    <item.icon className="mt-1 size-5 shrink-0 text-primary" />
                    <div>
                      <p className="font-semibold">{item.title}</p>
                      <p className="mt-1 text-sm leading-6 text-muted-foreground">{item.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section
          id="why-trusttrail"
          className="scroll-mt-20 border-y border-border bg-muted/60 py-20 md:py-28"
        >
          <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
            <SectionLabel>Why TrustTrail</SectionLabel>
            <div className="grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:gap-24">
              <h2 className="max-w-lg font-display text-3xl font-semibold leading-tight sm:text-4xl">
                Better informed starts with better organized.
              </h2>
              <div className="grid gap-8 sm:grid-cols-2">
                <div>
                  <span className="mb-5 block font-display text-3xl text-primary">01</span>
                  <h3 className="font-display text-lg font-semibold">See the whole picture</h3>
                  <p className="mt-3 text-sm leading-7 text-muted-foreground">
                    Find profiles, statuses, requests, and activity in a connected space.
                  </p>
                </div>
                <div>
                  <span className="mb-5 block font-display text-3xl text-primary">02</span>
                  <h3 className="font-display text-lg font-semibold">Know what’s next</h3>
                  <p className="mt-3 text-sm leading-7 text-muted-foreground">
                    Make pending steps and important updates easier to identify.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="faq" className="scroll-mt-20 bg-background py-20 md:py-28">
          <div className="mx-auto grid max-w-[1440px] gap-10 px-5 sm:px-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24 lg:px-12">
            <div>
              <SectionLabel>Good to know</SectionLabel>
              <h2 className="font-display text-3xl font-semibold leading-tight sm:text-4xl">
                Frequently asked questions.
              </h2>
              <p className="mt-5 max-w-sm text-base leading-8 text-muted-foreground">
                Straightforward answers about what TrustTrail is and where it’s headed.
              </p>
            </div>
            <Accordion type="single" collapsible className="border-t border-border">
              {faqs.map((faq, i) => (
                <AccordionItem key={faq.q} value={`faq-${i}`}>
                  <AccordionTrigger className="py-6 text-left text-base font-semibold hover:no-underline">
                    {faq.q}
                  </AccordionTrigger>
                  <AccordionContent className="max-w-xl pb-6 text-sm leading-7 text-muted-foreground">
                    {faq.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        <section className="bg-primary py-20 text-primary-foreground md:py-24">
          <div className="mx-auto flex max-w-[1440px] flex-col justify-between gap-8 px-5 sm:px-8 lg:flex-row lg:items-end lg:px-12">
            <div>
              <p className="mb-5 text-xs font-bold uppercase tracking-[0.17em] text-primary-foreground/75">
                The next step
              </p>
              <h2 className="max-w-xl font-display text-3xl font-semibold leading-tight sm:text-4xl">
                Start with a clearer view.
              </h2>
              <p className="mt-5 max-w-lg text-base leading-7 text-primary-foreground/80">
                Explore the customer experience planned for TrustTrail.
              </p>
            </div>
            <Button
              asChild
              size="lg"
              className="h-12 w-fit bg-background px-6 text-foreground hover:bg-background/90"
            >
              <Link to="/customer">
                Get started <ArrowUpRight />
              </Link>
            </Button>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
