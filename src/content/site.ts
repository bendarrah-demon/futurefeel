// All visible copy lives here, one key per page. British English, plain and warm.
import type { Stage } from "../components/ui";

const EMAIL = "hello@futurefeel.co";

export type App = {
  id: string;
  name: string;
  tagline: string;
  description: string;
  stage: Stage;
  stageLabel: string;
  accent: string;
  points: string[];
  cta: { label: string; href: string };
  note?: string;
};

const kin: App = {
  id: "kin",
  name: "Kin",
  tagline: "Find the overlap",
  description:
    "For busy parents who want to move more, together. Kin plans the week around work, nursery runs and bedtimes, shares training time fairly between the two of you, and turns the odd evening into a session you do side by side.",
  stage: "alpha",
  stageLabel: "Alpha · at home",
  accent: "#2f6b4f",
  points: [
    "A week that fits around family life",
    "Fair time for both of you, without a scoreboard",
    "Together sessions, each at your own level",
  ],
  cta: { label: "Read Kin's story", href: "/kin" },
};

const relay: App = {
  id: "relay",
  name: "Relay",
  tagline: "Share the mental load",
  description:
    "For couples carrying a lot between them. A ten-second weekly check-in on how full each of your tanks is and what you need, so you can see how the other is really doing without having to ask, and protect time for what keeps each of you going.",
  stage: "resting",
  stageLabel: "Prototype · resting",
  accent: "#f43f5e",
  points: [
    "A weekly check-in that takes seconds",
    "See how your partner is doing, with their say-so",
    "Fair, protected time for what each of you needs",
  ],
  cta: { label: "Follow Relay", href: "#follow" },
  note: "Relay is a working prototype. It's resting while Kin's alpha runs, and I'll share what happens next in the notes.",
};

const longview: App = {
  id: "longview",
  name: "Longview",
  tagline: "See your year before you spend it",
  description:
    "A free 12-month money planner. Put the holidays, birthdays, the car and the new boiler on one view, and see what's left before you book anything.",
  stage: "resting",
  stageLabel: "Resting",
  accent: "#f97316",
  points: [
    "Every planned cost on one 12-month view",
    "Move plans between months and watch the year change",
    "No sign-up, and your numbers stay on your device",
  ],
  cta: { label: "Try Longview", href: "https://lifelens-rosy.vercel.app" },
  note: "Longview works and it's free. It's resting while I focus on Kin, so expect a few rough edges.",
};

