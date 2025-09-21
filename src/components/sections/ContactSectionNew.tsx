"use client";

import { Mail, MapPin, Clock, MessageCircle, ArrowRight, Shield, Users, Zap } from "lucide-react";
import { ScrollReveal, StaggerGrid, HoverCard, FloatingElement } from '../AnimationComponents';
import ContactForm from "@/components/ContactForm";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "contact.quantex@gmail.com",
    description: "For general inquiries and partnerships",
    gradient: "from-blue-600 to-purple-600"
  },
  {
    icon: MessageCircle,
    label: "Live Chat",
    value: "Available 24/7",
    description: "Instant support for urgent questions",
    gradient: "from-purple-600 to-pink-600"
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Global • Remote-first",
    description: "Serving clients worldwide",
    gradient: "from-green-600 to-teal-600"
  },
  {
    icon: Clock,
    label: "Response Time",
    value: "Within 24 hours",
    description: "Guaranteed response time",
    gradient: "from-orange-600 to-red-600"
  }
];

const trustIndicators = [
  {
    icon: Shield,
    value: "100%",
    label: "Secure",
    description: "Enterprise-grade security"
  },
  {
    icon: Users,
    value: "50+",
    label: "Happy Clients",
    description: "Trusted by leading companies"
  },
  {
    icon: Zap,
    value: "24/7",
    label: "Support",
    description: "Always here when you need us"
  }
];

export default function ContactSectionNew() {
  return (
    <section id="contact" className="relative py-16 lg:py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950" />
      
      {/* Floating background elements */}
      <FloatingElement
        className="absolute top-20 left-20 w-64 h-64 opacity-20"
        intensity={0.3}
      >
        <div className="w-full h-full bg-gradient-to-br from-blue-400 to-purple-600 rounded-full blur-3xl" />
      </FloatingElement>
      
      <FloatingElement
        className="absolute bottom-20 right-20 w-48 h-48 opacity-30"
        intensity={0.4}
      >
        <div className="w-full h-full bg-gradient-to-br from-purple-400 to-pink-600 rounded-full blur-3xl" />
      </FloatingElement>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='m36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="relative w-full max-w-7xl mx-auto px-6">
        {/* Header */}
        <ScrollReveal className="text-center space-y-6 mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-xl border border-white/20 rounded-full text-sm text-white font-medium shadow-lg">
            <div className="w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full animate-pulse" />
            Contact Us
          </div>
          
          <h2 className="font-display text-4xl lg:text-5xl xl:text-6xl text-white leading-tight">
            Let&apos;s Build Something{" "}
            <span className="relative">
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Extraordinary
              </span>
              <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 rounded-full transform scale-x-0 animate-[scale-x_1s_ease-out_1.5s_forwards]" />
            </span>
          </h2>
          
          <p className="text-lg lg:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Ready to transform your business with AI? Let&apos;s discuss your vision 
            and explore how we can bring your ideas to life with cutting-edge technology.
          </p>
        </ScrollReveal>

        <div className="grid lg:grid-cols-5 gap-12 items-start">
          {/* Contact Information */}
          <ScrollReveal delay={0.2} className="lg:col-span-2 space-y-8">
            <div className="space-y-6">
              <h3 className="font-display text-2xl lg:text-3xl text-white">
                Start Your AI Journey Today
              </h3>
              
              <p className="text-gray-300 leading-relaxed text-lg">
                Whether you&apos;re looking to implement AI solutions, modernize your systems, 
                or explore digital transformation opportunities, our team of experts is 
                ready to guide you every step of the way.
              </p>
            </div>

            {/* Contact info cards */}
            <StaggerGrid className="space-y-4" staggerDelay={0.1}>
              {contactInfo.map((item) => (
                <HoverCard key={item.label} scale={1.02}>
                  <div className="group flex items-center space-x-4 p-4 bg-white/10 backdrop-blur-xl border border-white/20 rounded-xl hover:border-white/40 transition-all duration-300">
                    <div className={`w-12 h-12 bg-gradient-to-br ${item.gradient} rounded-xl flex items-center justify-center shadow-lg transform transition-transform duration-500 group-hover:rotate-6 group-hover:scale-110`}>
                      <item.icon className="w-6 h-6 text-white" strokeWidth={1.5} />
                    </div>
                    
                    <div className="flex-1">
                      <div className="text-white font-semibold group-hover:text-blue-300 transition-colors duration-200">
                        {item.label}
                      </div>
                      <div className="text-blue-300 font-medium text-sm">
                        {item.value}
                      </div>
                      <div className="text-gray-400 text-sm">
                        {item.description}
                      </div>
                    </div>

                    {/* Hover arrow */}
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <ArrowRight className="w-4 h-4 text-blue-300" />
                    </div>
                  </div>
                </HoverCard>
              ))}
            </StaggerGrid>

            {/* Trust indicators */}
            <ScrollReveal delay={0.6}>
              <div className="grid grid-cols-3 gap-4">
                {trustIndicators.map((indicator) => (
                  <HoverCard key={indicator.label} scale={1.05}>
                    <div className="text-center p-4 bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl">
                      <indicator.icon className="w-6 h-6 text-blue-300 mx-auto mb-2" />
                      <div className="text-xl font-bold text-white">
                        {indicator.value}
                      </div>
                      <div className="text-xs text-gray-400">
                        {indicator.label}
                      </div>
                    </div>
                  </HoverCard>
                ))}
              </div>
            </ScrollReveal>
          </ScrollReveal>

          {/* Contact Form */}
          <ScrollReveal delay={0.4} className="lg:col-span-3">
            <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-8 lg:p-10 border border-white/20 shadow-2xl relative overflow-hidden">
              
              {/* Decorative elements */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-blue-500/20 to-transparent rounded-bl-full" />
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-purple-500/20 to-transparent rounded-tr-full" />
              
              {/* Floating decorative elements */}
              <FloatingElement className="absolute top-6 right-6 w-6 h-6 opacity-30">
                <div className="w-full h-full bg-gradient-to-br from-blue-400 to-purple-400 rounded-full" />
              </FloatingElement>
              
              <div className="relative">
                <div className="mb-8">
                  <h3 className="font-display text-2xl lg:text-3xl text-white mb-2">
                    Send Us a Message
                  </h3>
                  <p className="text-gray-300">
                    Fill out the form below and we&apos;ll get back to you within 24 hours.
                  </p>
                </div>
                
                <ContactForm />
              </div>
            </div>
          </ScrollReveal>
        </div>

        {/* Bottom CTA */}
        <ScrollReveal delay={0.8} className="text-center mt-20">
          <div className="max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to Get Started?
            </h3>
            <p className="text-gray-300 mb-8">
              Join hundreds of companies that have transformed their business with our AI solutions.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <HoverCard scale={1.05}>
                <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-2xl transform transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/25 hover:-translate-y-1">
                  <span className="flex items-center gap-2">
                    Schedule a Call
                    <ArrowRight className="w-4 h-4" />
                  </span>
                </button>
              </HoverCard>
              
              <HoverCard scale={1.05}>
                <button className="px-8 py-4 bg-white/10 backdrop-blur-xl border border-white/20 text-white font-semibold rounded-2xl transform transition-all duration-300 hover:bg-white/20 hover:-translate-y-1">
                  View Our Work
                </button>
              </HoverCard>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}