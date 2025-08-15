'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

const footerLinks = {
  company: [
    { name: 'About', href: '/about' },
    { name: 'Approach', href: '/approach' },
    { name: 'Portfolio', href: '/portfolio' },
    { name: 'Contact', href: '/contact' },
  ],
  legal: [
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Terms of Service', href: '/terms' },
    { name: 'Investment Disclosures', href: '/disclosures' },
    { name: 'Cookie Policy', href: '/cookies' },
  ],
  connect: [
    { name: 'LinkedIn', href: 'https://linkedin.com/company/white-sports-ventures' },
    { name: 'Twitter', href: 'https://twitter.com/whitesportsvs' },
    { name: 'Email', href: 'mailto:hello@whitesportsventures.com' },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-neutral-900 text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
            {/* Company Info */}
            <div className="flex-1">
              <div className="flex items-center mb-3">
                <div className="relative w-8 h-8 mr-2">
                  <Image
                    src="/images/logo.webp"
                    alt="White Sports Ventures Logo"
                    fill
                    className="object-contain brightness-0 invert"
                    sizes="32px"
                  />
                </div>
                <span className="heading-tertiary">White Sports Ventures</span>
              </div>
              <p className="body-small text-neutral-400 max-w-md">
                Strategic capital driving soccer ecosystem innovation. Investment range: $100K - $1M.
              </p>
            </div>

            {/* Links - Horizontal Layout */}
            <div className="flex flex-wrap gap-6 md:gap-8">
              {/* Company Links */}
              <div>
                <h3 className="caption mb-2 text-neutral-500">Company</h3>
                <div className="flex flex-col space-y-1">
                  {footerLinks.company.map((link) => (
                    <Link
                      key={link.name}
                      href={link.href}
                      className="caption text-neutral-400 hover:text-white transition-colors"
                    >
                      {link.name}
                    </Link>
                  ))}
                </div>
              </div>

              {/* Connect Links */}
              <div>
                <h3 className="caption mb-2 text-neutral-500">Connect</h3>
                <div className="flex flex-col space-y-1">
                  {footerLinks.connect.map((link) => (
                    <a
                      key={link.name}
                      href={link.href}
                      target={link.href.startsWith('http') ? '_blank' : undefined}
                      rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className="caption text-neutral-400 hover:text-white transition-colors"
                    >
                      {link.name}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-neutral-800 py-3">
          <div className="flex flex-col md:flex-row justify-between items-center gap-3 caption">
            <div className="caption text-neutral-500">
              © {new Date().getFullYear()} White Sports Ventures. All rights reserved. Investment advisory services provided by WSV Capital Management.
            </div>
            
            <div className="flex items-center gap-4">
              {footerLinks.legal.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="caption text-neutral-500 hover:text-neutral-300 transition-colors"
                >
                  {link.name}
                </Link>
              ))}
              <Link
                href="/contact"
                className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-1 rounded caption transition-colors"
              >
                Contact
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}