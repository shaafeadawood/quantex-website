"use client";

import { BarChart3, Grid3X3, TrendingUp, ArrowUpRight, Sparkles, CheckCircle } from "lucide-react";
import { ScrollReveal, StaggerGrid, HoverCard, FloatingElement } from '../AnimationComponents';

const caseStudies = [
  {
    title: "FinTech AI Platform",
    category: "Financial Services",
    description: "Implemented machine learning algorithms to detect fraud patterns with advanced neural networks and real-time processing, reducing false positives by 85% while maintaining 99.9% accuracy.",
    impact: "85% reduction in false positives",
    metrics: [
      { label: "Accuracy", value: "99.9%" },
      { label: "Processing Speed", value: "< 100ms" },
      { label: "Cost Savings", value: "$2.4M" }
    ],
    tech: ["Python", "TensorFlow", "AWS", "React", "Kubernetes"],
    icon: BarChart3,
    gradient: "from-emerald-500 via-blue-500 to-purple-600",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "Smart Manufacturing System",
    category: "Manufacturing",
    description: "Built comprehensive predictive maintenance system using IoT sensors and machine learning that reduced equipment downtime by 60% and optimized production efficiency.",
    impact: "60% reduction in downtime",
    metrics: [
      { label: "Uptime", value: "99.2%" },
      { label: "Efficiency Gain", value: "+35%" },
      { label: "ROI", value: "340%" }
    ],
    tech: ["IoT", "Azure", "Node.js", "MongoDB", "Docker"],
    icon: Grid3X3,
    gradient: "from-orange-500 via-pink-500 to-red-600",
    image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "Healthcare Analytics Dashboard",
    category: "Healthcare",
    description: "Developed real-time patient monitoring system with advanced analytics improving response times by 40% and enhancing patient outcomes through predictive insights.",
    impact: "40% faster response times",
    metrics: [
      { label: "Response Time", value: "< 30s" },
      { label: "Patient Satisfaction", value: "+28%" },
      { label: "Clinical Efficiency", value: "+45%" }
    ],
    tech: ["React", "Python", "PostgreSQL", "Docker", "WebSocket"],
    icon: TrendingUp,
    gradient: "from-cyan-500 via-blue-500 to-indigo-600",
    image: "https://images.unsplash.com/photo-1576671081837-49000212a370?auto=format&fit=crop&w=800&q=80"
  }
];

