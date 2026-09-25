/* =========================================================================
   Extra Templates Pack 2 — 50 additional templates
   ========================================================================= */

export const EXTRA_TEMPLATES_2 = [
  {
    id: "google-rank",
    emoji: "🔝",
    label: "Google Ranking",
    role: "You are an SEO strategist who has ranked 500+ pages on Google page 1.",
    fields: [
      { key: "goal", label: "Goal", type: "chips", def: "Rank for keywords", chips: ["Rank for keywords", "Local SEO", "E-commerce SEO", "SaaS SEO"] },
      { key: "niche", label: "Niche", type: "text", def: "", placeholder: "e.g. Dental practices in Austin" },
      { key: "timeframe", label: "Timeframe", type: "chips", def: "6 months", chips: ["3 months", "6 months", "12 months"] }
    ],
    output: [
      "Keyword research strategy with 20 target keywords",
      "On-page optimization checklist",
      "Content plan for 3 months",
      "Backlink strategy",
      "Monthly tracking metrics"
    ]
  },
  {
    id: "organic-traffic",
    emoji: "🌱",
    label: "Organic Traffic",
    role: "You are a growth marketer who builds organic traffic engines that compound.",
    fields: [
      { key: "site", label: "Site type", type: "chips", def: "Blog", chips: ["Blog", "SaaS product", "E-commerce", "Portfolio"] },
      { key: "current", label: "Current traffic", type: "text", def: "", placeholder: "e.g. 500 monthly visitors" },
      { key: "goal", label: "Target", type: "text", def: "", placeholder: "e.g. 10,000 monthly visitors in 12 months" }
    ],
    output: [
      "3 traffic channel recommendations",
      "Content calendar for 90 days",
      "Distribution strategy per channel",
      "Metrics dashboard",
      "Common mistakes to avoid"
    ]
  },
  {
    id: "landing-page-copy",
    emoji: "🎯",
    label: "Landing Page Copy",
    role: "You are a conversion copywriter who has written landing pages converting at 20%+.",
    fields: [
      { key: "offer", label: "Offer", type: "text", def: "", placeholder: "e.g. AI scheduling for clinics" },
      { key: "audience", label: "Audience", type: "chips", def: "B2B buyers", chips: ["B2B buyers", "Consumers", "Freelancers", "Enterprises"] },
      { key: "tone", label: "Tone", type: "chips", def: "Confident & clear", chips: ["Confident & clear", "Warm", "Technical", "Playful"] }
    ],
    output: [
      "Hero headline (3 variants)",
      "Subheadline",
      "3 value props with proof",
      "Objection-handling section",
      "CTA copy for all buttons",
      "Social proof angle"
    ]
  },
  {
    id: "cold-email",
    emoji: "✉️",
    label: "Cold Email",
    role: "You are a cold email expert whose campaigns get 15%+ reply rates.",
    fields: [
      { key: "target", label: "Target", type: "text", def: "", placeholder: "e.g. CTOs at Series B SaaS companies" },
      { key: "offer", label: "Your offer", type: "text", def: "", placeholder: "e.g. Reduce cloud costs by 40%" },
      { key: "style", label: "Style", type: "chips", def: "Direct & personal", chips: ["Direct & personal", "Story-led", "Data-driven", "Casual"] }
    ],
    output: [
      "Subject line (5 variants)",
      "Opening line that isn't 'I hope this finds you well'",
      "Problem-agitate-solve body",
      "Low-friction CTA",
      "Follow-up sequence (3 emails)"
    ]
  },
  {
    id: "youtube-seo",
    emoji: "📺",
    label: "YouTube SEO",
    role: "You are a YouTube strategist whose client channels average 10M+ views/month.",
    fields: [
      { key: "topic", label: "Topic", type: "text", def: "", placeholder: "e.g. Personal finance for millennials" },
      { key: "format", label: "Format", type: "chips", def: "Tutorials", chips: ["Tutorials", "Vlogs", "Interviews", "Reviews", "Shorts"] },
      { key: "goal", label: "Goal", type: "chips", def: "Subscribers", chips: ["Subscribers", "Views", "Watch time", "Monetization"] }
    ],
    output: [
      "Channel positioning",
      "Video title formulas (10 examples)",
      "Description template with timestamps",
      "Tags strategy",
      "Thumbnail concepts"
    ]
  },
  {
    id: "instagram-carousel",
    emoji: "📸",
    label: "Instagram Carousel",
    role: "You are an Instagram creator whose carousels average 100K+ saves.",
    fields: [
      { key: "topic", label: "Topic", type: "text", def: "", placeholder: "e.g. 7 lessons from launching 3 failed startups" },
      { key: "slides", label: "Slides", type: "chips", def: "7 slides", chips: ["5 slides", "7 slides", "10 slides"] },
      { key: "style", label: "Style", type: "chips", def: "Bold & visual", chips: ["Bold & visual", "Minimal", "Educational", "Story-driven"] }
    ],
    output: [
      "Slide 1: hook that stops scroll",
      "Slides 2-N: one idea per slide with visual direction",
      "Final slide: CTA + follow prompt",
      "Caption copy",
      "Hashtag strategy"
    ]
  },
  {
    id: "tiktok-script",
    emoji: "🎵",
    label: "TikTok Script",
    role: "You are a TikTok creator whose videos average 500K views.",
    fields: [
      { key: "topic", label: "Topic", type: "text", def: "", placeholder: "e.g. Day in the life of a founder" },
      { key: "length", label: "Length", type: "chips", def: "30 sec", chips: ["15 sec", "30 sec", "60 sec", "3 min"] },
      { key: "style", label: "Style", type: "chips", def: "Story-driven", chips: ["Story-driven", "Educational", "Entertainment", "Trending sound"] }
    ],
    output: [
      "Hook (first 1 second)",
      "Beat-by-beat script with timing",
      "On-screen text suggestions",
      "B-roll shot list",
      "Sound/trend recommendation",
      "CTA"
    ]
  },
  {
    id: "twitter-thread",
    emoji: "🐦",
    label: "Twitter Thread",
    role: "You are a Twitter ghostwriter whose threads average 1M+ impressions.",
    fields: [
      { key: "topic", label: "Topic", type: "text", def: "", placeholder: "e.g. How I grew from 0 to 10K followers" },
      { key: "angle", label: "Angle", type: "chips", def: "Contrarian", chips: ["Contrarian", "Story", "Data", "List", "Framework"] },
      { key: "length", label: "Length", type: "chips", def: "10 tweets", chips: ["5 tweets", "10 tweets", "15 tweets"] }
    ],
    output: [
      "Tweet 1: scroll-stopping hook",
      "Numbered thread with narrative arc",
      "Data or story supporting each point",
      "Retweet-able one-liner",
      "Final CTA tweet"
    ]
  },
  {
    id: "linkedin-post",
    emoji: "💼",
    label: "LinkedIn Post",
    role: "You are a LinkedIn creator whose posts average 500K impressions.",
    fields: [
      { key: "topic", label: "Topic", type: "text", def: "", placeholder: "e.g. Why I turned down a $500K job offer" },
      { key: "type", label: "Type", type: "chips", def: "Story", chips: ["Story", "Lesson", "Hot take", "Framework", "Win/loss"] },
      { key: "goal", label: "Goal", type: "chips", def: "Engagement", chips: ["Engagement", "Leads", "DMs", "Authority"] }
    ],
    output: [
      "Hook line (first 200 chars)",
      "Body with line breaks",
      "Story or lesson arc",
      "Question to spark comments",
      "3 hashtags",
      "Hashtag strategy for reach"
    ]
  },
  {
    id: "facebook-ads",
    emoji: "📘",
    label: "Facebook Ads",
    role: "You are a Facebook ads expert whose campaigns consistently hit 5x ROAS.",
    fields: [
      { key: "product", label: "Product", type: "text", def: "", placeholder: "e.g. AI writing tool for agencies" },
      { key: "audience", label: "Audience", type: "text", def: "", placeholder: "e.g. Agency owners 30-45 in US/UK" },
      { key: "goal", label: "Goal", type: "chips", def: "Conversions", chips: ["Awareness", "Conversions", "Lead gen", "Retargeting"] }
    ],
    output: [
      "3 ad angles to test",
      "Primary text (3 variants)",
      "Headline (5 variants)",
      "CTA recommendations",
      "Creative direction",
      "Audience targeting suggestions"
    ]
  },
  {
    id: "twitter-engagement",
    emoji: "💬",
    label: "Twitter Engagement",
    role: "You are a Twitter growth expert who has grown accounts from 0 to 100K.",
    fields: [
      { key: "niche", label: "Niche", type: "text", def: "", placeholder: "e.g. Indie hackers, AI builders, designers" },
      { key: "goal", label: "Goal", type: "chips", def: "Followers", chips: ["Followers", "Replies", "DMs", "Newsletter signups"] },
      { key: "tone", label: "Tone", type: "chips", def: "Conversational", chips: ["Conversational", "Contrarian", "Helpful", "Humorous"] }
    ],
    output: [
      "5 daily engagement post ideas",
      "Reply strategy for growth",
      "Who to engage with (target list)",
      "Daily engagement routine",
      "Weekly metrics to track"
    ]
  },
  {
    id: "pinterest",
    emoji: "📌",
    label: "Pinterest Strategy",
    role: "You are a Pinterest strategist whose clients average 1M+ monthly views.",
    fields: [
      { key: "niche", label: "Niche", type: "text", def: "", placeholder: "e.g. Home decor, recipes, weddings, tech tips" },
      { key: "goal", label: "Goal", type: "chips", def: "Traffic", chips: ["Traffic", "Sales", "Brand awareness", "Email signups"] },
      { key: "content", label: "Content type", type: "chips", def: "Blog posts", chips: ["Blog posts", "Products", "Infographics", "Videos"] }
    ],
    output: [
      "Board structure (10 boards)",
      "Pin title formulas",
      "Pin description template",
      "Daily pinning schedule",
      "SEO keyword strategy"
    ]
  },
  {
    id: "social-stories",
    emoji: "📱",
    label: "Social Media Stories",
    role: "You are a Stories strategist whose clients average 15%+ view-through rates.",
    fields: [
      { key: "platform", label: "Platform", type: "chips", def: "Instagram", chips: ["Instagram", "Facebook", "Snapchat"] },
      { key: "purpose", label: "Purpose", type: "chips", def: "Engagement", chips: ["Engagement", "Sales", "Behind-scenes", "Education"] },
      { key: "count", label: "Count", type: "chips", def: "5 frames", chips: ["3 frames", "5 frames", "7 frames"] }
    ],
    output: [
      "Frame-by-frame storyboard",
      "Interactive stickers (poll/question)",
      "Text overlay suggestions",
      "B-roll and music",
      "Final CTA frame"
    ]
  },
  {
    id: "long-copy",
    emoji: "📝",
    label: "Long-Form Copywriting",
    role: "You are a copy chief who writes long-form sales letters that convert at 3%+.",
    fields: [
      { key: "offer", label: "Offer", type: "text", def: "", placeholder: "e.g. $2000 coaching program" },
      { key: "audience", label: "Audience", type: "chips", def: "Entrepreneurs", chips: ["Entrepreneurs", "Executives", "Creatives", "Freelancers"] },
      { key: "proof", label: "Proof", type: "text", def: "", placeholder: "e.g. 500+ success stories, 4.9/5 rating" }
    ],
    output: [
      "Attention-grabbing headline",
      "Story-driven opening",
      "Problem section",
      "Solution framework",
      "Proof stack",
      "Price justification",
      "Multiple CTAs"
    ]
  },
  {
    id: "objection-handling",
    emoji: "🛡️",
    label: "Overcoming Objections",
    role: "You are a sales trainer who teaches closing techniques to B2B teams.",
    fields: [
      { key: "product", label: "Product", type: "text", def: "", placeholder: "e.g. Enterprise CRM software" },
      { key: "objection", label: "Top objection", type: "chips", def: "Too expensive", chips: ["Too expensive", "Need to think", "Have competitor", "Not a priority", "Bad timing"] },
      { key: "industry", label: "Industry", type: "chips", def: "SaaS", chips: ["SaaS", "Consulting", "Healthcare", "Real estate", "Finance"] }
    ],
    output: [
      "Root cause analysis of objection",
      "Reframe framework",
      "3 specific responses",
      "Follow-up questions to ask",
      "When to walk away"
    ]
  },
  {
    id: "high-ticket",
    emoji: "💎",
    label: "High-Ticket Offer",
    role: "You are a high-ticket offer designer who has created $50K+ programs.",
    fields: [
      { key: "expertise", label: "Your expertise", type: "text", def: "", placeholder: "e.g. Executive coaching for CTOs" },
      { key: "price", label: "Target price", type: "chips", def: "$5K-10K", chips: ["$5K-10K", "$10K-25K", "$25K-50K", "$50K+"] },
      { key: "delivery", label: "Delivery", type: "chips", def: "1-on-1", chips: ["1-on-1", "Group program", "Hybrid", "Done-for-you"] }
    ],
    output: [
      "Offer positioning",
      "Outcome promise",
      "Delivery structure",
      "Pricing tiers",
      "Guarantee structure",
      "Sales page outline"
    ]
  },
  {
    id: "sales-letter",
    emoji: "📜",
    label: "Sales Letter",
    role: "You are a direct-response copywriter trained on classics by Halbert, Ogilvy, and Schwartz.",
    fields: [
      { key: "product", label: "Product", type: "text", def: "", placeholder: "e.g. Info product on investing" },
      { key: "price", label: "Price point", type: "chips", def: "$97", chips: ["$47", "$97", "$297", "$997+"] },
      { key: "urgency", label: "Urgency", type: "chips", def: "Limited time", chips: ["Limited time", "Limited spots", "Price increase", "Bonus expires"] }
    ],
    output: [
      "Headline + subhead",
      "Lead (story or shock)",
      "Problem agitation",
      "Solution reveal",
      "Proof (testimonials, data)",
      "Offer stack",
      "Urgency + guarantee",
      "PS + CTA"
    ]
  },
  {
    id: "sales-funnel",
    emoji: "🌪️",
    label: "Sales Funnel",
    role: "You are a funnel strategist who has built funnels doing $1M+ annually.",
    fields: [
      { key: "product", label: "Product", type: "text", def: "", placeholder: "e.g. Online course on photography" },
      { key: "price", label: "Price", type: "chips", def: "$497", chips: ["Free", "$47", "$497", "$2K+"] },
      { key: "traffic", label: "Traffic source", type: "chips", def: "Paid ads", chips: ["Paid ads", "Organic", "Email", "Affiliates"] }
    ],
    output: [
      "Funnel stages",
      "Opt-in offer",
      "Email sequence (7 emails)",
      "Sales page structure",
      "Order bump + upsell",
      "Follow-up sequence for non-buyers"
    ]
  },
  {
    id: "saas-growth",
    emoji: "📈",
    label: "SaaS Growth",
    role: "You are a SaaS growth operator who has scaled 3 companies from $1M to $50M ARR.",
    fields: [
      { key: "product", label: "Product", type: "text", def: "", placeholder: "e.g. AI analytics for e-commerce" },
      { key: "stage", label: "Stage", type: "chips", def: "$100K ARR", chips: ["Pre-revenue", "$10K ARR", "$100K ARR", "$1M ARR", "$10M ARR"] },
      { key: "focus", label: "Focus", type: "chips", def: "Growth", chips: ["Growth", "Retention", "Pricing", "Fundraising", "Hiring"] }
    ],
    output: [
      "3 growth levers with expected impact",
      "Pricing model recommendation",
      "Retention improvement plan",
      "Hiring priorities (next 3 roles)",
      "90-day action plan"
    ]
  },
  {
    id: "saas-metrics",
    emoji: "📊",
    label: "SaaS Metrics Review",
    role: "You are a SaaS CFO who reviews metrics for boards and investors.",
    fields: [
      { key: "metrics", label: "Current metrics", type: "text", def: "", placeholder: "e.g. MRR $50K, churn 5%, CAC $500" },
      { key: "concern", label: "Concern", type: "chips", def: "Churn", chips: ["Churn", "Growth", "CAC", "LTV", "Runway"] },
      { key: "stage", label: "Stage", type: "chips", def: "Series A", chips: ["Pre-seed", "Seed", "Series A", "Series B"] }
    ],
    output: [
      "Metrics diagnosis",
      "Benchmarks vs stage",
      "Top 3 issues with root cause",
      "Action plan per issue",
      "What to tell your board"
    ]
  },
  {
    id: "b2b-sales",
    emoji: "🏢",
    label: "B2B Sales",
    role: "You are an enterprise sales leader who has closed $100M+ deals.",
    fields: [
      { key: "product", label: "Product", type: "text", def: "", placeholder: "e.g. Cybersecurity platform" },
      { key: "buyer", label: "Buyer", type: "chips", def: "CTO", chips: ["CEO", "CTO", "CFO", "VP Sales", "Head of Ops"] },
      { key: "stage", label: "Sales stage", type: "chips", def: "Discovery", chips: ["Prospecting", "Discovery", "Demo", "Negotiation", "Closing"] }
    ],
    output: [
      "Stakeholder map",
      "Discovery questions",
      "Value positioning per stakeholder",
      "Deal qualification framework",
      "Next-step recommendations"
    ]
  },
  {
    id: "ecommerce",
    emoji: "🛍️",
    label: "E-Commerce Strategy",
    role: "You are an e-commerce strategist who has scaled DTC brands to $100M+.",
    fields: [
      { key: "category", label: "Category", type: "text", def: "", placeholder: "e.g. Premium skincare, pet supplies" },
      { key: "price", label: "Price point", type: "chips", def: "$50-100", chips: ["Under $50", "$50-100", "$100-500", "$500+"] },
      { key: "channel", label: "Main channel", type: "chips", def: "Shopify", chips: ["Shopify", "Amazon", "Etsy", "Own site"] }
    ],
    output: [
      "Product-market fit check",
      "Pricing strategy",
      "Acquisition channels",
      "Retention playbook",
      "90-day growth plan",
      "Key metrics"
    ]
  },
  {
    id: "digital-product",
    emoji: "💻",
    label: "Digital Product Launch",
    role: "You are a product creator who has launched 10+ successful digital products.",
    fields: [
      { key: "product", label: "Product", type: "text", def: "", placeholder: "e.g. Notion templates for freelancers" },
      { key: "format", label: "Format", type: "chips", def: "Template pack", chips: ["Template pack", "Online course", "E-book", "Community", "Tool"] },
      { key: "price", label: "Price", type: "chips", def: "$49", chips: ["Free", "$19", "$49", "$99", "$199+"] }
    ],
    output: [
      "Product outline",
      "Landing page copy",
      "Launch sequence (7 days)",
      "Pricing strategy",
      "First-100-customers plan",
      "Upsell path"
    ]
  },
  {
    id: "small-business",
    emoji: "🏪",
    label: "Small Business Plan",
    role: "You are a small business consultant who has advised 200+ local businesses.",
    fields: [
      { key: "business", label: "Business type", type: "text", def: "", placeholder: "e.g. Coffee shop, dental practice, boutique gym" },
      { key: "location", label: "Location", type: "chips", def: "Urban", chips: ["Urban", "Suburban", "Rural", "Tourist area"] },
      { key: "stage", label: "Stage", type: "chips", def: "New", chips: ["New business", "Growing", "Mature", "Troubled"] }
    ],
    output: [
      "Business model canvas",
      "Revenue streams",
      "Cost structure",
      "Marketing plan",
      "Local customer acquisition",
      "90-day priorities"
    ]
  },
  {
    id: "entrepreneur",
    emoji: "🚀",
    label: "Entrepreneur Mindset",
    role: "You are a startup advisor who has coached 500+ founders through their most challenging moments.",
    fields: [
      { key: "challenge", label: "Current challenge", type: "chips", def: "Product-market fit", chips: ["Product-market fit", "Team issues", "Fundraising", "Burnout", "Scaling", "Competition"] },
      { key: "stage", label: "Stage", type: "chips", def: "Seed", chips: ["Idea", "Seed", "Series A", "Growth"] },
      { key: "context", label: "Context", type: "text", def: "", placeholder: "What is happening right now?" }
    ],
    output: [
      "Reframe of the challenge",
      "3 potential paths forward",
      "Trade-offs for each path",
      "Recommended action this week",
      "What to stop doing",
      "Success metric"
    ]
  },
  {
    id: "no-code",
    emoji: "🧩",
    label: "No-Code Builder",
    role: "You are a no-code expert who builds production apps on Bubble, Airtable, and Webflow.",
    fields: [
      { key: "idea", label: "What to build", type: "text", def: "", placeholder: "e.g. CRM for photographers" },
      { key: "stack", label: "Preferred stack", type: "chips", def: "Not sure", chips: ["Not sure", "Bubble", "Airtable + Glide", "Webflow + Xano", "Softr"] },
      { key: "users", label: "Users", type: "chips", def: "SMBs", chips: ["SMBs", "Consumers", "Enterprises", "Internal team"] }
    ],
    output: [
      "Recommended stack with why",
      "Data model",
      "Key screens/pages",
      "Integrations needed",
      "No-code vs code trade-offs",
      "Timeline for MVP"
    ]
  },
  {
    id: "crypto-strategy",
    emoji: "₿",
    label: "Crypto Strategy",
    role: "You are a crypto analyst who has written research for institutional investors.",
    fields: [
      { key: "asset", label: "Asset / focus", type: "text", def: "", placeholder: "e.g. Bitcoin, Ethereum, Layer 2s" },
      { key: "horizon", label: "Time horizon", type: "chips", def: "1-3 years", chips: ["Months", "1-3 years", "5+ years"] },
      { key: "risk", label: "Risk profile", type: "chips", def: "Moderate", chips: ["Conservative", "Moderate", "Aggressive", "Degen"] }
    ],
    output: [
      "Market overview",
      "3 investment theses with evidence",
      "Risk factors",
      "Position sizing suggestion",
      "Tracking metrics",
      "Exit strategy"
    ]
  },
  {
    id: "defi",
    emoji: "🏦",
    label: "DeFi Strategy",
    role: "You are a DeFi researcher who has analyzed protocols across Ethereum, Solana, and Base.",
    fields: [
      { key: "goal", label: "Goal", type: "chips", def: "Yield", chips: ["Yield", "Trading", "Lending", "Liquidity", "Governance"] },
      { key: "chain", label: "Chain", type: "chips", def: "Ethereum", chips: ["Ethereum", "Solana", "Base", "Arbitrum"] },
      { key: "capital", label: "Capital", type: "chips", def: "$10K-50K", chips: ["Under $1K", "$1K-10K", "$10K-50K", "$50K+"] }
    ],
    output: [
      "Protocol comparison",
      "Risk assessment per protocol",
      "Yield strategy",
      "Tax and reporting notes",
      "Safety checklist (audits, TVL, team)",
      "Exit plan"
    ]
  },
  {
    id: "nft-strategy",
    emoji: "🎨",
    label: "NFT Strategy",
    role: "You are an NFT strategist who has advised collections that sold out in hours.",
    fields: [
      { key: "role", label: "Your role", type: "chips", def: "Creator", chips: ["Creator", "Investor", "Trader", "Community manager"] },
      { key: "focus", label: "Focus", type: "chips", def: "Launch", chips: ["Launch", "Marketing", "Trading", "Community", "Utility"] },
      { key: "chain", label: "Chain", type: "chips", def: "Ethereum", chips: ["Ethereum", "Solana", "Bitcoin ordinals", "Polygon"] }
    ],
    output: [
      "Market analysis for chain",
      "Positioning strategy",
      "Launch checklist",
      "Community engagement plan",
      "Post-mint roadmap",
      "Exit criteria"
    ]
  },
  {
    id: "job-landing",
    emoji: "🎯",
    label: "Landing a New Job",
    role: "You are a career coach who has helped 2000+ people land jobs at top companies.",
    fields: [
      { key: "role", label: "Target role", type: "text", def: "", placeholder: "e.g. Product Manager at FAANG" },
      { key: "background", label: "Your background", type: "text", def: "", placeholder: "e.g. 5 years B2B SaaS PM, 2 exits" },
      { key: "timeline", label: "Timeline", type: "chips", def: "3 months", chips: ["1 month", "3 months", "6 months", "No rush"] }
    ],
    output: [
      "Realistic target list (20 companies)",
      "Resume + LinkedIn changes",
      "Outreach strategy (10/week)",
      "Interview prep plan",
      "Negotiation script",
      "Weekly accountability"
    ]
  },
  {
    id: "linkedin-sales",
    emoji: "💼",
    label: "LinkedIn Sales Navigator",
    role: "You are a LinkedIn sales expert who books 20+ meetings per month for clients.",
    fields: [
      { key: "icp", label: "Ideal customer", type: "text", def: "", placeholder: "e.g. VP Sales at B2B SaaS, 200-500 employees" },
      { key: "offer", label: "Your offer", type: "text", def: "", placeholder: "e.g. Sales training program" },
      { key: "goal", label: "Goal", type: "chips", def: "20 meetings/mo", chips: ["10 meetings/mo", "20 meetings/mo", "30+ meetings/mo"] }
    ],
    output: [
      "ICP targeting filters",
      "Message template (connection + follow-up)",
      "Weekly outreach schedule",
      "Profile optimization tips",
      "Content strategy to support outreach"
    ]
  },
  {
    id: "career-path",
    emoji: "🧭",
    label: "Career Path Planning",
    role: "You are a career strategist who helps professionals design 5-10 year career paths.",
    fields: [
      { key: "current", label: "Current role", type: "text", def: "", placeholder: "e.g. Mid-level data analyst" },
      { key: "goal", label: "Goal", type: "text", def: "", placeholder: "e.g. VP of Data at a Series B company" },
      { key: "timeline", label: "Timeline", type: "chips", def: "5 years", chips: ["3 years", "5 years", "7 years", "10 years"] }
    ],
    output: [
      "Role progression map",
      "Skill gaps per level",
      "Milestones per year",
      "Relationship-building strategy",
      "Side projects to accelerate",
      "When to switch companies"
    ]
  },
  {
    id: "sales-engineer",
    emoji: "🛠️",
    label: "Sales Engineering",
    role: "You are a sales engineering leader who has built teams at Salesforce and Stripe.",
    fields: [
      { key: "product", label: "Product", type: "text", def: "", placeholder: "e.g. Enterprise data platform" },
      { key: "deal", label: "Deal stage", type: "chips", def: "Technical discovery", chips: ["Technical discovery", "Demo", "POC", "Closing"] },
      { key: "audience", label: "Audience", type: "chips", def: "Technical", chips: ["Technical", "Business", "Mixed", "Executive"] }
    ],
    output: [
      "Discovery questions",
      "Demo script tailored to audience",
      "Common technical objections",
      "POC success criteria",
      "Handoff to sales",
      "Follow-up plan"
    ]
  },
  {
    id: "time-mgmt",
    emoji: "⏰",
    label: "Time Management",
    role: "You are a productivity coach who has trained CEOs and founders on time management.",
    fields: [
      { key: "role", label: "Your role", type: "text", def: "", placeholder: "e.g. Founder, manager, freelancer" },
      { key: "challenge", label: "Main challenge", type: "chips", def: "Too many priorities", chips: ["Too many priorities", "Meeting overload", "Context switching", "Procrastination", "Burnout"] },
      { key: "system", label: "Preferred system", type: "chips", def: "Time-blocking", chips: ["Time-blocking", "GTD", "Eisenhower", "Pomodoro", "No system"] }
    ],
    output: [
      "Weekly time audit",
      "Priority framework",
      "Time-blocking template",
      "Meeting reduction plan",
      "Deep work ritual",
      "Weekly review checklist"
    ]
  },
  {
    id: "stress-mgmt",
    emoji: "🧘",
    label: "Stress Management",
    role: "You are a stress management coach trained in CBT and mindfulness.",
    fields: [
      { key: "source", label: "Main stressor", type: "chips", def: "Work", chips: ["Work", "Relationships", "Health", "Finances", "Uncertainty"] },
      { key: "symptoms", label: "Symptoms", type: "chips", def: "Sleep issues", chips: ["Sleep issues", "Anxiety", "Irritability", "Fatigue", "Overwhelm"] },
      { key: "time", label: "Time for practice", type: "chips", def: "10 min/day", chips: ["5 min/day", "10 min/day", "20 min/day", "1 hour/day"] }
    ],
    output: [
      "Root cause analysis",
      "3 immediate coping strategies",
      "Daily practice plan",
      "Weekly check-in ritual",
      "When to seek professional help",
      "Long-term habit building"
    ]
  },
  {
    id: "better-sleep",
    emoji: "😴",
    label: "Better Sleep",
    role: "You are a sleep coach trained in CBT-I (Cognitive Behavioral Therapy for Insomnia).",
    fields: [
      { key: "issue", label: "Main issue", type: "chips", def: "Falling asleep", chips: ["Falling asleep", "Staying asleep", "Waking too early", "Not feeling rested"] },
      { key: "schedule", label: "Schedule", type: "text", def: "", placeholder: "e.g. Sleep 11pm-6am, wake 3x per night" },
      { key: "lifestyle", label: "Lifestyle", type: "chips", def: "Sedentary", chips: ["Sedentary", "Active", "Athlete", "Shift worker"] }
    ],
    output: [
      "Sleep hygiene audit",
      "Bedtime routine (60 min)",
      "Morning routine (30 min)",
      "Room setup checklist",
      "When to see a doctor",
      "2-week improvement plan"
    ]
  },
  {
    id: "customer-service",
    emoji: "💬",
    label: "Customer Service",
    role: "You are a customer experience leader who has built support teams at high-growth startups.",
    fields: [
      { key: "scenario", label: "Scenario", type: "chips", def: "Complaint", chips: ["Complaint", "Refund request", "Feature request", "Churn risk", "Angry customer"] },
      { key: "channel", label: "Channel", type: "chips", def: "Email", chips: ["Email", "Chat", "Phone", "Social media"] },
      { key: "tone", label: "Tone", type: "chips", def: "Empathetic", chips: ["Empathetic", "Professional", "Casual", "Apologetic"] }
    ],
    output: [
      "Response template",
      "Empathy statement",
      "Root cause explanation",
      "Solution options",
      "Follow-up plan",
      "Internal escalation if needed"
    ]
  },
  {
    id: "airbnb-host",
    emoji: "🏠",
    label: "Airbnb Host",
    role: "You are an Airbnb superhost who manages 20+ properties with 4.9+ ratings.",
    fields: [
      { key: "property", label: "Property", type: "text", def: "", placeholder: "e.g. 2BR beach condo in Miami" },
      { key: "audience", label: "Target guest", type: "chips", def: "Tourists", chips: ["Tourists", "Business travelers", "Families", "Couples", "Digital nomads"] },
      { key: "concern", label: "Main concern", type: "chips", def: "Reviews", chips: ["Reviews", "Occupancy", "Pricing", "Guest issues", "Cleaning"] }
    ],
    output: [
      "Listing title (3 variants)",
      "Description",
      "Photo shot list",
      "Pricing strategy",
      "Guest communication templates",
      "Review request plan"
    ]
  },
  {
    id: "garden",
    emoji: "🌱",
    label: "Begin a Garden",
    role: "You are a master gardener who has designed gardens in every climate zone.",
    fields: [
      { key: "climate", label: "Climate", type: "chips", def: "Temperate", chips: ["Tropical", "Arid", "Temperate", "Cold", "Mediterranean"] },
      { key: "space", label: "Space", type: "chips", def: "Small balcony", chips: ["Small balcony", "Backyard", "Rooftop", "Community plot"] },
      { key: "goal", label: "Goal", type: "chips", def: "Vegetables", chips: ["Vegetables", "Flowers", "Herbs", "Pollinators", "Mixed"] }
    ],
    output: [
      "Plant recommendations for your climate",
      "Layout plan",
      "Seasonal calendar",
      "Soil prep steps",
      "Watering and feeding schedule",
      "Common pests and solutions"
    ]
  },
  {
    id: "etsy",
    emoji: "🎨",
    label: "Etsy Seller",
    role: "You are an Etsy seller who has generated $500K+ in sales across multiple shops.",
    fields: [
      { key: "product", label: "Product", type: "text", def: "", placeholder: "e.g. Handmade jewelry, digital templates" },
      { key: "niche", label: "Niche", type: "chips", def: "Home decor", chips: ["Home decor", "Jewelry", "Digital products", "Vintage", "Crafts"] },
      { key: "goal", label: "Goal", type: "chips", def: "First sale", chips: ["First sale", "100 sales", "1000 sales", "Scale to $10K/mo"] }
    ],
    output: [
      "Shop positioning",
      "Product listing template",
      "SEO title and tags",
      "Pricing strategy",
      "Photo guidelines",
      "Marketing plan for Etsy + social"
    ]
  },
  {
    id: "smma",
    emoji: "📊",
    label: "SMMA Operations",
    role: "You are an SMMA owner who has scaled an agency to $2M ARR with 15 team members.",
    fields: [
      { key: "niche", label: "Client niche", type: "chips", def: "Local services", chips: ["Local services", "E-commerce", "SaaS", "Coaches", "Restaurants"] },
      { key: "service", label: "Main service", type: "chips", def: "Ads management", chips: ["Ads management", "SEO", "Full stack", "Lead gen", "Content"] },
      { key: "size", label: "Team size", type: "chips", def: "Solo", chips: ["Solo", "2-5 people", "6-15 people", "15+"] }
    ],
    output: [
      "Client acquisition system",
      "Offer positioning",
      "Pricing model",
      "Delivery playbook",
      "Hiring plan",
      "Retention strategy"
    ]
  },
  {
    id: "excel-formula",
    emoji: "📊",
    label: "Excel Formula",
    role: "You are an Excel expert who has automated work for Fortune 500 companies.",
    fields: [
      { key: "task", label: "What you want to do", type: "text", def: "", placeholder: "e.g. Count unique values in a range with criteria" },
      { key: "version", label: "Excel version", type: "chips", def: "365", chips: ["365", "2019", "2016", "Google Sheets", "Mac"] },
      { key: "complexity", label: "Complexity", type: "chips", def: "Standard", chips: ["Simple", "Standard", "Advanced", "Power user"] }
    ],
    output: [
      "Recommended formula",
      "Step-by-step explanation",
      "Alternative approaches",
      "Common pitfalls",
      "Related functions to learn"
    ]
  },
  {
    id: "chatbot",
    emoji: "🤖",
    label: "Chatbot Design",
    role: "You are a conversation designer who has built chatbots for enterprise and startups.",
    fields: [
      { key: "purpose", label: "Purpose", type: "chips", def: "Customer support", chips: ["Customer support", "Sales", "Onboarding", "FAQ", "Booking"] },
      { key: "channel", label: "Channel", type: "chips", def: "Website", chips: ["Website", "WhatsApp", "SMS", "Slack", "Voice"] },
      { key: "brand", label: "Brand voice", type: "chips", def: "Friendly", chips: ["Friendly", "Professional", "Playful", "Minimal"] }
    ],
    output: [
      "Conversation flows (happy path + 5 edge cases)",
      "Sample dialogues",
      "Fallback handling",
      "Handoff to human criteria",
      "Analytics to track",
      "Tone guide"
    ]
  },
  {
    id: "cold-call",
    emoji: "📞",
    label: "Cold Call Script",
    role: "You are a cold call expert who books 30+ meetings per week for B2B clients.",
    fields: [
      { key: "icp", label: "ICP", type: "text", def: "", placeholder: "e.g. VP Marketing at B2B SaaS" },
      { key: "offer", label: "Your offer", type: "text", def: "", placeholder: "e.g. Content marketing service" },
      { key: "goal", label: "Goal", type: "chips", def: "Book meeting", chips: ["Book meeting", "Qualify", "Send info", "Warm up"] }
    ],
    output: [
      "Opener (30 seconds)",
      "3 qualification questions",
      "Value statement",
      "Objection responses (5 most common)",
      "Close to next step",
      "Voicemail script"
    ]
  },
  {
    id: "phone-lead",
    emoji: "☎️",
    label: "Phone Lead Gen",
    role: "You are a lead generation expert who has booked 10,000+ sales calls.",
    fields: [
      { key: "industry", label: "Industry", type: "chips", def: "SaaS", chips: ["SaaS", "Agency", "Real estate", "Insurance", "Financial"] },
      { key: "lead", label: "Lead source", type: "chips", def: "Inbound", chips: ["Inbound", "Cold list", "Referral", "Event", "Social"] },
      { key: "goal", label: "Goal", type: "chips", def: "Qualify", chips: ["Qualify", "Book demo", "Book meeting", "Warm transfer"] }
    ],
    output: [
      "Pre-call research checklist",
      "Call framework",
      "5 qualification questions",
      "Handling the top 3 objections",
      "CRM notes template",
      "Follow-up sequence"
    ]
  },
  {
    id: "outside-sales",
    emoji: "🚗",
    label: "Outside Sales",
    role: "You are an outside sales veteran who has closed $10M+ in field sales.",
    fields: [
      { key: "industry", label: "Industry", type: "chips", def: "Medical devices", chips: ["Medical devices", "Construction", "Industrial", "Food service", "Tech"] },
      { key: "buyer", label: "Buyer role", type: "chips", def: "Owner", chips: ["Owner", "Office manager", "Purchasing", "Operations"] },
      { key: "stage", label: "Stage", type: "chips", def: "Cold visit", chips: ["Cold visit", "Follow-up", "Proposal", "Negotiation"] }
    ],
    output: [
      "Pre-visit research checklist",
      "In-person opener",
      "Discovery questions",
      "Demo outline",
      "Closing techniques",
      "CRM follow-up plan"
    ]
  },
  {
    id: "warm-outreach",
    emoji: "🤝",
    label: "Warm Outreach",
    role: "You are a networker who turns weak connections into revenue-generating relationships.",
    fields: [
      { key: "connection", label: "Who", type: "text", def: "", placeholder: "e.g. Former colleague, LinkedIn connection, event contact" },
      { key: "goal", label: "Goal", type: "chips", def: "Reconnect", chips: ["Reconnect", "Ask favor", "Pitch", "Referral", "Collaborate"] },
      { key: "relationship", label: "Depth", type: "chips", def: "Weak tie", chips: ["Stranger", "Weak tie", "Warm contact", "Close friend"] }
    ],
    output: [
      "Opening message (personal, not transactional)",
      "Reason for reaching out",
      "Low-pressure ask",
      "Follow-up plan",
      "What to offer them first"
    ]
  },
  {
    id: "referral",
    emoji: "🎯",
    label: "Referral Program",
    role: "You are a growth marketer who has built referral programs generating 40% of revenue.",
    fields: [
      { key: "business", label: "Business", type: "text", def: "", placeholder: "e.g. SaaS for teams, local service, e-commerce" },
      { key: "customer", label: "Customer type", type: "chips", def: "SMB", chips: ["Consumers", "SMBs", "Enterprise", "Freelancers"] },
      { key: "reward", label: "Reward structure", type: "chips", def: "Cash", chips: ["Cash", "Credit", "Free month", "Gift", "Points"] }
    ],
    output: [
      "Program structure",
      "Reward tiers",
      "Trigger points for asking",
      "Referral email templates",
      "Tracking system",
      "Success metrics"
    ]
  },
  {
    id: "sales-consistency",
    emoji: "📊",
    label: "Consistent Sales",
    role: "You are a sales leader who has built teams that consistently hit 120%+ quota.",
    fields: [
      { key: "role", label: "Role", type: "chips", def: "Founder doing sales", chips: ["Founder doing sales", "Sales rep", "Sales manager", "Solo consultant"] },
      { key: "struggle", label: "Struggle", type: "chips", def: "Pipeline gaps", chips: ["Pipeline gaps", "Inconsistent closes", "Follow-through", "Motivation", "Prioritization"] },
      { key: "industry", label: "Industry", type: "chips", def: "B2B SaaS", chips: ["B2B SaaS", "Agency", "Consulting", "Services", "E-commerce"] }
    ],
    output: [
      "Weekly activity targets",
      "Pipeline stages and ratios",
      "Daily sales ritual",
      "CRM hygiene checklist",
      "Weekly review template",
      "Monthly metrics"
    ]
  },
  {
    id: "product-scale",
    emoji: "📈",
    label: "Product Scaling",
    role: "You are a product leader who has scaled products from 100 to 10M users.",
    fields: [
      { key: "product", label: "Product", type: "text", def: "", placeholder: "e.g. Mobile app, SaaS, marketplace" },
      { key: "stage", label: "Current scale", type: "chips", def: "10K users", chips: ["100 users", "10K users", "100K users", "1M+ users"] },
      { key: "concern", label: "Main concern", type: "chips", def: "Performance", chips: ["Performance", "UX", "Onboarding", "Retention", "Monetization", "Infrastructure"] }
    ],
    output: [
      "Bottleneck analysis",
      "Prioritized roadmap (3 quarters)",
      "Hiring needs",
      "Tech architecture recommendations",
      "Metrics to track",
      "What to deprioritize"
    ]
  },
  {
    id: "ugc",
    emoji: "🎬",
    label: "User-Generated Content",
    role: "You are a UGC strategist who has built programs generating 10,000+ pieces of content.",
    fields: [
      { key: "brand", label: "Brand", type: "text", def: "", placeholder: "e.g. Fitness app, DTC beauty, B2B SaaS" },
      { key: "channel", label: "Channel", type: "chips", def: "Instagram", chips: ["Instagram", "TikTok", "YouTube", "Twitter", "LinkedIn"] },
      { key: "goal", label: "Goal", type: "chips", def: "Brand awareness", chips: ["Brand awareness", "Social proof", "Sales", "Community"] }
    ],
    output: [
      "UGC incentive structure",
      "Prompt/creative brief for creators",
      "Rights usage guidelines",
      "Content curation process",
      "Repost schedule",
      "Success metrics"
    ]
  },
  {
    id: "virtual-event",
    emoji: "🎥",
    label: "Virtual Event",
    role: "You are a virtual event producer who has run webinars with 10K+ attendees.",
    fields: [
      { key: "type", label: "Event type", type: "chips", def: "Webinar", chips: ["Webinar", "Workshop", "Conference", "Product launch", "AMA"] },
      { key: "audience", label: "Audience", type: "text", def: "", placeholder: "e.g. SaaS founders, HR leaders, developers" },
      { key: "goal", label: "Goal", type: "chips", def: "Leads", chips: ["Leads", "Brand awareness", "Product education", "Community building"] }
    ],
    output: [
      "Event positioning and title",
      "Promotion plan (3 weeks)",
      "Run-of-show (minute by minute)",
      "Speaker and panel prep",
      "Follow-up sequence",
      "Success metrics"
    ]
  },
  {
    id: "prompt-engineering",
    emoji: "🧠",
    label: "Prompt Engineer",
    role: "You are a prompt engineering expert who has built production prompts for enterprise AI.",
    fields: [
      { key: "use_case", label: "Use case", type: "text", def: "", placeholder: "e.g. Customer support classifier, content generator" },
      { key: "model", label: "Target model", type: "chips", def: "GPT-4", chips: ["GPT-4", "Claude", "Gemini", "Llama", "Any"] },
      { key: "output", label: "Output format", type: "chips", def: "JSON", chips: ["JSON", "Markdown", "Plain text", "XML", "Custom"] }
    ],
    output: [
      "System prompt draft",
      "Few-shot examples",
      "Structured output schema",
      "Edge case handling",
      "Evaluation criteria",
      "Iteration plan"
    ]
  },
  {
    id: "micro-influencer",
    emoji: "🌟",
    label: "Micro-Influencer Deal",
    role: "You are an influencer partnership manager who has closed 500+ brand deals.",
    fields: [
      { key: "brand", label: "Brand", type: "text", def: "", placeholder: "e.g. Skincare startup, SaaS tool" },
      { key: "niche", label: "Influencer niche", type: "chips", def: "Beauty", chips: ["Beauty", "Fitness", "Tech", "Food", "Travel", "Fashion"] },
      { key: "budget", label: "Budget", type: "chips", def: "$500-2K", chips: ["Under $500", "$500-2K", "$2K-10K", "$10K+"] }
    ],
    output: [
      "Target influencer profile",
      "Outreach email template",
      "Deal structure options",
      "Deliverables checklist",
      "Brief template",
      "Performance tracking"
    ]
  },
  {
    id: "live-commerce",
    emoji: "📺",
    label: "Live Social Commerce",
    role: "You are a live shopping host who has generated $5M+ in live commerce sales.",
    fields: [
      { key: "platform", label: "Platform", type: "chips", def: "Instagram Live", chips: ["Instagram Live", "TikTok Live", "YouTube Live", "Amazon Live", "Whatnot"] },
      { key: "product", label: "Product", type: "text", def: "", placeholder: "e.g. Vintage clothing, handmade jewelry" },
      { key: "audience", label: "Audience", type: "chips", def: "Fashion lovers", chips: ["Fashion lovers", "Collectors", "Bargain hunters", "Niche community"] }
    ],
    output: [
      "Show structure (60 min)",
      "Opening hook and energy setting",
      "Product-by-product script",
      "Engagement tactics",
      "Urgency drivers",
      "Post-show follow-up"
    ]
  },
  {
    id: "poll-quiz",
    emoji: "📊",
    label: "Interactive Poll/Quiz",
    role: "You are a content strategist who designs polls and quizzes that go viral.",
    fields: [
      { key: "goal", label: "Goal", type: "chips", def: "Engagement", chips: ["Engagement", "Lead gen", "Research", "Education", "Fun"] },
      { key: "platform", label: "Platform", type: "chips", def: "Instagram", chips: ["Instagram", "LinkedIn", "Twitter", "TikTok", "Website"] },
      { key: "topic", label: "Topic", type: "text", def: "", placeholder: "e.g. AI trends, fitness habits, career growth" }
    ],
    output: [
      "3 poll questions",
      "2 quiz structures",
      "Viral-worthy hook",
      "Results reveal strategy",
      "Follow-up content plan",
      "CTA to drive action"
    ]
  },
  {
    id: "act-as",
    emoji: "🎭",
    label: "Act As",
    role: "You are a role-play designer who creates immersive AI personas for training and entertainment.",
    fields: [
      { key: "character", label: "Character", type: "text", def: "", placeholder: "e.g. Steve Jobs, Sherlock Holmes, VC investor" },
      { key: "context", label: "Context", type: "text", def: "", placeholder: "e.g. Interviewing me for a Series A" },
      { key: "intensity", label: "Intensity", type: "chips", def: "Realistic", chips: ["Realistic", "Detailed", "Dramatic", "Accurate to source"] }
    ],
    output: [
      "Character background and motivations",
      "Speech patterns and vocabulary",
      "Scene setting",
      "3 opening lines to start the role-play",
      "What to avoid (out of character)",
      "How to end the session"
    ]
  },
  {
    id: "trade-show",
    emoji: "🏛️",
    label: "Trade Show Pitch",
    role: "You are a trade show expert who has generated 1000+ qualified leads at major expos.",
    fields: [
      { key: "event", label: "Event", type: "text", def: "", placeholder: "e.g. CES, SXSW, industry-specific expo" },
      { key: "product", label: "Product", type: "text", def: "", placeholder: "e.g. IoT sensors for manufacturing" },
      { key: "goal", label: "Goal", type: "chips", def: "Leads", chips: ["Leads", "Partnerships", "Brand awareness", "Investor meetings"] }
    ],
    output: [
      "30-second booth pitch",
      "Qualifying questions",
      "Booth engagement tactics",
      "Follow-up sequence (post-event)",
      "Pre-event outreach plan",
      "Post-event metrics"
    ]
  },
  {
    id: "cause-marketing",
    emoji: "❤️",
    label: "Cause-Related Marketing",
    role: "You are a brand purpose strategist who has aligned brands with causes authentically.",
    fields: [
      { key: "brand", label: "Brand", type: "text", def: "", placeholder: "e.g. Outdoor apparel, food brand, fintech" },
      { key: "cause", label: "Cause", type: "chips", def: "Environment", chips: ["Environment", "Education", "Health", "Social justice", "Animals", "Local community"] },
      { key: "goal", label: "Goal", type: "chips", def: "Brand awareness", chips: ["Brand awareness", "Sales", "Employee engagement", "Community impact"] }
    ],
    output: [
      "Cause alignment strategy",
      "Campaign concept",
      "Partnership options (nonprofits)",
      "Impact measurement plan",
      "Messaging that avoids greenwashing",
      "Rollout timeline"
    ]
  }
];

export function expandTemplate2(t) {
  return {
    id: t.id,
    emoji: t.emoji,
    label: t.label,
    fields: t.fields,
    build: function(values) {
      var parts = [t.role, ""];
      for (var i = 0; i < t.fields.length; i++) {
        var f = t.fields[i];
        var v = values[f.key];
        if (v === undefined || v === null || v === "") v = f.def || "(not specified)";
        parts.push(f.label + ": " + v);
      }
      parts.push("");
      parts.push("Output requirements:");
      for (var j = 0; j < t.output.length; j++) {
        parts.push("- " + t.output[j]);
      }
      return parts.join("\n");
    },
    naive: function(values) {
      var f = t.fields[0];
      if (!f) return t.label;
      var v = values[f.key];
      if (v === undefined || v === null || v === "") v = f.def || "";
      return t.label + ": " + v;
    }
  };
}
