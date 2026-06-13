import { Link } from "@tanstack/react-router";
import { Home, Folder, Wrench, Briefcase, SquarePen, Mail, Github, Instagram } from "lucide-react";

// WhatsApp SVG icon (not in lucide)
export function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
    </svg>
  );
}

export const SOCIAL_LINKS = {
  whatsapp: "https://wa.me/2348126001223",
  github: "https://github.com/cokehill",
  instagram: "https://www.instagram.com/churchillinreallife?igsh=YjRlNHZzaGFpcTV4",
  mail: "mailto:churchillinreallife@gmail.com",
  contactWhatsapp: "https://wa.me/2348126001223",
};

export function NavIcon({ children, active, label }: { children: React.ReactNode; active?: boolean; label?: string }) {
  return (
    <div className="relative group/nav">
      <button className={`w-10 h-10 rounded-xl flex items-center justify-center transition ${active ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:text-foreground hover:bg-muted"}`}>
        {children}
      </button>
      {label && (
        <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 px-2 py-1 bg-foreground text-background text-xs rounded-md whitespace-nowrap opacity-0 group-hover/nav:opacity-100 transition pointer-events-none z-50">
          {label}
        </div>
      )}
    </div>
  );
}

export function SharedNav({ active }: { active: "home" | "projects" | "tools" | "experience" | "writing" | "contact" }) {
  return (
    <nav className="fixed top-4 left-1/2 -translate-x-1/2 z-50 flex items-center gap-1 bg-card/80 backdrop-blur-xl border border-border rounded-2xl px-2 py-2 shadow-2xl">
      <Link to="/"><NavIcon active={active === "home"} label="Home"><Home className="w-5 h-5" /></NavIcon></Link>
      <Link to="/projects"><NavIcon active={active === "projects"} label="Projects"><Folder className="w-5 h-5" /></NavIcon></Link>
      <Link to="/tools"><NavIcon active={active === "tools"} label="Tools"><Wrench className="w-5 h-5" /></NavIcon></Link>
      <Link to="/experience"><NavIcon active={active === "experience"} label="Experience"><Briefcase className="w-5 h-5" /></NavIcon></Link>
      <Link to="/writing"><NavIcon active={active === "writing"} label="Writing"><SquarePen className="w-5 h-5" /></NavIcon></Link>
      <Link to="/contact"><NavIcon active={active === "contact"} label="Contact"><Mail className="w-5 h-5" /></NavIcon></Link>
    </nav>
  );
}

export function ProfileCardDesktop() {
  return (
    <div className="bg-card border border-border rounded-3xl p-5 flex flex-col items-center text-center" style={{ height: "calc(100vh - 7rem)", overflow: "hidden" }}>
      <img
        src="https://framerusercontent.com/images/lne93EuuaNqjlLJZJxfiRZC1pX8.png"
        alt="Churchill Elisha"
        className="w-full rounded-2xl object-cover object-top"
        style={{ flex: "1 1 0", minHeight: 0 }}
      />
      <h2 className="text-lg font-extrabold tracking-tighter mt-4 shrink-0 whitespace-nowrap">CHURCHILL ELISHA</h2>
      <p className="text-muted-foreground text-sm font-semibold mt-2 shrink-0">Full-Stack Developer & Open-Source Contributor</p>
      <p className="text-muted-foreground text-sm font-medium shrink-0">Kaduna, Nigeria</p>
      <div className="flex gap-3 mt-3 shrink-0">
        <a href={SOCIAL_LINKS.whatsapp} target="_blank" rel="noreferrer" className="w-8 h-8 rounded-full bg-muted flex items-center justify-center text-muted-foreground hover:text-foreground transition">
          <WhatsAppIcon className="w-4 h-4" />
        </a>
        <a href={SOCIAL_LINKS.github} target="_blank" rel="noreferrer" className="w-8 h-8 rounded-full bg-muted flex items-center justify-center text-muted-foreground hover:text-foreground transition">
          <Github className="w-4 h-4" />
        </a>
        <a href={SOCIAL_LINKS.instagram} target="_blank" rel="noreferrer" className="w-8 h-8 rounded-full bg-muted flex items-center justify-center text-muted-foreground hover:text-foreground transition">
          <Instagram className="w-4 h-4" />
        </a>
        <a href={SOCIAL_LINKS.mail} className="w-8 h-8 rounded-full bg-muted flex items-center justify-center text-muted-foreground hover:text-foreground transition">
          <Mail className="w-4 h-4" />
        </a>
      </div>
      <a href={SOCIAL_LINKS.contactWhatsapp} target="_blank" rel="noreferrer" className="mt-3 w-full bg-primary text-primary-foreground rounded-full py-2.5 text-sm font-medium hover:opacity-90 transition shrink-0">Contact Me</a>
    </div>
  );
}

export function ProfileCardMobile() {
  return (
    <div className="bg-card border border-border rounded-3xl p-5 flex flex-col items-center text-center">
      <img src="https://framerusercontent.com/images/lne93EuuaNqjlLJZJxfiRZC1pX8.png" alt="Churchill Elisha" className="w-full aspect-[3/4] object-cover object-top rounded-2xl mb-6" />
      <h2 className="text-2xl font-extrabold tracking-tighter whitespace-nowrap">CHURCHILL ELISHA</h2>
      <p className="text-muted-foreground mt-3 font-semibold">Full-Stack Developer & Open-Source Contributor</p>
      <p className="text-muted-foreground font-medium">Kaduna, Nigeria</p>
      <div className="flex gap-3 mt-5">
        <a href={SOCIAL_LINKS.whatsapp} target="_blank" rel="noreferrer" className="w-9 h-9 rounded-full bg-muted flex items-center justify-center text-muted-foreground hover:text-foreground transition">
          <WhatsAppIcon className="w-4 h-4" />
        </a>
        <a href={SOCIAL_LINKS.github} target="_blank" rel="noreferrer" className="w-9 h-9 rounded-full bg-muted flex items-center justify-center text-muted-foreground hover:text-foreground transition">
          <Github className="w-4 h-4" />
        </a>
        <a href={SOCIAL_LINKS.instagram} target="_blank" rel="noreferrer" className="w-9 h-9 rounded-full bg-muted flex items-center justify-center text-muted-foreground hover:text-foreground transition">
          <Instagram className="w-4 h-4" />
        </a>
        <a href={SOCIAL_LINKS.mail} className="w-9 h-9 rounded-full bg-muted flex items-center justify-center text-muted-foreground hover:text-foreground transition">
          <Mail className="w-4 h-4" />
        </a>
      </div>
      <a href={SOCIAL_LINKS.contactWhatsapp} target="_blank" rel="noreferrer" className="mt-6 w-full bg-primary text-primary-foreground rounded-full py-3 font-medium hover:opacity-90 transition">Contact Me</a>
    </div>
  );
}
