import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { SharedNav, ProfileCardDesktop, ProfileCardMobile } from "../components/shared-layout";

export const Route = createFileRoute("/experience")({
  head: () => ({
    meta: [
      { title: "Experience — Churchill" },
      { name: "description", content: "Work experience and open-source contributions by Churchill." },
    ],
  }),
  component: ExperiencePage,
});

const experiences = [
  {
    company: "Fresh Face Club",
    role: "Solo Full-Stack Developer",
    period: "2023 – Present",
    description: "Designed, built, and deployed a dual-brand skincare e-commerce platform (Manficient & Sheficient) targeting the Nigerian market. End-to-end ownership: architecture, Supabase database design, Paystack payment integration, Cloudinary image handling, admin panel, customer dashboard, QR referral tracking, and Vercel deployment.",
    url: "#",
  },
  {
    company: "Stellar / Soroban Ecosystem",
    role: "Open-Source Contributor",
    period: "2024 – Present",
    description: "Building and submitting developer tooling to the Stellar ecosystem under Drips and SCF grant programmes. Projects span React hooks (stellar-hooks), CLI tools (soroban-error-decoder), visual transaction builders (stellar-tx-builder), and multi-sig UIs (stellar-multisig-ui).",
    url: "#",
  },
  {
    company: "Freelance Clients",
    role: "Full-Stack Web Developer",
    period: "2023 – Present",
    description: "Building client-facing web solutions for businesses in Nigeria and internationally. Deliverables include restaurant pitch tools, admin dashboards, and custom landing pages. All projects scoped, designed, and shipped solo.",
    url: "#",
  },
  {
    company: "Open-Source Contributions",
    role: "Contributor",
    period: "2023 – Present",
    description: "Contributed to Protox-Labs/protox-core, Axionvera/axionvera-dashboard, BETAIL-BOYS/TradeFlow-API, Remitwise-Org/Remitwise-Contracts, and Grant-Stream/Grant-Stream-Contracts. Work includes NestJS API fixes, Solidity smart contract features, and Git conflict resolution.",
    url: "https://github.com/cokehill",
  },
];

function ExperiencePage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SharedNav active="experience" />

      {/* DESKTOP/TABLET */}
      <div className="hidden md:flex max-w-6xl mx-auto px-6 pt-32 pb-24 gap-10 items-start">
        {/* Sticky sidebar */}
        <div className="w-[360px] shrink-0 sticky top-24 self-start" style={{ height: "calc(100vh - 7rem)" }}>
          <ProfileCardDesktop />
        </div>

        {/* Scrollable content */}
        <main className="flex-1 min-w-0">
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight leading-[1.05] mb-12">
            Building in{" "}
            <span className="text-primary italic font-extrabold">Public</span>
          </h1>

          <div className="space-y-5">
            {experiences.map((exp) => {
              const [hovered, setHovered] = useState(false);
              const [animKey, setAnimKey] = useState(0);
              const handleEnter = () => { setHovered(true); setAnimKey(k => k + 1); };
              const handleLeave = () => { setHovered(false); setAnimKey(k => k + 1); };
              return (
                <a
                  key={exp.company}
                  href={exp.url}
                  onMouseEnter={handleEnter}
                  onMouseLeave={handleLeave}
                  className={`block rounded-3xl p-8 border transition-colors duration-300 bg-card border-border ${hovered ? "bg-primary border-primary" : ""}`}
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <h2 className={`text-2xl font-bold transition-colors duration-300 ${hovered ? "text-primary-foreground" : "text-foreground"}`}>
                        {exp.company}
                      </h2>
                      <p className={`text-sm font-medium mt-1 transition-colors duration-300 ${hovered ? "text-primary-foreground/80" : "text-muted-foreground"}`}>
                        {exp.role}
                      </p>
                      <p className={`mt-4 text-sm leading-relaxed transition-colors duration-300 ${hovered ? "text-primary-foreground/90" : "text-muted-foreground"}`}>
                        {exp.description}
                      </p>
                      <p className={`mt-5 text-sm font-medium transition-colors duration-300 ${hovered ? "text-primary-foreground/70" : "text-muted-foreground"}`}>
                        {exp.period}
                      </p>
                    </div>
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center shrink-0 mt-1 overflow-hidden transition-colors duration-300 relative ${hovered ? "bg-primary-foreground text-primary" : "bg-primary text-primary-foreground"}`}>
                      <ArrowUpRight key={`exit-${animKey}`} className="w-6 h-6 absolute animate-arrow-exit" />
                      <ArrowUpRight key={`enter-${animKey}`} className="w-6 h-6 absolute animate-arrow-enter" />
                    </div>
                  </div>
                </a>
              );
            })}
          </div>
        </main>
      </div>

      {/* MOBILE */}
      <div className="md:hidden px-4 pt-24 pb-16">
        <ProfileCardMobile />

        {/* Mobile experience content */}
        <div className="mt-10">
          <h1 className="text-4xl font-bold tracking-tight leading-[1.05] mb-10">
            Building in{" "}
            <span className="text-primary italic font-extrabold">Public</span>
          </h1>

          <div className="space-y-5">
            {experiences.map((exp) => {
              const [pressed, setPressed] = useState(false);
              const [animKey, setAnimKey] = useState(0);
              const handlePress = () => { setPressed(true); setAnimKey(k => k + 1); };
              const handleRelease = () => { setPressed(false); setAnimKey(k => k + 1); };
              return (
                <a
                  key={exp.company}
                  href={exp.url}
                  onTouchStart={handlePress}
                  onTouchEnd={handleRelease}
                  className={`block rounded-3xl p-6 border transition-colors duration-300 ${pressed ? "bg-primary border-primary" : "bg-card border-border"}`}
                >
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex-1">
                      <h2 className={`text-xl font-bold transition-colors duration-300 ${pressed ? "text-primary-foreground" : "text-foreground"}`}>
                        {exp.company}
                      </h2>
                      <p className={`text-sm mt-1 transition-colors duration-300 ${pressed ? "text-primary-foreground/80" : "text-muted-foreground"}`}>
                        {exp.role}
                      </p>
                      <p className={`mt-3 text-sm leading-relaxed transition-colors duration-300 ${pressed ? "text-primary-foreground/90" : "text-muted-foreground"}`}>
                        {exp.description}
                      </p>
                      <p className={`mt-4 text-sm transition-colors duration-300 ${pressed ? "text-primary-foreground/70" : "text-muted-foreground"}`}>
                        {exp.period}
                      </p>
                    </div>
                    <div className={`w-11 h-11 rounded-full flex items-center justify-center shrink-0 mt-1 overflow-hidden transition-colors duration-300 relative ${pressed ? "bg-primary-foreground text-primary" : "bg-primary text-primary-foreground"}`}>
                      <ArrowUpRight key={`exit-${animKey}`} className="w-5 h-5 absolute animate-arrow-exit" />
                      <ArrowUpRight key={`enter-${animKey}`} className="w-5 h-5 absolute animate-arrow-enter" />
                    </div>
                  </div>
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
