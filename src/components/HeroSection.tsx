import { useEffect, useRef } from "react";
import heroBg from "@/assets/hero-bg.jpg";

const MARQUEE_TEXT = "DIESEL BROTHERS · SPARKS MOTORS · CUSTOM BUILDS · TRUCK GIVEAWAYS · UTAH BUILT · ";

const HeroSection = () => {
  const particleContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = particleContainerRef.current;
    if (!container) return;

    const particles: HTMLDivElement[] = [];
    for (let i = 0; i < 30; i++) {
      const p = document.createElement("div");
      p.className = "particle";
      p.style.left = `${Math.random() * 100}%`;
      p.style.bottom = `${Math.random() * 20}%`;
      p.style.animationDuration = `${6 + Math.random() * 8}s`;
      p.style.animationDelay = `${Math.random() * 6}s`;
      p.style.width = `${1 + Math.random() * 2}px`;
      p.style.height = p.style.width;
      container.appendChild(p);
      particles.push(p);
    }

    return () => {
      particles.forEach((p) => p.remove());
    };
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-background/80" />

      {/* Particles */}
      <div ref={particleContainerRef} className="absolute inset-0 pointer-events-none overflow-hidden" />

      {/* Wordmark */}
      <div className="absolute top-8 left-8 z-10">
        <span className="small-caps text-secondary text-sm font-medium">
          HEAVYDSPARKS
        </span>
      </div>

      {/* Main content */}
      <div className="relative z-10 px-8 md:px-16 lg:px-24 flex-1 flex flex-col justify-center">
        <h1 className="font-display uppercase leading-[0.85]" style={{ fontSize: "clamp(80px, 12vw, 160px)", letterSpacing: "-1px" }}>
          <span className="block text-foreground">BUILT</span>
          <span className="block text-primary">DIFFERENT.</span>
        </h1>

        {/* Divider lines */}
        <div className="flex items-center gap-2 mt-8 mb-4">
          <div className="w-8 h-[2px] bg-primary" />
          <div className="w-12 h-[2px] bg-primary" />
          <div className="w-6 h-[2px] bg-primary" />
        </div>

        {/* Tagline */}
        <p className="small-caps text-muted-foreground text-sm">
          DIESEL · RECOVERY · NO LIMITS
        </p>

        {/* CTA */}
        <div className="mt-10">
          <a
            href="https://www.youtube.com/@HeavyDSparks"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-primary text-primary-foreground uppercase font-bold tracking-wider text-sm px-8 py-4 animate-pulse-border hover:brightness-110 transition-all"
          >
            ▶ WATCH ON YOUTUBE
          </a>
        </div>
      </div>

      {/* Marquee ticker */}
      <div className="relative z-10 border-t border-border/30 py-3 overflow-hidden">
        <div className="flex animate-marquee whitespace-nowrap">
          {Array.from({ length: 4 }).map((_, i) => (
            <span key={i} className="small-caps text-secondary text-xs mx-0">
              {MARQUEE_TEXT}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
