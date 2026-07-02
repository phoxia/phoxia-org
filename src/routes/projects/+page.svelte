<script lang="ts">
  import Nav from "$lib/components/nav.svelte";
  import Footer from "$lib/components/footer.svelte";
  import Lux from "$lib/components/lux.svelte";
  import ProjectCard from "$lib/components/project-card.svelte";
  import ClassifiedCard from "$lib/components/classified-card.svelte";
  import {
    Fingerprint,
    Activity,
    Wrench,
    Lock,
    BarChart2,
    Webhook,
    FlaskConical,
    Bot,
    ScrollText,
    DollarSign,
    ShieldCheck,
    ArrowRight,
    Github,
  } from "$lib/icons";
  import { t } from "$lib/i18n/i18n.svelte";
  import type { IconComponent } from "$lib/icons";

  let locale = $derived(t());

  type RevealedProject = {
    kind: "revealed";
    name: string;
    description: string;
    icon: IconComponent;
    status: "live" | "launching" | "building" | "upcoming";
    href: string;
  };

  type ClassifiedProject = {
    kind: "classified";
    icon: IconComponent;
    category: string;
    status: "classified";
  };

  type Project = RevealedProject | ClassifiedProject;

  const allProjects = $derived<Project[]>([
    {
      kind: "revealed",
      name: locale.projects.tools.name,
      description: locale.projects.tools.desc,
      icon: Wrench,
      status: "live",
      href: "https://tools.phoxia.org",
    },
    {
      kind: "revealed",
      name: locale.projects.phoxiaid.name,
      description: locale.projects.phoxiaid.desc,
      icon: Fingerprint,
      status: "building",
      href: "https://github.com/phoxia/phoxia-id",
    },
    {
      kind: "revealed",
      name: locale.projects.watch.name,
      description: locale.projects.watch.desc,
      icon: Activity,
      status: "building",
      href: "https://github.com/phoxia/phoxia-watch",
    },
    { kind: "classified", icon: Lock, category: "Security & Secrets", status: "classified" },
    { kind: "classified", icon: BarChart2, category: "Observability", status: "classified" },
    { kind: "classified", icon: Webhook, category: "Integrations", status: "classified" },
    { kind: "classified", icon: FlaskConical, category: "Testing", status: "classified" },
    { kind: "classified", icon: Bot, category: "Developer CLI", status: "classified" },
    { kind: "classified", icon: ScrollText, category: "Documentation", status: "classified" },
    { kind: "classified", icon: DollarSign, category: "Open Bounties", status: "classified" },
    { kind: "classified", icon: ShieldCheck, category: "Certification", status: "classified" },
  ]);

  type FilterKey = "all" | "building" | "upcoming" | "classified";
  let activeFilter = $state<FilterKey>("all");

  const filtered = $derived(
    activeFilter === "all"
      ? allProjects
      : activeFilter === "classified"
        ? allProjects.filter((p) => p.kind === "classified")
        : activeFilter === "building"
          ? allProjects.filter(
              (p) =>
                p.kind === "revealed" &&
                (p.status === "live" || p.status === "launching" || p.status === "building")
            )
          : allProjects.filter((p) => p.kind === "revealed" && p.status === "upcoming")
  );

  const revealed = $derived(allProjects.filter((p) => p.kind === "revealed") as RevealedProject[]);
  const classified = $derived(
    allProjects.filter((p) => p.kind === "classified") as ClassifiedProject[]
  );

  const showSections = $derived(activeFilter === "all");
</script>

<svelte:head>
  <title>Phoxia • All Projects</title>
  <meta
    name="description"
    content="The Phoxia ecosystem: tools built under the same commitment. AGPLv3, transparent by default, community-driven."
  />
  <meta property="og:title" content="Phoxia • All Projects" />
  <meta
    property="og:description"
    content="The Phoxia ecosystem: tools built under the same commitment. AGPLv3, transparent by default, community-driven."
  />
  <meta property="og:url" content="https://phoxia.org/projects" />
  <meta property="og:type" content="website" />
  <meta name="twitter:title" content="Phoxia • All Projects" />
  <meta
    name="twitter:description"
    content="The Phoxia ecosystem: tools built under the same commitment. AGPLv3, transparent by default, community-driven."
  />
  <link rel="canonical" href="https://phoxia.org/projects" />
</svelte:head>

<Nav />

