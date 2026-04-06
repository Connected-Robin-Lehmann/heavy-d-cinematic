import { Wrench, Mountain, Gift } from "lucide-react";
import panelBuilds from "@/assets/panel-builds.jpg";
import panelRecovery from "@/assets/panel-recovery.jpg";
import panelGiveaway from "@/assets/panel-giveaway.jpg";

const panels = [
  {
    icon: Wrench,
    title: "CUSTOM BUILDS",
    desc: "From bare frame to full-blown monster — diesel trucks built to defy expectations.",
    image: panelBuilds,
  },
  {
    icon: Mountain,
    title: "EPIC RECOVERIES",
    desc: "Pulling rigs out of impossible terrain. If it's stuck, Heavy D will get it out.",
    image: panelRecovery,
  },
  {
    icon: Gift,
    title: "TRUCK GIVEAWAYS",
    desc: "Massive custom trucks given away to fans who deserve them most.",
    image: panelGiveaway,
  },
];

const PanelsSection = () => {
  return (
    <section className="relative py-20 px-8 md:px-16 lg:px-24">
      <p className="small-caps text-secondary text-xs mb-12 text-center">WHAT HE DOES</p>

      <div className="grid md:grid-cols-3 gap-0 max-w-6xl mx-auto h-[500px] md:h-[600px]">
        {panels.map((panel, i) => (
          <div
            key={i}
            className="relative group overflow-hidden cursor-pointer transition-all duration-500 hover:flex-[1.15] flex-1"
            style={{ display: "flex", flexDirection: "column" }}
          >
            {/* BG image */}
            <div
              className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
              style={{ backgroundImage: `url(${panel.image})` }}
            />
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-background/30" />

            {/* Content */}
            <div className="relative z-10 flex flex-col justify-end h-full p-6 md:p-8">
              <panel.icon className="text-primary mb-4" size={32} />
              <h3 className="small-caps text-foreground text-sm mb-2">{panel.title}</h3>
              <p className="text-muted-foreground text-sm font-body leading-relaxed">{panel.desc}</p>

              {/* Hover accent line */}
              <div className="h-[2px] bg-primary mt-6 w-0 group-hover:w-full transition-all duration-500" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PanelsSection;
