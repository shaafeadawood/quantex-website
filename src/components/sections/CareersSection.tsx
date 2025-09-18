"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import CTAButton from "@/components/CTAButton";
import { Users, Briefcase, Target, MapPin, Clock } from "lucide-react";

export default function CareersSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const openings = [
    {
      title: "Senior AI Engineer",
      type: "Full-time",
      location: "Remote / San Francisco",
      description: "Lead development of next-generation AI systems and machine learning algorithms",
      icon: Target
    },
    {
      title: "Frontend Developer",
      type: "Full-time", 
      location: "Remote / New York",
      description: "Build intuitive user interfaces for complex AI-powered applications",
      icon: Users
    },
    {
      title: "DevOps Engineer",
      type: "Full-time",
      location: "Remote / London",
      description: "Scale and optimize cloud infrastructure for high-performance AI workloads",
      icon: Briefcase
    }
  ];

  return (
    <section id="careers" className="py-20 bg-background-subtle">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 60 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-4xl lg:text-5xl bg-gradient-to-r from-brand-primary to-brand-secondary bg-clip-text text-transparent mb-6">
            Join Our Team
          </h2>
          <p className="text-xl text-text-muted max-w-3xl mx-auto">
            Help us build the future of AI and intelligent systems
          </p>
        </motion.div>

        <div className="space-y-6 max-w-4xl mx-auto">
          {openings.map((job, index) => (
            <motion.div
              key={job.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
              className="bg-background rounded-xl p-6 lg:p-8 border border-white/10 hover:border-brand-primary/30 transition-colors group"
            >
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                <div className="flex-1">
                  <div className="flex items-center space-x-4 mb-3">
                    <div className="p-2 bg-brand-primary/10 rounded-lg">
                      <job.icon className="w-5 h-5 text-brand-primary" strokeWidth={1.5} />
                    </div>
                    <h3 className="font-display text-xl text-text-primary group-hover:text-brand-primary transition-colors">
                      {job.title}
                    </h3>
                    <span className="text-sm bg-brand-primary/10 text-brand-primary px-3 py-1 rounded-full">
                      {job.type}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-text-muted mb-3">
                    <MapPin className="w-4 h-4" strokeWidth={1.5} />
                    {job.location}
                  </div>
                  <p className="text-text-muted">{job.description}</p>
                </div>
                <div className="mt-4 lg:mt-0 lg:ml-6">
                  <CTAButton label="Apply Now" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
          className="text-center mt-12"
        >
          <p className="text-text-muted mb-6">
            Don&apos;t see a perfect fit? We&apos;re always interested in talented individuals.
          </p>
          <CTAButton label="Get in Touch" />
        </motion.div>
      </div>
    </section>
  );
}