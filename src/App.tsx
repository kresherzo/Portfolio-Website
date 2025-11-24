import React from "react";
import { ArrowRight, Folder, Rocket, Mail } from "lucide-react";
import { useForm } from "react-hook-form";
import clsx from "clsx";

/* Общие классы */
const panel = "rounded-2xl border border-white/10 bg-panel";

/* Секция-обёртка */
type SectionProps = {
  id?: string;
  title?: string;
  className?: string;
  children: React.ReactNode;
};
const Section: React.FC<SectionProps> = ({ id, title, children, className }) => (
  <section id={id} className={clsx("py-10 md:py-14", className)}>
    <div className="container max-w-screen">
      {title && (
        <h2 className="text-2xl md:text-3xl font-semibold mb-8 text-white">{title}</h2>
      )}
      {children}
    </div>
  </section>
);

/* Кнопка (просто и без TS-ошибок) */
type ButtonProps =
  & Omit<React.ComponentPropsWithoutRef<"a">, "color">
  & { as?: "a" | "button"; variant?: "primary" | "outline" | "ghost" };

  
const Button: React.FC<ButtonProps> = ({ as = "a", variant = "primary", className, children, ...props }) => {
  const Comp: any = as;
  const base =
    "inline-flex items-center gap-2 rounded-2xl px-5 py-3 text-sm md:text-base transition focus:outline-none";
  const variants: Record<NonNullable<ButtonProps["variant"]>, string> = {
    primary:
      "bg-gradient-to-r from-violet-500 to-indigo-500 hover:opacity-95 shadow-sm focus:ring-2 focus:ring-violet-500/60",
    outline:
      "border border-white/10 hover:border-violet-500/60 focus:ring-2 focus:ring-violet-500/30",
    ghost: "hover:opacity-90 focus:ring-2 focus:ring-violet-500/30",
  };
  return (
  <Comp
    className={clsx(base, variants[variant], className, "text-white !text-white")}
    {...(props as any)}
  >
    {children}
  </Comp>
);

};

/* Navbar */
function Navbar() {
  return (
    <header className="sticky top-0 z-40 bg-baseBg/80 backdrop-blur border-b border-white/5">
      <nav className="container max-w-screen flex items-center justify-between py-3">
        <a href="/" className="font-semibold text-white">Andrey — Portfolio</a>
        <ul className="hidden md:flex items-center gap-6 text-sm">
          <li><a href="#projects" className="hover:text-white text-slate-300">Projects</a></li>
          <li><a href="#about" className="hover:text-white text-slate-300">About</a></li>
          <li><a href="#contact" className="hover:text-white text-slate-300">Contact</a></li>
        </ul>
        <div className="flex items-center gap-3">
          <a href="#contact" className="hidden md:inline-block">
            <Button variant="outline">Contact</Button>
          </a>
          <a href="#projects">
            <Button>View work <ArrowRight size={16} /></Button>
          </a>
        </div>
      </nav>
    </header>
  );
}

/* Hero */
function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-white/5">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(1200px_600px_at_10%_-10%,rgba(111,76,255,0.12)_0%,transparent_60%),radial-gradient(1000px_500px_at_90%_120%,rgba(79,70,229,0.12)_0%,transparent_60%)]" />
      <div className="container max-w-screen py-14 md:py-20 grid lg:grid-cols-2 gap-10 items-center">
        <div>
          <p className="text-xs uppercase tracking-widest text-slate-400">Welcome</p>
          <h1 className="mt-2 text-4xl md:text-6xl font-semibold leading-tight text-white">
            Modern portfolio hub for clean UI projects.
          </h1>
          <p className="mt-4 text-slate-300 text-base md:text-lg">
            Minimal, fast and accessible. Explore case studies and live demos.
          </p>
          <p className="mt-6 text-sm text-slate-400">
  Available for new projects — landings, dashboards, animations, API integrations, quick fixes.
</p>
<div className="mt-4 flex gap-3">
  <a href="#projects"><Button variant="outline">See projects</Button></a>
  <a href="#contact"><Button>Contact me</Button></a>
</div>

        </div>

        <div className={clsx(panel, "p-6 shadow-sm")}>
          <div className="text-sm text-slate-400">Highlights</div>
          <ul className="mt-4 space-y-3 text-sm text-slate-300">
            <li className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-violet-400" /> Pixel-perfect responsive layouts</li>
            <li className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-violet-400" /> 90+ Lighthouse (Desktop)</li>
            <li className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-violet-400" /> React + TypeScript + Vite</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

