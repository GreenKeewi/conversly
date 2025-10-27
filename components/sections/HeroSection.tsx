'use client';

import { motion } from 'framer-motion';
import { heroWaveformBars } from '@/lib/waveform';

interface HeroSectionProps {
  onOpenDemo: () => void;
}

export default function HeroSection({ onOpenDemo }: HeroSectionProps) {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    contactSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 pt-20 pb-32">
      <div className="max-w-6xl mx-auto text-center z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Main Title */}
          <h1 className="text-7xl md:text-8xl lg:text-9xl font-bold mb-6 bg-gradient-to-r from-[#00C6FF] via-[#2DFFF6] to-[#00C6FF] bg-clip-text text-transparent">
            Conversly
          </h1>
          
          <motion.h2
            className="text-3xl md:text-4xl lg:text-5xl font-light mb-8 text-[#E0E0E0]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            The Future of Voice.
          </motion.h2>
          
          <motion.p
            className="text-lg md:text-xl text-[#E0E0E0]/80 max-w-3xl mx-auto mb-12 leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            We build next-generation AI voice agents that sound human, act smart, 
            and elevate your customer experience.
          </motion.p>
          
          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9, duration: 0.8 }}
          >
            <button
              onClick={onOpenDemo}
              className="group relative px-8 py-4 bg-gradient-to-r from-[#00C6FF] to-[#2DFFF6] rounded-full text-[#0b0b0f] font-semibold text-lg hover:shadow-xl hover:shadow-[#00C6FF]/50 transition-all duration-300 hover:scale-105"
            >
              Try a Live Agent
              <span className="absolute inset-0 rounded-full bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300"></span>
            </button>
            
            <button
              onClick={scrollToContact}
              className="px-8 py-4 border-2 border-[#00C6FF]/50 rounded-full text-[#E0E0E0] font-semibold text-lg hover:border-[#00C6FF] hover:bg-[#00C6FF]/10 transition-all duration-300 hover:scale-105"
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
              className="w-1 bg-gradient-to-t from-[#00C6FF] to-[#2DFFF6] rounded-full"
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
