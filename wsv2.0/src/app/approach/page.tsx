'use client';

import { useState, useEffect } from "react";
import Link from "next/link";

export default function Approach() {
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
              <Link href="/about" className="text-gray-700 hover:text-blue-600 transition-colors">About</Link>
              <Link href="/approach" className="text-blue-600 font-semibold">Approach</Link>
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
              Our <span className="gradient-text">Investment Approach</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Data-driven strategies and deep soccer expertise converge to identify and accelerate the most promising opportunities in the American soccer ecosystem
            </p>
          </div>
        </div>
      </section>

      {/* Core Philosophy */}
      <section className="section-padding bg-gray-50">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center mb-16 fade-in">
            <h2 className="text-4xl font-bold mb-8">Investment Philosophy</h2>
            <p className="text-lg text-gray-600 mb-8">
              We believe American soccer is at an inflection point. Through strategic investments in technology, infrastructure, and community-driven platforms, we're positioning ourselves at the forefront of this transformation.
            </p>
            <div className="grid md:grid-cols-3 gap-8 text-left">
              <div className="bg-white p-6 rounded-2xl shadow-lg">
                <h3 className="text-xl font-bold mb-4 gradient-text">Long-term Vision</h3>
                <p className="text-gray-600">We invest with a 5-10 year horizon, focusing on sustainable growth rather than quick exits.</p>
              </div>
              <div className="bg-white p-6 rounded-2xl shadow-lg">
                <h3 className="text-xl font-bold mb-4 gradient-text">Ecosystem Thinking</h3>
                <p className="text-gray-600">Every investment is evaluated for its potential to strengthen the broader soccer ecosystem.</p>
              </div>
              <div className="bg-white p-6 rounded-2xl shadow-lg">
                <h3 className="text-xl font-bold mb-4 gradient-text">Operational Value</h3>
                <p className="text-gray-600">We provide hands-on support, leveraging our network and expertise to accelerate growth.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Investment Criteria */}
      <section className="section-padding">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
            <div className="fade-in">
              <h2 className="text-4xl font-bold mb-8">Investment Criteria</h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 gradient-bg rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white font-bold text-sm">1</span>
                  </div>
                  <div>
                    <h4 className="text-lg font-bold mb-2">Market Opportunity</h4>
                    <p className="text-gray-600">Targeting markets with $100M+ addressable opportunity within the soccer ecosystem</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 gradient-bg rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white font-bold text-sm">2</span>
                  </div>
                  <div>
                    <h4 className="text-lg font-bold mb-2">Technology Edge</h4>
                    <p className="text-gray-600">Proprietary technology or unique data advantages that create defensible moats</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 gradient-bg rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white font-bold text-sm">3</span>
                  </div>
                  <div>
                    <h4 className="text-lg font-bold mb-2">Exceptional Team</h4>
                    <p className="text-gray-600">Founding teams with deep domain expertise and proven execution track records</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 gradient-bg rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white font-bold text-sm">4</span>
                  </div>
                  <div>
                    <h4 className="text-lg font-bold mb-2">Scalable Model</h4>
                    <p className="text-gray-600">Business models that can scale nationally and potentially internationally</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="fade-in-delay-1">
              <div className="w-full h-96 gradient-bg rounded-2xl flex items-center justify-center">
                <div className="text-center text-white">
                  <svg className="w-24 h-24 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                  <p className="text-xl font-bold">Rigorous Due Diligence</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Investment Process */}
      <section className="section-padding bg-gray-50">
        <div className="container mx-auto">
          <div className="text-center mb-16 fade-in">
            <h2 className="text-4xl font-bold mb-8">Investment Process</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our systematic approach ensures thorough evaluation while maintaining speed and efficiency for promising opportunities
            </p>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center fade-in">
              <div className="w-20 h-20 gradient-bg rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold mb-4">Initial Screening</h3>
              <p className="text-gray-600">Market analysis and team assessment within 48 hours</p>
            </div>
            <div className="text-center fade-in-delay-1">
              <div className="w-20 h-20 gradient-bg rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
              </div>
              <h3 className="text-lg font-bold mb-4">Deep Dive</h3>
              <p className="text-gray-600">Comprehensive technical and business model evaluation</p>
            </div>
            <div className="text-center fade-in-delay-2">
              <div className="w-20 h-20 gradient-bg rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold mb-4">Reference Checks</h3>
              <p className="text-gray-600">Customer interviews and industry expert validation</p>
            </div>
            <div className="text-center fade-in-delay-3">
              <div className="w-20 h-20 gradient-bg rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                </svg>
              </div>
              <h3 className="text-lg font-bold mb-4">Investment Decision</h3>
              <p className="text-gray-600">Term sheet and partnership agreement within 2 weeks</p>
            </div>
          </div>
        </div>
      </section>

      {/* Investment Focus Areas */}
      <section className="section-padding">
        <div className="container mx-auto">
          <div className="text-center mb-16 fade-in">
            <h2 className="text-4xl font-bold mb-8">Focus Areas</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We concentrate our investments across key verticals that are driving transformation in the soccer ecosystem
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="hover-lift fade-in">
              <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 h-full">
                <div className="w-16 h-16 gradient-bg rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-4">Sports Technology</h3>
                <p className="text-gray-600 mb-4">AI-powered analytics, performance optimization, and training technologies that enhance player development and team performance.</p>
                <div className="text-sm text-blue-600">
                  • Performance Analytics<br/>
                  • Training Platforms<br/>
                  • Injury Prevention<br/>
                  • Scouting Systems
                </div>
              </div>
            </div>
            <div className="hover-lift fade-in-delay-1">
              <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 h-full">
                <div className="w-16 h-16 gradient-bg rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-4">Fan Engagement</h3>
                <p className="text-gray-600 mb-4">Digital platforms that connect fans, create communities, and enhance the soccer viewing and participation experience.</p>
                <div className="text-sm text-blue-600">
                  • Social Platforms<br/>
                  • Fantasy Sports<br/>
                  • Live Streaming<br/>
                  • Mobile Apps
                </div>
              </div>
            </div>
            <div className="hover-lift fade-in-delay-2">
              <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 h-full">
                <div className="w-16 h-16 gradient-bg rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-4">Infrastructure</h3>
                <p className="text-gray-600 mb-4">Technologies that improve facilities, operations, and the business side of soccer organizations at all levels.</p>
                <div className="text-sm text-blue-600">
                  • Facility Management<br/>
                  • Operations Software<br/>
                  • Financial Systems<br/>
                  • Smart Stadiums
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Value Add */}
      <section className="section-padding bg-gray-50">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="fade-in">
              <h2 className="text-4xl font-bold mb-8">Beyond Capital</h2>
              <p className="text-lg text-gray-600 mb-8">
                Our investment goes beyond funding. We provide strategic guidance, industry connections, and operational expertise to accelerate growth.
              </p>
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 gradient-bg rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-lg font-bold">Strategic Guidance</h4>
                    <p className="text-gray-600">Market positioning and growth strategy development</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 gradient-bg rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-lg font-bold">Network Access</h4>
                    <p className="text-gray-600">Connections to key players, customers, and partners</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 gradient-bg rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-lg font-bold">Operational Support</h4>
                    <p className="text-gray-600">Hands-on assistance with scaling and operations</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="fade-in-delay-1">
              <div className="w-full h-96 bg-gray-800 rounded-2xl flex items-center justify-center">
                <div className="text-center text-white">
                  <svg className="w-24 h-24 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                  <p className="text-xl font-bold">Knowledge Transfer</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding">
        <div className="container mx-auto text-center">
          <div className="max-w-3xl mx-auto fade-in">
            <h2 className="text-4xl font-bold mb-6">
              Partner with <span className="gradient-text">WSV</span>
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Ready to transform your soccer venture? Let's discuss how our approach can accelerate your growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="button-primary">
                Pitch Your Company
              </Link>
              <Link href="/portfolio" className="button-secondary">
                View Our Portfolio
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