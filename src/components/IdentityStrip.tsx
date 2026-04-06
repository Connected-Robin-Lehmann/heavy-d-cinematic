const facts = [
  { icon: "🔧", text: "Master diesel mechanic since age 18" },
  { icon: "📺", text: "6 seasons on Discovery Channel" },
  { icon: "🏆", text: "4.4 million YouTube subscribers" },
  { icon: "🏔️", text: "Born and built in Utah" },
];

const IdentityStrip = () => {
  return (
    <section className="relative clip-diagonal-top bg-muted -mt-[4vw] pt-[8vw] pb-20 overflow-hidden">
      {/* Background watermark */}
      <div
        className="absolute inset-0 flex items-center justify-center pointer-events-none select-none"
        aria-hidden="true"
      >
        <span className="font-display text-foreground/[0.04] uppercase" style={{ fontSize: "clamp(120px, 20vw, 300px)" }}>
          HEAVY D
        </span>
      </div>

      <div className="relative z-10 px-8 md:px-16 lg:px-24">
        <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center max-w-6xl mx-auto">
          {/* Left: pull quote */}
          <div className="flex gap-6">
            <div className="w-[3px] bg-primary shrink-0" />
            <blockquote className="font-display text-foreground uppercase text-3xl md:text-4xl lg:text-5xl leading-tight">
              "I don't build trucks. I build legends."
            </blockquote>
          </div>

          {/* Right: facts */}
          <div className="space-y-0">
            {facts.map((fact, i) => (
              <div key={i}>
                <div className="flex items-center gap-4 py-4">
                  <span className="text-xl">{fact.icon}</span>
                  <span className="text-foreground font-body text-base">{fact.text}</span>
                </div>
                {i < facts.length - 1 && <div className="h-px bg-border" />}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default IdentityStrip;
