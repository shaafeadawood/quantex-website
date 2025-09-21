"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Cloud, Zap, Target, GraduationCap } from "lucide-react";

const services = [
  {
    title: "AI Strategy & Consulting",
    description: "Transform your business vision into actionable AI roadmaps with expert strategic guidance and implementation planning.",
    icon: Target,
    features: ["Strategic Planning", "Technology Assessment", "ROI Analysis", "Implementation Roadmap"],
    gradient: "from-brand-primary to-brand-accent"
  },
  {
    title: "Custom AI Development",
    description: "Build intelligent systems tailored to your unique challenges with cutting-edge machine learning and automation.",
    icon: Zap,
    features: ["Machine Learning Models", "Process Automation", "Predictive Analytics", "Custom Algorithms"],
    gradient: "from-brand-accent to-brand-secondary"
  },
  {
    title: "Digital Transformation",
    description: "Modernize your operations with intelligent workflows, cloud integration, and scalable technology solutions.",
    icon: Cloud,
    features: ["Cloud Migration", "Workflow Optimization", "System Integration", "Performance Monitoring"],
    gradient: "from-brand-secondary to-brand-primary"
  },
  {
    title: "AI Training & Support",
    description: "Empower your team with comprehensive AI knowledge and ongoing technical support for sustained success.",
    icon: GraduationCap,
    features: ["Team Training", "Best Practices", "24/7 Support", "Knowledge Transfer"],
    gradient: "from-brand-primary via-brand-accent to-brand-secondary"
  }
];

export default function ServicesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="services" className="py-20 lg:py-32 bg-background-subtle">
      <div className="w-full max-w-7xl mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center space-y-6 mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-brand-primary/10 backdrop-blur-sm border border-brand-primary/20 rounded-full text-sm text-brand-primary font-medium"
          >
            <span className="w-2 h-2 bg-brand-primary rounded-full"></span>
            Our Services
          </motion.div>
          
          <h2 className="font-display text-4xl lg:text-5xl xl:text-6xl text-text-primary leading-tight">
            Intelligent Solutions for{" "}
            <span className="bg-gradient-to-r from-brand-primary via-brand-accent to-brand-secondary bg-clip-text text-transparent">
              Every Challenge
            </span>
          </h2>
          
          <p className="text-lg lg:text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
            From strategic planning to hands-on implementation, we deliver comprehensive AI solutions 
            that drive measurable business outcomes and sustainable growth.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.8, delay: 0.4 + index * 0.2 }}
              className="group"
            >
              <div className="relative h-full p-8 bg-background-card border border-border-subtle rounded-2xl transition-all duration-500 hover:border-brand-primary/30 hover:shadow-xl hover:shadow-brand-primary/10 hover:-translate-y-2">
                {/* Gradient overlay on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-500`}></div>
                
                {/* Icon with animated background */}
                <div className="relative mb-6">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${service.gradient} rounded-2xl shadow-lg`}
                  >
                    <service.icon className="w-8 h-8 text-white" strokeWidth={1.5} />
                  </motion.div>
                </div>

                <div className="relative space-y-4">
                  <h3 className="text-2xl font-bold text-text-primary group-hover:text-brand-primary transition-colors duration-300">
                    {service.title}
                  </h3>
                  
                  <p className="text-text-secondary leading-relaxed">
                    {service.description}
                  </p>

                  <div className="space-y-3">
                    <h4 className="text-sm font-semibold text-text-accent uppercase tracking-wide">
                      Key Features
                    </h4>
                    <ul className="grid grid-cols-2 gap-2">
                      {service.features.map((feature, featureIndex) => (
                        <motion.li
                          key={feature}
                          initial={{ opacity: 0, x: -20 }}
                          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                          transition={{ duration: 0.5, delay: 0.8 + index * 0.2 + featureIndex * 0.1 }}
                          className="flex items-center gap-3 text-sm text-text-muted"
                        >
                          <div className="w-1.5 h-1.5 bg-brand-primary rounded-full flex-shrink-0"></div>
                          {feature}
                        </motion.li>
                      ))}
                    </ul>
                  </div>

                  {/* Hover arrow */}
                  <motion.div
                    initial={{ opacity: 0, x: -10 }}
                    whileHover={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3 }}
                    className="flex items-center gap-2 text-brand-primary font-medium pt-4 opacity-0 group-hover:opacity-100"
                  >
                    Learn More
                    <motion.span
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      →
                    </motion.span>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="text-center mt-16"
        >
          <div className="inline-flex flex-col sm:flex-row items-center gap-6 p-8 bg-gradient-to-r from-brand-primary/5 via-brand-accent/5 to-brand-secondary/5 border border-brand-primary/20 rounded-2xl backdrop-blur-sm">
            <div className="space-y-2">
              <h3 className="text-xl font-bold text-text-primary">
                Ready to transform your business?
              </h3>
              <p className="text-text-secondary">
                Let&apos;s discuss how our AI solutions can drive your success.
              </p>
            </div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                const element = document.querySelector('#contact');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="px-8 py-3 bg-gradient-to-r from-brand-primary to-brand-accent text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-brand-primary/25 transition-all duration-300 whitespace-nowrap"
            >
              Get Started Today
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}