# phoxia-org

Public website for the Phoxia ecosystem — [phoxia.org](https://phoxia.org)

Landing page, principles, transparency portal, blog, and legal pages. Built with SvelteKit, fully static, bilingual (EN + PT-BR).

## Stack

- **Framework:** SvelteKit 5 (Svelte runes) + `@sveltejs/adapter-static`
- **Styling:** CSS custom properties (`var(--*)`) — no Tailwind
- **Icons:** `lucide-svelte`
- **i18n:** custom locale system (`src/lib/i18n/`)
- **Deploy:** Vercel

## Development

```bash
npm install
npm run dev       # http://localhost:5173
npm run build     # static output in /build
npm run check     # type-check
```

## Pages

| Route | Description |
|-------|-------------|
| `/` | Landing page |
| `/projects` | All projects with status |
| `/transparency` | Revenue, costs, and monthly reports |
| `/blog` | Blog post list |
| `/blog/[slug]` | Individual post |
| `/contact` | Contact emails + Discord community |
| `/privacy` | Privacy policy (LGPD/GDPR) |
| `/terms` | Terms of service |

## License

[AGPLv3](./LICENSE)
