'use client';

import BeamsBackground from '@/components/background/BeamsBackground';
import CursorGlow from '@/components/background/CursorGlow';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';

const features = [
  {
    title: 'Responsive Design',
    description: 'Flawless experience across all devices and screen sizes.',
    icon: '📱',
  },
  {
    title: 'Lightning Performance',
    description: 'Optimized for speed with cutting-edge technology.',
    icon: '⚡',
  },
  {
    title: 'SEO-Ready Architecture',
    description: 'Built to rank and drive organic traffic from day one.',
    icon: '🚀',
  },
  {
    title: 'Custom AI Integration',
    description: 'Seamlessly embed voice agents and chat for enhanced UX.',
    icon: '🤖',
  },
];

const showcaseProjects = [
  {
    title: 'E-Commerce Platform',
    description: 'Modern storefront with AI-powered product recommendations.',
    gradient: 'from-purple-500 to-pink-500',
  },
  {
    title: 'SaaS Dashboard',
    description: 'Clean analytics interface with real-time data visualization.',
    gradient: 'from-cyan-500 to-blue-500',
  },
  {
    title: 'Portfolio Site',
    description: 'Minimalist design showcasing creative work beautifully.',
    gradient: 'from-green-500 to-emerald-500',
  },
];

function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 pt-32 pb-20">
      <div className="max-w-6xl mx-auto text-center z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold mb-6 bg-gradient-to-r from-[var(--accent-1)] via-[var(--accent-2)] to-[var(--accent-1)] bg-clip-text text-transparent">
            We Build Modern,
          </h1>
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold mb-8 bg-gradient-to-r from-[var(--accent-1)] via-[var(--accent-2)] to-[var(--accent-1)] bg-clip-text text-transparent">
            Conversion-Ready Websites
          </h1>
          
          <motion.p
            className="text-lg md:text-xl text-[var(--color-silver)]/80 max-w-3xl mx-auto mb-12 leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            Your brand deserves a digital home that looks as smart as your ideas.
          </motion.p>
          
          <motion.div
            className="flex justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9, duration: 0.8 }}
          >
            <button
              onClick={() => window.open('https://cal.com/kiwi-mars-acgcuv', '_blank')}
              className="px-8 py-4 bg-gradient-to-r from-[var(--accent-1)] to-[var(--accent-2)] rounded-full text-[var(--color-bg)] font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-lg"
            >
              Get Your Website Built
            </button>
          </motion.div>
        </motion.div>
        
        {/* Animated light beams effect */}
        <motion.div
          className="mt-20 flex justify-center gap-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
        >
          {[0, 1, 2, 3, 4].map((i) => (
            <motion.div
              key={i}
              className="w-1 bg-gradient-to-t from-[var(--accent-1)] to-transparent rounded-full"
              style={{ height: '100px' }}
              animate={{
                opacity: [0.3, 1, 0.3],
                scaleY: [1, 1.5, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: 'easeInOut',
                delay: i * 0.2,
              }}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function FeaturesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section ref={ref} className="relative py-32 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-[var(--accent-1)] to-[var(--accent-2)] bg-clip-text text-transparent">
            Engineered for Excellence
          </h2>
          <p className="text-xl text-[var(--color-silver)]/80 max-w-3xl mx-auto leading-relaxed">
            Every website we create is built with precision, performance, and your success in mind.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              className="glass rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 group cursor-pointer relative overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: index * 0.15 }}
            >
              <div className="relative z-10">
                <div className="text-6xl mb-6 group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-semibold mb-4 text-[var(--color-silver)] group-hover:text-[var(--accent-1)] transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-[var(--color-silver)]/70 leading-relaxed">
                  {feature.description}
                </p>
              </div>
              
              <motion.div
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                style={{
                  background: 'radial-gradient(circle at center, rgba(0, 198, 255, 0.2) 0%, transparent 70%)',
                }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ShowcaseSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section ref={ref} className="relative py-32 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-[var(--accent-1)] to-[var(--accent-2)] bg-clip-text text-transparent">
            Our Work
          </h2>
          <p className="text-xl text-[var(--color-silver)]/80 max-w-3xl mx-auto leading-relaxed">
            Stunning websites that convert visitors into customers.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {showcaseProjects.map((project, index) => (
            <motion.div
              key={project.title}
              className="glass rounded-2xl overflow-hidden cursor-pointer group"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className={`h-64 bg-gradient-to-br ${project.gradient} relative overflow-hidden`}>
                <motion.div
                  className="absolute inset-0 bg-black/20"
                  animate={{
                    y: hoveredIndex === index ? -10 : 0,
                  }}
                  transition={{ duration: 0.3 }}
                />
                
                {/* Simulated browser window */}
                <div className="absolute top-4 left-4 right-4 bg-black/40 rounded-lg p-2 backdrop-blur-sm">
                  <div className="flex gap-1.5 mb-2">
                    <div className="w-2 h-2 rounded-full bg-red-500"></div>
                    <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
                    <div className="w-2 h-2 rounded-full bg-green-500"></div>
                  </div>
                  <div className="h-1 bg-white/20 rounded"></div>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-2 text-[var(--color-silver)] group-hover:text-[var(--accent-1)] transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-[var(--color-silver)]/70">
                  {project.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTASection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section ref={ref} className="relative py-32 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-[var(--accent-1)] to-[var(--accent-2)] bg-clip-text text-transparent">
            Let&apos;s Build Your Site
          </h2>
          <p className="text-xl text-[var(--color-silver)]/80 max-w-2xl mx-auto">
            Tell us about your project and we&apos;ll bring it to life.
          </p>
        </motion.div>

        <motion.form
          onSubmit={handleSubmit}
          className="glass rounded-3xl p-8 md:p-12 space-y-6"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <div>
            <input
              type="text"
              placeholder="Your Name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 text-[var(--color-silver)] placeholder:text-[var(--color-silver)]/40 focus:outline-none focus:border-[var(--accent-1)] transition-colors duration-300"
              required
            />
          </div>
          <div>
            <input
              type="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 text-[var(--color-silver)] placeholder:text-[var(--color-silver)]/40 focus:outline-none focus:border-[var(--accent-1)] transition-colors duration-300"
              required
            />
          </div>
          <div>
            <textarea
              placeholder="Tell us about your project"
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              rows={5}
              className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 text-[var(--color-silver)] placeholder:text-[var(--color-silver)]/40 focus:outline-none focus:border-[var(--accent-1)] transition-colors duration-300 resize-none"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full px-8 py-4 bg-gradient-to-r from-[var(--accent-1)] to-[var(--accent-2)] rounded-full text-[var(--color-bg)] font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-lg"
          >
            Get Started
          </button>
        </motion.form>
      </div>
    </section>
  );
}

export default function WebsitesPage() {
  return (
    <main className="relative min-h-screen">
      <BeamsBackground />
      <CursorGlow />
      <Navbar />
      
      <HeroSection />
      <FeaturesSection />
      <ShowcaseSection />
      <CTASection />
      <Footer />
    </main>
  );
}
