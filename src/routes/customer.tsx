import { createFileRoute } from "@tanstack/react-router";
import { UserRound } from "lucide-react";
import { AppEntryLayout } from "@/components/layout/AppEntryLayout";

export const Route = createFileRoute("/customer")({
  head: () => ({ meta: [
    { title: "Customer experience — TrustTrail" },
    { name: "description", content: "Explore the planned TrustTrail customer experience for profiles, verification, requests, and activity." },
    { property: "og:title", content: "Customer experience — TrustTrail" },
    { property: "og:description", content: "Explore the planned TrustTrail customer experience for profiles, verification, requests, and activity." },
    { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" },
  ] }),
  component: () => <AppEntryLayout eyebrow="Customer experience" title="Your information, easier to understand." description="The customer area is being designed as a personal space to stay on top of your information and the steps that matter." icon={UserRound} capabilities={["Manage your profile", "Follow verification status", "View your status", "Manage requests", "Review activity"]} />,
});