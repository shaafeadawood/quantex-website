"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Star, Quote, ChevronLeft, ChevronRight, ArrowRight, Users } from "lucide-react";
import { ScrollReveal, HoverCard, FloatingElement } from '../AnimationComponents';
import { motion, AnimatePresence } from "framer-motion";

const testimonials = [
  {
    quote: "Quantex didn't just deliver AI solutions—they transformed our entire business model. Their team's expertise and innovative approach helped us achieve 300% growth in operational efficiency within just 6 months.",
    author: "Sarah Chen",
    role: "Chief Technology Officer",
    company: "TechFlow Inc",
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMJA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=150&q=80",
    rating: 5,
    metric: "300% efficiency increase",
    gradient: "from-emerald-500 to-teal-600"
  },
  {
    quote: "The intelligent systems Quantex built have revolutionized our data processing capabilities. What used to take our team weeks now happens in real-time. It's like having a crystal ball for business decisions.",
    author: "Michael Rodriguez",
    role: "Head of Operations", 
    company: "DataVault Solutions",
    avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=150&q=80",
    rating: 5,
    metric: "95% faster processing",
    gradient: "from-blue-500 to-cyan-600"
  },
  {
    quote: "Working with Quantex was a game-changer. Their AI-powered financial models helped us reduce risk by 40% while increasing our portfolio returns. Professional, innovative, and results-driven—exactly what we needed.",
    author: "Emily Watson",
    role: "Chief Executive Officer",
    company: "FutureBank Capital",
    avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=150&q=80",
    rating: 5,
    metric: "40% risk reduction",
    gradient: "from-purple-500 to-pink-600"
  },
  {
    quote: "The predictive analytics platform Quantex developed for us has been transformational. We've seen a 250% improvement in customer satisfaction and our response times have never been better.",
    author: "David Park",
    role: "VP of Customer Success",
    company: "ServicePro Ltd",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=150&q=80",
    rating: 5,
    metric: "250% satisfaction boost",
    gradient: "from-orange-500 to-red-600"
  }
];

