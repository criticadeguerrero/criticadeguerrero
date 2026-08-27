# Hosting and Growth Plan

## Purpose

Run Crítica de Guerrero as a low-maintenance, static-first news site while rebuilding toward **10,000 page views per month**.

## Operating model

- **GitHub** is the source of truth for site code, content files, documentation, and change history.
- **Netlify** deploys the production site automatically from the `main` branch and serves it through a CDN.
- The site should remain static-first: HTML or generated article pages, optimized local or CDN-hosted images, simple forms/links, and no required WordPress/PHP/database stack.
- `old_index.html` remains a legacy archive; the root `index.html` is the active homepage.

## Why this setup fits

Historical GA4 data shows 67,781 sessions and 81,025 page views in 2025, averaging about 5,648 sessions and 6,752 page views per month. This historical scale is appropriate for a GitHub + Netlify static site.

The previous WordPress/hosting cost was approximately $200–$300 per year. The static-first setup eliminates the need for a traditional WordPress hosting plan, while retaining version history and recoverability in GitHub.

## Cost controls

- Keep the Netlify account on the Free plan unless a paid feature is intentionally needed.
- Keep **auto recharge disabled** so usage cannot create automatic charges.
- Netlify can pause sites when the monthly plan limit is reached; review dashboard alerts before changing plan or usage settings.
- Recurring costs should primarily be domain renewal. The `.com.mx` domain is retained as a long-term controlled domain.
- Before adding third-party products, record their price, owner, renewal date, and purpose in repository documentation.

## Traffic target

### Initial goal

Reach and sustain **10,000 page views per month** after the rebuilt publication is operating consistently.

This goal is modest relative to the 2025 historical average of 6,752 page views per month and the prior peak of 10,999 page views in April 2025. It should be monitored monthly rather than treated as a one-time milestone.

### Measures

Track these GA4 metrics monthly:

| Metric | Why it matters |
|---|---|
| Page views | Primary reach target; aim for 10,000+ per month |
| Sessions | Distinct visits and return frequency |
| Active users | Audience size |
| Engagement rate | Whether visits are meaningful |
| Top pages | Which coverage earns attention |
| Traffic source | Search, social, direct, referral, and local partnerships |

## Publishing priorities

1. Restore a reliable publishing cadence for local Guerrero and Acapulco coverage.
2. Publish clear article pages with unique headlines, dates, bylines, category links, and descriptions.
3. Add a sitemap, RSS feed, canonical URLs, and complete social metadata as article templates are built.
4. Optimize images before upload and use descriptive file names and alt text.
5. Create category/archive pages so readers and search engines can discover older coverage.
6. Link relevant stories to each other and maintain readable permanent URLs.
7. Reconnect verified social accounts and local referral channels only after the site has useful current content.

## Review cadence

- Review GA4 once per month.
- Save a dated report in `docs/analytics/` when making a meaningful strategy decision.
- Record traffic, publishing volume, top stories, technical incidents, and any hosting/domain costs.
- Reassess hosting only if measured usage, editorial workflow, or site features outgrow the static-first model.

## Guardrails

- Do not return to a paid WordPress/PHP host solely out of habit.
- Do not enable paid Netlify usage or auto recharge without an explicit owner decision.
- Keep domain registrars, recovery email, two-factor authentication, auto-renewal status, and renewal dates under family-controlled accounts.
- Back up site code and essential content through GitHub; periodically export important analytics snapshots.

## Related records

- `docs/analytics/historical-traffic-2025-2026.md` — baseline GA4 snapshot.
- `docs/TECHNICAL_ARCHITECTURE.md` — implementation architecture.
- `docs/ROADMAP.md` — planned work.
