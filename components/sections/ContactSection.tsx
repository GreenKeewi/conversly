'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useEffect } from 'react';

export default function ContactSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  

  useEffect(() => {
    // Insert Cal.com inline embed script on client
    if (typeof window === 'undefined') return;

    const inlineScript = `
      (function (C, A, L) { let p = function (a, ar) { a.q.push(ar); }; let d = C.document; C.Cal = C.Cal || function () { let cal = C.Cal; let ar = arguments; if (!cal.loaded) { cal.ns = {}; cal.q = cal.q || []; d.head.appendChild(d.createElement("script")).src = A; cal.loaded = true; } if (ar[0] === L) { const api = function () { p(api, arguments); }; const namespace = ar[1]; api.q = api.q || []; if(typeof namespace === "string"){cal.ns[namespace] = cal.ns[namespace] || api;p(cal.ns[namespace], ar);p(cal, ["initNamespace", namespace]);} else p(cal, ar); return;} p(cal, ar); }; })(window, "https://app.cal.com/embed/embed.js", "init");

      Cal("init", "15min", {origin:"https://app.cal.com"});

      Cal.ns["15min"]("inline", {
        elementOrSelector:"#my-cal-inline-15min",
        config: {"layout":"month_view"},
        calLink: "kiwi-mars-acgcuv",
      });

      Cal.ns["15min"]("ui", {"hideEventTypeDetails":false,"layout":"month_view"});
    `;

    const s = document.createElement('script');
    s.type = 'text/javascript';
    s.text = inlineScript;
    document.body.appendChild(s);

    return () => {
      try {
        document.body.removeChild(s);
      } catch {
        // ignore
      }
    };
  }, []);

  

  return (
    <section id="contact" ref={ref} className="relative py-32 px-4">
  <div className="max-w-3xl mx-auto">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
        >
          {/* Inline Cal.com embed container */}
          <div id="my-cal-inline-15min" style={{ width: '100%', height: '700px', overflow: 'auto' }} />
        </motion.div>

        {/* Removed the original contact form; only Cal.com embed remains */}
      </div>
    </section>
  );
}
