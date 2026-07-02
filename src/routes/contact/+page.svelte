<script lang="ts">
  import Nav from "$lib/components/nav.svelte";
  import Footer from "$lib/components/footer.svelte";
  import Seo from "$lib/components/seo.svelte";
  import { Mail, ArrowUpRight } from "$lib/icons";
  import { t } from "$lib/i18n/i18n.svelte";

  let locale = $derived(t());

  const DISCORD_INVITE = "https://discord.gg/HD2p367Zb5";
  const DISCORD_WIDGET_ID = "1520429987100889230";

  const emails = $derived([
    {
      address: "contact@phoxia.org",
      label: locale.contactPage.emails.general.label,
      desc: locale.contactPage.emails.general.desc,
    },
    {
      address: "privacy@phoxia.org",
      label: locale.contactPage.emails.privacy.label,
      desc: locale.contactPage.emails.privacy.desc,
    },
    {
      address: "security@phoxia.org",
      label: locale.contactPage.emails.security.label,
      desc: locale.contactPage.emails.security.desc,
    },
  ]);
</script>

<Seo title={locale.contactPage.title} description={locale.contactPage.subtitle} path="/contact" />

<Nav />

<main id="main-content">
  <section class="hero">
    <div class="hero-inner">
      <p class="eyebrow">phoxia.org</p>
      <h1 class="hero-title">{locale.contactPage.title}</h1>
      <p class="hero-subtitle">{locale.contactPage.subtitle}</p>
    </div>
  </section>

  <section class="content">
    <div class="content-inner">
      <!-- Email -->
      <div class="block">
        <h2 class="block-title">{locale.contactPage.emailSection}</h2>
        <div class="email-list">
          {#each emails as email (email.address)}
            <a href="mailto:{email.address}" class="email-card">
              <div class="email-icon">
                <Mail size={16} strokeWidth={1.75} />
              </div>
              <div class="email-body">
                <span class="email-label">{email.label}</span>
                <span class="email-address">{email.address}</span>
                <span class="email-desc">{email.desc}</span>
              </div>
              <ArrowUpRight size={14} class="email-arrow" />
            </a>
          {/each}
        </div>
      </div>

      <!-- Discord -->
      <div class="block">
        <h2 class="block-title">{locale.contactPage.discordSection}</h2>
        <p class="block-desc">{locale.contactPage.discordDesc}</p>

        <div class="discord-wrapper">
          <div class="discord-frame-container">
            <iframe
              src="https://discord.com/widget?id={DISCORD_WIDGET_ID}&theme=dark"
              width="100%"
              height="400"
              sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"
              title="Phoxia Discord"
              style="border:none;"
            ></iframe>
          </div>
          <a href={DISCORD_INVITE} target="_blank" rel="noopener noreferrer" class="discord-cta">
            <!-- Discord logo SVG -->
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path
                d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"
              />
            </svg>
            {locale.contactPage.joinServer}
            <ArrowUpRight size={14} />
          </a>
        </div>
      </div>
    </div>
  </section>
</main>

<Footer />

<style>
  /* Hero */
  .hero {
    border-bottom: 1px solid var(--color-border);
    padding: 4rem 1.5rem 3rem;
  }

  .hero-inner {
    max-width: 720px;
    margin: 0 auto;
  }

  .eyebrow {
    font-family: var(--font-mono);
    font-size: 0.72rem;
    color: var(--color-accent);
    letter-spacing: 0.1em;
    text-transform: uppercase;
    margin: 0 0 0.75rem;
  }

  .hero-title {
    font-family: var(--font-heading);
    font-size: clamp(2rem, 4vw, 2.75rem);
    font-weight: 700;
    color: var(--color-text);
    letter-spacing: -0.03em;
    margin: 0 0 0.75rem;
    line-height: 1.1;
  }

  .hero-subtitle {
    font-size: 1rem;
    color: var(--color-text-muted);
    margin: 0;
    line-height: 1.6;
  }

  /* Content */
  .content {
    padding: 3.5rem 1.5rem 6rem;
  }

  .content-inner {
    max-width: 720px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    gap: 3.5rem;
  }

  .block-title {
    font-family: var(--font-heading);
    font-size: 0.8rem;
    font-weight: 600;
    color: var(--color-text-faint);
    letter-spacing: 0.08em;
    text-transform: uppercase;
    margin: 0 0 1.25rem;
  }

  .block-desc {
    font-size: 0.9375rem;
    color: var(--color-text-muted);
    line-height: 1.7;
    margin: 0 0 1.5rem;
    text-align: justify;
  }

  /* Email cards */
  .email-list {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }

  .email-card {
    display: flex;
    align-items: center;
    gap: 1rem;
    padding: 1rem 1.25rem;
    border: 1px solid var(--color-border);
    border-radius: 10px;
    background: var(--color-surface);
    text-decoration: none;
    transition:
      border-color 0.15s,
      background 0.15s;
  }

  .email-card:hover {
    border-color: var(--color-border-strong);
    background: var(--color-surface-raised);
  }

  .email-icon {
    flex-shrink: 0;
    width: 36px;
    height: 36px;
    border-radius: 8px;
    border: 1px solid var(--color-border);
    background: var(--color-bg);
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--color-text-muted);
  }

  .email-body {
    display: flex;
    flex-direction: column;
    gap: 0.15rem;
    flex: 1;
    min-width: 0;
  }

  .email-label {
    font-family: var(--font-mono);
    font-size: 0.72rem;
    color: var(--color-text-faint);
    letter-spacing: 0.06em;
    text-transform: uppercase;
  }

  .email-address {
    font-size: 0.9rem;
    font-weight: 500;
    color: var(--color-text);
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .email-desc {
    font-size: 0.8rem;
    color: var(--color-text-faint);
    line-height: 1.4;
  }

  :global(.email-arrow) {
    flex-shrink: 0;
    color: var(--color-text-faint);
    transition: color 0.15s;
  }

  .email-card:hover :global(.email-arrow) {
    color: var(--color-accent);
  }

  /* Discord */
  .discord-wrapper {
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
  }

  .discord-frame-container {
    border: 1px solid var(--color-border);
    border-radius: 12px;
    overflow: hidden;
    background: #1e1f22;
    line-height: 0;
  }

  .discord-frame-container iframe {
    display: block;
    width: 100%;
  }

  .discord-cta {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.6rem;
    padding: 0.85rem 1.5rem;
    border: 1px solid var(--color-border);
    border-radius: 10px;
    background: var(--color-surface);
    font-size: 0.9375rem;
    font-weight: 500;
    color: var(--color-text-muted);
    text-decoration: none;
    transition:
      border-color 0.15s,
      color 0.15s,
      background 0.15s;
  }

  .discord-cta:hover {
    border-color: #5865f2;
    color: #5865f2;
    background: var(--color-surface-raised);
  }

  @media (max-width: 480px) {
    .email-address {
      font-size: 0.8rem;
    }
  }
</style>
