
import React, { useState, useEffect } from "react";
import { Menu, X, Globe, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [language, setLanguage] = useState("EN");
  
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  
  const handleLanguageChange = (lang: string) => {
    setLanguage(lang);
    // In a real application, this would trigger language change
  };
  
  const scrollToBooking = () => {
    const bookingElement = document.getElementById("booking");
    if (bookingElement) {
      bookingElement.scrollIntoView({ behavior: "smooth" });
    }
  };
  
  return (
    <header 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled 
          ? "bg-white/90 backdrop-blur-md shadow-sm py-3" 
          : "bg-transparent py-5"
      )}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="/" className="flex items-center z-10">
            <div className="font-display text-navy text-2xl font-bold">
              Schiphol-Giethoorn
            </div>
          </a>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#benefits" className="text-navy-dark hover:text-accent transition-colors">Benefits</a>
            <a href="#vehicles" className="text-navy-dark hover:text-accent transition-colors">Vehicles</a>
            <a href="#pricing" className="text-navy-dark hover:text-accent transition-colors">Pricing</a>
            <a href="#faq" className="text-navy-dark hover:text-accent transition-colors">FAQ</a>
            
            {/* Language Selector */}
            <div className="relative group">
              <button className="flex items-center text-navy-dark hover:text-accent transition-colors">
                <Globe className="h-4 w-4 mr-1" />
                {language}
                <ChevronDown className="h-4 w-4 ml-1" />
              </button>
              
              <div className="absolute right-0 mt-2 py-2 w-24 bg-white rounded-md shadow-premium border border-silver/20 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform translate-y-2 group-hover:translate-y-0">
                <button 
                  onClick={() => handleLanguageChange("EN")}
                  className={cn(
                    "block w-full text-left px-4 py-2 text-sm",
                    language === "EN" ? "text-accent font-medium" : "text-navy-dark hover:bg-silver-light"
                  )}
                >
                  English
                </button>
                <button 
                  onClick={() => handleLanguageChange("NL")}
                  className={cn(
                    "block w-full text-left px-4 py-2 text-sm",
                    language === "NL" ? "text-accent font-medium" : "text-navy-dark hover:bg-silver-light"
                  )}
                >
                  Nederlands
                </button>
                <button 
                  onClick={() => handleLanguageChange("DE")}
                  className={cn(
                    "block w-full text-left px-4 py-2 text-sm",
                    language === "DE" ? "text-accent font-medium" : "text-navy-dark hover:bg-silver-light"
                  )}
                >
                  Deutsch
                </button>
              </div>
            </div>
            
            <button 
              onClick={scrollToBooking}
              className="btn-primary"
            >
              Book Now
            </button>
          </nav>
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden z-10 p-2 text-navy-dark focus:outline-none"
            onClick={toggleMenu}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
          
          {/* Mobile Menu */}
          <div 
            className={cn(
              "fixed inset-0 bg-white z-[5] flex flex-col items-center justify-center space-y-8 transition-all duration-300 transform",
              isMenuOpen ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
            )}
          >
            <a href="#benefits" className="text-navy-dark hover:text-accent transition-colors text-xl" onClick={toggleMenu}>Benefits</a>
            <a href="#vehicles" className="text-navy-dark hover:text-accent transition-colors text-xl" onClick={toggleMenu}>Vehicles</a>
            <a href="#pricing" className="text-navy-dark hover:text-accent transition-colors text-xl" onClick={toggleMenu}>Pricing</a>
            <a href="#faq" className="text-navy-dark hover:text-accent transition-colors text-xl" onClick={toggleMenu}>FAQ</a>
            
            {/* Language Buttons */}
            <div className="flex space-x-4">
              <button 
                onClick={() => {
                  handleLanguageChange("EN");
                  toggleMenu();
                }}
                className={cn(
                  "px-4 py-2 rounded-md transition-colors",
                  language === "EN" ? "bg-accent text-white" : "bg-silver-light text-navy-dark"
                )}
              >
                EN
              </button>
              <button 
                onClick={() => {
                  handleLanguageChange("NL");
                  toggleMenu();
                }}
                className={cn(
                  "px-4 py-2 rounded-md transition-colors",
                  language === "NL" ? "bg-accent text-white" : "bg-silver-light text-navy-dark"
                )}
              >
                NL
              </button>
              <button 
                onClick={() => {
                  handleLanguageChange("DE");
                  toggleMenu();
                }}
                className={cn(
                  "px-4 py-2 rounded-md transition-colors",
                  language === "DE" ? "bg-accent text-white" : "bg-silver-light text-navy-dark"
                )}
              >
                DE
              </button>
            </div>
            
            <button 
              onClick={() => {
                scrollToBooking();
                toggleMenu();
              }}
              className="btn-primary"
            >
              Book Now
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
