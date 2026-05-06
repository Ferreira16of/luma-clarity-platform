import { useEffect, useRef } from "react";
import logo from "@/assets/luma-logo.png";

export function Hero() {
  const auroraRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      const el = auroraRef.current;
      if (!el) return;
      const x = (e.clientX / window.innerWidth - 0.5) * 20;
      const y = (e.clientY / window.innerHeight - 0.5) * 20;
      el.style.transform = `translate(${x}px, ${y}px)`;
    };
    window.addEventListener("mousemove", handler);
    return () => window.removeEventListener("mousemove", handler);
  }, []);

  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6">
      <div
        ref={auroraRef}
        aria-hidden
        className="absolute inset-0 bg-aurora aurora-anim transition-transform duration-[1200ms] ease-out"
      />
      <div className="relative z-10 flex flex-col items-center text-center">
        <img
          src={logo}
          alt="LUMA"
          width={140}
          height={140}
          className="glow-hover mb-10 h-28 w-28 md:h-36 md:w-36"
        />
        <h1 className="display text-3xl text-foreground sm:text-5xl md:text-6xl">
          LUMA: <span className="text-spark">Inteligência</span> que ilumina.
        </h1>
        <p className="mt-6 max-w-md text-sm text-muted-foreground md:text-base">
          Uma masterbrand de tecnologia guiada por clareza.
        </p>
      </div>
      <a
        href="#manifesto"
        aria-label="Rolar para baixo"
        className="scroll-cue absolute bottom-10 z-10 text-muted-foreground"
      >
        <svg width="22" height="36" viewBox="0 0 22 36" fill="none">
          <rect x="1" y="1" width="20" height="34" rx="10" stroke="currentColor" strokeWidth="1.5" />
          <circle cx="11" cy="10" r="2" fill="currentColor" />
        </svg>
      </a>
    </section>
  );
}
