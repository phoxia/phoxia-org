<script lang="ts">
  import { Github } from "$lib/icons";
  import { t } from "$lib/i18n/i18n.svelte";

  let locale = $derived(t());
</script>

<footer class="footer">
  <div class="footer-inner">

    <!-- ── TOP ── -->
    <div class="footer-top">

      <!-- Brand -->
      <div class="footer-brand">
        <a href="/" class="footer-logo" aria-label="Phoxia, home">
          <img src="/brand/symbol.png" alt="" width="22" height="22" aria-hidden="true" />
          <span>Phoxia</span>
        </a>
      </div>

      <!-- Links -->
      <nav class="footer-links" aria-label="Footer navigation">
        <a href="/transparency">{locale.footer.links.transparency}</a>
        <a href="/contact">{locale.footer.links.contact}</a>
        <a href="/privacy">{locale.footer.links.privacy}</a>
        <a href="/terms">{locale.footer.links.terms}</a>
      </nav>

    </div>

    <!-- ── BOTTOM ── -->
    <div class="footer-bottom">
      <div class="footer-copy">
        <span class="copy-symbol">©</span>
        <span class="copy-year">{new Date().getFullYear()}</span>
        <span class="copy-name">Phoxia</span>
        <span class="copy-sep" aria-hidden="true">·</span>
        <span class="copy-license">{locale.footer.legal}</span>
      </div>

      <div class="footer-external">
        <a
          href="https://discord.gg/HD2p367Zb5"
          target="_blank"
          rel="noopener noreferrer"
          class="external-link"
          aria-label="Phoxia on Discord"
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057c.002.022.015.043.03.056a19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128c.126-.094.252-.192.372-.292a.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.1.246.198.373.292a.077.077 0 0 1-.006.127 12.3 12.3 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/>
          </svg>
          {locale.footer.links.discord}
        </a>
        <a
          href="https://github.com/phoxia"
          target="_blank"
          rel="noopener noreferrer"
          class="external-link"
          aria-label="Phoxia on GitHub"
        >
          <Github size={14} aria-hidden="true" />
          {locale.footer.links.github}
        </a>
      </div>
    </div>

  </div>
</footer>

<style>
  .footer {
    border-top: 1px solid var(--color-border);
    background: var(--color-bg);
    padding: 1.5rem;
  }

  .footer-inner {
    max-width: 1120px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    gap: 1.25rem;
  }

  /* ── Top ── */
  .footer-top {
    display: flex;
    align-items: center;
    gap: 1.5rem;
  }

  .footer-brand {
    flex: 0 0 65%;
    display: flex;
    flex-direction: column;
    gap: 0.55rem;
  }

  .footer-links {
    flex: 1;
  }

  .footer-logo {
    display: inline-flex;
    align-items: center;
    gap: 0.4rem;
    font-family: var(--font-heading);
    font-weight: 700;
    font-size: 0.95rem;
    color: var(--color-text);
    text-decoration: none;
    letter-spacing: -0.02em;
  }

  .footer-logo:hover { opacity: 0.75; }

  /* Links — 2 col grid */
  .footer-links {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;
  }

  .footer-links a {
    font-size: 0.8rem;
    color: var(--color-text-muted);
    text-decoration: none;
    white-space: nowrap;
    transition: color 0.15s;
  }

  .footer-links a:hover { color: var(--color-text); }

  /* ── Bottom ── */
  .footer-bottom {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-top: 1.5rem;
    border-top: 1px solid var(--color-border);
    gap: 1rem;
    flex-wrap: wrap;
  }

  .footer-copy {
    display: flex;
    align-items: baseline;
    gap: 0.35rem;
  }

  .copy-symbol {
    font-size: 0.78rem;
    color: var(--color-text-muted);
    font-family: var(--font-body);
  }

  .copy-year {
    font-family: var(--font-mono);
    font-size: 0.72rem;
    color: var(--color-text-muted);
  }

  .copy-name {
    font-family: var(--font-heading);
    font-size: 0.78rem;
    font-weight: 600;
    color: var(--color-text-muted);
    letter-spacing: -0.01em;
  }

  .copy-sep {
    color: var(--color-border-strong);
    font-size: 0.72rem;
  }

  .copy-license {
    font-family: var(--font-mono);
    font-size: 0.68rem;
    color: var(--color-text-faint);
    letter-spacing: 0.01em;
  }

  .footer-external {
    display: flex;
    align-items: center;
    gap: 1.25rem;
  }

  .external-link {
    display: inline-flex;
    align-items: center;
    gap: 0.35rem;
    font-family: var(--font-mono);
    font-size: 0.72rem;
    color: var(--color-text-faint);
    text-decoration: none;
    transition: color 0.15s;
  }

  .external-link:hover { color: var(--color-text-muted); }

  /* ── Responsive ── */
  @media (max-width: 600px) {
    .footer-top {
      flex-direction: column;
      align-items: center;
      gap: 1.25rem;
    }

    .footer-brand {
      flex: none;
    }

    .footer-links {
      width: 100%;
      justify-content: center;
      gap: 1rem;
      flex-wrap: wrap;
    }

    .footer-bottom {
      flex-direction: column;
      align-items: center;
      text-align: center;
    }
  }
</style>
