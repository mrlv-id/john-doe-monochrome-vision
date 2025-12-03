import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen);

  const closeMobileMenu = () => setMobileMenuOpen(false);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled || mobileMenuOpen ? "bg-background/95 backdrop-blur-sm border-b border-border" : "bg-transparent"
      }`}
    >
      <nav className="container mx-auto px-4 sm:px-6 py-4 sm:py-6 flex items-center justify-between">
        <a href="#" className="font-display text-lg sm:text-xl tracking-tight z-10">
          John Doe
        </a>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex items-center gap-8 lg:gap-10 font-body text-sm tracking-wide">
          <li>
            <a href="#work" className="text-muted-foreground hover:text-foreground transition-colors">
              Work
            </a>
          </li>
          <li>
            <a href="#about" className="text-muted-foreground hover:text-foreground transition-colors">
              About
            </a>
          </li>
          <li>
            <a href="#contact" className="text-muted-foreground hover:text-foreground transition-colors">
              Contact
            </a>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMobileMenu}
          className="md:hidden z-10 p-2 -mr-2 text-foreground"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`md:hidden absolute top-full left-0 right-0 bg-background/95 backdrop-blur-sm border-b border-border transition-all duration-300 ${
          mobileMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        <ul className="container mx-auto px-4 py-6 flex flex-col gap-6 font-body text-base">
          <li>
            <a
              href="#work"
              onClick={closeMobileMenu}
              className="block text-foreground hover:text-muted-foreground transition-colors py-2"
            >
              Work
            </a>
          </li>
          <li>
            <a
              href="#about"
              onClick={closeMobileMenu}
              className="block text-foreground hover:text-muted-foreground transition-colors py-2"
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#contact"
              onClick={closeMobileMenu}
              className="block text-foreground hover:text-muted-foreground transition-colors py-2"
            >
              Contact
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
