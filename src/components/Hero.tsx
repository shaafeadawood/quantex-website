"use client";

import { motion } from "framer-motion";
import { Rocket, Star, LifeBuoy, TrendingUp } from "lucide-react";
import CTAButton from "@/components/CTAButton";

export default function Hero() {
  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToServices = () => {
    const element = document.querySelector('#services');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-hero-gradient">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand-primary/20 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-brand-accent/20 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-3/4 left-1/2 w-64 h-64 bg-brand-secondary/20 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 text-center space-y-8 pt-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="space-y-6"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-background-card/50 backdrop-blur-sm border border-border-subtle rounded-full text-sm text-text-accent"
          >
            <span className="w-2 h-2 bg-brand-primary rounded-full animate-pulse"></span>
            Transforming businesses with AI innovation
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
            className="font-display text-5xl lg:text-7xl xl:text-8xl leading-tight font-bold"
          >
            <span className="block text-text-primary mb-4">
              The Future of
            </span>
            <span className="bg-gradient-to-r from-brand-primary via-brand-accent to-brand-secondary bg-clip-text text-transparent">
              AI Innovation
            </span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }}
            className="text-xl lg:text-2xl text-text-secondary max-w-4xl mx-auto leading-relaxed"
          >
            Build intelligent systems that adapt, learn, and scale with your business. 
            From AI-powered automation to digital transformation — we turn complex challenges into competitive advantages.
          </motion.p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.8 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6"
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            <CTAButton 
              label="Start Your Transformation" 
              onClick={scrollToContact}
              size="lg"
            />
          </motion.div>
          
          <motion.button
            whileHover={{ x: 5 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            onClick={scrollToServices}
            className="text-text-muted hover:text-text-primary transition-colors flex items-center gap-2 group text-lg"
          >
            Explore Solutions
            <span className="transform group-hover:translate-x-1 transition-transform">→</span>
          </motion.button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut", delay: 1.2 }}
          className="pt-16"
        >
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {[
              { value: "50+", label: "Projects Delivered", icon: Rocket },
              { value: "95%", label: "Client Satisfaction", icon: Star },
              { value: "24/7", label: "Expert Support", icon: LifeBuoy },
              { value: "10x", label: "ROI Improvement", icon: TrendingUp }
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.4 + index * 0.1 }}
                className="space-y-3 p-4 rounded-xl bg-background-card/30 backdrop-blur-sm border border-border-subtle hover:border-border-accent transition-colors"
              >
                <div className="flex justify-center">
                  <stat.icon className="w-8 h-8 text-brand-primary" strokeWidth={1.5} />
                </div>
                <div className="text-3xl lg:text-4xl font-bold text-brand-primary">{stat.value}</div>
                <div className="text-sm text-text-muted">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 2 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-6 h-10 border-2 border-brand-primary/50 rounded-full flex justify-center"
          >
            <div className="w-1 h-3 bg-brand-primary rounded-full mt-2"></div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
