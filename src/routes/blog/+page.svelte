<script lang="ts">
  import Nav from "$lib/components/nav.svelte";
  import Footer from "$lib/components/footer.svelte";
  import { ArrowRight } from "$lib/icons";
  import { t, getLang } from "$lib/i18n/i18n.svelte";

  let locale = $derived(t());
  let lang = $derived(getLang());

  type Post = {
    slug: string;
    date: string;
    minRead: number;
    title: { en: string; pt: string };
    excerpt: { en: string; pt: string };
  };

  const posts: Post[] = [
    {
      slug: "phoxia-tools-launch",
      date: "2026-07-01",
      minRead: 3,
      title: {
        en: "Phoxia Tools is live",
        pt: "Phoxia Tools está no ar",
      },
      excerpt: {
        en: "tools.phoxia.org is live. 19 tools that run entirely in your browser, no data sent anywhere.",
        pt: "tools.phoxia.org está no ar. 19 ferramentas que rodam inteiramente no seu navegador, sem enviar nenhum dado a lugar algum.",
      },
    },
    {
      slug: "phoxia-org-launch",
      date: "2026-06-27",
      minRead: 2,
      title: {
        en: "Phoxia.org is live",
        pt: "Phoxia.org está no ar",
      },
      excerpt: {
        en: "Today the site goes live. A brief note on why Phoxia exists and what comes next.",
        pt: "Hoje o site vai ao ar. Uma nota breve sobre por que a Phoxia existe e o que vem a seguir.",
      },
    },
  ];

  const displayDate = (iso: string) =>
    new Date(iso + "T12:00:00").toLocaleDateString(lang === "pt-BR" ? "pt-BR" : "en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
</script>

<svelte:head>
  <title>Phoxia • {locale.blog.title}</title>
  <meta name="description" content={locale.blog.subtitle} />
  <meta property="og:title" content="Phoxia • {locale.blog.title}" />
  <meta property="og:description" content={locale.blog.subtitle} />
  <meta property="og:url" content="https://phoxia.org/blog" />
  <meta property="og:type" content="website" />
  <meta name="twitter:title" content="Phoxia • {locale.blog.title}" />
  <meta name="twitter:description" content={locale.blog.subtitle} />
  <link rel="canonical" href="https://phoxia.org/blog" />
</svelte:head>

<Nav />

<main id="main-content">
  <section class="hero">
    <div class="hero-inner">
      <p class="eyebrow">phoxia.org</p>
      <h1 class="hero-title">{locale.blog.title}</h1>
      <p class="hero-subtitle">{locale.blog.subtitle}</p>
    </div>
  </section>

  <section class="posts">
    <div class="posts-inner">
      {#each posts as post (post.slug)}
        <article class="post-card">
          <div class="post-meta">
            <time datetime={post.date} class="post-date">{displayDate(post.date)}</time>
            <span class="post-sep" aria-hidden="true">·</span>
            <span class="post-read">{post.minRead} {locale.blog.minRead}</span>
          </div>
          <h2 class="post-title">
            <a href="/blog/{post.slug}" class="post-link">
              {lang === "pt-BR" ? post.title.pt : post.title.en}
            </a>
          </h2>
          <p class="post-excerpt">
            {lang === "pt-BR" ? post.excerpt.pt : post.excerpt.en}
          </p>
          <a
            href="/blog/{post.slug}"
            class="post-cta"
            aria-label={lang === "pt-BR" ? post.title.pt : post.title.en}
          >
            {locale.blog.readMore}
            <ArrowRight size={14} aria-hidden="true" />
          </a>
        </article>
      {/each}
    </div>
  </section>
</main>

<Footer />

<style>
  .hero {
    background: var(--color-bg);
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

  /* Posts */
  .posts {
    background: var(--color-bg);
    padding: 3rem 1.5rem 6rem;
  }

  .posts-inner {
    max-width: 720px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    gap: 0;
  }

  .post-card {
    padding: 2.5rem 0;
    border-bottom: 1px solid var(--color-border);
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
  }

  .post-meta {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }

  .post-date {
    font-family: var(--font-mono);
    font-size: 0.75rem;
    color: var(--color-text-faint);
  }

  .post-sep {
    color: var(--color-border-strong);
    font-size: 0.75rem;
  }

  .post-read {
    font-family: var(--font-mono);
    font-size: 0.75rem;
    color: var(--color-text-faint);
  }

  .post-title {
    font-family: var(--font-heading);
    font-size: clamp(1.25rem, 2.5vw, 1.6rem);
    font-weight: 700;
    color: var(--color-text);
    letter-spacing: -0.025em;
    margin: 0;
    line-height: 1.25;
  }

  .post-link {
    color: inherit;
    text-decoration: none;
    transition: color 0.15s;
  }

  .post-link:hover {
    color: var(--color-accent);
  }

  .post-excerpt {
    font-size: 0.9375rem;
    color: var(--color-text-muted);
    line-height: 1.7;
    margin: 0;
    max-width: 600px;
  }

  .post-cta {
    display: inline-flex;
    align-items: center;
    gap: 0.35rem;
    font-family: var(--font-mono);
    font-size: 0.78rem;
    color: var(--color-accent);
    text-decoration: none;
    margin-top: 0.25rem;
    transition: gap 0.15s;
  }

  .post-cta:hover {
    gap: 0.55rem;
  }
</style>
