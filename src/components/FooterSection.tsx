const FooterSection = () => {
  return (
    <footer className="relative pt-12 md:pt-20 pb-8 px-4 sm:px-8 md:px-16 lg:px-24 vignette overflow-hidden">
      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
          {/* Left */}
          <div>
            <span className="small-caps text-secondary text-sm font-medium block mb-2">HEAVYDSPARKS</span>
            <p className="small-caps text-muted-foreground text-[10px]">
              UTAH BUILT · DIESEL FUELED · AMERICAN MADE
            </p>
          </div>

          {/* Right: social icons */}
          <div className="flex gap-6">
            <a href="https://www.youtube.com/@HeavyDSparks" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors" aria-label="YouTube">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
            </a>
            <a href="https://www.instagram.com/heavydsparks/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors" aria-label="Instagram">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/></svg>
            </a>
            <a href="https://www.threads.net/@heavydsparks" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors" aria-label="Threads">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12.186 24h-.007c-3.581-.024-6.334-1.205-8.184-3.509C2.35 18.44 1.5 15.586 1.472 12.01v-.017c.03-3.579.879-6.43 2.525-8.482C5.845 1.205 8.6.024 12.18 0h.014c2.746.02 5.043.725 6.826 2.098 1.677 1.29 2.858 3.13 3.509 5.467l-2.04.569c-1.104-3.96-3.898-5.984-8.304-6.015-2.91.022-5.11.936-6.54 2.717C4.307 6.504 3.616 8.914 3.59 12c.025 3.086.718 5.496 2.057 7.164 1.432 1.783 3.631 2.698 6.54 2.717 2.623-.02 4.358-.631 5.8-2.045 1.647-1.613 1.618-3.593 1.09-4.798-.346-.789-.96-1.42-1.757-1.846-.166 1.652-.79 2.952-1.856 3.858-1.2 1.02-2.78 1.538-4.696 1.538h-.09c-1.352-.01-2.573-.393-3.53-1.107-1.11-.828-1.748-2.025-1.795-3.37-.088-2.42 1.71-4.312 4.843-4.478.895-.047 1.71-.01 2.435.088-.08-.415-.233-.787-.46-1.102-.428-.596-1.114-.91-2.04-.935h-.073c-.753 0-1.75.234-2.492 1.078l-1.51-1.37C7.68 6.06 9.232 5.38 10.86 5.38h.108c1.591.038 2.824.6 3.666 1.672.734.932 1.14 2.162 1.215 3.66.646.164 1.23.39 1.752.688 1.287.735 2.208 1.822 2.676 3.155.79 2.254.383 4.903-1.503 6.752-1.862 1.826-4.213 2.66-7.395 2.693h-.192zM10.09 13.912c-1.703.09-2.607.963-2.563 2.18.02.57.297 1.065.782 1.427.554.413 1.312.613 2.135.622h.076c2.146 0 3.49-.844 3.89-2.456-.714-.252-1.54-.4-2.465-.456-.593-.032-1.218-.016-1.855.009v-.002l.001.676z"/></svg>
            </a>
          </div>
        </div>

        {/* Bottom line */}
        <div className="mt-12 pt-4 border-t border-primary/30">
          <p className="text-muted-foreground text-[10px] text-center">
            © {new Date().getFullYear()} HeavyDSparks. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
