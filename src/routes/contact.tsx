import { createFileRoute } from "@tanstack/react-router";
import { Github, Instagram, Mail, Send } from "lucide-react";
import { useState } from "react";
import { SharedNav, ProfileCardDesktop, ProfileCardMobile, WhatsAppIcon, SOCIAL_LINKS } from "../components/shared-layout";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Churchill" },
      { name: "description", content: "Get in touch with Churchill." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [name, setName] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const handleSend = () => {
    if (!message.trim()) return;
    const gmail = `https://mail.google.com/mail/?view=cm&to=churchillinreallife@gmail.com&su=${encodeURIComponent(subject || "Message from portfolio")}&body=${encodeURIComponent(`Hi Churchill,\n\n${message}\n\n— ${name}`)}`;
    window.open(gmail, "_blank");
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SharedNav active="contact" />

      {/* DESKTOP */}
      <div className="hidden md:flex max-w-6xl mx-auto px-6 pt-32 pb-24 gap-10 items-start">
        <div className="w-[360px] shrink-0 sticky top-24 self-start" style={{ height: "calc(100vh - 7rem)" }}>
          <ProfileCardDesktop />
        </div>
        <main className="flex-1 min-w-0">
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight leading-[1.05] mb-4">
            Get In{" "}
            <span className="text-primary italic font-extrabold">Touch</span>
          </h1>
          <p className="text-muted-foreground text-lg mb-12">
            Open to freelance projects, remote contracts, and open-source collaborations. Send me a message and I'll get back to you.
          </p>

          {/* Contact form */}
          <div className="bg-card border border-border rounded-3xl p-8 space-y-5">
            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label className="text-sm font-medium mb-2 block">Your Name</label>
                <input
                  value={name}
                  onChange={e => setName(e.target.value)}
                  placeholder="John Doe"
                  className="w-full bg-background border border-border rounded-xl px-4 py-3 text-sm outline-none focus:border-primary transition"
                />
              </div>
              <div>
                <label className="text-sm font-medium mb-2 block">Subject</label>
                <input
                  value={subject}
                  onChange={e => setSubject(e.target.value)}
                  placeholder="Project enquiry"
                  className="w-full bg-background border border-border rounded-xl px-4 py-3 text-sm outline-none focus:border-primary transition"
                />
              </div>
            </div>
            <div>
              <label className="text-sm font-medium mb-2 block">Message</label>
              <textarea
                value={message}
                onChange={e => setMessage(e.target.value)}
                placeholder="Tell me about your project..."
                rows={6}
                className="w-full bg-background border border-border rounded-xl px-4 py-3 text-sm outline-none focus:border-primary transition resize-none"
              />
            </div>
            <button
              onClick={handleSend}
              className="flex items-center gap-2 bg-primary text-primary-foreground rounded-full px-6 py-3 font-medium hover:opacity-90 transition"
            >
              <Send className="w-4 h-4" /> Send via Gmail
            </button>
          </div>

          {/* Other contact options */}
          <div className="mt-10 grid sm:grid-cols-3 gap-5">
            <a href={SOCIAL_LINKS.whatsapp} target="_blank" rel="noreferrer"
              className="bg-card border border-border rounded-3xl p-6 flex flex-col items-center gap-3 hover:border-primary/50 transition text-center">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                <WhatsAppIcon className="w-6 h-6" />
              </div>
              <div>
                <p className="font-semibold">WhatsApp</p>
                <p className="text-muted-foreground text-sm mt-1">+234 812 600 1223</p>
              </div>
            </a>
            <a href={SOCIAL_LINKS.mail}
              className="bg-card border border-border rounded-3xl p-6 flex flex-col items-center gap-3 hover:border-primary/50 transition text-center">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                <Mail className="w-6 h-6" />
              </div>
              <div>
                <p className="font-semibold">Email</p>
                <p className="text-muted-foreground text-sm mt-1">churchillinreallife<br />@gmail.com</p>
              </div>
            </a>
            <a href={SOCIAL_LINKS.github} target="_blank" rel="noreferrer"
              className="bg-card border border-border rounded-3xl p-6 flex flex-col items-center gap-3 hover:border-primary/50 transition text-center">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                <Github className="w-6 h-6" />
              </div>
              <div>
                <p className="font-semibold">GitHub</p>
                <p className="text-muted-foreground text-sm mt-1">github.com/cokehill</p>
              </div>
            </a>
          </div>
        </main>
      </div>

      {/* MOBILE */}
      <div className="md:hidden px-4 pt-24 pb-16">
        <ProfileCardMobile />
        <div className="mt-10">
          <h1 className="text-4xl font-bold tracking-tight leading-[1.05] mb-4">
            Get In{" "}
            <span className="text-primary italic font-extrabold">Touch</span>
          </h1>
          <p className="text-muted-foreground mb-8">
            Open to freelance projects, remote contracts, and open-source collaborations.
          </p>

          <div className="bg-card border border-border rounded-3xl p-6 space-y-4">
            <div>
              <label className="text-sm font-medium mb-2 block">Your Name</label>
              <input
                value={name}
                onChange={e => setName(e.target.value)}
                placeholder="John Doe"
                className="w-full bg-background border border-border rounded-xl px-4 py-3 text-sm outline-none focus:border-primary transition"
              />
            </div>
            <div>
              <label className="text-sm font-medium mb-2 block">Subject</label>
              <input
                value={subject}
                onChange={e => setSubject(e.target.value)}
                placeholder="Project enquiry"
                className="w-full bg-background border border-border rounded-xl px-4 py-3 text-sm outline-none focus:border-primary transition"
              />
            </div>
            <div>
              <label className="text-sm font-medium mb-2 block">Message</label>
              <textarea
                value={message}
                onChange={e => setMessage(e.target.value)}
                placeholder="Tell me about your project..."
                rows={5}
                className="w-full bg-background border border-border rounded-xl px-4 py-3 text-sm outline-none focus:border-primary transition resize-none"
              />
            </div>
            <button
              onClick={handleSend}
              className="w-full flex items-center justify-center gap-2 bg-primary text-primary-foreground rounded-full py-3 font-medium hover:opacity-90 transition"
            >
              <Send className="w-4 h-4" /> Send via Gmail
            </button>
          </div>

          <div className="mt-8 grid grid-cols-3 gap-4">
            <a href={SOCIAL_LINKS.whatsapp} target="_blank" rel="noreferrer"
              className="bg-card border border-border rounded-2xl p-4 flex flex-col items-center gap-2 text-center">
              <WhatsAppIcon className="w-5 h-5 text-primary" />
              <p className="text-xs font-medium">WhatsApp</p>
            </a>
            <a href={SOCIAL_LINKS.mail}
              className="bg-card border border-border rounded-2xl p-4 flex flex-col items-center gap-2 text-center">
              <Mail className="w-5 h-5 text-primary" />
              <p className="text-xs font-medium">Email</p>
            </a>
            <a href={SOCIAL_LINKS.github} target="_blank" rel="noreferrer"
              className="bg-card border border-border rounded-2xl p-4 flex flex-col items-center gap-2 text-center">
              <Github className="w-5 h-5 text-primary" />
              <p className="text-xs font-medium">GitHub</p>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
