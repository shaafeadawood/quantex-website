"use client";

import { motion } from "framer-motion";
import { Target, Eye, Heart } from "lucide-react";
import { ScrollReveal, StaggerGrid, StaggerItem, HoverCard } from "@/components/AnimationComponents";

const values = [
  { 
    title: "Mission", 
    desc: "Democratize AI technology to solve complex business challenges and unlock unprecedented growth opportunities",
    icon: Target,
    gradient: "from-primary-600 to-primary-400"
  },
  { 
    title: "Vision", 
    desc: "A world where intelligent systems seamlessly enhance human potential and drive sustainable innovation",
    icon: Eye,
    gradient: "from-primary-500 to-purple-500"
  },
  { 
    title: "Values", 
    desc: "Innovation, integrity, and impact-driven solutions that create lasting value for our clients and society",
    icon: Heart,
    gradient: "from-purple-500 to-primary-600"
  }
];

export default function AboutSection() {
  return (
    <section id="about" className="py-8 lg:py-12 bg-gray-50 dark:bg-gray-900 transition-colors duration-300 relative">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-50/30 to-purple-50/30 dark:from-primary-950/30 dark:to-purple-950/30" />
      
      <div className="max-w-6xl mx-auto px-6 relative">
        <div className="text-center space-y-16">
          {/* Section badge */}
          <ScrollReveal variant="scaleIn" delay={0.2}>
            <motion.div
              className="inline-flex items-center gap-2 px-4 py-2 bg-primary-100 dark:bg-primary-900/30 backdrop-blur-sm border border-primary-200 dark:border-primary-800 rounded-full text-sm text-primary-700 dark:text-primary-300 font-medium"
              whileHover={{ scale: 1.05 }}
            >
              <span className="w-2 h-2 bg-primary-600 rounded-full animate-pulse"></span>
              About Quantex
            </motion.div>
          </ScrollReveal>

          {/* Enhanced heading with animated gradient */}
          <div className="space-y-6">
            <ScrollReveal variant="fadeUp" delay={0.4}>
              <h2 className="font-display text-4xl lg:text-5xl xl:text-6xl text-gray-900 dark:text-white leading-tight">
                Pioneering the Future of{" "}
                <motion.span 
                  className="bg-gradient-to-r from-primary-600 via-primary-500 to-purple-600 bg-clip-text text-transparent"
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
              </h2>
            </ScrollReveal>

            <ScrollReveal variant="fadeUp" delay={0.6}>
              <p className="text-xl lg:text-2xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed">
                We&apos;re transforming how businesses leverage artificial intelligence, 
                creating intelligent software systems that empower organizations to achieve 
                breakthrough performance and sustainable competitive advantages.
              </p>
            </ScrollReveal>
          </div>
          
          {/* Enhanced value cards with better animations */}
          <StaggerGrid className="grid md:grid-cols-3 gap-8" staggerDelay={0.2}>
            {values.map((item) => (
              <StaggerItem key={item.title} variant="scaleIn">
                <HoverCard className="h-full" glow={true}>
                  <div className="relative bg-white dark:bg-gray-800 backdrop-blur-sm border border-gray-200 dark:border-gray-700 rounded-2xl p-8 overflow-hidden">
                    {/* Animated background gradient */}
                    <motion.div
                      className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
                      whileHover={{ opacity: 0.05 }}
                    />
                    
                    {/* Floating icon with enhanced animation */}
                    <motion.div
                      className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${item.gradient} rounded-2xl shadow-lg mb-6 relative overflow-hidden`}
                      whileHover={{ 
                        scale: 1.1, 
                        rotate: [0, -3, 3, 0],
                        boxShadow: "0 20px 25px -5px rgba(24, 0, 173, 0.25)"
                      }}
                      transition={{ duration: 0.4 }}
                    >
                      {/* Shimmer effect */}
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12"
                        initial={{ x: "-100%" }}
                        whileHover={{ x: "100%" }}
                        transition={{ duration: 0.6, ease: "easeInOut" }}
                      />
                      <item.icon className="w-8 h-8 text-white relative z-10" strokeWidth={1.5} />
                    </motion.div>

                    {/* Content with staggered animations */}
                    <div className="relative space-y-4">
                      <motion.h3 
                        className="font-display text-2xl font-bold text-gray-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors duration-300"
                        whileHover={{ scale: 1.02 }}
                      >
                        {item.title}
                      </motion.h3>
                      
                      <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>

                    {/* Hover indicator */}
                    <motion.div
                      className="absolute bottom-4 right-4 w-6 h-6 rounded-full bg-primary-100 dark:bg-primary-900/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300"
                      whileHover={{ scale: 1.2 }}
                    >
                      <motion.span
                        className="w-2 h-2 bg-primary-600 rounded-full"
                        animate={{ 
                          scale: [1, 1.2, 1],
                          opacity: [0.5, 1, 0.5]
                        }}
                        transition={{ 
                          duration: 2, 
                          repeat: Infinity,
                          ease: "easeInOut"
                        }}
                      />
                    </motion.div>
                  </div>
                </HoverCard>
              </StaggerItem>
            ))}
          </StaggerGrid>

          {/* Enhanced stats section */}
          <ScrollReveal variant="fadeUp" delay={1}>
            <StaggerGrid className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-16 border-t border-gray-200 dark:border-gray-700" staggerDelay={0.1}>
              {[
                { number: "100+", label: "AI Solutions Deployed" },
                { number: "50+", label: "Enterprise Clients" },
                { number: "99.9%", label: "System Uptime" },
                { number: "24/7", label: "Expert Support" }
              ].map((stat) => (
                <StaggerItem key={stat.label} variant="scaleIn">
                  <motion.div
                    className="text-center group cursor-default"
                    whileHover={{ y: -5 }}
                    transition={{ type: "spring", stiffness: 300, damping: 25 }}
                  >
                    <motion.div 
                      className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-primary-600 to-primary-400 bg-clip-text text-transparent mb-2"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.2 }}
                    >
                      {stat.number}
                    </motion.div>
                    <div className="text-sm text-gray-500 dark:text-gray-400 group-hover:text-gray-700 dark:group-hover:text-gray-300 transition-colors duration-200">
                      {stat.label}
                    </div>
                  </motion.div>
                </StaggerItem>
              ))}
            </StaggerGrid>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}