export default function TestimonialsSectionNew() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoRotating, setIsAutoRotating] = useState(true);

  // Auto-rotate testimonials
  useEffect(() => {
    if (!isAutoRotating) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000);

    return () => clearInterval(interval);
  }, [isAutoRotating]);

  const nextTestimonial = () => {
    setIsAutoRotating(false);
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    setTimeout(() => setIsAutoRotating(true), 10000);
  };

  const prevTestimonial = () => {
    setIsAutoRotating(false);
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    setTimeout(() => setIsAutoRotating(true), 10000);
  };

  return (
    <section id="testimonials" className="relative py-16 lg:py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-gray-50 to-gray-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900" />
      
      {/* Floating background elements */}
      <FloatingElement
        className="absolute top-20 left-20 w-64 h-64 opacity-20"
        intensity={0.3}
      >
        <div className="w-full h-full bg-gradient-to-br from-purple-400 to-pink-600 rounded-full blur-3xl" />
      </FloatingElement>
      
      <FloatingElement
        className="absolute bottom-20 right-20 w-48 h-48 opacity-30"
        intensity={0.4}
      >
        <div className="w-full h-full bg-gradient-to-br from-blue-400 to-cyan-600 rounded-full blur-3xl" />
      </FloatingElement>

      <div className="relative w-full max-w-7xl mx-auto px-6">
        {/* Header */}
        <ScrollReveal className="text-center space-y-6 mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl border border-gray-200/50 dark:border-gray-700/50 rounded-full text-sm text-gray-700 dark:text-gray-300 font-medium shadow-lg">
            <Star className="w-4 h-4 text-yellow-500 fill-current" />
            Client Success Stories
          </div>
          
          <h2 className="font-display text-4xl lg:text-5xl xl:text-6xl text-gray-900 dark:text-white leading-tight">
            Trusted by{" "}
            <span className="relative">
              <span className="bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-600 bg-clip-text text-transparent">
                Industry Leaders
              </span>
              <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-600 rounded-full transform scale-x-0 animate-[scale-x_1s_ease-out_1.5s_forwards]" />
            </span>
          </h2>
          
          <p className="text-lg lg:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            See how we&apos;ve helped companies transform their operations and achieve 
            extraordinary results with AI innovation.
          </p>
        </ScrollReveal>

        {/* Main testimonial carousel */}
        <div className="relative max-w-5xl mx-auto">
          {/* Navigation buttons */}
          <div className="absolute top-1/2 -translate-y-1/2 -left-4 lg:-left-16 z-10">
            <HoverCard scale={1.1}>
              <button
                onClick={prevTestimonial}
                className="w-12 h-12 bg-white/90 dark:bg-gray-800/90 backdrop-blur-xl border border-gray-200/50 dark:border-gray-700/50 rounded-full flex items-center justify-center text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-all duration-300 shadow-lg"
              >
                <ChevronLeft className="w-5 h-5" strokeWidth={2} />
              </button>
            </HoverCard>
          </div>
          
          <div className="absolute top-1/2 -translate-y-1/2 -right-4 lg:-right-16 z-10">
            <HoverCard scale={1.1}>
              <button
                onClick={nextTestimonial}
                className="w-12 h-12 bg-white/90 dark:bg-gray-800/90 backdrop-blur-xl border border-gray-200/50 dark:border-gray-700/50 rounded-full flex items-center justify-center text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-all duration-300 shadow-lg"
              >
                <ChevronRight className="w-5 h-5" strokeWidth={2} />
              </button>
            </HoverCard>
          </div>

          {/* Main testimonial card */}
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, y: 50, scale: 0.95, rotateX: 15 }}
              animate={{ opacity: 1, y: 0, scale: 1, rotateX: 0 }}
              exit={{ opacity: 0, y: -50, scale: 0.95, rotateX: -15 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="relative"
            >
              <div className="relative bg-white/90 dark:bg-gray-900/90 backdrop-blur-xl rounded-3xl p-8 lg:p-12 border border-gray-200/50 dark:border-gray-700/50 shadow-2xl overflow-hidden">
                
                {/* Background gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${testimonials[currentIndex].gradient} opacity-0 hover:opacity-5 transition-opacity duration-700 rounded-3xl`} />
                
                {/* Quote icon */}
                <div className="absolute -top-4 left-8">
                  <div className={`w-12 h-12 bg-gradient-to-br ${testimonials[currentIndex].gradient} rounded-full flex items-center justify-center shadow-lg`}>
                    <Quote className="w-6 h-6 text-white" strokeWidth={2} />
                  </div>
                </div>

                {/* Floating decorative elements */}
                <FloatingElement className="absolute top-6 right-6 w-6 h-6 opacity-30">
                  <div className={`w-full h-full bg-gradient-to-br ${testimonials[currentIndex].gradient} rounded-full`} />
                </FloatingElement>

                <div className="relative z-10">
                  {/* Rating stars */}
                  <div className="flex justify-center mb-6">
                    <div className="flex gap-1">
                      {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, scale: 0 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: i * 0.1, duration: 0.3 }}
                        >
                          <Star className="w-5 h-5 text-yellow-400 fill-current" />
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  {/* Quote */}
                  <blockquote className="text-xl lg:text-2xl text-gray-900 dark:text-white leading-relaxed mb-8 text-center font-medium">
                    &ldquo;{testimonials[currentIndex].quote}&rdquo;
                  </blockquote>

                  {/* Metric highlight */}
                  <div className="text-center mb-8">
                    <div className="inline-flex items-center gap-3 px-6 py-3 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50 rounded-full shadow-lg">
                      <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                      <span className={`font-bold bg-gradient-to-r ${testimonials[currentIndex].gradient} bg-clip-text text-transparent`}>
                        {testimonials[currentIndex].metric}
                      </span>
                    </div>
                  </div>

                  {/* Author info */}
                  <div className="flex items-center justify-center gap-4">
                    <div className="relative">
                      <div className={`absolute inset-0 bg-gradient-to-br ${testimonials[currentIndex].gradient} rounded-full blur-sm opacity-50`} />
                      <Image
                        src={testimonials[currentIndex].avatar}
                        alt={`${testimonials[currentIndex].author} - ${testimonials[currentIndex].role} at ${testimonials[currentIndex].company}`}
                        width={64}
                        height={64}
                        className="relative w-16 h-16 rounded-full object-cover border-2 border-white dark:border-gray-800 shadow-lg"
                        onError={(e) => {
                          // Enhanced fallback with better styling
                          const target = e.currentTarget as HTMLImageElement;
                          target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(testimonials[currentIndex].author)}&size=64&background=random&bold=true&format=svg`;
                        }}
                        onLoad={(e) => {
                          // Ensure image loaded successfully
                          const target = e.currentTarget as HTMLImageElement;
                          if (target.naturalWidth === 0) {
                            target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(testimonials[currentIndex].author)}&size=64&background=random&bold=true&format=svg`;
                          }
                        }}
                        priority={currentIndex === 0}
                      />
                    </div>
                    <div className="text-left">
                      <div className="font-bold text-lg text-gray-900 dark:text-white">
                        {testimonials[currentIndex].author}
                      </div>
                      <div className="text-gray-600 dark:text-gray-400">
                        {testimonials[currentIndex].role}
                      </div>
                      <div className={`font-semibold bg-gradient-to-r ${testimonials[currentIndex].gradient} bg-clip-text text-transparent`}>
                        {testimonials[currentIndex].company}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Pagination dots */}
          <div className="flex justify-center gap-3 mt-8">
            {testimonials.map((_, index) => (
              <HoverCard key={index} scale={1.2}>
                <button
                  onClick={() => {
                    setIsAutoRotating(false);
                    setCurrentIndex(index);
                    setTimeout(() => setIsAutoRotating(true), 10000);
                  }}
                  className={`transition-all duration-300 ${
                    index === currentIndex 
                      ? `w-8 h-3 bg-gradient-to-r ${testimonials[currentIndex].gradient} rounded-full` 
                      : 'w-3 h-3 bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500 rounded-full'
                  }`}
                />
              </HoverCard>
            ))}
          </div>

          {/* Progress bar */}
          {isAutoRotating && (
            <div className="mt-6 max-w-xs mx-auto">
              <div className="h-1 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: '0%' }}
                  animate={{ width: '100%' }}
                  transition={{ duration: 6, ease: 'linear', repeat: Infinity }}
                  className={`h-full bg-gradient-to-r ${testimonials[currentIndex].gradient} rounded-full`}
                  key={currentIndex}
                />
              </div>
            </div>
          )}
        </div>

        {/* Statistics */}
        <ScrollReveal delay={0.4} className="mt-20">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {[
              { icon: Users, value: "50+", label: "Happy Clients" },
              { icon: Star, value: "4.9/5", label: "Client Rating" },
              { icon: Quote, value: "100%", label: "Success Rate" },
              { icon: ArrowRight, value: "300%", label: "Avg. ROI Increase" }
            ].map((stat) => (
              <HoverCard key={stat.label} scale={1.05}>
                <div className="text-center p-6 bg-white/60 dark:bg-gray-800/60 backdrop-blur-xl rounded-2xl border border-gray-200/50 dark:border-gray-700/50">
                  <stat.icon className="w-8 h-8 text-gray-600 dark:text-gray-400 mx-auto mb-3" />
                  <div className="text-2xl font-bold text-gray-900 dark:text-white mb-1">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">
                    {stat.label}
                  </div>
                </div>
              </HoverCard>
            ))}
          </div>
        </ScrollReveal>

        {/* Call to action */}
        <ScrollReveal delay={0.6} className="text-center mt-16">
          <HoverCard
            scale={1.02}
            className="inline-flex flex-col sm:flex-row items-center gap-6 p-8 bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl border border-gray-200/50 dark:border-gray-700/50 rounded-3xl shadow-lg max-w-2xl mx-auto"
          >
            <div className="space-y-2 text-center sm:text-left">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                Ready to join our success stories?
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Let&apos;s discuss how we can transform your business with AI innovation.
              </p>
            </div>
            
            <button
              onClick={() => {
                const element = document.querySelector('#contact');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="group px-8 py-4 bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-600 text-white font-semibold rounded-2xl transform transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/25 hover:-translate-y-1 whitespace-nowrap"
            >
              <span className="flex items-center gap-2">
                Start Your Journey
                <ArrowRight className="w-4 h-4 transform transition-transform duration-300 group-hover:translate-x-1" />
              </span>
            </button>
          </HoverCard>
        </ScrollReveal>
      </div>
    </section>
  );
}