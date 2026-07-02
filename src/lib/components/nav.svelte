<script lang="ts">
  import { Sun, Moon, Monitor, Languages } from "$lib/icons";
  import { t, cycleLang, getLang } from "$lib/i18n/i18n.svelte";
  import { cycleMode, getModePref } from "$lib/theme/theme.svelte";

  let modePref = $state(getModePref());
  let lang = $derived(getLang());

  function handleMode() {
    cycleMode();
    modePref = getModePref();
  }

  function handleLang() {
    cycleLang();
  }

  const ModeIcon = $derived(modePref === "dark" ? Sun : modePref === "light" ? Moon : Monitor);

  let locale = $derived(t());
  let modeLabel = $derived(
    modePref === "dark"
      ? locale.common.dark
      : modePref === "light"
        ? locale.common.light
        : locale.common.system
  );

  let menuOpen = $state(false);
</script>

<a href="#main-content" class="skip-link">{locale.nav.skipToContent}</a>

<header class="nav-header">
  <nav class="nav-inner" aria-label="Main navigation">
    <!-- Logo -->
    <a href="/" class="nav-logo" aria-label="Phoxia, home">
      <img
        src="/brand/symbol-64.webp"
        alt=""
        width="28"
        height="28"
        aria-hidden="true"
        style="image-rendering:auto;"
      />
      <span class="nav-wordmark">Phoxia</span>
    </a>

    <!-- Desktop links -->
    <ul class="nav-links" role="list">
      <li><a href="/projects">{locale.nav.projects}</a></li>
      <li><a href="/blog">{locale.nav.blog}</a></li>
      <li><a href="/transparency">{locale.nav.transparency}</a></li>
    </ul>

    <!-- Controls -->
    <div class="nav-controls">
      <button
        onclick={handleLang}
        aria-label="{locale.common.toggleLang} ({lang === 'en' ? 'PT-BR' : 'EN'})"
        class="ctrl-btn"
        title={locale.common.toggleLang}
      >
        <Languages size={15} aria-hidden="true" />
        <span class="ctrl-label">{lang === "en" ? "PT" : "EN"}</span>
      </button>

      <button
        onclick={handleMode}
        aria-label="{locale.common.toggleTheme} ({modeLabel})"
        class="ctrl-btn"
        title="{locale.common.toggleTheme}: {modeLabel}"
      >
        <ModeIcon size={15} aria-hidden="true" />
      </button>

      <!-- Mobile menu toggle -->
      <button
        class="mobile-menu-btn"
        onclick={() => (menuOpen = !menuOpen)}
        aria-expanded={menuOpen}
        aria-label="Toggle menu"
      >
        <span class="hamburger" class:open={menuOpen}></span>
      </button>
    </div>
  </nav>

  <!-- Mobile menu -->
  {#if menuOpen}
    <div class="mobile-menu" role="dialog" aria-label="Navigation menu">
      <ul role="list">
        <li><a href="/projects" onclick={() => (menuOpen = false)}>{locale.nav.projects}</a></li>
        <li><a href="/blog" onclick={() => (menuOpen = false)}>{locale.nav.blog}</a></li>
        <li>
          <a href="/transparency" onclick={() => (menuOpen = false)}>{locale.nav.transparency}</a>
        </li>
      </ul>
    </div>
  {/if}
</header>

<style>
  .skip-link {
    position: absolute;
    top: -100%;
    left: 1rem;
    background: var(--color-accent);
    color: var(--color-bg);
    padding: 0.5rem 1rem;
    border-radius: var(--radius);
    font-family: var(--font-body);
    font-size: 0.875rem;
    font-weight: 600;
    z-index: 200;
    min-height: unset;
    display: block;
  }

  .skip-link:focus {
    top: 0.75rem;
  }

  .nav-header {
    position: sticky;
    top: 0;
    z-index: 100;
    background: rgba(5, 5, 8, 0.85);
    backdrop-filter: blur(12px);
    -webkit-backdrop-filter: blur(12px);
    border-bottom: 1px solid var(--color-border);
  }

  :global([data-mode="light"]) .nav-header {
    background: rgba(250, 249, 245, 0.85);
  }

  .nav-inner {
    padding: 0 2rem;
    height: 60px;
    display: flex;
    align-items: center;
    gap: 2rem;
  }

  .nav-logo {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    text-decoration: none;
    color: var(--color-text);
    min-height: unset;
    flex-shrink: 0;
  }

  .nav-logo:hover {
    color: var(--color-text);
    opacity: 0.85;
  }

  .nav-wordmark {
    font-family: var(--font-heading);
    font-weight: 700;
    font-size: 1.1rem;
    letter-spacing: -0.02em;
    color: var(--color-text);
  }

  .nav-links {
    display: flex;
    align-items: center;
    gap: 0.25rem;
    list-style: none;
    margin: 0;
    padding: 0;
    flex: 1;
  }

  .nav-links a {
    color: var(--color-text-muted);
    font-family: var(--font-body);
    font-size: 0.875rem;
    font-weight: 500;
    text-decoration: none;
    padding: 0.4rem 0.75rem;
    border-radius: var(--radius-sm);
    transition:
      color 0.15s,
      background 0.15s;
    min-height: unset;
    display: block;
  }

  .nav-links a:hover {
    color: var(--color-text);
    background: var(--color-surface);
  }

  .nav-controls {
    display: flex;
    align-items: center;
    gap: 0.25rem;
    margin-left: auto;
  }

  .ctrl-btn {
    display: inline-flex;
    align-items: center;
    gap: 0.3rem;
    background: transparent;
    border: 1px solid var(--color-border);
    border-radius: var(--radius-sm);
    padding: 0.35rem 0.6rem;
    cursor: pointer;
    color: var(--color-text-muted);
    font-family: var(--font-mono);
    font-size: 0.75rem;
    min-height: 32px;
    transition:
      border-color 0.15s,
      color 0.15s;
  }

  .ctrl-btn:hover {
    border-color: var(--color-border-strong);
    color: var(--color-text);
  }

  .ctrl-label {
    line-height: 1;
  }

  /* Mobile menu button */
  .mobile-menu-btn {
    display: none;
    background: transparent;
    border: none;
    cursor: pointer;
    padding: 0.5rem;
    min-height: 44px;
    min-width: 44px;
    align-items: center;
    justify-content: center;
    color: var(--color-text-muted);
  }

  .hamburger,
  .hamburger::before,
  .hamburger::after {
    display: block;
    width: 20px;
    height: 2px;
    background: currentColor;
    border-radius: 1px;
    transition: transform 0.2s;
    position: relative;
  }

  .hamburger::before,
  .hamburger::after {
    content: "";
    position: absolute;
    left: 0;
  }

  .hamburger::before {
    top: -6px;
  }
  .hamburger::after {
    top: 6px;
  }

  .hamburger.open {
    background: transparent;
  }
  .hamburger.open::before {
    transform: rotate(45deg) translate(4px, 4px);
  }
  .hamburger.open::after {
    transform: rotate(-45deg) translate(4px, -4px);
  }

  .mobile-menu {
    border-top: 1px solid var(--color-border);
    background: var(--color-surface);
    padding: 0.75rem 1.5rem 1rem;
  }

  .mobile-menu ul {
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    gap: 0.25rem;
  }

  .mobile-menu a {
    display: block;
    padding: 0.6rem 0.5rem;
    color: var(--color-text-muted);
    font-family: var(--font-body);
    font-size: 0.9rem;
    font-weight: 500;
    text-decoration: none;
    border-radius: var(--radius-sm);
    min-height: 44px;
    align-items: center;
    display: flex;
  }

  .mobile-menu a:hover {
    color: var(--color-text);
    background: var(--color-surface-raised);
  }

  @media (max-width: 640px) {
    .nav-links {
      display: none;
    }
    .mobile-menu-btn {
      display: inline-flex;
    }
  }
</style>
