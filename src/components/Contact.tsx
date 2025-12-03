import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import ScrollReveal from "./ScrollReveal";
import { useLanguage } from "@/contexts/LanguageContext";

const Contact = () => {
  const { t } = useLanguage();

  return (
    <section id="contact" className="py-16 sm:py-24 md:py-32 bg-foreground text-primary-foreground">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-4xl mx-auto text-center">
          <ScrollReveal animation="fade-down" duration={600}>
            <p className="font-body text-xs sm:text-sm tracking-[0.2em] sm:tracking-[0.3em] uppercase text-gray-400 mb-4 sm:mb-6">
              {t("contact.label")}
            </p>
          </ScrollReveal>

          <ScrollReveal animation="slide-up" delay={100} duration={900}>
            <h2 className="font-display text-3xl sm:text-4xl md:text-6xl lg:text-7xl tracking-tight mb-6 sm:mb-8">
              {t("contact.title1")}
              <br />
              {t("contact.title2")} <span className="italic">{t("contact.title3")}</span>
            </h2>
          </ScrollReveal>

          <ScrollReveal animation="blur" delay={200} duration={800}>
            <p className="font-body text-base sm:text-lg text-gray-400 max-w-xl mx-auto mb-8 sm:mb-12 px-2">
              {t("contact.description")}
            </p>
          </ScrollReveal>

          <ScrollReveal animation="zoom-rotate" delay={300} duration={700}>
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
          </ScrollReveal>

          {/* Social Links */}
          <ScrollReveal animation="fade-up" delay={400} duration={600}>
            <div className="flex items-center justify-center gap-4 sm:gap-8 mt-10 sm:mt-16 font-body text-xs sm:text-sm">
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
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default Contact;
