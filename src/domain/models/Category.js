/* =========================================================================
   Category + Template Definitions
   ========================================================================= */

import { EXTRA_TEMPLATES, expandTemplate } from "./ExtraTemplates.js";

const BASE_CATEGORIES = [
  {
    id: "email", emoji: "📧", label: "Write an Email",
    fields: [
      { key: "emailType", label: "Email type", type: "chips", def: "Cold outreach",
        chips: ["Cold outreach", "Reply to a prospect", "Internal update", "Follow-up", "Asking for a raise", "Thank-you note"] },
      { key: "recipient", label: "Sending to", type: "chips", def: "A potential customer",
        chips: ["My boss", "A client", "A potential customer", "A teammate", "A mentor", "A vendor"] },
      { key: "situation", label: "What is the email about?", type: "text", def: "",
        placeholder: "e.g. Asking my manager for a raise after leading the Q4 launch" },
      { key: "mainAsk", label: "What do you need them to do?", type: "chips", def: "Reply with a yes or no",
        chips: ["Reply with a yes or no", "Schedule a meeting", "Approve something", "Send me information", "Just keep them informed"] },
      { key: "tone", label: "Tone", type: "chips", def: "Confident & direct",
        chips: ["Confident & direct", "Warm & friendly", "Formal & polished", "Apologetic but firm"] },
      { key: "length", label: "Length", type: "chips", def: "Medium (3-4 paragraphs)",
        chips: ["Brief (1-2 paragraphs)", "Medium (3-4 paragraphs)", "Detailed (5+ paragraphs)"] }
    ],
    build: v => `You are a professional communications coach who helps people write emails that get the response they need.\n\nEmail type: ${v.emailType}\nRecipient: ${v.recipient}\nSituation: ${v.situation || "(not specified)"}\nMain ask: ${v.mainAsk}\nTone: ${v.tone}\nLength: ${v.length}\n\nOutput rules:\n- Opening that anchors the conversation specifically (no "I hope this finds you well")\n- Body with clear evidence, ask, or proposal grounded in the situation above\n- Anticipate the most likely objection and pre-address it\n- Specific, time-bound close that drives the main ask\n- Suggest a subject line that earns the open`,
    naive: v => `Write an email about: ${v.situation || v.emailType.toLowerCase() + " to " + v.recipient.toLowerCase()}.`
  },
  {
    id: "recipe", emoji: "🍳", label: "Cook Something",
    fields: [
      { key: "dish", label: "What you want to make", type: "chips", def: "Quick weeknight dinner",
        chips: ["Quick weeknight dinner", "Weekend brunch", "Healthy lunch", "Family meal", "Dessert", "Meal-prep batch"] },
      { key: "specificDish", label: "Specific dish or ingredients", type: "text", def: "",
        placeholder: "e.g. Salmon and broccoli, leftover chicken, chickpeas" },
      { key: "servings", label: "Servings", type: "chips", def: "Family of 4",
        chips: ["Just me", "For 2", "Family of 4", "Crowd of 6+"] },
      { key: "skillLevel", label: "Skill level", type: "chips", def: "Beginner",
        chips: ["Beginner", "Some experience", "Confident home cook"] },
      { key: "timeAvailable", label: "Time available", type: "chips", def: "30 minutes",
        chips: ["15 min or less", "30 minutes", "1 hour", "90 min+"] },
      { key: "dietary", label: "Dietary needs", type: "chips", def: "No restrictions",
        chips: ["No restrictions", "Vegetarian", "Vegan", "Gluten-free", "Low-carb", "Dairy-free"] }
    ],
    build: v => `You are a professional chef and culinary instructor. Produce a recipe so clear that a first-time cook gets a delicious result on the first attempt.\n\nMeal type: ${v.dish}\nSpecific ingredients: ${v.specificDish || "(none specified)"}\nServings: ${v.servings}\nSkill: ${v.skillLevel}\nTime: ${v.timeAvailable}\nDietary: ${v.dietary}\n\nOutput rules:\n- Name the dish specifically\n- Ingredients in order of use with exact quantities and prep state\n- Step-by-step instructions with timing AND sensory cues\n- 4 pro tips that change the result\n- Serving suggestion and brief nutritional overview`,
    naive: v => `Give me a recipe for ${v.specificDish || v.dish.toLowerCase()}.`
  },
  {
    id: "workout", emoji: "💪", label: "Build a Workout",
    fields: [
      { key: "goal", label: "Primary goal", type: "chips", def: "Build muscle",
        chips: ["Build muscle", "Lose fat", "Get stronger", "Build endurance", "Stay consistent"] },
      { key: "equipment", label: "Equipment", type: "chips", def: "Dumbbells",
        chips: ["No equipment", "Dumbbells", "Full gym", "Resistance bands", "Kettlebells", "Cardio machines"] },
      { key: "daysPerWeek", label: "Days per week", type: "chips", def: "4 days",
        chips: ["2 days", "3 days", "4 days", "5 days", "6 days"] },
      { key: "sessionLength", label: "Time per session", type: "chips", def: "45 min",
        chips: ["20 min", "30 min", "45 min", "60 min", "75 min+"] },
      { key: "experience", label: "Experience", type: "chips", def: "Intermediate",
        chips: ["Beginner", "Intermediate", "Advanced"] },
      { key: "notes", label: "Injuries or notes", type: "text", def: "",
        placeholder: "e.g. Bad lower back, prioritize chest and arms" }
    ],
    build: v => `You are a certified strength coach designing sustainable plans for busy professionals.\n\nGoal: ${v.goal}\nEquipment: ${v.equipment}\nSchedule: ${v.daysPerWeek} per week, ${v.sessionLength} per session\nExperience: ${v.experience}\nNotes: ${v.notes || "(none)"}\n\nOutput:\n- Periodized 8-week plan with weekly progression\n- Exercise list with sets, reps, rest, tempo\n- 2 alternatives per movement for injuries\n- Recovery protocol (sleep, mobility, deload timing)\n- 3 measurable progress markers\n- What to do on a day with half the time`,
    naive: v => `Make me a workout plan to ${v.goal.toLowerCase()}.`
  },
  {
    id: "travel", emoji: "✈️", label: "Plan a Trip",
    fields: [
      { key: "destination", label: "Destination", type: "text", def: "",
        placeholder: "e.g. Tokyo, Lisbon, Costa Rica" },
      { key: "duration", label: "How long", type: "chips", def: "1 week",
        chips: ["Weekend (2-3 days)", "1 week", "10 days", "2 weeks", "3+ weeks"] },
      { key: "travelingWith", label: "Traveling with", type: "chips", def: "Couple",
        chips: ["Solo", "Couple", "Family with kids", "Group of friends", "Business trip"] },
      { key: "budget", label: "Budget", type: "chips", def: "Mid-range",
        chips: ["Backpacker", "Mid-range", "Comfortable", "Luxury"] },
      { key: "travelStyle", label: "Travel style", type: "chips", def: "Food & culture",
        chips: ["Adventure & active", "Food & culture", "Slow & relaxing", "Family-friendly"] },
      { key: "interests", label: "Top interest", type: "chips", def: "Food scene",
        chips: ["Hiking & nature", "Museums & history", "Food scene", "Nightlife", "Beaches", "Architecture"] }
    ],
    build: v => `You are a travel planner who designs itineraries around how a place actually works.\n\nDestination: ${v.destination || "(not specified)"}\nDuration: ${v.duration}\nTraveling with: ${v.travelingWith}\nBudget: ${v.budget}\nStyle: ${v.travelStyle}\nInterest: ${v.interests}\n\nOutput:\n- Day-by-day itinerary with morning/afternoon/evening blocks\n- Specific restaurants with what to order\n- 3 neighborhoods locals live in\n- Transport logistics between every block\n- 2 things to skip and what to do instead\n- Realistic per-day budget breakdown`,
    naive: v => `Plan a ${v.duration.toLowerCase()} trip to ${v.destination || "somewhere fun"}.`
  },
  {
    id: "routine", emoji: "☀️", label: "Build a Routine",
    fields: [
      { key: "timeBlock", label: "When", type: "chips", def: "Morning",
        chips: ["Morning", "Evening", "Whole day", "Workday only"] },
      { key: "lifestyle", label: "Your situation", type: "chips", def: "Working professional",
        chips: ["Working professional", "Parent / caregiver", "Student", "Remote worker", "Athlete"] },
      { key: "dayContext", label: "Briefly describe your day", type: "text", def: "",
        placeholder: "e.g. Up at 6, work from home 9-5, kids home at 4" },
      { key: "currentStruggle", label: "What falls off?", type: "text", def: "",
        placeholder: "e.g. Skip the gym after work, hit snooze 4 times" },
      { key: "constraint", label: "Biggest constraint", type: "chips", def: "Limited time (30 min)",
        chips: ["Limited time (30 min)", "Low-energy mornings", "Travel a lot", "Inconsistent schedule"] },
      { key: "goal", label: "What you want", type: "chips", def: "More focus",
        chips: ["More focus", "Better health", "Less stress", "More creativity", "Better sleep"] }
    ],
    build: v => `You are a behavior designer who builds sustainable routines that stick.\n\nTime block: ${v.timeBlock}\nLifestyle: ${v.lifestyle}\nDay context: ${v.dayContext || "(not specified)"}\nCurrent struggle: ${v.currentStruggle || "(not specified)"}\nConstraint: ${v.constraint}\nGoal: ${v.goal}\n\nOutput:\n- Time-blocked schedule with WHY behind each block\n- 1-2 keystone habits\n- Direct fix for the habit that keeps falling off\n- Common failure points and design-arounds\n- How to handle a missed day\n- 2-week ramp-up plan`,
    naive: v => `Help me build a ${v.timeBlock.toLowerCase()} routine.`
  },
  {
    id: "pitch", emoji: "💼", label: "Sales Pitch",
    fields: [
      { key: "whatYouSell", label: "What you are pitching", type: "text", def: "",
        placeholder: "e.g. AI scheduling tool for dental clinics" },
      { key: "decisionMaker", label: "Who decides yes/no?", type: "text", def: "",
        placeholder: "e.g. CTO of a 200-person SaaS company" },
      { key: "keyEdge", label: "Your unfair advantage", type: "text", def: "",
        placeholder: "e.g. 5-minute integration vs 6 weeks for competitors" },
      { key: "audience", label: "Pitch context", type: "chips", def: "Potential customers",
        chips: ["Potential customers", "Investors", "Internal team", "Cold outbound list", "Conference talk"] },
      { key: "tone", label: "Tone", type: "chips", def: "Bold & disruptive",
        chips: ["Bold & disruptive", "Data-driven", "Story-led", "Conversational", "Authoritative"] },
      { key: "length", label: "Length", type: "chips", def: "2-minute pitch",
        chips: ["30-second elevator", "2-minute pitch", "5-minute deck", "Full deck"] }
    ],
    build: v => `You are a B2B strategist who builds pitches that survive cold meetings.\n\nWhat I sell: ${v.whatYouSell || "(not specified)"}\nDecision-maker: ${v.decisionMaker || "(not specified)"}\nUnfair advantage: ${v.keyEdge || "(not specified)"}\nContext: ${v.audience}\nTone: ${v.tone}\nLength: ${v.length}\n\nOutput:\n- 3-stage structure: hook, demo moment, close\n- Lead with the unfair advantage\n- 3 likely objections + responses\n- 30-second elevator version\n- 1 success metric to anchor\n- 2 questions to ask THEM`,
    naive: v => `Write a sales pitch for ${v.whatYouSell || "my product"}.`
  },
  {
    id: "social", emoji: "📱", label: "Social Media Post",
    fields: [
      { key: "platform", label: "Platform", type: "chips", def: "Instagram",
        chips: ["Instagram", "TikTok", "LinkedIn", "X (Twitter)", "Facebook", "YouTube Shorts"] },
      { key: "postType", label: "Post type", type: "chips", def: "Personal story",
        chips: ["Personal story", "Product launch", "Educational tip", "Behind the scenes", "Hot take"] },
      { key: "topic", label: "What it is about", type: "text", def: "",
        placeholder: "e.g. launching my new course" },
      { key: "tone", label: "Tone", type: "chips", def: "Bold & confident",
        chips: ["Bold & confident", "Warm & inspiring", "Funny & casual", "Professional", "Vulnerable"] },
      { key: "ctaGoal", label: "Goal of the post", type: "chips", def: "Engagement",
        chips: ["Engagement & comments", "Saves", "Profile visits", "DMs / leads", "Click-through", "Build trust"] }
    ],
    build: v => `You are a senior social strategist who understands scroll psychology.\n\nPlatform: ${v.platform}\nType: ${v.postType}\nTopic: ${v.topic || "(not specified)"}\nTone: ${v.tone}\nGoal: ${v.ctaGoal}\n\nOutput:\n- 3 caption variations (hook-led, storytelling, minimal)\n- Tiered hashtag strategy\n- Optimal posting window\n- CTA engineered for the goal\n- First-line variant to beat the 3-second skip`,
    naive: v => `Write a post for ${v.platform} about ${v.topic || v.postType.toLowerCase()}.`
  },
  {
    id: "interview", emoji: "🎯", label: "Interview Prep",
    fields: [
      { key: "role", label: "Role", type: "text", def: "",
        placeholder: "e.g. Senior Product Manager at Stripe" },
      { key: "company", label: "Company / industry", type: "text", def: "",
        placeholder: "e.g. Series B fintech startup" },
      { key: "interviewType", label: "Interview type", type: "chips", def: "Behavioral",
        chips: ["Behavioral", "Technical", "Final round", "Salary negotiation", "First screening", "Panel"] },
      { key: "experienceLevel", label: "Your level", type: "chips", def: "Mid-level",
        chips: ["Entry-level", "Mid-level", "Senior", "Director / Exec"] },
      { key: "focus", label: "Focus", type: "chips", def: "STAR storytelling",
        chips: ["STAR storytelling", "Technical questions", "Culture fit", "Salary negotiation", "Closing the offer"] },
      { key: "biggestWorry", label: "Biggest worry", type: "chips", def: "I get nervous",
        chips: ["I get nervous", "Hard technical questions", "Talking salary", "Culture fit", "Resume gaps"] }
    ],
    build: v => `You are a career coach and former recruiter preparing candidates for competitive roles.\n\nRole: ${v.role || "(not specified)"}\nCompany: ${v.company || "(not specified)"}\nInterview type: ${v.interviewType}\nLevel: ${v.experienceLevel}\nFocus: ${v.focus}\nBiggest worry: ${v.biggestWorry}\n\nOutput:\n- 5 most likely questions with frameworks\n- 2 stories to prepare in advance\n- Practical fix for the worry above\n- 2 things candidates often get wrong at this level\n- 3 questions YOU should ask\n- 60-second closing pitch`,
    naive: v => `Help me prep for a ${v.interviewType.toLowerCase()} interview${v.role ? " for " + v.role : ""}.`
  }
];

const EXPANDED_EXTRA = EXTRA_TEMPLATES.map(expandTemplate);

export const CATEGORIES = [...BASE_CATEGORIES, ...EXPANDED_EXTRA];

export function getCategory(id) {
  return CATEGORIES.find(c => c.id === id);
}
