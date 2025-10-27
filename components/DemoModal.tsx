'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useEffect } from 'react';
import { modalWaveformBars } from '@/lib/waveform';

interface DemoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function DemoModal({ isOpen, onClose }: DemoModalProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          {/* Modal */}
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              className="glass rounded-3xl p-8 md:p-12 max-w-2xl w-full relative"
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close button */}
              <button
                onClick={onClose}
                className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 transition-colors duration-300 flex items-center justify-center text-[#E0E0E0] hover:text-white"
                aria-label="Close modal"
              >
                ✕
              </button>

              <h3 className="text-4xl font-bold mb-4 bg-gradient-to-r from-[#00C6FF] to-[#2DFFF6] bg-clip-text text-transparent">
                Voice Agent Demo
              </h3>
              <p className="text-[#E0E0E0]/80 mb-8">
                Experience how natural our AI voice agents sound in real conversations.
              </p>

              {/* Demo Player Placeholder */}
              <div className="bg-white/5 rounded-2xl p-8 mb-6">
                <div className="flex justify-center items-center gap-1 h-24 mb-6">
                  {modalWaveformBars.map((bar) => (
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
                </div>

                <div className="flex justify-center">
                  <button className="w-16 h-16 rounded-full bg-gradient-to-r from-[#00C6FF] to-[#2DFFF6] flex items-center justify-center hover:scale-110 transition-transform duration-300">
                    <div className="w-0 h-0 border-t-10 border-t-transparent border-l-16 border-l-[#0b0b0f] border-b-10 border-b-transparent ml-1"></div>
                  </button>
                </div>
              </div>

              <div className="text-center text-sm text-[#E0E0E0]/60">
                🎧 Headphones recommended for the best experience
              </div>

              {/* Background glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#00C6FF]/10 to-[#2DFFF6]/10 rounded-3xl pointer-events-none"></div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}
