import { Hero } from "@/components/Hero";
import { Reveal } from "@/components/Reveal";
import lumaSoft from "@/assets/luma-soft.jpg";
import lumaSystems from "@/assets/luma-systems.jpg";
import g1 from "@/assets/grid-1.jpg";
import g2 from "@/assets/grid-2.jpg";
import g3 from "@/assets/grid-3.jpg";

export default function Index() {
  return (
    <main className="bg-background text-foreground">
      <Hero />

      <section id="manifesto" className="px-6 py-32 md:py-48">
        <Reveal className="mx-auto max-w-3xl text-center">
          <h2 className="display text-3xl text-foreground md:text-5xl">Clareza é o novo padrão.</h2>
          <p className="mt-8 text-base font-light leading-relaxed text-muted-foreground md:text-lg">
            Vivemos em uma era de excesso. A LUMA existe para simplificar o amanhã através de conexões inteligentes — onde tecnologia, design e propósito se encontram em uma única luz.
          </p>
        </Reveal>
      </section>

      <section className="bg-deep px-6 py-32 text-deep-foreground md:py-48">
        <Reveal className="mx-auto mb-16 max-w-2xl text-center">
          <p className="text-xs uppercase tracking-[0.3em] text-spark">O Ecossistema</p>
          <h2 className="display mt-4 text-3xl md:text-5xl">Uma marca. Duas frentes.</h2>
        </Reveal>
        <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-2">
          <Reveal>
            <article className="group overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] p-8 transition hover:border-white/20">
              <div className="overflow-hidden rounded-xl">
                <img src={lumaSoft} alt="LUMA — design e experiência" loading="lazy" width={1024} height={1024} className="aspect-[4/3] w-full object-cover transition duration-700 group-hover:scale-105" />
              </div>
              <h3 className="mt-8 text-2xl font-bold tracking-tight">LUMA</h3>
              <p className="mt-3 text-sm font-light text-white/60">Experiência do usuário, agilidade e produtos finais. O lado humano da inteligência.</p>
            </article>
          </Reveal>
          <Reveal delay={150}>
            <article className="group overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] p-8 transition hover:border-white/20">
              <div className="overflow-hidden rounded-xl">
                <img src={lumaSystems} alt="LUMA Systems — infraestrutura e dados" loading="lazy" width={1024} height={1024} className="aspect-[4/3] w-full object-cover transition duration-700 group-hover:scale-105" />
              </div>
              <h3 className="mt-8 text-2xl font-bold tracking-tight">
                LUMA <span className="text-spark">Systems</span>
              </h3>
              <p className="mt-3 text-sm font-light text-white/60">Infraestrutura, inteligência de dados e arquitetura para sistemas complexos.</p>
            </article>
          </Reveal>
        </div>
      </section>

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
                <img src={item.src} alt={item.label} loading="lazy" width={900} height={1100} className="aspect-[3/4] w-full object-cover transition duration-700 group-hover:scale-105" />
                <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-5 text-sm uppercase tracking-[0.25em] text-white">
                  {item.label}
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </section>

      <footer className="bg-background px-6 py-10 border-t border-border">
        <p className="text-center text-xs text-muted-foreground">© {new Date().getFullYear()} LUMA</p>
      </footer>
    </main>
  );
}
