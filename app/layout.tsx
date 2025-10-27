import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Conversly - The Future of Voice",
  description: "We build next-generation AI voice agents that sound human, act smart, and elevate your customer experience.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
