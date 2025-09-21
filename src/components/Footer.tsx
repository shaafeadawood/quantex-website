"use client";

import { motion } from "framer-motion";
import { Linkedin, Instagram, Facebook, Mail, Heart } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";

interface FooterLink {
  name: string;
  href: string;
  label?: string;
  external?: boolean;
}

export default function Footer() {
  const pathname = usePathname();
  const router = useRouter();
  const footerLinks: Record<string, FooterLink[]> = {
    "Company": [
      { name: "About", href: "#about" },
      { name: "Careers", href: "#careers" },
      { name: "Contact", href: "#contact" }
    ],
    "Services": [
      { name: "AI Innovation", href: "#services" },
      { name: "Intelligent Systems", href: "#services" },
      { name: "Consulting", href: "#services" }
    ],
    "Resources": [
      { name: "Case Studies", href: "#case-studies" },
      { name: "Blog", href: "#testimonials", label: "Blog & Insights" },
      { name: "Support", href: "#contact", label: "Get Support" }
    ],
    "Legal": [
      { name: "Privacy Policy", href: "/privacy" },
      { name: "Terms", href: "/terms" },
      { name: "Security & Trust", href: "/security" }
    ]
  };

  const isHashLink = (href: string) => href.startsWith('#');
  const handleHashNav = (href: string) => {
    if (pathname !== "/") {
      router.push(`/${href}`);
      return;
    }
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
    else router.push(href);
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
    <footer className="bg-white dark:bg-gray-950 border-t border-gray-200 dark:border-gray-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-6 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2 space-y-6">
            <motion.div 
              className="font-display text-2xl bg-gradient-to-r from-primary-600 to-primary-400 bg-clip-text text-transparent"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 400, damping: 25 }}
            >
              Quantex
            </motion.div>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed max-w-md">
              Pioneering AI innovation and intelligent systems to transform businesses and unlock human potential through cutting-edge technology.
            </p>
            <div className="space-y-2">
              <div className="text-sm text-gray-600 dark:text-gray-400">
                Get in touch:
              </div>
              <motion.a
                href="mailto:contact.quantex@gmail.com"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center gap-2 text-primary-600 hover:text-primary-500 dark:text-primary-400 dark:hover:text-primary-300 transition-colors duration-200 font-medium"
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
                  whileHover={{ y: -3, scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className="w-10 h-10 bg-gray-100 hover:bg-primary-100 dark:bg-gray-800 dark:hover:bg-primary-900/30 rounded-xl flex items-center justify-center text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-all duration-300 group shadow-sm hover:shadow-md hover:shadow-primary-500/25"
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
              <h3 className="font-display text-gray-900 dark:text-white font-semibold">{category}</h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.name}>
                    {isHashLink(link.href) ? (
                      <motion.button
                        onClick={() => handleHashNav(link.href)}
                        whileHover={{ x: 2 }}
                        className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors text-sm text-left hover:underline decoration-primary-500/50 underline-offset-2"
                      >
                        {link.label || link.name}
                      </motion.button>
                    ) : (
                      <motion.a
                        href={link.href}
                        whileHover={{ x: 2 }}
                        className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors text-sm text-left hover:underline decoration-primary-500/50 underline-offset-2"
                      >
                        {link.label || link.name}
                      </motion.a>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-200 dark:border-gray-800 mt-12 pt-8 flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0">
          <div className="text-sm text-gray-600 dark:text-gray-400">
            © {new Date().getFullYear()} Quantex Ltd. All rights reserved.
          </div>
          <div className="flex items-center space-x-6 text-sm text-gray-600 dark:text-gray-400">
            <motion.span 
              className="flex items-center space-x-1"
              whileHover={{ scale: 1.02 }}
            >
              <span>Built with</span>
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              >
                <Heart className="w-4 h-4 text-red-500" strokeWidth={1.5} fill="currentColor" />
              </motion.div>
              <span>using Next.js & AI</span>
            </motion.span>
          </div>
        </div>
      </div>
    </footer>
  );
}