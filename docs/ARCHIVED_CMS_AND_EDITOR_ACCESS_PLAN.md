# CMS and editor access plan

## Purpose

This document defines the future editorial publishing workflow for Crítica de Guerrero.

The goal is simple: an approved editor can sign in, write or update a note, upload an approved public image, preview the result, and publish it without using GitHub, Netlify, domain, DNS, analytics, or billing accounts.

## Current status

- [x] Static homepage foundation exists.
- [x] Spanish-first editorial direction is documented.
- [ ] CMS platform selected and tested.
- [ ] `/admin/` entry point added.
- [ ] Editor authentication configured.
- [ ] Uncle invited with a dedicated editor account.
- [ ] Full publishing workflow tested.
- [ ] First real test article published.

## Editorial access principles

- Use individual accounts. Do not share passwords.
- The uncle receives an editor account, not an infrastructure account.
- Editor access should be invite-only.
- The editor interface should be Spanish by default.
- Use least-privilege access: editors can manage content, but not DNS, billing, domain ownership, deployment settings, or repository administration.
- Never place passwords, API keys, invitation tokens, recovery codes, or private account settings in GitHub files, GitHub issues, pull requests, screenshots, or public chat logs.

## Candidate approach

A Git-backed CMS can work with the existing static Netlify site.

One candidate is Decap CMS or a compatible successor using a secure Git-backed publishing workflow. The usual model is:

1. Add an `/admin/` entry point and CMS configuration to the repository.
2. Enable the selected authentication and content-write service in Netlify or the selected provider.
3. Set sign-up mode to invite-only.
4. Invite the uncle with his own email address.
5. Give the CMS permission to create controlled content commits to the publishing branch or a review branch.
6. Let Netlify build and deploy the published content automatically.

This must be tested with the actual current Netlify and CMS-provider documentation before adoption. Do not assume an older tutorial exactly matches current Netlify Identity, Git Gateway, Decap CMS, or successor behavior.

## Required editor workflow

The editor should be able to:

1. Go to `/admin/`.
2. Sign in with a dedicated account.
3. Select `Nueva nota`.
4. Enter a title, summary, section, author, date, and article body.
5. Upload or choose an approved public delivery image.
6. Enter image alt text, caption, credit, and rights status.
7. Save as a draft.
8. Preview the article at its intended URL.
9. Publish it.
10. Correct/update it with an update note when necessary.
11. Unpublish it if a serious mistake, legal issue, or editorial decision requires removal.

## Required Spanish-first story fields

| Field | Purpose | Required before publish? |
| --- | --- | --- |
| `title` | Headline | Yes |
| `summary` | Short factual description for cards and metadata | Yes |
| `body` | Full story text | Yes |
| `section` | Stable category/section identifier | Yes |
| `author` | Byline, such as `Redacción` or named author | Yes |
| `publishedAt` | Publication date/time | Yes |
| `updatedAt` | Most recent material update | When updated |
| `status` | Draft, review, scheduled, published, or unpublished | Yes |
| `slug` | Stable URL portion | Yes |
| `featuredImage` | Public optimized delivery image | Recommended; required when the story needs one |
| `imageAlt` | Accurate alternative text in Spanish | Required if image is used |
| `caption` | Editorial caption | Required if image is used |
| `credit` | Photographer, agency, or source | Required if image is used |
| `rights` | Ownership, license, or publication basis | Required if image is used |
| `correctionNote` | Public correction/update note where needed | Required when correcting material facts |
| `language` | `es` by default; `en` only for reviewed English content | Yes |
| `translationOf` | Identifier for approved paired translation | Only when one exists |

## Publication states

| State | Meaning | Public? |
| --- | --- | --- |
| Draft | Work in progress; not ready for editorial review | No |
| Review | Ready for an editor/owner to check | No |
| Scheduled | Approved for later publication | No, until scheduled time |
| Published | Live to readers | Yes |
| Unpublished | Removed from public view while preserving an internal record | No |

## Roles

| Role | Appropriate access |
| --- | --- |
| Institutional owner | Owns domain, Netlify, registrar, recovery, billing, backups, and core services |
| Technical administrator | Maintains GitHub, Netlify deployment, CMS configuration, backups, and templates |
| Editor | Creates, edits, previews, publishes, corrects, and unpublishes stories |
| Contributor, if added later | Creates drafts only; cannot publish without editorial approval |

The same person can hold more than one role temporarily, but the domain/hosting recovery path must not depend on one personal account alone.

## Image workflow

1. Preserve the clean original in private archival storage when possible.
2. Create an optimized web delivery version.
3. Upload only the approved delivery version to public CMS/site storage.
4. Add accurate alt text, caption, credit, and rights status.
5. Never place private-storage URLs or original archive credentials in public CMS content.

See `docs/MEDIA_STRATEGY.md`.

## First acceptance test

Before treating the CMS as ready:

- [ ] An invited editor can sign in at `/admin/`.
- [ ] Registration is invite-only.
- [ ] The editor cannot access Netlify billing, DNS, registrar, or GitHub administration.
- [ ] The editor can create a Spanish draft.
- [ ] The editor can upload an optimized rights-cleared image.
- [ ] The editor can preview a correctly formatted article.
- [ ] The editor can publish it.
- [ ] The article appears on the public site with correct URL, title, description, image credit, and mobile layout.
- [ ] The editor can correct and unpublish the test article.
- [ ] A technical administrator can restore content from the repository/history if needed.

## Training script for the uncle

Use this short explanation after the CMS is working:

> Entra a la dirección de administración, inicia sesión con tu propia cuenta y selecciona “Nueva nota”. Escribe el título, el resumen y el texto; agrega la sección, fecha y autor. Si subes una foto, incluye descripción, pie de foto y crédito. Guarda como borrador para revisarla o selecciona publicar cuando esté lista. No necesitas entrar a GitHub, Netlify ni a la cuenta del dominio.

## Decision rule

Do not launch a CMS merely because it is fast to install. Select the option that the uncle can reliably use, that keeps administrative ownership under publication-controlled accounts, and that has an understandable backup/recovery process.
