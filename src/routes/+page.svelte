<script lang="ts">
  import {
    Scale,
    Eye,
    Lock,
    Fingerprint,
    Activity,
    Wrench,
    Award,
    ShieldCheck,
    Github,
    ArrowRight,
  } from "$lib/icons";
  import Lux from "$lib/components/lux.svelte";
  import Nav from "$lib/components/nav.svelte";
  import Footer from "$lib/components/footer.svelte";
  import ProjectCard from "$lib/components/project-card.svelte";
  import { t } from "$lib/i18n/i18n.svelte";

  let locale = $derived(t());

  const projects = $derived([
    {
      name: locale.projects.tools.name,
      description: locale.projects.tools.desc,
      icon: Wrench,
      status: "launching" as const,
      href: "https://github.com/phoxia/phoxia-tools",
    },
    {
      name: locale.projects.phoxiaid.name,
      description: locale.projects.phoxiaid.desc,
      icon: Fingerprint,
      status: "building" as const,
      href: "https://github.com/phoxia/phoxia-id",
    },
    {
      name: locale.projects.watch.name,
      description: locale.projects.watch.desc,
      icon: Activity,
      status: "building" as const,
      href: "https://github.com/phoxia/phoxia-watch",
    },
  ]);

  const features = $derived([
    { icon: Scale, title: locale.features.fairRevenue.title, desc: locale.features.fairRevenue.desc },
    { icon: Eye, title: locale.features.transparency.title, desc: locale.features.transparency.desc },
    { icon: Lock, title: locale.features.openSource.title, desc: locale.features.openSource.desc },
  ]);

  const principles = $derived([
    { icon: Award,       title: locale.principles.p1.title, desc: locale.principles.p1.desc },
    { icon: Eye,         title: locale.principles.p2.title, desc: locale.principles.p2.desc },
    { icon: Lock,        title: locale.principles.p3.title, desc: locale.principles.p3.desc },
    { icon: Activity,    title: locale.principles.p4.title, desc: locale.principles.p4.desc },
    { icon: ShieldCheck, title: locale.principles.p5.title, desc: locale.principles.p5.desc },
    { icon: Scale,       title: locale.principles.p6.title, desc: locale.principles.p6.desc },
  ]);
</script>

<svelte:head>
  <title>Phoxia • Open source. Transparent. Community-first.</title>
  <meta
    name="description"
    content="Phoxia is an open source ecosystem committed to returning as much value as possible to developers while maintaining a sustainable and transparent ecosystem. AGPLv3. No VC terms."
  />
  <meta property="og:title" content="Phoxia • Open source. Transparent. Community-first." />
  <meta
    property="og:description"
    content="Every contribution to Phoxia helps fund developers, infrastructure, open source initiatives, and the long-term growth of the ecosystem. AGPLv3."
  />
  <meta property="og:image" content="/brand/og.png" />
  <meta property="og:url" content="https://phoxia.org" />
  <meta property="og:type" content="website" />
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="Phoxia • Open source. Transparent. Community-first." />
  <meta
    name="twitter:description"
    content="Every contribution to Phoxia helps fund developers, infrastructure, open source initiatives, and the long-term growth of the ecosystem. AGPLv3."
  />
  <link rel="canonical" href="https://phoxia.org" />
</svelte:head>

<Nav />

