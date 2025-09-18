"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    quote: "Quantex didn't just deliver AI solutions—they transformed our entire business model. Their team's expertise and innovative approach helped us achieve 300% growth in operational efficiency within just 6 months.",
    author: "Sarah Chen",
    role: "Chief Technology Officer",
    company: "TechFlow Inc",
    avatar: "SC",
    rating: 5,
    metric: "300% efficiency increase"
  },
  {
    quote: "The intelligent systems Quantex built have revolutionized our data processing capabilities. What used to take our team weeks now happens in real-time. It's like having a crystal ball for business decisions.",
    author: "Michael Rodriguez",
    role: "Head of Operations", 
    company: "DataVault Solutions",
    avatar: "MR",
    rating: 5,
    metric: "95% faster processing"
  },
  {
    quote: "Working with Quantex was a game-changer. Their AI-powered financial models helped us reduce risk by 40% while increasing our portfolio returns. Professional, innovative, and results-driven—exactly what we needed.",
    author: "Emily Watson",
    role: "Chief Executive Officer",
    company: "FutureBank Capital",
    avatar: "EW", 
    rating: 5,
    metric: "40% risk reduction"
  },
  {
    quote: "The predictive analytics platform Quantex developed for us has been transformational. We've seen a 250% improvement in customer satisfaction and our response times have never been better.",
    author: "David Park",
    role: "VP of Customer Success",
    company: "ServicePro Ltd",
    avatar: "DP",
    rating: 5,
    metric: "250% satisfaction boost"
  }
];

export default function TestimonialsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-rotate testimonials
  useEffect(() => {
    if (!isInView) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isInView]);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="py-20 lg:py-32 bg-gradient-to-br from-background via-background-subtle to-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-brand-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-brand-secondary/5 rounded-full blur-3xl"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 60 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-brand-primary/10 backdrop-blur-sm border border-brand-primary/20 rounded-full text-sm text-brand-primary font-medium mb-6"
          >
            <Star className="w-4 h-4 fill-current" />
            Client Success Stories
          </motion.div>
          
          <h2 className="font-display text-4xl lg:text-5xl xl:text-6xl text-text-primary leading-tight mb-6">
            Trusted by{" "}
            <span className="bg-gradient-to-r from-brand-primary via-brand-accent to-brand-secondary bg-clip-text text-transparent">
              Industry Leaders
            </span>
          </h2>
          
          <p className="text-lg lg:text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
            See how we&apos;ve helped companies transform their operations and achieve extraordinary results with AI innovation.
          </p>
        </motion.div>

        <div className="relative max-w-5xl mx-auto">
          {/* Navigation buttons */}
          <div className="absolute top-1/2 -translate-y-1/2 -left-6 lg:-left-12 z-10">
            <motion.button
              onClick={prevTestimonial}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="w-12 h-12 bg-background-card/80 backdrop-blur-sm border border-border-subtle rounded-full flex items-center justify-center text-text-muted hover:text-brand-primary hover:bg-brand-primary/10 transition-all duration-300 shadow-lg"
            >
              <ChevronLeft className="w-5 h-5" strokeWidth={2} />
            </motion.button>
          </div>
          
          <div className="absolute top-1/2 -translate-y-1/2 -right-6 lg:-right-12 z-10">
            <motion.button
              onClick={nextTestimonial}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="w-12 h-12 bg-background-card/80 backdrop-blur-sm border border-border-subtle rounded-full flex items-center justify-center text-text-muted hover:text-brand-primary hover:bg-brand-primary/10 transition-all duration-300 shadow-lg"
            >
              <ChevronRight className="w-5 h-5" strokeWidth={2} />
            </motion.button>
          </div>

          {/* Main testimonial card */}
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, y: 50, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -50, scale: 0.95 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="relative bg-gradient-to-br from-background-card/80 to-background-subtle/50 backdrop-blur-xl rounded-3xl p-8 lg:p-12 border border-white/10 shadow-2xl"
            >
              {/* Quote icon */}
              <div className="absolute -top-4 left-8">
                <div className="w-12 h-12 bg-gradient-to-br from-brand-primary to-brand-accent rounded-full flex items-center justify-center shadow-lg">
                  <Quote className="w-6 h-6 text-white" strokeWidth={2} />
                </div>
              </div>

              {/* Rating stars */}
              <div className="flex justify-center mb-6">
                <div className="flex gap-1">
                  {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
              </div>

              {/* Quote */}
              <blockquote className="text-xl lg:text-2xl text-text-primary leading-relaxed mb-8 text-center font-medium">
                &ldquo;{testimonials[currentIndex].quote}&rdquo;
              </blockquote>

              {/* Metric highlight */}
              <div className="text-center mb-8">
                <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-brand-primary/10 to-brand-accent/10 border border-brand-primary/20 rounded-full">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  <span className="text-brand-primary font-semibold">{testimonials[currentIndex].metric}</span>
                </div>
              </div>

              {/* Author info */}
              <div className="flex items-center justify-center gap-4">
                <div className="w-16 h-16 bg-gradient-to-br from-brand-primary to-brand-accent rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg">
                  {testimonials[currentIndex].avatar}
                </div>
                <div className="text-left">
                  <div className="font-semibold text-lg text-text-primary">{testimonials[currentIndex].author}</div>
                  <div className="text-text-muted">{testimonials[currentIndex].role}</div>
                  <div className="text-brand-primary font-medium">{testimonials[currentIndex].company}</div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Pagination dots */}
          <div className="flex justify-center gap-3 mt-8">
            {testimonials.map((_, index) => (
              <motion.button
                key={index}
                onClick={() => setCurrentIndex(index)}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                className={`transition-all duration-300 ${
                  index === currentIndex 
                    ? 'w-8 h-3 bg-gradient-to-r from-brand-primary to-brand-accent rounded-full' 
                    : 'w-3 h-3 bg-white/20 hover:bg-brand-primary/50 rounded-full'
                }`}
              />
            ))}
          </div>

          {/* Progress bar */}
          <div className="mt-6 max-w-xs mx-auto">
            <div className="h-1 bg-white/10 rounded-full overflow-hidden">
              <motion.div
                initial={{ width: '0%' }}
                animate={{ width: '100%' }}
                transition={{ duration: 5, ease: 'linear', repeat: Infinity }}
                className="h-full bg-gradient-to-r from-brand-primary to-brand-accent rounded-full"
                key={currentIndex}
              />
            </div>
          </div>
        </div>

        {/* Call to action */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-16"
        >
          <div className="inline-flex flex-col sm:flex-row items-center gap-6 p-8 bg-gradient-to-r from-brand-primary/5 via-brand-accent/5 to-brand-secondary/5 border border-brand-primary/20 rounded-2xl backdrop-blur-sm">
            <div className="space-y-2">
              <h3 className="text-xl lg:text-2xl font-bold text-text-primary">
                Ready to join our success stories?
              </h3>
              <p className="text-text-secondary">
                Let&apos;s discuss how we can transform your business with AI innovation.
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
              Start Your Journey
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}