<script lang="ts">
  import Nav from "$lib/components/nav.svelte";
  import Footer from "$lib/components/footer.svelte";
  import Lux from "$lib/components/lux.svelte";
  import { Github } from "$lib/icons";
  import { t } from "$lib/i18n/i18n.svelte";

  let locale = $derived(t());

  const categories = $derived(Object.values(locale.transparencyPage.categories));
</script>

<svelte:head>
  <title>Phoxia • Transparency</title>
  <meta
    name="description"
    content="Every dollar that flows through Phoxia has a public justification. Revenue, costs, distributions, and community investments, all aimed at giving open source maintainers more time."
  />
  <meta property="og:title" content="Phoxia • Transparency" />
  <meta
    property="og:description"
    content="Every dollar that flows through Phoxia has a public justification. No hidden ledger."
  />
  <meta property="og:url" content="https://phoxia.org/transparency" />
  <meta property="og:image" content="https://phoxia.org/brand/og.png" />
  <meta property="og:type" content="website" />
  <meta name="twitter:title" content="Phoxia • Transparency" />
  <meta
    name="twitter:description"
    content="Every dollar that flows through Phoxia has a public justification. No hidden ledger."
  />
  <link rel="canonical" href="https://phoxia.org/transparency" />
</svelte:head>

<Nav />

<main id="main-content">
  <!-- ======================================================
       HERO
       ====================================================== -->
  <section class="hero">
    <div class="hero-inner">
      <div class="hero-text">
        <p class="eyebrow">{locale.transparencyPage.eyebrow}</p>
        <h1 class="hero-title">{locale.transparencyPage.title}</h1>
        <p class="hero-subtitle">{locale.transparencyPage.subtitle}</p>

        <!-- Phoxia Transparency Badge -->
        <div class="transparency-badge" aria-label="Phoxia Transparency Badge">
          <span class="badge-label">{locale.transparencyPage.badgeLabel}</span>
          <span class="badge-value">{locale.transparencyPage.badgeValue}</span>
        </div>
      </div>
      <div class="hero-mascot" aria-hidden="true">
        <Lux state="active" size={90} label="Lux with an open book" float={true} />
      </div>
    </div>
    <div class="hero-glow" aria-hidden="true"></div>
  </section>

  <!-- ======================================================
       ECOSYSTEM BREAKDOWN
       ====================================================== -->
  <section class="breakdown">
    <div class="section-inner">
      <h2 class="section-title">{locale.transparencyPage.revenueTitle}</h2>
      <p class="coming-soon">{locale.transparencyPage.revenueComingSoon}</p>

      <div class="categories-grid">
        {#each categories as cat (cat.label)}
          <div class="category-card">
            <p class="cat-label">{cat.label}</p>
            <p class="cat-amount" aria-label="Amount pending">—</p>
            <p class="cat-desc">{cat.desc}</p>
          </div>
        {/each}
      </div>
    </div>
  </section>

  <!-- ======================================================
       OUR COMMITMENT
       ====================================================== -->
  <section class="commitment">
    <div class="section-inner">
      <h2 class="section-title">{locale.transparencyPage.principlesTitle}</h2>
      <ul class="commitment-list" role="list">
        {#each [
          locale.transparencyPage.principle1,
          locale.transparencyPage.principle2,
          locale.transparencyPage.principle3,
        ] as p, i (i)}
          <li class="commitment-item">{p}</li>
        {/each}
      </ul>
    </div>
  </section>

  <!-- ======================================================
       MONTHLY REPORTS
       ====================================================== -->
  <section class="reports">
    <div class="section-inner">
      <h2 class="section-title">{locale.transparencyPage.reportsTitle}</h2>
      <p class="section-subtitle">{locale.transparencyPage.reportsSubtitle}</p>
      <p class="empty-state">{locale.transparencyPage.reportsEmpty}</p>
    </div>
  </section>

  <!-- ======================================================
       CTA
       ====================================================== -->
  <section class="cta-strip">
    <div class="cta-inner">
      <h2 class="cta-title">{locale.transparencyPage.ctaTitle}</h2>
      <a
        href="https://github.com/phoxia"
        target="_blank"
        rel="noopener noreferrer"
        class="btn-primary"
      >
        <Github size={16} aria-hidden="true" />
        {locale.transparencyPage.ctaGithub}
      </a>
    </div>
  </section>
</main>

<Footer />

