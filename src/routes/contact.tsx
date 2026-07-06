import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { PageHero, Section } from "@/components/sites/Section";
import { Mail, Twitter, MessageCircle, Instagram } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({ meta: [{ title: "Contact — House of Joshi" }, { name: "description", content: "Reach the House of Joshi community and team." }] }),
  component: Contact,
});

function Contact() {
  const [sent, setSent] = useState(false);
  return (
    <>
      <PageHero eyebrow="GET IN TOUCH" title={<>Speak with the <span className="gold-text">kingdom</span></>}
        subtitle="Reach our team, join the community, or send a sovereign message." />
      <Section>
        <div className="grid lg:grid-cols-[1.2fr_1fr] gap-10">
          <form onSubmit={(e) => { e.preventDefault(); setSent(true); }} className="glass-strong rounded-3xl p-8 sm:p-10 space-y-5">
            <div className="text-[11px] tracking-[0.4em] text-primary">SEND A MESSAGE</div>
            <h2 className="font-display text-3xl">Compose your royal letter</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              <Field label="Name" type="text" />
              <Field label="Email" type="email" />
            </div>
            <Field label="Subject" type="text" />
            <div>
              <label className="text-xs tracking-widest text-muted-foreground">MESSAGE</label>
              <textarea required rows={6} className="mt-2 w-full bg-black/40 border border-primary/25 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-primary transition" />
            </div>
            <button className="rounded-full bg-gradient-to-r from-[#FFD76A] via-[#D4AF37] to-[#FFD76A] text-black px-7 py-3 text-sm tracking-wider font-medium hover:shadow-[0_0_40px_rgba(255,215,106,0.45)] transition">
              {sent ? "MESSAGE SENT ✓" : "DISPATCH MESSAGE"}
            </button>
          </form>

          <div className="space-y-4">
            <a href="mailto:support@thehouseofjoshi.com" className="glass rounded-2xl p-6 flex items-center gap-4 hover:gold-glow transition">
              <Icon><Mail size={18} /></Icon>
              <div><div className="font-display text-lg">Email</div><div className="text-sm text-muted-foreground">support@thehouseofjoshi.com</div></div>
            </a>
            <a href="https://x.com/thehouseofjoshi" target="_blank" rel="noreferrer noopener" className="glass rounded-2xl p-6 flex items-center gap-4 hover:gold-glow transition">
              <Icon><Twitter size={18} /></Icon>
              <div><div className="font-display text-lg">X</div><div className="text-sm text-muted-foreground">@thehouseofjoshi</div></div>
            </a>
            <a href="https://discord.com/invite/uH9zVeAwDu" target="_blank" rel="noreferrer noopener" className="glass rounded-2xl p-6 flex items-center gap-4 hover:gold-glow transition">
              <Icon><MessageCircle size={18} /></Icon>
              <div><div className="font-display text-lg">Discord</div><div className="text-sm text-muted-foreground">Join the community</div></div>
            </a>
            <a href="https://www.instagram.com/thehouseofjoshi" target="_blank" rel="noreferrer noopener" className="glass rounded-2xl p-6 flex items-center gap-4 hover:gold-glow transition">
              <Icon><Instagram size={18} /></Icon>
              <div><div className="font-display text-lg">Instagram</div><div className="text-sm text-muted-foreground">@thehouseofjoshi</div></div>
            </a>
          </div>
        </div>
      </Section>
    </>
  );
}

function Icon({ children }: { children: React.ReactNode }) {
  return <div className="h-11 w-11 rounded-xl bg-primary/10 border border-primary/30 flex items-center justify-center text-primary animate-pulse-glow">{children}</div>;
}

function Field({ label, type }: { label: string; type: string }) {
  return (
    <div>
      <label className="text-xs tracking-widest text-muted-foreground">{label.toUpperCase()}</label>
      <input required type={type} className="mt-2 w-full bg-black/40 border border-primary/25 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-primary transition" />
    </div>
  );
}
