'use client';

export default function BeamsBackground() {
  return (
    <div
      aria-hidden
      className="fixed inset-0 -z-10 pointer-events-none"
      style={{
        // Using ReactBits beams background endpoint as a background image
        backgroundImage: "url('https://www.reactbits.dev/backgrounds/beams')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        opacity: 0.9,
        mixBlendMode: 'screen',
      }}
    />
  );
}
