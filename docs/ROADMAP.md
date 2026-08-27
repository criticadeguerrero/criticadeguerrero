# Roadmap

## Milestone 0: Foundation

Status: In progress.

- [x] Document project goals and constraints.
- [x] Define initial information architecture.
- [x] Define content model and design principles.
- [ ] Confirm editorial owner and approval process.
- [ ] Confirm source-of-truth access for hosting, domain, WordPress, and backups.

## Milestone 1: Design prototype

- [ ] Build a mobile-first homepage wireframe.
- [ ] Establish CSS tokens and typography.
- [ ] Implement masthead, navigation, ticker, lead story, story cards, and footer.
- [ ] Add accessible mobile navigation and ticker controls.
- [ ] Validate desktop, tablet, and mobile layouts.

Definition of done: A self-contained homepage deploys to a preview URL, uses local placeholder assets, meets baseline accessibility checks, and does not depend on the old domain for styling or images.

## Milestone 2: Editorial templates

- [ ] Build article-page template.
- [ ] Build category-page template.
- [ ] Build author/columnist template.
- [ ] Add sample fixtures that follow the content model.
- [ ] Define corrections, tags, featured stories, and breaking-news workflow.

Definition of done: An editor can create sample articles in the chosen source format and the site produces consistent pages.

## Milestone 3: CMS decision and integration

- [ ] Inventory access to WordPress, database, media, and hosting.
- [ ] Compare WordPress restoration, headless WordPress, and static/Git-backed CMS options.
- [ ] Select content workflow based on editorial ownership, security, maintenance, and budget.
- [ ] Document configuration, backup, and publishing steps.

Definition of done: The selected workflow supports a non-developer publishing a draft, previewing it, publishing it, correcting it, and unpublishing it.

## Milestone 4: Migration

- [ ] Create a verified WordPress export/backup.
- [ ] Inventory posts, pages, categories, authors, uploads, and legacy URLs.
- [ ] Import a small test batch and validate it.
- [ ] Migrate approved content and media.
- [ ] Implement redirects and canonical URLs.

Definition of done: Content integrity, URLs, media, and metadata are validated and a rollback plan exists.

## Milestone 5: Production launch

- [ ] Configure domain, HTTPS, redirects, sitemap, analytics, and monitoring.
- [ ] Perform accessibility, performance, and mobile QA.
- [ ] Train editors and publish the operational runbook.
- [ ] Establish backup and incident-response ownership.

Definition of done: The site has an approved launch checklist, responsible owners, backup verification, and a post-launch review date.

## Risk log

| Risk | Mitigation |
|---|---|
| Legacy hosting or WordPress access is unavailable | Do not overwrite the old site; pursue host/domain recovery and preserve any available backups. |
| Content migration loses dates, authors, or media | Test import on a small sample and validate counts before full migration. |
| Legacy URLs lose search value | Build a URL inventory and use tested redirects. |
| New workflow is too technical for editors | Choose CMS based on an editor usability test, not developer preference alone. |
| External asset hotlinking breaks | Download and store authorized assets locally before launch. |
