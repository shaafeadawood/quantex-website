"use client";

import { Users, Briefcase, Target, MapPin, ArrowRight, Heart, Coffee, Award, Globe } from "lucide-react";
import { ScrollReveal, StaggerGrid, HoverCard, FloatingElement } from '../AnimationComponents';

const openings = [
  {
    title: "Senior AI Engineer",
    type: "Full-time",
    location: "Remote / San Francisco",
    salary: "$150k - $200k",
    description: "Lead development of next-generation AI systems and machine learning algorithms that will transform industries and create the future of intelligent automation.",
    requirements: ["5+ years ML/AI experience", "Python, TensorFlow", "PhD preferred"],
    benefits: ["Equity package", "Remote-first", "Learning budget"],
    icon: Target,
    gradient: "from-blue-500 to-purple-600",
    urgency: "Hiring Now"
  },
  {
    title: "Frontend Developer",
    type: "Full-time", 
    location: "Remote / New York",
    salary: "$120k - $160k",
    description: "Build intuitive user interfaces for complex AI-powered applications that make advanced technology accessible to everyone.",
    requirements: ["React/Next.js expert", "TypeScript mastery", "Design systems"],
    benefits: ["Health insurance", "Flexible hours", "Top-tier equipment"],
    icon: Users,
    gradient: "from-green-500 to-teal-600",
    urgency: "New"
  },
  {
    title: "DevOps Engineer",
    type: "Full-time",
    location: "Remote / London",
    salary: "$130k - $180k",
    description: "Scale and optimize cloud infrastructure for high-performance AI workloads that serve millions of users worldwide.",
    requirements: ["Kubernetes expert", "AWS/Azure/GCP", "Infrastructure as Code"],
    benefits: ["Stock options", "Conference budget", "Wellness programs"],
    icon: Briefcase,
    gradient: "from-orange-500 to-red-600",
    urgency: "Featured"
  }
];

const perks = [
  {
    icon: Heart,
    title: "Work-Life Balance",
    description: "Flexible hours and unlimited PTO"
  },
  {
    icon: Coffee,
    title: "Learning & Growth",
    description: "$5,000 annual learning budget"
  },
  {
    icon: Award,
    title: "Competitive Package",
    description: "Top-tier salary and equity"
  },
  {
    icon: Globe,
    title: "Global Team",
    description: "Work with talent from 20+ countries"
  }
];

