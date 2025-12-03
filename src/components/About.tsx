import portraitImage from "@/assets/photographer-portrait.jpg";

const About = () => {
  return (
    <section id="about" className="py-24 md:py-32 bg-secondary">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <div className="relative animate-fade-in">
            <div className="aspect-[4/5] overflow-hidden">
              <img
                src={portraitImage}
                alt="John Doe - Urban Photographer"
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
              />
            </div>
            {/* Decorative element */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 border border-border hidden md:block" />
          </div>

          {/* Content */}
          <div className="lg:pl-8">
            <p className="font-body text-sm tracking-[0.3em] uppercase text-muted-foreground mb-4">
              About
            </p>
            <h2 className="font-display text-4xl md:text-5xl tracking-tight mb-8">
              The eye behind
              <br />
              the lens
            </h2>
            <div className="space-y-6 font-body text-muted-foreground leading-relaxed">
              <p>
                With over a decade of experience in urban photography, I have dedicated my craft to
                capturing the soul of cities through a minimalist lens. My work explores the
                intersection of architecture, light, and human presence.
              </p>
              <p>
                Each photograph is a meditation on space and form—finding poetry in concrete
                jungles, beauty in brutalist structures, and stories in empty streets.
              </p>
              <p>
                Based in São Paulo, my work has been featured in galleries across Europe and the
                Americas, and published in magazines such as Architectural Digest, Monocle, and
                Kinfolk.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 mt-12 pt-12 border-t border-border">
              <div>
                <span className="font-display text-3xl md:text-4xl">12+</span>
                <p className="font-body text-sm text-muted-foreground mt-1">Years Experience</p>
              </div>
              <div>
                <span className="font-display text-3xl md:text-4xl">200+</span>
                <p className="font-body text-sm text-muted-foreground mt-1">Projects</p>
              </div>
              <div>
                <span className="font-display text-3xl md:text-4xl">15</span>
                <p className="font-body text-sm text-muted-foreground mt-1">Awards</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
