import portraitImage from "@/assets/photographer-portrait.jpg";
import ScrollReveal from "./ScrollReveal";
const About = () => {
  return <section id="about" className="py-16 sm:py-24 md:py-32 bg-secondary">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-20 items-center">
          {/* Image */}
          <ScrollReveal animation="fade-right" duration={800}>
            <div className="relative">
              <div className="aspect-[4/5] overflow-hidden">
                <img alt="John Doe - Urban Photographer" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" src="/lovable-uploads/c4814abd-0672-4e4f-8fb9-f8c3fec2ae38.jpg" />
              </div>
              {/* Decorative element */}
              <div className="absolute -bottom-6 -right-6 w-32 h-32 border border-border hidden md:block" />
            </div>
          </ScrollReveal>

          {/* Content */}
          <div className="lg:pl-8">
            <ScrollReveal animation="fade-up" delay={100}>
              <p className="font-body text-xs sm:text-sm tracking-[0.2em] sm:tracking-[0.3em] uppercase text-muted-foreground mb-3 sm:mb-4">
                About
              </p>
              <h2 className="font-display text-3xl sm:text-4xl md:text-5xl tracking-tight mb-6 sm:mb-8">
                The eye behind
                <br />
                the lens
              </h2>
            </ScrollReveal>

            <ScrollReveal animation="fade-up" delay={200}>
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
            </ScrollReveal>

            {/* Stats */}
            <ScrollReveal animation="fade-up" delay={300}>
              <div className="grid grid-cols-3 gap-4 sm:gap-8 mt-8 sm:mt-12 pt-8 sm:pt-12 border-t border-border">
                <div className="text-center sm:text-left">
                  <span className="font-display text-2xl sm:text-3xl md:text-4xl">12+</span>
                  <p className="font-body text-xs sm:text-sm text-muted-foreground mt-1">Years Experience</p>
                </div>
                <div className="text-center sm:text-left">
                  <span className="font-display text-2xl sm:text-3xl md:text-4xl">200+</span>
                  <p className="font-body text-xs sm:text-sm text-muted-foreground mt-1">Projects</p>
                </div>
                <div className="text-center sm:text-left">
                  <span className="font-display text-2xl sm:text-3xl md:text-4xl">15</span>
                  <p className="font-body text-xs sm:text-sm text-muted-foreground mt-1">Awards</p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>;
};
export default About;