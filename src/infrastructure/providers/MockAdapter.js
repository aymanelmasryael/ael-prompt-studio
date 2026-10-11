/* =========================================================================
   Mock Adapter — realistic simulation, no API key needed
   ========================================================================= */

import { BaseAdapter } from "./BaseAdapter.js";

const CANNED = {
  email: [
    "Subject: Quick follow-up on the timeline\n\nHi,\n\nI wanted to circle back on our conversation last week about the Q4 launch. After reviewing the numbers, I believe we can accelerate the timeline by roughly two weeks if we prioritize the integration work first.\n\nThe key ask: can you confirm by Friday whether we have budget approval for the extended dev sprint? That single decision unlocks everything else.\n\nHappy to jump on a call if that's easier — I have 30 minutes open Thursday or Friday afternoon.\n\nBest,\nAyman",
    "Subject: Three reasons this partnership makes sense\n\nHi,\n\nI've been thinking about your team's current roadmap and wanted to share three specific ways we could help:\n\n1. Your onboarding flow currently loses ~22% of users at step 3 — we've solved this exact problem for two other teams in your space.\n2. The integration work you described maps directly to our existing API surface — no custom development needed.\n3. We can start with a 30-day pilot to de-risk the decision entirely.\n\nWould a 20-minute call next Tuesday at 2pm work? I'll come prepared with a live demo tailored to your stack.\n\nBest,\nAyman"
  ],
  recipe: [
    "**Sheet-Pan Lemon Herb Salmon with Crispy Broccoli**\n\nServes 4 · Prep 10 min · Cook 20 min\n\n**Ingredients:**\n- 4 salmon fillets (6 oz each), skin on, room temp\n- 1 large head broccoli, cut into florets\n- 3 tbsp olive oil\n- 1 lemon (zest + juice)\n- 3 cloves garlic, minced\n- 1 tsp dried oregano\n- Salt and pepper to taste\n\n**Instructions:**\n1. Preheat oven to 425°F. Line a sheet pan with parchment.\n2. Toss broccoli with 2 tbsp oil, salt, pepper. Roast 10 min until edges char.\n3. Meanwhile, mix remaining oil, lemon zest, garlic, oregano.\n4. Push broccoli to sides, place salmon in center. Brush with herb mixture.\n5. Roast 12-14 min until salmon flakes easily (internal temp 125°F for medium).\n6. Finish with lemon juice and flaky salt.\n\n**Pro tips:**\n- Pat salmon dry — dry skin = crispy skin.\n- Roast broccoli first so it can caramelize without steaming the fish.\n- Rest 2 min before serving so juices redistribute."
  ],
  workout: [
    "**8-Week Progressive Strength Plan**\n\nGoal: Build muscle · Equipment: Dumbbells · 4 days/week · 45 min\n\n**Weekly split:**\n- Mon: Push (chest, shoulders, triceps)\n- Tue: Pull (back, biceps)\n- Thu: Legs (quads, hamstrings, glutes)\n- Fri: Full body (compound focus)\n\n**Week 1-2 Foundation:**\n- Dumbbell bench press: 4×8 @ RPE 7\n- Goblet squat: 3×10\n- Dumbbell row: 4×8 each side\n- Romanian deadlift: 3×10\n- Overhead press: 3×8\n- Plank: 3×45s\n\n**Progression:**\n- Weeks 3-4: +2.5kg on primary lifts\n- Weeks 5-6: Add 1 set per compound\n- Weeks 7-8: Reduce reps, increase load (RPE 8)\n\n**Recovery:**\n- Sleep 7.5+ hours\n- Protein: 1.6g/kg bodyweight daily\n- Deload week 4 and 8\n\n**Progress markers:**\n- Dumbbell bench: +15% weight\n- Squat reps at RPE 7: +5 reps\n- Resting heart rate: -3 bpm"
  ],
  travel: [
    "**Tokyo · 7 Days · Food & Culture Focus**\n\n**Day 1 — Arrival & Shibuya**\n- Morning: Land, check in at Shibuya Stream Excel Hotel\n- Afternoon: Shibuya Crossing, Hachiko statue, Miyashita Park rooftop\n- Evening: Dinner at Uobei (conveyor sushi, ¥2000/person)\n\n**Day 2 — Old Tokyo**\n- Morning: Tsukiji Outer Market — tamagoyaki, uni, fresh tuna\n- Afternoon: Asakusa + Senso-ji Temple, Nakamise shopping street\n- Evening: Yakitori at Toriki in Yurakucho under the tracks\n\n**Day 3 — Modern Art & Design**\n- Morning: teamLab Planets (book 2 weeks ahead)\n- Afternoon: Ginza Six, Itoya stationery, Mitsukoshi basement food hall\n- Evening: Ramen at Ichiran (solo booths)\n\n**Day 4 — Day Trip: Nikko**\n- Toshogu Shrine, Kegon Falls, lake Chuzenji\n- Return via Tobu line (JR Pass covers it)\n\n**Day 5 — Neighborhoods**\n- Morning: Shimokitazawa (vintage, coffee, records)\n- Afternoon: Daikanyama T-Site bookstore\n- Evening: Kaiseki at a Michelin one-star (~¥12,000)\n\n**Day 6 — Harajuku & Omotesando**\n- Takeshita Street, Meiji Shrine, Omotesando Hills architecture walk\n\n**Day 7 — Departure**\n- Morning: Tsukiji breakfast, last-minute gifts\n\n**Budget:** ¥15,000-20,000/day food + transport (excluding accommodation)"
  ],
  general: [
    "Here's a thoughtful answer to your question, structured as clearly as possible.\n\nThe core insight is that most people approach this problem from the wrong angle. Instead of optimizing the visible surface, focus on the underlying mechanism — that's where the real leverage lives.\n\nLet me break it down:\n\n**1. First, reframe the problem**\nThe way you've framed it naturally constrains the solutions available. A small shift in framing opens up entirely different approaches.\n\n**2. Second, identify the constraint**\nEvery system has exactly one bottleneck at a time. Find it, and the rest becomes straightforward.\n\n**3. Third, act on the constraint only**\nDon't dilute your effort across ten improvements. Double down on the single constraint until it's no longer binding, then move to the next.\n\n**In one line:** Identify the real constraint, apply maximum force there, and let the rest follow."
  ]
};

