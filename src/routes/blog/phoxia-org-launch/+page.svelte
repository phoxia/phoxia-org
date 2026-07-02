<script lang="ts">
  import Nav from "$lib/components/nav.svelte";
  import Footer from "$lib/components/footer.svelte";
  import Seo from "$lib/components/seo.svelte";
  import { t, getLang } from "$lib/i18n/i18n.svelte";

  let locale = $derived(t());
  let lang = $derived(getLang());

  const isPT = $derived(lang === "pt-BR");

  const meta = {
    slug: "phoxia-org-launch",
    date: "2026-06-27",
    author: "Dev Luch",
    title: {
      en: "Phoxia.org is live",
      pt: "Phoxia.org está no ar",
    },
  };

  const displayDate = $derived(
    new Date(meta.date + "T12:00:00").toLocaleDateString(isPT ? "pt-BR" : "en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    })
  );
</script>

<Seo
  title={isPT ? meta.title.pt : meta.title.en}
  description={isPT
    ? "Hoje o phoxia.org vai ao ar. Uma nota breve sobre por que a Phoxia existe e o que vem a seguir."
    : "Today phoxia.org goes live. A brief note on why Phoxia exists and what comes next."}
  path="/blog/phoxia-org-launch"
  type="article"
/>

<Nav />

<main id="main-content">
  <article class="post">
    <!-- Header -->
    <header class="post-header">
      <a href="/blog" class="back-link">{locale.blog.backToBlog}</a>
      <h1 class="post-title">{isPT ? meta.title.pt : meta.title.en}</h1>
      <div class="post-meta">
        <time datetime={meta.date}>{displayDate}</time>
        <span aria-hidden="true">·</span>
        <span>{locale.blog.writtenBy} {meta.author}</span>
        <span aria-hidden="true">·</span>
        <span>2 {locale.blog.minRead}</span>
      </div>
      <hr class="post-divider" />
    </header>

    <!-- Content -->
    <div class="post-body">
      {#if isPT}
        <p>Hoje o <strong>phoxia.org</strong> está no ar.</p>

        <p>
          Não tem muito o que dizer além disso, mas tem bastante o que mostrar. A Phoxia existe
          porque acredito que software pode ser construído de forma diferente: aberto por padrão,
          transparente nas decisões, sustentável no longo prazo. Não como slogan em landing page,
          mas como prática real.
        </p>

        <h2>O que está sendo construído</h2>

        <p>Três projetos estão em andamento agora:</p>

        <ul>
          <li>
            <strong>phoxia-tools</strong>: ferramentas para desenvolvedores, chegando em breve.
          </li>
          <li>
            <strong>phoxia-id</strong>: autenticação com passkeys, PKCE e JWT RS256. A base de
            identidade de todo o ecossistema.
          </li>
          <li>
            <strong>phoxia-watch</strong>: monitoramento de saúde e uptime, com alertas e histórico.
          </li>
        </ul>

        <p>
          Tudo AGPLv3. Tudo auditável. O código de qualquer projeto que publiquemos é público por
          padrão. Não existe versão "enterprise fechada" aqui.
        </p>

        <h2>Transparência de verdade</h2>

        <p>
          A <a href="/transparency">página de transparência</a> existe mas ainda não tem números
          reais. Ela vai ter quando houver receita real para reportar. Prefiro um <code>—</code> honesto
          a um número fabricado.
        </p>

        <h2>O que vem a seguir</h2>

        <p>
          Mais projetos vão ser revelados conforme ficam prontos. O plano é construir ferramentas
          úteis para desenvolvedores e para o público em geral, sempre com o código aberto e as
          contas abertas.
        </p>

        <p>
          Se quiser acompanhar de perto, o
          <a href="https://github.com/phoxia" target="_blank" rel="noopener noreferrer">GitHub</a>
          é o melhor lugar. Se quiser conversar, a comunidade no
          <a href="https://discord.gg/HD2p367Zb5" target="_blank" rel="noopener noreferrer"
            >Discord</a
          >
          está aberta.
        </p>

        <p class="sign-off">- Dev Luch</p>
      {:else}
        <p>Today, <strong>phoxia.org</strong> is live.</p>

        <p>
          There isn't much to say beyond that, but there's plenty to show. Phoxia exists because I
          believe software can be built differently: open by default, transparent in decisions,
          sustainable over the long run. Not as a landing page slogan, but as real practice.
        </p>

        <h2>What's being built</h2>

        <p>Three projects are in progress right now:</p>

        <ul>
          <li><strong>phoxia-tools</strong>: developer tools, launching soon.</li>
          <li>
            <strong>phoxia-id</strong>: passkey-first auth with PKCE and JWT RS256. The identity
            layer for the whole ecosystem.
          </li>
          <li>
            <strong>phoxia-watch</strong>: health checks and uptime monitoring, with alerts and
            history.
          </li>
        </ul>

        <p>
          Everything AGPLv3. Everything auditable. Any project we publish is public by default.
          There's no "closed enterprise edition" here.
        </p>

        <h2>Real transparency</h2>

        <p>
          The <a href="/transparency">transparency page</a> exists but has no real numbers yet. It
          will, once there's real revenue to report. I'd rather show an honest <code>—</code> than a
          fabricated number.
        </p>

        <h2>What comes next</h2>

        <p>
          More projects will be revealed as they get ready. The plan is to build useful tools for
          developers and general audiences alike, always with the code open and the books open.
        </p>

        <p>
          If you want to follow along,
          <a href="https://github.com/phoxia" target="_blank" rel="noopener noreferrer">GitHub</a>
          is the best place. If you want to talk, the
          <a href="https://discord.gg/HD2p367Zb5" target="_blank" rel="noopener noreferrer"
            >Discord community</a
          >
          is open.
        </p>

        <p class="sign-off">- Dev Luch</p>
      {/if}
    </div>

    <footer class="post-footer">
      <a href="/blog" class="back-link">{locale.blog.backToBlog}</a>
    </footer>
  </article>
</main>

<Footer />

<style>
  .post {
    max-width: 680px;
    margin: 0 auto;
    padding: 3.5rem 1.5rem 6rem;
  }

  /* Header */
  .back-link {
    display: inline-block;
    font-family: var(--font-mono);
    font-size: 0.75rem;
    color: var(--color-text-faint);
    text-decoration: none;
    margin-bottom: 2rem;
    transition: color 0.15s;
  }

  .back-link:hover {
    color: var(--color-text-muted);
  }

  .post-title {
    font-family: var(--font-heading);
    font-size: clamp(1.75rem, 4vw, 2.5rem);
    font-weight: 700;
    color: var(--color-text);
    letter-spacing: -0.03em;
    line-height: 1.15;
    margin: 0 0 1rem;
  }

  .post-meta {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    font-family: var(--font-mono);
    font-size: 0.75rem;
    color: var(--color-text-faint);
    flex-wrap: wrap;
  }

  .post-divider {
    border: none;
    border-top: 1px solid var(--color-border);
    margin: 1.75rem 0 0;
  }

  /* Body */
  .post-body {
    padding-top: 2rem;
    font-family: var(--font-body);
    font-size: 1rem;
    line-height: 1.85;
    color: var(--color-text-muted);
  }

  .post-body :global(p) {
    margin: 0 0 1.4rem;
  }

  .post-body :global(h2) {
    font-family: var(--font-heading);
    font-size: 1.15rem;
    font-weight: 700;
    color: var(--color-text);
    letter-spacing: -0.02em;
    margin: 2.25rem 0 0.75rem;
  }

  .post-body :global(ul) {
    padding-left: 1.25rem;
    margin: 0 0 1.4rem;
    display: flex;
    flex-direction: column;
    gap: 0.4rem;
  }

  .post-body :global(li) {
    line-height: 1.7;
  }

  .post-body :global(strong) {
    color: var(--color-text);
    font-weight: 600;
  }

  .post-body :global(a) {
    color: var(--color-accent);
    text-decoration: underline;
    text-underline-offset: 3px;
    text-decoration-thickness: 1px;
    transition: opacity 0.15s;
  }

  .post-body :global(a:hover) {
    opacity: 0.8;
  }

  .post-body :global(code) {
    font-family: var(--font-mono);
    font-size: 0.875em;
    background: var(--color-surface);
    border: 1px solid var(--color-border);
    border-radius: 3px;
    padding: 0.1em 0.4em;
    color: var(--color-text);
  }

  .sign-off {
    margin-top: 2.5rem !important;
    font-style: italic;
    color: var(--color-text-faint) !important;
  }

  /* Footer */
  .post-footer {
    margin-top: 4rem;
    padding-top: 1.5rem;
    border-top: 1px solid var(--color-border);
  }
</style>
