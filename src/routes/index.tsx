import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, ArrowLeft, Plus, Minus } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import { SharedNav, ProfileCardDesktop, ProfileCardMobile, SOCIAL_LINKS } from "../components/shared-layout";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Churchill — Full-Stack Developer & Open-Source Contributor" },
      { name: "description", content: "I build production-grade web apps and blockchain tooling from Nigeria." },
      { property: "og:title", content: "Churchill — Full-Stack Developer & Open-Source Contributor" },
      { property: "og:description", content: "I build production-grade web apps and blockchain tooling from Nigeria." },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" },
    ],
  }),
  component: Index,
});

const logos = [
  "https://framerusercontent.com/images/thnl5ojrPDJHe6wqR1XyOQtjY.png",
  "https://framerusercontent.com/images/7QV8ZRpDIrQ8WDfEQo5YrXrOdY.png",
  "https://framerusercontent.com/images/hbQoHm3DxGjTvwuZCihDCVRf68.png",
  "https://framerusercontent.com/images/j5Ewq5A9Jqjx0ZTEdhGFo2mA68.png",
  "https://framerusercontent.com/images/9k1PBTfMERvO6z3Y0MfZlgFFZU.png",
  "https://framerusercontent.com/images/TKSzFA87J3EjF2Ay6DpYDieEQFY.png",
];

const projects = [
  { img: "https://framerusercontent.com/images/mKpBcirmfqd4t3E4WfKHynhKvA.webp", title: "Fresh Face Club", sub: "E-commerce · Featured", url: "https://github.com/cokehill/Fresh-face-Club" },
  { img: "https://framerusercontent.com/images/hxgSQmquybiB6mIsV8wyxmKgo.jpeg", title: "stellar-hooks", sub: "Open-source · Stellar", url: "https://github.com/dark-princezz/stellar-hooks" },
  { img: "https://framerusercontent.com/images/rPU33YAD2YHXHtHu6zxEi5sI8w.webp", title: "stellar-tx-builder", sub: "Open-source · Stellar", url: "https://github.com/coolhillblack/stellar-tx_builder" },
  { img: "https://framerusercontent.com/images/YDk7LnTelFuZNrVcNXEq8APhUI.png", title: "soroban-error-decoder", sub: "Open-source · Soroban", url: "https://github.com/Absolutelyeomary/soroban-error-decoder" },
];

const tools = [
  { img: "https://framerusercontent.com/images/Cg3eZmT1kjh5FLtZnRVZIF8uJA.png", title: "Next.js 15", sub: "App Router · Frontend" },
  { img: "https://framerusercontent.com/images/XLVrU9hn7CiNMhgqF9tRlD6lulU.png", title: "Supabase", sub: "Backend & Database" },
  { img: "https://framerusercontent.com/images/jHhWp9b1WWcDzxzj4ifMR6xL4.png", title: "Paystack", sub: "Payment Integration" },
  { img: "https://framerusercontent.com/images/d2zr1mak9m6uCCKXgxjkfUHhdI.png", title: "Stellar SDK", sub: "Blockchain / Web3" },
  { img: "https://framerusercontent.com/images/AhBXxjJiRdkLAzwJDbWOQA4ky1g.png", title: "TypeScript", sub: "Language · Tooling" },
  { img: "https://framerusercontent.com/images/X0h6R2GgbS58eBZoqvpGY7DHEQs.png", title: "Soroban", sub: "Smart Contracts" },
];

const testimonials = [
  { img: "https://framerusercontent.com/images/iABb6ejla3A5ZzE4zgxiPqBaYHI.jpg", name: "William M.", quote: "Churchill built our e-commerce storefront from scratch — clean, fast, and exactly what we needed. Paystack checkout worked flawlessly on day one." },
  { img: "https://framerusercontent.com/images/HqoHkPp6dpJFdgMqUKIaAXmy7o.jpg", name: "Robert P.", quote: "He owned the whole project — database, auth, admin panel, deployment. No hand-holding required. Rare to find that level of end-to-end ownership." },
  { img: "https://framerusercontent.com/images/7ckekOZAa0J28C2T3IfYTvNDv5U.jpg", name: "James K.", quote: "The Stellar hooks library Churchill shipped is exactly what the ecosystem was missing. Clean API, well-documented, and it just works." },
  { img: "https://framerusercontent.com/images/w2hyXovpoCcfHZkjR4Hmr53RA5o.jpg", name: "David L.", quote: "Churchill shipped a working demo tool for our restaurant client pitch in under a day. Single HTML file, fully rebrandable. Brilliant solution." },
  { img: "https://framerusercontent.com/images/kAftuUN9iRKwIt9M6RqZo9NS314.jpg", name: "Michael S.", quote: "Solid communicator and even better developer. He flagged issues before they became problems and delivered ahead of schedule." },
  { img: "https://framerusercontent.com/images/Y9KmJAQ4w53hsc4jJojfokLZ7D8.jpg", name: "John D.", quote: "Working with Churchill on the TradeFlow API was seamless. He resolved the merge conflict, tightened the middleware, and kept the codebase clean throughout." },
];

