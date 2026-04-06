const stats = [
  { number: "4.4M", label: "SUBSCRIBERS" },
  { number: "1.1B", label: "VIEWS" },
  { number: "50+", label: "RECOVERIES" },
  { number: "6", label: "SEASONS ON DISCOVERY" },
];

const StatsSection = () => {
  return (
    <section className="relative py-12 md:py-20 px-4 sm:px-8 md:px-16 lg:px-24 clip-diagonal-both bg-secondary/20 -my-[4vw]">
      <div className="max-w-6xl mx-auto py-[4vw]">
        <p className="small-caps text-secondary text-xs mb-12 text-center">BY THE NUMBERS</p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-0">
          {stats.map((stat, i) => (
            <div key={i} className="flex">
              <div className="flex-1 text-center py-8">
                <div className="font-display text-primary text-4xl sm:text-5xl md:text-6xl lg:text-7xl">{stat.number}</div>
                <div className="small-caps text-foreground text-[10px] mt-3">{stat.label}</div>
              </div>
              {i < stats.length - 1 && (
                <div className="w-px bg-border/50 self-stretch hidden md:block" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
