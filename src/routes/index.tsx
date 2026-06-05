import { createFileRoute } from "@tanstack/react-router";
import { Home, Folder, Wrench, Briefcase, SquarePen, Mail, ArrowRight, ArrowLeft, Dribbble, Twitter, Instagram, Plus, Minus } from "lucide-react";
import { useState } from "react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Churchill Elisha — Network Engineer & Developer" },
      { name: "description", content: "Passionate about creating intuitive and engaging user experiences." },
      { property: "og:title", content: "Churchill Elisha — Network Engineer & Developer" },
      { property: "og:description", content: "Passionate about creating intuitive and engaging user experiences." },
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
  { img: "https://framerusercontent.com/images/mKpBcirmfqd4t3E4WfKHynhKvA.webp", title: "Majd", sub: "Free Portfolio Template" },
  { img: "https://framerusercontent.com/images/hxgSQmquybiB6mIsV8wyxmKgo.jpeg", title: "NajmAI", sub: "Modern Framer Template" },
  { img: "https://framerusercontent.com/images/rPU33YAD2YHXHtHu6zxEi5sI8w.webp", title: "Damas", sub: "SaaS Framer Template" },
  { img: "https://framerusercontent.com/images/YDk7LnTelFuZNrVcNXEq8APhUI.png", title: "Faseelh", sub: "Free Framer Template" },
];

const tools = [
  { img: "https://framerusercontent.com/images/Cg3eZmT1kjh5FLtZnRVZIF8uJA.png", title: "SiteFlow", sub: "Website Builder" },
  { img: "https://framerusercontent.com/images/XLVrU9hn7CiNMhgqF9tRlD6lulU.png", title: "Pixelo", sub: "Design Tool" },
  { img: "https://framerusercontent.com/images/jHhWp9b1WWcDzxzj4ifMR6xL4.png", title: "JuiceBox", sub: "Payment Provider" },
  { img: "https://framerusercontent.com/images/d2zr1mak9m6uCCKXgxjkfUHhdI.png", title: "TalkAI", sub: "AI Assistant" },
  { img: "https://framerusercontent.com/images/AhBXxjJiRdkLAzwJDbWOQA4ky1g.png", title: "NoteSpace", sub: "Productivity Tool" },
  { img: "https://framerusercontent.com/images/X0h6R2GgbS58eBZoqvpGY7DHEQs.png", title: "WebCraft", sub: "React framework" },
];

const testimonials = [
  { img: "https://framerusercontent.com/images/iABb6ejla3A5ZzE4zgxiPqBaYHI.jpg", name: "William M.", quote: "John expertly blends design with functionality, transforming our product into a sleek, user-friendly experience that our customers love!" },
  { img: "https://framerusercontent.com/images/HqoHkPp6dpJFdgMqUKIaAXmy7o.jpg", name: "Robert P.", quote: "Working with John was a pleasure. He transformed our ideas into a polished product with impressive attention to detail in both design and development." },
  { img: "https://framerusercontent.com/images/7ckekOZAa0J28C2T3IfYTvNDv5U.jpg", name: "James K.", quote: "John's design and development elevated our product, delivering a seamless and intuitive user experience with his technical expertise." },
  { img: "https://framerusercontent.com/images/w2hyXovpoCcfHZkjR4Hmr53RA5o.jpg", name: "David L.", quote: "John’s ability to create stunning, functional designs is incredible. He understood our vision and brought it to life with innovative solutions that significantly improved the user journey" },
  { img: "https://framerusercontent.com/images/kAftuUN9iRKwIt9M6RqZo9NS314.jpg", name: "Michael S.", quote: "John’s approach to design and development is thorough, creative, and highly professional. His work has helped our team launch a product." },
  { img: "https://framerusercontent.com/images/Y9KmJAQ4w53hsc4jJojfokLZ7D8.jpg", name: "John D.", quote: "John brought a perfect balance of creativity and technical skill to our project. He took our brand’s vision and developed a product that resonates with our audience." },
];

