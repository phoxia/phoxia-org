<script lang="ts">
  import type { IconComponent } from "$lib/icons";
  import { t } from "$lib/i18n/i18n.svelte";

  let {
    icon: Icon,
    category,
  }: {
    icon: IconComponent;
    category: string;
  } = $props();

  let locale = $derived(t());
</script>

<div class="classified-card" aria-label="{category}: {locale.projectsPage.classifiedBadge}">
  <div class="card-header">
    <span class="icon-wrap" aria-hidden="true">
      <Icon size={18} strokeWidth={1.75} />
    </span>
    <span class="badge">{locale.projectsPage.classifiedBadge}</span>
  </div>

  <div class="card-body">
    <p class="category">{category}</p>
    <div class="redacted-name" aria-hidden="true">
      <span class="redact-block w-long"></span>
    </div>
    <div class="redacted-desc" aria-hidden="true">
      <span class="redact-block w-full"></span>
      <span class="redact-block w-med"></span>
      <span class="redact-block w-short"></span>
    </div>
  </div>

  <div class="card-footer">
    <span class="notify">{locale.projectsPage.classifiedNotify}</span>
  </div>
</div>

<style>
  .classified-card {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding: 1.25rem;
    border: 1px dashed var(--color-border-strong);
    border-radius: var(--radius-lg);
    background: var(--color-surface);
    transition: border-color 0.2s, box-shadow 0.2s;
    cursor: default;
    position: relative;
    overflow: hidden;
  }

  .classified-card::before {
    content: "";
    position: absolute;
    inset: 0;
    background: radial-gradient(
      circle at 50% 0%,
      rgba(109, 40, 217, 0.04) 0%,
      transparent 70%
    );
    pointer-events: none;
  }

  .classified-card:hover {
    border-color: var(--color-edge);
    box-shadow: 0 0 20px rgba(109, 40, 217, 0.12);
  }

  .card-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .icon-wrap {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 36px;
    height: 36px;
    border-radius: var(--radius-sm);
    background: var(--color-surface-raised);
    color: var(--color-text-faint);
    border: 1px solid var(--color-border);
  }

  .badge {
    font-family: var(--font-mono);
    font-size: 0.62rem;
    font-weight: 700;
    letter-spacing: 0.12em;
    color: var(--color-text-faint);
    background: var(--color-surface-raised);
    border: 1px solid var(--color-border);
    border-radius: var(--radius-sm);
    padding: 0.2rem 0.5rem;
    text-transform: uppercase;
  }

  .card-body {
    display: flex;
    flex-direction: column;
    gap: 0.6rem;
    flex: 1;
  }

  .category {
    font-family: var(--font-mono);
    font-size: 0.72rem;
    color: var(--color-text-muted);
    margin: 0;
    letter-spacing: 0.04em;
  }

  .redacted-name,
  .redacted-desc {
    display: flex;
    flex-direction: column;
    gap: 0.35rem;
    filter: blur(5px);
    user-select: none;
  }

  .redact-block {
    display: block;
    height: 14px;
    border-radius: 3px;
    background: var(--color-border-strong);
    opacity: 0.7;
  }

  .redacted-name .redact-block {
    height: 18px;
    background: var(--color-text-faint);
    opacity: 0.5;
  }

  .w-full { width: 100%; }
  .w-long { width: 72%; }
  .w-med  { width: 85%; }
  .w-short { width: 55%; }

  .card-footer {
    border-top: 1px solid var(--color-border);
    padding-top: 0.75rem;
    margin-top: auto;
  }

  .notify {
    font-family: var(--font-mono);
    font-size: 0.68rem;
    color: var(--color-text-faint);
  }
</style>
