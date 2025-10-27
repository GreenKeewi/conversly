'use client';

import BeamsBackground from '@/components/background/BeamsBackground';
import CursorGlow from '@/components/background/CursorGlow';
import Dock from '@/components/Dock';
import HeroSection from '@/components/sections/HeroSection';
import AboutSection from '@/components/sections/AboutSection';
import UseCasesSection from '@/components/sections/UseCasesSection';
import ContactSection from '@/components/sections/ContactSection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="relative min-h-screen">
      {/* Background Effects */}
      <BeamsBackground />
      <CursorGlow />
      <Dock />

      {/* Sections */}
      <HeroSection />
      <AboutSection />
      <UseCasesSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