<main id="main-content">
  <!-- ======================================================
       HERO
       ====================================================== -->
  <section class="hero">
    <div class="hero-inner">
      <div class="hero-text">
        <p class="eyebrow">{locale.hero.eyebrow}</p>
        <h1 class="hero-title">{locale.hero.title}</h1>
        <p class="hero-subtitle">{locale.hero.subtitle}</p>
        <div class="hero-ctas">
          <a href="#projects" class="btn-primary">
            {locale.hero.ctaPrimary}
            <ArrowRight size={16} aria-hidden="true" />
          </a>
          <a href="#principles" class="btn-ghost">
            {locale.hero.ctaSecondary}
          </a>
        </div>
      </div>

      <div class="hero-mascot" aria-hidden="true">
        <Lux state="happy" size={100} label={locale.hero.luxLabel} float={true} />
      </div>
    </div>

    <div class="hero-glow" aria-hidden="true"></div>
  </section>

  <!-- ======================================================
       FEATURES — Built differently
       ====================================================== -->
  <section class="features">
    <div class="section-inner">
      <h2 class="section-title">{locale.features.title}</h2>
      <div class="features-grid">
        {#each features as feature (feature.title)}
          <div class="feature-card">
            <span class="feature-icon" aria-hidden="true">
              <feature.icon size={22} strokeWidth={1.75} />
            </span>
            <h3 class="feature-title">{feature.title}</h3>
            <p class="feature-desc">{feature.desc}</p>
          </div>
        {/each}
      </div>
    </div>
  </section>

  <!-- ======================================================
       PROJECTS
       ====================================================== -->
  <section class="projects" id="projects">
    <div class="section-inner">
      <div class="section-head">
        <h2 class="section-title">{locale.projects.title}</h2>
        <p class="section-subtitle">{locale.projects.subtitle}</p>
      </div>

      <div class="projects-grid">
        {#each projects as project (project.name)}
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
        {/each}
      </div>
    </div>
  </section>

  <!-- ======================================================
       PRINCIPLES
       ====================================================== -->
  <section class="principles" id="principles">
    <div class="section-inner">
      <div class="section-head">
        <h2 class="section-title">{locale.principles.title}</h2>
        <p class="section-subtitle">{locale.principles.subtitle}</p>
      </div>

      <div class="principles-grid">
        {#each principles as p (p.title)}
          <div class="principle-card">
            <span class="principle-icon" aria-hidden="true">
              <p.icon size={20} strokeWidth={1.75} />
            </span>
            <h3 class="principle-title">{p.title}</h3>
            <p class="principle-desc">{p.desc}</p>
          </div>
        {/each}
      </div>

      <div class="principles-cta">
        <a href="/transparency" class="btn-primary">
          {locale.principles.cta}
          <ArrowRight size={16} aria-hidden="true" />
        </a>
      </div>
    </div>
  </section>

  <!-- ======================================================
       CTA STRIP
       ====================================================== -->
  <section class="cta-strip">
    <div class="section-inner cta-inner">
      <h2 class="cta-title">{locale.cta.title}</h2>
      <p class="cta-subtitle">{locale.cta.subtitle}</p>
      <div class="cta-btns">
        <a
          href="https://github.com/phoxia"
          target="_blank"
          rel="noopener noreferrer"
          class="btn-primary"
        >
          <Github size={16} aria-hidden="true" />
          {locale.cta.github}
        </a>
        <a href="/transparency" class="btn-ghost">
          {locale.cta.docs}
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
    min-height: 88dvh;
    display: flex;
    align-items: center;
    padding: 5rem 1.5rem 4rem;
    background: var(--color-bg);
  }

  .hero-glow {
    position: absolute;
    top: -20%;
    right: -10%;
    width: 600px;
    height: 600px;
    background: radial-gradient(
      circle,
      rgba(245, 158, 11, 0.06) 0%,
      rgba(109, 40, 217, 0.04) 50%,
      transparent 75%
    );
    pointer-events: none;
    z-index: 0;
  }

  .hero-inner {
    max-width: 1120px;
    margin: 0 auto;
    width: 100%;
    display: grid;
    grid-template-columns: 1fr auto;
    align-items: center;
    gap: 4rem;
    position: relative;
    z-index: 1;
  }

  .hero-text {
    max-width: 740px;
  }

  .eyebrow {
    font-family: var(--font-mono);
    font-size: 0.72rem;
    color: var(--color-accent);
    letter-spacing: 0.1em;
    text-transform: uppercase;
    margin: 0 0 1.25rem;
  }

  .hero-title {
    font-family: var(--font-heading);
    font-size: clamp(2.4rem, 5.5vw, 4rem);
    font-weight: 700;
    color: var(--color-text);
    line-height: 1.1;
    letter-spacing: -0.03em;
    margin: 0 0 1.25rem;
  }

  .hero-subtitle {
    font-size: clamp(1rem, 2vw, 1.15rem);
    color: var(--color-text-muted);
    margin: 0 0 2.25rem;
    max-width: 520px;
    line-height: 1.65;
  }

  .hero-ctas {
    display: flex;
    gap: 0.75rem;
    flex-wrap: wrap;
    align-items: center;
  }

  .hero-mascot {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
  }

  /* ---- Buttons ---- */
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
    cursor: pointer;
    min-height: 44px;
    transition: background 0.15s, transform 0.15s;
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
    transition: border-color 0.15s, color 0.15s;
  }

  .btn-ghost:hover {
    border-color: var(--color-text-muted);
    color: var(--color-text);
  }

  /* ---- Sections ---- */
  .section-inner {
    max-width: 1120px;
    margin: 0 auto;
    padding: 5rem 1.5rem;
  }

  .section-title {
    font-family: var(--font-heading);
    font-size: clamp(1.5rem, 3vw, 2rem);
    font-weight: 700;
    color: var(--color-text);
    letter-spacing: -0.025em;
    margin: 0 0 0.5rem;
  }

  .section-subtitle {
    font-size: 0.95rem;
    color: var(--color-text-muted);
    margin: 0 0 2.5rem;
    max-width: 520px;
  }

  .section-head {
    margin-bottom: 2rem;
  }

  /* ---- Features ---- */
  .features {
    background: var(--color-surface);
    border-top: 1px solid var(--color-border);
    border-bottom: 1px solid var(--color-border);
  }

  .features-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;
  }

  .feature-card {
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
  }

  .feature-icon {
    display: flex;
    align-items: center;
    color: var(--color-accent);
    width: 40px;
    height: 40px;
    background: var(--color-accent-dim);
    border-radius: var(--radius);
    justify-content: center;
  }

  .feature-title {
    font-family: var(--font-heading);
    font-size: 1rem;
    font-weight: 700;
    color: var(--color-text);
    margin: 0;
  }

  .feature-desc {
    font-size: 0.875rem;
    color: var(--color-text-muted);
    margin: 0;
    line-height: 1.65;
  }

  /* ---- Projects ---- */
  .projects {
    background: var(--color-bg);
  }

  .projects-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1.25rem;
  }

  /* ---- Principles ---- */
  .principles {
    background: var(--color-surface);
    border-top: 1px solid var(--color-border);
    border-bottom: 1px solid var(--color-border);
  }

  .principles-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1.5rem;
    margin-bottom: 2.5rem;
  }

  .principle-card {
    display: flex;
    flex-direction: column;
    gap: 0.6rem;
    padding: 1.25rem;
    background: var(--color-surface-raised);
    border: 1px solid var(--color-border);
    border-radius: var(--radius-lg);
  }

  .principle-icon {
    display: flex;
    align-items: center;
    color: var(--color-accent);
    width: 36px;
    height: 36px;
    background: var(--color-accent-dim);
    border-radius: var(--radius);
    justify-content: center;
    flex-shrink: 0;
  }

  .principle-title {
    font-family: var(--font-heading);
    font-size: 0.9rem;
    font-weight: 700;
    color: var(--color-text);
    margin: 0;
  }

  .principle-desc {
    font-size: 0.825rem;
    color: var(--color-text-muted);
    margin: 0;
    line-height: 1.6;
  }

  .principles-cta {
    display: flex;
    justify-content: flex-start;
  }

  /* ---- CTA strip ---- */
  .cta-strip {
    background: var(--color-bg);
    border-top: 1px solid var(--color-border);
  }

  .cta-inner {
    text-align: center;
  }

  .cta-title {
    font-family: var(--font-heading);
    font-size: clamp(1.5rem, 3vw, 2.25rem);
    font-weight: 700;
    color: var(--color-text);
    letter-spacing: -0.025em;
    margin: 0 0 0.75rem;
  }

  .cta-subtitle {
    font-size: 0.95rem;
    color: var(--color-text-muted);
    margin: 0 0 2rem;
    max-width: 480px;
    margin-left: auto;
    margin-right: auto;
  }

  .cta-btns {
    display: flex;
    gap: 0.75rem;
    justify-content: center;
    flex-wrap: wrap;
  }

  /* ---- Responsive ---- */
  @media (max-width: 900px) {
    .hero-inner {
      grid-template-columns: 1fr;
      gap: 2.5rem;
    }

    .hero-mascot {
      order: -1;
    }

    .hero {
      min-height: unset;
      padding: 4rem 1.5rem 3rem;
    }

    .features-grid,
    .principles-grid {
      grid-template-columns: 1fr;
      gap: 1.25rem;
    }

    .projects-grid {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  @media (max-width: 540px) {
    .projects-grid {
      grid-template-columns: 1fr;
    }

    .hero-ctas {
      flex-direction: column;
      align-items: stretch;
    }

    .hero-ctas .btn-primary,
    .hero-ctas .btn-ghost {
      display: flex;
      width: 100%;
      justify-content: center;
    }

    .cta-btns {
      flex-direction: column;
    }

    .cta-btns .btn-primary,
    .cta-btns .btn-ghost {
      display: flex;
      width: 100%;
      justify-content: center;
    }
    .principles-cta .btn-primary {
      display: flex;
      width: 100%;
      justify-content: center;
    }
  }
</style>
