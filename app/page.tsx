'use client';

import { useState } from 'react';
import AnimatedOrbs from '@/components/background/AnimatedOrbs';
import CursorGlow from '@/components/background/CursorGlow';
import HeroSection from '@/components/sections/HeroSection';
import AboutSection from '@/components/sections/AboutSection';
import DemoSection from '@/components/sections/DemoSection';
import UseCasesSection from '@/components/sections/UseCasesSection';
import ContactSection from '@/components/sections/ContactSection';
import DemoModal from '@/components/DemoModal';
import Footer from '@/components/Footer';

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <main className="relative min-h-screen">
      {/* Background Effects */}
      <AnimatedOrbs />
      <CursorGlow />

      {/* Sections */}
      <HeroSection onOpenDemo={() => setIsModalOpen(true)} />
      <AboutSection />
      <DemoSection />
      <UseCasesSection />
      <ContactSection />
      <Footer />

      {/* Demo Modal */}
      <DemoModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </main>
  );
}
