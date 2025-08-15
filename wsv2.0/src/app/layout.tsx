import type { Metadata } from "next";
import "./globals.css";
import { WSVNavbar } from "@/components/navigation/WSVNavbar";
import { ErrorBoundary } from "@/components/ui";
import Footer from "@/components/Footer";

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
        
        {/* WSV Typography System - New Font Hierarchy */}
        <link 
          href="https://fonts.googleapis.com/css2?family=Cousine:wght@400;700&family=Arya:wght@400;700&family=Signika+Negative:wght@300;400;500;600;700&display=swap" 
          rel="stylesheet" 
        />
      </head>
      <body className="antialiased font-body">
        <ErrorBoundary>
          {/* WSV Navigation - Custom Athletic Design */}
          <WSVNavbar />
          
          {/* Page Content */}
          <main>
            {children}
          </main>
          
          {/* Footer */}
          <Footer />
        </ErrorBoundary>
      </body>
    </html>
  );
}