'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';

export default function ContactSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Placeholder for form submission
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', message: '' });
    }, 3000);
  };

  return (
    <section id="contact" ref={ref} className="relative py-32 px-4">
      <div className="max-w-3xl mx-auto">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-[#00C6FF] to-[#2DFFF6] bg-clip-text text-transparent">
            Let&apos;s Build Your Voice Agent
          </h2>
          <p className="text-xl text-[#E0E0E0]/80">
            Partner with Conversly and give your business the voice of the future.
          </p>
        </motion.div>

        <motion.div
          className="glass rounded-3xl p-8 md:p-12 relative overflow-hidden"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          {submitted ? (
            <motion.div
              className="text-center py-12"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <div className="text-6xl mb-4">✨</div>
              <h3 className="text-3xl font-bold text-[#00C6FF] mb-2">Thank you!</h3>
              <p className="text-[#E0E0E0]/80">We&apos;ll be in touch soon.</p>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-[#E0E0E0] mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 text-[#E0E0E0] placeholder:text-[#E0E0E0]/40 focus:outline-none focus:border-[#00C6FF] transition-colors duration-300"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-[#E0E0E0] mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 text-[#E0E0E0] placeholder:text-[#E0E0E0]/40 focus:outline-none focus:border-[#00C6FF] transition-colors duration-300"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-[#E0E0E0] mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 text-[#E0E0E0] placeholder:text-[#E0E0E0]/40 focus:outline-none focus:border-[#00C6FF] transition-colors duration-300 resize-none"
                  placeholder="Tell us about your project..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-[#00C6FF] to-[#2DFFF6] rounded-full px-8 py-4 text-[#0b0b0f] font-semibold text-lg hover:shadow-xl hover:shadow-[#00C6FF]/50 transition-all duration-300 hover:scale-105"
              >
                Send Message
              </button>
            </form>
          )}

          {/* Background gradient glow */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-br from-[#00C6FF]/5 to-[#2DFFF6]/5 rounded-3xl pointer-events-none"
            animate={{
              background: [
                'linear-gradient(135deg, rgba(0, 198, 255, 0.05) 0%, rgba(45, 255, 246, 0.05) 100%)',
                'linear-gradient(135deg, rgba(45, 255, 246, 0.05) 0%, rgba(0, 198, 255, 0.05) 100%)',
              ],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
        </motion.div>
      </div>
    </section>
  );
}
