<script lang="ts">
  import type { IconComponent } from "$lib/icons";
  import { ArrowUpRight } from "$lib/icons";

  type Status = "live" | "launching" | "building" | "upcoming";

  let {
    name,
    description,
    icon: Icon,
    status,
    href,
    statusLabel,
  }: {
    name: string;
    description: string;
    icon: IconComponent;
    status: Status;
    href: string;
    statusLabel: string;
  } = $props();
</script>

<a
  {href}
  target="_blank"
  rel="noopener noreferrer"
  class="project-card"
  data-status={status}
  aria-label="{name}, {statusLabel}"
>
  <div class="card-header">
    <span class="card-icon" aria-hidden="true">
      <Icon size={20} strokeWidth={1.75} />
    </span>
    <span class="status-badge" data-status={status}>{statusLabel}</span>
  </div>

  <h3 class="card-name">{name}</h3>
  <p class="card-desc">{description}</p>

  <span class="card-arrow" aria-hidden="true">
    <ArrowUpRight size={16} strokeWidth={1.75} />
  </span>
</a>

<style>
  .project-card {
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
    padding: 1.5rem;
    background: var(--color-surface);
    border: 1px solid var(--color-border);
    border-radius: var(--radius-lg);
    text-decoration: none;
    color: var(--color-text);
    min-height: unset;
    position: relative;
    transition: border-color 0.2s, transform 0.2s;
  }

  .project-card:hover {
    border-color: var(--color-border-strong);
    transform: translateY(-2px);
  }

  .project-card:focus-visible {
    outline: 2px solid var(--color-accent);
    outline-offset: 2px;
  }

  .card-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 0.5rem;
  }

  .card-icon {
    display: flex;
    align-items: center;
    color: var(--color-accent);
  }

  .status-badge {
    font-family: var(--font-mono);
    font-size: 0.7rem;
    font-weight: 500;
    padding: 0.2rem 0.55rem;
    border-radius: 99px;
    line-height: 1.4;
    white-space: nowrap;
  }

  .status-badge[data-status="live"] {
    background: var(--status-live-bg);
    color: var(--status-live-text);
  }

  .status-badge[data-status="launching"] {
    background: var(--status-launching-bg);
    color: var(--status-launching-text);
  }

  .status-badge[data-status="building"] {
    background: var(--status-building-bg);
    color: var(--status-building-text);
  }

  .status-badge[data-status="upcoming"] {
    background: var(--status-upcoming-bg);
    color: var(--status-upcoming-text);
  }

  /* Color indicator on the card border (status not just a badge) */
  .project-card[data-status="live"] {
    border-top: 2px solid var(--color-success);
  }

  .project-card[data-status="launching"] {
    border-top: 2px solid var(--color-accent);
  }

  .project-card[data-status="building"] {
    border-top: 2px solid var(--color-edge);
  }

  .card-name {
    font-family: var(--font-heading);
    font-size: 1rem;
    font-weight: 700;
    color: var(--color-text);
    margin: 0;
    letter-spacing: -0.01em;
  }

  .card-desc {
    font-size: 0.85rem;
    color: var(--color-text-muted);
    margin: 0;
    line-height: 1.55;
    flex: 1;
  }

  .card-arrow {
    display: flex;
    align-items: center;
    color: var(--color-text-faint);
    align-self: flex-end;
    transition: color 0.15s, transform 0.15s;
  }

  .project-card:hover .card-arrow {
    color: var(--color-accent);
    transform: translate(2px, -2px);
  }
</style>