const blog = [
  { img: "https://framerusercontent.com/images/xgMwYRclJvAhqaJhMbQm8kpRv0.png", date: "Mar 10, 2025", title: "Building a Dual-Brand E-Commerce Platform Solo" },
  { img: "https://framerusercontent.com/images/Mirnh1WfdeIPhnjStrfY33WLFo8.png", date: "Jan 22, 2025", title: "Why I'm Building Open-Source Tooling for Stellar" },
  { img: "https://framerusercontent.com/images/ic9k42rYytbJtnRUJXdcNxCHSc.png", date: "Nov 5, 2024", title: "Supabase RLS: The Bug That Cost Me Two Days" },
  { img: "https://framerusercontent.com/images/cofLlvrdf71d7i5raChitGnKzB0.jpg", date: "Sep 18, 2024", title: "Decoding Soroban XDR Errors Without Losing Your Mind" },
];

const faqs = [
  {
    q: "What services do you offer?",
    a: "I can handle everything solo: frontend, backend, DevOps, and delivery, but I have my team — junior software engineers, DevOps, and UI/UX designers — for when we're running super complex work. My main focus areas are e-commerce platforms (Next.js 15, Supabase, Paystack), admin dashboards, and open-source developer tooling for the Stellar/Soroban blockchain ecosystem.",
  },
  {
    q: "Do you work with clients outside Nigeria?",
    a: "Yes, absolutely. I'm open to remote contracts and collaborations from anywhere in the world. Most of my open-source contributions already involve international teams and grant programmes like Stellar's SCF and Drips.",
  },
  {
    q: "How do you handle project timelines?",
    a: "For full e-commerce builds I typically deliver in around 4 weeks. Smaller builds — landing pages, dashboards, or focused features — can be turned around within a week. That said, timelines are always scoped to the quality and complexity of what's being built, so I agree on a realistic schedule with each client upfront.",
  },
  {
    q: "Can you work with existing teams?",
    a: "Sure — I currently run a team of my own, so I'm comfortable both as a solo contributor and as part of a larger team. I can slot in as a full-stack developer, a blockchain specialist, or take on a lead role depending on what the project needs.",
  },
  {
    q: "What is your experience with the Stellar ecosystem?",
    a: "I've been contributing to existing Stellar and Soroban projects while also building my own tooling — React hooks libraries, CLI error decoders, visual transaction builders, and multi-sig UIs. My goal is to help the ecosystem grow more seamlessly by closing the developer experience gaps that make it harder for builders to adopt Stellar.",
  },
];

function TestimonialsCarousel() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const pausedRef = useRef(false);
  const resumeTimerRef = useRef<ReturnType<typeof setTimeout>>();

  const CARD_WIDTH = 340 + 24; // card width + gap
  const SET_WIDTH = testimonials.length * CARD_WIDTH;
  const SPEED = 0.6; // px per frame, continuous auto-scroll

  // Continuous auto-scroll loop
  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    let raf: number;
    const step = () => {
      if (!pausedRef.current) {
        el.scrollLeft += SPEED;
        if (el.scrollLeft >= SET_WIDTH) {
          el.scrollLeft -= SET_WIDTH;
        }
      }
      raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, []);

  // Cleanup resume timer on unmount
  useEffect(() => {
    return () => {
      if (resumeTimerRef.current) clearTimeout(resumeTimerRef.current);
    };
  }, []);

  const scroll = (direction: "left" | "right") => {
    const el = scrollRef.current;
    if (!el) return;

    // Pause auto-scroll
    pausedRef.current = true;
    if (resumeTimerRef.current) clearTimeout(resumeTimerRef.current);

    el.scrollBy({ left: direction === "left" ? -CARD_WIDTH : CARD_WIDTH, behavior: "smooth" });

    // Resume auto-scroll after 10s of no further button use
    resumeTimerRef.current = setTimeout(() => {
      pausedRef.current = false;
    }, 10000);
  };

  return (
    <section className="mt-20">
      <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-12">What Clients & Collaborators Say</h2>
      <div
        ref={scrollRef}
        className="flex gap-6 overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden [mask-image:linear-gradient(to_right,transparent,black_5%,black_95%,transparent)]"
      >
        {[...testimonials, ...testimonials].map((t, i) => (
          <div key={i} className="w-[340px] shrink-0 bg-card border border-border rounded-3xl p-5">
            <div className="aspect-[4/5] rounded-2xl overflow-hidden mb-5 bg-muted">
              <img src={t.img} alt={t.name} className="w-full h-full object-cover" />
            </div>
            <h4 className="font-semibold">{t.name}</h4>
            <p className="text-muted-foreground text-sm mt-3 leading-relaxed">{t.quote}</p>
          </div>
        ))}
      </div>
      <div className="flex justify-center gap-3 mt-8">
        <button onClick={() => scroll("left")} className="w-11 h-11 rounded-full bg-card border border-border flex items-center justify-center hover:bg-muted transition"><ArrowLeft className="w-4 h-4" /></button>
        <button onClick={() => scroll("right")} className="w-11 h-11 rounded-full bg-card border border-border flex items-center justify-center hover:bg-muted transition"><ArrowRight className="w-4 h-4" /></button>
      </div>
    </section>
  );
}

