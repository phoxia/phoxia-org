import type { RequestHandler } from "@sveltejs/kit";

const routes = [
  { path: "", priority: "1.0" },
  { path: "blog", priority: "0.8" },
  { path: "blog/phoxia-org-launch", priority: "0.7" },
  { path: "contact", priority: "0.5" },
  { path: "privacy", priority: "0.5" },
  { path: "projects", priority: "0.8" },
  { path: "terms", priority: "0.5" },
  { path: "transparency", priority: "0.9" },
];

export const prerender = true;

export const GET: RequestHandler = () => {
  const urls = routes
    .map(
      ({ path, priority }) =>
        `  <url>\n    <loc>https://phoxia.org/${path}</loc>\n    <priority>${priority}</priority>\n  </url>`
    )
    .join("\n");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>
`;

  return new Response(xml, {
    headers: { "Content-Type": "application/xml" },
  });
};
