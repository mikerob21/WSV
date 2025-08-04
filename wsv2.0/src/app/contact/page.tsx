'use client';

import { memo, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import Navbar from '@/components/Navbar';

interface FormData {
  name: string;
  email: string;
  company: string;
  message: string;
  inquiryType: string;
}

const Contact = memo(() => {
  const heroRef = useRef(null);
  const formRef = useRef(null);
  const isHeroInView = useInView(heroRef, { once: true, amount: 0.3 });
  const isFormInView = useInView(formRef, { once: true, amount: 0.2 });

  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    company: '',
    message: '',
    inquiryType: 'Investment Opportunity'
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const inquiryTypes = [
    'Investment Opportunity',
    'Partnership Inquiry',
    'Media & Press',
    'General Question',
    'Strategic Consultation'
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      
      // Reset form after success
      setTimeout(() => {
        setFormData({
          name: '',
          email: '',
          company: '',
          message: '',
          inquiryType: 'Investment Opportunity'
        });
        setSubmitStatus('idle');
      }, 3000);
    }, 1000);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        duration: 1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 60 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        ease: [0.16, 1, 0.3, 1]
      }
    }
  };

  return (
    <div className="min-h-screen bg-neutral-50">
      <Navbar />
      
      {/* Clean Hero Section */}
      <section 
        ref={heroRef}
        className="relative pt-32 pb-20 px-6 lg:px-8 overflow-hidden"
        style={{
          background: `
            linear-gradient(135deg, 
              var(--neutral-50) 0%, 
              var(--blue-50) 20%, 
              var(--neutral-100) 100%
            )
          `
        }}
      >
        {/* Sophisticated Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-50/30 to-transparent" />
          <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-gradient-conic from-blue-100/10 via-transparent to-blue-200/5 rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isHeroInView ? "visible" : "hidden"}
            className="spacing-fibonacci-4"
          >
            <motion.h1 
              variants={itemVariants}
              className="text-6xl lg:text-7xl font-black mb-16 text-balance tracking-tight leading-tight"
            >
              Start the
              <span className="block text-brand">
                Conversation
              </span>
            </motion.h1>

            {/* Minimal Contact Info */}
            <motion.div 
              variants={itemVariants}
              className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-12 mb-16"
            >
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-blue-100 rounded-xl flex items-center justify-center text-brand">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <span className="text-secondary font-medium">hello@whitesportsventures.com</span>
              </div>
              
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-blue-100 rounded-xl flex items-center justify-center text-brand">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <span className="text-secondary font-medium">New York, NY</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Sophisticated Single-Column Form */}
      <section 
        ref={formRef}
        className="py-20 px-6 lg:px-8 bg-white"
      >
        <div className="max-w-2xl mx-auto">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isFormInView ? "visible" : "hidden"}
          >
            {/* Form Introduction */}
            <motion.div variants={itemVariants} className="text-center mb-12 spacing-fibonacci-3">
              <h2 className="text-4xl font-black mb-6 text-emphasis">
                Let's Build Something
                <span className="block text-brand">Extraordinary</span>
              </h2>
              
              <p className="text-secondary leading-relaxed max-w-lg mx-auto">
                Tell us about your vision, and let's explore how we can bring it to life together.
              </p>
            </motion.div>

            {/* Professional Form */}
            <motion.div variants={itemVariants}>
              <div className="surface-elevated hover-depth p-8 spacing-fibonacci-3">
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Inquiry Type */}
                  <div>
                    <label htmlFor="inquiryType" className="block text-sm font-semibold text-emphasis mb-2">
                      What brings you here?
                    </label>
                    <select
                      id="inquiryType"
                      name="inquiryType"
                      value={formData.inquiryType}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-neutral-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-white hover-depth"
                    >
                      {inquiryTypes.map((type) => (
                        <option key={type} value={type}>{type}</option>
                      ))}
                    </select>
                  </div>

                  {/* Name & Email Row */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-semibold text-emphasis mb-2">
                        Your Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-neutral-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 hover-depth"
                        placeholder="John Smith"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-semibold text-emphasis mb-2">
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-neutral-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 hover-depth"
                        placeholder="john@company.com"
                      />
                    </div>
                  </div>

                  {/* Company */}
                  <div>
                    <label htmlFor="company" className="block text-sm font-semibold text-emphasis mb-2">
                      Company / Organization
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-neutral-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 hover-depth"
                      placeholder="Your Company Name"
                    />
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-emphasis mb-2">
                      Tell us about your vision
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 border border-neutral-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 resize-none hover-depth"
                      placeholder="Share your ideas, goals, or questions. The more context you provide, the better we can tailor our response to your needs."
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="pt-4">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full btn-premium inline-flex items-center justify-center space-x-2 hover-magnetic cursor-magnetic min-h-[56px]"
                    >
                      {isSubmitting ? (
                        <>
                          <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          <span>Sending...</span>
                        </>
                      ) : submitStatus === 'success' ? (
                        <>
                          <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span>Message Sent!</span>
                        </>
                      ) : (
                        <>
                          <span>Send Message</span>
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                          </svg>
                        </>
                      )}
                    </button>
                  </div>

                  {/* Success Message */}
                  {submitStatus === 'success' && (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-center p-6 bg-green-50 border border-green-200 rounded-xl"
                    >
                      <p className="text-green-700 font-semibold mb-1">Thank you for reaching out!</p>
                      <p className="text-green-600 text-sm">We'll get back to you within 24 hours.</p>
                    </motion.div>
                  )}
                </form>
              </div>
            </motion.div>

            {/* Additional Information */}
            <motion.div variants={itemVariants} className="mt-12 text-center">
              <div className="bg-gradient-to-r from-blue-50 to-neutral-50 p-6 rounded-2xl border border-blue-100">
                <h4 className="font-bold text-emphasis mb-2">Ready to Move Fast?</h4>
                <p className="text-secondary text-sm">
                  For time-sensitive opportunities, reach out directly at{' '}
                  <a href="mailto:urgent@whitesportsventures.com" className="text-brand font-semibold hover:underline">
                    urgent@whitesportsventures.com
                  </a>
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
});

Contact.displayName = 'Contact';

export default Contact;