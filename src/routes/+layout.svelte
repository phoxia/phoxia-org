<script lang="ts">
  import "../app.css";
  import { initTheme } from "$lib/theme/theme.svelte";
  import { getLang, initClientLang } from "$lib/i18n/i18n.svelte";

  let { children } = $props();

  $effect(() => {
    initTheme();
    initClientLang();
  });

  $effect(() => {
    document.documentElement.lang = getLang();
  });
</script>

<svelte:head>
  <meta property="og:site_name" content="Phoxia" />
  <meta property="og:image" content="https://phoxia.org/brand/og.png" />
  <meta property="og:image:width" content="1200" />
  <meta property="og:image:height" content="630" />
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:image" content="https://phoxia.org/brand/og.png" />
</svelte:head>

{@render children()}
