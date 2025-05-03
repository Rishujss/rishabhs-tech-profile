
import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'portfolio', label: 'Portfolio' },
    { id: 'skills', label: 'Skills' },
    { id: 'certifications', label: 'Certifications' },
    { id: 'contact', label: 'Contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setScrolled(scrollPosition > 10);
      
      // Update active section based on scroll position
      const sections = navItems.map(item => item.id);
      
      for (const section of sections.reverse()) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [navItems]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: 'smooth'
      });
      setActiveSection(sectionId);
      setMobileMenuOpen(false);
    }
  };

  return (
    <header className={cn(
      'fixed top-0 left-0 w-full z-50 transition-all duration-300',
      scrolled ? 'py-4 bg-background/90 backdrop-blur-lg shadow-md' : 'py-6'
    )}>
      <div className="container flex items-center justify-between">
        <div className="font-bold text-xl">
          <span className="text-primary">R</span>S
        </div>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-2">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={cn(
                'nav-link',
                activeSection === item.id ? 'active-nav' : ''
              )}
            >
              {item.label}
            </button>
          ))}
          <a 
            href="/rishabh-srivastava-resume.pdf" 
            download
            className="ml-4 bg-primary hover:bg-primary/90 text-white px-4 py-2 rounded-md transition-colors"
          >
            Resume
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-foreground"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <nav className="md:hidden bg-card py-4 px-6 border-t border-border">
          <div className="flex flex-col space-y-3">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={cn(
                  'text-left py-2',
                  activeSection === item.id ? 'text-primary' : ''
                )}
              >
                {item.label}
              </button>
            ))}
            <a 
              href="/rishabh-srivastava-resume.pdf" 
              download
              className="bg-primary hover:bg-primary/90 text-white px-4 py-2 rounded-md transition-colors text-center mt-2"
            >
              Resume
            </a>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Navbar;
