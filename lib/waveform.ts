// Utility function to generate stable random waveform data
// Generated once on module load to avoid re-rendering issues

export const heroWaveformBars = Array.from({ length: 40 }, (_, i) => ({
  id: i,
  minHeight: Math.random() * 40 + 20,
  maxHeight: Math.random() * 80 + 20,
  duration: 1.5 + Math.random() * 1,
  delay: i * 0.05,
}));

export const demoWaveformBars = Array.from({ length: 50 }, (_, i) => ({
  id: i,
  minHeight: Math.random() * 60 + 20,
  maxHeight: Math.random() * 100 + 20,
}));

export const modalWaveformBars = Array.from({ length: 40 }, (_, i) => ({
  id: i,
  minHeight: Math.random() * 40 + 20,
  maxHeight: Math.random() * 80 + 20,
  duration: 1 + Math.random() * 0.5,
  delay: i * 0.03,
}));
