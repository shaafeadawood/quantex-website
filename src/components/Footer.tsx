"use client";

import { motion } from "framer-motion";
import { Linkedin, Twitter, Github, Mail, Heart } from "lucide-react";

export default function Footer() {
  const footerLinks = {
    "Company": ["About", "Careers", "News", "Contact"],
    "Services": ["AI Innovation", "Intelligent Systems", "Digital Transformation", "Consulting"],
    "Resources": ["Case Studies", "Blog", "Documentation", "Support"],
    "Legal": ["Privacy Policy", "Terms of Service", "Cookie Policy", "Security"]
  };

  const socialLinks = [
    { name: "LinkedIn", icon: Linkedin },
    { name: "Twitter", icon: Twitter },
    { name: "GitHub", icon: Github },
    { name: "Email", icon: Mail }
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
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <motion.button
                  key={social.name}
                  whileHover={{ y: -2, scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className="w-10 h-10 bg-white/5 hover:bg-brand-primary/20 rounded-lg flex items-center justify-center text-text-muted hover:text-brand-primary transition-colors"
                  aria-label={social.name}
                >
                  <social.icon className="w-5 h-5" strokeWidth={1.5} />
                </motion.button>
              ))}
            </div>
          </div>

          {/* Links Sections */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category} className="space-y-4">
              <h3 className="font-display text-text-primary font-semibold">{category}</h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <button className="text-text-muted hover:text-text-primary transition-colors text-sm">
                      {link}
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
