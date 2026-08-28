# SEO and social metadata plan

## Purpose

This document defines how Crítica de Guerrero will identify its official pages to search engines, social platforms, and readers.

The canonical production address is:

`https://criticadeguerrero.com.mx/`

The site is Spanish-first and serves Guerrero, Mexico.

## Current status

- [x] Production domain decision documented.
- [ ] Homepage canonical metadata added.
- [ ] Open Graph metadata added.
- [ ] Twitter/X card metadata added.
- [ ] `robots.txt` added.
- [ ] `sitemap.xml` added.
- [ ] Article-level metadata templates added.
- [ ] Language-specific `hreflang` metadata added.

## Canonical URL rules

### Homepage

The homepage must identify itself with this exact canonical URL:

```html
<link rel="canonical" href="https://criticadeguerrero.com.mx/" />
```

The canonical URL must:

- Use HTTPS.
- Use the bare `.com.mx` hostname.
- End with a trailing slash on the homepage.
- Not include tracking parameters such as `utm_source`.
- Not use `criticaguerrero.com`, `www.criticadeguerrero.com.mx`, or a Netlify subdomain.

### Future article pages

Every published article must have a self-referential canonical URL.

Example:

```html
<link
  rel="canonical"
  href="https://criticadeguerrero.com.mx/es/noticias/ejemplo-de-nota/"
/>
```

A category page, author page, and static information page must also have its own canonical URL.

Do not point every page to the homepage. Each distinct public page needs its own canonical address.

## Homepage metadata

Add the following metadata to the `<head>` of `index.html` when the domain is confirmed live:

```html
<meta
  name="description"
  content="Crítica de Guerrero: información general de acontecimientos en Guerrero y Acapulco."
/>
<link rel="canonical" href="https://criticadeguerrero.com.mx/" />

<meta
  property="og:title"
  content="Crítica de Guerrero | Información General de Acontecimientos"
/>
<meta
  property="og:description"
  content="Crítica de Guerrero: información general de acontecimientos en Guerrero y Acapulco."
/>
<meta property="og:url" content="https://criticadeguerrero.com.mx/" />
<meta property="og:site_name" content="Crítica de Guerrero" />
<meta property="og:locale" content="es_MX" />
<meta property="og:type" content="website" />

<meta name="twitter:card" content="summary" />
<meta
  name="twitter:title"
  content="Crítica de Guerrero | Información General de Acontecimientos"
/>
<meta
  name="twitter:description"
  content="Crítica de Guerrero: información general de acontecimientos en Guerrero y Acapulco."
/>
```

When an approved brand/social image exists, add:

```html
<meta
  property="og:image"
  content="https://criticadeguerrero.com.mx/assets/images/social/homepage.jpg"
/>
<meta
  property="og:image:alt"
  content="Crítica de Guerrero: información general de acontecimientos en Guerrero y Acapulco."
/>
<meta
  name="twitter:image"
  content="https://criticadeguerrero.com.mx/assets/images/social/homepage.jpg"
/>
```

Do not add an `og:image` until the referenced image actually exists, is public, and is approved for reuse.

## Article metadata requirements

Each article should eventually provide:

- A unique `<title>` with the story title and publication name.
- A story-specific meta description.
- A self-referential canonical URL.
- `og:type="article"`.
- `og:title`, `og:description`, `og:url`, and `og:site_name`.
- A rights-cleared social image with meaningful `og:image:alt`.
- Article publication and update timestamps.
- Article section/category.
- Author name where applicable.

Example concept:

```html
<title>Titular de la nota | Crítica de Guerrero</title>
<meta name="description" content="Resumen breve y verificable de la nota." />
<link
  rel="canonical"
  href="https://criticadeguerrero.com.mx/es/noticias/slug-de-la-nota/"
/>

<meta property="og:type" content="article" />
<meta property="og:title" content="Titular de la nota" />
<meta property="og:description" content="Resumen breve y verificable de la nota." />
<meta
  property="og:url"
  content="https://criticadeguerrero.com.mx/es/noticias/slug-de-la-nota/"
/>
<meta property="article:published_time" content="2026-08-28T10:00:00-06:00" />
<meta property="article:modified_time" content="2026-08-28T12:00:00-06:00" />
<meta property="article:section" content="Guerrero" />
```

## Language and future bilingual pages

The current document language remains:

```html
<html lang="es-MX">
```

When the planned Spanish and English route structure exists:

- Spanish content uses `lang="es"` or `lang="es-MX"` as appropriate.
- English content uses `lang="en"`.
- Add reciprocal `hreflang` references only when a reviewed paired translation exists.
- Add an `x-default` reference for the root language-selection experience, if one is introduced.
- Do not label an automatic machine translation as a reviewed English edition.

Example for verified paired articles:

```html
<link
  rel="alternate"
  hreflang="es"
  href="https://criticadeguerrero.com.mx/es/noticias/nota-ejemplo/"
/>
<link
  rel="alternate"
  hreflang="en"
  href="https://criticadeguerrero.com.mx/en/news/example-story/"
/>
```

## robots.txt

Add `robots.txt` only after the public production domain works without authentication.

Initial contents:

```txt
User-agent: *
Allow: /

Sitemap: https://criticadeguerrero.com.mx/sitemap.xml
```

Do not block the entire website while it is publicly intended to launch.

During private testing, use Netlify access controls rather than committing a broad production `Disallow: /` rule and forgetting to remove it.

## sitemap.xml

Add a minimal sitemap after the canonical domain is live.

Initial homepage-only example:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://criticadeguerrero.com.mx/</loc>
  </url>
</urlset>
```

Expand it once article, section, author, and policy pages have stable public URLs.

Only include canonical production URLs. Do not include:

- Netlify preview URLs.
- `criticaguerrero.com` test URLs.
- `www.criticadeguerrero.com.mx` URLs.
- Legacy archive file URLs unless intentionally published.
- Draft, preview, admin, search, or duplicate-filter URLs.

## Validation before launch

- [ ] Open the homepage source and verify the canonical URL is exact.
- [ ] Verify `og:url` exactly matches the canonical URL.
- [ ] Verify no public metadata references `criticaguerrero.com`.
- [ ] Validate the homepage title and description in Spanish.
- [ ] Test a future social preview using a platform debugger or metadata inspection tool.
- [ ] Confirm all declared social images load publicly over HTTPS.
- [ ] Confirm `robots.txt` loads at `/robots.txt`.
- [ ] Confirm `sitemap.xml` loads at `/sitemap.xml`.
- [ ] Confirm every sitemap URL returns a successful public page.
