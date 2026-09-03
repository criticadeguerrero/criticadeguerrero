> **Source of truth**
>
> This is the authoritative CMS and editor-access specification for Crítica de Guerrero.
> Earlier drafts are retained only for project history and must not be updated independently.

# CMS and Editorial Workflow

## Status

Planned. This document defines the next implementation milestone: a secure Spanish-language editor and minimum article pipeline for `https://criticadeguerrero.com.mx`.

## Objective

A non-technical editor must be able to sign in securely, create a Spanish-language article, upload an authorized image, preview the result, and publish it without using GitHub, editing code, or accessing domain/hosting credentials.

The first usable milestone is:

> An authorized editor can sign in at `/admin/`, create one test article with a headline, summary, section, author, date, body, and image, then publish it to the public site.

## Proposed stack

```text
Editor
  ↓
https://criticadeguerrero.com.mx/admin/
  ↓
Netlify Identity (invite-only authentication)
  ↓
Decap CMS (Spanish editorial interface)
  ↓
Netlify Git Gateway
  ↓
GitHub repository content files
  ↓
Netlify build and deploy
  ↓
Public article, category, homepage, and ticker updates
```

### Why this stack

- The public site remains static, fast, and inexpensive to host.
- Editors receive a browser-based dashboard rather than repository access.
- Content changes are versioned in Git and can be reviewed or rolled back.
- Netlify deploys published updates automatically.
- The system can be expanded later without reintroducing a traditional PHP/WordPress server.

## Roles and access

| Role | Intended user | Permissions |
|---|---|---|
| Technical administrator | Site maintainer | Netlify, GitHub, DNS/domain, CMS configuration, user invites, recovery |
| Editor | Uncle and designated newsroom staff | Create, edit, preview, submit, and publish permitted articles/media |
| Reviewer | Optional future role | Review drafts and approve publication; no DNS, hosting, or account administration |

### Access policy

- Identity registration must be **invite only**.
- Give each editor an individual account; do not share logins.
- Do not give editors GitHub, domain-registrar, DNS, or Netlify-owner passwords.
- Technical administrator accounts must use multi-factor authentication.
- Maintain at least two trusted administrator recovery contacts.
- Send initial passwords or invitation links only through a private channel.

## Editor experience

The dashboard should use Spanish labels appropriate for a newsroom:

- Nueva nota
- Noticias publicadas
- Borradores
- En revisión
- Última hora
- Historias destacadas
- Subir fotografía
- Vista previa
- Guardar borrador
- Enviar a revisión
- Publicar

The editor should not need to see Git branches, commits, Markdown filenames, or deployment settings.

## Article form

### Required fields

| Spanish label | Stored field | Notes |
|---|---|---|
| Titular | `title` | Clear article headline |
| Sección | `section` | Controlled list, not free text |
| Autor | `author` | Default to `Redacción Crítica de Guerrero` when appropriate |
| Fecha y hora | `date` | Include timezone for Guerrero/Mexico editorial practice |
| Contenido | `body` | Rich-text or Markdown editor output |

### Recommended fields

| Spanish label | Stored field | Notes |
|---|---|---|
| Resumen | `summary` | One or two sentence introduction |
| Imagen principal | `image` | Only authorized media |
| Texto alternativo | `image_alt` | Meaningful description for accessibility |
| Pie de foto | `image_caption` | Context for the image |
| Crédito de foto | `image_credit` | Photographer, agency, or source |
| Etiquetas | `tags` | Controlled where practical |
| Destacar en portada | `featured` | Promotes the article on the homepage |
| Última hora | `breaking` | Makes the article eligible for the ticker |
| Fecha de expiración de última hora | `breaking_expires_at` | Removes stale urgent items |
| Nota de actualización/corrección | `correction_note` | Visible when editorially required |

## Initial sections

Use a controlled editorial list. Initial recommendation:

- Política
- Seguridad
- Acapulco
- Guerrero
- Cultura
- Deportes
- Espectáculos
- Sociedad
- Opinión

The list should change only with editorial approval. Avoid empty categories.

## Content storage

Use one structured content file per article, initially in a repository location such as:

```text
content/noticias/YYYY-MM-DD-slug.md
```

Example:

```yaml
---
title: "Titular de ejemplo"
summary: "Resumen de una o dos líneas."
section: "Acapulco"
author: "Redacción Crítica de Guerrero"
date: "2026-09-03T10:00:00-06:00"
image: "/assets/uploads/ejemplo.jpg"
image_alt: "Descripción útil de la fotografía"
image_caption: "Pie de foto"
image_credit: "Crédito"
tags:
  - Acapulco
featured: false
breaking: false
breaking_expires_at: null
correction_note: null
---

Contenido completo de la nota.
```

