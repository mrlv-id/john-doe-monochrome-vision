import { createContext, useContext, useState, ReactNode } from "react";

type Language = "en" | "pt-BR";

interface LanguageContextType {
  language: Language;
  toggleLanguage: () => void;
  t: (key: string) => string;
}

const translations: Record<Language, Record<string, string>> = {
  en: {
    // Header
    "nav.work": "Work",
    "nav.about": "About",
    "nav.contact": "Contact",
    
    // Hero
    "hero.tagline": "Urban & Minimalist Photography",
    "hero.title1": "Capturing the",
    "hero.title2": "silence",
    "hero.title3": "of cities",
    "hero.description": "Finding beauty in geometric forms, shadows, and the quiet moments of urban life.",
    "hero.cta": "View Portfolio",
    "hero.scroll": "Scroll",
    
    // Gallery
    "gallery.label": "Selected Work",
    "gallery.title": "Portfolio",
    "gallery.clickToView": "Click to view",
    
    // About
    "about.label": "About",
    "about.title1": "The eye behind",
    "about.title2": "the lens",
    "about.p1": "With over a decade of experience in urban photography, I have dedicated my craft to capturing the soul of cities through a minimalist lens. My work explores the intersection of architecture, light, and human presence.",
    "about.p2": "Each photograph is a meditation on space and form—finding poetry in concrete jungles, beauty in brutalist structures, and stories in empty streets.",
    "about.p3": "Based in São Paulo, my work has been featured in galleries across Europe and the Americas, and published in magazines such as Architectural Digest, Monocle, and Kinfolk.",
    "about.yearsExp": "Years Experience",
    "about.projects": "Projects",
    "about.awards": "Awards",
    
    // Contact
    "contact.label": "Get in Touch",
    "contact.title1": "Let's create",
    "contact.title2": "something",
    "contact.title3": "together",
    "contact.description": "Available for commercial projects, editorial work, and art commissions. Based in São Paulo, available worldwide.",
    
    // Footer
    "footer.rights": "All rights reserved.",
    "footer.tagline": "Urban & Minimalist Photography",
  },
  "pt-BR": {
    // Header
    "nav.work": "Trabalhos",
    "nav.about": "Sobre",
    "nav.contact": "Contato",
    
    // Hero
    "hero.tagline": "Fotografia Urbana & Minimalista",
    "hero.title1": "Capturando o",
    "hero.title2": "silêncio",
    "hero.title3": "das cidades",
    "hero.description": "Encontrando beleza em formas geométricas, sombras e nos momentos silenciosos da vida urbana.",
    "hero.cta": "Ver Portfólio",
    "hero.scroll": "Rolar",
    
    // Gallery
    "gallery.label": "Trabalhos Selecionados",
    "gallery.title": "Portfólio",
    "gallery.clickToView": "Clique para ver",
    
    // About
    "about.label": "Sobre",
    "about.title1": "O olhar por trás",
    "about.title2": "da lente",
    "about.p1": "Com mais de uma década de experiência em fotografia urbana, dediquei meu ofício a capturar a alma das cidades através de uma lente minimalista. Meu trabalho explora a interseção entre arquitetura, luz e presença humana.",
    "about.p2": "Cada fotografia é uma meditação sobre espaço e forma—encontrando poesia em selvas de concreto, beleza em estruturas brutalistas e histórias em ruas vazias.",
    "about.p3": "Baseado em São Paulo, meu trabalho foi exibido em galerias pela Europa e Américas, e publicado em revistas como Architectural Digest, Monocle e Kinfolk.",
    "about.yearsExp": "Anos de Experiência",
    "about.projects": "Projetos",
    "about.awards": "Prêmios",
    
    // Contact
    "contact.label": "Entre em Contato",
    "contact.title1": "Vamos criar",
    "contact.title2": "algo",
    "contact.title3": "juntos",
    "contact.description": "Disponível para projetos comerciais, trabalhos editoriais e encomendas artísticas. Baseado em São Paulo, disponível mundialmente.",
    
    // Footer
    "footer.rights": "Todos os direitos reservados.",
    "footer.tagline": "Fotografia Urbana & Minimalista",
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>("en");

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === "en" ? "pt-BR" : "en"));
  };

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
