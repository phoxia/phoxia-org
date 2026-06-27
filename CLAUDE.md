# phoxia-org — Site institucional

A cara pública da Phoxia. `phoxia.org` — landing page, princípios, blog, transparência e páginas legais.

## Stack

| Layer | Choice | Notes |
|-------|--------|-------|
| Frontend | SvelteKit 5 + adapter-static | Site totalmente estático |
| Estilo | CSS via `var(--*)` custom properties | Nunca Tailwind direto — só vars |
| Icons | `lucide-svelte` | Import direto; exportados via `$lib/icons.ts` |
| i18n | Manual (`$lib/i18n/`) | `getLang()` retorna `"en"` ou `"pt-BR"` |
| Blog | Svelte components | Sem mdsvex por ora; migração futura para `.md` |
| Deploy | Vercel (inicial) | `phoxia.org` com TLS |

## Páginas

```
phoxia.org/
├── /                         ← Landing: hero, features, projetos, princípios, CTA
├── /projects                 ← Todos os projetos com status
├── /transparency             ← Portal de transparência (revenue, custos, relatórios)
├── /blog                     ← Lista de posts
├── /blog/[slug]              ← Post individual (componente Svelte)
├── /contact                  ← E-mails de contato + widget Discord
├── /privacy                  ← Política de privacidade (LGPD/GDPR, bilíngue)
└── /terms                    ← Termos de uso (bilíngue)
```

## i18n

- Dois locales: `en-US.locales.ts` e `pt-BR.locales.ts`
- `types.ts` é o source of truth — toda chave nova vai nos três arquivos
- `getLang()` retorna `"en"` ou `"pt-BR"` — comparar sempre com `"pt-BR"`, nunca `"pt"`
- `document.documentElement.lang` é atualizado automaticamente via `$effect` no layout
- Detecção inicial via `navigator.language`, persistida em `localStorage`

## Convenções

- **CSS:** `var(--color-*)`, `var(--font-*)`, `var(--radius)` — nunca cor hardcoded
- **Tema:** `data-mode` no `<html>` (`light` | `dark`); `initTheme()` no layout
- **Ícones:** adicionar em `$lib/icons.ts` antes de usar; não importar direto de `lucide-svelte` nas páginas
- **Títulos:** padrão `Phoxia • Título da Página`
- **Sem em dash (`—`):** usar `,` para prosa fluida e `:` para listas/definições
- **Blog posts:** componente Svelte em `src/routes/blog/[slug]/+page.svelte`; conteúdo bilíngue via `isPT = $derived(lang === "pt-BR")`
- **Páginas legais:** usar `LegalPage` component de `$lib/components/legal-page.svelte`

## Commands

```bash
npm run dev       # dev server (port 5173)
npm run build     # production build (estático)
npm run preview   # preview do build
npm run check     # svelte-check
npm run lint      # eslint
npm run format    # prettier
```

## Variáveis de ambiente

Nenhuma no momento — site totalmente estático sem chamadas de backend.
