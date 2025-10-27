'use client';

import React from 'react';

const sections = [
  { id: 'hero', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'usecases', label: 'Use Cases' },
  { id: 'contact', label: 'Contact' },
];

function Icon({ name }: { name: string }) {
  const props: React.SVGProps<SVGSVGElement> = { width: 20, height: 20, fill: 'none', stroke: 'currentColor', strokeWidth: 1.5, strokeLinecap: 'round', strokeLinejoin: 'round' };
  switch (name) {
    case 'hero':
      return (
        <svg {...props} viewBox="0 0 24 24" aria-hidden>
          <path d="M3 11.5L12 4l9 7.5V21a1 1 0 0 1-1 1h-5v-6H9v6H4a1 1 0 0 1-1-1v-9.5z" />
        </svg>
      );
    case 'about':
      return (
        <svg {...props} viewBox="0 0 24 24" aria-hidden>
          <circle cx="12" cy="12" r="10" />
          <path d="M12 8v4" />
          <path d="M12 16h.01" />
        </svg>
      );
    case 'usecases':
      return (
        <svg {...props} viewBox="0 0 24 24" aria-hidden>
          <rect x="3" y="3" width="7" height="7" rx="1" />
          <rect x="14" y="3" width="7" height="7" rx="1" />
          <rect x="14" y="14" width="7" height="7" rx="1" />
          <rect x="3" y="14" width="7" height="7" rx="1" />
        </svg>
      );
    case 'contact':
      return (
        <svg {...props} viewBox="0 0 24 24" aria-hidden>
          <path d="M21 8v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8" />
          <polyline points="3 6 12 13 21 6" />
        </svg>
      );
    default:
      return null;
  }
}

export default function Dock() {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    el?.scrollIntoView({ behavior: 'smooth', block: 'center' });
  };

  return (
    <nav className="fixed right-6 top-1/2 transform -translate-y-1/2 z-40 flex flex-col gap-3">
      {sections.map((s) => (
        <button
          key={s.id}
          onClick={() => scrollTo(s.id)}
          className="w-14 h-14 rounded-full glass flex items-center justify-center text-sm font-medium text-[var(--color-silver)] hover:scale-105 transition-transform duration-150"
          aria-label={`Scroll to ${s.label}`}
        >
          <Icon name={s.id} />
        </button>
      ))}

      {/* Booking CTA */}
      <a
        href="https://cal.com/kiwi-mars-acgcuv"
        target="_blank"
        rel="noopener noreferrer"
        className="mt-4 block text-center text-sm px-3 py-2 rounded-xl font-semibold hover:shadow-lg"
        style={{ background: 'linear-gradient(90deg, var(--accent-1), var(--accent-2))', color: 'var(--color-bg)' }}
      >
        Book
      </a>
    </nav>
  );
}