<main id="main-content">
  <!-- ======================================================
       HERO
       ====================================================== -->
  <section class="hero">
    <div class="hero-inner">
      <div class="hero-text">
        <p class="eyebrow">{locale.projectsPage.eyebrow}</p>
        <h1 class="hero-title">{locale.projectsPage.title}</h1>
        <p class="hero-subtitle">{locale.projectsPage.subtitle}</p>
      </div>
      <div class="hero-mascot" aria-hidden="true">
        <Lux state="thinking" size={90} label="Lux thinking about what to build" float={true} />
      </div>
    </div>
    <div class="hero-glow" aria-hidden="true"></div>
  </section>

  <!-- ======================================================
       FILTER TABS
       ====================================================== -->
  <div class="filter-bar" role="tablist" aria-label="Filter projects">
    {#each [{ key: "all", label: locale.projectsPage.filterAll }, { key: "building", label: locale.projectsPage.filterBuilding }, { key: "upcoming", label: locale.projectsPage.filterUpcoming }, { key: "classified", label: locale.projectsPage.filterClassified }] as tab (tab.key)}
      <button
        role="tab"
        aria-selected={activeFilter === tab.key}
        class="filter-tab"
        class:active={activeFilter === tab.key}
        onclick={() => (activeFilter = tab.key as FilterKey)}
      >
        {tab.label}
      </button>
    {/each}
  </div>

  <!-- ======================================================
       GRID — SECTIONED (when filter = all)
       ====================================================== -->
  {#if showSections}
    <section class="projects-section">
      <div class="section-inner">
        <div class="section-head">
          <h2 class="section-title">{locale.projectsPage.revealedSection}</h2>
          <p class="section-subtitle">{locale.projectsPage.revealedSubtitle}</p>
        </div>
        <div class="projects-grid grid-3">
          {#each revealed as project (project.name)}
            <ProjectCard
              name={project.name}
              description={project.description}
              icon={project.icon}
              status={project.status}
              href={project.href}
              statusLabel={project.status === "live"
                ? locale.projects.statusLive
                : project.status === "launching"
                  ? locale.projects.statusLaunching
                  : project.status === "building"
                    ? locale.projects.statusBuilding
                    : locale.projects.statusUpcoming}
            />
          {/each}
        </div>
      </div>
    </section>

    <section class="projects-section classified-section">
      <div class="section-inner">
        <div class="section-head">
          <h2 class="section-title">{locale.projectsPage.classifiedSection}</h2>
          <p class="section-subtitle">{locale.projectsPage.classifiedSubtitle}</p>
        </div>
        <div class="projects-grid grid-4">
          {#each classified as project (project.category)}
            <ClassifiedCard icon={project.icon} category={project.category} />
          {/each}
        </div>
      </div>
    </section>
  {:else}
    <!-- FILTERED VIEW — flat grid -->
    <section class="projects-section">
      <div class="section-inner">
        <div class="projects-grid grid-3">
          {#each filtered as project (project.kind === "revealed" ? project.name : project.category)}
            {#if project.kind === "revealed"}
              <ProjectCard
                name={project.name}
                description={project.description}
                icon={project.icon}
                status={project.status}
                href={project.href}
                statusLabel={project.status === "launching"
                  ? locale.projects.statusLaunching
                  : project.status === "building"
                    ? locale.projects.statusBuilding
                    : locale.projects.statusUpcoming}
              />
            {:else}
              <ClassifiedCard icon={project.icon} category={project.category} />
            {/if}
          {/each}
        </div>
        {#if filtered.length === 0}
          <p class="empty-state">No projects match this filter.</p>
        {/if}
      </div>
    </section>
  {/if}

  <!-- ======================================================
       CTA STRIP
       ====================================================== -->
  <section class="cta-strip">
    <div class="cta-inner">
      <h2 class="cta-title">{locale.projectsPage.ctaTitle}</h2>
      <div class="cta-btns">
        <a
          href="https://github.com/phoxia"
          target="_blank"
          rel="noopener noreferrer"
          class="btn-primary"
        >
          <Github size={16} aria-hidden="true" />
          {locale.projectsPage.ctaButton}
        </a>
        <a href="/transparency" class="btn-ghost">
          {locale.transparencyPage.reportsTitle}
          <ArrowRight size={16} aria-hidden="true" />
        </a>
      </div>
    </div>
  </section>
</main>

<Footer />

<style>
  /* ---- Hero ---- */
  .hero {
    position: relative;
    overflow: hidden;
    padding: 5rem 1.5rem 3.5rem;
    background: var(--color-bg);
    border-bottom: 1px solid var(--color-border);
  }

  .hero-inner {
    max-width: 1120px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr auto;
    align-items: center;
    gap: 4rem;
    position: relative;
    z-index: 1;
  }

  .hero-glow {
    position: absolute;
    top: -10%;
    right: 5%;
    width: 480px;
    height: 480px;
    background: radial-gradient(
      circle,
      rgba(109, 40, 217, 0.06) 0%,
      rgba(245, 158, 11, 0.03) 50%,
      transparent 70%
    );
    pointer-events: none;
  }

  .eyebrow {
    font-family: var(--font-mono);
    font-size: 0.72rem;
    color: var(--color-accent);
    letter-spacing: 0.1em;
    text-transform: uppercase;
    margin: 0 0 1rem;
  }

  .hero-title {
    font-family: var(--font-heading);
    font-size: clamp(2rem, 4.5vw, 3.25rem);
    font-weight: 700;
    color: var(--color-text);
    line-height: 1.1;
    letter-spacing: -0.03em;
    margin: 0 0 1rem;
  }

  .hero-subtitle {
    font-size: clamp(0.95rem, 1.8vw, 1.05rem);
    color: var(--color-text-muted);
    margin: 0;
    max-width: 520px;
    line-height: 1.65;
  }

  .hero-mascot {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
  }

  /* ---- Filter ---- */
  .filter-bar {
    background: var(--color-surface);
    border-bottom: 1px solid var(--color-border);
    padding: 0 1.5rem;
    display: flex;
    gap: 0;
    max-width: 100%;
    overflow-x: auto;
  }

  .filter-tab {
    background: transparent;
    border: none;
    border-bottom: 2px solid transparent;
    padding: 0.85rem 1.1rem;
    cursor: pointer;
    color: var(--color-text-muted);
    font-family: var(--font-body);
    font-size: 0.84rem;
    font-weight: 500;
    min-height: 44px;
    white-space: nowrap;
    transition:
      color 0.15s,
      border-color 0.15s;
  }

  .filter-tab:hover {
    color: var(--color-text);
  }

  .filter-tab.active {
    color: var(--color-text);
    border-bottom-color: var(--color-accent);
  }

  /* ---- Sections ---- */
  .projects-section {
    background: var(--color-bg);
  }

  .classified-section {
    background: var(--color-surface);
    border-top: 1px solid var(--color-border);
  }

  .section-inner {
    max-width: 1120px;
    margin: 0 auto;
    padding: 4rem 1.5rem;
  }

  .section-head {
    margin-bottom: 2.5rem;
  }

  .section-title {
    font-family: var(--font-heading);
    font-size: clamp(1.25rem, 2.5vw, 1.6rem);
    font-weight: 700;
    color: var(--color-text);
    letter-spacing: -0.025em;
    margin: 0 0 0.4rem;
  }

  .section-subtitle {
    font-size: 0.875rem;
    color: var(--color-text-muted);
    margin: 0;
  }

  .projects-grid {
    display: grid;
    gap: 1.25rem;
  }

  .grid-3 {
    grid-template-columns: repeat(3, 1fr);
  }

  .grid-4 {
    grid-template-columns: repeat(4, 1fr);
  }

  .empty-state {
    font-size: 0.9rem;
    color: var(--color-text-faint);
    text-align: center;
    padding: 3rem 0;
    font-family: var(--font-mono);
  }

  /* ---- CTA ---- */
  .cta-strip {
    background: var(--color-bg);
    border-top: 1px solid var(--color-border);
    padding: 0 1.5rem;
  }

  .cta-inner {
    max-width: 1120px;
    margin: 0 auto;
    padding: 4rem 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1.5rem;
    text-align: center;
  }

  .cta-title {
    font-family: var(--font-heading);
    font-size: clamp(1.5rem, 3vw, 2.25rem);
    font-weight: 700;
    color: var(--color-text);
    letter-spacing: -0.025em;
    margin: 0;
  }

  .cta-btns {
    display: flex;
    gap: 0.75rem;
    flex-wrap: wrap;
    justify-content: center;
  }

  .btn-primary {
    display: inline-flex;
    align-items: center;
    gap: 0.4rem;
    background: var(--color-accent);
    color: var(--color-bg);
    border: none;
    border-radius: var(--radius);
    padding: 0.65rem 1.4rem;
    font-family: var(--font-heading);
    font-size: 0.9rem;
    font-weight: 600;
    text-decoration: none;
    min-height: 44px;
    transition:
      background 0.15s,
      transform 0.15s;
  }

  .btn-primary:hover {
    background: var(--color-accent-hover);
    color: var(--color-bg);
    transform: translateY(-1px);
  }

  .btn-ghost {
    display: inline-flex;
    align-items: center;
    gap: 0.4rem;
    background: transparent;
    color: var(--color-text-muted);
    border: 1px solid var(--color-border-strong);
    border-radius: var(--radius);
    padding: 0.65rem 1.4rem;
    font-family: var(--font-heading);
    font-size: 0.9rem;
    font-weight: 500;
    text-decoration: none;
    min-height: 44px;
    transition:
      border-color 0.15s,
      color 0.15s;
  }

  .btn-ghost:hover {
    border-color: var(--color-text-muted);
    color: var(--color-text);
  }

  /* ---- Responsive ---- */
  @media (max-width: 1000px) {
    .grid-4 {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  @media (max-width: 900px) {
    .hero-inner {
      grid-template-columns: 1fr;
      gap: 2rem;
    }

    .hero-mascot {
      order: -1;
    }

    .hero {
      padding: 3.5rem 1.5rem 2.5rem;
    }

    .grid-3 {
      grid-template-columns: 1fr;
    }
  }

  @media (max-width: 600px) {
    .grid-4 {
      grid-template-columns: 1fr;
    }

    .cta-btns {
      flex-direction: column;
      width: 100%;
    }

    .cta-btns .btn-primary,
    .cta-btns .btn-ghost {
      display: flex;
      width: 100%;
      justify-content: center;
    }
  }
</style>
