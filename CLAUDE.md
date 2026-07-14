# phoxia-org — Institutional website

Extends the workspace [CLAUDE.md](../CLAUDE.md).

Phoxia's public face. `phoxia.org` — landing page, principles, blog, transparency, and legal pages.

## Stack

| Layer    | Choice                               | Notes                                        |
| -------- | ------------------------------------ | -------------------------------------------- |
| Frontend | SvelteKit 5 + adapter-static         | Fully static site                            |
| Style    | CSS via `var(--*)` custom properties | Never raw Tailwind — only vars               |
| Icons    | `lucide-svelte`                      | Direct import; exported via `$lib/icons.ts`  |
| i18n     | Manual (`$lib/i18n/`)                | `getLang()` returns `"en"` or `"pt-BR"`      |
| Blog     | Svelte components                    | No mdsvex for now; future migration to `.md` |
| Deploy   | Vercel (initial)                     | `phoxia.org` with TLS                        |

## Pages

```
phoxia.org/
├── /                         ← Landing: hero, features, projects, principles, CTA
├── /projects                 ← All projects with status
├── /transparency             ← Transparency portal (revenue, costs, reports)
├── /blog                     ← Post list
├── /blog/[slug]              ← Individual post (Svelte component)
├── /contact                  ← Contact emails + Discord widget
├── /privacy                  ← Privacy policy (LGPD/GDPR, bilingual)
└── /terms                    ← Terms of use (bilingual)
```

## i18n

- Two locales: `en-US.locales.ts` and `pt-BR.locales.ts`
- `types.ts` is the source of truth — every new key goes in all three files
- `getLang()` returns `"en"` or `"pt-BR"` — always compare against `"pt-BR"`, never `"pt"`
- `document.documentElement.lang` updated automatically via `$effect` in layout
- Initial detection via `navigator.language`, persisted to `localStorage`
- Use `$derived(getLang())` (not `$state`) when you need a local variable that must react to `initClientLang()` firing after hydration

## Conventions

- **CSS:** `var(--color-*)`, `var(--font-*)`, `var(--radius)` — never hardcoded colors
- **Theme:** `data-mode` on `<html>` (`light` | `dark`); `initTheme()` in layout
- **Icons:** add to `$lib/icons.ts` before use; never import directly from `lucide-svelte` in pages
- **Titles:** pattern `Phoxia • Page Title`
- **No em dash (`—`):** use `,` for flowing prose and `:` for lists/definitions
- **Blog posts:** Svelte component at `src/routes/blog/[slug]/+page.svelte`; bilingual content via `isPT = $derived(lang === "pt-BR")`
- **Legal pages:** use `LegalPage` component from `$lib/components/legal-page.svelte`

## Commands

```bash
npm run dev       # dev server (port 5173)
npm run build     # production build (static)
npm run preview   # preview build
npm run check     # svelte-check
npm run lint      # eslint
npm run format    # prettier
```

## Environment variables

None — fully static site with no backend calls.

<!-- PHOXIA-DEVKIT:START -->
# Phoxia open-source development profile

- Project instructions, accepted RFCs, schemas and tests are authoritative.
- Products own their domains and private persistence.
- Cross-domain integration uses versioned APIs, commands or Pulse events.
- Pulse consumers are idempotent and projections are rebuildable.
- Events record completed facts. Commands request intent.
- Security, privacy, accessibility, cost and observability are architecture requirements.
- Open-source readiness, community documentation and license compatibility are part of completion.
- Use `Phoxia • Page` for page titles.
- Avoid em dashes in normal product copy.
- Prefer `web`, `api`, `mobile`, `worker`, `cli` and `docs` for application names.

## Project context

- Name: phoxia-org
- Purpose: Public bilingual website and transparency portal for the Phoxia ecosystem.
- Repository visibility: public
- Documentation visibility: public
- Distribution model: open-source

## DevKit workflows

- Inspect `.phoxia/project.yaml` before material changes.
- Use the vendored Phoxia skills for development, project, release, documentation, UI and handoff workflows.
- Preserve user-owned instructions outside the managed block.
- A public version manifest change requires a changelog entry.
- A user-facing contract or behavior change requires documentation.
- Use a Feature Record for a significant capability, an ADR for an important local technical decision, and RFC analysis for cross-domain or governance changes.
- Run `/phoxia-devkit` to review DevKit configuration.
<!-- PHOXIA-DEVKIT:END -->
