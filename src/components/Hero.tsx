import heroImage from "@/assets/hero-urban.jpg";

const Hero = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Urban architectural photography by John Doe"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-transparent to-background" />
      </div>

      {/* Content */}
      <div className="relative h-full flex flex-col justify-end pb-20 md:pb-32 container mx-auto px-6">
        <div className="max-w-3xl animate-fade-in-up">
          <p className="font-body text-sm tracking-[0.3em] uppercase text-gray-400 mb-4">
            Urban & Minimalist Photography
          </p>
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-medium leading-[0.9] tracking-tight mb-6">
            Capturing the
            <br />
            <span className="italic">silence</span> of cities
          </h1>
          <p className="font-body text-lg text-muted-foreground max-w-md">
            Finding beauty in geometric forms, shadows, and the quiet moments of urban life.
          </p>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-fade-in">
          <span className="font-body text-xs tracking-widest uppercase text-muted-foreground">
            Scroll
          </span>
          <div className="w-px h-12 bg-gradient-to-b from-foreground to-transparent" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
