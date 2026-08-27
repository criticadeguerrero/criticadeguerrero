# Technical Architecture

## Current state

The repository currently contains one captured `index.html` file. It is not a complete WordPress site or a self-contained static application. The legacy source site uses WordPress/PHP and a database; copying browser-rendered HTML does not recover those systems.

## Architecture principle

Build a portable front end first. Keep content and layout separate so the site can begin as static content and later connect to an authorized WordPress export, WordPress REST API, headless CMS, or another editorial system.

## Recommended phased implementation

### Phase 1: Static front-page prototype

Use a modern static-site generator such as Astro, or plain semantic HTML/CSS/JavaScript if the team prefers a minimal toolchain. Build reusable components and content fixtures. Deploy previews to Netlify.

### Phase 2: Content workflow

Choose one of these paths after stakeholder review:

- Recover and maintain WordPress on PHP-capable hosting.
- Use WordPress as a headless CMS through its REST API.
- Use a Git-backed CMS such as Decap CMS for a static site.
- Use a hosted headless CMS if budget and editorial needs justify it.

### Phase 3: Authorized migration

Export WordPress posts, pages, authors, categories, media, and redirects. Validate article counts, media references, dates, author attribution, and canonical URLs before publication.

### Phase 4: Launch and monitoring

Set redirects, sitemap, robots directives, analytics, error monitoring, performance checks, and search-console verification.

## Hosting

- A static front end can deploy to Netlify.
- A traditional WordPress/PHP installation requires a PHP/MySQL-capable host; Netlify alone does not run it as a standard WordPress application.
- Do not place WordPress credentials, database exports, or configuration files in GitHub.

## Asset policy

- Store assets locally in `public/assets/` or use an approved media service.
- Use optimized modern formats when possible, with dimensions and responsive variants.
- Do not hotlink assets from the legacy site; this creates fragility and may violate ownership or hosting constraints.

## Performance baseline

- Serve responsive images with fixed dimensions to reduce layout shift.
- Minimize JavaScript for reading and navigation.
- Use static rendering for article pages where feasible.
- Test on low-bandwidth mobile connections.
- Avoid autoplay video and unnecessary third-party scripts.

## Security baseline

- Use HTTPS everywhere.
- Store secrets in deployment-provider environment variables, never in repository files.
- Use least-privilege accounts for CMS, DNS, hosting, and analytics.
- Enable backups and tested restoration procedures before migration.
- Add security headers and content-security policy after third-party needs are known.

## Migration validation checklist

- Verify imported post count against source export.
- Verify author and publication-date preservation.
- Crawl legacy URLs and map each important URL to a destination or documented retirement response.
- Check image links and alt text.
- Validate mobile layout, accessibility, metadata, sitemap, and structured data.
- Test a full content publish/update/unpublish workflow with an editor before launch.
