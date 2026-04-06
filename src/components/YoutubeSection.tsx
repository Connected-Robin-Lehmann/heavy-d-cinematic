const videos = [
  {
    id: "yf16MpI_PAQ",
    title: "I Sold My Blackhawk and Bought a New One",
    views: "1M views",
  },
  {
    id: "QC83fZu_aeA",
    title: "We Bought Random Vehicles… Then Built THIS",
    views: "727K views",
  },
  {
    id: "Yr9ZCcR3Fgw",
    title: "I Bought the WEIRDEST Camper Wagon on Marketplace (Only 4 Exist)",
    views: "778K views",
  },
];

const YoutubeSection = () => {
  return (
    <section className="relative py-20 px-8 md:px-16 lg:px-24">
      {/* Film slate label */}
      <div className="flex items-center gap-0 mb-12 max-w-6xl mx-auto">
        <div className="bg-foreground px-4 py-2 flex items-center gap-2">
          <span className="text-background uppercase text-sm font-bold tracking-wider">LATEST DROPS</span>
        </div>
        <div className="w-3 h-full bg-primary self-stretch" style={{ minHeight: "36px" }} />
      </div>

      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {videos.map((video) => (
          <a
            key={video.id}
            href={`https://www.youtube.com/watch?v=${video.id}`}
            target="_blank"
            rel="noopener noreferrer"
            className="group block"
          >
            {/* YouTube thumbnail */}
            <div className="relative aspect-video border-2 border-border overflow-hidden bg-muted">
              <img
                src={`https://img.youtube.com/vi/${video.id}/maxresdefault.jpg`}
                alt={video.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
              {/* Inner vignette */}
              <div className="absolute inset-0 shadow-[inset_0_0_30px_rgba(0,0,0,0.5)]" />
              {/* Play icon */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-16 h-16 border-2 border-foreground/30 flex items-center justify-center group-hover:border-primary transition-colors bg-background/40">
                  <span className="text-foreground/50 text-2xl group-hover:text-primary transition-colors ml-1">▶</span>
                </div>
              </div>
            </div>
            {/* Info */}
            <h4 className="text-foreground uppercase text-sm font-bold tracking-wide mt-4 font-body">{video.title}</h4>
            <p className="small-caps text-secondary text-xs mt-1">{video.views}</p>
          </a>
        ))}
      </div>

      {/* Subscribe link */}
      <div className="max-w-6xl mx-auto mt-12">
        <a
          href="https://www.youtube.com/@HeavyDSparks"
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary uppercase font-bold tracking-wider text-sm relative inline-block after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-primary after:transition-all after:duration-300 hover:after:w-full"
        >
          SUBSCRIBE →
        </a>
      </div>
    </section>
  );
};

export default YoutubeSection;
