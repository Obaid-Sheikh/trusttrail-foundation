import { createFileRoute } from "@tanstack/react-router";
import { Layers3 } from "lucide-react";
import { AppEntryLayout } from "@/components/layout/AppEntryLayout";

export const Route = createFileRoute("/admin")({
  head: () => ({ meta: [
    { title: "Admin experience — TrustTrail" },
    { name: "description", content: "Explore the planned TrustTrail administrative experience for review and oversight." },
    { property: "og:title", content: "Admin experience — TrustTrail" },
    { property: "og:description", content: "Explore the planned TrustTrail administrative experience for review and oversight." },
    { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" },
  ] }),
  component: () => <AppEntryLayout eyebrow="Admin experience" title="A focused space for thoughtful oversight." description="The admin area is planned as a dedicated workspace for authorized teams to review and manage operational activity." icon={Layers3} capabilities={["Manage users", "Review verification", "Manage requests", "Monitor trust and risk information", "Review activity"]} />,
});