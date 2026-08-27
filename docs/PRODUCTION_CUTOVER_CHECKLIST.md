# Production cutover checklist

## Purpose

This checklist records the steps required to make `https://criticadeguerrero.com.mx/` the public production home of Crítica de Guerrero while preserving a safe testing path and avoiding disruption to the legacy archive.

## Production-domain decision

- Canonical public domain: `https://criticadeguerrero.com.mx/`
- Canonical hostname: `criticadeguerrero.com.mx` (bare domain; no `www`)
- `www.criticadeguerrero.com.mx` must redirect permanently to `https://criticadeguerrero.com.mx/` while preserving paths.
- `criticaguerrero.com` is a temporary testing/staging address only. It must not appear in canonical tags, social metadata, site navigation, public-facing production links, sitemap entries, or editorial bylines.
- The Netlify `*.netlify.app` address remains suitable for deployment troubleshooting and preview work.

## Netlify and DNS

Complete these steps in the Netlify dashboard and at the DNS provider before declaring production ready.

- [ ] Add `criticadeguerrero.com.mx` to the current Netlify project.
- [ ] Add `www.criticadeguerrero.com.mx` to the same Netlify project.
- [ ] Set `criticadeguerrero.com.mx` as the Netlify primary domain.
- [ ] Configure `www.criticadeguerrero.com.mx` as a domain alias that redirects to the primary hostname.
- [ ] Confirm the registrar/DNS provider has the exact records Netlify requests for the apex and `www` hostnames.
- [ ] Confirm both domains are DNS-verified in Netlify.
- [ ] Confirm HTTPS certificates are active for both hostnames.
- [ ] Confirm production deploys are public and do not require a Netlify login or visitor password.
- [ ] Confirm Netlify publishes the `main` branch and the current deploy is successful.
- [ ] Test the production domain from an incognito/private browser session and a mobile device.

Do not depend on a repository redirect rule alone for hostname routing. Primary-domain and domain-alias configuration in Netlify controls the public hostname redirect.

## Repository and metadata

- [ ] In `index.html`, add a canonical tag pointing to `https://criticadeguerrero.com.mx/`.
- [ ] Add Open Graph metadata including `og:url`, `og:site_name`, `og:locale`, `og:type`, `og:title`, and `og:description`.
- [ ] Add compatible Twitter/X title, description, and card metadata.
- [ ] Retain Spanish-first metadata and `lang="es-MX"` on the document.
- [ ] Do not use a `criticaguerrero.com` URL in public production metadata.
- [ ] Add a production `robots.txt` after public-domain verification.
- [ ] Add a production `sitemap.xml` after content routes and canonical URLs are established.
- [ ] Add language-specific canonical and `hreflang` metadata when the planned `/es/` and `/en/` routes exist.

## Publishing readiness

- [ ] Add the future CMS entry point at `/admin/`.
- [ ] Enable Netlify Identity and Git Gateway, or document and implement the selected replacement authentication path.
- [ ] Restrict registration to invitation-only access.
- [ ] Create a separate editor account for the uncle; do not share GitHub, Netlify, registrar, DNS, analytics, or billing credentials.
- [ ] Configure fields for Spanish-first stories: title, summary, body, section, author, publication date, status, featured image, alt text, caption, credit, and rights.
- [ ] Test draft, preview, publish, correction, and unpublish workflows.
- [ ] Publish one real Spanish test article with rights-cleared image/media before importing historical content.
- [ ] Verify the published story has a stable URL, correct title/description, responsive image behavior, and social preview metadata.

## Preservation and migration

- [ ] Keep `old_index.html` unchanged as a legacy captured-page archive.
- [ ] Do not treat the captured legacy page as the active production site or source of executable configuration.
- [ ] Keep high-resolution originals and raw source media in private publication-controlled archival storage.
- [ ] Use optimized, rights-cleared derivatives for public delivery.
- [ ] Recover Wayback content gradually, validating the title, byline, publication date, body, captions, credits, image rights, and destination URL before republishing.
- [ ] Do not import an entire historical archive as part of immediate domain cutover.
- [ ] Maintain a URL inventory and add tested redirects for approved migrated legacy URLs.

## Security and continuity

- [ ] Keep `criticadeguerrero@gmail.com` as a recovery-capable institutional owner where appropriate.
- [ ] Enable auto-renewal, two-factor authentication, registrar lock, and at least two independent recovery contacts for the production domain.
- [ ] Record registrar, Netlify, GitHub, analytics, archive-storage, and backup ownership in the private operations record.
- [ ] Never commit passwords, recovery codes, API keys, tokens, billing information, or private account settings to GitHub.
- [ ] Review access, domain renewal dates, recovery contacts, and backup/export status at least twice each year.

## Production acceptance test

Before marking production ready, confirm all of the following:

1. `https://criticadeguerrero.com.mx/` loads the intended public homepage without authentication.
2. `https://www.criticadeguerrero.com.mx/` redirects permanently to the same path on the bare canonical domain.
3. The homepage canonical tag and `og:url` both use `https://criticadeguerrero.com.mx/`.
4. Netlify reports a successful deploy from `main` and active HTTPS for both production hostnames.
5. A non-developer editor can publish, correct, and unpublish one Spanish test article without repository or infrastructure credentials.
6. The legacy `old_index.html` remains preserved and no sensitive credentials are exposed in the repository.