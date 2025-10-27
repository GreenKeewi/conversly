'use client';

import BeamsBackground from '@/components/background/BeamsBackground';
import CursorGlow from '@/components/background/CursorGlow';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import { heroWaveformBars } from '@/lib/waveform';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { demoWaveformBars } from '@/lib/waveform';

const features = [
  {
    title: 'Natural Conversations',
    description: 'AI that understands context, intent, and nuance in every conversation.',
    icon: '🗣️',
  },
  {
    title: '24/7 Availability',
    description: 'Always-on voice agents that never miss a call or customer inquiry.',
    icon: '🌙',
  },
  {
    title: 'CRM Integrations',
    description: 'Seamlessly connects with Salesforce, HubSpot, and your existing tools.',
    icon: '⚡',
  },
  {
    title: 'Smart Call Routing',
    description: 'Intelligent routing based on caller intent and business logic.',
    icon: '🎯',
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
          <h1 className="text-7xl md:text-8xl lg:text-9xl font-bold mb-6 bg-gradient-to-r from-[var(--accent-1)] via-[var(--accent-2)] to-[var(--accent-1)] bg-clip-text text-transparent">
            Conversly
          </h1>
          
          <motion.h2
            className="text-3xl md:text-4xl lg:text-5xl font-light mb-8 text-[var(--color-silver)]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            The Future of Voice.
          </motion.h2>
          
          <motion.p
            className="text-lg md:text-xl text-[var(--color-silver)]/80 max-w-3xl mx-auto mb-12 leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            Experience human-sounding AI that handles real customer conversations.
          </motion.p>
          
          <motion.div
            className="flex flex-wrap justify-center gap-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9, duration: 0.8 }}
          >
            <button
              onClick={() => window.open('tel:+1234567890', '_self')}
              className="px-8 py-4 bg-gradient-to-r from-[var(--accent-1)] to-[var(--accent-2)] rounded-full text-[var(--color-bg)] font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-lg"
            >
              Call the AI Agent
            </button>
            <button
              onClick={() => window.open('https://cal.com/kiwi-mars-acgcuv', '_blank')}
              className="px-8 py-4 border-2 rounded-full text-[var(--color-silver)] font-semibold text-lg transition-all duration-300 hover:scale-105"
              style={{ borderColor: 'var(--accent-1)', backgroundColor: 'transparent' }}
            >
              Book Consultation
            </button>
          </motion.div>
        </motion.div>
        
        <motion.div
          className="mt-20 flex justify-center gap-1 h-24"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
        >
          {heroWaveformBars.map((bar) => (
            <motion.div
              key={bar.id}
              className="w-1 bg-gradient-to-t from-[var(--accent-1)] to-[var(--accent-2)] rounded-full"
              animate={{
                height: [
                  bar.minHeight,
                  bar.maxHeight,
                  bar.minHeight,
                ],
              }}
              transition={{
                duration: bar.duration,
                repeat: Infinity,
                ease: 'easeInOut',
                delay: bar.delay,
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
            Built for Modern Business
          </h2>
          <p className="text-xl text-[var(--color-silver)]/80 max-w-3xl mx-auto leading-relaxed">
            Our AI voice agents deliver exceptional customer experiences with intelligence and empathy.
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

function DemoSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlay = () => {
    setIsPlaying(true);
    setTimeout(() => setIsPlaying(false), 3000);
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
            Hear the Difference
          </h2>
          <p className="text-xl text-[var(--color-silver)]/80 max-w-2xl mx-auto">
            Listen to how natural and intelligent our voice agents sound.
          </p>
        </motion.div>

        <motion.div
          className="glass rounded-3xl p-12 relative overflow-hidden"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <div className="flex justify-center items-center gap-1 h-32 mb-8">
            {demoWaveformBars.map((bar, i) => (
              <motion.div
                key={bar.id}
                className="w-1 bg-gradient-to-t from-[var(--accent-1)] to-[var(--accent-2)] rounded-full"
                animate={{
                  height: isPlaying
                    ? [bar.minHeight, bar.maxHeight, bar.minHeight]
                    : 20,
                }}
                transition={{
                  duration: isPlaying ? 0.5 : 0.3,
                  repeat: isPlaying ? Infinity : 0,
                  ease: 'easeInOut',
                  delay: i * 0.02,
                }}
              />
            ))}
          </div>

          <div className="flex justify-center">
            <button
              onClick={handlePlay}
              disabled={isPlaying}
              className="group relative w-20 h-20 rounded-full bg-gradient-to-r from-[var(--accent-1)] to-[var(--accent-2)] flex items-center justify-center hover:scale-110 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isPlaying ? (
                <div className="w-4 h-4 bg-[var(--color-bg)] rounded-sm"></div>
              ) : (
                <div className="w-0 h-0 border-t-8 border-t-transparent border-l-12 border-l-[var(--color-bg)] border-b-8 border-b-transparent ml-1"></div>
              )}
              
              {isPlaying && (
                <motion.div
                  className="absolute inset-0 rounded-full border-2"
                  style={{ borderColor: 'var(--accent-1)' }}
                  initial={{ scale: 1, opacity: 1 }}
                  animate={{ scale: 2, opacity: 0 }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                />
              )}
            </button>
          </div>

          <div
            className="absolute inset-0 rounded-3xl opacity-50 pointer-events-none"
            style={{ background: 'linear-gradient(135deg, rgba(125,211,252,0.06) 0%, rgba(139,92,246,0.06) 100%)' }}
          />
        </motion.div>
      </div>
    </section>
  );
}

function ContactCTASection() {
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
            Partner with Conversly
          </h2>
          <p className="text-xl text-[var(--color-silver)]/80 max-w-2xl mx-auto">
            Bring Your Brand to Life.
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
              placeholder="Your Message"
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
            Send Message
          </button>
        </motion.form>
      </div>
    </section>
  );
}

export default function VoiceAgentsPage() {
  return (
    <main className="relative min-h-screen">
      <BeamsBackground />
      <CursorGlow />
      <Navbar />
      
      <HeroSection />
      <FeaturesSection />
      <DemoSection />
      <ContactCTASection />
      <Footer />
    </main>
  );
}
