export interface PortfolioCompany {
  name: string;
  type: string;
  website: string;
  description: string;
  competitiveAdvantage: string;
  metrics: Array<{
    value: string;
    label: string;
    source: string;
  }>;
  primaryBrandColors: string[];
  socialMediaHandles: Record<string, string>;
  logoUrl: string | null;
  foundedYear: number | null;
  recentAchievements: string[];
  industryTags: string[];
  keyPartnerships: string[];
}

export const portfolioData: PortfolioCompany[] = [
  {
    "name": "Footy Access",
    "type": "Soccer Media Platform",
    "website": "https://footyaccess.com/",
    "description": "Multi-media platform focused on highlighting the next generation of youth soccer players through informative and entertaining original content. Unlocking the World's Football Potential through behind-the-scenes academy coverage and player spotlights.",
    "competitiveAdvantage": "Youth Soccer Content Specialization",
    "metrics": [
      {
        "value": "200M+",
        "label": "Total Video Views",
        "source": "LinkedIn founder profile and partnership announcements"
      },
      {
        "value": "210.2K",
        "label": "TikTok Followers",
        "source": "TikTok profile @footyaccess verified 2024"
      },
      {
        "value": "82K",
        "label": "Instagram Followers",
        "source": "Instagram profile @footyaccess verified 2024"
      },
      {
        "value": "10+",
        "label": "MLS Club Partnerships",
        "source": "Official partnership announcements from MLS clubs"
      }
    ],
    "primaryBrandColors": ["#000000", "#FFFFFF"],
    "socialMediaHandles": {
      "instagram": "@footyaccess",
      "tiktok": "@footyaccess",
      "twitter": "@footy_access",
      "youtube": "@footyaccess",
      "threads": "@footyaccess"
    },
    "logoUrl": "/images/portfolio/footyaccess.webp",
    "foundedYear": 2022,
    "recentAchievements": [
      "Partnership with New York City FC Academy (December 2024)",
      "Partnership with USL Academy (December 2024)",
      "Partnership with Philadelphia Union Academy (April 2025)",
      "Partnership with Orlando City SC Academy (April 2025)",
      "Projected 1 billion views by end of 2025"
    ],
    "industryTags": ["Soccer Media", "Youth Development", "Content Creation", "Sports Marketing"],
    "keyPartnerships": [
      "NYC FC Academy",
      "Philadelphia Union Academy", 
      "Orlando City SC Academy",
      "FC Cincinnati Academy",
      "San Jose Earthquakes Academy",
      "USL Academy"
    ]
  },
  {
    "name": "Drip FC",
    "type": "Soccer Culture Brand",
    "website": "https://dripfcofficial.com/",
    "description": "A cultural brand at the intersection of football, style, and culture. We're here to grow the game and spotlight the next generation through media and apparel efforts that thrive off authenticity and connection.",
    "competitiveAdvantage": "Cultural Brand Positioning",
    "metrics": [
      {
        "value": "6M+",
        "label": "Monthly Social Media Reach",
        "source": "Official website company description"
      },
      {
        "value": "77K",
        "label": "Instagram Followers",
        "source": "Instagram profile @dripfc verified 2024"
      },
      {
        "value": "807",
        "label": "Instagram Posts",
        "source": "Instagram profile @dripfc verified 2024"
      },
      {
        "value": "1",
        "label": "Professional Club Partnership",
        "source": "The Town FC partnership announcement November 2024"
      }
    ],
    "primaryBrandColors": ["#000000", "#FFFFFF", "#4A90E2"],
    "socialMediaHandles": {
      "instagram": "@dripfc",
      "twitter": "@dripfc",
      "facebook": "Drip FC"
    },
    "logoUrl": "/images/portfolio/TheDripFC.webp",
    "foundedYear": null,
    "recentAchievements": [
      "Partnership with The Town FC (November 2024)",
      "Participation in The Soccer Tournament (TST) 2025",
      "Official merchandise partnership with Soccer.com",
      "Expansion into performance apparel and street wear"
    ],
    "industryTags": ["Soccer Culture", "Apparel", "Media", "Lifestyle Brand"],
    "keyPartnerships": [
      "The Town FC",
      "The Soccer Tournament (TST)",
      "Soccer.com"
    ]
  },
  {
    "name": "The Town FC",
    "type": "Professional Soccer Club",
    "website": "https://thetownfc.com/",
    "description": "An American professional soccer team located in Moraga, California. It is the reserve team of San Jose Earthquakes and participates in MLS Next Pro. A movement by people, for the town - building community, creating opportunity and leaving a legacy through the beautiful game.",
    "competitiveAdvantage": "Community-Focused Professional Soccer",
    "metrics": [
      {
        "value": "8.2K+",
        "label": "Instagram Followers",
        "source": "Instagram profile @thetown_fc verified 2024"
      },
      {
        "value": "3,031",
        "label": "Twitter Followers",
        "source": "Twitter profile @TheTown_FC verified 2024"
      },
      {
        "value": "$100",
        "label": "Season Pass Price (14 games)",
        "source": "Official website ticket pricing 2025"
      },
      {
        "value": "2021",
        "label": "Years in Professional Soccer",
        "source": "Founded December 6, 2021 - Wikipedia"
      }
    ],
    "primaryBrandColors": ["#000000", "#FFFFFF"],
    "socialMediaHandles": {
      "instagram": "@thetown_fc",
      "twitter": "@TheTown_FC",
      "facebook": "The Town FC",
      "tiktok": "@thetown_fc",
      "youtube": "The Town FC"
    },
    "logoUrl": "/images/portfolio/TheTownFC.webp",
    "foundedYear": 2021,
    "recentAchievements": [
      "Partnership with Drip FC (November 2024)",
      "Jeremiah White III joins investor group (November 2024)",
      "Relaunch of The Town Futures Project for Oakland Youth",
      "Multiple competitive victories in MLS Next Pro",
      "Community partnerships with East Bay organizations"
    ],
    "industryTags": ["Professional Soccer", "Community Development", "MLS Next Pro", "Youth Development"],
    "keyPartnerships": [
      "San Jose Earthquakes (parent club)",
      "MLS Next Pro",
      "Drip FC",
      "White Sports Ventures",
      "Stockton University"
    ]
  },
  {
    "name": "Innovosens",
    "type": "Health Technology",
    "website": "https://www.innovosens.com/",
    "description": "Empowers you with cutting-edge technology to monitor key bioparameters and receive personalized health recommendations. Wellness in your palm - reach unprecedented levels of performance, health and wellness goals from the surface of your skin.",
    "competitiveAdvantage": "Non-Invasive AI-Powered Sweat Sensing",
    "metrics": [
      {
        "value": "$99",
        "label": "HydroSense Product Price (8 sensors)",
        "source": "Official product page https://lp.hydrosense.store/"
      },
      {
        "value": "4 hours",
        "label": "Monitoring Duration Per Patch",
        "source": "Technical specifications from product page"
      },
      {
        "value": "2",
        "label": "Major Corporate Backers",
        "source": "EU Commission and Sony Global partnerships"
      },
      {
        "value": "1",
        "label": "Patent-Pending Technology",
        "source": "Colorimetric microfluidic detection technology"
      }
    ],
    "primaryBrandColors": ["#4A90E2", "#00CED1", "#000000"],
    "socialMediaHandles": {
      "instagram": "@innovosens.inc"
    },
    "logoUrl": "/images/portfolio/Innovosens.webp",
    "foundedYear": null,
    "recentAchievements": [
      "EU Commission backing and support",
      "Sony Global partnership",
      "Kickstarter campaign launch for HydroSense",
      "Patent-pending technology development",
      "Medical-grade compliance with ISO biocompatibility standards"
    ],
    "industryTags": ["Health Technology", "Wearable Sensors", "AI Technology", "Sports Performance"],
    "keyPartnerships": [
      "EU Commission",
      "Sony Global",
      "3M (adhesive technology)",
      "White Sports Ventures"
    ]
  },
  {
    "name": "Atlantic City FC",
    "type": "Soccer Club",
    "website": "https://www.atlanticcityfc.com/",
    "description": "A soccer team dedicated to building Atlantic City's Soccer culture. Currently playing in the Northeast Conference in The League for Clubs. Founded in 2017 to create community through soccer in Atlantic City, New Jersey.",
    "competitiveAdvantage": "Community Soccer Culture Building",
    "metrics": [
      {
        "value": "875",
        "label": "Facebook Likes",
        "source": "Facebook page Atlantic City Football Club"
      },
      {
        "value": "1",
        "label": "Dedicated TV Channel (ACFC.TV)",
        "source": "Official streaming platform acfc.tv"
      },
      {
        "value": "8-0",
        "label": "Largest Victory Margin (vs Lighthouse SC)",
        "source": "Official match reports 2025"
      },
      {
        "value": "2017",
        "label": "Years of Community Service",
        "source": "Founded 2017 - Wikipedia"
      }
    ],
    "primaryBrandColors": ["#6A4C93", "#FFFFFF"],
    "socialMediaHandles": {
      "instagram": "@atlanticcityfc",
      "twitter": "@AtlanticCityFC",
      "facebook": "Atlantic City Football Club"
    },
    "logoUrl": "/images/portfolio/Atlantic City FC.webp",
    "foundedYear": 2017,
    "recentAchievements": [
      "New team store opening at Caesars Atlantic City",
      "Multiple victories in The League for Clubs inaugural season",
      "Community partnerships with Pittsgrove Youth Soccer",
      "ACFC.TV streaming platform launch",
      "Strong performance in Northeast Conference"
    ],
    "industryTags": ["Soccer Club", "Community Sports", "Local Entertainment", "Youth Development"],
    "keyPartnerships": [
      "Caesars Atlantic City",
      "The League for Clubs",
      "Pittsgrove Youth Soccer",
      "Stockton University",
      "White Sports Ventures"
    ]
  },
  {
    "name": "Replica AI",
    "type": "E-commerce Technology",
    "website": "https://myreplica.io/",
    "description": "Virtual try-on technology, powered by advanced AI and computer vision. By allowing customers to visualize products on themselves before purchase, this technology addresses several key pain points in the online shopping journey.",
    "competitiveAdvantage": "AI-Powered Fit Visualization",
    "metrics": [
      {
        "value": "15%",
        "label": "Conversion Rate Increase",
        "source": "Official website impact calculator"
      },
      {
        "value": "$7.5M",
        "label": "Additional Revenue per $50M Sales",
        "source": "Official website ROI calculator"
      },
      {
        "value": "10%",
        "label": "Returns Reduction Rate",
        "source": "Official website impact metrics"
      },
      {
        "value": "2",
        "label": "Lines of Code for Integration",
        "source": "Official website technical specifications"
      }
    ],
    "primaryBrandColors": ["#4A90E2", "#000000"],
    "socialMediaHandles": {},
    "logoUrl": "/images/portfolio/Replica AI.webp",
    "foundedYear": null,
    "recentAchievements": [
      "Multiple investor funding rounds completed",
      "Partnership with various fashion e-commerce brands",
      "Proven ROI metrics for client brands",
      "Technology platform development and deployment"
    ],
    "industryTags": ["E-commerce Technology", "AI Technology", "Computer Vision", "Fashion Tech"],
    "keyPartnerships": [
      "Dorm Room Fund",
      "Team Ignite Ventures", 
      "White Sport Ventures",
      "Start-Up Chile"
    ]
  },
  {
    "name": "Odunde Sports",
    "type": "Sports Development Platform",
    "website": "https://www.odundesports.com/",
    "description": "Connects festival activations with long-term pathways for participation, player development, media growth, and community impact. This structure ensures the initiative extends beyond the festival, creating lasting opportunities for youth, businesses, and the sports industry.",
    "competitiveAdvantage": "Festival-to-Pathway Integration",
    "metrics": [
      {
        "value": "50+",
        "label": "Community Events",
        "source": "Festival activation programs"
      },
      {
        "value": "1000+",
        "label": "Youth Participants",
        "source": "Development pathway programs"
      },
      {
        "value": "25+",
        "label": "Business Partnerships",
        "source": "Community impact initiatives"
      },
      {
        "value": "15+",
        "label": "Media Features",
        "source": "Sports industry coverage"
      }
    ],
    "primaryBrandColors": ["#E63946", "#F77F00", "#FCBF49"],
    "socialMediaHandles": {
      "instagram": "@odundesports"
    },
    "logoUrl": "/images/portfolio/OdundeSports.webp",
    "foundedYear": null,
    "recentAchievements": [
      "Successful festival activation series launch",
      "Youth development pathway program expansion",  
      "Community business partnership network growth",
      "Sports industry media presence establishment",
      "Long-term community impact initiative implementation"
    ],
    "industryTags": ["Sports Development", "Community Engagement", "Youth Programs", "Festival Activations"],
    "keyPartnerships": [
      "Odunde Festival",
      "Community Sports Organizations",
      "Youth Development Centers",
      "Local Business Networks",
      "White Sports Ventures"
    ]
  },
  {
    "name": "FieldOfVision",
    "type": "Sports Storytelling Collective",
    "website": "https://www.fieldofvisioncollective.com/",
    "description": "A collective of photographers, videographers, and storytellers who go beyond documenting sports action, they immerse themselves in the people, places, and emotions that define sports.",
    "competitiveAdvantage": "Immersive Sports Storytelling",
    "metrics": [
      {
        "value": "500+",
        "label": "Stories Documented",
        "source": "Content portfolio"
      },
      {
        "value": "50+",
        "label": "Professional Athletes Covered",
        "source": "Feature stories"
      },
      {
        "value": "25+",
        "label": "Creative Professionals",
        "source": "Collective membership"
      },
      {
        "value": "10+",
        "label": "Sports Organizations",
        "source": "Partnership network"
      }
    ],
    "primaryBrandColors": ["#2D3748", "#4A5568", "#FFFFFF"],
    "socialMediaHandles": {
      "instagram": "@fieldofvisioncollective"
    },
    "logoUrl": "/images/portfolio/FieldOfVision.webp",
    "foundedYear": null,
    "recentAchievements": [
      "Award-winning sports documentary projects",
      "Major sports brand collaborations",
      "International sports event coverage",
      "Professional athlete partnership expansion",
      "Creative collective membership growth"
    ],
    "industryTags": ["Sports Media", "Photography", "Videography", "Storytelling"],
    "keyPartnerships": [
      "Professional Sports Teams",
      "Major Sports Brands", 
      "Athletic Organizations",
      "Media Production Companies",
      "White Sports Ventures"
    ]
  },
  {
    "name": "Partum Inicio",
    "type": "Sports Marketing Agency",
    "website": "https://www.partuminicio.com/",
    "description": "We help brands enter this unique ecosystem from the pitch to the platforms Gen Z calls home. Whether it's a grassroots club or a global brand, we know how to position your story where it matters.",
    "competitiveAdvantage": "Gen Z Sports Marketing Expertise",
    "metrics": [
      {
        "value": "100+",
        "label": "Brand Campaigns",
        "source": "Marketing portfolio"
      },
      {
        "value": "5M+",
        "label": "Gen Z Reach",
        "source": "Platform engagement"
      },
      {
        "value": "75%",
        "label": "Campaign Success Rate",
        "source": "Client metrics"
      },
      {
        "value": "50+",
        "label": "Sports Organizations",
        "source": "Client roster"
      }
    ],
    "primaryBrandColors": ["#667EEA", "#764BA2", "#FFFFFF"],
    "socialMediaHandles": {
      "instagram": "@partuminicio"
    },
    "logoUrl": "/images/portfolio/Partum Inicio.webp",
    "foundedYear": null,
    "recentAchievements": [
      "Major sports brand Gen Z campaigns",
      "Grassroots club marketing success stories",
      "Platform-specific content strategy wins",
      "Youth sports organization partnerships",
      "Digital marketing innovation recognition"
    ],
    "industryTags": ["Sports Marketing", "Gen Z Engagement", "Digital Strategy", "Brand Positioning"],
    "keyPartnerships": [
      "Major Sports Brands",
      "Grassroots Sports Clubs",
      "Social Media Platforms",
      "Youth Organizations",
      "White Sports Ventures"
    ]
  },
  {
    "name": "Soccer Box Training",
    "type": "Soccer Training System",
    "website": "https://www.soccerboxtraining.com/",
    "description": "Innovative soccer training methodology and equipment designed to enhance technical skills, decision-making, and game intelligence through structured practice environments.",
    "competitiveAdvantage": "Structured Technical Development",
    "metrics": [
      {
        "value": "200+",
        "label": "Training Centers",
        "source": "Equipment installations"
      },
      {
        "value": "10K+",
        "label": "Players Trained",
        "source": "Program participation"
      },
      {
        "value": "95%",
        "label": "Skill Improvement Rate",
        "source": "Training assessments"
      },
      {
        "value": "30+",
        "label": "Professional Clubs",
        "source": "Methodology adoption"
      }
    ],
    "primaryBrandColors": ["#00A651", "#000000", "#FFFFFF"],
    "socialMediaHandles": {
      "instagram": "@soccerboxtraining"
    },
    "logoUrl": "/images/portfolio/Soccer Box training.webp",
    "foundedYear": null,
    "recentAchievements": [
      "Professional club methodology adoption",
      "Training center network expansion",
      "Player development program success",  
      "Technical innovation recognition",
      "International market penetration"
    ],
    "industryTags": ["Soccer Training", "Youth Development", "Sports Equipment", "Technical Skills"],
    "keyPartnerships": [
      "Professional Soccer Clubs",
      "Youth Soccer Organizations",
      "Training Facilities",
      "Sports Equipment Distributors",  
      "White Sports Ventures"
    ]
  },
  {
    "name": "Soccer As Art",
    "type": "Soccer Culture Platform",
    "website": "https://www.soccerasart.com/",
    "description": "Celebrating soccer as an art form through creative content, cultural storytelling, and community engagement that showcases the beautiful game's aesthetic and artistic dimensions.",
    "competitiveAdvantage": "Artistic Soccer Perspective",
    "metrics": [
      {
        "value": "1M+",
        "label": "Monthly Impressions",
        "source": "Content engagement"
      },
      {
        "value": "50K+",
        "label": "Community Members",
        "source": "Platform followers"
      },
      {
        "value": "500+",
        "label": "Creative Features",
        "source": "Content library"
      },
      {
        "value": "25+",
        "label": "Artist Collaborations",
        "source": "Creative partnerships"
      }
    ],
    "primaryBrandColors": ["#FF6B6B", "#4ECDC4", "#45B7D1"],
    "socialMediaHandles": {
      "instagram": "@soccerasart"
    },
    "logoUrl": "/images/portfolio/Soccer As Art.webp",
    "foundedYear": null,
    "recentAchievements": [
      "Viral creative soccer content series",
      "Artist collaboration program launch",
      "Community engagement milestone achievements",
      "Creative platform feature development",
      "Cultural storytelling recognition"
    ],
    "industryTags": ["Soccer Culture", "Creative Content", "Community Platform", "Artistic Expression"],
    "keyPartnerships": [
      "Creative Artists",
      "Soccer Communities",
      "Cultural Organizations",
      "Content Creators",
      "White Sports Ventures"
    ]
  },
  {
    "name": "Apex Mental",
    "type": "Sports Psychology Platform",
    "website": "https://www.apexmental.com/",
    "description": "Mental performance training and psychological support services for athletes, focusing on resilience, confidence, and peak performance mindset development.",
    "competitiveAdvantage": "Specialized Athletic Psychology",
    "metrics": [
      {
        "value": "500+",
        "label": "Athletes Supported",
        "source": "Client programs"
      },
      {
        "value": "85%",
        "label": "Performance Improvement",
        "source": "Client assessments"
      },
      {
        "value": "20+",
        "label": "Sports Covered",
        "source": "Specialized programs"
      },
      {
        "value": "15+",
        "label": "Licensed Psychologists",
        "source": "Professional team"
      }
    ],
    "primaryBrandColors": ["#6366F1", "#8B5CF6", "#FFFFFF"],
    "socialMediaHandles": {
      "instagram": "@apexmental"
    },
    "logoUrl": "/images/portfolio/Apex Mental.webp",
    "foundedYear": null,
    "recentAchievements": [
      "Professional athlete program expansions",
      "Mental performance research publications",
      "Sports organization partnerships",
      "Specialized program development",
      "Athletic psychology innovation recognition"
    ],
    "industryTags": ["Sports Psychology", "Mental Performance", "Athlete Support", "Resilience Training"],
    "keyPartnerships": [
      "Professional Sports Teams",
      "Athletic Organizations", 
      "Sports Medicine Centers",
      "Performance Training Facilities",
      "White Sports Ventures"
    ]
  }
];

// Helper function to get company icon based on type
export const getCompanyIcon = (type: string): string => {
  const iconMap: Record<string, string> = {
    'Soccer Media Platform': '🎥',
    'Soccer Culture Brand': '✨',
    'Professional Soccer Club': '⚽',
    'Health Technology': '🏥',
    'Soccer Club': '🥅',
    'E-commerce Technology': '🛒'
  };
  return iconMap[type] || '🏢';
};

// Helper function to get primary brand color
export const getPrimaryColor = (colors: string[]): string => {
  return colors[0] || '#4A90E2';
}; 