// The Future Feel figure of eight. Every claim cites the Sources page by reference number
// (see sources.ts, generated from the citation-checked report of 3 October 2026).

export type Cited = { text: string; cite?: number[] };

export const model = {
  // Compact version for the home page.
  simple: {
    title: "The Future Feel figure of eight",
    description:
      "Two loops joined in the middle, inside a dashed line marked enough. On the left, people: you at the centre, with your family, your circles and your community around you. On the right, Future Feel: calm apps, word of mouth, a shared stake and reinvestment. Value flows around both loops and changes hands where they cross.",
    left: { title: "People", caption: "you and the people around you" },
    right: { title: "Future Feel", caption: "calm apps and a shared stake" },
    centre: "exchange",
    flows: { out: "time back, calm and a say", back: "trust, use and word of mouth" },
  },

  // Labels for the detailed diagram on the Purpose page.
  detailed: {
    leftTitle: "People",
    rightTitle: "Future Feel",
    rings: ["You", "Family", "Circles", "Community"],
    stations: ["Calm apps", "Word of mouth", "Shared stake", "Reinvestment"],
    centre: "exchange",
    brake: "Enough",
  },

  purpose: {
    title: "Purpose · Future Feel",
    eyebrow: "Purpose",
    headline: "Make everyday life feel lighter.",
    lead: "Future Feel exists to give busy people back time, money and headspace, and more time with the people who matter. I want each app to be a small, open test of one idea. This page shows the evidence behind it, including where the evidence is thin.",
  },

  bet: {
    title: "The bet",
    line: "When we feel better inside, we tend to need less and care more.",
    evidence: {
      text: "Research links greater wellbeing with less materialistic values and with more generosity, and suggests the two reinforce each other over time. Each effect is modest, and much of the evidence is correlational.",
      cite: [195, 188, 190],
    } as Cited,
    honest: "Nobody has tested the whole chain in one study. I build in public partly so that each app can become a small, open test of part of it, and I'll share what I find, good or bad.",
  },

  shape: {
    title: "Two loops, one figure of eight",
    text: "A people loop and a business loop, each feeding the other where they cross, inside a shared limit of enough. Systems that only reinforce themselves eventually break something, so the eight needs a brake.",
    cite: [219],
  },

  people: {
    title: "The people loop",
    intro: "You sit at the centre. But what makes you who you are is the people around you, and that's where the evidence is strongest.",
    rings: [
      {
        name: "You",
        text: "A well-tested theory holds that wellbeing rests on three needs: feeling free to choose, feeling capable, and feeling connected. Of the main wellbeing models, it's the most solid one to build on. In a study of young adults in Belgium, China, Peru and the USA, meeting each need went with greater wellbeing to the same degree in all four countries.",
        cite: [2, 3],
      },
      {
        name: "Family",
        text: "Partners shape each other. Across 93 studies, happier marriages went with greater personal wellbeing. And in a study of 3,722 English couples aged 50 and over, 67% of men became active when their partner did, against 26% when their partner stayed inactive.",
        cite: [47, 35],
      },
      {
        name: "Circles",
        text: "The friends and groups you choose. Belonging to groups protects against depression and loneliness, with trials behind it, and groups that actually meet help most. Among depressed older adults in England with no groups, joining three cut the risk of relapse by 63%.",
        cite: [55, 57, 59],
      },
      {
        name: "Community",
        text: "Socially connected people live longer. Across 148 studies, stronger relationships went with 50% greater odds of survival.",
        cite: [41, 43],
      },
    ],
    ways: {
      title: "What keeps the loop turning",
      text: "The UK's Five Ways to Wellbeing give the loop its everyday actions.",
      cite: [11],
      items: ["Connect", "Be active", "Take notice", "Keep learning", "Give"],
    },
  },

  business: {
    title: "The business loop",
    intro: "A business that grows by doing right by people, rather than by taking their attention.",
    stations: [
      {
        name: "Calm apps",
        text: "Apps that ask for as little attention as possible and give something back, in the tradition of calm technology and humane design.",
        cite: [261, 262, 232],
      },
      {
        name: "Word of mouth",
        text: "Growth through people telling people. On one social network, referral invitations had a long-run effect about 20 times that of marketing events.",
        cite: [172],
      },
      {
        name: "Shared stake",
        text: "Shared ownership buys stability more than profit. Employee owners are laid off at less than half the rate of other employees, and 82.8% of new UK co-ops survive five years, against 38.4% of all businesses (from different data sources).",
        cite: [144, 147],
      },
      {
        name: "Reinvestment",
        text: "Anything the apps earn will go back into them, and into tools that should exist even if they won't pay. Doughnut Economics' business design layers (purpose, networks, governance, ownership and finance) are the checklist.",
        cite: [100],
      },
    ],
    truth: {
      text: "Purpose on its own shows no link to performance. Only purpose that employees also experience as clear does. Companies that signed purpose statements often failed to act on them, and economic theory suggests purpose pays only when it's costly to fake and easy to check. So the plan is to publish what we do, not just what we believe.",
      cite: [110, 122, 102, 103],
    } as Cited,
  },

  exchange: {
    title: "The exchange",
    intro: "Where the loops cross, value changes hands in both directions.",
    toYou: { title: "From Future Feel to you", items: ["Time back", "A calmer app", "Fair treatment", "A say in what's next"] },
    toUs: { title: "From you to Future Feel", items: ["Trust", "Use", "Word of mouth", "A fair price, if something ever costs money"] },
    evidence: {
      text: "At work, the arrows run both ways: happier people tend to do better work, and doing well tends to make people happier. Each effect is modest. No study has yet tested this for a consumer app, so Future Feel plans to publish its own numbers.",
      cite: [204, 206, 209, 210],
    } as Cited,
  },

  enough: {
    title: "Enough: the brake",
    intro: "The whole eight sits inside a limit. Here's what Future Feel won't do, whatever it might add to growth.",
    refusals: [
      "No engagement-maximising, streaks or guilt",
      "No ads, and no selling data",
      "No AI companions or personas pretending to be people",
      "No growth for its own sake",
    ],
    evidence: {
      text: "Materialistic values go with lower wellbeing, and in one field experiment joining a community made eBay members choosier buyers. Community can help people need less, which is why Future Feel aims to earn from trust and recommendation, not from how much people consume.",
      cite: [195, 180],
    } as Cited,
  },

  checkable: {
    title: "Making it checkable",
    intro: "Purpose only counts if you can check it. These are plans, not yet done, and progress will go in the notes.",
    items: [
      { title: "Publish outcomes", text: "Measure Kin's alpha with the ONS's four standard wellbeing questions, opt-in, and publish what happens, good or bad.", cite: [269] },
      { title: "Scan for consequences", text: "Run and publish a consequence scan for each app: what it's meant to do, and what it might do by accident.", cite: [265] },
      { title: "Work openly with creators", text: "Ask creators in writing to put \"Ad\" up front whenever free access, a code, an affiliate link, a gift or payment is involved, check their posts, and label my own posts about Future Feel too.", cite: [286, 288, 289] },
      { title: "Share ownership, step by step", text: "When Future Feel becomes a company, lock its purpose into the articles from the start, give members a voice as the apps mature, and aim to pass ownership to the community rather than sell.", cite: [157, 154] },
    ],
  },

  apps: {
    title: "Where the apps sit",
    items: [
      { name: "Kin", where: "Family · Be active, Connect", text: "Fair time for each partner to move, and sessions you do together." },
      { name: "Relay", where: "Family · Take notice, Give", text: "A weekly check-in on how each of you is really doing, and protected time for what keeps you going." },
      { name: "Longview", where: "You · Take notice", text: "Money headspace: seeing the year ahead so you can spend on what matters, including time and other people.", cite: [202, 203] },
    ],
  },

  dontClaim: {
    title: "What we don't claim",
    intro: "Being clear about what the evidence doesn't show matters as much as citing what it does.",
    items: [
      { dont: "Loneliness is as deadly as smoking 15 cigarettes a day.", say: "Socially connected people live longer.", cite: [41] },
      { dont: "Happiness is contagious.", say: "Happiness clusters among connected people.", cite: [73, 74] },
      { dont: "Purpose drives profit.", say: "Firms whose people share a clear purpose tend to perform better.", cite: [110] },
      { dont: "Giving makes you happy.", say: "Happiness and generosity tend to feed each other, though any single act has a small effect.", cite: [188, 190, 184] },
      { dont: "Phones caused a youth mental-health crisis.", say: "Compulsive use is consistently linked with poorer mental health.", cite: [246, 247, 250] },
      { dont: "A 3:1 positivity ratio, or \"40% of happiness is in your control\".", say: "Nothing. Both have been withdrawn or substantially undermined.", cite: [18, 19, 21, 22] },
      { dont: "Our app improves wellbeing by X%.", say: "If we measure, we'll report standard measures and what counts as a meaningful change.", cite: [269, 272, 273] },
    ],
  },
};