const CaseStudyCard = ({ study }: { study: typeof caseStudies[0] }) => {
  return (
    <HoverCard
      className="group cursor-pointer h-full"
      scale={1.03}
      glow={true}
    >
      <div className="relative h-full bg-white/90 dark:bg-gray-900/90 backdrop-blur-xl rounded-3xl overflow-hidden border border-gray-200/50 dark:border-gray-700/50 transition-all duration-700 group-hover:border-transparent">
        
        {/* Animated gradient border on hover */}
        <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700">
          <div className={`absolute inset-0 bg-gradient-to-br ${study.gradient} p-[1px] rounded-3xl`}>
            <div className="h-full w-full bg-white dark:bg-gray-900 rounded-3xl" />
          </div>
        </div>

        {/* Header Image with Overlay */}
        <div className="relative h-48 overflow-hidden">
          <div 
            className="absolute inset-0 bg-cover bg-center transform transition-transform duration-700 group-hover:scale-110"
            style={{ backgroundImage: `url(${study.image})` }}
          />
          <div className={`absolute inset-0 bg-gradient-to-br ${study.gradient} opacity-80 group-hover:opacity-90 transition-opacity duration-500`} />
          
          {/* Category Badge */}
          <div className="absolute top-4 left-4">
            <div className="flex items-center gap-2 px-3 py-2 bg-white/20 backdrop-blur-md rounded-full text-white text-sm font-medium border border-white/30">
              <study.icon className="w-4 h-4" />
              {study.category}
            </div>
          </div>

          {/* Impact Badge */}
          <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-2 group-hover:translate-y-0">
            <div className="px-3 py-2 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-lg text-sm font-bold text-gray-900 dark:text-white shadow-lg">
              {study.impact}
            </div>
          </div>

          {/* Floating Elements */}
          <FloatingElement className="absolute bottom-4 left-4 w-6 h-6 opacity-30">
            <Sparkles className="w-full h-full text-white" />
          </FloatingElement>
        </div>

        {/* Content */}
        <div className="relative p-6 space-y-6">
          {/* Title */}
          <div className="space-y-2">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-gray-900 group-hover:to-gray-600 dark:group-hover:from-white dark:group-hover:to-gray-300 group-hover:bg-clip-text transition-all duration-500">
              {study.title}
            </h3>
            
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              {study.description}
            </p>
          </div>

          {/* Metrics */}
          <div className="grid grid-cols-3 gap-3">
            {study.metrics.map((metric, index) => (
              <div
                key={metric.label}
                className="text-center p-3 bg-gray-50 dark:bg-gray-800/50 rounded-xl transform transition-all duration-300 group-hover:bg-white dark:group-hover:bg-gray-700/50"
                style={{ 
                  transitionDelay: `${index * 100}ms` 
                }}
              >
                <div className={`text-lg font-bold bg-gradient-to-r ${study.gradient} bg-clip-text text-transparent`}>
                  {metric.value}
                </div>
                <div className="text-xs text-gray-500 dark:text-gray-400">
                  {metric.label}
                </div>
              </div>
            ))}
          </div>

          {/* Technologies */}
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-500" />
              <span className="text-sm font-semibold text-gray-700 dark:text-gray-300">Technologies Used</span>
            </div>
            
            <div className="flex flex-wrap gap-2">
              {study.tech.map((tech, index) => (
                <span
                  key={tech}
                  className="text-xs bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 px-3 py-1 rounded-full border border-gray-200 dark:border-gray-700 transition-all duration-300 hover:border-gray-400 dark:hover:border-gray-500"
                  style={{ 
                    transitionDelay: `${index * 50}ms` 
                  }}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* View Details */}
          <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
            <div className="flex items-center justify-between text-gray-400 group-hover:text-gray-700 dark:group-hover:text-gray-300 transition-colors duration-300">
              <span className="text-sm font-medium">View Case Study</span>
              <ArrowUpRight className="w-4 h-4 transform transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
            </div>
          </div>
        </div>
      </div>
    </HoverCard>
  );
};

export default function CaseStudiesSectionNew() {
  return (
    <section id="case-studies" className="relative py-16 lg:py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800" />
      
      {/* Floating background elements */}
      <FloatingElement
        className="absolute top-20 right-10 w-64 h-64 opacity-20"
        intensity={0.3}
      >
        <div className="w-full h-full bg-gradient-to-br from-emerald-400 to-cyan-600 rounded-full blur-3xl" />
      </FloatingElement>
      
      <FloatingElement
        className="absolute bottom-20 left-10 w-48 h-48 opacity-30"
        intensity={0.4}
      >
        <div className="w-full h-full bg-gradient-to-br from-purple-400 to-pink-600 rounded-full blur-3xl" />
      </FloatingElement>

      <div className="relative w-full max-w-7xl mx-auto px-6">
        {/* Header */}
        <ScrollReveal className="text-center space-y-6 mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl border border-gray-200/50 dark:border-gray-700/50 rounded-full text-sm text-gray-700 dark:text-gray-300 font-medium shadow-lg">
            <div className="w-2 h-2 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-full animate-pulse" />
            Success Stories
          </div>
          
          <h2 className="font-display text-4xl lg:text-5xl xl:text-6xl text-gray-900 dark:text-white leading-tight">
            Proven Results That{" "}
            <span className="relative">
              <span className="bg-gradient-to-r from-emerald-600 via-blue-600 to-purple-600 bg-clip-text text-transparent">
                Drive Innovation
              </span>
              <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-emerald-600 via-blue-600 to-purple-600 rounded-full transform scale-x-0 animate-[scale-x_1s_ease-out_1.5s_forwards]" />
            </span>
          </h2>
          
          <p className="text-lg lg:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Discover how our AI solutions have transformed businesses across industries, 
            delivering measurable impact and sustainable growth.
          </p>
        </ScrollReveal>

        {/* Case Studies Grid */}
        <StaggerGrid
          className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16"
          staggerDelay={0.2}
        >
          {caseStudies.map((study) => (
            <CaseStudyCard key={study.title} study={study} />
          ))}
        </StaggerGrid>

        {/* Call to Action */}
        <ScrollReveal delay={0.6}>
          <div className="text-center">
            <HoverCard
              scale={1.02}
              className="inline-flex flex-col sm:flex-row items-center gap-6 p-8 bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl border border-gray-200/50 dark:border-gray-700/50 rounded-3xl shadow-lg max-w-2xl mx-auto"
            >
              <div className="space-y-2 text-center sm:text-left">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                  Ready to create your success story?
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Let&apos;s discuss how we can deliver similar results for your business.
                </p>
              </div>
              
              <button
                onClick={() => {
                  const element = document.querySelector('#contact');
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="group px-8 py-4 bg-gradient-to-r from-emerald-600 via-blue-600 to-purple-600 text-white font-semibold rounded-2xl transform transition-all duration-300 hover:shadow-xl hover:shadow-emerald-500/25 hover:-translate-y-1 whitespace-nowrap"
              >
                <span className="flex items-center gap-2">
                  Start Your Project
                  <ArrowUpRight className="w-4 h-4 transform transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                </span>
              </button>
            </HoverCard>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}