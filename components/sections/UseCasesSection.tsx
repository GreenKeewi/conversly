'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const useCases = [
  {
    title: 'Customer Support',
    description: 'Handle inquiries 24/7 with intelligent, empathetic responses that resolve issues fast.',
    icon: '💬',
  },
  {
    title: 'Appointment Scheduling',
    description: 'Automate booking, rescheduling, and reminders with natural conversation flow.',
    icon: '📅',
  },
  {
    title: 'Sales Outreach',
    description: 'Engage prospects with personalized calls that qualify leads and book meetings.',
    icon: '📞',
  },
  {
    title: 'Lead Qualification',
    description: 'Identify high-value opportunities through intelligent conversation and data capture.',
    icon: '🎯',
  },
];

export default function UseCasesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="usecases" ref={ref} className="relative py-32 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-[var(--accent-1)] to-[var(--accent-2)] bg-clip-text text-transparent">
            Built for Every Industry
          </h2>
          <p className="text-xl text-[var(--color-silver)]/80 max-w-3xl mx-auto">
            From healthcare to retail, our voice agents adapt to your unique business needs.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {useCases.map((useCase, index) => (
            <motion.div
              key={useCase.title}
              className="glass rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 group cursor-pointer relative overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: index * 0.15 }}
            >
              <div className="relative z-10">
                <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {useCase.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3 text-[var(--color-silver)] group-hover:text-[var(--accent-1)] transition-colors duration-300">
                  {useCase.title}
                </h3>
                <p className="text-[var(--color-silver)]/70 text-sm leading-relaxed">
                  {useCase.description}
                </p>
              </div>
              
              {/* Hover glow effect */}
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
