'use client';

import { useState, useEffect } from "react";
import Link from "next/link";

export default function Portfolio() {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('All');

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const portfolioCompanies = [
    {
      name: "SoccerAnalytics Pro",
      category: "Sports Technology",
      stage: "Series A",
      description: "AI-powered performance analytics platform used by over 200 professional and semi-professional soccer clubs",
      metrics: "200+ Clubs • $2.5M ARR • 40% YoY Growth",
      logo: "SAP",
      featured: true
    },
    {
      name: "FanConnect",
      category: "Digital Media",
      stage: "Seed",
      description: "Social platform connecting soccer fans globally with real-time match experiences and community features",
      metrics: "500K+ Users • 4.8 Rating • 60% MAU",
      logo: "FC",
      featured: true
    },
    {
      name: "YouthSoccer Academy",
      category: "Grassroots Soccer",
      stage: "Series B",
      description: "Technology-enhanced youth development program with curriculum management and player tracking",
      metrics: "150+ Academies • 25K Players • 95% Retention",
      logo: "YSA",
      featured: true
    },
    {
      name: "StadiumTech Solutions",
      category: "Facility Innovation",
      stage: "Growth",
      description: "Smart stadium infrastructure providing real-time analytics and enhanced fan experiences",
      metrics: "45 Stadiums • $8M Revenue • 25% Market Share",
      logo: "STS",
      featured: false
    },
    {
      name: "SoccerStreaming+",
      category: "Sports Media",
      stage: "Series A",
      description: "Premium streaming platform for amateur and semi-professional soccer leagues nationwide",
      metrics: "1M+ Subscribers • 85% Renewal Rate • $12M ARR",
      logo: "SS+",
      featured: false
    },
    {
      name: "ClubManager Pro",
      category: "Sports Technology",
      stage: "Seed",
      description: "Comprehensive club management software for scheduling, payments, and communication",
      metrics: "800+ Clubs • $1.2M ARR • 35% QoQ Growth",
      logo: "CMP",
      featured: false
    },
    {
      name: "SoccerScout AI",
      category: "Sports Technology",
      stage: "Pre-Series A",
      description: "Machine learning platform for player scouting and talent identification across all levels",
      metrics: "50+ Scouts • 15K Player Profiles • 89% Accuracy",
      logo: "SSA",
      featured: false
    },
    {
      name: "GameDay Experience",
      category: "Digital Media",
      stage: "Growth",
      description: "Mobile app enhancing in-stadium experience with AR features and social integration",
      metrics: "2M+ Downloads • 4.7 Rating • 70% Retention",
      logo: "GDX",
      featured: false
    },
    {
      name: "TrainingGround VR",
      category: "Sports Technology",
      stage: "Seed",
      description: "Virtual reality training platform for tactical understanding and decision-making skills",
      metrics: "120+ Teams • $800K ARR • 45% Growth",
      logo: "TVR",
      featured: false
    }
  ];

  const categories = ['All', 'Sports Technology', 'Digital Media', 'Grassroots Soccer', 'Facility Innovation', 'Sports Media'];

  const filteredCompanies = selectedCategory === 'All' 
    ? portfolioCompanies 
    : portfolioCompanies.filter(company => company.category === selectedCategory);

  const featuredCompanies = portfolioCompanies.filter(company => company.featured);

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 nav-blur">
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <Link href="/" className="text-2xl font-bold gradient-text">WSV</Link>
            <div className="hidden md:flex space-x-8">
              <Link href="/about" className="text-gray-700 hover:text-blue-600 transition-colors">About</Link>
              <Link href="/approach" className="text-gray-700 hover:text-blue-600 transition-colors">Approach</Link>
              <Link href="/portfolio" className="text-blue-600 font-semibold">Portfolio</Link>
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
              Investment <span className="gradient-text">Portfolio</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A diverse collection of innovative companies transforming the soccer ecosystem through technology, community, and strategic innovation
            </p>
          </div>
        </div>
      </section>

      {/* Portfolio Stats */}
      <section className="section-padding bg-gray-50">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div className="fade-in">
              <div className="text-4xl font-bold gradient-text mb-2">15+</div>
              <p className="text-gray-600">Portfolio Companies</p>
            </div>
            <div className="fade-in-delay-1">
              <div className="text-4xl font-bold gradient-text mb-2">$50M+</div>
              <p className="text-gray-600">Total Investment</p>
            </div>
            <div className="fade-in-delay-2">
              <div className="text-4xl font-bold gradient-text mb-2">5</div>
              <p className="text-gray-600">Focus Verticals</p>
            </div>
            <div className="fade-in-delay-3">
              <div className="text-4xl font-bold gradient-text mb-2">3</div>
              <p className="text-gray-600">Successful Exits</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Investments */}
      <section className="section-padding">
        <div className="container mx-auto">
          <div className="text-center mb-16 fade-in">
            <h2 className="text-4xl font-bold mb-8">Featured Investments</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Spotlight on our marquee portfolio companies that are leading innovation in their respective verticals
            </p>
          </div>
          <div className="grid lg:grid-cols-3 gap-8">
            {featuredCompanies.map((company, index) => (
              <div key={index} className={`hover-lift fade-in${index > 0 ? '-delay-' + index : ''}`}>
                <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 h-full">
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-16 h-16 gradient-bg rounded-2xl flex items-center justify-center">
                      <span className="text-white font-bold text-lg">{company.logo}</span>
                    </div>
                    <span className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm font-semibold">
                      {company.stage}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold mb-2">{company.name}</h3>
                  <p className="text-sm text-blue-600 mb-4">{company.category}</p>
                  <p className="text-gray-600 mb-6">{company.description}</p>
                  <div className="mt-auto">
                    <div className="p-4 bg-gray-50 rounded-xl">
                      <p className="text-sm font-semibold text-gray-700">{company.metrics}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* All Portfolio Companies */}
      <section className="section-padding bg-gray-50">
        <div className="container mx-auto">
          <div className="text-center mb-16 fade-in">
            <h2 className="text-4xl font-bold mb-8">Complete Portfolio</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
              Explore our full portfolio of companies across the soccer ecosystem
            </p>
            
            {/* Category Filter */}
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-6 py-3 rounded-full font-semibold transition-all ${
                    selectedCategory === category
                      ? 'bg-blue-600 text-white'
                      : 'bg-white text-gray-600 hover:bg-gray-100'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCompanies.map((company, index) => (
              <div key={index} className={`hover-lift fade-in${index > 2 ? '-delay-' + (index - 2) : ''}`}>
                <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 h-full">
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-100 to-blue-200 rounded-xl flex items-center justify-center">
                      <span className="text-blue-600 font-bold text-sm">{company.logo}</span>
                    </div>
                    <span className={`px-2 py-1 rounded-full text-xs font-semibold ${
                      company.stage === 'Seed' ? 'bg-green-100 text-green-600' :
                      company.stage === 'Series A' ? 'bg-blue-100 text-blue-600' :
                      company.stage === 'Series B' ? 'bg-purple-100 text-purple-600' :
                      'bg-orange-100 text-orange-600'
                    }`}>
                      {company.stage}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold mb-2">{company.name}</h3>
                  <p className="text-sm text-blue-600 mb-3">{company.category}</p>
                  <p className="text-gray-600 text-sm mb-4">{company.description}</p>
                  <div className="mt-auto">
                    <div className="p-3 bg-gray-50 rounded-lg">
                      <p className="text-xs font-semibold text-gray-700">{company.metrics}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Investment Thesis */}
      <section className="section-padding">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="fade-in">
              <h2 className="text-4xl font-bold mb-8">Portfolio Strategy</h2>
              <p className="text-lg text-gray-600 mb-6">
                Our portfolio reflects a strategic approach to soccer ecosystem development, with investments spanning from grassroots development to professional-level technology solutions.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                Each company is selected not just for its individual potential, but for how it strengthens the broader soccer infrastructure in America.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-blue-600 rounded-full"></div>
                  <span className="text-gray-700">70% Technology-focused companies</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-blue-600 rounded-full"></div>
                  <span className="text-gray-700">Average investment size: $1-5M</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-blue-600 rounded-full"></div>
                  <span className="text-gray-700">Active involvement in growth strategy</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-blue-600 rounded-full"></div>
                  <span className="text-gray-700">5-7 year average holding period</span>
                </div>
              </div>
            </div>
            <div className="fade-in-delay-1">
              <div className="w-full h-96 gradient-bg rounded-2xl flex items-center justify-center">
                <div className="text-center text-white">
                  <svg className="w-24 h-24 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                  </svg>
                  <p className="text-xl font-bold">Strategic Portfolio</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="section-padding bg-gray-50">
        <div className="container mx-auto">
          <div className="text-center mb-16 fade-in">
            <h2 className="text-4xl font-bold mb-8">Success Stories</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Celebrating the achievements of our portfolio companies and their impact on the soccer ecosystem
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center fade-in">
              <div className="w-20 h-20 gradient-bg rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold gradient-text mb-2">3x</h3>
              <p className="text-gray-600">Average revenue growth across portfolio</p>
            </div>
            <div className="text-center fade-in-delay-1">
              <div className="w-20 h-20 gradient-bg rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold gradient-text mb-2">$120M</h3>
              <p className="text-gray-600">Total portfolio valuation increase</p>
            </div>
            <div className="text-center fade-in-delay-2">
              <div className="w-20 h-20 gradient-bg rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold gradient-text mb-2">85%</h3>
              <p className="text-gray-600">Portfolio companies meeting growth targets</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding">
        <div className="container mx-auto text-center">
          <div className="max-w-3xl mx-auto fade-in">
            <h2 className="text-4xl font-bold mb-6">
              Join Our <span className="gradient-text">Portfolio</span>
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Building the next generation of soccer technology? We'd love to learn about your company and explore potential partnership opportunities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="button-primary">
                Submit Your Pitch
              </Link>
              <Link href="/approach" className="button-secondary">
                Learn Our Process
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