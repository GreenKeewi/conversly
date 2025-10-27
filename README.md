# Conversly - The Future of Voice Agents

A stunning, futuristic one-page landing site for Conversly, showcasing next-generation AI voice agents with smooth animations, 3D-like depth effects, and premium design aesthetics.

## 🌟 Features

### Design & Aesthetics
- **Color Palette**: Deep charcoal (#0b0b0f) background with electric blue (#00C6FF) and neon cyan (#2DFFF6) accents
- **Glassmorphic UI**: Semi-transparent cards with backdrop blur effects
- **Animated Orbs**: Floating gradient orbs in the background with parallax movement
- **Cursor Glow**: Interactive glow effect that follows your mouse cursor
- **Gradient Text**: Eye-catching gradient effects on headings

### Page Sections
1. **Hero Section** - Impactful introduction with animated waveform and dual CTAs
2. **About Section** - Feature cards highlighting Smart Understanding, Emotional Awareness, and Business Integrations
3. **Demo Section** - Interactive demo with waveform visualization and chat input
4. **Use Cases** - Grid showcase of Customer Support, Scheduling, Sales, and Lead Qualification
5. **Contact Form** - Glassmorphic form with success state animation

### Animations
- Framer Motion powered animations throughout
- Section fade-ins with stagger effects
- Animated waveform visualizations (40-50 bars)
- Smooth hover effects and transitions
- Ripple effects on interactive elements

### Responsive Design
- Fully responsive across desktop (1920px+), tablet (768px+), and mobile (375px+)
- Adaptive layouts using Tailwind CSS breakpoints
- Touch-optimized interactions for mobile devices

## 🚀 Getting Started

### Prerequisites
- Node.js 20+ 
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run linter
npm run lint
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## 🛠️ Tech Stack

- **Framework**: [Next.js 16](https://nextjs.org/) (App Router)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [TailwindCSS 4](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Build Tool**: Turbopack
- **Linting**: ESLint with Next.js config

## 📁 Project Structure

```
conversly/
├── app/
│   ├── globals.css          # Global styles and theme
│   ├── layout.tsx            # Root layout
│   └── page.tsx              # Main landing page
├── components/
│   ├── background/
│   │   ├── AnimatedOrbs.tsx  # Floating gradient orbs
│   │   └── CursorGlow.tsx    # Mouse-following glow
│   ├── sections/
│   │   ├── HeroSection.tsx
│   │   ├── AboutSection.tsx
│   │   ├── DemoSection.tsx
│   │   ├── UseCasesSection.tsx
│   │   └── ContactSection.tsx
│   ├── DemoModal.tsx         # Voice demo modal
│   └── Footer.tsx
├── lib/
│   └── waveform.ts          # Waveform animation data
└── public/                   # Static assets
```

## ✨ Key Components

### Animated Orbs
Floating gradient orbs that move subtly in the background, creating depth and visual interest.

### Cursor Glow
A radial gradient that follows the user's cursor, adding an interactive premium feel.

### Waveform Animations
Dynamic audio waveform visualizations using Framer Motion, appearing in:
- Hero section (40 bars)
- Demo section (50 bars)
- Demo modal (40 bars)

### Contact Form
Fully functional form with:
- Name, email, and message fields
- Form validation
- Success state with animation
- Auto-reset after 3 seconds

## 🎨 Customization

### Colors
Edit `app/globals.css` to modify the color scheme:
```css
--color-charcoal: #0b0b0f;
--color-electric-blue: #00C6FF;
--color-neon-cyan: #2DFFF6;
--color-silver: #E0E0E0;
```

### Animations
Adjust animation values in `lib/waveform.ts` for waveform effects, or modify Framer Motion parameters in individual components.

## 📝 License

This project is private and proprietary.

## 🙏 Acknowledgments

- Design inspired by Apple Vision Pro and OpenAI aesthetics
- Animation patterns influenced by ReactBits.dev
- Built with modern web technologies and best practices

---

**Conversly** - Turning conversations into conversions, one voice at a time.
