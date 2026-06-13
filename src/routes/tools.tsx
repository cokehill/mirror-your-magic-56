import { createFileRoute } from "@tanstack/react-router";
import { SharedNav, ProfileCardDesktop, ProfileCardMobile } from "../components/shared-layout";

export const Route = createFileRoute("/tools")({
  head: () => ({
    meta: [
      { title: "Tools — Churchill" },
      { name: "description", content: "Tech stack and tools used by Churchill." },
    ],
  }),
  component: ToolsPage,
});

const categories = [
  {
    label: "Frontend",
    tools: [
      { img: "https://framerusercontent.com/images/Cg3eZmT1kjh5FLtZnRVZIF8uJA.png", title: "Next.js 15", sub: "App Router · Frontend" },
      { img: "https://framerusercontent.com/images/X0h6R2GgbS58eBZoqvpGY7DHEQs.png", title: "React", sub: "UI Library" },
      { img: "https://framerusercontent.com/images/AhBXxjJiRdkLAzwJDbWOQA4ky1g.png", title: "TypeScript", sub: "Language · Tooling" },
      { img: "https://framerusercontent.com/images/YDk7LnTelFuZNrVcNXEq8APhUI.png", title: "Tailwind CSS", sub: "Styling" },
    ],
  },
  {
    label: "Backend & Database",
    tools: [
      { img: "https://framerusercontent.com/images/XLVrU9hn7CiNMhgqF9tRlD6lulU.png", title: "Supabase", sub: "Backend & Database" },
      { img: "https://framerusercontent.com/images/hxgSQmquybiB6mIsV8wyxmKgo.jpeg", title: "PostgreSQL", sub: "Database" },
      { img: "https://framerusercontent.com/images/rPU33YAD2YHXHtHu6zxEi5sI8w.webp", title: "Node.js", sub: "Runtime" },
    ],
  },
  {
    label: "Blockchain / Web3",
    tools: [
      { img: "https://framerusercontent.com/images/d2zr1mak9m6uCCKXgxjkfUHhdI.png", title: "Stellar SDK", sub: "Blockchain / Web3" },
      { img: "https://framerusercontent.com/images/X0h6R2GgbS58eBZoqvpGY7DHEQs.png", title: "Soroban", sub: "Smart Contracts" },
      { img: "https://framerusercontent.com/images/mKpBcirmfqd4t3E4WfKHynhKvA.webp", title: "XDR / Multi-sig", sub: "Stellar Protocols" },
    ],
  },
  {
    label: "Integrations & DevOps",
    tools: [
      { img: "https://framerusercontent.com/images/jHhWp9b1WWcDzxzj4ifMR6xL4.png", title: "Paystack", sub: "Payment Integration" },
      { img: "https://framerusercontent.com/images/Cg3eZmT1kjh5FLtZnRVZIF8uJA.png", title: "Cloudinary", sub: "Media Storage" },
      { img: "https://framerusercontent.com/images/cofLlvrdf71d7i5raChitGnKzB0.jpg", title: "Vercel", sub: "Deployment" },
      { img: "https://framerusercontent.com/images/ic9k42rYytbJtnRUJXdcNxCHSc.png", title: "Git / GitHub", sub: "Version Control" },
    ],
  },
];

function ToolsPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SharedNav active="tools" />

      {/* DESKTOP */}
      <div className="hidden md:flex max-w-6xl mx-auto px-6 pt-32 pb-24 gap-10 items-start">
        <div className="w-[360px] shrink-0 sticky top-24 self-start" style={{ height: "calc(100vh - 7rem)" }}>
          <ProfileCardDesktop />
        </div>
        <main className="flex-1 min-w-0">
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight leading-[1.05] mb-12">
            Tech Stack &{" "}
            <span className="text-primary italic font-extrabold">Tools</span>
          </h1>
          <div className="space-y-12">
            {categories.map((cat) => (
              <div key={cat.label}>
                <h2 className="text-lg font-semibold text-muted-foreground mb-5 uppercase tracking-widest text-sm">{cat.label}</h2>
                <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5">
                  {cat.tools.map((t) => (
                    <div key={t.title} className="bg-card border border-border rounded-3xl p-6 flex items-center gap-4 hover:border-primary/50 transition">
                      <img src={t.img} alt={t.title} className="w-14 h-14 rounded-xl object-cover bg-muted shrink-0" />
                      <div>
                        <h3 className="font-semibold">{t.title}</h3>
                        <p className="text-muted-foreground text-sm">{t.sub}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </main>
      </div>

      {/* MOBILE */}
      <div className="md:hidden px-4 pt-24 pb-16">
        <ProfileCardMobile />
        <div className="mt-10">
          <h1 className="text-4xl font-bold tracking-tight leading-[1.05] mb-10">
            Tech Stack &{" "}
            <span className="text-primary italic font-extrabold">Tools</span>
          </h1>
          <div className="space-y-10">
            {categories.map((cat) => (
              <div key={cat.label}>
                <h2 className="text-sm font-semibold text-muted-foreground mb-4 uppercase tracking-widest">{cat.label}</h2>
                <div className="grid grid-cols-2 gap-4">
                  {cat.tools.map((t) => (
                    <div key={t.title} className="bg-card border border-border rounded-2xl p-4 flex items-center gap-3">
                      <img src={t.img} alt={t.title} className="w-10 h-10 rounded-xl object-cover bg-muted shrink-0" />
                      <div>
                        <h3 className="font-semibold text-sm">{t.title}</h3>
                        <p className="text-muted-foreground text-xs">{t.sub}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
