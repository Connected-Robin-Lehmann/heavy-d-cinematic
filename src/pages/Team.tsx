import { Link } from "react-router-dom";
import panelMedia from "@/assets/panel-media.jpg";
import teamKiley from "@/assets/team-kiley.jpg";

const TEAM_MEMBERS = [
  {
    callsign: "THE BOSS",
    name: "DAVE SPARKS",
    role: "Founder · Builder · Pilot",
    bio: "The mind behind it all. Dave built DieselSellerz and Sparks Motors from scratch, turned a Utah shop into a Discovery Channel phenomenon, and never stopped pushing further — from custom diesels to Black Hawks.",
    image: panelMedia,
  },
  {
    callsign: "THE CHARM",
    name: "DAVE KILEY",
    role: "Co-Founder · Driver · Face of the Brand",
    bio: "Heavy D's right hand since day one. Dave Kiley is the guy who keeps the energy alive — behind the wheel, in front of the camera, and everywhere in between. Met Heavy D at a church event. Left with a business partner for life.",
    image: teamKiley,
  },
  {
    callsign: "COMING SOON",
    name: "TBA",
    role: "—",
    bio: null,
    image: null,
  },
  {
    callsign: "COMING SOON",
    name: "TBA",
    role: "—",
    bio: null,
    image: null,
  },
];

const Team = () => {
  return (
    <div className="film-grain bg-background min-h-screen" style={{ overflowX: "clip" }}>
      {/* Navigation */}
      <nav className="absolute top-4 left-4 sm:top-8 sm:left-8 z-20 flex items-center gap-6">
        <Link to="/" className="small-caps text-secondary text-xs sm:text-sm font-medium hover:text-primary transition-colors">
          HEAVYDSPARKS
        </Link>
        <Link to="/team" className="small-caps text-primary text-xs sm:text-sm font-medium">
          TEAM
        </Link>
      </nav>

      {/* Hero Banner */}
      <section className="relative h-[40vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-background" />

        {/* Watermark */}
        <span
          className="absolute font-display text-foreground uppercase select-none pointer-events-none"
          style={{ fontSize: "clamp(80px, 20vw, 300px)", opacity: 0.08 }}
        >
          THE CREW
        </span>

        <div className="relative z-10 text-center px-4">
          <h1
            className="font-display uppercase leading-[0.85]"
            style={{ fontSize: "clamp(36px, 10vw, 120px)", letterSpacing: "-1px" }}
          >
            <span className="text-foreground">BUILT BY </span>
            <span className="text-primary">LEGENDS.</span>
          </h1>
          <p className="small-caps text-secondary text-sm mt-4">
            THE PEOPLE BEHIND THE MACHINES
          </p>
        </div>
      </section>

      {/* Diagonal divider */}
      <div className="clip-diagonal-top bg-muted -mt-[4vw]">
        {/* Team Grid */}
        <section className="px-4 sm:px-8 md:px-16 lg:px-24 pt-[calc(4vw+2rem)] pb-16 md:pb-24">
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {TEAM_MEMBERS.map((member, idx) => (
              <div
                key={idx}
                className="group bg-card border border-border relative overflow-hidden"
              >
                {/* Portrait */}
                <div className="relative w-full aspect-[4/5] bg-background">
                  <div className="absolute inset-0 vignette z-10" />
                  {member.image ? (
                    <img
                      src={member.image}
                      alt={member.name}
                      className="absolute inset-0 w-full h-full object-cover object-top"
                    />
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="font-display text-foreground/10 uppercase" style={{ fontSize: "clamp(24px, 4vw, 48px)" }}>
                        {member.callsign}
                      </span>
                    </div>
                  )}
                </div>

                {/* Info */}
                <div className="p-5 md:p-6">
                  <span className="small-caps text-primary text-[10px] sm:text-xs font-medium block mb-1">
                    {member.callsign}
                  </span>
                  <h2 className="font-display text-foreground text-xl sm:text-2xl uppercase">
                    {member.name}
                  </h2>
                  <p className="small-caps text-secondary text-[10px] sm:text-xs mt-1 mb-3">
                    {member.role}
                  </p>
                  {member.bio && (
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {member.bio}
                    </p>
                  )}
                </div>

                {/* Animated bottom border */}
                <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-primary transition-all duration-500 group-hover:w-full" />
              </div>
            ))}
          </div>
        </section>
      </div>

      {/* CTA Strip */}
      <section className="bg-secondary/20 border-t border-border px-4 sm:px-8 md:px-16 lg:px-24 py-12 md:py-16">
        <div className="max-w-4xl mx-auto text-center">
          <h2
            className="font-display text-foreground uppercase"
            style={{ fontSize: "clamp(24px, 5vw, 48px)" }}
          >
            WANT TO WORK WITH THE CREW?
          </h2>
          <p className="small-caps text-muted-foreground text-xs sm:text-sm mt-3 mb-6">
            Reach out for builds, collabs, or media enquiries.
          </p>
          <a
            href="mailto:contact@heavydsparks.com"
            className="inline-block bg-primary text-primary-foreground uppercase font-bold tracking-wider text-xs sm:text-sm px-6 sm:px-8 py-3 sm:py-4 hover:brightness-110 transition-all"
          >
            GET IN TOUCH →
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-4 sm:px-8 md:px-16 lg:px-24 py-6 border-t border-primary/30">
        <p className="text-muted-foreground text-[10px] text-center">
          © {new Date().getFullYear()} HeavyDSparks. All rights reserved.
        </p>
      </footer>
    </div>
  );
};

export default Team;