function PageSections() {
  return (
    <>
      {/* Logos marquee */}
      <section className="mt-16">
        <p className="text-center text-muted-foreground mb-8">Open-source contributions · Stellar ecosystem · Nigerian market</p>
        <div className="overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_15%,black_85%,transparent)]">
          <div className="flex gap-16 animate-marquee w-max">
            {[...logos, ...logos, ...logos].map((src, i) => (
              <img key={i} src={src} alt="" className="h-8 opacity-60" />
            ))}
          </div>
        </div>
      </section>

      {/* Projects */}
      <section className="mt-20">
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-12">Projects & Open-Source Work</h2>
        <div className="grid sm:grid-cols-2 gap-6">
          {projects.map((p) => (
            <a key={p.title} href={p.url} target="_blank" rel="noreferrer" className="group bg-card border border-border rounded-3xl p-4 hover:border-primary/50 transition">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden mb-5 bg-muted">
                <img src={p.img} alt={p.title} className="w-full h-full object-cover group-hover:scale-105 transition duration-500" />
              </div>
              <div className="px-2 pb-2">
                <h3 className="text-xl font-semibold">{p.title}</h3>
                <p className="text-muted-foreground text-sm mt-1">{p.sub}</p>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* Tools */}
      <section className="mt-20">
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-12">Tech Stack & Tools</h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5">
          {tools.map((t) => (
            <a key={t.title} href="/tools" className="bg-card border border-border rounded-3xl p-6 flex items-center gap-4 hover:border-primary/50 transition">
              <img src={t.img} alt={t.title} className="w-14 h-14 rounded-xl object-cover bg-muted" />
              <div>
                <h3 className="font-semibold">{t.title}</h3>
                <p className="text-muted-foreground text-sm">{t.sub}</p>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <TestimonialsCarousel />

      {/* Blog */}
      <section className="mt-20">
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-12">Writing & Dev Notes</h2>
        <div className="grid sm:grid-cols-2 gap-6">
          {blog.map((b) => (
            <a key={b.title} href="/writing" className="group bg-card border border-border rounded-3xl p-4 hover:border-primary/50 transition">
              <div className="aspect-[16/10] rounded-2xl overflow-hidden mb-5 bg-muted">
                <img src={b.img} alt={b.title} className="w-full h-full object-cover group-hover:scale-105 transition duration-500" />
              </div>
              <div className="px-2 pb-2">
                <p className="text-muted-foreground text-sm">{b.date}</p>
                <h3 className="text-xl font-semibold mt-2">{b.title}</h3>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="mt-20 max-w-3xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-12 text-center">Frequently Asked Questions</h2>
        <div className="space-y-3">
          {faqs.map((item, i) => <FAQItem key={i} q={item.q} a={item.a} />)}
        </div>
      </section>

      {/* CTA */}
      <section className="mt-20 pb-8">
        <a href="https://wa.me/2348126001223" target="_blank" rel="noreferrer" className="block bg-card border border-border rounded-3xl p-10 md:p-16 text-center hover:border-primary/50 transition">
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight">
            Let's <span className="text-primary italic">collaborate</span>
          </h2>
          <p className="mt-6 text-muted-foreground max-w-2xl mx-auto">
            Open to freelance projects, remote contracts, and open-source collaborations. Whether you need a full-stack web app, a Stellar integration, or a reliable developer to own a project end-to-end — let's talk.
          </p>
          <div className="mt-8 inline-flex items-center gap-2 bg-primary text-primary-foreground rounded-full px-6 py-3 font-medium">
            Get in touch <ArrowRight className="w-4 h-4" />
          </div>
        </a>
      </section>
    </>
  );
}


function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SharedNav active="home" />

      {/* DESKTOP/TABLET: two-column layout — card sticky, content scrolls */}
      <div className="hidden md:flex max-w-6xl mx-auto px-6 pt-32 pb-24 gap-10 items-start">
        {/* Sticky sidebar */}
        <div className="w-[360px] shrink-0 sticky top-24 self-start" style={{height: "calc(100vh - 7rem)", maxHeight: "calc(100vh - 7rem)"}}>
          <ProfileCardDesktop />
        </div>
        {/* Scrollable content */}
        <main className="flex-1 min-w-0">
          {/* Hero content */}
          <div>
            <h1 className="text-5xl md:text-6xl font-bold tracking-tight leading-[1.05]">
              Full-Stack Developer &{" "}
              <span className="text-primary italic font-extrabold">Open-Source</span>{" "}Contributor
            </h1>
            <p className="mt-6 text-muted-foreground text-lg max-w-xl">
              I'm Churchill, a Nigerian full-stack developer specializing in Next.js 15, Supabase, TypeScript, and the Stellar/Soroban ecosystem. I build production-ready applications, contribute to open-source projects, and continuously expand my expertise in networking and cybersecurity.
            </p>

            <div className="mt-10 grid grid-cols-3 gap-6 max-w-md">
              {[
                ["6+", "STELLAR", "OPEN-SOURCE"],
                ["2", "LIVE", "BRANDS"],
                ["2023", "STARTED", "BUILDING"],
              ].map(([num, l1, l2]) => (
                <div key={num}>
                  <div className="text-4xl font-bold">{num}</div>
                  <div className="text-xs text-muted-foreground mt-2 tracking-wider">{l1}<br />{l2}</div>
                </div>
              ))}
            </div>

            <div className="mt-10 flex items-center gap-4">
              <a href="/projects" className="bg-primary text-primary-foreground rounded-full px-6 py-3 font-medium hover:opacity-90 transition">View Projects</a>
              <a href={SOCIAL_LINKS.contactWhatsapp} target="_blank" rel="noreferrer" className="flex items-center gap-2 font-medium hover:text-primary transition">Contact Me <ArrowRight className="w-4 h-4" /></a>
            </div>
          </div>

        <PageSections />
        </main>
      </div>

      {/* MOBILE: single column, normal scroll */}
      <div className="md:hidden px-4 pt-24 pb-16">
        <ProfileCardMobile />
        <div className="mt-10">
          <h1 className="text-4xl font-bold tracking-tight leading-[1.05]">
            Full-Stack Developer &{" "}
            <span className="text-primary italic font-extrabold">Open-Source</span>{" "}Contributor
          </h1>
          <p className="mt-6 text-muted-foreground text-lg">
            I'm Churchill, a Nigerian full-stack developer specializing in Next.js 15, Supabase, TypeScript, and the Stellar/Soroban ecosystem. I build production-ready applications, contribute to open-source projects, and continuously expand my expertise in networking and cybersecurity.
          </p>
          <div className="mt-10 grid grid-cols-3 gap-4">
            {[
              ["6+", "STELLAR", "OPEN-SOURCE"],
              ["2", "LIVE", "BRANDS"],
              ["2023", "STARTED", "BUILDING"],
            ].map(([num, l1, l2]) => (
              <div key={num}>
                <div className="text-3xl font-bold">{num}</div>
                <div className="text-xs text-muted-foreground mt-2 tracking-wider">{l1}<br />{l2}</div>
              </div>
            ))}
          </div>
          <div className="mt-10 flex items-center gap-4">
            <a href="/projects" className="bg-primary text-primary-foreground rounded-full px-6 py-3 font-medium hover:opacity-90 transition">View Projects</a>
            <a href={SOCIAL_LINKS.contactWhatsapp} target="_blank" rel="noreferrer" className="flex items-center gap-2 font-medium hover:text-primary transition">Contact Me <ArrowRight className="w-4 h-4" /></a>
          </div>
        </div>
        <PageSections />
      </div>


    </div>
  );
}


function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="bg-card border border-border rounded-2xl">
      <button onClick={() => setOpen(!open)} className="w-full flex items-center justify-between px-6 py-5 text-left">
        <span className="font-medium">{q}</span>
        {open ? <Minus className="w-5 h-5 text-muted-foreground" /> : <Plus className="w-5 h-5 text-muted-foreground" />}
      </button>
      {open && (
        <div className="px-6 pb-5 text-muted-foreground text-sm leading-relaxed">
          {a}
        </div>
      )}
    </div>
  );
}
