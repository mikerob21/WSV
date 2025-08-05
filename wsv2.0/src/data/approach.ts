export interface ApproachSection {
  title: string;
  description: string;
  highlight: string;
  metrics: string[];
  gradient: string;
  accent: string;
}

export interface Vertical {
  title: string;
  subtitle: string;
  description: string;
  highlight: string;
  features: string[];
  metrics: string[];
  gradient: string;
  accent: string;
  iconPath: string;
}

export interface ProcessStep {
  step: string;
  title: string;
  description: string;
  duration: string;
}

export interface Stat {
  value: string;
  label: string;
  description: string;
}

export const approachSections: ApproachSection[] = [
  {
    title: 'Partnership Philosophy',
    description: 'We don\'t just fund soccer ventures; we build them alongside you. As your growth partners, we provide hands-on support at every stage, from seed to scale, to transform your vision into a game-changer.',
    highlight: 'Founded by Jeremiah White III, a former pro soccer player turned investor, WhiteSportsVentures combines on-field insights with entrepreneurial drive to fuel your success.',
    metrics: ['Hands-on Support', 'Growth Partnership', 'Proven Playbooks'],
    gradient: 'var(--gradient-blue-500)',
    accent: 'blue'
  },
  {
    title: 'Soccer Expertise',
    description: 'Our deep soccer experience sets us apart. Jeremiah\'s 25+ years as a pro player, investor (e.g., The Town FC), and Techstars mentor inform actionable strategies tailored to your venture.',
    highlight: 'Whether it\'s optimizing AI-driven analytics or growing a community club, we maximize your potential with proven playbooks.',
    metrics: ['25+ Years Experience', 'Pro Player Background', 'Techstars Mentor'],
    gradient: 'var(--gradient-blue-600)',
    accent: 'blue'
  },
  {
    title: 'Industry Connections',
    description: 'Our extensive soccer network gives your venture a strategic edge. With connections to clubs, media, sponsors, and tech innovators, we open doors for WhiteSportsVentures portfolio companies.',
    highlight: 'From grassroots programs to global partnerships, we accelerate your growth with unmatched industry access.',
    metrics: ['Global Network', 'Club Connections', 'Media Partnerships'],
    gradient: 'var(--gradient-blue-700)',
    accent: 'blue'
  },
  {
    title: 'Network Impact',
    description: 'Join a vibrant soccer ecosystem. Our portfolio companies, youth programs, clubs, family offices, and industry contacts form a dynamic network that amplifies your impact.',
    highlight: 'Collaborate with ventures like Footy Access (50% efficiency gain) or tap into our 100K+ community reach to scale smarter.',
    metrics: ['100K+ Community', '50% Efficiency Gain', 'Dynamic Ecosystem'],
    gradient: 'var(--gradient-blue-800)',
    accent: 'blue'
  }
];

export const processSteps: ProcessStep[] = [
  {
    step: '01',
    title: 'Discovery & Alignment',
    description: 'We dive deep into your vision, understanding your unique position in the soccer ecosystem and aligning on growth objectives.',
    duration: '2-4 weeks'
  },
  {
    step: '02',
    title: 'Strategic Partnership',
    description: 'Beyond funding, we become your growth partner, providing hands-on support, industry connections, and proven playbooks.',
    duration: 'Ongoing'
  },
  {
    step: '03',
    title: 'Network Integration',
    description: 'We integrate you into our ecosystem of soccer innovators, creating opportunities for collaboration and accelerated growth.',
    duration: 'Immediate'
  },
  {
    step: '04',
    title: 'Scale & Impact',
    description: 'Together, we scale your venture while building the future of soccer, creating lasting impact in the sport we love.',
    duration: 'Long-term'
  }
];

export const stats: Stat[] = [
  { value: '25+', label: 'Years Soccer Experience', description: 'Professional playing & investing' },
  { value: '100K+', label: 'Community Reach', description: 'Active soccer network' },
  { value: '50%', label: 'Efficiency Gain', description: 'Footy Access improvement' },
  { value: '1B', label: 'Views by 2025', description: 'Content reach target' }
];

export const verticals: Vertical[] = [
  {
    title: 'Soccer Technology',
    subtitle: 'Revolutionizing Performance & Engagement',
    description: 'Technology is revolutionizing soccer performance and fan engagement. We invest in cutting-edge solutions, like Footy Access\' AI analytics, that enhance scouting, training, and fan experiences at scale.',
    highlight: 'Our focus is on novel products that redefine the game.',
    features: ['AI Analytics', 'Performance Optimization', 'Fan Engagement', 'Data Intelligence'],
    metrics: ['50% Efficiency Gain', 'AI-Driven Insights', 'Real-time Analytics'],
    gradient: 'var(--gradient-blue-500)',
    accent: 'blue',
    iconPath: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z'
  },
  {
    title: 'Soccer Clubs & Programs',
    subtitle: 'Building Community & Talent',
    description: 'Clubs and youth programs are the heart of soccer\'s growth. We back ventures like The Town FC, with 10K+ fans and 50+ youth trained, that build community and talent.',
    highlight: 'Our investments strengthen the backbone of the sport in the USA.',
    features: ['Youth Development', 'Club Operations', 'Training Facilities', 'Community Building'],
    metrics: ['10K+ Fans', '50+ Youth Trained', 'Community Impact'],
    gradient: 'var(--gradient-blue-600)',
    accent: 'blue',
    iconPath: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z'
  },
  {
    title: 'Soccer Content & Media',
    subtitle: 'Authentic Storytelling & Engagement',
    description: 'In a fragmented media landscape, compelling content drives engagement. We prioritize authentic storytelling and modern platforms to connect with fans, leveraging our network to amplify reach.',
    highlight: 'Our focus is on engagement over vanity metrics, inspired by the World Cup\'s momentum. We are on pace to reach 1 Billion views by the end of 2025.',
    features: ['Digital Platforms', 'Content Creation', 'Community Building', 'Brand Partnerships'],
    metrics: ['1B Views by 2025', 'Authentic Content', 'Global Reach'],
    gradient: 'var(--gradient-blue-700)',
    accent: 'blue',
    iconPath: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z'
  }
];