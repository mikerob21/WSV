import type { Metadata } from "next";
import "./globals.css";

// Enterprise Typography: Premium fonts with high-quality fallbacks
// Sohne (Editorial), Maison Neue (Interface), Basis Grotesque Pro (System)
// Fallbacks: Inter, Plus Jakarta Sans, JetBrains Mono for optimal performance

export const metadata: Metadata = {
  title: "White Sports Ventures | Elite Soccer Venture Capital",
  description: "Strategic investments in soccer technology, clubs, and media. Led by former USMNT player Jeremiah White III. Transforming US soccer through innovative partnerships.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Font Loading - Optimized for Performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* Premium Fallback Fonts - Always Available */}
        <link 
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&family=JetBrains+Mono:wght@300;400;500;600;700&display=swap" 
          rel="stylesheet" 
        />
        
        {/* Premium Fonts - Enterprise Grade Typography */}
        {/* Note: Premium fonts (Sohne, Maison Neue, Basis Grotesque Pro) would be loaded here */}
        {/* For demo purposes, we use high-quality fallbacks that match the premium font characteristics */}
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}