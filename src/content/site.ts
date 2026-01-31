// Content layer - easy to migrate to CMS later

export const siteContent = {
  brand: {
    name: "Future Feel",
    tagline: "Products that help people feel better",
  },

  hero: {
    headline: "We build products that help people feel better",
    subheadline: "So they need less and care more.",
    intro:
      "Most tech makes life noisier. We're trying the opposite. We've got a theory: when people genuinely thrive (not just cope), they consume less and connect more. Good for them, good for everyone.",
  },

  approach: {
    title: "How we work",
    description:
      "We're not precious about which products prove this. We build fast, test with real people, and kill what doesn't work. AI lets us do in weeks what used to take years.",
    principles: [
      "Build something small",
      "Get it in front of people",
      "Learn what's actually useful",
      "Double down or move on",
    ],
  },

  cta: {
    title: "We're looking for advisors",
    subtitle: "Not investors yet.",
    description:
      "People who've built things, shipped things, failed at things. Who find this interesting enough to poke holes in it.",
    buttonText: "Get in touch",
    email: "hello@futurefeel.co",
  },

  deepDive: {
    teaser: "There's more thinking behind this if you want it.",
    warning: "Fair warning: it gets dense.",
    linkText: "The full philosophy →",
  },

  products: {
    title: "What we're building",
    subtitle: "Right now",
    items: [
      {
        id: "longview",
        name: "Longview",
        tagline: "Financial clarity without the anxiety",
        description:
          "For people in their 40s and 50s who want to see where they're headed financially — without drowning in spreadsheets or paying a fortune for advice.",
        status: "Live",
        accent: "#f97316",
        features: [
          "See where you actually stand",
          "Model different futures",
          "Make decisions with less stress",
        ],
      },
      {
        id: "relay",
        name: "Relay",
        tagline: "Helping couples share the load fairly",
        description:
          "For parents who want to both stay healthy but can't figure out who gets gym time when. Coordinates schedules, tracks fairness, stops the arguments.",
        status: "In development",
        accent: "#f43f5e",
        features: [
          "See who's getting what time",
          "Coordinate without the back-and-forth",
          "Actually feel like a team",
        ],
      },
    ],
    pipeline: {
      title: "And testing ideas for",
      items: [
        "Tools for loneliness (the epidemic nobody talks about)",
        "Community coordination (digital that leads to physical)",
        "Mental health support (that doesn't feel clinical)",
      ],
    },
  },

  // The deep philosophy stuff - moved to separate page
  thinking: {
    title: "The Thinking",
    subtitle: "For people who want the full picture",
    intro:
      "This page is dense. It's where we work out what we actually believe and why. Most people don't need this — the products should speak for themselves. But if you're the kind of person who wants to understand the framework, here it is.",

    coreInsight: {
      title: "The core insight",
      quote: "If we feel better inside, we need to buy less, we care more",
      explanation:
        "This isn't just a nice thought — it's backed by research on wellbeing and consumption. People who score higher on psychological wellbeing consistently show lower materialism and higher community engagement. We think you can design products that create this effect.",
    },

    problemSpace: {
      title: "The problem space",
      description:
        "We're interested in where individual human needs overlap with societal challenges. Things like:",
      challenges: [
        { name: "Loneliness", description: "It's an epidemic. Literally killing people." },
        { name: "Mental health", description: "Services are overwhelmed. Prevention beats cure." },
        { name: "Community erosion", description: "We've lost the third places." },
        { name: "Meaningful work", description: "Most jobs feel pointless." },
        { name: "Health inequality", description: "Your postcode predicts your lifespan." },
        { name: "Disconnection from nature", description: "We're indoors, online, ungrounded." },
      ],
    },

    doubleDonut: {
      title: "The Double Donut",
      subtitle: "Raworth, but micro",
      description:
        "Kate Raworth's Doughnut Economics describes a safe operating space for humanity — between a social foundation and an ecological ceiling. We think the same model works at the individual level.",
      individual: {
        name: "Individual donut",
        description:
          "At the center: how you feel inside. Around it: the practices that sustain you (move, think, create, connect, rest). Outside that: your relationships. And at the edge: the external conditions of your life (work, health, home).",
      },
      organization: {
        name: "Organization donut",
        description:
          "At the center: a clear purpose. Around it: the people who make it happen. Outside that: the wider community. Same edge conditions — because organizations exist in the same world as individuals.",
      },
      connection:
        "The insight: improve the inside, and it ripples out. Help individuals flourish, and they improve their communities. Build organizations with genuine purpose, and they improve conditions for everyone.",
    },

    digitalPhysical: {
      title: "Digital enables physical",
      description:
        "We're not building another app to trap people on their phones. Every product we make should get people into the real world — meeting actual humans, doing actual things. Digital is the coordination layer, not the destination.",
    },

    financialModel: {
      title: "How we pay for this",
      sections: [
        {
          name: "Cross-subsidy",
          description:
            "Some products make money (Longview, Relay). That funds the ones that probably won't but should exist anyway (community tools, accessibility, mental health support for people who can't pay).",
        },
        {
          name: "Cooperatives",
          description:
            "When a product works, we want to share ownership with the people who built it and the people who use it. Not for ideological purity — because we think it makes better products.",
        },
        {
          name: "Inverted pay",
          description:
            "Senior people take 20% below market rate. Junior people get 30% above. Compresses the gap, attracts people who care about the work, and helps younger team members build stability.",
        },
      ],
    },
  },

  howWeWork: {
    title: "How We Work",
    subtitle: "Build fast, learn faster",
    intro:
      "We're not trying to build one perfect product. We're trying to find the products that actually help — as quickly as possible.",

    aiEnabled: {
      title: "AI changes the game",
      description:
        "A year ago, testing an idea meant months of development. Now we can build a working prototype in days. That means we can try more things, fail cheaper, and find what works faster.",
      implications: [
        "We can test 10 ideas instead of betting everything on 1",
        "We learn from real users, not hypothetical personas",
        "We kill things that don't work without it feeling like a funeral",
        "We move fast without sacrificing quality",
      ],
    },

    process: {
      title: "The loop",
      steps: [
        {
          name: "Spot something",
          description: "A problem that matters, that we might be able to help with",
        },
        {
          name: "Build small",
          description: "The minimum thing that tests whether the idea has legs",
        },
        {
          name: "Get it out",
          description: "In front of real people, not focus groups",
        },
        {
          name: "Watch and listen",
          description: "What do they actually do? What do they actually say?",
        },
        {
          name: "Decide",
          description: "Double down, pivot, or kill it. No sunk cost fallacy.",
        },
      ],
    },

    team: {
      title: "The team (for now)",
      description:
        "Small, senior, moving fast. We're looking for advisors before we're looking for funding. People who've done this before and can help us avoid the obvious mistakes.",
    },
  },

  community: {
    title: "Stay in the loop",
    description:
      "We're not doing a newsletter. But if you want to know when we launch something new or need beta testers, leave your email.",
    placeholder: "your@email.com",
    buttonText: "Keep me posted",
  },

  about: {
    title: "About",
    story:
      "Future Feel started with a frustration: why does so much technology make life worse? Noisier, more addictive, more anxious. We think it doesn't have to be that way. We're trying to build the alternative.",
    caveats: [
      "We might be wrong about all of this",
      "We're figuring it out as we go",
      "We'd rather ship something imperfect than theorize forever",
    ],
  },

  navigation: [
    { label: "Home", path: "/" },
    { label: "Products", path: "/products" },
    { label: "How We Work", path: "/how-we-work" },
    { label: "The Thinking", path: "/thinking" },
    { label: "About", path: "/about" },
  ],

  footer: {
    copyright: "Future Feel",
    email: "hello@futurefeel.co",
  },
};
