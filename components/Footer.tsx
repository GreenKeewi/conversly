'use client';

export default function Footer() {
  return (
    <footer className="relative py-12 px-4 border-t" style={{ borderColor: 'rgba(255,255,255,0.06)' }}>
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-[var(--accent-1)] to-[var(--accent-2)] bg-clip-text text-transparent mb-2">
              Conversly
            </h3>
            <p className="text-[var(--color-silver)]/60 text-sm">
              The Future of Voice Agents
            </p>
          </div>

          <div className="flex flex-col items-center md:items-end gap-2">
            <p className="text-[var(--color-silver)]/80 text-sm">
              © 2024 Conversly. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm text-[var(--color-silver)]/60">
              <a href="#" className="hover:text-[var(--accent-1)] transition-colors duration-300">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-[var(--accent-1)] transition-colors duration-300">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
