"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <motion.div
          whileFocus={{ scale: 1.02 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
        >
          <label className="block text-sm font-medium text-text-primary mb-2">
            Name *
          </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 rounded-lg bg-background border border-white/10 text-text-primary placeholder-text-muted focus:border-brand-primary focus:outline-none transition-colors"
            placeholder="Your full name"
          />
        </motion.div>

        <motion.div
          whileFocus={{ scale: 1.02 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
        >
          <label className="block text-sm font-medium text-text-primary mb-2">
            Email *
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 rounded-lg bg-background border border-white/10 text-text-primary placeholder-text-muted focus:border-brand-primary focus:outline-none transition-colors"
            placeholder="your.email@company.com"
          />
        </motion.div>
      </div>

      <motion.div
        whileFocus={{ scale: 1.02 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      >
        <label className="block text-sm font-medium text-text-primary mb-2">
          Company
        </label>
        <input
          type="text"
          name="company"
          value={formData.company}
          onChange={handleChange}
          className="w-full px-4 py-3 rounded-lg bg-background border border-white/10 text-text-primary placeholder-text-muted focus:border-brand-primary focus:outline-none transition-colors"
          placeholder="Your company name"
        />
      </motion.div>

      <motion.div
        whileFocus={{ scale: 1.02 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      >
        <label className="block text-sm font-medium text-text-primary mb-2">
          Message *
        </label>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          rows={5}
          className="w-full px-4 py-3 rounded-lg bg-background border border-white/10 text-text-primary placeholder-text-muted focus:border-brand-primary focus:outline-none transition-colors resize-none"
          placeholder="Tell us about your project, goals, and how we can help transform your business..."
        />
      </motion.div>

      <motion.button
        type="submit"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
        className="w-full px-6 py-3 rounded-lg bg-gradient-to-r from-brand-primary to-brand-secondary text-black font-medium hover:opacity-90 transition-opacity"
      >
        Send Message
      </motion.button>

      <p className="text-xs text-text-muted text-center">
        We typically respond within 24 hours. Your information is kept confidential.
      </p>
    </form>
  );
}
