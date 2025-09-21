"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { motion, useScroll, useTransform } from "framer-motion";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import CTAButton from "@/components/CTAButton";
import { SimpleThemeToggle } from "@/components/ThemeToggle";

export default function Header() {
  const pathname = usePathname();
  const router = useRouter();
  const [activeSection, setActiveSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  
  const { scrollYProgress } = useScroll();
  const headerBackground = useTransform(
    scrollYProgress,
    [0, 0.1],
    ["rgba(var(--background), 0.8)", "rgba(var(--background), 0.95)"]
  );
  // Keep the logo full-size on scroll for maximum readability
  const logoScale = useTransform(scrollYProgress, [0, 0.1], [1, 1]);

  const navItems = [
    { label: "About", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Case Studies", href: "#case-studies" },
    { label: "Testimonials", href: "#testimonials" },
    { label: "Careers", href: "#careers" },
    { label: "Contact", href: "#contact" },
  ];

  const scrollToSection = (href: string) => {
    // If we are not on the homepage, navigate to '/#section' first.
    if (pathname !== "/") {
      router.push(`/${href}`); // href already includes '#'
      setIsMenuOpen(false);
      return;
    }

    // On the homepage, smooth-scroll to the target element.
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    } else {
      // Fallback: ensure hash updates to allow native jump if element renders later.
      router.push(href);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 50);
      
      const sections = ['home', 'about', 'services', 'case-studies', 'testimonials', 'careers', 'contact'];
      const scrollPos = scrollPosition + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetBottom = offsetTop + element.offsetHeight;
          
          if (scrollPos >= offsetTop && scrollPos < offsetBottom) {
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
    <>
      {/* Scroll progress indicator */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-primary origin-left z-50"
        style={{ scaleX: scrollYProgress }}
      />
      
      <motion.header 
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        style={{ backgroundColor: headerBackground }}
        className={`
          fixed top-0 left-0 right-0 z-40 border-b backdrop-blur-xl
          transition-all duration-300 pt-1
          ${isScrolled 
            ? 'border-border-subtle shadow-lg shadow-black/5' 
            : 'border-transparent'
          }
        `}
      >
        <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            style={{ scale: logoScale }}
          >
            <Link
              href="/"
              aria-label="Go to homepage"
              onClick={(e) => {
                // If already on the homepage, smooth-scroll to #home. Otherwise, jump to /#home.
                if (pathname === "/") {
                  e.preventDefault();
                  scrollToSection('#home');
                } else {
                  e.preventDefault();
                  router.push('/#home');
                }
              }}
              className="flex items-center gap-3 shrink-0"
            >
              <Image
                src="/logo (3).png"
                alt="Quantex logo"
                width={400}
                height={120}
                priority
                sizes="(min-width: 1536px) 168px, (min-width: 1024px) 144px, 120px"
                className="block h-10 lg:h-12 2xl:h-14 w-auto object-contain transition-transform duration-300 hover:scale-105"
              />
            </Link>
          </motion.div>
          
          {/* Desktop Navigation */}
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
                  whileHover={{ y: -2 }}
                  whileTap={{ y: 0 }}
                  className={`
                    text-sm font-medium relative group px-3 py-2 rounded-lg
                    transition-all duration-300 transform-gpu
                    ${isActive 
                      ? 'text-primary-900 bg-gradient-surface' 
                      : 'text-text-muted hover:text-text-primary hover:bg-background-card'
                    }
                  `}
                >
                  {item.label}
                  
                  {/* Enhanced active indicator */}
                  <motion.span 
                    className={`
                      absolute -bottom-1 left-1/2 h-0.5 bg-gradient-primary rounded-full
                      ${isActive ? 'w-6' : 'w-0 group-hover:w-6'}
                    `}
                    style={{ x: '-50%' }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  />
                  
                  {/* Hover glow effect */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-surface rounded-lg opacity-0"
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.2 }}
                  />
                </motion.button>
              );
            })}
          </nav>

          {/* Right side actions */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex items-center gap-4"
          >
            {/* Theme Toggle */}
            <SimpleThemeToggle />
            
            {/* Desktop CTA */}
            <div className="hidden md:block">
              <CTAButton 
                label="Get Started" 
                onClick={() => scrollToSection('#contact')}
                size="md"
              />
            </div>

            {/* Mobile menu button */}
            <motion.button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="lg:hidden p-2 text-text-muted hover:text-text-primary hover:bg-background-card rounded-lg transition-all duration-200"
            >
              <motion.div
                initial={false}
                animate={{ rotate: isMenuOpen ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
              </motion.div>
            </motion.button>
          </motion.div>
        </div>

        {/* Mobile Navigation Menu */}
        <motion.div
          initial={false}
          animate={{ 
            height: isMenuOpen ? "auto" : 0,
            opacity: isMenuOpen ? 1 : 0
          }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="lg:hidden overflow-hidden border-t border-border-subtle bg-background/95 backdrop-blur-xl"
        >
          <div className="px-6 py-4 space-y-2">
            {navItems.map((item, index) => {
              const sectionId = item.href.replace('#', '');
              const isActive = activeSection === sectionId;
              
              return (
                <motion.button
                  key={item.label}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ 
                    opacity: isMenuOpen ? 1 : 0, 
                    x: isMenuOpen ? 0 : -20 
                  }}
                  transition={{ duration: 0.3, delay: isMenuOpen ? index * 0.1 : 0 }}
                  onClick={() => scrollToSection(item.href)}
                  className={`
                    w-full text-left px-4 py-3 rounded-xl font-medium
                    transition-all duration-200 transform-gpu
                    ${isActive 
                      ? 'text-primary-900 bg-gradient-surface border border-primary-900/20' 
                      : 'text-text-muted hover:text-text-primary hover:bg-background-card'
                    }
                  `}
                >
                  {item.label}
                </motion.button>
              );
            })}
            
            {/* Mobile CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ 
                opacity: isMenuOpen ? 1 : 0, 
                y: isMenuOpen ? 0 : 20 
              }}
              transition={{ duration: 0.3, delay: isMenuOpen ? 0.6 : 0 }}
              className="pt-4 border-t border-border-subtle"
            >
              <CTAButton 
                label="Get Started" 
                onClick={() => scrollToSection('#contact')}
                size="md"
                variant="primary"
              />
            </motion.div>
          </div>
        </motion.div>
      </motion.header>
    </>
  );
}