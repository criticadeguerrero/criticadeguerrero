# Article and category template plan

## Purpose

This document defines the first reusable public templates for Crítica de Guerrero:

- Article pages.
- Category/section pages.
- Shared editorial components.

The first implementation should be Spanish-first, mobile-friendly, accessible, fast, and compatible with future reviewed English companions.

## Current status

- [x] Static homepage prototype exists.
- [ ] Article-page template exists.
- [ ] Category-page template exists.
- [ ] Story fixture data exists.
- [ ] Reusable layout/content rendering exists.
- [ ] CMS-driven article publishing exists.
- [ ] Corrections and update display exists.
- [ ] Translation-pair display exists.

## Proposed URL structure

When route generation is introduced:

| Content type | Spanish URL |
| --- | --- |
| Homepage | `/` or future `/es/` according to the language-routing decision |
| Article | `/es/noticias/<slug>/` |
| Category/section | `/es/seccion/<section-slug>/` |
| Author | `/es/autor/<author-slug>/` |
| Search, if added | `/buscar/` |

The exact route implementation may change with the chosen static-site generator or CMS, but URL decisions should be stable before large-scale historical migration.

Do not use temporary Netlify, test-domain, or repository URLs as public article links.

## Article-page requirements

Every article template should include:

1. Section/category label and link.
2. Headline.
3. Summary/deck.
4. Byline.
5. Publication date/time.
6. Update date/time when changed.
7. Featured image when used.
8. Image alt text, caption, credit, and rights/source display.
9. Story body with readable typography.
10. Related stories, when suitable.
11. Correction or update note when needed.
12. Social sharing metadata generated from the article record.
13. A link to a verified paired language version only when one exists.
14. A consistent footer and site navigation.
15. A visible route back to the relevant section.

## Suggested article layout

```text
Breadcrumb or section link
Section label
Headline
Summary
Byline · Published date/time · Updated date/time if applicable
Featured image
Caption and credit
Article body
Correction/update note, if any
Related stories
Footer
```

## Article content rules

- The headline must accurately reflect the story.
- The summary should be factual and useful as a homepage card and metadata description.
- Use one stable slug after publication unless there is a serious reason to change it.
- Preserve author/byline and publication date during historical recovery where known.
- Show image credits and captions whenever an image is used.
- Do not present placeholder content as current reporting.
- Clearly label corrections, updates, opinion content, sponsored content, and archived material where applicable.
- Do not automatically publish machine-translated articles as reviewed English journalism.

## Category-page requirements

Each category/section page should include:

1. Category name and short description.
2. Current lead story.
3. Reverse-chronological story list.
4. Pagination or a controlled “load more” pattern.
5. Story cards with category, title, summary where useful, publication date, and image when available.
6. A clear empty state when no stories exist.
7. Canonical metadata unique to the category.
8. Navigation that works with keyboard and mobile screens.
9. A route back to the homepage.
10. A future path to filtered author/tag pages without duplicating the category archive.

## Suggested category layout

```text
Category title and description
Lead story
Latest stories list/grid
Pagination or load-more control
Newsletter/contact prompt, if adopted
Footer
```

## Shared story-card component

Homepage, category, author, related-story, and search displays should use consistent story-card data.

Minimum shared fields:

```yaml
title:
summary:
slug:
section:
author:
publishedAt:
updatedAt:
featuredImage:
imageAlt:
caption:
credit:
rights:
status:
language:
translationOf:
```

Different layouts may show different fields, but the underlying story record should remain consistent.

## Accessibility requirements

- Use semantic `<article>`, `<header>`, `<main>`, `<nav>`, `<time>`, and heading elements in logical order.
- Do not skip heading levels merely for visual styling.
- Every meaningful image requires useful alternative text.
- Decorative images should use empty alt text or remain hidden from assistive technology.
- Keyboard users must be able to reach navigation, article links, pagination, and controls.
- Focus indicators must remain visible.
- Text contrast and font sizes must remain readable on mobile devices.
- Dates should use machine-readable `<time datetime="...">` values where possible.

## SEO requirements

Each article page needs:

- A unique title.
- A specific meta description.
- A self-referential canonical URL.
- Open Graph and Twitter/X metadata.
- A public, rights-cleared social image where applicable.
- `og:type="article"` for stories.
- Publication and update timestamps.
- Correct Spanish language declaration.

Each category page needs:

- A unique title and description.
- A self-referential canonical URL.
- Its own Open Graph URL and title.
- Inclusion in the sitemap only when public and useful.

See `docs/SEO_AND_SOCIAL_METADATA_PLAN.md`.

## Corrections and updates

Support these editorial signals:

| Type | When to use | Display |
| --- | --- | --- |
| Update | The article has material new information after publication | Timestamp plus short update note |
| Correction | A factual error was corrected | Clearly labeled correction note with date |
| Clarification | Wording/context was improved without changing the core factual record | Brief clarification when editorially warranted |
| Unpublish | Serious error, legal concern, or editorial decision | Remove public page while retaining internal editorial record |

Do not silently replace a material factual error without considering a correction note.

## Opinion and special content

Opinion, columns, editorials, and sponsored material should be visibly distinct from straight news.

At minimum, label:

- `Opinión`
- `Columna`
- `Editorial`
- `Contenido patrocinado`, if ever used
- `Archivo`, for recovered historical material when appropriate

## Future bilingual support

When the language plan is implemented:

- Spanish is the default editorial record.
- Each article record includes `language`.
- A reviewed English companion uses a separate stable URL and `translationOf`.
- Show `Read in English` or `Leer en español` only when a genuine paired version exists.
- Preserve Spanish and English body text separately.
- Do not replace a Spanish article with English content at the same URL.

See `docs/INTERNATIONALIZATION_PLAN.md`.

## Implementation phases

### Phase 1: Static fixtures

- Create three to five sample Spanish story records.
- Render one article page from a fixture.
- Render one category page from the same fixture data.
- Confirm navigation, layout, mobile behavior, image credits, and metadata.

### Phase 2: Reusable templates

- Separate shared layout components from story data.
- Add related-story selection rules.
- Add corrections/update display.
- Add section/archive navigation.
- Add proper metadata generation.

### Phase 3: CMS integration

- Connect CMS fields to the story content model.
- Ensure editor inputs map to all required article fields.
- Enable preview.
- Test publishing and correction workflows.

### Phase 4: Historical recovery

- Migrate Wayback material only after URL, template, metadata, and editorial workflow are stable.
- Validate each recovered story's title, date, byline, text, media, captions, credits, rights, and destination URL.
- Add redirects only after the approved destination exists.

## Definition of done

Article and category templates are ready for production when:

- [ ] A non-developer editor can create a Spanish story from the CMS.
- [ ] The story receives a stable public article URL.
- [ ] The story appears in the correct category archive.
- [ ] The story has a byline, date, section, title, summary, image metadata, and correct canonical/social metadata.
- [ ] Corrections and updates can be displayed.
- [ ] The page works on mobile and with keyboard navigation.
- [ ] The template does not expose private media/archive information.
- [ ] At least one real, rights-cleared test story passes editorial review and public QA.
