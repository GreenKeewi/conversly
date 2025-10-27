'use client';

import { motion } from 'framer-motion';
import { heroWaveformBars } from '@/lib/waveform';

export default function HeroSection() {

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center px-4 pt-20 pb-32">
      <div className="max-w-6xl mx-auto text-center z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Main Title */}
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
            We build next-generation AI voice agents that sound human, act smart, 
            and elevate your customer experience.
          </motion.p>
          
          {/* CTA Buttons */}
          <motion.div
            className="flex justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9, duration: 0.8 }}
          >
            <button
              onClick={() => window.open('https://cal.com/kiwi-mars-acgcuv', '_blank')}
              className="px-8 py-4 border-2 rounded-full text-[var(--color-silver)] font-semibold text-lg transition-all duration-300 hover:scale-105"
              style={{ borderColor: 'var(--accent-1)', backgroundColor: 'transparent' }}
            >
              Book a Call
            </button>
          </motion.div>
        </motion.div>
        
        {/* Animated Waveform */}
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
