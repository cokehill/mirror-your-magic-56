import { createFileRoute } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { SharedNav, ProfileCardDesktop, ProfileCardMobile } from "../components/shared-layout";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Projects — Churchill" },
      { name: "description", content: "Projects and open-source work by Churchill." },
    ],
  }),
  component: ProjectsPage,
});

const projects = [
  {
    title: "Fresh Face Club",
    sub: "E-commerce · Featured",
    description: "Dual-brand skincare platform (Manficient & Sheficient) with brand-isolated storefronts, Paystack checkout, Supabase RLS, full admin panel, customer dashboard, QR referral tracking, and Nigerian delivery-fee logic. Built solo end-to-end.",
    stack: "Next.js 15 · Supabase · TypeScript · Paystack · Cloudinary · Tailwind CSS",
    url: "https://github.com/cokehill/Fresh-face-Club",
    img: "https://framerusercontent.com/images/mKpBcirmfqd4t3E4WfKHynhKvA.webp",
  },
  {
    title: "stellar-hooks",
    sub: "Open-source · Stellar",
    description: "React hooks library for the Stellar blockchain — simplifies wallet connection, transaction signing, and account querying in React apps. The wagmi of Stellar. Submitted under Drips/SCF grant funding.",
    stack: "React · Stellar SDK · TypeScript",
    url: "https://github.com/dark-princezz/stellar-hooks",
    img: "https://framerusercontent.com/images/hxgSQmquybiB6mIsV8wyxmKgo.jpeg",
  },
  {
    title: "stellar-tx-builder",
    sub: "Open-source · Stellar",
    description: "Visual drag-and-drop transaction builder for the Stellar network — compose, inspect, and submit transactions without writing raw XDR.",
    stack: "Next.js · Stellar SDK · TypeScript",
    url: "https://github.com/coolhillblack/stellar-tx_builder",
    img: "https://framerusercontent.com/images/rPU33YAD2YHXHtHu6zxEi5sI8w.webp",
  },
  {
    title: "soroban-error-decoder",
    sub: "Open-source · Soroban",
    description: "CLI tool for decoding XDR error codes from Soroban smart contracts into human-readable messages — a developer experience utility for the Stellar ecosystem.",
    stack: "Node.js · Soroban · XDR",
    url: "https://github.com/Absolutelyeomary/soroban-error-decoder",
    img: "https://framerusercontent.com/images/YDk7LnTelFuZNrVcNXEq8APhUI.png",
  },
  {
    url: "https://github.com/stellar-agent-registry/stellar-multisig-ui",
    img: "https://framerusercontent.com/images/Cg3eZmT1kjh5FLtZnRVZIF8uJA.png",
  },
  {
    title: "Restaurant Sales Demo Tool",
    sub: "Client outreach",
    description: "Portable single-file HTML pitch tool for restaurant website clients — one top-level CONFIG block to rebrand the entire demo per client pitch in minutes. WhatsApp as the order backend.",
    stack: "HTML · CSS · Vanilla JS",
    url: "#",
    img: "https://framerusercontent.com/images/XLVrU9hn7CiNMhgqF9tRlD6lulU.png",
  },
];

function ProjectsPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SharedNav active="projects" />

      {/* DESKTOP */}
      <div className="hidden md:flex max-w-6xl mx-auto px-6 pt-32 pb-24 gap-10 items-start">
        <div className="w-[360px] shrink-0 sticky top-24 self-start" style={{ height: "calc(100vh - 7rem)" }}>
          <ProfileCardDesktop />
        </div>
        <main className="flex-1 min-w-0">
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight leading-[1.05] mb-12">
            Projects &{" "}
            <span className="text-primary italic font-extrabold">Open-Source</span>
          </h1>
          <div className="grid sm:grid-cols-2 gap-6">
            {projects.map((p) => (
              <a key={p.title} href={p.url} target={p.url.startsWith("http") ? "_blank" : undefined} rel="noreferrer"
                className="group bg-card border border-border rounded-3xl p-4 hover:border-primary/50 transition flex flex-col">
                <div className="aspect-[4/3] rounded-2xl overflow-hidden mb-5 bg-muted">
                  <img src={p.img} alt={p.title} className="w-full h-full object-cover group-hover:scale-105 transition duration-500" />
                </div>
                <div className="px-2 pb-2 flex-1 flex flex-col">
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <h3 className="text-xl font-semibold">{p.title}</h3>
                      <p className="text-muted-foreground text-sm mt-1">{p.sub}</p>
                    </div>
                    <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center shrink-0 mt-1">
                      <ArrowUpRight className="w-4 h-4" />
                    </div>
                  </div>
                  <p className="text-muted-foreground text-sm mt-3 leading-relaxed flex-1">{p.description}</p>
                  <p className="text-xs text-primary mt-4 font-medium">{p.stack}</p>
                </div>
              </a>
            ))}
          </div>
        </main>
      </div>

      {/* MOBILE */}
      <div className="md:hidden px-4 pt-24 pb-16">
        <ProfileCardMobile />
        <div className="mt-10">
          <h1 className="text-4xl font-bold tracking-tight leading-[1.05] mb-10">
            Projects &{" "}
            <span className="text-primary italic font-extrabold">Open-Source</span>
          </h1>
          <div className="flex flex-col gap-6">
            {projects.map((p) => (
              <a key={p.title} href={p.url} target={p.url.startsWith("http") ? "_blank" : undefined} rel="noreferrer"
                className="group bg-card border border-border rounded-3xl p-4 transition flex flex-col">
                <div className="aspect-[4/3] rounded-2xl overflow-hidden mb-5 bg-muted">
                  <img src={p.img} alt={p.title} className="w-full h-full object-cover" />
                </div>
                <div className="px-2 pb-2">
                  <h3 className="text-xl font-semibold">{p.title}</h3>
                  <p className="text-muted-foreground text-sm mt-1">{p.sub}</p>
                  <p className="text-muted-foreground text-sm mt-3 leading-relaxed">{p.description}</p>
                  <p className="text-xs text-primary mt-4 font-medium">{p.stack}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