/* Projects */
function Projects() {
  const items = [
    { title: "FlowPilot — SaaS Landing", desc: "High-performance landing demo.", href: "/flowpilot.html", icon: <Folder size={18} />, tag: "Live demo" },
    { title: "Project Two — Placeholder", desc: "Case study scaffold for future work.", href: "/project-2.html", icon: <Rocket size={18} />, tag: "Coming soon" },
    { title: "Project Three — Placeholder", desc: "Another scaffold page (to be filled).", href: "/project-3.html", icon: <Rocket size={18} />, tag: "Coming soon" },
  ];
  return (
    <Section id="projects" title="Projects">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((p) => (
          <a key={p.title} href={p.href} className={clsx(panel, "p-5 hover:shadow-lg transition group")}>
            <div className="flex items-center gap-2 text-slate-200">
              <span className="text-violet-400">{p.icon}</span>
              <span className="font-medium">{p.title}</span>
            </div>
            <p className="mt-2 text-sm text-slate-400">{p.desc}</p>
            <div className="mt-3 text-xs text-slate-500 group-hover:text-violet-400">{p.tag} →</div>
          </a>
        ))}
      </div>
    </Section>
  );
}

/* About — ширина как у остальных (полная ширина контейнера) */
function About() {
  return (
    <Section id="about" title="About">
      <div className={clsx(panel, "w-full p-6 leading-relaxed text-slate-300 space-y-4")}>
        <p>
          I'm a front-end developer focused on React + TypeScript (Vite). 
          I convert Figma designs into pixel-perfect, responsive pages and ship 
          small dashboards with clean code and fast turnaround.
        </p>
        
        <div>
          <div className="text-sm font-medium text-slate-200 mb-2">🎯 What I do:</div>
          <ul className="text-sm space-y-1 text-slate-400">
            <li>• Landing pages & responsive layouts</li>
            <li>• Forms with validation, CRUD interfaces</li>
            <li>• Component development & bug fixing</li>
            <li>• Performance optimization (Lighthouse 90+)</li>
            <li>• Animations & micro-interactions (Framer Motion)</li>
            <li>• API integrations (Stripe, Mailchimp, Analytics)</li>
            <li>• Dark mode, SEO setup, accessibility fixes</li>
          </ul>
        </div>

        <div>
          <div className="text-sm font-medium text-slate-200 mb-2">🛠 Tech stack:</div>
          <p className="text-sm text-slate-400">
            React, TypeScript, Vite, Tailwind CSS, React Router, Figma, Git
          </p>
        </div>

       
      </div>
    </Section>
  );
}

/* Contact — ширина как у остальных (полная ширина контейнера) */
type FormData = { name?: string; email: string; message?: string; trap?: string };

function Contact() {
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    await new Promise(r => setTimeout(r, 800));
    if (data.trap) return;
    const endpoint = "https://formspree.io/f/mzzwdkpo";
    const res = await fetch(endpoint, {
      method: "POST",
      headers: { Accept: "application/json", "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    if (res.ok) window.location.href = "/thank-you.html";
    else alert("Something went wrong. Try again later.");
  };

  const inputBase =
    "w-full rounded-lg px-3 py-2 bg-transparent border text-slate-200 placeholder-slate-500 focus:outline-none";

  return (
    <Section id="contact" title="Contact">
      <form onSubmit={handleSubmit(onSubmit)} className={clsx(panel, "w-full p-6 space-y-4")}>
        <input type="text" className="hidden" tabIndex={-1} autoComplete="off" {...register("trap")} />
        <div>
          <label className="block text-sm mb-1 text-slate-300">Name</label>
          <input className={clsx(inputBase, "border-white/10 focus:border-violet-400")}
                 placeholder="Andrey" {...register("name")} />
        </div>
        <div>
          <label className="block text-sm mb-1 text-slate-300">Email *</label>
          <div className="relative">
            <input
              className={clsx(
                inputBase,
                "pr-9",
                errors.email ? "border-red-500" : "border-white/10 focus:border-violet-400"
              )}
              placeholder="you@example.com"
              {...register("email", {
                required: "Email is required",
                pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: "Invalid email" },
              })}
              aria-invalid={!!errors.email}
            />
            <Mail size={16} className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-500" />
          </div>
          {errors.email && <p className="text-sm text-red-400 mt-1">{errors.email.message}</p>}
        </div>
        <div>
          <label className="block text-sm mb-1 text-slate-300">Message</label>
          <textarea className={clsx(inputBase, "min-h-28 border-white/10 focus:border-violet-400")}
                    placeholder="I’d like to discuss…" {...register("message")} />
        </div>
        <div className="flex items-center justify-between">
          <span className="text-xs text-slate-500">
            By sending you agree to our <a className="underline" href="/privacy.html">Privacy</a>.
          </span>
          <Button as="button" type="submit" disabled={isSubmitting}>
            {isSubmitting ? "Sending..." : "Send"}
          </Button>
        </div>
      </form>
    </Section>
  );
}

/* Footer — нормальная ширина */
function Footer() {
  return (
    <footer className="py-10 text-sm border-t border-white/5">
      <div className="container max-w-screen flex flex-col md:flex-row gap-4 md:items-center md:justify-between">
        <div className="text-slate-500">© {new Date().getFullYear()} Andrey — Portfolio</div>
        <ul className="flex gap-4 text-slate-400">
          <li><a className="hover:text-white" href="#projects">Projects</a></li>
          <li><a className="hover:text-white" href="/privacy.html">Privacy</a></li>
          <li><a className="hover:text-white" href="/terms.html">Terms</a></li>
        </ul>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Projects />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
