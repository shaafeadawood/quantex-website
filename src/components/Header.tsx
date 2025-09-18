"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import CTAButton from "@/components/CTAButton";

export default function Header() {
  const [activeSection, setActiveSection] = useState('home');

  const navItems = [
    { label: "About", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Case Studies", href: "#case-studies" },
    { label: "Testimonials", href: "#testimonials" },
    { label: "Careers", href: "#careers" },
    { label: "Contact", href: "#contact" },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'services', 'case-studies', 'testimonials', 'careers', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetBottom = offsetTop + element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 border-b border-border-subtle backdrop-blur-xl supports-[backdrop-filter]:bg-background/80"
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Link 
            href="#home" 
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('#home');
            }}
            className="flex items-center space-x-3 group"
          >
            {/* Logo/Lettermark */}
            <div className="w-10 h-10 bg-gradient-to-br from-brand-primary via-brand-accent to-brand-secondary rounded-xl flex items-center justify-center shadow-lg shadow-brand-primary/25 group-hover:shadow-brand-primary/40 transition-all duration-300">
              <span className="text-white font-bold text-lg">Q</span>
            </div>
            <span className="font-display text-xl font-semibold bg-gradient-to-r from-brand-primary to-brand-accent bg-clip-text text-transparent group-hover:from-brand-accent group-hover:to-brand-secondary transition-all duration-300">
              Quantex
            </span>
          </Link>
        </motion.div>
        
        <nav className="hidden lg:flex items-center gap-8">
          {navItems.map((item, index) => {
            const sectionId = item.href.replace('#', '');
            const isActive = activeSection === sectionId;
            
            return (
              <motion.button
                key={item.label}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                onClick={() => scrollToSection(item.href)}
                className={`text-sm font-medium transition-all duration-300 relative group ${
                  isActive 
                    ? 'text-brand-primary' 
                    : 'text-text-muted hover:text-text-primary'
                }`}
              >
                {item.label}
                <span className={`absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-brand-primary to-brand-accent transition-all duration-300 ${
                  isActive ? 'w-full' : 'w-0 group-hover:w-full'
                }`} />
              </motion.button>
            );
          })}
        </nav>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex items-center gap-4"
        >
          <div className="hidden md:block">
            <CTAButton 
              label="Get Started" 
              onClick={() => scrollToSection('#contact')}
            />
          </div>
        </motion.div>
      </div>
    </motion.header>
  );
}
