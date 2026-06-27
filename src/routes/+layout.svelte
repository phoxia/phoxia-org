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

{@render children()}
