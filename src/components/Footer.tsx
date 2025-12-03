import ScrollReveal from "./ScrollReveal";
import { useLanguage } from "@/contexts/LanguageContext";

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="py-8 bg-foreground text-primary-foreground border-t border-gray-800">
      <div className="container mx-auto px-4 sm:px-6">
        <ScrollReveal animation="fade-up" duration={500}>
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="font-body text-xs sm:text-sm text-gray-500">
              © {new Date().getFullYear()} John Doe. {t("footer.rights")}
            </p>
            <p className="font-body text-xs sm:text-sm text-gray-500">
              {t("footer.tagline")}
            </p>
          </div>
        </ScrollReveal>
      </div>
    </footer>
  );
};

export default Footer;
