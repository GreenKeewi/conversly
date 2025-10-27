'use client';

import BeamsBackground from '@/components/background/BeamsBackground';
import CursorGlow from '@/components/background/CursorGlow';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';

const integrationSteps = [
  {
    step: '1',
    title: 'We create the AI chat',
    description: 'Customized to your brand voice and trained on your FAQs.',
    icon: '🤖',
  },
  {
    step: '2',
    title: 'You embed one line of code',
    description: 'Simple script tag that works with any website platform.',
    icon: '💻',
  },
  {
    step: '3',
    title: 'Your visitors start chatting',
    description: 'Instant support, lead capture, and booking — all automated.',
    icon: '💬',
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
            Bring AI Conversations
          </h1>
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold mb-8 bg-gradient-to-r from-[var(--accent-1)] via-[var(--accent-2)] to-[var(--accent-1)] bg-clip-text text-transparent">
            to Your Website
          </h1>
          
          <motion.p
            className="text-lg md:text-xl text-[var(--color-silver)]/80 max-w-3xl mx-auto mb-12 leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            Embed a smart mini chat that talks like your brand — helping customers, 
            answering FAQs, and booking calls.
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
              Add Chat to My Site
            </button>
          </motion.div>
        </motion.div>
        
        {/* Animated speech bubbles */}
        <motion.div
          className="mt-20 flex justify-center gap-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
        >
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              className="glass rounded-2xl px-6 py-3"
              animate={{
                y: [0, -10, 0],
                opacity: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: 'easeInOut',
                delay: i * 0.3,
              }}
            >
              <div className="flex gap-1">
                <div className="w-2 h-2 rounded-full bg-[var(--accent-1)]"></div>
                <div className="w-2 h-2 rounded-full bg-[var(--accent-2)]"></div>
                <div className="w-2 h-2 rounded-full bg-[var(--accent-1)]"></div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function DemoSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [messages, setMessages] = useState([
    { text: 'Hi! How can I help you today?', sender: 'bot' },
  ]);
  const [input, setInput] = useState('');

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    setMessages([...messages, { text: input, sender: 'user' }]);
    setInput('');

    // Simulate bot response
    setTimeout(() => {
      setMessages(prev => [...prev, {
        text: "I'd be happy to help! Let me connect you with our team.",
        sender: 'bot'
      }]);
    }, 1000);
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
            See It In Action
          </h2>
          <p className="text-xl text-[var(--color-silver)]/80 max-w-2xl mx-auto">
            Interactive demo of how your customers will experience the chat.
          </p>
        </motion.div>

        <div className="relative min-h-[500px] glass rounded-3xl p-12">
          {/* Floating chat bubble button */}
          <motion.button
            className="fixed bottom-8 right-8 w-16 h-16 rounded-full bg-gradient-to-r from-[var(--accent-1)] to-[var(--accent-2)] flex items-center justify-center text-3xl shadow-lg group"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsChatOpen(!isChatOpen)}
            initial={{ opacity: 0, scale: 0 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            {isChatOpen ? '✕' : '💬'}
            
            {/* Glow effect */}
            <motion.div
              className="absolute inset-0 rounded-full"
              style={{
                background: 'radial-gradient(circle, rgba(125,211,252,0.4) 0%, transparent 70%)',
              }}
              animate={{
                scale: [1, 1.3, 1],
                opacity: [0.5, 0.8, 0.5],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            />
          </motion.button>

          {/* Chat window */}
          <AnimatePresence>
            {isChatOpen && (
              <motion.div
                className="fixed bottom-28 right-8 w-96 h-[500px] glass rounded-3xl flex flex-col overflow-hidden shadow-2xl"
                initial={{ opacity: 0, y: 20, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 20, scale: 0.9 }}
                transition={{ duration: 0.3 }}
              >
                {/* Chat header */}
                <div className="bg-gradient-to-r from-[var(--accent-1)] to-[var(--accent-2)] p-4 text-[var(--color-bg)] font-semibold">
                  Conversly AI Assistant
                </div>

                {/* Messages */}
                <div className="flex-1 overflow-y-auto p-4 space-y-4">
                  {messages.map((msg, idx) => (
                    <motion.div
                      key={idx}
                      className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div
                        className={`max-w-[80%] px-4 py-2 rounded-2xl ${
                          msg.sender === 'user'
                            ? 'bg-gradient-to-r from-[var(--accent-1)] to-[var(--accent-2)] text-[var(--color-bg)]'
                            : 'bg-white/10 text-[var(--color-silver)]'
                        }`}
                      >
                        {msg.text}
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Input */}
                <form onSubmit={handleSendMessage} className="p-4 border-t border-white/10">
                  <div className="flex gap-2">
                    <input
                      type="text"
                      value={input}
                      onChange={(e) => setInput(e.target.value)}
                      placeholder="Type a message..."
                      className="flex-1 bg-white/5 border border-white/10 rounded-full px-4 py-2 text-[var(--color-silver)] placeholder:text-[var(--color-silver)]/40 focus:outline-none focus:border-[var(--accent-1)] transition-colors duration-300"
                    />
                    <button
                      type="submit"
                      className="bg-gradient-to-r from-[var(--accent-1)] to-[var(--accent-2)] rounded-full px-6 py-2 text-[var(--color-bg)] font-semibold hover:scale-105 transition-transform duration-300"
                    >
                      Send
                    </button>
                  </div>
                </form>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Instructions */}
          <div className="text-center text-[var(--color-silver)]/60">
            <p className="text-lg mb-4">Click the chat bubble to see how it works →</p>
            <p className="text-sm">This is a live preview of your future chat widget</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function IntegrationStepsSection() {
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
            Simple Integration
          </h2>
          <p className="text-xl text-[var(--color-silver)]/80 max-w-3xl mx-auto leading-relaxed">
            Get up and running in minutes, not hours.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {integrationSteps.map((step, index) => (
            <motion.div
              key={step.step}
              className="glass rounded-2xl p-8 relative overflow-hidden group"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              <div className="relative z-10">
                <div className="text-6xl mb-6 group-hover:scale-110 transition-transform duration-300">
                  {step.icon}
                </div>
                <div className="text-5xl font-bold mb-4 text-[var(--accent-1)]">
                  {step.step}
                </div>
                <h3 className="text-2xl font-semibold mb-4 text-[var(--color-silver)]">
                  {step.title}
                </h3>
                <p className="text-[var(--color-silver)]/70 leading-relaxed">
                  {step.description}
                </p>
              </div>
              
              <motion.div
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                style={{
                  background: 'radial-gradient(circle at center, rgba(0, 198, 255, 0.15) 0%, transparent 70%)',
                }}
              />
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
            Let&apos;s Add Chat to Your Site
          </h2>
          <p className="text-xl text-[var(--color-silver)]/80 max-w-2xl mx-auto">
            Start engaging visitors with intelligent conversations today.
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
              placeholder="Tell us about your website"
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

export default function MiniChatPage() {
  return (
    <main className="relative min-h-screen">
      <BeamsBackground />
      <CursorGlow />
      <Navbar />
      
      <HeroSection />
      <DemoSection />
      <IntegrationStepsSection />
      <CTASection />
      <Footer />
    </main>
  );
}
