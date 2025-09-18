"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export default function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-20 bg-background-subtle">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 60 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center space-y-6"
        >
          <h2 className="font-display text-4xl lg:text-5xl bg-gradient-to-r from-brand-primary to-brand-secondary bg-clip-text text-transparent">
            About Quantex
          </h2>
          <p className="text-xl text-text-muted max-w-3xl mx-auto leading-relaxed">
            We&apos;re pioneering the future of AI innovation and intelligent software systems, 
            empowering businesses to transform through cutting-edge technology solutions.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            {[
              { title: "Mission", desc: "Democratize AI technology to solve complex business challenges" },
              { title: "Vision", desc: "A world where intelligent systems enhance human potential" },
              { title: "Values", desc: "Innovation, integrity, and impact-driven solutions" }
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
                transition={{ duration: 0.6, delay: index * 0.2, ease: "easeOut" }}
                className="bg-background rounded-lg p-6 border border-white/10"
              >
                <h3 className="font-display text-xl text-brand-primary mb-3">{item.title}</h3>
                <p className="text-text-muted">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}