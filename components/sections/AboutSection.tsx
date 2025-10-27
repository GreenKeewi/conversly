'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const features = [
  {
    title: 'Smart Understanding',
    description: 'Advanced AI that comprehends context, intent, and nuance in every conversation.',
    icon: '🧠',
  },
  {
    title: 'Emotionally Aware',
    description: 'Voice agents that detect sentiment and respond with empathy and appropriate tone.',
    icon: '❤️',
  },
  {
    title: 'Business-Ready Integrations',
    description: 'Seamlessly connects with your CRM, scheduling tools, and existing workflows.',
    icon: '⚡',
  },
];

export default function AboutSection() {
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
          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-[#00C6FF] to-[#2DFFF6] bg-clip-text text-transparent">
            Your Brand, Given a Voice.
          </h2>
          <p className="text-xl text-[#E0E0E0]/80 max-w-3xl mx-auto leading-relaxed">
            Conversly builds intelligent voice agents for customer support, scheduling, 
            and lead conversion. Our agents talk, understand, and act like humans — 
            available 24/7 for your business.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              className="glass rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 group cursor-pointer"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              <div className="text-6xl mb-6 group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-[#E0E0E0] group-hover:text-[#00C6FF] transition-colors duration-300">
                {feature.title}
              </h3>
              <p className="text-[#E0E0E0]/70 leading-relaxed">
                {feature.description}
              </p>
              
              {/* Hover glow effect */}
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none glow-blue"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