const JobCard = ({ job }: { job: typeof openings[0] }) => {
  return (
    <HoverCard
      className="group cursor-pointer h-full"
      scale={1.02}
      glow={true}
    >
      <div className="relative h-full bg-white/90 dark:bg-gray-900/90 backdrop-blur-xl rounded-3xl overflow-hidden border border-gray-200/50 dark:border-gray-700/50 transition-all duration-700 group-hover:border-transparent">
        
        {/* Animated gradient border on hover */}
        <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700">
          <div className={`absolute inset-0 bg-gradient-to-br ${job.gradient} p-[1px] rounded-3xl`}>
            <div className="h-full w-full bg-white dark:bg-gray-900 rounded-3xl" />
          </div>
        </div>

        {/* Background glow effect */}
        <div className={`absolute inset-0 bg-gradient-to-br ${job.gradient} opacity-0 group-hover:opacity-5 rounded-3xl transition-opacity duration-700`} />
        
        {/* Urgency badge */}
        <div className="absolute top-4 right-4">
          <div className={`px-3 py-1 bg-gradient-to-r ${job.gradient} text-white text-xs font-bold rounded-full shadow-lg`}>
            {job.urgency}
          </div>
        </div>

        <div className="relative z-10 p-6 h-full flex flex-col">
          {/* Header */}
          <div className="mb-6">
            <div className="flex items-center gap-3 mb-3">
              <div className={`w-12 h-12 bg-gradient-to-br ${job.gradient} rounded-2xl flex items-center justify-center shadow-lg transform transition-transform duration-500 group-hover:rotate-6 group-hover:scale-110`}>
                <job.icon className="w-6 h-6 text-white" strokeWidth={1.5} />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-gray-900 group-hover:to-gray-600 dark:group-hover:from-white dark:group-hover:to-gray-300 group-hover:bg-clip-text transition-all duration-500">
                  {job.title}
                </h3>
                <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                  <span className="px-2 py-1 bg-gray-100 dark:bg-gray-800 rounded-full">{job.type}</span>
                  <span className={`font-bold bg-gradient-to-r ${job.gradient} bg-clip-text text-transparent`}>{job.salary}</span>
                </div>
              </div>
            </div>
            
            <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400 mb-3">
              <MapPin className="w-4 h-4" strokeWidth={1.5} />
              <span>{job.location}</span>
            </div>

            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              {job.description}
            </p>
          </div>

          {/* Requirements */}
          <div className="mb-6 flex-1">
            <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">Requirements</h4>
            <div className="space-y-2">
              {job.requirements.map((req, index) => (
                <div
                  key={req}
                  className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400"
                  style={{ 
                    transitionDelay: `${index * 100}ms` 
                  }}
                >
                  <div className={`w-1.5 h-1.5 bg-gradient-to-r ${job.gradient} rounded-full flex-shrink-0`} />
                  <span>{req}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Benefits */}
          <div className="mb-6">
            <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">Benefits</h4>
            <div className="flex flex-wrap gap-2">
              {job.benefits.map((benefit) => (
                <span
                  key={benefit}
                  className="text-xs bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 px-3 py-1 rounded-full border border-gray-200 dark:border-gray-700"
                >
                  {benefit}
                </span>
              ))}
            </div>
          </div>

          {/* Apply button */}
          <button className={`w-full py-3 bg-gradient-to-r ${job.gradient} text-white font-semibold rounded-xl transform transition-all duration-300 hover:shadow-lg hover:-translate-y-1 group-hover:shadow-xl`}>
            <span className="flex items-center justify-center gap-2">
              Apply Now
              <ArrowRight className="w-4 h-4 transform transition-transform duration-300 group-hover:translate-x-1" />
            </span>
          </button>
        </div>
      </div>
    </HoverCard>
  );
};

export default function CareersSectionNew() {
  return (
    <section id="careers" className="relative py-16 lg:py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800" />
      
      {/* Floating background elements */}
      <FloatingElement
        className="absolute top-20 left-10 w-64 h-64 opacity-20"
        intensity={0.3}
      >
        <div className="w-full h-full bg-gradient-to-br from-blue-400 to-purple-600 rounded-full blur-3xl" />
      </FloatingElement>
      
      <FloatingElement
        className="absolute bottom-20 right-10 w-48 h-48 opacity-30"
        intensity={0.4}
      >
        <div className="w-full h-full bg-gradient-to-br from-green-400 to-teal-600 rounded-full blur-3xl" />
      </FloatingElement>

      <div className="relative w-full max-w-7xl mx-auto px-6">
        {/* Header */}
        <ScrollReveal className="text-center space-y-6 mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl border border-gray-200/50 dark:border-gray-700/50 rounded-full text-sm text-gray-700 dark:text-gray-300 font-medium shadow-lg">
            <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full animate-pulse" />
            Join Our Mission
          </div>
          
          <h2 className="font-display text-4xl lg:text-5xl xl:text-6xl text-gray-900 dark:text-white leading-tight">
            Build the Future of{" "}
            <span className="relative">
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-teal-600 bg-clip-text text-transparent">
                AI Innovation
              </span>
              <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 via-purple-600 to-teal-600 rounded-full transform scale-x-0 animate-[scale-x_1s_ease-out_1.5s_forwards]" />
            </span>
          </h2>
          
          <p className="text-lg lg:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Join a team of passionate innovators working on cutting-edge AI solutions 
            that transform industries and improve lives worldwide.
          </p>
        </ScrollReveal>

        {/* Job Openings */}
        <StaggerGrid
          className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20"
          staggerDelay={0.2}
        >
          {openings.map((job) => (
            <JobCard key={job.title} job={job} />
          ))}
        </StaggerGrid>

        {/* Company Perks */}
        <ScrollReveal delay={0.4}>
          <div className="text-center mb-12">
            <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Why Work With Us?
            </h3>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              We believe great work happens when people are happy, healthy, and inspired.
            </p>
          </div>
          
          <StaggerGrid
            className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
            staggerDelay={0.1}
          >
            {perks.map((perk) => (
              <HoverCard key={perk.title} scale={1.05}>
                <div className="text-center p-6 bg-white/60 dark:bg-gray-800/60 backdrop-blur-xl rounded-2xl border border-gray-200/50 dark:border-gray-700/50">
                  <perk.icon className="w-8 h-8 text-gray-600 dark:text-gray-400 mx-auto mb-3" />
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                    {perk.title}
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {perk.description}
                  </p>
                </div>
              </HoverCard>
            ))}
          </StaggerGrid>
        </ScrollReveal>

        {/* Call to Action */}
        <ScrollReveal delay={0.6}>
          <div className="text-center">
            <HoverCard
              scale={1.02}
              className="inline-flex flex-col items-center gap-6 p-8 bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl border border-gray-200/50 dark:border-gray-700/50 rounded-3xl shadow-lg max-w-2xl mx-auto"
            >
              <div className="space-y-3 text-center">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                  Don&apos;t see the perfect role?
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  We&apos;re always interested in connecting with talented individuals 
                  who share our passion for AI innovation.
                </p>
              </div>
              
              <button
                onClick={() => {
                  const element = document.querySelector('#contact');
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="group px-8 py-4 bg-gradient-to-r from-blue-600 via-purple-600 to-teal-600 text-white font-semibold rounded-2xl transform transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/25 hover:-translate-y-1"
              >
                <span className="flex items-center gap-2">
                  Get in Touch
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