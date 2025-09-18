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
    <section id="home" className="relative min-h-screen flex flex-col justify-center overflow-hidden pb-32">
      {/* Advanced animated background */}
      <div className="absolute inset-0 bg-gradient-mesh opacity-30"></div>
      <div className="absolute inset-0 bg-hero-gradient"></div>
      
      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand-primary/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-brand-accent/10 rounded-full blur-3xl animate-float-delayed"></div>
        <div className="absolute top-3/4 left-1/2 w-64 h-64 bg-brand-secondary/10 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute top-1/2 right-1/6 w-48 h-48 bg-brand-cyan/10 rounded-full blur-2xl animate-float" style={{ animationDelay: '3s' }}></div>
        <div className="absolute bottom-1/6 left-1/6 w-32 h-32 bg-brand-purple/10 rounded-full blur-xl animate-pulse-slow" style={{ animationDelay: '1s' }}></div>
      </div>

      {/* Grid overlay */}
      <div 
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `
            linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px'
        }}
      ></div>

      {/* Main content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 text-center space-y-12 pt-24 flex-1 flex flex-col justify-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="space-y-8"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="inline-flex items-center gap-2 px-6 py-3 glass rounded-full text-sm text-brand-primary font-medium border border-brand-primary/20"
          >
            <div className="relative">
              <span className="w-2 h-2 bg-brand-primary rounded-full animate-pulse block"></span>
              <span className="absolute inset-0 w-2 h-2 bg-brand-primary rounded-full animate-ping"></span>
            </div>
            Transforming businesses with AI innovation
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
            className="font-display text-5xl lg:text-7xl xl:text-8xl leading-tight font-bold text-balance"
          >
            <span className="block text-text-primary mb-4">
              The Future of
            </span>
            <span className="gradient-text block animate-gradient-x">
              AI Innovation
            </span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }}
            className="text-xl lg:text-2xl text-text-secondary max-w-4xl mx-auto leading-relaxed text-balance"
          >
            Build intelligent systems that adapt, learn, and scale with your business. 
            From AI-powered automation to digital transformation — we turn complex challenges into competitive advantages.
          </motion.p>
        </motion.div>

        {/* Enhanced CTA section */}
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
            className="group flex items-center gap-3 px-6 py-3 text-text-muted hover:text-text-primary transition-all duration-300 text-lg font-medium glass rounded-xl border border-white/10 hover:border-brand-primary/30"
          >
            Explore Solutions
            <motion.span 
              className="transform group-hover:translate-x-1 transition-transform"
              animate={{ x: [0, 3, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              →
            </motion.span>
          </motion.button>
        </motion.div>

        {/* Enhanced stats section with better spacing */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut", delay: 1.2 }}
          className="pt-16 pb-32"
        >
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 max-w-6xl mx-auto">
            {[
              { value: "500+", label: "Projects Delivered", icon: Rocket, color: "from-brand-primary to-brand-accent" },
              { value: "98%", label: "Client Satisfaction", icon: Star, color: "from-brand-accent to-brand-secondary" },
              { value: "24/7", label: "Expert Support", icon: LifeBuoy, color: "from-brand-secondary to-brand-cyan" },
              { value: "50+", label: "AI Models Deployed", icon: TrendingUp, color: "from-brand-cyan to-brand-primary" }
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ 
                  duration: 0.6, 
                  delay: 1.4 + index * 0.1,
                  type: "spring",
                  stiffness: 200,
                  damping: 20
                }}
                whileHover={{ 
                  scale: 1.05,
                  y: -6,
                  transition: { duration: 0.2 }
                }}
                className="relative group"
              >
                <div className="glass rounded-2xl p-6 lg:p-8 border border-white/10 hover:border-brand-primary/30 transition-all duration-500 shadow-elegant hover:shadow-glow text-center">
                  {/* Icon with gradient background */}
                  <div className="flex justify-center mb-4">
                    <motion.div 
                      className={`p-3 lg:p-4 rounded-xl bg-gradient-to-br ${stat.color} shadow-lg group-hover:shadow-glow transition-all duration-300`}
                      whileHover={{ rotate: [0, -5, 5, 0], scale: 1.1 }}
                      transition={{ duration: 0.5 }}
                    >
                      <stat.icon className="w-6 h-6 lg:w-7 lg:h-7 text-white" strokeWidth={1.5} />
                    </motion.div>
                  </div>
                  
                  {/* Value with counter animation */}
                  <motion.div 
                    className="text-3xl lg:text-4xl xl:text-5xl font-bold bg-gradient-to-br from-text-primary to-text-secondary bg-clip-text text-transparent mb-2"
                    initial={{ scale: 0.5 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 1.6 + index * 0.1, type: "spring", stiffness: 200 }}
                  >
                    {stat.value}
                  </motion.div>
                  
                  {/* Label */}
                  <div className="text-sm lg:text-base text-text-muted font-semibold leading-tight group-hover:text-brand-primary transition-colors duration-300">
                    {stat.label}
                  </div>
                  
                  {/* Hover glow effect */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br opacity-0 group-hover:opacity-5 transition-opacity duration-500 from-brand-primary to-brand-accent"></div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Professional scroll indicator - positioned at bottom */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
      >
        <motion.button
          onClick={() => {
            const element = document.querySelector('#about');
            if (element) {
              element.scrollIntoView({ behavior: 'smooth' });
            }
          }}
          className="group flex flex-col items-center gap-3 p-4 hover:bg-brand-primary/5 rounded-2xl transition-all duration-300"
          whileHover={{ y: -2 }}
          whileTap={{ y: 0 }}
        >
          <span className="text-sm font-medium text-text-muted group-hover:text-brand-primary transition-colors duration-300 tracking-wide">
            Discover More
          </span>
          
          <motion.div className="relative">
            {/* Main scroll indicator */}
            <motion.div
              className="w-6 h-10 border-2 border-brand-primary/40 group-hover:border-brand-primary rounded-full flex justify-center relative overflow-hidden transition-colors duration-300"
              whileHover={{ scale: 1.1 }}
            >
              <motion.div 
                className="w-1.5 h-3 bg-brand-primary rounded-full mt-2"
                animate={{ 
                  y: [0, 12, 0],
                  opacity: [1, 0.3, 1]
                }}
                transition={{ 
                  duration: 2, 
                  repeat: Infinity, 
                  ease: "easeInOut"
                }}
              />
            </motion.div>
            
            {/* Pulse rings */}
            <motion.div
              className="absolute inset-0 w-6 h-10 border-2 border-brand-primary/20 rounded-full"
              animate={{ 
                scale: [1, 1.3, 1],
                opacity: [0.5, 0, 0.5]
              }}
              transition={{ 
                duration: 2, 
                repeat: Infinity, 
                ease: "easeOut",
                delay: 0.5
              }}
            />
            
            <motion.div
              className="absolute inset-0 w-6 h-10 border border-brand-primary/10 rounded-full"
              animate={{ 
                scale: [1, 1.6, 1],
                opacity: [0.3, 0, 0.3]
              }}
              transition={{ 
                duration: 2, 
                repeat: Infinity, 
                ease: "easeOut",
                delay: 1
              }}
            />
          </motion.div>
        </motion.button>
      </motion.div>
    </section>
  );
}