<style>
  /* ---- Hero ---- */
  .hero {
    position: relative;
    overflow: hidden;
    padding: 5rem 1.5rem 4rem;
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
    right: 0;
    width: 500px;
    height: 500px;
    background: radial-gradient(
      circle,
      rgba(245, 158, 11, 0.05) 0%,
      rgba(109, 40, 217, 0.03) 50%,
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
    margin: 0 0 1.75rem;
    max-width: 520px;
    line-height: 1.65;
  }

  .hero-mascot {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
  }

  /* Phoxia Transparency Badge */
  .transparency-badge {
    display: inline-flex;
    align-items: stretch;
    border-radius: 5px;
    overflow: hidden;
    font-family: var(--font-mono);
    font-size: 0.72rem;
    font-weight: 600;
    height: 24px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.25);
  }

  .badge-label {
    background: #333;
    color: #fff;
    padding: 0 10px;
    display: flex;
    align-items: center;
    white-space: nowrap;
  }

  :global([data-mode="light"]) .badge-label {
    background: #555;
  }

  .badge-value {
    background: var(--color-accent);
    color: #000;
    padding: 0 10px;
    display: flex;
    align-items: center;
    white-space: nowrap;
  }

  /* ---- Sections ---- */
  .section-inner {
    max-width: 1120px;
    margin: 0 auto;
    padding: 5rem 1.5rem;
  }

  .section-title {
    font-family: var(--font-heading);
    font-size: clamp(1.25rem, 2.5vw, 1.75rem);
    font-weight: 700;
    color: var(--color-text);
    letter-spacing: -0.025em;
    margin: 0 0 1rem;
  }

  .section-subtitle {
    font-size: 0.9rem;
    color: var(--color-text-muted);
    margin: 0 0 2rem;
  }

  /* ---- Breakdown ---- */
  .breakdown {
    background: var(--color-surface);
    border-bottom: 1px solid var(--color-border);
  }

  .coming-soon {
    font-size: 0.82rem;
    color: var(--color-text-faint);
    font-family: var(--font-mono);
    margin: 0 0 2rem;
    padding: 0.75rem 1rem;
    background: var(--color-surface-raised);
    border: 1px solid var(--color-border);
    border-radius: var(--radius);
  }

  .categories-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 1rem;
  }

  .category-card {
    padding: 1.25rem;
    background: var(--color-bg);
    border: 1px solid var(--color-border);
    border-radius: var(--radius-lg);
    display: flex;
    flex-direction: column;
    gap: 0.4rem;
  }

  .cat-label {
    font-family: var(--font-heading);
    font-size: 0.82rem;
    font-weight: 600;
    color: var(--color-text);
    margin: 0;
    line-height: 1.35;
  }

  .cat-amount {
    font-family: var(--font-mono);
    font-size: 1.4rem;
    font-weight: 700;
    color: var(--color-text-faint);
    margin: 0;
  }

  .cat-desc {
    font-size: 0.75rem;
    color: var(--color-text-faint);
    margin: 0;
    line-height: 1.5;
  }

  /* ---- Commitment ---- */
  .commitment {
    background: var(--color-bg);
    border-bottom: 1px solid var(--color-border);
  }

  .commitment-list {
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    max-width: 720px;
  }

  .commitment-item {
    font-size: 0.95rem;
    color: var(--color-text-muted);
    line-height: 1.7;
    padding-left: 1rem;
    border-left: 3px solid var(--color-accent);
  }

  /* ---- Reports ---- */
  .reports {
    background: var(--color-surface);
    border-bottom: 1px solid var(--color-border);
  }

  .empty-state {
    font-family: var(--font-mono);
    font-size: 0.82rem;
    color: var(--color-text-faint);
    padding: 3rem 0;
    text-align: center;
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
    font-size: clamp(1.4rem, 2.5vw, 1.9rem);
    font-weight: 700;
    color: var(--color-text);
    letter-spacing: -0.025em;
    margin: 0;
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
    transition: background 0.15s, transform 0.15s;
  }

  .btn-primary:hover {
    background: var(--color-accent-hover);
    color: var(--color-bg);
    transform: translateY(-1px);
  }

  /* ---- Responsive ---- */
  @media (max-width: 1000px) {
    .categories-grid {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  @media (max-width: 900px) {
    .hero-inner {
      grid-template-columns: 1fr;
      gap: 2rem;
    }

    .hero-mascot { order: -1; }

    .hero { padding: 3.5rem 1.5rem 3rem; }
  }

  @media (max-width: 540px) {
    .categories-grid {
      grid-template-columns: 1fr;
    }

    .transparency-badge {
      display: none;
    }

    .cta-inner .btn-primary {
      display: flex;
      width: 100%;
      justify-content: center;
    }
  }
</style>
