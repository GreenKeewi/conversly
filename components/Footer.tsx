'use client';

export default function Footer() {
  return (
    <footer className="relative py-12 px-4 border-t border-white/10">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-[#00C6FF] to-[#2DFFF6] bg-clip-text text-transparent mb-2">
              Conversly
            </h3>
            <p className="text-[#E0E0E0]/60 text-sm">
              The Future of Voice Agents
            </p>
          </div>

          <div className="flex flex-col items-center md:items-end gap-2">
            <p className="text-[#E0E0E0]/80 text-sm">
              © 2024 Conversly. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm text-[#E0E0E0]/60">
              <a href="#" className="hover:text-[#00C6FF] transition-colors duration-300">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-[#00C6FF] transition-colors duration-300">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
