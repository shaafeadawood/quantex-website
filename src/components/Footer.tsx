"use client";

import { motion } from "framer-motion";
import { Linkedin, Instagram, Facebook, Mail, Heart } from "lucide-react";

interface FooterLink {
  name: string;
  href: string;
  label?: string;
  external?: boolean;
}

export default function Footer() {
  const footerLinks: Record<string, FooterLink[]> = {
    "Company": [
      { name: "About", href: "#about" },
      { name: "Careers", href: "#careers" },
      { name: "News", href: "#testimonials", label: "News & Updates" },
      { name: "Contact", href: "#contact" }
    ],
    "Services": [
      { name: "AI Innovation", href: "#services" },
      { name: "Intelligent Systems", href: "#services" },
      { name: "Digital Transformation", href: "#services" },
      { name: "Consulting", href: "#services" }
    ],
    "Resources": [
      { name: "Case Studies", href: "#case-studies" },
      { name: "Blog", href: "#testimonials", label: "Blog & Insights" },
      { name: "Documentation", href: "#services", label: "Technical Docs" },
      { name: "Support", href: "#contact", label: "Get Support" }
    ],
    "Legal": [
      { name: "Privacy Policy", href: "#", external: true },
      { name: "Terms of Service", href: "#", external: true },
      { name: "Cookie Policy", href: "#", external: true },
      { name: "Security", href: "#about", label: "Security & Trust" }
    ]
  };

  const scrollToSection = (href: string) => {
    if (href === "#") return; // For external/placeholder links
    
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const socialLinks = [
    { 
      name: "Instagram", 
      icon: Instagram, 
      url: "https://www.instagram.com/quantex_limited?utm_source=qr&igsh=cms5NmU0ZThycWZl",
      color: "hover:text-pink-500"
    },
    { 
      name: "Facebook", 
      icon: Facebook, 
      url: "https://www.facebook.com/profile.php?id=61580656340438&mibextid=ZbWKwL",
      color: "hover:text-blue-500"
    },
    { 
      name: "LinkedIn", 
      icon: Linkedin, 
      url: "https://www.linkedin.com/company/quantexltd/",
      color: "hover:text-blue-600"
    },
    { 
      name: "Email", 
      icon: Mail, 
      url: "mailto:contact.quantex@gmail.com",
      color: "hover:text-green-500"
    }
  ];

  return (
    <footer className="bg-background-subtle border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-6 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2 space-y-6">
            <div className="font-display text-2xl bg-gradient-to-r from-brand-primary to-brand-secondary bg-clip-text text-transparent">
              Quantex
            </div>
            <p className="text-text-muted leading-relaxed max-w-md">
              Pioneering AI innovation and intelligent systems to transform businesses and unlock human potential through cutting-edge technology.
            </p>
            <div className="space-y-2">
              <div className="text-sm text-text-muted">
                Get in touch:
              </div>
              <motion.a
                href="mailto:contact.quantex@gmail.com"
                whileHover={{ scale: 1.02 }}
                className="inline-flex items-center gap-2 text-brand-primary hover:text-brand-accent transition-colors duration-200 font-medium"
              >
                <Mail className="w-4 h-4" />
                contact.quantex@gmail.com
              </motion.a>
            </div>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -2, scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className={`w-10 h-10 bg-white/5 hover:bg-brand-primary/20 rounded-lg flex items-center justify-center text-text-muted ${social.color} transition-all duration-300 group`}
                  aria-label={`Visit our ${social.name}`}
                >
                  <social.icon className="w-5 h-5 group-hover:scale-110 transition-transform duration-200" strokeWidth={1.5} />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Links Sections */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category} className="space-y-4">
              <h3 className="font-display text-text-primary font-semibold">{category}</h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.name}>
                    <button 
                      onClick={() => scrollToSection(link.href)}
                      className="text-text-muted hover:text-brand-primary transition-colors text-sm text-left hover:underline decoration-brand-primary/50 underline-offset-2"
                      disabled={link.href === "#"}
                    >
                      {link.label || link.name}
                      {link.external && (
                        <span className="text-xs text-text-muted/70 ml-1">(Coming Soon)</span>
                      )}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0">
          <div className="text-sm text-text-muted">
            © {new Date().getFullYear()} Quantex Ltd. All rights reserved.
          </div>
          <div className="flex items-center space-x-6 text-sm text-text-muted">
            <span className="flex items-center space-x-1">
              <span>Built with</span>
              <Heart className="w-4 h-4 text-red-500" strokeWidth={1.5} fill="currentColor" />
              <span>using Next.js & AI</span>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}