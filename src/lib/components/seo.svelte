<script lang="ts">
  let {
    title,
    description,
    path,
    ogDescription = description,
    type = "website",
  }: {
    title: string;
    description: string;
    path: string;
    ogDescription?: string;
    type?: "website" | "article";
  } = $props();

  const fullTitle = $derived(`Phoxia • ${title}`);
  const url = $derived(`https://phoxia.org${path}`);
</script>

<svelte:head>
  <title>{fullTitle}</title>
  <meta name="description" content={description} />
  <meta property="og:title" content={fullTitle} />
  <meta property="og:description" content={ogDescription} />
  <meta property="og:url" content={url} />
  <meta property="og:type" content={type} />
  <meta name="twitter:title" content={fullTitle} />
  <meta name="twitter:description" content={ogDescription} />
  <link rel="canonical" href={url} />
</svelte:head>
