'use client';

import { useState, useEffect } from "react";
import Link from "next/link";

export default function About() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 nav-blur">
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <Link href="/" className="text-2xl font-bold gradient-text">WSV</Link>
            <div className="hidden md:flex space-x-8">
              <Link href="/about" className="text-blue-600 font-semibold">About</Link>
              <Link href="/approach" className="text-gray-700 hover:text-blue-600 transition-colors">Approach</Link>
              <Link href="/portfolio" className="text-gray-700 hover:text-blue-600 transition-colors">Portfolio</Link>
              <Link href="/contact" className="text-gray-700 hover:text-blue-600 transition-colors">Contact</Link>
            </div>
            <Link href="/contact" className="button-primary">Connect</Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="section-padding pt-32">
        <div className="container mx-auto">
          <div className={`text-center mb-16 ${isVisible ? 'fade-in' : 'opacity-0'}`}>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Meet <span className="gradient-text">Jeremiah White III</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From the soccer field to the boardroom - discover the journey of an elite athlete turned venture capitalist
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="section-padding bg-gray-50">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
            <div className="fade-in">
              <div className="w-full h-96 bg-gradient-to-br from-blue-100 to-blue-200 rounded-2xl flex items-center justify-center">
                <div className="text-center">
                  <div className="w-40 h-40 bg-blue-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-5xl font-bold text-white">JW</span>
                  </div>
                  <p className="text-gray-600">Professional Portrait</p>
                </div>
              </div>
            </div>
            <div className="fade-in-delay-1">
              <h2 className="text-3xl font-bold mb-6">The Player</h2>
              <p className="text-lg text-gray-600 mb-6">
                Jeremiah White III's journey began on the soccer field, where he developed the discipline, strategic thinking, and competitive drive that would later define his investment philosophy. As a professional player, he gained firsthand insight into the challenges and opportunities within the soccer ecosystem.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                His playing career provided him with deep understanding of athlete development, team dynamics, and the business of professional sports - knowledge that proves invaluable in identifying promising investment opportunities.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 bg-white rounded-xl">
                  <h4 className="font-bold text-blue-600">Professional Experience</h4>
                  <p className="text-sm text-gray-600">Multiple seasons as professional player</p>
                </div>
                <div className="p-4 bg-white rounded-xl">
                  <h4 className="font-bold text-blue-600">Leadership</h4>
                  <p className="text-sm text-gray-600">Team captain and mentor</p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
            <div className="fade-in order-2 lg:order-1">
              <h2 className="text-3xl font-bold mb-6">The Transition</h2>
              <p className="text-lg text-gray-600 mb-6">
                Recognizing the immense potential for growth in American soccer, Jeremiah transitioned from the field to the investment world. He saw opportunities to bridge the gap between traditional sports and emerging technologies, positioning himself at the forefront of soccer's digital transformation.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                His unique perspective as both an insider and outsider allows him to identify inefficiencies in the market and spot revolutionary technologies before they become mainstream.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-blue-600 rounded-full"></div>
                  <span className="text-gray-700">MBA in Sports Management & Finance</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-blue-600 rounded-full"></div>
                  <span className="text-gray-700">Certified Investment Professional</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-blue-600 rounded-full"></div>
                  <span className="text-gray-700">Technology Innovation Specialist</span>
                </div>
              </div>
            </div>
            <div className="fade-in-delay-1 order-1 lg:order-2">
              <div className="w-full h-96 gradient-bg rounded-2xl flex items-center justify-center">
                <div className="text-center text-white">
                  <svg className="w-24 h-24 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                  <p className="text-xl font-bold">Strategic Innovation</p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="fade-in">
              <div className="w-full h-96 bg-gray-800 rounded-2xl flex items-center justify-center">
                <div className="text-center text-white">
                  <svg className="w-24 h-24 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                  <p className="text-xl font-bold">Investment Excellence</p>
                </div>
              </div>
            </div>
            <div className="fade-in-delay-1">
              <h2 className="text-3xl font-bold mb-6">The Venture Capitalist</h2>
              <p className="text-lg text-gray-600 mb-6">
                Today, Jeremiah leads White Sports Ventures with the same intensity and strategic mindset that made him successful on the field. He focuses on identifying and nurturing companies that are reshaping the soccer landscape through technology, data analytics, and community engagement.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                His portfolio spans across multiple verticals within the soccer ecosystem, from youth development platforms to professional club analytics systems, each chosen for their potential to drive meaningful change in American soccer.
              </p>
              <Link href="/portfolio" className="button-primary">
                View Portfolio
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section-padding">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-12 fade-in">By the Numbers</h2>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="fade-in">
              <div className="text-4xl font-bold gradient-text mb-2">15+</div>
              <p className="text-gray-600">Portfolio Companies</p>
            </div>
            <div className="fade-in-delay-1">
              <div className="text-4xl font-bold gradient-text mb-2">$50M+</div>
              <p className="text-gray-600">Assets Under Management</p>
            </div>
            <div className="fade-in-delay-2">
              <div className="text-4xl font-bold gradient-text mb-2">8</div>
              <p className="text-gray-600">Years in Professional Soccer</p>
            </div>
            <div className="fade-in-delay-3">
              <div className="text-4xl font-bold gradient-text mb-2">3</div>
              <p className="text-gray-600">Successful Exits</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gray-50">
        <div className="container mx-auto text-center">
          <div className="max-w-3xl mx-auto fade-in">
            <h2 className="text-4xl font-bold mb-6">
              Ready to <span className="gradient-text">Transform Soccer</span>?
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Connect with Jeremiah to explore how strategic investment can accelerate your soccer venture.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="button-primary">
                Schedule a Meeting
              </Link>
              <Link href="/approach" className="button-secondary">
                Learn Our Approach
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto text-center">
          <div className="text-2xl font-bold gradient-text mb-4">White Sports Ventures</div>
          <p className="text-gray-400 mb-6">Powering the Future of Soccer in America</p>
          <div className="flex justify-center space-x-6">
            <a href="#" className="text-gray-400 hover:text-white transition-colors">LinkedIn</a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">Twitter</a>
            <a href="mailto:jeremiah@whitesportsventures.com" className="text-gray-400 hover:text-white transition-colors">Email</a>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-800 text-gray-500 text-sm">
            © 2025 White Sports Ventures. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}