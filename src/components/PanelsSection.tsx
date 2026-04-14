import { Play, Wrench, Radio } from "lucide-react";
import panelMedia from "@/assets/panel-media.jpg";
import panelAutomotive from "@/assets/panel-automotive.jpg";
import panelHumanitarian from "@/assets/panel-humanitarian.jpg";

const panels = [
  {
    icon: Play,
    subtitle: "THE VOICE",
    title: "MEDIA & DIGITAL ENTERTAINMENT",
    desc: "From Discovery Channel to 4.4 million YouTube subscribers — Dave turned his life into a 24/7 content engine. Extreme builds, business vlogs, and behind-the-scenes access that no studio could script.",
    image: panelMedia,
  },
  {
    icon: Wrench,
    subtitle: "THE ENGINE",
    title: "CUSTOM AUTOMOTIVE & LOGISTICS",
    desc: "Sparks Motors and DieselSellerz built the blueprint for high-end diesel fabrication.",
    image: panelAutomotive,
  },
  {
    icon: Radio,
    subtitle: "THE LEGACY",
    title: "HUMANITARIAN & TECH INNOVATION",
    desc: "Search and rescue. Disaster relief. Through his fleet of helicopters and forward-thinking ventures, Dave is proving that heavy-duty and humanitarian go hand in hand.",
    image: panelHumanitarian,
  },
];

const PanelsSection = () => {
  return (
    <section className="relative py-12 md:py-20 px-4 sm:px-8 md:px-16 lg:px-24">
      <p className="small-caps text-secondary text-xs mb-8 md:mb-12 text-center">WHAT HE DOES</p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-0 max-w-6xl mx-auto md:h-[600px]">
        {panels.map((panel, i) => (
          <div
            key={i}
            className="group overflow-hidden cursor-pointer transition-all duration-500 md:hover:flex-[1.15] md:flex-1 md:relative md:min-h-0"
            style={{ display: "flex", flexDirection: "column" }}
          >
            {/* Mobile: stacked image + text */}
            <div className="md:hidden">
              <div
                className="w-full h-64 bg-cover bg-center"
                style={{ backgroundImage: `url(${panel.image})` }}
              />
              <div className="bg-background p-5">
                <panel.icon className="text-primary mb-3" size={28} />
                <p className="small-caps text-primary text-[10px] tracking-[0.2em] mb-1">{panel.subtitle}</p>
                <h3 className="small-caps text-foreground text-sm mb-2">{panel.title}</h3>
                <p className="text-muted-foreground text-sm font-body leading-relaxed">{panel.desc}</p>
                <div className="h-[2px] bg-primary mt-4 w-full" />
              </div>
            </div>

            {/* Desktop: overlay layout */}
            <div className="hidden md:flex flex-col relative h-full">
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                style={{ backgroundImage: `url(${panel.image})` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-background/30" />
              <div className="relative z-10 flex flex-col justify-end h-full p-8">
                <panel.icon className="text-primary mb-4" size={32} />
                <p className="small-caps text-primary text-[10px] tracking-[0.2em] mb-1">{panel.subtitle}</p>
                <h3 className="small-caps text-foreground text-sm mb-2">{panel.title}</h3>
                <p className="text-muted-foreground text-sm font-body leading-relaxed">{panel.desc}</p>
                <div className="h-[2px] bg-primary mt-6 w-0 group-hover:w-full transition-all duration-500" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PanelsSection;
