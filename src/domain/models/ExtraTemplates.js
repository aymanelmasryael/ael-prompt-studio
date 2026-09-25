/* =========================================================================
   Extra Templates — 50 additional templates
   ========================================================================= */

export const EXTRA_TEMPLATES = [
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
    role: "You are a growth marketer who builds organic traffic engines.",
    fields: [
      { key: "site", label: "Site type", type: "chips", def: "Blog", chips: ["Blog", "SaaS product", "E-commerce", "Portfolio"] },
      { key: "current", label: "Current traffic", type: "text", def: "", placeholder: "e.g. 500 monthly visitors" },
      { key: "goal", label: "Target", type: "text", def: "", placeholder: "e.g. 10,000 monthly visitors" }
    ],
    output: [
      "3 traffic channel recommendations",
      "Content calendar for 90 days",
      "Distribution strategy",
      "Metrics dashboard",
      "Common mistakes to avoid"
    ]
  },
  {
    id: "landing-page-copy",
    emoji: "🎯",
    label: "Landing Page Copy",
    role: "You are a conversion copywriter whose pages convert at 20%+.",
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
      "CTA copy",
      "Social proof angle"
    ]
  },
  {
    id: "cold-email",
    emoji: "✉️",
    label: "Cold Email",
    role: "You are a cold email expert whose campaigns get 15%+ reply rates.",
    fields: [
      { key: "target", label: "Target", type: "text", def: "", placeholder: "e.g. CTOs at Series B SaaS" },
      { key: "offer", label: "Your offer", type: "text", def: "", placeholder: "e.g. Reduce cloud costs by 40%" },
      { key: "style", label: "Style", type: "chips", def: "Direct & personal", chips: ["Direct & personal", "Story-led", "Data-driven", "Casual"] }
    ],
    output: [
      "Subject line (5 variants)",
      "Opening line",
      "Problem-agitate-solve body",
      "Low-friction CTA",
      "Follow-up sequence (3 emails)"
    ]
  },
  {
    id: "youtube-seo",
    emoji: "📺",
    label: "YouTube SEO",
    role: "You are a YouTube strategist whose clients average 10M+ views.",
    fields: [
      { key: "topic", label: "Topic", type: "text", def: "", placeholder: "e.g. Personal finance for millennials" },
      { key: "format", label: "Format", type: "chips", def: "Tutorials", chips: ["Tutorials", "Vlogs", "Interviews", "Reviews", "Shorts"] },
      { key: "goal", label: "Goal", type: "chips", def: "Subscribers", chips: ["Subscribers", "Views", "Watch time", "Monetization"] }
    ],
    output: [
      "Channel positioning",
      "Video title formulas",
      "Description template",
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
      { key: "topic", label: "Topic", type: "text", def: "", placeholder: "e.g. 7 lessons from 3 failed startups" },
      { key: "slides", label: "Slides", type: "chips", def: "7 slides", chips: ["5 slides", "7 slides", "10 slides"] },
      { key: "style", label: "Style", type: "chips", def: "Bold & visual", chips: ["Bold & visual", "Minimal", "Educational", "Story-driven"] }
    ],
    output: [
      "Slide 1: hook",
      "Slides 2-N: one idea per slide",
      "Final slide CTA",
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
      "Beat-by-beat script",
      "On-screen text suggestions",
      "B-roll shot list",
      "Sound recommendation",
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
      "Tweet 1: hook",
      "Numbered thread with narrative",
      "Data or story per point",
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
      { key: "topic", label: "Topic", type: "text", def: "", placeholder: "e.g. Why I turned down $500K offer" },
      { key: "type", label: "Type", type: "chips", def: "Story", chips: ["Story", "Lesson", "Hot take", "Framework", "Win/loss"] },
      { key: "goal", label: "Goal", type: "chips", def: "Engagement", chips: ["Engagement", "Leads", "DMs", "Authority"] }
    ],
    output: [
      "Hook line (first 200 chars)",
      "Body with line breaks",
      "Story arc",
      "Question to spark comments",
      "3 hashtags"
    ]
  },
  {
    id: "facebook-ads",
    emoji: "📘",
    label: "Facebook Ads",
    role: "You are a Facebook ads expert whose campaigns hit 5x ROAS.",
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
      "Creative direction"
    ]
  },
  {
    id: "twitter-engagement",
    emoji: "💬",
    label: "Twitter Engagement",
    role: "You are a Twitter growth expert who has grown accounts from 0 to 100K.",
    fields: [
      { key: "niche", label: "Niche", type: "text", def: "", placeholder: "e.g. Indie hackers, AI builders" },
      { key: "goal", label: "Goal", type: "chips", def: "Followers", chips: ["Followers", "Replies", "DMs", "Newsletter"] },
      { key: "tone", label: "Tone", type: "chips", def: "Conversational", chips: ["Conversational", "Contrarian", "Helpful", "Humorous"] }
    ],
    output: [
      "5 daily engagement ideas",
      "Reply strategy",
      "Who to engage with",
      "Daily routine",
      "Weekly metrics"
    ]
  },
  {
    id: "pinterest",
    emoji: "📌",
    label: "Pinterest Strategy",
    role: "You are a Pinterest strategist whose clients average 1M+ views.",
    fields: [
      { key: "niche", label: "Niche", type: "text", def: "", placeholder: "e.g. Home decor, recipes, weddings" },
      { key: "goal", label: "Goal", type: "chips", def: "Traffic", chips: ["Traffic", "Sales", "Brand awareness", "Email signups"] },
      { key: "content", label: "Content type", type: "chips", def: "Blog posts", chips: ["Blog posts", "Products", "Infographics", "Videos"] }
    ],
    output: [
      "Board structure (10 boards)",
      "Pin title formulas",
      "Pin description template",
      "Pinning schedule",
      "SEO keyword strategy"
    ]
  },
  {
    id: "social-stories",
    emoji: "📱",
    label: "Social Media Stories",
    role: "You are a Stories strategist whose clients hit 15%+ view-through rates.",
    fields: [
      { key: "platform", label: "Platform", type: "chips", def: "Instagram", chips: ["Instagram", "Facebook", "Snapchat"] },
      { key: "purpose", label: "Purpose", type: "chips", def: "Engagement", chips: ["Engagement", "Sales", "Behind-scenes", "Education"] },
      { key: "count", label: "Count", type: "chips", def: "5 frames", chips: ["3 frames", "5 frames", "7 frames"] }
    ],
    output: [
      "Frame-by-frame storyboard",
      "Interactive stickers",
      "Text overlay suggestions",
      "B-roll and music",
      "Final CTA frame"
    ]
  },
  {
    id: "long-copy",
    emoji: "📝",
    label: "Long-Form Copywriting",
    role: "You are a copy chief who writes sales letters converting at 3%+.",
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
      "Root cause analysis",
      "Reframe framework",
      "3 specific responses",
      "Follow-up questions",
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
    role: "You are a direct-response copywriter trained by Halbert and Ogilvy.",
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
      "Proof stack",
      "Urgency + guarantee",
      "PS + CTA"
    ]
  },
  {
    id: "sales-funnel",
    emoji: "🌪️",
    label: "Sales Funnel",
    role: "You are a funnel strategist who has built $1M+ funnels.",
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
      "Follow-up for non-buyers"
    ]
  },
  {
    id: "saas-growth",
    emoji: "📈",
    label: "SaaS Growth",
    role: "You are a SaaS operator who has scaled 3 companies to $50M ARR.",
    fields: [
      { key: "product", label: "Product", type: "text", def: "", placeholder: "e.g. AI analytics for e-commerce" },
      { key: "stage", label: "Stage", type: "chips", def: "$100K ARR", chips: ["Pre-revenue", "$10K ARR", "$100K ARR", "$1M ARR", "$10M ARR"] },
      { key: "focus", label: "Focus", type: "chips", def: "Growth", chips: ["Growth", "Retention", "Pricing", "Fundraising", "Hiring"] }
    ],
    output: [
      "3 growth levers with impact",
      "Pricing model",
      "Retention plan",
      "Hiring priorities",
      "90-day action plan"
    ]
  },
  {
    id: "saas-metrics",
    emoji: "📊",
    label: "SaaS Metrics Review",
    role: "You are a SaaS CFO who reviews metrics for boards.",
    fields: [
      { key: "metrics", label: "Current metrics", type: "text", def: "", placeholder: "e.g. MRR $50K, churn 5%" },
      { key: "concern", label: "Concern", type: "chips", def: "Churn", chips: ["Churn", "Growth", "CAC", "LTV", "Runway"] },
      { key: "stage", label: "Stage", type: "chips", def: "Series A", chips: ["Pre-seed", "Seed", "Series A", "Series B"] }
    ],
    output: [
      "Metrics diagnosis",
      "Benchmarks vs stage",
      "Top 3 issues",
      "Action plan",
      "What to tell the board"
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
      "Qualification framework",
      "Next-step recommendations"
    ]
  },
  {
    id: "ecommerce",
    emoji: "🛍️",
    label: "E-Commerce Strategy",
    role: "You are an e-commerce strategist who scaled DTC brands to $100M+.",
    fields: [
      { key: "category", label: "Category", type: "text", def: "", placeholder: "e.g. Premium skincare, pet supplies" },
      { key: "price", label: "Price point", type: "chips", def: "$50-100", chips: ["Under $50", "$50-100", "$100-500", "$500+"] },
      { key: "channel", label: "Channel", type: "chips", def: "Shopify", chips: ["Shopify", "Amazon", "Etsy", "Own site"] }
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
    role: "You are a small business consultant who advised 200+ local businesses.",
    fields: [
      { key: "business", label: "Business type", type: "text", def: "", placeholder: "e.g. Coffee shop, dental, boutique gym" },
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
    role: "You are a startup advisor who coached 500+ founders.",
    fields: [
      { key: "challenge", label: "Challenge", type: "chips", def: "Product-market fit", chips: ["Product-market fit", "Team issues", "Fundraising", "Burnout", "Scaling", "Competition"] },
      { key: "stage", label: "Stage", type: "chips", def: "Seed", chips: ["Idea", "Seed", "Series A", "Growth"] },
      { key: "context", label: "Context", type: "text", def: "", placeholder: "What is happening right now?" }
    ],
    output: [
      "Reframe of the challenge",
      "3 potential paths",
      "Trade-offs",
      "Action this week",
      "What to stop doing",
      "Success metric"
    ]
  },
  {
    id: "no-code",
    emoji: "🧩",
    label: "No-Code Builder",
    role: "You are a no-code expert who builds on Bubble, Airtable, and Webflow.",
    fields: [
      { key: "idea", label: "What to build", type: "text", def: "", placeholder: "e.g. CRM for photographers" },
      { key: "stack", label: "Stack", type: "chips", def: "Not sure", chips: ["Not sure", "Bubble", "Airtable + Glide", "Webflow + Xano", "Softr"] },
      { key: "users", label: "Users", type: "chips", def: "SMBs", chips: ["SMBs", "Consumers", "Enterprises", "Internal team"] }
    ],
    output: [
      "Recommended stack",
      "Data model",
      "Key screens",
      "Integrations",
      "Trade-offs",
      "MVP timeline"
    ]
  },
  {
    id: "crypto-strategy",
    emoji: "₿",
    label: "Crypto Strategy",
    role: "You are a crypto analyst who writes institutional research.",
    fields: [
      { key: "asset", label: "Asset", type: "text", def: "", placeholder: "e.g. Bitcoin, Ethereum, Layer 2s" },
      { key: "horizon", label: "Time horizon", type: "chips", def: "1-3 years", chips: ["Months", "1-3 years", "5+ years"] },
      { key: "risk", label: "Risk", type: "chips", def: "Moderate", chips: ["Conservative", "Moderate", "Aggressive", "Degen"] }
    ],
    output: [
      "Market overview",
      "3 investment theses",
      "Risk factors",
      "Position sizing",
      "Tracking metrics",
      "Exit strategy"
    ]
  },
  {
    id: "defi",
    emoji: "🏦",
    label: "DeFi Strategy",
    role: "You are a DeFi researcher across Ethereum, Solana, and Base.",
    fields: [
      { key: "goal", label: "Goal", type: "chips", def: "Yield", chips: ["Yield", "Trading", "Lending", "Liquidity", "Governance"] },
      { key: "chain", label: "Chain", type: "chips", def: "Ethereum", chips: ["Ethereum", "Solana", "Base", "Arbitrum"] },
      { key: "capital", label: "Capital", type: "chips", def: "$10K-50K", chips: ["Under $1K", "$1K-10K", "$10K-50K", "$50K+"] }
    ],
    output: [
      "Protocol comparison",
      "Risk assessment",
      "Yield strategy",
      "Tax notes",
      "Safety checklist",
      "Exit plan"
    ]
  },
  {
    id: "nft-strategy",
    emoji: "🎨",
    label: "NFT Strategy",
    role: "You are an NFT strategist who advised sold-out collections.",
    fields: [
      { key: "role", label: "Your role", type: "chips", def: "Creator", chips: ["Creator", "Investor", "Trader", "Community manager"] },
      { key: "focus", label: "Focus", type: "chips", def: "Launch", chips: ["Launch", "Marketing", "Trading", "Community", "Utility"] },
      { key: "chain", label: "Chain", type: "chips", def: "Ethereum", chips: ["Ethereum", "Solana", "Bitcoin ordinals", "Polygon"] }
    ],
    output: [
      "Market analysis",
      "Positioning",
      "Launch checklist",
      "Community plan",
      "Post-mint roadmap",
      "Exit criteria"
    ]
  },
  {
    id: "job-landing",
    emoji: "🎯",
    label: "Landing a New Job",
    role: "You are a career coach who helped 2000+ people land jobs.",
    fields: [
      { key: "role", label: "Target role", type: "text", def: "", placeholder: "e.g. Product Manager at FAANG" },
      { key: "background", label: "Background", type: "text", def: "", placeholder: "e.g. 5 years B2B SaaS PM" },
      { key: "timeline", label: "Timeline", type: "chips", def: "3 months", chips: ["1 month", "3 months", "6 months", "No rush"] }
    ],
    output: [
      "Target list (20 companies)",
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
    role: "You are a LinkedIn sales expert who books 20+ meetings/mo.",
    fields: [
      { key: "icp", label: "Ideal customer", type: "text", def: "", placeholder: "e.g. VP Sales at B2B SaaS" },
      { key: "offer", label: "Offer", type: "text", def: "", placeholder: "e.g. Sales training program" },
      { key: "goal", label: "Goal", type: "chips", def: "20 meetings/mo", chips: ["10 meetings/mo", "20 meetings/mo", "30+ meetings/mo"] }
    ],
    output: [
      "ICP targeting filters",
      "Message template",
      "Weekly outreach schedule",
      "Profile optimization",
      "Content strategy"
    ]
  },
  {
    id: "career-path",
    emoji: "🧭",
    label: "Career Path Planning",
    role: "You are a career strategist who designs 5-10 year paths.",
    fields: [
      { key: "current", label: "Current role", type: "text", def: "", placeholder: "e.g. Mid-level data analyst" },
      { key: "goal", label: "Goal", type: "text", def: "", placeholder: "e.g. VP of Data at Series B" },
      { key: "timeline", label: "Timeline", type: "chips", def: "5 years", chips: ["3 years", "5 years", "7 years", "10 years"] }
    ],
    output: [
      "Role progression map",
      "Skill gaps",
      "Milestones per year",
      "Relationship strategy",
      "Side projects",
      "When to switch"
    ]
  },
  {
    id: "sales-engineer",
    emoji: "🛠️",
    label: "Sales Engineering",
    role: "You are a sales engineering leader from Salesforce and Stripe.",
    fields: [
      { key: "product", label: "Product", type: "text", def: "", placeholder: "e.g. Enterprise data platform" },
      { key: "deal", label: "Deal stage", type: "chips", def: "Technical discovery", chips: ["Technical discovery", "Demo", "POC", "Closing"] },
      { key: "audience", label: "Audience", type: "chips", def: "Technical", chips: ["Technical", "Business", "Mixed", "Executive"] }
    ],
    output: [
      "Discovery questions",
      "Demo script per audience",
      "Common objections",
      "POC success criteria",
      "Handoff to sales",
      "Follow-up plan"
    ]
  },
  {
    id: "time-mgmt",
    emoji: "⏰",
    label: "Time Management",
    role: "You are a productivity coach who trained CEOs on time management.",
    fields: [
      { key: "role", label: "Your role", type: "text", def: "", placeholder: "e.g. Founder, manager, freelancer" },
      { key: "challenge", label: "Challenge", type: "chips", def: "Too many priorities", chips: ["Too many priorities", "Meeting overload", "Context switching", "Procrastination", "Burnout"] },
      { key: "system", label: "System", type: "chips", def: "Time-blocking", chips: ["Time-blocking", "GTD", "Eisenhower", "Pomodoro", "No system"] }
    ],
    output: [
      "Weekly time audit",
      "Priority framework",
      "Time-blocking template",
      "Meeting reduction plan",
      "Deep work ritual",
      "Weekly review"
    ]
  },
  {
    id: "stress-mgmt",
    emoji: "🧘",
    label: "Stress Management",
    role: "You are a stress coach trained in CBT and mindfulness.",
    fields: [
      { key: "source", label: "Main stressor", type: "chips", def: "Work", chips: ["Work", "Relationships", "Health", "Finances", "Uncertainty"] },
      { key: "symptoms", label: "Symptoms", type: "chips", def: "Sleep issues", chips: ["Sleep issues", "Anxiety", "Irritability", "Fatigue", "Overwhelm"] },
      { key: "time", label: "Time available", type: "chips", def: "10 min/day", chips: ["5 min/day", "10 min/day", "20 min/day", "1 hour/day"] }
    ],
    output: [
      "Root cause analysis",
      "3 coping strategies",
      "Daily practice plan",
      "Weekly check-in",
      "When to seek help",
      "Long-term habits"
    ]
  },
  {
    id: "better-sleep",
    emoji: "😴",
    label: "Better Sleep",
    role: "You are a sleep coach trained in CBT-I.",
    fields: [
      { key: "issue", label: "Main issue", type: "chips", def: "Falling asleep", chips: ["Falling asleep", "Staying asleep", "Waking too early", "Not rested"] },
      { key: "schedule", label: "Schedule", type: "text", def: "", placeholder: "e.g. Sleep 11pm-6am" },
      { key: "lifestyle", label: "Lifestyle", type: "chips", def: "Sedentary", chips: ["Sedentary", "Active", "Athlete", "Shift worker"] }
    ],
    output: [
      "Sleep hygiene audit",
      "Bedtime routine (60 min)",
      "Morning routine (30 min)",
      "Room setup",
      "When to see a doctor",
      "2-week plan"
    ]
  },
  {
    id: "customer-service",
    emoji: "💬",
    label: "Customer Service",
    role: "You are a customer experience leader at high-growth startups.",
    fields: [
      { key: "scenario", label: "Scenario", type: "chips", def: "Complaint", chips: ["Complaint", "Refund request", "Feature request", "Churn risk", "Angry customer"] },
      { key: "channel", label: "Channel", type: "chips", def: "Email", chips: ["Email", "Chat", "Phone", "Social media"] },
      { key: "tone", label: "Tone", type: "chips", def: "Empathetic", chips: ["Empathetic", "Professional", "Casual", "Apologetic"] }
    ],
    output: [
      "Response template",
      "Empathy statement",
      "Root cause",
      "Solution options",
      "Follow-up plan",
      "Escalation if needed"
    ]
  },
  {
    id: "airbnb-host",
    emoji: "🏠",
    label: "Airbnb Host",
    role: "You are an Airbnb superhost managing 20+ properties.",
    fields: [
      { key: "property", label: "Property", type: "text", def: "", placeholder: "e.g. 2BR beach condo" },
      { key: "audience", label: "Target guest", type: "chips", def: "Tourists", chips: ["Tourists", "Business", "Families", "Couples", "Nomads"] },
      { key: "concern", label: "Concern", type: "chips", def: "Reviews", chips: ["Reviews", "Occupancy", "Pricing", "Guest issues", "Cleaning"] }
    ],
    output: [
      "Listing title (3 variants)",
      "Description",
      "Photo shot list",
      "Pricing strategy",
      "Guest templates",
      "Review request plan"
    ]
  },
  {
    id: "garden",
    emoji: "🌱",
    label: "Begin a Garden",
    role: "You are a master gardener in every climate zone.",
    fields: [
      { key: "climate", label: "Climate", type: "chips", def: "Temperate", chips: ["Tropical", "Arid", "Temperate", "Cold", "Mediterranean"] },
      { key: "space", label: "Space", type: "chips", def: "Small balcony", chips: ["Small balcony", "Backyard", "Rooftop", "Community plot"] },
      { key: "goal", label: "Goal", type: "chips", def: "Vegetables", chips: ["Vegetables", "Flowers", "Herbs", "Pollinators", "Mixed"] }
    ],
    output: [
      "Plant recommendations",
      "Layout plan",
      "Seasonal calendar",
      "Soil prep",
      "Watering schedule",
      "Pest solutions"
    ]
  },
  {
    id: "etsy",
    emoji: "🎨",
    label: "Etsy Seller",
    role: "You are an Etsy seller who made $500K+ across shops.",
    fields: [
      { key: "product", label: "Product", type: "text", def: "", placeholder: "e.g. Handmade jewelry, templates" },
      { key: "niche", label: "Niche", type: "chips", def: "Home decor", chips: ["Home decor", "Jewelry", "Digital products", "Vintage", "Crafts"] },
      { key: "goal", label: "Goal", type: "chips", def: "First sale", chips: ["First sale", "100 sales", "1000 sales", "Scale to $10K/mo"] }
    ],
    output: [
      "Shop positioning",
      "Listing template",
      "SEO title and tags",
      "Pricing strategy",
      "Photo guidelines",
      "Marketing plan"
    ]
  },
  {
    id: "smma",
    emoji: "📊",
    label: "SMMA Operations",
    role: "You are an SMMA owner who scaled to $2M ARR.",
    fields: [
      { key: "niche", label: "Client niche", type: "chips", def: "Local services", chips: ["Local services", "E-commerce", "SaaS", "Coaches", "Restaurants"] },
      { key: "service", label: "Service", type: "chips", def: "Ads management", chips: ["Ads management", "SEO", "Full stack", "Lead gen", "Content"] },
      { key: "size", label: "Team size", type: "chips", def: "Solo", chips: ["Solo", "2-5 people", "6-15 people", "15+"] }
    ],
    output: [
      "Client acquisition",
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
    role: "You are an Excel expert who automates work for Fortune 500s.",
    fields: [
      { key: "task", label: "What you want", type: "text", def: "", placeholder: "e.g. Count unique values with criteria" },
      { key: "version", label: "Version", type: "chips", def: "365", chips: ["365", "2019", "2016", "Google Sheets", "Mac"] },
      { key: "complexity", label: "Complexity", type: "chips", def: "Standard", chips: ["Simple", "Standard", "Advanced", "Power user"] }
    ],
    output: [
      "Recommended formula",
      "Step-by-step explanation",
      "Alternative approaches",
      "Common pitfalls",
      "Related functions"
    ]
  },
  {
    id: "chatbot",
    emoji: "🤖",
    label: "Chatbot Design",
    role: "You are a conversation designer for enterprise and startups.",
    fields: [
      { key: "purpose", label: "Purpose", type: "chips", def: "Customer support", chips: ["Customer support", "Sales", "Onboarding", "FAQ", "Booking"] },
      { key: "channel", label: "Channel", type: "chips", def: "Website", chips: ["Website", "WhatsApp", "SMS", "Slack", "Voice"] },
      { key: "brand", label: "Brand voice", type: "chips", def: "Friendly", chips: ["Friendly", "Professional", "Playful", "Minimal"] }
    ],
    output: [
      "Conversation flows",
      "Sample dialogues",
      "Fallback handling",
      "Human handoff criteria",
      "Analytics",
      "Tone guide"
    ]
  },
  {
    id: "cold-call",
    emoji: "📞",
    label: "Cold Call Script",
    role: "You are a cold call expert booking 30+ meetings/week.",
    fields: [
      { key: "icp", label: "ICP", type: "text", def: "", placeholder: "e.g. VP Marketing at B2B SaaS" },
      { key: "offer", label: "Offer", type: "text", def: "", placeholder: "e.g. Content marketing service" },
      { key: "goal", label: "Goal", type: "chips", def: "Book meeting", chips: ["Book meeting", "Qualify", "Send info", "Warm up"] }
    ],
    output: [
      "Opener (30 sec)",
      "3 qualification questions",
      "Value statement",
      "5 objection responses",
      "Close to next step",
      "Voicemail script"
    ]
  },
  {
    id: "phone-lead",
    emoji: "☎️",
    label: "Phone Lead Gen",
    role: "You are a lead gen expert who booked 10,000+ calls.",
    fields: [
      { key: "industry", label: "Industry", type: "chips", def: "SaaS", chips: ["SaaS", "Agency", "Real estate", "Insurance", "Financial"] },
      { key: "lead", label: "Lead source", type: "chips", def: "Inbound", chips: ["Inbound", "Cold list", "Referral", "Event", "Social"] },
      { key: "goal", label: "Goal", type: "chips", def: "Qualify", chips: ["Qualify", "Book demo", "Book meeting", "Warm transfer"] }
    ],
    output: [
      "Pre-call research",
      "Call framework",
      "5 qualification questions",
      "Top 3 objections",
      "CRM notes template",
      "Follow-up sequence"
    ]
  },
  {
    id: "outside-sales",
    emoji: "🚗",
    label: "Outside Sales",
    role: "You are an outside sales veteran who closed $10M+.",
    fields: [
      { key: "industry", label: "Industry", type: "chips", def: "Medical devices", chips: ["Medical devices", "Construction", "Industrial", "Food service", "Tech"] },
      { key: "buyer", label: "Buyer role", type: "chips", def: "Owner", chips: ["Owner", "Office manager", "Purchasing", "Operations"] },
      { key: "stage", label: "Stage", type: "chips", def: "Cold visit", chips: ["Cold visit", "Follow-up", "Proposal", "Negotiation"] }
    ],
    output: [
      "Pre-visit research",
      "In-person opener",
      "Discovery questions",
      "Demo outline",
      "Closing techniques",
      "Follow-up plan"
    ]
  },
  {
    id: "warm-outreach",
    emoji: "🤝",
    label: "Warm Outreach",
    role: "You turn weak connections into revenue relationships.",
    fields: [
      { key: "connection", label: "Who", type: "text", def: "", placeholder: "e.g. Former colleague, LinkedIn contact" },
      { key: "goal", label: "Goal", type: "chips", def: "Reconnect", chips: ["Reconnect", "Ask favor", "Pitch", "Referral", "Collaborate"] },
      { key: "relationship", label: "Depth", type: "chips", def: "Weak tie", chips: ["Stranger", "Weak tie", "Warm contact", "Close friend"] }
    ],
    output: [
      "Opening message",
      "Reason for reaching out",
      "Low-pressure ask",
      "Follow-up plan",
      "What to offer first"
    ]
  },
  {
    id: "referral",
    emoji: "🎯",
    label: "Referral Program",
    role: "You built referral programs generating 40% of revenue.",
    fields: [
      { key: "business", label: "Business", type: "text", def: "", placeholder: "e.g. SaaS, local service, e-commerce" },
      { key: "customer", label: "Customer type", type: "chips", def: "SMB", chips: ["Consumers", "SMBs", "Enterprise", "Freelancers"] },
      { key: "reward", label: "Reward", type: "chips", def: "Cash", chips: ["Cash", "Credit", "Free month", "Gift", "Points"] }
    ],
    output: [
      "Program structure",
      "Reward tiers",
      "Trigger points",
      "Email templates",
      "Tracking system",
      "Success metrics"
    ]
  },
  {
    id: "sales-consistency",
    emoji: "📊",
    label: "Consistent Sales",
    role: "You are a sales leader with teams hitting 120%+ quota.",
    fields: [
      { key: "role", label: "Role", type: "chips", def: "Founder doing sales", chips: ["Founder", "Sales rep", "Sales manager", "Solo consultant"] },
      { key: "struggle", label: "Struggle", type: "chips", def: "Pipeline gaps", chips: ["Pipeline gaps", "Inconsistent closes", "Follow-through", "Motivation", "Prioritization"] },
      { key: "industry", label: "Industry", type: "chips", def: "B2B SaaS", chips: ["B2B SaaS", "Agency", "Consulting", "Services", "E-commerce"] }
    ],
    output: [
      "Weekly activity targets",
      "Pipeline stages",
      "Daily ritual",
      "CRM hygiene",
      "Weekly review",
      "Monthly metrics"
    ]
  },
  {
    id: "product-scale",
    emoji: "📈",
    label: "Product Scaling",
    role: "You are a product leader who scaled 100 to 10M users.",
    fields: [
      { key: "product", label: "Product", type: "text", def: "", placeholder: "e.g. Mobile app, SaaS, marketplace" },
      { key: "stage", label: "Scale", type: "chips", def: "10K users", chips: ["100 users", "10K users", "100K users", "1M+ users"] },
      { key: "concern", label: "Concern", type: "chips", def: "Performance", chips: ["Performance", "UX", "Onboarding", "Retention", "Monetization", "Infrastructure"] }
    ],
    output: [
      "Bottleneck analysis",
      "Roadmap (3 quarters)",
      "Hiring needs",
      "Architecture recommendations",
      "Metrics to track",
      "What to deprioritize"
    ]
  },
  {
    id: "ugc",
    emoji: "🎬",
    label: "User-Generated Content",
    role: "You built UGC programs generating 10,000+ pieces.",
    fields: [
      { key: "brand", label: "Brand", type: "text", def: "", placeholder: "e.g. Fitness app, DTC beauty" },
      { key: "channel", label: "Channel", type: "chips", def: "Instagram", chips: ["Instagram", "TikTok", "YouTube", "Twitter", "LinkedIn"] },
      { key: "goal", label: "Goal", type: "chips", def: "Brand awareness", chips: ["Brand awareness", "Social proof", "Sales", "Community"] }
    ],
    output: [
      "Incentive structure",
      "Creative brief",
      "Rights guidelines",
      "Curation process",
      "Repost schedule",
      "Success metrics"
    ]
  },
  {
    id: "virtual-event",
    emoji: "🎥",
    label: "Virtual Event",
    role: "You are a virtual event producer with 10K+ attendees.",
    fields: [
      { key: "type", label: "Event type", type: "chips", def: "Webinar", chips: ["Webinar", "Workshop", "Conference", "Product launch", "AMA"] },
      { key: "audience", label: "Audience", type: "text", def: "", placeholder: "e.g. SaaS founders, HR leaders" },
      { key: "goal", label: "Goal", type: "chips", def: "Leads", chips: ["Leads", "Brand awareness", "Product education", "Community"] }
    ],
    output: [
      "Event positioning",
      "Promotion plan",
      "Run-of-show",
      "Speaker prep",
      "Follow-up sequence",
      "Success metrics"
    ]
  },
  {
    id: "prompt-engineering",
    emoji: "🧠",
    label: "Prompt Engineer",
    role: "You are a prompt engineer building production prompts for enterprise AI.",
    fields: [
      { key: "use_case", label: "Use case", type: "text", def: "", placeholder: "e.g. Customer support classifier" },
      { key: "model", label: "Target model", type: "chips", def: "GPT-4", chips: ["GPT-4", "Claude", "Gemini", "Llama", "Any"] },
      { key: "output", label: "Output format", type: "chips", def: "JSON", chips: ["JSON", "Markdown", "Plain text", "XML", "Custom"] }
    ],
    output: [
      "System prompt draft",
      "Few-shot examples",
      "Structured output schema",
      "Edge cases",
      "Evaluation criteria",
      "Iteration plan"
    ]
  },
  {
    id: "micro-influencer",
    emoji: "🌟",
    label: "Micro-Influencer Deal",
    role: "You closed 500+ brand deals with influencers.",
    fields: [
      { key: "brand", label: "Brand", type: "text", def: "", placeholder: "e.g. Skincare startup, SaaS tool" },
      { key: "niche", label: "Influencer niche", type: "chips", def: "Beauty", chips: ["Beauty", "Fitness", "Tech", "Food", "Travel", "Fashion"] },
      { key: "budget", label: "Budget", type: "chips", def: "$500-2K", chips: ["Under $500", "$500-2K", "$2K-10K", "$10K+"] }
    ],
    output: [
      "Target profile",
      "Outreach email",
      "Deal structure",
      "Deliverables",
      "Brief template",
      "Performance tracking"
    ]
  },
  {
    id: "live-commerce",
    emoji: "📺",
    label: "Live Social Commerce",
    role: "You are a live shopping host with $5M+ sales.",
    fields: [
      { key: "platform", label: "Platform", type: "chips", def: "Instagram Live", chips: ["Instagram Live", "TikTok Live", "YouTube Live", "Amazon Live", "Whatnot"] },
      { key: "product", label: "Product", type: "text", def: "", placeholder: "e.g. Vintage clothing" },
      { key: "audience", label: "Audience", type: "chips", def: "Fashion lovers", chips: ["Fashion lovers", "Collectors", "Bargain hunters", "Niche community"] }
    ],
    output: [
      "Show structure (60 min)",
      "Opening hook",
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
    role: "You design polls and quizzes that go viral.",
    fields: [
      { key: "goal", label: "Goal", type: "chips", def: "Engagement", chips: ["Engagement", "Lead gen", "Research", "Education", "Fun"] },
      { key: "platform", label: "Platform", type: "chips", def: "Instagram", chips: ["Instagram", "LinkedIn", "Twitter", "TikTok", "Website"] },
      { key: "topic", label: "Topic", type: "text", def: "", placeholder: "e.g. AI trends, fitness habits" }
    ],
    output: [
      "3 poll questions",
      "2 quiz structures",
      "Viral hook",
      "Results reveal",
      "Follow-up content",
      "CTA to drive action"
    ]
  },
  {
    id: "act-as",
    emoji: "🎭",
    label: "Act As",
    role: "You design immersive AI personas for training and entertainment.",
    fields: [
      { key: "character", label: "Character", type: "text", def: "", placeholder: "e.g. Steve Jobs, Sherlock Holmes" },
      { key: "context", label: "Context", type: "text", def: "", placeholder: "e.g. Interviewing me for Series A" },
      { key: "intensity", label: "Intensity", type: "chips", def: "Realistic", chips: ["Realistic", "Detailed", "Dramatic", "Accurate to source"] }
    ],
    output: [
      "Character background",
      "Speech patterns",
      "Scene setting",
      "3 opening lines",
      "What to avoid",
      "How to end"
    ]
  },
  {
    id: "trade-show",
    emoji: "🏛️",
    label: "Trade Show Pitch",
    role: "You generated 1000+ qualified leads at major expos.",
    fields: [
      { key: "event", label: "Event", type: "text", def: "", placeholder: "e.g. CES, SXSW, industry expo" },
      { key: "product", label: "Product", type: "text", def: "", placeholder: "e.g. IoT sensors for manufacturing" },
      { key: "goal", label: "Goal", type: "chips", def: "Leads", chips: ["Leads", "Partnerships", "Brand awareness", "Investor meetings"] }
    ],
    output: [
      "30-second booth pitch",
      "Qualifying questions",
      "Engagement tactics",
      "Follow-up sequence",
      "Pre-event outreach",
      "Post-event metrics"
    ]
  },
  {
    id: "cause-marketing",
    emoji: "❤️",
    label: "Cause-Related Marketing",
    role: "You align brands with causes authentically.",
    fields: [
      { key: "brand", label: "Brand", type: "text", def: "", placeholder: "e.g. Outdoor apparel, food brand" },
      { key: "cause", label: "Cause", type: "chips", def: "Environment", chips: ["Environment", "Education", "Health", "Social justice", "Animals", "Local community"] },
      { key: "goal", label: "Goal", type: "chips", def: "Brand awareness", chips: ["Brand awareness", "Sales", "Employee engagement", "Community impact"] }
    ],
    output: [
      "Cause alignment",
      "Campaign concept",
      "Nonprofit partnerships",
      "Impact measurement",
      "Anti-greenwashing messaging",
      "Rollout timeline"
    ]
  }
];

export function expandTemplate(t) {
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
      for (var j = 0; j < t.output.length; j++) parts.push("- " + t.output[j]);
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
