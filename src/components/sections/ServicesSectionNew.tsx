"use client";

import { Cloud, Zap, Target, GraduationCap, ArrowRight, Sparkles } from "lucide-react";
import { ScrollReveal, StaggerGrid, HoverCard, FloatingElement } from '../AnimationComponents';

const services = [
  {
    title: "AI Strategy & Consulting",
    description: "Transform your business vision into actionable AI roadmaps with expert strategic guidance and implementation planning that delivers measurable ROI.",
    icon: Target,
    features: ["Strategic Planning", "Technology Assessment", "ROI Analysis", "Implementation Roadmap"],
    gradient: "from-blue-600 via-indigo-600 to-purple-600",
    glowColor: "blue",
    stats: { value: "95%", label: "Success Rate" }
  },
  {
    title: "Custom AI Development",
    description: "Build intelligent systems tailored to your unique challenges with cutting-edge machine learning and automation that scales with your business.",
    icon: Zap,
    features: ["Machine Learning Models", "Process Automation", "Predictive Analytics", "Custom Algorithms"],
    gradient: "from-purple-600 via-pink-600 to-red-600",
    glowColor: "purple",
    stats: { value: "10x", label: "Efficiency Boost" }
  },
  {
    title: "Digital Transformation",
    description: "Modernize your operations with intelligent workflows, cloud integration, and scalable technology solutions for the digital age.",
    icon: Cloud,
    features: ["Cloud Migration", "Workflow Optimization", "System Integration", "Performance Monitoring"],
    gradient: "from-cyan-600 via-blue-600 to-indigo-600",
    glowColor: "cyan",
    stats: { value: "60%", label: "Cost Reduction" }
  },
  {
    title: "AI Training & Support",
    description: "Empower your team with comprehensive AI knowledge and ongoing technical support for sustained success and continuous innovation.",
    icon: GraduationCap,
    features: ["Team Training", "Best Practices", "24/7 Support", "Knowledge Transfer"],
    gradient: "from-green-600 via-emerald-600 to-teal-600",
    glowColor: "green",
    stats: { value: "500+", label: "Teams Trained" }
  }
];

