import { createFileRoute } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { SharedNav, ProfileCardDesktop, ProfileCardMobile } from "../components/shared-layout";

export const Route = createFileRoute("/writing")({
  head: () => ({
    meta: [
      { title: "Writing — Churchill" },
      { name: "description", content: "Dev notes and writing by Churchill." },
    ],
  }),
  component: WritingPage,
});

const posts = [
  {
    img: "https://framerusercontent.com/images/xgMwYRclJvAhqaJhMbQm8kpRv0.png",
    date: "Mar 10, 2025",
    title: "Building a Dual-Brand E-Commerce Platform Solo",
    description: "The hardest part wasn't the storefronts themselves — it was getting Supabase RLS policies to correctly isolate Manficient and Sheficient data without leaking between brands. I hit a wall where policies looked correct on paper but silently blocked legitimate authenticated requests. Add Paystack's async callback timing, which didn't always fire when expected, and Cloudinary's drag-and-drop upload flow needing its own error handling — and this one took a lot of late-night debugging before it felt solid.",
    url: "#",
  },
  {
    img: "https://framerusercontent.com/images/Mirnh1WfdeIPhnjStrfY33WLFo8.png",
    date: "Jan 22, 2025",
    title: "Why I'm Building Open-Source Tooling for Stellar",
    description: "Early on, Freighter pushed a v6 API update that broke wallet connection logic I'd already written — function signatures changed with little warning, and I had to rework the hook internals mid-build. On top of that, the Stellar SDK's TypeScript types didn't always narrow the way I expected, so I spent real time chasing type errors that only made sense once I understood how the SDK represents transaction results internally.",
    url: "#",
  },
  {
    img: "https://framerusercontent.com/images/ic9k42rYytbJtnRUJXdcNxCHSc.png",
    date: "Nov 5, 2024",
    title: "Supabase RLS: The Bug That Cost Me Two Days",
    description: "This was a frustrating one. The RLS policy syntax was technically valid and matched Supabase's docs, but every authenticated request still came back empty — no error, just nothing. It took comparing the policy against the actual JWT claims being sent, row by row, to find a mismatched column reference that Postgres silently ignored instead of erroring on. Two days lost to something that was, in the end, one wrong column name.",
    url: "#",
  },
  {
    img: "https://framerusercontent.com/images/cofLlvrdf71d7i5raChitGnKzB0.jpg",
    date: "Sep 18, 2024",
    title: "Decoding Soroban XDR Errors Without Losing Your Mind",
    description: "Soroban contract errors come back as raw XDR-encoded numeric codes with zero context — no message, no stack trace, just a number. Building the decoder meant manually mapping contract error enums to readable strings, and testing against the actual Stellar SDK meant fighting build errors every time the SDK's type definitions shifted slightly between versions. Getting npm publish working with 2FA tokens configured correctly took its own chunk of time too.",
    url: "#",
  },
];

function WritingPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SharedNav active="writing" />

      {/* DESKTOP */}
      <div className="hidden md:flex max-w-6xl mx-auto px-6 pt-32 pb-24 gap-10 items-start">
        <div className="w-[360px] shrink-0 sticky top-24 self-start" style={{ height: "calc(100vh - 7rem)" }}>
          <ProfileCardDesktop />
        </div>
        <main className="flex-1 min-w-0">
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight leading-[1.05] mb-12">
            Writing &{" "}
            <span className="text-primary italic font-extrabold">Dev Notes</span>
          </h1>
          <div className="grid sm:grid-cols-2 gap-6">
            {posts.map((p) => (
              <a key={p.title} href={p.url}
                className="group bg-card border border-border rounded-3xl p-4 hover:border-primary/50 transition flex flex-col">
                <div className="aspect-[16/10] rounded-2xl overflow-hidden mb-5 bg-muted">
                  <img src={p.img} alt={p.title} className="w-full h-full object-cover group-hover:scale-105 transition duration-500" />
                </div>
                <div className="px-2 pb-2 flex-1 flex flex-col">
                  <div className="flex items-start justify-between gap-2">
                    <p className="text-muted-foreground text-sm">{p.date}</p>
                    <div className="w-7 h-7 rounded-full bg-primary text-primary-foreground flex items-center justify-center shrink-0">
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold mt-2">{p.title}</h3>
                  <p className="text-muted-foreground text-sm mt-2 leading-relaxed flex-1">{p.description}</p>
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
            Writing &{" "}
            <span className="text-primary italic font-extrabold">Dev Notes</span>
          </h1>
          <div className="flex flex-col gap-6">
            {posts.map((p) => (
              <a key={p.title} href={p.url}
                className="bg-card border border-border rounded-3xl p-4 flex flex-col">
                <div className="aspect-[16/10] rounded-2xl overflow-hidden mb-5 bg-muted">
                  <img src={p.img} alt={p.title} className="w-full h-full object-cover" />
                </div>
                <div className="px-2 pb-2">
                  <p className="text-muted-foreground text-sm">{p.date}</p>
                  <h3 className="text-xl font-semibold mt-2">{p.title}</h3>
                  <p className="text-muted-foreground text-sm mt-2 leading-relaxed">{p.description}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
