"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { BarChart3, Grid3X3, TrendingUp } from "lucide-react";

export default function CaseStudiesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const caseStudies = [
    {
      title: "FinTech AI Platform",
      category: "Financial Services",
      description: "Implemented machine learning algorithms to detect fraud patterns, reducing false positives by 85%",
      impact: "85% reduction in false positives",
      tech: ["Python", "TensorFlow", "AWS", "React"],
      icon: BarChart3
    },
    {
      title: "Smart Manufacturing System",
      category: "Manufacturing",
      description: "Built predictive maintenance system that reduced equipment downtime by 60%",
      impact: "60% reduction in downtime",
      tech: ["IoT", "Azure", "Node.js", "MongoDB"],
      icon: Grid3X3
    },
    {
      title: "Healthcare Analytics Dashboard",
      category: "Healthcare",
      description: "Developed real-time patient monitoring system improving response times by 40%",
      impact: "40% faster response times",
      tech: ["React", "Python", "PostgreSQL", "Docker"],
      icon: TrendingUp
    }
  ];

  return (
    <section id="case-studies" className="py-20 bg-background-subtle">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 60 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-4xl lg:text-5xl bg-gradient-to-r from-brand-primary to-brand-secondary bg-clip-text text-transparent mb-6">
            Case Studies
          </h2>
          <p className="text-xl text-text-muted max-w-3xl mx-auto">
            Real results from our innovative solutions
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {caseStudies.map((study, index) => (
            <motion.div
              key={study.title}
              initial={{ opacity: 0, y: 60 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
              transition={{ duration: 0.6, delay: index * 0.2, ease: "easeOut" }}
              whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}
              className="bg-background rounded-xl p-8 border border-white/10 hover:border-brand-primary/30 transition-all group cursor-pointer"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-brand-primary/10 rounded-lg">
                  <study.icon className="w-5 h-5 text-brand-primary" strokeWidth={1.5} />
                </div>
                <div className="text-sm text-brand-primary font-medium">{study.category}</div>
              </div>
              <h3 className="font-display text-xl text-text-primary mb-4 group-hover:text-brand-primary transition-colors">
                {study.title}
              </h3>
              <p className="text-text-muted mb-6 leading-relaxed">
                {study.description}
              </p>
              <div className="border-t border-white/10 pt-4">
                <div className="text-brand-secondary font-semibold mb-3">{study.impact}</div>
                <div className="flex flex-wrap gap-2">
                  {study.tech.map((tech) => (
                    <span key={tech} className="text-xs bg-brand-primary/10 text-brand-primary px-2 py-1 rounded">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}