export const siteContent = {
  brand: {
    name: "Future Feel",
    tagline: "Lighter, not louder.",
    positioning: "A small UK studio making calm apps for busy lives, built in public.",
  },

  contact: {
    email: EMAIL,
    mailto: (subject?: string) => `mailto:${EMAIL}${subject ? `?subject=${encodeURIComponent(subject)}` : ""}`,
  },

  navigation: [
    { label: "Kin", path: "/kin" },
    { label: "Apps", path: "/apps" },
    { label: "Notes", path: "/notes" },
    { label: "Purpose", path: "/purpose" },
    { label: "About", path: "/about" },
  ],

  footer: {
    place: "Made in the UK",
    links: [
      { label: "Kin", path: "/kin" },
      { label: "Apps", path: "/apps" },
      { label: "Notes", path: "/notes" },
      { label: "Purpose", path: "/purpose" },
      { label: "Sources", path: "/sources" },
      { label: "About", path: "/about" },
      { label: "Privacy", path: "/privacy" },
    ],
  },

  community: {
    navButton: "Follow the build",
    title: "Follow the build",
    description:
      "I'm building Future Feel in the open: what works, what doesn't, and what my family makes of Kin. Short notes when there's something worth sharing, and an early invite when there's something to try.",
    label: "Your email",
    button: "Follow the build",
    privacyNote: "Only notes from me. Unsubscribe any time.",
    fallbackNote: "Opens your email app. Say hello and I'll add you to the list.",
    mailSubject: "Follow the build",
    // Paste a newsletter service's form endpoint here (for example Buttondown) to switch on the email form.
    formAction: "",
  },

  promises: {
    title: "What you can expect from anything I make",
    items: [
      { title: "Calm by design", text: "No streaks, guilt trips or nagging to keep you in the app. Putting the phone down happy counts as success." },
      { title: "Your data stays with you", text: "Wherever possible your information lives on your device, not on my servers. Kin and Longview both work that way." },
      { title: "No ads, and no selling data", text: "If something ever costs money, you'll know what and why before you pay." },
      { title: "Honest endings", text: "If I ever stop an app, I'll say so in the app and in the notes well before it goes, so you have time to keep anything you need." },
    ],
  },

  apps: { kin, relay, longview, all: [kin, relay, longview] as App[], others: [relay, longview] as App[] },

  home: {
    title: "Future Feel | Calm apps for busy lives",
    eyebrow: "A small studio, built in public",
    headline: "Calm apps for busy lives.",
    sub: "Future Feel makes apps that aim to give you back a little time, money and headspace, then get out of the way. First up is Kin, which helps two busy parents find time to move, on their own and together. My family is testing it now.",
    primary: { label: "Follow the build", href: "#follow" },
    secondary: { label: "Meet Kin", href: "/kin" },
    now: { eyebrow: "Happening now", title: "From the notes", link: "All notes" },
    kin: {
      eyebrow: "In alpha, at home",
      title: "Kin: find the overlap",
      body: "Kin plans your week around work, nursery runs and bedtimes, shares training time fairly between the two of you, and turns the odd evening into a session you do side by side, each at your own pace.",
      story: "The first family using Kin is mine. I'm sharing what we learn as we go, including what I get wrong.",
    },
    purpose: {
      eyebrow: "Why I build",
      title: "Two loops, one figure of eight",
      body: "You sit at the centre, but the people around you make you who you are. Businesses tend to last longer when the people in them share in owning them. I think those two loops can feed each other, inside a shared limit of enough, and I want each app here to help test that idea in the open, starting with Kin.",
      link: "See the model",
      sources: "Read the sources",
    },
    others: { eyebrow: "Also made here" },
    voices: {
      title: "Writing or talking about humane tech?",
      body: "If you write, podcast or organise around technology that's good for people, I'd love to compare notes. I'm happy to share the model, the research behind it and what we learn from Kin's alpha.",
      button: "Let's talk",
      subject: "Let's talk",
    },
  },

  kinPage: {
    title: "Kin · Future Feel",
    eyebrow: "Kin · alpha, at home",
    headline: "Kin helps two busy parents find the overlap.",
    lead: "Fair time for each of you to move, and the odd evening together. Kin plans the week around work, nursery runs and bedtimes, so neither of you has to keep score.",
    example: "Sam runs on Tuesday, Alex swims on Saturday, and Thursday evening is for both of them.",
    steps: [
      { title: "Tell Kin about your week", text: "Work patterns, childcare, the evenings you're both home. It takes a few minutes, passing the phone between you." },
      { title: "Get a plan that's fair to both of you", text: "Kin shares training time between you and explains why the week looks the way it does." },
      { title: "Move, on your own and together", text: "Sessions at your own level, plus together sessions where you work side by side, each at your own pace." },
    ],
    principles: [
      { title: "No one is the bad guy", text: "Kin never ranks one partner against the other. Fairness is a quiet detail, not a scoreboard." },
      { title: "A skip isn't a failure", text: "No streaks or broken chains. A lighter week is a choice." },
      { title: "One phone, two people", text: "Whose turn it is is clear from arm's length." },
    ],
    alpha: {
      title: "The alpha starts at home",
      body: [
        "Before anyone else tries Kin, my family is using it for real: busy weeks, missed sessions and all.",
        "I'm writing up what we learn in the open, including what I get wrong. When Kin is ready for more families, people following the build hear first.",
      ],
    },
    sibling: "Kin looks after movement. Relay, a separate app for sharing the mental load, is a working prototype that's resting for now.",
    safety: "Kin is a planning tool, not medical advice. If you're new to exercise, pregnant or recently had a baby, check with a health professional first.",
  },

  appsPage: {
    title: "Apps · Future Feel",
    eyebrow: "Apps",
    headline: "Small, calm apps, each with one job.",
    lead: "Every app shows its stage honestly, so you know what you're trying.",
    stages: [
      { stage: "alpha" as Stage, label: "Alpha", text: "A small group using it with me. Invite only." },
      { stage: "beta" as Stage, label: "Beta", text: "Anyone can try it. Expect rough edges." },
      { stage: "live" as Stage, label: "Live", text: "Ready to rely on, and looked after." },
      { stage: "resting" as Stage, label: "Resting", text: "It works, but isn't being actively developed." },
    ],
    bench: "A few more ideas are on the bench. I'll share them in the notes as they firm up.",
    idea: {
      title: "Is something in your week harder than it should be?",
      body: "Tell me about it. Kin started that way.",
      button: "Share an idea",
      subject: "An idea",
    },
  },

  notesPage: {
    title: "Notes · Future Feel",
    eyebrow: "Notes",
    headline: "How the future feels.",
    lead: "Building Future Feel in the open: decisions, numbers and mistakes, as they happen.",
  },

  // Newest first. Dates are ISO (YYYY-MM-DD).
  notes: [
    {
      slug: "the-model-version-two",
      date: "2026-10-03",
      title: "The model, version two: a figure of eight",
      summary: "The Double Donut became a figure of eight, rebuilt on checked evidence. The biggest surprise: the strongest evidence isn't about the individual or about purpose.",
      body: [
        "Future Feel's model used to be a Double Donut: one ring for a person, one for a business, touching at a small circle called community. When I put it in front of some hard questions, the drawing said the opposite of what I believed. Every arrow carried value into the business, and nothing came back.",
        "So it's now a figure of eight. A people loop and a business loop, with value changing hands both ways where they cross, inside a shared limit of enough.",
        "I wanted every part of it to rest on evidence, so I gathered the research and had every citation checked: against the full original where one was free to read, and against the publisher record and abstract where it wasn't. Where a detail was wrong, I used the corrected version, and anything that couldn't be confirmed was left out. The full list is on the Sources page.",
        "The biggest surprise: the strongest evidence isn't about the individual, and it isn't about purpose. It's about the people in between. Belonging to groups that actually meet has trials behind it. Purpose on its own, by contrast, showed no link to how firms performed. In one large study of 429 US firms, only those whose employees also found that purpose clear tended to do better. That's a correlation nobody has independently repeated yet, and economic theory adds that purpose pays only when it's costly to fake. The sources are on the Purpose page.",
        "Two words changed as a result. I'd used \"tribes\" for the groups we choose; the research talks about groups and connection, and the word carries baggage, so it's \"circles\" now. And the core line gained two words: when we feel better inside, we tend to need less and care more. Each link in that chain holds as a tendency, each effect is modest, and nobody has tested the whole chain at once. Kin's alpha won't settle that: for now it's just my family, and I'm not measuring wellbeing yet. I plan to, using the ONS's four standard questions, and I'll share what I find here.",
      ],
    },
    {
      slug: "rebuilding-in-public",
      date: "2026-10-03",
      title: "Rebuilding this site in public",
      summary: "The first version explained a theory before it showed anything I'd made. So I've started again, in the open.",
      body: [
        "This site was first put together in January with an earlier AI model. Reading it back eight months on, it explained a theory before it showed anything I'd made, its buttons went nowhere, and it said a few things that were no longer true.",
        "So I've started again, in the open. Kin now leads, because it's what I'm working on. Relay, which helps couples share the mental load, and Longview are both resting while Kin's alpha runs. The model at the heart of Future Feel is now a figure of eight, and every claim it makes links to its source.",
        "Next: notes from Kin's alpha, which is under way with my own family.",
      ],
    },
  ],

  aboutPage: {
    title: "About · Future Feel",
    eyebrow: "About",
    headline: "Hello, I'm Ben.",
    lead: "Future Feel is a one-person studio in the UK. I make calm apps for busy lives, and I build them in public.",
    story: [
      "Future Feel started with a question: why does so much technology leave us feeling worse? I think it can work the other way round, and I'm testing that one small app at a time.",
      "The name says what I'm after: the future should feel lighter, not louder.",
      "I'm one person, so I lean on modern tools and on the people around me: my family, who are testing Kin first, and anyone who follows along and tells me what I've missed.",
    ],
    how: {
      title: "How I work",
      intro: "I design and build with modern tools, including AI, so a working version of an idea can be in people's hands in weeks. The time that saves goes into listening.",
      loop: [
        { name: "Notice", text: "Something in everyday life that's harder than it needs to be." },
        { name: "Make a small version", text: "Just enough to find out whether it helps." },
        { name: "Share it early", text: "With real people, in their real weeks." },
        { name: "Watch and listen", text: "What people do, and what they tell me." },
        { name: "Decide", text: "Keep going, change course or stop, and write down why." },
      ],
    },
    learning: "I'll get things wrong. When I do, it'll be in the notes.",
    creators: {
      title: "Working with creators",
      intro: "If you write, podcast or post about calm tech, family life or money, here's how I'll work with you.",
      items: [
        { text: "If I give you free access, a code or anything else, or pay you, your post is an ad and should say \"Ad\" up front. I'll put that in writing and check.", cite: [287, 288, 289] },
        { text: "No fake, paid-for or swapped reviews, ever.", cite: [290] },
        { text: "If you share something because you want to, with nothing in return and no business tie to me, that isn't an ad. I'm grateful for it.", cite: [286] },
      ],
    },
    help: {
      title: "Could you help?",
      body: "I'm looking for two or three people who've built consumer apps people love, especially in family life, health or money. It means an occasional call to test my thinking and tell me what I've missed.",
      button: "Offer to help",
      subject: "Helping Future Feel",
    },
  },

  privacyPage: {
    title: "Privacy · Future Feel",
    eyebrow: "Privacy",
    headline: "Privacy, in plain English.",
    updated: "2026-10-03",
    sections: [
      { title: "This website", text: "This site doesn't use cookies, analytics or tracking, and its fonts are served from here rather than a third party." },
      { title: "If you follow the build", text: "I keep your email address only to send you notes about Future Feel. To stop them, reply and say so, and I'll take you off the list and delete your details. If I ever move the list to a newsletter service, I'll name it here first." },
      { title: "If you email me", text: "I keep our conversation for as long as it's useful, then delete it. I never share it or sell it." },
      { title: "The apps", text: "Kin and Longview keep your information on your device. Each app explains what it stores in its own settings." },
      { title: "Your rights", text: `You can ask what I hold about you, ask me to correct it or delete it, by emailing ${EMAIL}. If you're unhappy with how I've handled your data, you can complain to the Information Commissioner's Office at ico.org.uk.` },
    ],
  },

  notFound: {
    title: "Page not found · Future Feel",
    headline: "That page doesn't exist.",
    lead: "It may have moved when the site was rebuilt.",
  },
};
