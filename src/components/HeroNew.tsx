"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import CTAButton from "@/components/CTAButton";
import { ScrollReveal, FloatingElement } from "@/components/AnimationComponents";

export default function Hero() {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 800], [0, -80]); // Increased scroll distance
  const y2 = useTransform(scrollY, [0, 1000], [0, -120]); // Increased scroll distance
  const opacity = useTransform(scrollY, [0, 600], [1, 0]); // Increased fade distance
  const scale = useTransform(scrollY, [0, 500], [1, 0.95]); // Increased scale distance

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
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden">
      {/* Sophisticated background with parallax */}
      <motion.div 
        className="absolute inset-0 bg-gradient-to-br from-white via-gray-50/50 to-primary-50/30 dark:from-gray-950 dark:via-gray-900/50 dark:to-primary-950/30"
        style={{ y: y1 }}
      />
      
      {/* Animated gradient mesh */}
      <motion.div 
        className="absolute inset-0 opacity-60 dark:opacity-40"
        style={{ y: y2, opacity }}
      >
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-primary-400/20 to-purple-400/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-purple-400/20 to-primary-400/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
        <div className="absolute top-3/4 left-1/2 w-64 h-64 bg-gradient-to-r from-primary-300/20 to-blue-400/20 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '4s' }} />
      </motion.div>

      {/* Floating elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <FloatingElement duration={8} intensity={15} className="absolute top-20 left-10">
          <div className="w-6 h-6 bg-gradient-to-r from-primary-500 to-purple-500 rounded-full opacity-20" />
        </FloatingElement>
        <FloatingElement duration={12} intensity={20} className="absolute top-32 right-16">
          <div className="w-4 h-4 bg-gradient-to-r from-purple-500 to-primary-500 rounded-full opacity-30" />
        </FloatingElement>
        <FloatingElement duration={10} intensity={12} className="absolute bottom-20 left-20">
          <div className="w-8 h-8 bg-gradient-to-r from-primary-400 to-blue-400 rounded-full opacity-25" />
        </FloatingElement>
      </div>

      {/* Grid pattern */}
      <motion.div 
        className="absolute inset-0 opacity-[0.02] dark:opacity-[0.05]"
        style={{ 
          backgroundImage: `
            linear-gradient(rgba(24, 0, 173, 0.5) 1px, transparent 1px),
            linear-gradient(90deg, rgba(24, 0, 173, 0.5) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px',
          y: y1
        }}
      />

      {/* Main content */}
      <motion.div 
        className="relative z-10 w-full max-w-7xl mx-auto px-6 text-center space-y-16 pt-32 pb-8"
        style={{ opacity, scale }}
      >
        {/* Badge */}
        <ScrollReveal variant="scaleIn" delay={0.2}>
          <motion.div
            className="inline-flex items-center gap-3 px-6 py-3 bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl rounded-full text-sm text-primary-700 dark:text-primary-300 font-medium border border-primary-200 dark:border-primary-800 shadow-lg"
            whileHover={{ scale: 1.05, boxShadow: "0 8px 32px rgba(24, 0, 173, 0.15)" }}
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            >
              <Sparkles className="w-4 h-4" />
            </motion.div>
            Transforming businesses with AI innovation
            <motion.div
              className="w-2 h-2 bg-primary-500 rounded-full"
              animate={{ scale: [1, 1.3, 1], opacity: [1, 0.7, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </motion.div>
        </ScrollReveal>
        
        {/* Main heading with sophisticated typography */}
        <div className="space-y-6">
          <ScrollReveal variant="fadeUp" delay={0.4}>
            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl xl:text-8xl leading-[0.9] font-bold tracking-tight">
              <span className="block text-gray-900 dark:text-white mb-2">
                The Future of
              </span>
              <motion.span 
                className="block bg-gradient-to-r from-primary-600 via-primary-500 to-purple-600 bg-clip-text text-transparent"
                animate={{ 
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] 
                }}
                transition={{ 
                  duration: 8, 
                  repeat: Infinity, 
                  ease: "easeInOut" 
                }}
                style={{ backgroundSize: "200% 200%" }}
              >
                AI Innovation
              </motion.span>
            </h1>
          </ScrollReveal>
          
          <ScrollReveal variant="fadeUp" delay={0.6}>
            <p className="text-xl md:text-2xl lg:text-3xl text-gray-600 dark:text-gray-300 max-w-5xl mx-auto leading-relaxed font-light">
              Build intelligent systems that adapt, learn, and scale with your business. 
              From AI-powered automation to digital transformation — we turn complex challenges into 
              <motion.span 
                className="text-primary-600 dark:text-primary-400 font-medium"
                whileHover={{ scale: 1.05 }}
              >
                {" "}competitive advantages
              </motion.span>
              .
            </p>
          </ScrollReveal>
        </div>

        {/* Enhanced CTA section */}
        <ScrollReveal variant="fadeUp" delay={0.8}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <motion.div
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 20px 40px rgba(24, 0, 173, 0.2)"
              }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 400, damping: 25 }}
            >
              <CTAButton 
                label="Start Your Transformation" 
                onClick={scrollToContact}
                size="lg"
              />
            </motion.div>
            
            <motion.button
              onClick={scrollToServices}
              className="group flex items-center gap-3 px-6 py-4 text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-all duration-300 text-lg font-medium bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-200 dark:border-gray-700 hover:border-primary-300 dark:hover:border-primary-600"
              whileHover={{ 
                x: 5,
                boxShadow: "0 8px 25px rgba(0, 0, 0, 0.1)"
              }}
              whileTap={{ scale: 0.98 }}
            >
              Explore Solutions
              <motion.div
                className="text-primary-500"
                animate={{ x: [0, 4, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              >
                <ArrowRight className="w-5 h-5" />
              </motion.div>
            </motion.button>
          </div>
        </ScrollReveal>
      </motion.div>
    </section>
  );
}