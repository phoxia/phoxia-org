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
    date: "2026-07-02",
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
    ? "Phoxia Tools está no ar em tools.phoxia.org. 18 ferramentas gratuitas para desenvolvedores que rodam inteiramente no seu navegador, sem enviar nenhum dado a lugar algum."
    : "Phoxia Tools is live at tools.phoxia.org. 18 free developer tools that run entirely in your browser, no data sent anywhere."}
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
          está no ar. 18 ferramentas para desenvolvedores, todas rodando inteiramente no seu navegador.
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
          validar JSON, decodificar JWTs, gerar hashes (SHA-256, SHA-512, SHA-1), gerar UUIDs
          v4, criar senhas configuráveis com medidor de entropia, testar expressões regulares,
          parsear comandos cURL, trabalhar com datas (timestamps Unix, expressões cron, cálculo de
          diferença entre datas, contagem regressiva), comparar dois textos lado a lado, e
          criptografar texto com AES-256-GCM direto no navegador.
        </p>

        <h2>Encoding e texto</h2>

        <p>
          Um toolbox unificado de encoding cobre Base64, URL, binário, código morse e hexadecimal,
          cada um com encode e decode. Um toolbox de texto agrupa conversão de case (camelCase,
          snake_case, kebab-case, PascalCase e mais), geração de slugs, contador de caracteres e
          palavras, inversão de texto, ordenação alfabética, remoção de linhas duplicadas, busca e
          substituição, e adição de prefixo/sufixo. Preview de Markdown completa o conjunto.
        </p>

        <h2>Aleatório e utilitários</h2>

        <p>
          Sorteador de lista, embaralhador, gerador de números aleatórios e dados de RPG (d4 a
          d100). Gerador de lorem ipsum configurável (parágrafos, frases ou palavras). Gerador de
          dados fictícios com suporte a 15 países, incluindo CPF, CNPJ, SSN, NINO, NIF e outros
          documentos locais.
        </p>

        <h2>Referência</h2>

        <p>
          Tabela completa de códigos de status HTTP com descrições em português e inglês, e
          visualizador de specs OpenAPI/Swagger. Para quando você precisa checar algo sem sair do
          fluxo de trabalho.
        </p>

        <h2>O que vem depois</h2>

        <p>
          Esta é a v2, com ferramentas consolidadas em toolboxes multi-funcionais (texto, encoding,
          data/hora, aleatório) e novas adições como cifra AES-256-GCM e lorem ipsum. Mais
          ferramentas virão, e algumas futuras podem precisar de um servidor para funcionar. Quando
          isso acontecer, será dito claramente.
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
          is live. 18 developer tools, all running entirely in your browser.
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
          decode JWTs, generate hashes (SHA-256, SHA-512, SHA-1), generate UUID v4, create
          configurable passwords with entropy meter, test regular expressions, parse cURL commands,
          work with dates (Unix timestamps, cron expressions, date difference, countdown timer),
          compare two texts side by side, and encrypt text with AES-256-GCM right in the browser.
        </p>

        <h2>Encoding and text</h2>

        <p>
          A unified encoding toolbox covers Base64, URL, binary, Morse code, and hexadecimal, each
          with encode and decode. A text toolbox groups case conversion (camelCase, snake_case,
          kebab-case, PascalCase, and more), slug generation, character and word counter, text
          reversal, alphabetical sorting, duplicate line removal, find and replace, and
          prefix/suffix. Markdown preview rounds out the set.
        </p>

        <h2>Random and utilities</h2>

        <p>
          List picker, shuffle, random number generator, and RPG dice (d4 through d100).
          Configurable lorem ipsum generator (paragraphs, sentences, or words). Fake data generator
          supporting 15 countries, including CPF, CNPJ, SSN, NINO, NIF, and other local document
          formats.
        </p>

        <h2>Reference</h2>

        <p>
          A full HTTP status code table with descriptions in both English and Portuguese, and an
          OpenAPI/Swagger spec viewer. For when you need to look something up without breaking your
          flow.
        </p>

        <h2>What comes next</h2>

        <p>
          This is v2, with tools consolidated into multi-function toolboxes (text, encoding,
          date/time, random) and new additions like AES-256-GCM cipher and lorem ipsum. More tools
          are planned, and some future ones may require a server to work. When that happens, it will
          be stated clearly.
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
