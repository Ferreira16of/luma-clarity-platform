import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/Hero";
import { Reveal } from "@/components/Reveal";
import logoFull from "@/assets/luma-full.png";
import lumaSoft from "@/assets/luma-soft.jpg";
import lumaSystems from "@/assets/luma-systems.jpg";
import g1 from "@/assets/grid-1.jpg";
import g2 from "@/assets/grid-2.jpg";
import g3 from "@/assets/grid-3.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "LUMA — Inteligência que ilumina" },
      {
        name: "description",
        content:
          "LUMA é uma masterbrand de tecnologia e inovação guiada pelo conceito de clareza. LUMA e LUMA Systems: experiência, infraestrutura e inteligência de dados.",
      },
      { name: "keywords", content: "LUMA, LUMA Systems, tecnologia, inovação, inteligência de dados, design, infraestrutura" },
      { name: "author", content: "LUMA" },
      { name: "robots", content: "index, follow" },
      { name: "theme-color", content: "#0A192F" },

      { property: "og:title", content: "LUMA — Inteligência que ilumina" },
      { property: "og:description", content: "Masterbrand de tecnologia e inovação. Clareza é o novo padrão." },
      { property: "og:type", content: "website" },
      { property: "og:image", content: "/og-image.png" },
      { property: "og:image:width", content: "1024" },
      { property: "og:image:height", content: "512" },
      { property: "og:locale", content: "pt_BR" },
      { property: "og:site_name", content: "LUMA" },

      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "LUMA — Inteligência que ilumina" },
      { name: "twitter:description", content: "Masterbrand de tecnologia e inovação. Clareza é o novo padrão." },
      { name: "twitter:image", content: "/og-image.png" },
    ],
    links: [
      { rel: "icon", type: "image/png", href: "/favicon.png" },
      { rel: "apple-touch-icon", href: "/favicon.png" },
      { rel: "canonical", href: "https://luma.example.com/" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;700;800&display=swap" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "LUMA",
          url: "https://luma.example.com",
          logo: "https://luma.example.com/favicon.png",
          slogan: "Inteligência que ilumina",
          description:
            "Masterbrand de tecnologia e inovação guiada pelo conceito de clareza.",
        }),
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="bg-background text-foreground">
      <Hero />

      {/* Manifesto */}
      <section id="manifesto" className="px-6 py-32 md:py-48">
        <Reveal className="mx-auto max-w-3xl text-center">
          <h2 className="display text-3xl text-foreground md:text-5xl">
            Clareza é o novo padrão.
          </h2>
          <p className="mt-8 text-base font-light leading-relaxed text-muted-foreground md:text-lg">
            Vivemos em uma era de excesso. A LUMA existe para simplificar o
            amanhã através de conexões inteligentes — onde tecnologia, design e
            propósito se encontram em uma única luz.
          </p>
        </Reveal>
      </section>

      {/* Ecossistema */}
      <section className="bg-deep px-6 py-32 text-deep-foreground md:py-48">
        <Reveal className="mx-auto mb-16 max-w-2xl text-center">
          <p className="text-xs uppercase tracking-[0.3em] text-spark">O Ecossistema</p>
          <h2 className="display mt-4 text-3xl md:text-5xl">Uma marca. Duas frentes.</h2>
        </Reveal>
        <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-2">
          <Reveal>
            <article className="group overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] p-8 transition hover:border-white/20">
              <div className="overflow-hidden rounded-xl">
                <img
                  src={lumaSoft}
                  alt="LUMA — design e experiência"
                  loading="lazy"
                  width={1024}
                  height={1024}
                  className="aspect-[4/3] w-full object-cover transition duration-700 group-hover:scale-105"
                />
              </div>
              <h3 className="mt-8 text-2xl font-bold tracking-tight">LUMA</h3>
              <p className="mt-3 text-sm font-light text-white/60">
                Experiência do usuário, agilidade e produtos finais. O lado humano da inteligência.
              </p>
            </article>
          </Reveal>
          <Reveal delay={150}>
            <article className="group overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] p-8 transition hover:border-white/20">
              <div className="overflow-hidden rounded-xl">
                <img
                  src={lumaSystems}
                  alt="LUMA Systems — infraestrutura e dados"
                  loading="lazy"
                  width={1024}
                  height={1024}
                  className="aspect-[4/3] w-full object-cover transition duration-700 group-hover:scale-105"
                />
              </div>
              <h3 className="mt-8 text-2xl font-bold tracking-tight">
                LUMA <span className="text-spark">Systems</span>
              </h3>
              <p className="mt-3 text-sm font-light text-white/60">
                Infraestrutura, inteligência de dados e arquitetura para sistemas complexos.
              </p>
            </article>
          </Reveal>
        </div>
      </section>

      {/* Linguagem visual */}
      <section className="px-6 py-32 md:py-48">
        <Reveal className="mx-auto mb-16 max-w-2xl text-center">
          <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">Filosofia</p>
          <h2 className="display mt-4 text-3xl md:text-5xl">A linguagem da luz.</h2>
        </Reveal>
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 md:grid-cols-3">
          {[
            { src: g1, label: "Conexão" },
            { src: g2, label: "Simplicidade" },
            { src: g3, label: "Futuro" },
          ].map((item, i) => (
            <Reveal key={item.label} delay={i * 120}>
              <figure className="group relative overflow-hidden rounded-2xl">
                <img
                  src={item.src}
                  alt={item.label}
                  loading="lazy"
                  width={900}
                  height={1100}
                  className="aspect-[3/4] w-full object-cover transition duration-700 group-hover:scale-105"
                />
                <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-5 text-sm uppercase tracking-[0.25em] text-white">
                  {item.label}
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-deep px-6 py-16 text-deep-foreground">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-8 md:flex-row">
          <img src={logoFull} alt="LUMA Systems" width={140} height={48} className="h-10 w-auto opacity-90" />
          <nav className="flex flex-wrap items-center justify-center gap-8 text-sm text-white/60">
            <a href="#" className="glow-hover transition hover:text-spark">Sobre</a>
            <a href="#" className="glow-hover transition hover:text-spark">Privacidade</a>
            <a href="#" className="glow-hover transition hover:text-spark">Contato</a>
          </nav>
          <p className="text-xs text-white/40">© {new Date().getFullYear()} LUMA</p>
        </div>
      </footer>
    </main>
  );
}