function sleep(ms) {
  return new Promise(r => setTimeout(r, ms));
}

function chunkText(text, size) {
  const out = [];
  let i = 0;
  while (i < text.length) {
    const end = Math.min(text.length, i + size + Math.floor(Math.random() * 12));
    out.push(text.slice(i, end));
    i = end;
  }
  return out;
}

export class MockAdapter extends BaseAdapter {
  async send(request, opts = {}) {
    const { onChunk, signal } = opts;
    const t0 = performance.now();

    const baseLatency = {
      "ultra-fast": 180, "very-fast": 320, fast: 520, medium: 880
    }[this.config.speedClass] || 500;

    const latency = baseLatency + Math.random() * 400;
    await sleep(latency * 0.25);

    const pool = CANNED[request.task] || CANNED.general;
    const fullText = pool[Math.floor(Math.random() * pool.length)];

    const chunks = chunkText(fullText, 24);
    let acc = "";
    for (const chunk of chunks) {
      if (signal && signal.aborted) throw new Error("aborted");
      acc += chunk;
      if (onChunk) onChunk(chunk, acc);
      await sleep(latency / chunks.length);
    }

    const inputTokens = this.estimateTokens((request.system || "") + request.prompt);
    const outputTokens = this.estimateTokens(fullText);
    const latencyMs = performance.now() - t0;

    return { text: fullText, inputTokens, outputTokens, latencyMs, mock: true };
  }
}
