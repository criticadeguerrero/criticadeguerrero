# Wayback Content Recovery Plan

## Purpose

Recover as complete a record as practical of Crítica de Guerrero’s historical public posts after the former WordPress hosting and administrator access were lost. The original domain is no longer under the publication’s control. Existing archived pages and assets must be treated as a recovery source, not as an editable WordPress backup.

## Scope and expectations

- Goal: recover the closest practical approximation to 100% of historically published posts, pages, categories, authors, and permitted media.
- Expected limitation: Wayback snapshots may omit URLs, assets, images, CSS/JavaScript, pagination, dates, revisions, comments, attachments, private content, and WordPress database fields.
- Preserve original publication details wherever supported by a capture: title, URL, publication date, author/byline, category, body copy, captions, and credited image/source information.
- Do not assume that a captured file establishes ownership or reuse rights. Re-publish only material the publication has the right to use.

## Recovery principles

1. Work from an inventory before publishing anything.
2. Preserve original URLs and metadata in the recovery record even when a new site URL differs.
3. Keep raw captures separate from cleaned, publishable content.
4. Do not overwrite the active homepage or use `old_index.html` as a content-management system.
5. Keep the process reproducible: every recovered item needs a source capture URL, capture date, recovery status, and reviewer.
6. Respect copyright, privacy, takedown requests, and the original site’s editorial standards.

## Phase 1: Preserve current evidence

1. Record the original domain, the current production domain, and all domain/hosting facts known to the family.
2. Save the currently accessible Wayback URLs, homepage captures, category captures, author pages, and sitemap or feed captures.
3. Preserve `old_index.html` unchanged as a legacy browser capture.
4. Collect historical evidence held by the family: invoices, registration emails, hosting correspondence, social accounts, editorial files, image libraries, and local backups.
5. Save a dated screen recording or screenshots of the Wayback interface and representative post pages in case archive access changes.

## Phase 2: Build a complete URL inventory

Create a master CSV or spreadsheet under `docs/recovery/` or a private working location with one row per original URL.

Required fields:

| Field | Description |
|---|---|
| Original URL | Historical canonical or observed WordPress URL |
| URL type | Post, page, category, author, tag, media, feed, sitemap, or other |
| Title | As captured, if available |
| Published date | Original published date, if available |
| Author | Original byline, if available |
| Category/tags | Original taxonomy, if available |
| Wayback capture URL | Specific archived snapshot used |
| Capture timestamp | Wayback timestamp |
| Capture quality | Complete, partial, broken assets, redirect, or unavailable |
| Text recovered | Yes/no/partial |
| Media recovered | Yes/no/partial/not permitted |
| Rights reviewed | Yes/no/needs review |
| New URL | Planned current-site permalink |
| Status | Inventoried, extracted, cleaned, reviewed, published, blocked, or unavailable |
| Notes | Missing content, duplicate, redirect, or rights concerns |

Inventory sources, in priority order:

1. Wayback CDX/API URL index or the Wayback calendar/list of captures.
2. WordPress sitemap files, RSS/Atom feeds, and archive pages captured by Wayback.
3. Category, tag, author, date, and pagination archives.
4. Internal links found on recovered pages.
5. Search-engine results and social-media links that identify historical URLs.
6. The legacy homepage capture and any family-held browser history/bookmarks.

Deduplicate URLs by normalized original path. Record redirects rather than treating them as separate posts.

## Phase 3: Capture and extract content

For each inventoried post:

1. Select the best available capture, favoring complete captures closest to the original publication date or the newest complete capture.
2. Save the source capture URL and timestamp.
3. Extract the headline, date, author, category, article body, captions, and outgoing/internal links.
4. Save the raw HTML or an archival copy outside the public production site when possible.
5. Extract image URLs separately; note whether the original image file loads from the capture.
6. Mark the recovery quality and all missing sections.

Do not copy Wayback navigation bars, replay URLs, tracking markup, injected styles, or unrelated archive UI into the new site.

## Phase 4: Normalize and validate

1. Convert recovered posts to the project’s defined content format and stable new permalink structure.
2. Retain original published dates and bylines where confirmed; add a transparent recovery note only where editorially appropriate.
3. Normalize typography, headings, image alt text, captions, internal links, and category names.
4. Validate every post against its capture: headline, lead, body length, date, author, and media/caption accuracy.
5. Use checksums or duplicate detection to avoid publishing the same post twice.
6. Maintain an exception list for inaccessible or incomplete records.

## Phase 5: Media and rights review

- Prefer original media held by the publication or its photographers.
- For media only available through Wayback, verify that it was originally published by Crítica de Guerrero and that republication is authorized.
- Preserve visible photo credits and captions.
- Do not hotlink to `web.archive.org` for production images. Download/store only approved media in the project’s controlled asset workflow or replace it with an authorized alternative.
- Flag third-party wire, agency, social-media, or uncertain-rights images for review before publishing.

## Phase 6: Publish safely

1. Start with a pilot batch of 10–25 posts across different dates/categories.
2. Review mobile layout, accents/Spanish punctuation, image behavior, internal links, metadata, canonical URLs, social sharing cards, and search indexing behavior.
3. Publish in dated, traceable batches.
4. Update the recovery inventory after each batch; the inventory is the authoritative progress record.
5. Keep a public-facing archival/recovery policy if needed, with a contact path for corrections or rights requests.

## Completeness measurement

Track recovery progress using both URL-level and content-quality measures:

| Measure | Formula |
|---|---|
| URL inventory coverage | Inventoried historical post URLs / estimated historical post URLs |
| Text recovery rate | Posts with complete article text / inventoried posts |
| Publishable recovery rate | Rights-cleared, reviewed posts / inventoried posts |
| Media recovery rate | Posts with approved lead media / inventoried posts |
| Published migration rate | Published recovered posts / inventoried posts |

Report unavailable, duplicate, blocked, and partial records separately. Do not call the migration “100%” unless the URL inventory and quality review support that claim.

## Suggested repository structure

```text
docs/
  recovery/
    README.md
    inventory.csv
    exceptions.csv
    batch-log.md
  analytics/
```

Keep raw downloaded captures and uncertain-rights assets outside the public repository unless they are reviewed, authorized, and appropriate to publish.

## Immediate next actions

1. Identify the exact historical domain and gather its Wayback capture index.
2. Create the inventory with all known URLs before extracting articles.
3. Find any captured WordPress sitemap and RSS feed; these can provide the fastest route to a near-complete post list.
4. Test extraction with a small pilot batch and compare recovered text to the Wayback pages.
5. Decide the new content format and permalink convention before bulk migration.

## Related documents

- `docs/CONTENT_MODEL.md`
- `docs/TECHNICAL_ARCHITECTURE.md`
- `docs/HOSTING_AND_GROWTH_PLAN.md`
- `docs/analytics/historical-traffic-2025-2026.md`