const blog = [
  { img: "https://framerusercontent.com/images/xgMwYRclJvAhqaJhMbQm8kpRv0.png", date: "Apr 8, 2022", title: "Starting and Growing a Career in Web Design" },
  { img: "https://framerusercontent.com/images/Mirnh1WfdeIPhnjStrfY33WLFo8.png", date: "Mar 15, 2022", title: "Create a Landing Page That Performs Great" },
  { img: "https://framerusercontent.com/images/ic9k42rYytbJtnRUJXdcNxCHSc.png", date: "Feb 28, 2022", title: "How Can Designers Prepare for the Future?" },
  { img: "https://framerusercontent.com/images/cofLlvrdf71d7i5raChitGnKzB0.jpg", date: "Jan 12, 2022", title: "How to Create an Effective Design Portfolio" },
];

const faqs = [
  "What services do you offer?",
  "What is your design process?",
  "How do you handle project timelines?",
  "Can you work with existing teams?",
  "What tools do you use?",
];

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Floating nav */}
      <nav className="fixed top-4 left-1/2 -translate-x-1/2 z-50 flex items-center gap-1 bg-card/80 backdrop-blur-xl border border-border rounded-2xl px-2 py-2 shadow-2xl">
        <NavIcon active><Home className="w-5 h-5" /></NavIcon>
        <NavIcon><Folder className="w-5 h-5" /></NavIcon>
        <NavIcon><Wrench className="w-5 h-5" /></NavIcon>
        <NavIcon><Briefcase className="w-5 h-5" /></NavIcon>
        <NavIcon><SquarePen className="w-5 h-5" /></NavIcon>
        <NavIcon><Mail className="w-5 h-5" /></NavIcon>
      </nav>

      <main className="max-w-6xl mx-auto px-6 pt-32 pb-24">
        {/* Hero */}
        <section className="grid md:grid-cols-[360px_1fr] gap-10 items-start">
          {/* Profile card */}
          <div className="bg-card border border-border rounded-3xl p-6 flex flex-col items-center text-center">
            <img src="https://framerusercontent.com/images/lne93EuuaNqjlLJZJxfiRZC1pX8.png" alt="Churchill Elisha" className="w-full aspect-[3/4] object-cover rounded-2xl mb-6" />
            <h2 className="text-2xl font-bold tracking-tight">CHURCHILL<br />ELISHA</h2>
            <p className="text-muted-foreground mt-3">Network Engineer & Developer</p>
            <p className="text-muted-foreground">Kaduna, Nigeria</p>
            <div className="flex gap-3 mt-5">
              {[Dribbble, Twitter, Instagram, Mail].map((Icon, i) => (
                <a key={i} href="#" className="w-9 h-9 rounded-full bg-muted flex items-center justify-center text-muted-foreground hover:text-foreground transition">
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
            <a href="#" className="mt-6 w-full bg-primary text-primary-foreground rounded-full py-3 font-medium hover:opacity-90 transition">Let's Talk</a>
          </div>

          {/* Hero content */}
          <div>
            <h1 className="text-5xl md:text-6xl font-bold tracking-tight leading-[1.05]">
              Keeping everyone connected to{" "}
              <span className="text-primary italic font-extrabold">Reality</span>
            </h1>
            <p className="mt-6 text-muted-foreground text-lg max-w-xl">
              Passionate about creating intuitive and engaging user experiences. Specialize in transforming ideas into beautifully crafted products.
            </p>

            <div className="mt-10 grid grid-cols-3 gap-6 max-w-md">
              {[
                ["+12", "YEARS OF", "EXPERIENCE"],
                ["+46", "PROJECTS", "COMPLETED"],
                ["+20", "WORLDWIDE", "CLIENTS"],
              ].map(([num, l1, l2]) => (
                <div key={num}>
                  <div className="text-4xl font-bold">{num}</div>
                  <div className="text-xs text-muted-foreground mt-2 tracking-wider">{l1}<br />{l2}</div>
                </div>
              ))}
            </div>

            <div className="mt-10 flex items-center gap-4">
              <a href="#" className="bg-primary text-primary-foreground rounded-full px-6 py-3 font-medium hover:opacity-90 transition">Let's Talk</a>
              <a href="#" className="flex items-center gap-2 font-medium hover:text-primary transition">My Work <ArrowRight className="w-4 h-4" /></a>
            </div>
          </div>
        </section>

        {/* Logos marquee */}
        <section className="mt-32">
          <p className="text-center text-muted-foreground mb-8">Relied on by companies near, far, and worldwide</p>
          <div className="overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_15%,black_85%,transparent)]">
            <div className="flex gap-16 animate-marquee w-max">
              {[...logos, ...logos, ...logos].map((src, i) => (
                <img key={i} src={src} alt="" className="h-8 opacity-60" />
              ))}
            </div>
          </div>
        </section>

        {/* Projects */}
        <section className="mt-32">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-12">Recent Projects and Achievements</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((p) => (
              <a key={p.title} href="#" className="group bg-card border border-border rounded-3xl p-4 hover:border-primary/50 transition">
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
        <section className="mt-32">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-12">Top-Tier Tools for Exceptional Results</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5">
            {tools.map((t) => (
              <a key={t.title} href="#" className="bg-card border border-border rounded-3xl p-6 flex items-center gap-4 hover:border-primary/50 transition">
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
        <section className="mt-32">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-12">What Clients Say About My Work</h2>
          <div className="overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_5%,black_95%,transparent)]">
            <div className="flex gap-6 animate-marquee-slow w-max">
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
          </div>
          <div className="flex justify-center gap-3 mt-8">
            <button className="w-11 h-11 rounded-full bg-card border border-border flex items-center justify-center hover:bg-muted transition"><ArrowLeft className="w-4 h-4" /></button>
            <button className="w-11 h-11 rounded-full bg-card border border-border flex items-center justify-center hover:bg-muted transition"><ArrowRight className="w-4 h-4" /></button>
          </div>
        </section>

        {/* Blog */}
        <section className="mt-32">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-12">Design Thoughts and Perspectives</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {blog.map((b) => (
              <a key={b.title} href="#" className="group bg-card border border-border rounded-3xl p-4 hover:border-primary/50 transition">
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
        <section className="mt-32 max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-12 text-center">Frequently Asked Questions</h2>
          <div className="space-y-3">
            {faqs.map((q, i) => <FAQItem key={i} q={q} />)}
          </div>
        </section>

        {/* CTA */}
        <section className="mt-32">
          <a href="#" className="block bg-card border border-border rounded-3xl p-12 md:p-16 text-center hover:border-primary/50 transition">
            <h2 className="text-4xl md:text-6xl font-bold tracking-tight">
              Let's <span className="text-primary italic">collaborate</span>
            </h2>
            <p className="mt-6 text-muted-foreground max-w-2xl mx-auto">
              Unlock the potential of your product with expert design and development services. Let's collaborate to create user-centered solutions that not only meet your goals but also delight your users.
            </p>
            <div className="mt-8 inline-flex items-center gap-2 bg-primary text-primary-foreground rounded-full px-6 py-3 font-medium">
              Get in touch <ArrowRight className="w-4 h-4" />
            </div>
          </a>
        </section>
      </main>

      {/* Framer badge */}
      <div className="fixed bottom-4 right-4 bg-white text-black text-xs px-3 py-2 rounded-lg shadow-lg flex items-center gap-2">
        <span className="font-bold">F</span> Made in Framer
      </div>
    </div>
  );
}

function NavIcon({ children, active }: { children: React.ReactNode; active?: boolean }) {
  return (
    <button className={`w-10 h-10 rounded-xl flex items-center justify-center transition ${active ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:text-foreground hover:bg-muted"}`}>
      {children}
    </button>
  );
}

function FAQItem({ q }: { q: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="bg-card border border-border rounded-2xl">
      <button onClick={() => setOpen(!open)} className="w-full flex items-center justify-between px-6 py-5 text-left">
        <span className="font-medium">{q}</span>
        {open ? <Minus className="w-5 h-5 text-muted-foreground" /> : <Plus className="w-5 h-5 text-muted-foreground" />}
      </button>
      {open && (
        <div className="px-6 pb-5 text-muted-foreground text-sm">
          Detailed information about this topic will be provided here.
        </div>
      )}
    </div>
  );
}
