"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Mail, MapPin, Clock, MessageCircle } from "lucide-react";
import ContactForm from "@/components/ContactForm";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "contact.quantex@gmail.com",
    description: "For general inquiries and partnerships",
    gradient: "from-brand-primary to-brand-accent"
  },
  {
    icon: MessageCircle,
    label: "Live Chat",
    value: "Available 24/7",
    description: "Instant support for urgent questions",
    gradient: "from-brand-accent to-brand-secondary"
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Global • Remote-first",
    description: "Serving clients worldwide",
    gradient: "from-brand-secondary to-brand-primary"
  },
  {
    icon: Clock,
    label: "Response Time",
    value: "Within 24 hours",
    description: "Guaranteed response time",
    gradient: "from-brand-primary via-brand-accent to-brand-secondary"
  }
];

export default function ContactSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" className="py-20 lg:py-32 bg-background relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-72 h-72 bg-brand-primary rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-brand-accent rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 60 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-20"
        >
          {/* Section badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-brand-secondary/10 backdrop-blur-sm border border-brand-secondary/20 rounded-full text-sm text-brand-secondary font-medium mb-6"
          >
            <span className="w-2 h-2 bg-brand-secondary rounded-full animate-pulse"></span>
            Contact Us
          </motion.div>

          {/* Enhanced heading */}
          <motion.h2 
            className="font-display text-4xl lg:text-5xl xl:text-6xl text-text-primary mb-6 leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Let&apos;s Build Something{" "}
            <motion.span 
              className="bg-gradient-to-r from-brand-primary via-brand-accent to-brand-secondary bg-clip-text text-transparent"
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
              Extraordinary
            </motion.span>
          </motion.h2>

          <motion.p 
            className="text-xl lg:text-2xl text-text-secondary max-w-4xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            Ready to transform your business with AI? Let&apos;s discuss your vision 
            and explore how we can bring your ideas to life with cutting-edge technology.
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12 items-start">
          {/* Contact Information - Now enhanced */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -40 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            className="lg:col-span-2 space-y-8"
          >
            <div className="space-y-6">
              <motion.h3 
                className="font-display text-2xl lg:text-3xl text-text-primary"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                Start Your AI Journey Today
              </motion.h3>
              
              <motion.p 
                className="text-text-secondary leading-relaxed text-lg"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                Whether you&apos;re looking to implement AI solutions, modernize your systems, 
                or explore digital transformation opportunities, our team of experts is 
                ready to guide you every step of the way.
              </motion.p>
            </div>

            {/* Enhanced contact info cards */}
            <div className="space-y-4">
              {contactInfo.map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, x: -30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
                  transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                  whileHover={{ x: 8, transition: { duration: 0.2 } }}
                  className="group flex items-center space-x-4 p-4 bg-background-card/50 backdrop-blur-sm border border-border-subtle rounded-xl hover:border-brand-primary/30 hover:shadow-lg hover:shadow-brand-primary/10 transition-all duration-300"
                >
                  <motion.div 
                    className={`w-12 h-12 bg-gradient-to-br ${item.gradient} rounded-xl flex items-center justify-center shadow-lg relative overflow-hidden`}
                    whileHover={{ 
                      scale: 1.1, 
                      rotate: [0, -2, 2, 0],
                      boxShadow: "0 8px 25px rgba(var(--brand-primary-rgb), 0.25)"
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    {/* Shimmer effect */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12"
                      initial={{ x: "-100%" }}
                      whileHover={{ x: "100%" }}
                      transition={{ duration: 0.6, ease: "easeInOut" }}
                    />
                    <item.icon className="w-6 h-6 text-white relative z-10" strokeWidth={1.5} />
                  </motion.div>
                  
                  <div className="flex-1">
                    <div className="text-text-primary font-semibold group-hover:text-brand-primary transition-colors duration-200">
                      {item.label}
                    </div>
                    <div className="text-text-accent font-medium text-sm">
                      {item.value}
                    </div>
                    <div className="text-text-muted text-sm">
                      {item.description}
                    </div>
                  </div>

                  {/* Hover arrow */}
                  <motion.div
                    initial={{ opacity: 0, x: -10 }}
                    whileHover={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.2 }}
                    className="opacity-0 group-hover:opacity-100"
                  >
                    <motion.span
                      className="text-brand-primary"
                      animate={{ x: [0, 3, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      →
                    </motion.span>
                  </motion.div>
                </motion.div>
              ))}
            </div>

            {/* Trust indicators */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: 1.4 }}
              className="p-6 bg-gradient-to-r from-brand-primary/5 via-brand-accent/5 to-brand-secondary/5 border border-brand-primary/20 rounded-2xl backdrop-blur-sm"
            >
              <div className="grid grid-cols-2 gap-4 text-center">
                <div>
                  <div className="text-2xl font-bold text-brand-primary">24/7</div>
                  <div className="text-sm text-text-muted">Support</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-brand-accent">100%</div>
                  <div className="text-sm text-text-muted">Secure</div>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form - Enhanced */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 40 }}
            transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
            className="lg:col-span-3"
          >
            <div className="bg-background-card/50 backdrop-blur-sm rounded-2xl p-8 lg:p-10 border border-border-subtle shadow-xl shadow-black/5 relative overflow-hidden">
              {/* Decorative elements */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-brand-primary/10 to-transparent rounded-bl-full"></div>
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-brand-accent/10 to-transparent rounded-tr-full"></div>
              
              <div className="relative">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  className="mb-8"
                >
                  <h3 className="font-display text-2xl lg:text-3xl text-text-primary mb-2">
                    Send Us a Message
                  </h3>
                  <p className="text-text-secondary">
                    Fill out the form below and we&apos;ll get back to you within 24 hours.
                  </p>
                </motion.div>
                
                <ContactForm />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}