import type { LocaleShape } from "./types";

const en: LocaleShape = {
  nav: {
    projects: "Projects",
    blog: "Blog",
    transparency: "Transparency",
    skipToContent: "Skip to content",
  },
  hero: {
    eyebrow: "Open source · AGPLv3 · Transparent",
    title: "Software can be fair.",
    subtitle:
      "Phoxia is an open source ecosystem built around one conviction: good software dies when its maintainers run out of time, not ideas. Every tool we build, every dollar we earn, is aimed at changing that. No VC terms. No extraction.",
    ctaPrimary: "Explore projects",
    ctaSecondary: "Our principles",
    luxLabel: "Lux, the Phoxia mascot",
  },
  features: {
    title: "Built differently",
    fairRevenue: {
      title: "Developers first",
      desc: "Every decision starts with developer impact. The core bet: when maintainers have more time, open source gets better for everyone. As the ecosystem grows, that means grants, bounties, and programs built for the people who keep it running.",
    },
    transparency: {
      title: "Transparent by default",
      desc: "Revenue, costs, and disbursements are public at /transparency. Not a blog post: real data on ecosystem revenue, distributions, infrastructure costs, and community investments.",
    },
    openSource: {
      title: "AGPLv3 always",
      desc: "Every line of code is open source. Fork it, audit it, run it yourself. No hidden rules, no lock-in.",
    },
  },
  projects: {
    title: "The ecosystem",
    subtitle: "Independent tools, shared principles.",
    statusLive: "Live",
    statusLaunching: "Launching soon",
    statusBuilding: "Building",
    statusUpcoming: "Upcoming",
    viewOnGithub: "View on GitHub",
    idlefair: {
      name: "idle-fair",
      desc: "Ad network for AI coding agents. Earn from your agent's idle time: one labeled message in the status line while it thinks.",
    },
    phoxiaid: {
      name: "PhoxiaID",
      desc: "SSO built on Passkeys + TOTP. JWT RS256, PKCE, JWKS endpoint. The auth backbone for every Phoxia project.",
    },
    watch: {
      name: "Watch",
      desc: "Status pages, uptime alerts, and cron heartbeats. Lightweight, self-hosted, no third-party telemetry.",
    },
    tools: {
      name: "Tools",
      desc: "19 free developer tools that run entirely in your browser. JSON, JWT, hash, regex, cURL, and more. No data leaves your machine.",
    },
    bounty: {
      name: "Bounty",
      desc: "Open source bounty board. Maintainers post issues with a reward; contributors earn on merge.",
    },
  },
  principles: {
    title: "Our principles",
    subtitle: "The commitments that guide every decision we make.",
    p1: { title: "Developers first", desc: "Every decision starts with developer impact." },
    p2: { title: "Transparent by default", desc: "Revenue, costs, and allocations are always public." },
    p3: { title: "Open source whenever possible", desc: "AGPLv3. Fork it, audit it, run it yourself." },
    p4: { title: "Sustainable growth", desc: "Long-term ecosystem health over short-term profit." },
    p5: { title: "Security & privacy by design", desc: "Not bolted on, built in from the start." },
    p6: { title: "Community participation matters", desc: "Contributors shape the direction." },
    cta: "See our transparency report",
  },
  transparencyPage: {
    eyebrow: "Open books",
    title: "Transparency",
    subtitle:
      "Every dollar that flows through Phoxia has a public justification. No hidden ledger.",
    badgeLabel: "Transparent",
    badgeValue: "Open books · Community-first · AGPLv3",
    revenueTitle: "Ecosystem breakdown",
    revenueComingSoon: "Live data coming soon.",
    categories: {
      totalRevenue: {
        label: "Total ecosystem revenue",
        desc: "All products combined.",
      },
      distributed: {
        label: "Distributed to developers",
        desc: "Bounties, grants, and community programs.",
      },
      infrastructure: {
        label: "Infrastructure costs",
        desc: "Servers, bandwidth, storage, and CDN.",
      },
      legal: {
        label: "Legal and accounting",
        desc: "Compliance, auditing, and legal counsel.",
      },
      paymentFees: {
        label: "Payment processing fees",
        desc: "Stripe and payment provider costs.",
      },
      openSourceGrants: {
        label: "Open source grants & PR rewards",
        desc: "Direct contributor payments and maintainer grants.",
      },
      communityInvestments: {
        label: "Community investments",
        desc: "Events, sponsorships, and education.",
      },
      strategicReserve: {
        label: "Strategic reserve",
        desc: "Buffer for ecosystem stability and long-term growth.",
      },
    },
    reportsTitle: "Monthly reports",
    reportsSubtitle: "Historical breakdowns published each month.",
    reportsEmpty: "No reports published yet.",
    principlesTitle: "Our commitment",
    principle1:
      "Phoxia is committed to helping open source maintainers dedicate more time to the projects the world relies on, while keeping the ecosystem sustainable and transparent.",
    principle2:
      "Every dollar retained by the platform has a clear, public justification listed above.",
    principle3:
      "Every contribution to Phoxia helps fund developers, infrastructure, open source initiatives, and the long-term growth of the ecosystem.",
    ctaTitle: "Build something transparent",
    ctaGithub: "GitHub org",
  },
  projectsPage: {
    eyebrow: "The ecosystem",
    title: "All projects",
    subtitle:
      "Every tool we build ships with the same commitment: AGPLv3, transparency by default, community-driven.",
    revealedSection: "Available now",
    revealedSubtitle: "These projects are live or in active development.",
    classifiedSection: "In the pipeline",
    classifiedSubtitle: "More tools are coming. We can't say much yet.",
    classifiedBadge: "CLASSIFIED",
    classifiedNotify: "Follow @phoxia_org for updates",
    filterAll: "All",
    filterBuilding: "Building",
    filterUpcoming: "Upcoming",
    filterClassified: "Classified",
    ctaTitle: "Build something fair",
    ctaButton: "Join the ecosystem",
  },
  cta: {
    title: "Join the ecosystem",
    subtitle:
      "Everything we build is open source, and everything we earn is public. Follow along, contribute code, or just keep us honest.",
    github: "GitHub org",
    docs: "View transparency",
  },
  footer: {
    tagline: "Open source. Transparent. Community-first.",
    links: {
      projects: "Projects",
      blog: "Blog",
      transparency: "Transparency",
      contact: "Contact",
      privacy: "Privacy",
      terms: "Terms",
      github: "GitHub",
      discord: "Discord",
    },
    legal: "AGPLv3 · phoxia.org",
  },
  blog: {
    title: "Blog",
    subtitle: "Updates, decisions, and thinking out loud.",
    readMore: "Read post",
    writtenBy: "by",
    backToBlog: "← Back to blog",
    minRead: "min read",
    empty: "No posts yet.",
  },
  privacyPage: { title: "Privacy Policy" },
  termsPage: { title: "Terms of Service" },
  contactPage: {
    title: "Contact",
    subtitle: "Reach out by email or join the community on Discord.",
    emailSection: "Email",
    discordSection: "Community",
    discordDesc: "Join the Phoxia Discord server to chat, ask questions, and follow along as things are built.",
    joinServer: "Join the server",
    emails: {
      general: { label: "General", desc: "Questions, ideas, and everything else." },
      privacy: { label: "Privacy", desc: "Data requests and privacy concerns." },
      security: { label: "Security", desc: "Vulnerability reports and security issues." },
    },
  },
  common: {
    toggleTheme: "Toggle color mode",
    toggleLang: "Switch language",
    dark: "Dark",
    light: "Light",
    system: "System",
    tocLabel: "Contents",
  },
};

export default en;
