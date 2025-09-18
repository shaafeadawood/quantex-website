"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Mail, MapPin, Clock } from "lucide-react";
import ContactForm from "@/components/ContactForm";

export default function ContactSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 60 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-4xl lg:text-5xl bg-gradient-to-r from-brand-primary to-brand-secondary bg-clip-text text-transparent mb-6">
            Get In Touch
          </h2>
          <p className="text-xl text-text-muted max-w-3xl mx-auto">
            Ready to transform your business? Let&apos;s discuss your project and explore possibilities.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -40 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            className="space-y-8"
          >
            <div>
              <h3 className="font-display text-2xl text-text-primary mb-4">Let&apos;s Start a Conversation</h3>
              <p className="text-text-muted leading-relaxed">
                Whether you&apos;re looking to implement AI solutions, modernize your systems, 
                or explore digital transformation opportunities, we&apos;re here to help.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="w-10 h-10 bg-brand-primary/10 rounded-lg flex items-center justify-center">
                  <Mail className="w-5 h-5 text-brand-primary" strokeWidth={1.5} />
                </div>
                <div>
                  <div className="text-text-primary font-medium">Email</div>
                  <div className="text-text-muted">hello@quantex.com</div>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="w-10 h-10 bg-brand-primary/10 rounded-lg flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-brand-primary" strokeWidth={1.5} />
                </div>
                <div>
                  <div className="text-text-primary font-medium">Location</div>
                  <div className="text-text-muted">Global • Remote-first</div>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-10 h-10 bg-brand-primary/10 rounded-lg flex items-center justify-center">
                  <Clock className="w-5 h-5 text-brand-primary" strokeWidth={1.5} />
                </div>
                <div>
                  <div className="text-text-primary font-medium">Response Time</div>
                  <div className="text-text-muted">Within 24 hours</div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 40 }}
            transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
            className="bg-background-subtle rounded-xl p-8 border border-white/10"
          >
            <ContactForm />
          </motion.div>
        </div>
      </div>
    </section>
  );
}