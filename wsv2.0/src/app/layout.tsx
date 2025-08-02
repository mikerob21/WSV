import type { Metadata } from "next";
import { Roboto, Inter } from "next/font/google";
import "./globals.css";

const roboto = Roboto({
  variable: "--font-primary",
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
});

const inter = Inter({
  variable: "--font-secondary",
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
});

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
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700;900&family=Inter:wght@100;300;400;500;700;900&display=swap" rel="stylesheet" />
      </head>
      <body
        className={`${roboto.variable} ${inter.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
