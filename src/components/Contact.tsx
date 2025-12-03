import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-24 md:py-32 bg-foreground text-primary-foreground">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <p className="font-body text-sm tracking-[0.3em] uppercase text-gray-400 mb-6">
            Get in Touch
          </p>
          <h2 className="font-display text-4xl md:text-6xl lg:text-7xl tracking-tight mb-8">
            Let's create
            <br />
            something <span className="italic">together</span>
          </h2>
          <p className="font-body text-lg text-gray-400 max-w-xl mx-auto mb-12">
            Available for commercial projects, editorial work, and art commissions. Based in São
            Paulo, available worldwide.
          </p>

          <Button
            variant="outline"
            size="lg"
            className="group border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground hover:text-foreground transition-all duration-300 px-8 py-6 text-base"
            asChild
          >
            <a href="mailto:hello@johndoe.com">
              hello@johndoe.com
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
          </Button>

          {/* Social Links */}
          <div className="flex items-center justify-center gap-8 mt-16 font-body text-sm">
            <a
              href="#"
              className="text-gray-400 hover:text-primary-foreground transition-colors tracking-wide"
            >
              Instagram
            </a>
            <span className="text-gray-600">•</span>
            <a
              href="#"
              className="text-gray-400 hover:text-primary-foreground transition-colors tracking-wide"
            >
              Behance
            </a>
            <span className="text-gray-600">•</span>
            <a
              href="#"
              className="text-gray-400 hover:text-primary-foreground transition-colors tracking-wide"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
