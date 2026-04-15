import heavyDImg from "@/assets/panel-media.jpg";

const members = [
  {
    name: "HEAVY D",
    realName: "David Sparks",
    role: "FOUNDER · HOST",
    image: heavyDImg,
  },
  {
    name: "DIESEL DAVE",
    realName: "Dave Kiley",
    role: "CO-HOST",
    image: null,
  },
  {
    name: null,
    realName: null,
    role: null,
    image: null,
  },
  {
    name: null,
    realName: null,
    role: null,
    image: null,
  },
];

const PanelsSection = () => {
  return (
    <section className="relative py-12 md:py-20 px-4 sm:px-8 md:px-16 lg:px-24">
      <p className="small-caps text-secondary text-xs mb-8 md:mb-12 text-center">
        THE CREW
      </p>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-6xl mx-auto">
        {members.map((member, i) => (
          <div
            key={i}
            className="group relative overflow-hidden aspect-[3/4] bg-muted border border-border"
          >
            {/* Photo or placeholder */}
            {member.image ? (
              <>
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                  style={{ backgroundImage: `url(${member.image})` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
              </>
            ) : (
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-3">
                {member.name ? (
                  <>
                    <div className="w-16 h-16 border-2 border-border rounded-full flex items-center justify-center">
                      <span className="text-muted-foreground text-2xl">?</span>
                    </div>
                    <p className="text-muted-foreground text-xs small-caps">
                      PHOTO COMING
                    </p>
                  </>
                ) : (
                  <>
                    <div className="w-12 h-12 border border-dashed border-border/50 rounded-full" />
                    <p className="text-muted-foreground/30 text-xs small-caps">
                      TBD
                    </p>
                  </>
                )}
              </div>
            )}

            {/* Name overlay */}
            {member.name && (
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <p className="small-caps text-primary text-[10px] tracking-[0.2em]">
                  {member.role}
                </p>
                <h3 className="font-display text-foreground uppercase text-xl leading-tight">
                  {member.name}
                </h3>
                <p className="small-caps text-muted-foreground text-[10px] mt-0.5">
                  {member.realName}
                </p>
                <div className="h-[2px] bg-primary mt-3 w-0 group-hover:w-full transition-all duration-500" />
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default PanelsSection;
