"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Send, CheckCircle, AlertCircle } from "lucide-react";
import CTAButton from "@/components/CTAButton";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [fieldErrors, setFieldErrors] = useState<Partial<Record<'name' | 'email' | 'company' | 'message', string>>>({});
  const [generalError, setGeneralError] = useState<string | null>(null);
  const [focusedField, setFocusedField] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');
    setFieldErrors({});
  setGeneralError(null);

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

  const data = await res.json().catch(() => ({}));

      if (!res.ok) {
        if (data?.errors) {
          setFieldErrors(data.errors);
          if (data.errors.general) setGeneralError(data.errors.general);
        }
        setSubmitStatus('error');
        return;
      }

      setSubmitStatus('success');
      setFormData({ name: '', email: '', company: '', message: '' });
    } catch {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  // Only animate scale; use CSS classes for border colors to avoid animating CSS variables
  const inputVariants = {
    focused: { scale: 1.02 },
    unfocused: { scale: 1 },
  };

  const formFields = [
    {
      name: 'name',
      label: 'Full Name',
      type: 'text',
      placeholder: 'Enter your full name',
      required: true,
      colSpan: 'md:col-span-1'
    },
    {
      name: 'email',
      label: 'Email Address',
      type: 'email',
      placeholder: 'your.email@company.com',
      required: true,
      colSpan: 'md:col-span-1'
    },
    {
      name: 'company',
      label: 'Company',
      type: 'text',
      placeholder: 'Your company name (optional)',
      required: false,
      colSpan: 'md:col-span-2'
    }
  ];

  return (
    <div className="relative">
      <AnimatePresence mode="wait">
        {submitStatus === 'success' ? (
          <motion.div
            key="success"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="text-center py-12"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
              className="w-16 h-16 bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-6"
            >
              <CheckCircle className="w-8 h-8 text-green-500" />
            </motion.div>
            
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-2xl font-bold text-text-primary mb-4"
            >
              Message Sent Successfully!
            </motion.h3>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="text-text-secondary mb-8"
            >
              Thank you for reaching out. We&apos;ll get back to you within 24 hours.
            </motion.p>
            
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              onClick={() => setSubmitStatus('idle')}
              className="px-6 py-3 bg-background-card border border-border-accent text-brand-primary rounded-xl hover:bg-brand-primary/5 transition-all duration-200"
            >
              Send Another Message
            </motion.button>
          </motion.div>
        ) : (
          <motion.form
            key="form"
            onSubmit={handleSubmit}
            initial={{ opacity: 1 }}
            className="space-y-6"
          >
            {/* Form fields grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {formFields.map((field, index) => (
                <motion.div
                  key={field.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={field.colSpan}
                >
                  <label className="block text-sm font-semibold text-text-primary mb-3">
                    {field.label} {field.required && <span className="text-brand-primary">*</span>}
                  </label>
                  
                  <motion.div className="relative">
                    <motion.input
                      type={field.type}
                      name={field.name}
                      value={formData[field.name as keyof typeof formData]}
                      onChange={handleChange}
                      onFocus={() => setFocusedField(field.name)}
                      onBlur={() => setFocusedField(null)}
                      required={field.required}
                      variants={inputVariants}
                      animate={focusedField === field.name ? 'focused' : 'unfocused'}
                      transition={{ duration: 0.2 }}
                      className={`w-full px-4 py-4 rounded-xl bg-background-subtle/50 backdrop-blur-sm border ${fieldErrors[field.name as 'name' | 'email' | 'company' | 'message'] ? 'border-red-500/50' : focusedField === field.name ? 'border-brand-primary' : 'border-border-subtle'} text-text-primary placeholder-text-muted focus:outline-none transition-colors duration-200`}
                      placeholder={field.placeholder}
                    />
                    
                    {/* Focus indicator */}
                    <motion.div
                      className="absolute -inset-0.5 bg-gradient-to-r from-brand-primary via-brand-accent to-brand-secondary rounded-xl opacity-0 -z-10"
                      animate={{ 
                        opacity: focusedField === field.name ? 0.2 : 0 
                      }}
                      transition={{ duration: 0.2 }}
                    />
                    {fieldErrors[field.name as 'name' | 'email' | 'company' | 'message'] && (
                      <div className="mt-2 text-sm text-red-400 flex items-center gap-2">
                        <AlertCircle className="w-4 h-4" />
                        {fieldErrors[field.name as 'name' | 'email' | 'company' | 'message']}
                      </div>
                    )}
                  </motion.div>
                </motion.div>
              ))}
            </div>

            {/* Message field */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <label className="block text-sm font-semibold text-text-primary mb-3">
                Message <span className="text-brand-primary">*</span>
              </label>
              
              <motion.div className="relative">
                <motion.textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  onFocus={() => setFocusedField('message')}
                  onBlur={() => setFocusedField(null)}
                  required
                  rows={5}
                  variants={inputVariants}
                  animate={focusedField === 'message' ? 'focused' : 'unfocused'}
                  transition={{ duration: 0.2 }}
                  className={`w-full px-4 py-4 rounded-xl bg-background-subtle/50 backdrop-blur-sm border ${fieldErrors.message ? 'border-red-500/50' : focusedField === 'message' ? 'border-brand-primary' : 'border-border-subtle'} text-text-primary placeholder-text-muted focus:outline-none resize-none transition-colors duration-200`}
                  placeholder="Tell us about your project, goals, and how we can help transform your business with AI solutions..."
                />
              {fieldErrors.message && (
                <div className="mt-2 text-sm text-red-400 flex items-center gap-2">
                  <AlertCircle className="w-4 h-4" />
                  {fieldErrors.message}
                </div>
              )}
                
                {/* Focus indicator */}
                <motion.div
                  className="absolute -inset-0.5 bg-gradient-to-r from-brand-primary via-brand-accent to-brand-secondary rounded-xl opacity-0 -z-10"
                  animate={{ 
                    opacity: focusedField === 'message' ? 0.2 : 0 
                  }}
                  transition={{ duration: 0.2 }}
                />
              </motion.div>
              
              {/* Character count */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: formData.message.length > 0 ? 1 : 0 }}
                className="flex justify-between items-center mt-2"
              >
                <div className="text-xs text-text-muted">
                  {formData.message.length}/500 characters
                </div>
                <div className="text-xs text-text-muted">
                  {formData.message.length < 50 ? 'Tell us more about your project' : 'Great detail!'}
                </div>
              </motion.div>
            </motion.div>

            {/* Submit button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="pt-4"
            >
              <CTAButton
                label={isSubmitting ? "Sending..." : "Send Message"}
                variant="primary"
                size="lg"
                loading={isSubmitting}
                icon={!isSubmitting ? <Send className="w-4 h-4" /> : undefined}
              />
            </motion.div>

            {/* Error state */}
            <AnimatePresence>
              {submitStatus === 'error' && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="flex items-center gap-3 p-4 bg-red-500/10 border border-red-500/20 rounded-xl text-red-400"
                >
                  <AlertCircle className="w-5 h-5 flex-shrink-0" />
                  <div>
                    <div className="font-medium">Failed to send message</div>
                    <div className="text-sm opacity-80">
                      {generalError ? generalError : 'Please try again or contact us directly.'}
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Privacy notice */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="text-xs text-text-muted text-center pt-4 border-t border-border-subtle"
            >
              <span className="inline-flex items-center gap-1">
                🔒 Your information is secure and confidential
              </span>
              <br />
              We typically respond within 24 hours during business days.
            </motion.p>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
}
