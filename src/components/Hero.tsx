import heroImage from "@/assets/hero-urban.jpg";
import { useParallax } from "@/hooks/useParallax";
import { useLanguage } from "@/contexts/LanguageContext";

const Hero = () => {
  const parallaxOffset = useParallax(0.4);
  const { t } = useLanguage();

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Image with Parallax */}
      <div className="absolute inset-0 overflow-hidden">
        <img
          src={heroImage}
          alt="Urban architectural photography by John Doe"
          className="w-full h-[120%] object-cover will-change-transform"
          style={{
            transform: `translateY(${parallaxOffset}px) scale(1.1)`,
          }}
        />
        {/* Stronger gradient overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-background/30" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="relative h-full flex flex-col justify-end pb-16 sm:pb-20 md:pb-32 container mx-auto px-4 sm:px-6">
        <div className="max-w-4xl">
          {/* Tagline with animated line */}
          <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            <div className="w-8 sm:w-12 h-px bg-foreground/60" />
            <p className="font-body text-[10px] sm:text-sm tracking-[0.2em] sm:tracking-[0.4em] uppercase text-foreground/70">
              {t("hero.tagline")}
            </p>
          </div>

          {/* Main headline with better styling */}
          <h1 
            className="font-display text-3xl sm:text-5xl md:text-7xl lg:text-[6rem] xl:text-[7rem] font-medium leading-[0.95] tracking-tight mb-6 sm:mb-8 animate-fade-in-up"
            style={{ animationDelay: "0.4s" }}
          >
            <span className="block">{t("hero.title1")}</span>
            <span className="block">
              <em className="font-normal not-italic relative inline-block">
                {t("hero.title2")}
                <span className="absolute -bottom-1 sm:-bottom-2 left-0 w-full h-px bg-foreground/40" />
              </em>
              {" "}{t("hero.title3")}
            </span>
          </h1>

          {/* Description with better contrast */}
          <p 
            className="font-body text-sm sm:text-base md:text-lg text-foreground/70 max-w-lg leading-relaxed animate-fade-in-up"
            style={{ animationDelay: "0.6s" }}
          >
            {t("hero.description")}
          </p>

          {/* CTA Button */}
          <div 
            className="mt-6 sm:mt-10 animate-fade-in-up"
            style={{ animationDelay: "0.8s" }}
          >
            <a 
              href="#work" 
              className="inline-flex items-center gap-2 sm:gap-3 font-body text-xs sm:text-sm tracking-widest uppercase text-foreground/80 hover:text-foreground transition-colors group"
            >
              <span>{t("hero.cta")}</span>
              <span className="w-6 sm:w-8 h-px bg-foreground/40 group-hover:w-10 sm:group-hover:w-12 transition-all duration-300" />
            </a>
          </div>
        </div>

        {/* Scroll indicator - hidden on mobile */}
        <div className="hidden sm:flex absolute bottom-10 right-6 md:right-10 flex-col items-center gap-3 animate-fade-in" style={{ animationDelay: "1s" }}>
          <span className="font-body text-[10px] tracking-[0.3em] uppercase text-foreground/50 rotate-90 origin-center translate-x-4">
            {t("hero.scroll")}
          </span>
          <div className="w-px h-16 bg-gradient-to-b from-foreground/50 to-transparent" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