Do not hard-code article text or headlines exclusively into the homepage HTML.

## Minimum publishing pipeline

1. Editor signs in at `/admin/`.
2. Editor selects **Nueva nota**.
3. Editor completes required fields and adds media where available.
4. Editor chooses **Guardar borrador** or **Enviar a revisión**.
5. An authorized publisher selects **Publicar**.
6. Decap CMS writes the content change through Git Gateway.
7. Netlify rebuilds the public site.
8. The article appears at a stable URL and is eligible for category, homepage, featured, and ticker placement.

## Editorial workflow

### Initial mode

Start with a simple controlled publishing process while the team learns the system:

- Draft: editor is still working.
- Review: optional checkpoint for another editor or technical administrator.
- Published: public and included in relevant site views.
- Corrected: published item updated with an editorially appropriate correction note.

Enable Decap CMS editorial workflow mode after the content rendering pipeline is verified. Do not enable a complex approval process before the basic publish path has been tested end-to-end.

## Ticker rules

- A ticker item must link to an existing published article or approved live-update page.
- `breaking: true` makes an item eligible; it does not guarantee display if the item is expired or lower priority.
- Remove or expire urgent labels when they are no longer timely.
- Provide a finite ordered list and pause/play controls.
- Important stories must also be accessible elsewhere on the homepage and category pages.

## Media rules

- Upload only material the publication is authorized to use.
- Require meaningful alt text for informative images.
- Record caption and credit whenever available.
- Optimize uploaded images and avoid oversized originals.
- Do not hotlink images from the previous domain or third-party sites.

## Security and operations

- Use HTTPS for the public site and `/admin/`.
- Keep Netlify Identity invite-only.
- Use individual editor accounts and revoke access promptly when needed.
- Store no passwords, tokens, WordPress files, database exports, or registrar credentials in the repository.
- Keep GitHub and Netlify administrator accounts protected with MFA.
- Verify that rollback is possible by reverting a test article commit before launch.
- Assign a named owner for domains, billing, backup recovery, and editor invitations.

## Acceptance criteria

The milestone is complete only when all of the following work on the production domain:

- An invite-only editor can log in at `/admin/`.
- The interface is understandable in Spanish.
- The editor can create, save, preview, and publish a test article.
- A published article receives a stable public URL.
- The article appears in its section listing.
- A featured article can appear on the homepage.
- A breaking article can be included in the controllable ticker.
- An image can be uploaded with alt text, caption, and credit.
- A technical administrator can revoke an editor and recover from a mistaken publication.
- No editor requires GitHub or registrar credentials.

## Phased implementation

### Phase 1: Editorial foundation

- Add `/admin/index.html` and Decap CMS configuration.
- Configure the article, section, media, and breaking-news collections.
- Configure Spanish labels and controlled choices.
- Configure Netlify Identity and Git Gateway manually in the Netlify dashboard.
- Invite the technical administrator first; do not invite newsroom users until testing is complete.

### Phase 2: Content rendering

- Convert the current front page from hard-coded placeholders to content-driven templates.
- Add article, category, and author templates.
- Render featured and breaking flags on the homepage.
- Generate stable URLs, metadata, sitemap entries, and structured data.

### Phase 3: Editor pilot

- Create one test editor account.
- Publish a non-sensitive test article and image.
- Validate desktop/mobile appearance, correction path, and rollback.
- Provide a one-page Spanish publishing guide.

### Phase 4: Operational launch

- Invite approved editorial users.
- Establish correction, image-credit, and review practices.
- Begin publishing current stories.
- Start authorized Wayback content recovery only after the normal workflow is stable.

## Decisions still required

- Confirm the final static-site generator or content-rendering method.
- Confirm who can publish directly versus submit for review.
- Confirm whether comments, advertising, newsletter, and external social publishing are in scope.
- Confirm whether the current production domain should redirect to `criticadeguerrero.com.mx` now or remain an alias during transition.

For photo ownership, rights tracking, original-file storage, optimization, and public delivery images, see [MEDIA_STRATEGY.md](MEDIA_STRATEGY.md).

For domain ownership, billing, recovery contacts, access inventory, and offboarding, see [OPERATIONS_AND_OWNERSHIP.md](OPERATIONS_AND_OWNERSHIP.md).