const ServiceCard = ({ service }: { service: typeof services[0] }) => {
  return (
    <HoverCard
      className="relative h-full group cursor-pointer"
      scale={1.02}
    >
      <div className="relative h-full p-8 bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl border border-gray-200/50 dark:border-gray-700/50 rounded-3xl transition-all duration-700 group-hover:border-transparent overflow-hidden">
        
        {/* Animated gradient border on hover */}
        <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700">
          <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} p-[1px] rounded-3xl`}>
            <div className="h-full w-full bg-white dark:bg-gray-900 rounded-3xl" />
          </div>
        </div>

        {/* Background glow effect */}
        <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-5 rounded-3xl transition-opacity duration-700`} />
        
        {/* Floating background elements */}
        <FloatingElement
          className="absolute top-4 right-4 w-20 h-20 opacity-10 group-hover:opacity-20 transition-opacity duration-700"
          intensity={0.5}
        >
          <div className={`w-full h-full bg-gradient-to-br ${service.gradient} rounded-full blur-2xl`} />
        </FloatingElement>

        <div className="relative z-10 h-full flex flex-col">
          {/* Icon with enhanced animations */}
          <div className="mb-6">
            <div className="relative">
              <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} rounded-2xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500`} />
              <div className={`relative inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${service.gradient} rounded-2xl shadow-lg transform transition-transform duration-500 group-hover:rotate-6 group-hover:scale-110`}>
                <service.icon className="w-8 h-8 text-white" strokeWidth={1.5} />
              </div>
            </div>
          </div>

          {/* Stats badge */}
          <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-2 group-hover:translate-y-0">
            <div className="px-3 py-2 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-lg border border-gray-200 dark:border-gray-700 shadow-lg">
              <div className={`text-lg font-bold bg-gradient-to-r ${service.gradient} bg-clip-text text-transparent`}>
                {service.stats.value}
              </div>
              <div className="text-xs text-gray-600 dark:text-gray-400">
                {service.stats.label}
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="flex-1 space-y-4">
            <div className="space-y-3">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-gray-900 group-hover:to-gray-600 dark:group-hover:from-white dark:group-hover:to-gray-300 group-hover:bg-clip-text transition-all duration-500">
                {service.title}
              </h3>
              
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                {service.description}
              </p>
            </div>

            {/* Features with staggered animation */}
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-gray-400 group-hover:text-amber-500 transition-colors duration-300" />
                <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-wide">
                  Key Features
                </h4>
              </div>
              
              <div className="grid grid-cols-2 gap-3">
                {service.features.map((feature, featureIndex) => (
                  <div
                    key={feature}
                    className="flex items-center gap-3 text-sm text-gray-600 dark:text-gray-400 opacity-80 group-hover:opacity-100 transition-all duration-300"
                    style={{ 
                      transitionDelay: `${featureIndex * 100}ms` 
                    }}
                  >
                    <div className={`w-1.5 h-1.5 bg-gradient-to-r ${service.gradient} rounded-full flex-shrink-0 transform scale-75 group-hover:scale-100 transition-transform duration-300`} />
                    <span className="group-hover:text-gray-800 dark:group-hover:text-gray-200 transition-colors duration-300">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Learn more button */}
            <div className="pt-4">
              <div className="flex items-center gap-2 text-gray-400 group-hover:text-gray-800 dark:group-hover:text-white transition-all duration-300 transform translate-x-0 group-hover:translate-x-2">
                <span className="text-sm font-medium">Explore Solution</span>
                <ArrowRight className="w-4 h-4 transform transition-transform duration-300 group-hover:translate-x-1" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </HoverCard>
  );
};

export default function ServicesSectionNew() {
  return (
    <section id="services" className="relative py-16 lg:py-24 overflow-hidden">
      {/* Background with subtle pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800" />
      
      {/* Floating background elements */}
      <FloatingElement
        className="absolute top-20 left-10 w-64 h-64 opacity-30"
        intensity={0.3}
      >
        <div className="w-full h-full bg-gradient-to-br from-blue-400 to-purple-600 rounded-full blur-3xl" />
      </FloatingElement>
      
      <FloatingElement
        className="absolute bottom-20 right-10 w-48 h-48 opacity-20"
        intensity={0.4}
      >
        <div className="w-full h-full bg-gradient-to-br from-cyan-400 to-blue-600 rounded-full blur-3xl" />
      </FloatingElement>

      <div className="relative w-full max-w-7xl mx-auto px-6">
        {/* Header */}
        <ScrollReveal className="text-center space-y-6 mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl border border-gray-200/50 dark:border-gray-700/50 rounded-full text-sm text-gray-700 dark:text-gray-300 font-medium shadow-lg">
            <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full animate-pulse" />
            Our Services
          </div>
          
          <h2 className="font-display text-4xl lg:text-5xl xl:text-6xl text-gray-900 dark:text-white leading-tight">
            Intelligent Solutions for{" "}
            <span className="relative">
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 bg-clip-text text-transparent">
                Every Challenge
              </span>
              <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 rounded-full transform scale-x-0 animate-[scale-x_1s_ease-out_1.5s_forwards]" />
            </span>
          </h2>
          
          <p className="text-lg lg:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            From strategic planning to hands-on implementation, we deliver comprehensive AI solutions 
            that drive measurable business outcomes and sustainable growth.
          </p>
        </ScrollReveal>

        {/* Services grid */}
        <StaggerGrid
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16"
          staggerDelay={0.2}
        >
          {services.map((service) => (
            <ServiceCard key={service.title} service={service} />
          ))}
        </StaggerGrid>

        {/* Call to action */}
        <ScrollReveal delay={0.6}>
          <div className="text-center">
            <HoverCard
              scale={1.02}
              className="inline-flex flex-col sm:flex-row items-center gap-6 p-8 bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl border border-gray-200/50 dark:border-gray-700/50 rounded-3xl shadow-lg max-w-2xl mx-auto"
            >
              <div className="space-y-2 text-center sm:text-left">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                  Ready to transform your business?
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Let&apos;s discuss how our AI solutions can drive your success.
                </p>
              </div>
              
              <button
                onClick={() => {
                  const element = document.querySelector('#contact');
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="group px-8 py-4 bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 text-white font-semibold rounded-2xl transform transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/25 hover:-translate-y-1 whitespace-nowrap"
              >
                <span className="flex items-center gap-2">
                  Get Started Today
                  <ArrowRight className="w-4 h-4 transform transition-transform duration-300 group-hover:translate-x-1" />
                </span>
              </button>
            </HoverCard>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}