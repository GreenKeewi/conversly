'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navItems = [
  { label: 'Voice Agents', href: '/voice-agents' },
  { label: 'Websites', href: '/websites' },
  { label: 'Mini Chat', href: '/mini-chat' },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <motion.nav
      className="fixed top-8 left-1/2 -translate-x-1/2 z-50"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="glass rounded-full px-8 py-4 flex gap-8 items-center">
        {navItems.map((item) => {
          const isActive = pathname === item.href || (pathname === '/' && item.href === '/voice-agents');
          
          return (
            <Link
              key={item.href}
              href={item.href}
              className="relative px-4 py-2 text-[var(--color-silver)] font-medium transition-all duration-300 hover:text-[var(--accent-1)] group"
            >
              {item.label}
              
              {/* Hover glow underline */}
              <motion.div
                className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-[var(--accent-1)] to-[var(--accent-2)] rounded-full"
                initial={{ scaleX: 0, opacity: 0 }}
                animate={{
                  scaleX: isActive ? 1 : 0,
                  opacity: isActive ? 1 : 0,
                }}
                whileHover={{ scaleX: 1, opacity: 1 }}
                transition={{ duration: 0.3 }}
              />
              
              {/* Active page glow */}
              {isActive && (
                <motion.div
                  className="absolute inset-0 rounded-full opacity-20"
                  style={{
                    background: 'radial-gradient(circle at center, var(--accent-1) 0%, transparent 70%)',
                  }}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 0.2 }}
                  transition={{ duration: 0.5 }}
                />
              )}
            </Link>
          );
        })}
      </div>
    </motion.nav>
  );
}
