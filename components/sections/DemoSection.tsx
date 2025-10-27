'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { demoWaveformBars } from '@/lib/waveform';

export default function DemoSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [isPlaying, setIsPlaying] = useState(false);
  const [input, setInput] = useState('');

  const handlePlay = () => {
    setIsPlaying(true);
    // Simulate playing for 3 seconds
    setTimeout(() => setIsPlaying(false), 3000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Placeholder for agent interaction
    console.log('Agent query:', input);
    setInput('');
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
          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-[#00C6FF] to-[#2DFFF6] bg-clip-text text-transparent">
            Experience the Future
          </h2>
          <p className="text-xl text-[#E0E0E0]/80 max-w-2xl mx-auto">
            Listen to how natural and intelligent our voice agents sound.
          </p>
        </motion.div>

        <motion.div
          className="glass rounded-3xl p-12 relative overflow-hidden"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          {/* Waveform Visualization */}
          <div className="flex justify-center items-center gap-1 h-32 mb-8">
            {demoWaveformBars.map((bar, i) => (
              <motion.div
                key={bar.id}
                className="w-1 bg-gradient-to-t from-[#00C6FF] to-[#2DFFF6] rounded-full"
                animate={{
                  height: isPlaying
                    ? [
                        bar.minHeight,
                        bar.maxHeight,
                        bar.minHeight,
                      ]
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

          {/* Play Button */}
          <div className="flex justify-center mb-8">
            <button
              onClick={handlePlay}
              disabled={isPlaying}
              className="group relative w-20 h-20 rounded-full bg-gradient-to-r from-[#00C6FF] to-[#2DFFF6] flex items-center justify-center hover:scale-110 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isPlaying ? (
                <div className="w-4 h-4 bg-[#0b0b0f] rounded-sm"></div>
              ) : (
                <div className="w-0 h-0 border-t-8 border-t-transparent border-l-12 border-l-[#0b0b0f] border-b-8 border-b-transparent ml-1"></div>
              )}
              
              {/* Ripple effect when playing */}
              {isPlaying && (
                <motion.div
                  className="absolute inset-0 rounded-full border-2 border-[#00C6FF]"
                  initial={{ scale: 1, opacity: 1 }}
                  animate={{ scale: 2, opacity: 0 }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                />
              )}
            </button>
          </div>

          {/* Ask the Agent Input */}
          <form onSubmit={handleSubmit} className="max-w-md mx-auto">
            <div className="relative">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask the agent a question..."
                className="w-full bg-white/5 border border-white/10 rounded-full px-6 py-4 text-[#E0E0E0] placeholder:text-[#E0E0E0]/40 focus:outline-none focus:border-[#00C6FF] transition-colors duration-300"
              />
              <button
                type="submit"
                className="absolute right-2 top-1/2 -translate-y-1/2 bg-gradient-to-r from-[#00C6FF] to-[#2DFFF6] rounded-full px-6 py-2 text-[#0b0b0f] font-semibold hover:scale-105 transition-transform duration-300"
              >
                Send
              </button>
            </div>
          </form>

          {/* Background gradient glow */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#00C6FF]/10 to-[#2DFFF6]/10 rounded-3xl opacity-50 pointer-events-none"></div>
        </motion.div>
      </div>
    </section>
  );
}
