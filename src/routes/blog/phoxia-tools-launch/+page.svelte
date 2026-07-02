<script lang="ts">
  import Nav from "$lib/components/nav.svelte";
  import Footer from "$lib/components/footer.svelte";
  import Seo from "$lib/components/seo.svelte";
  import { t, getLang } from "$lib/i18n/i18n.svelte";

  let locale = $derived(t());
  let lang = $derived(getLang());

  const isPT = $derived(lang === "pt-BR");

  const meta = {
    slug: "phoxia-tools-launch",
    date: "2026-07-01",
    author: "Dev Luch",
    title: {
      en: "Phoxia Tools is live",
      pt: "Phoxia Tools está no ar",
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
    ? "Phoxia Tools está no ar em tools.phoxia.org. 19 ferramentas gratuitas para desenvolvedores que rodam inteiramente no seu navegador, sem enviar nenhum dado a lugar algum."
    : "Phoxia Tools is live at tools.phoxia.org. 19 free developer tools that run entirely in your browser, no data sent anywhere."}
  path="/blog/phoxia-tools-launch"
  type="article"
/>

<Nav />

<main id="main-content">
  <article class="post">
    <header class="post-header">
      <a href="/blog" class="back-link">{locale.blog.backToBlog}</a>
      <h1 class="post-title">{isPT ? meta.title.pt : meta.title.en}</h1>
      <div class="post-meta">
        <time datetime={meta.date}>{displayDate}</time>
        <span aria-hidden="true">·</span>
        <span>{locale.blog.writtenBy} {meta.author}</span>
        <span aria-hidden="true">·</span>
        <span>3 {locale.blog.minRead}</span>
      </div>
      <hr class="post-divider" />
    </header>

    <div class="post-body">
      {#if isPT}
        <p>
          <a href="https://tools.phoxia.org" target="_blank" rel="noopener noreferrer"
            >tools.phoxia.org</a
          >
          está no ar. 19 ferramentas para desenvolvedores, todas rodando inteiramente no seu navegador.
        </p>

        <h2>Sem servidor, sem logs</h2>

        <p>
          Tudo processa localmente. Quando você cola um JWT, um CPF ou um JSON, o dado não sai da
          sua máquina. Não existe servidor recebendo sua entrada, não existe log de uso, não existe
          telemetria ativa por padrão.
        </p>

        <p>
          O banner de consentimento que aparece na primeira visita é opcional. Se você aceitar, o
          Google Analytics registra quais ferramentas são mais acessadas, sem nenhum dado de
          conteúdo. Isso ajuda a comunidade diretamente: as ferramentas mais usadas são priorizadas,
          as menos usadas são revisadas ou substituídas. Não é obrigação, mas faz diferença.
        </p>

        <h2>Ferramentas para desenvolvimento</h2>

        <p>
          A categoria principal cobre o que você abre uma aba no navegador para fazer: formatar e
          validar JSON, decodificar JWTs, gerar hashes (MD5, SHA-1, SHA-256, SHA-512), gerar UUIDs
          v4, criar senhas configuráveis, testar expressões regulares, parsear comandos cURL,
          descrever expressões cron em linguagem natural, converter timestamps Unix e comparar dois
          textos lado a lado. Tudo o que você normalmente colaria num site aleatório.
        </p>

        <h2>Manipulação de texto</h2>

        <p>
          Encode e decode de Base64, encode e decode de URL, conversão entre formatos de
          nomenclatura (camelCase, snake_case, kebab-case, PascalCase e outros), geração de slugs e
          preview de Markdown. Pequenos utilitários que aparecem várias vezes por dia.
        </p>

        <h2>Referência</h2>

        <p>
          Tabela completa de códigos de status HTTP com descrições e visualizador de specs
          OpenAPI/Swagger. Para quando você precisa checar algo sem sair do fluxo de trabalho.
        </p>

        <h2>Para devs brasileiros</h2>

        <p>
          A maioria das coleções de ferramentas para desenvolvedores ignora completamente quem
          programa em português. Aqui tem três utilitários que não aparecem em quase nenhum toolkit
          internacional: validador e gerador de CPF, validador e gerador de CNPJ, e um gerador de
          dados falsos brasileiros realistas (nomes, endereços, telefones, e-mails no formato
          certo). Essas três ferramentas são pt-BR primeiro.
        </p>

        <h2>O que vem a seguir</h2>

        <p>
          Esta é a v1. Mais ferramentas estão planejadas, e algumas futuras podem precisar de um
          servidor para funcionar. Quando isso acontecer, será dito claramente. A direção é integrar
          as ferramentas de forma mais natural ao fluxo de trabalho do desenvolvedor, não apenas
          oferecer mais uma coleção de abas para abrir.
        </p>

        <p>
          Acesse em
          <a href="https://tools.phoxia.org" target="_blank" rel="noopener noreferrer"
            >tools.phoxia.org</a
          >. O código está no
          <a href="https://github.com/phoxia/phoxia-tools" target="_blank" rel="noopener noreferrer"
            >GitHub</a
          >.
        </p>

        <p class="sign-off">- Dev Luch</p>
      {:else}
        <p>
          <a href="https://tools.phoxia.org" target="_blank" rel="noopener noreferrer"
            >tools.phoxia.org</a
          >
          is live. 19 developer tools, all running entirely in your browser.
        </p>

        <h2>No server, no logs</h2>

        <p>
          Everything processes locally. When you paste a JWT, a CPF, or a JSON payload, that data
          never leaves your machine. There is no server receiving your input, no usage log, no
          telemetry active by default.
        </p>

        <p>
          The consent banner that appears on first visit is optional. If you accept, Google
          Analytics records which tools are accessed most, with no content data whatsoever. This
          helps the community directly: the most-used tools get prioritized, the least-used ones get
          revisited or replaced. It is not required, but it makes a difference.
        </p>

        <h2>Developer tools</h2>

        <p>
          The main category covers what you open a browser tab to do: format and validate JSON,
          decode JWTs, generate hashes (MD5, SHA-1, SHA-256, SHA-512), generate UUID v4, create
          configurable passwords, test regular expressions, parse cURL commands, describe cron
          expressions in plain English, convert Unix timestamps, and compare two texts side by side.
          Everything you would otherwise paste into some random site.
        </p>

        <h2>Text utilities</h2>

        <p>
          Base64 encode/decode, URL encode/decode, case conversion (camelCase, snake_case,
          kebab-case, PascalCase, and more), slug generation, and Markdown preview. Small utilities
          that come up multiple times a day.
        </p>

        <h2>Reference</h2>

        <p>
          A full HTTP status code table with descriptions and an OpenAPI/Swagger spec viewer. For
          when you need to look something up without breaking your flow.
        </p>

        <h2>For Brazilian devs</h2>

        <p>
          Most developer tool collections completely ignore Portuguese-speaking developers. Here are
          three utilities that show up in almost no international toolkit: a CPF validator and
          generator, a CNPJ validator and generator, and a Brazilian fake data generator with
          realistic names, addresses, phone numbers, and properly formatted emails. These three
          tools are pt-BR first.
        </p>

        <h2>What comes next</h2>

        <p>
          This is v1. More tools are planned, and some future ones may require a server to work.
          When that happens, it will be stated clearly. The direction is to make the tools fit more
          naturally into a developer's daily workflow, not just offer another collection of tabs to
          open.
        </p>

        <p>
          Live at
          <a href="https://tools.phoxia.org" target="_blank" rel="noopener noreferrer"
            >tools.phoxia.org</a
          >. Code on
          <a href="https://github.com/phoxia/phoxia-tools" target="_blank" rel="noopener noreferrer"
            >GitHub</a
          >.
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

  .sign-off {
    margin-top: 2.5rem !important;
    font-style: italic;
    color: var(--color-text-faint) !important;
  }

  .post-footer {
    margin-top: 4rem;
    padding-top: 1.5rem;
    border-top: 1px solid var(--color-border);
  }
</style>
