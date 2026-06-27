export type LocaleShape = {
  nav: {
    projects: string;
    blog: string;
    transparency: string;
    skipToContent: string;
  };
  hero: {
    eyebrow: string;
    title: string;
    subtitle: string;
    ctaPrimary: string;
    ctaSecondary: string;
    luxLabel: string;
  };
  features: {
    title: string;
    fairRevenue: { title: string; desc: string };
    transparency: { title: string; desc: string };
    openSource: { title: string; desc: string };
  };
  projects: {
    title: string;
    subtitle: string;
    statusLaunching: string;
    statusBuilding: string;
    statusUpcoming: string;
    viewOnGithub: string;
    idlefair: { name: string; desc: string };
    phoxiaid: { name: string; desc: string };
    watch: { name: string; desc: string };
    tools: { name: string; desc: string };
    bounty: { name: string; desc: string };
  };
  principles: {
    title: string;
    subtitle: string;
    p1: { title: string; desc: string };
    p2: { title: string; desc: string };
    p3: { title: string; desc: string };
    p4: { title: string; desc: string };
    p5: { title: string; desc: string };
    p6: { title: string; desc: string };
    cta: string;
  };
  transparencyPage: {
    eyebrow: string;
    title: string;
    subtitle: string;
    badgeLabel: string;
    badgeValue: string;
    revenueTitle: string;
    revenueComingSoon: string;
    categories: {
      totalRevenue: { label: string; desc: string };
      distributed: { label: string; desc: string };
      infrastructure: { label: string; desc: string };
      legal: { label: string; desc: string };
      paymentFees: { label: string; desc: string };
      openSourceGrants: { label: string; desc: string };
      communityInvestments: { label: string; desc: string };
      strategicReserve: { label: string; desc: string };
    };
    reportsTitle: string;
    reportsSubtitle: string;
    reportsEmpty: string;
    principlesTitle: string;
    principle1: string;
    principle2: string;
    principle3: string;
    ctaTitle: string;
    ctaGithub: string;
  };
  projectsPage: {
    eyebrow: string;
    title: string;
    subtitle: string;
    revealedSection: string;
    revealedSubtitle: string;
    classifiedSection: string;
    classifiedSubtitle: string;
    classifiedBadge: string;
    classifiedNotify: string;
    filterAll: string;
    filterBuilding: string;
    filterUpcoming: string;
    filterClassified: string;
    ctaTitle: string;
    ctaButton: string;
  };
  cta: {
    title: string;
    subtitle: string;
    github: string;
    docs: string;
  };
  footer: {
    tagline: string;
    links: {
      projects: string;
      blog: string;
      transparency: string;
      contact: string;
      privacy: string;
      terms: string;
      github: string;
      discord: string;
    };
    legal: string;
  };
  blog: {
    title: string;
    subtitle: string;
    readMore: string;
    writtenBy: string;
    backToBlog: string;
    minRead: string;
    empty: string;
  };
  privacyPage: { title: string; };
  termsPage: { title: string; };
  contactPage: {
    title: string;
    subtitle: string;
    emailSection: string;
    discordSection: string;
    discordDesc: string;
    joinServer: string;
    emails: {
      general: { label: string; desc: string };
      privacy: { label: string; desc: string };
      security: { label: string; desc: string };
    };
  };
  common: {
    toggleTheme: string;
    toggleLang: string;
    dark: string;
    light: string;
    system: string;
    tocLabel: string;
  };
};
