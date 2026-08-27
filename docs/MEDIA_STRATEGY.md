# Media strategy

## Goal

Publish fast, accessible images now while preserving high-resolution originals for future editorial, print, licensing, archival, or redesign needs.

## Two-track model

| Track | Purpose | Public? | Storage |
| --- | --- | --- | --- |
| Delivery track | Optimized low/medium-resolution derivatives used by the website and social previews | Yes | Repository or normal web-image delivery storage |
| Archive track | Original high-resolution JPEG, PNG, TIFF, RAW, and source materials | No | Separate private storage controlled by the publication |

The repository and public website must not be used as the only archive for originals. Avoid committing high-resolution masters to Git history because they bloat the repository, are difficult to remove, and may expose material publicly.

## Story media record

Each story should keep the following fields when the CMS is introduced:

- `image`: public delivery image path or asset identifier
- `imageAlt`: accurate Spanish alternative text
- `caption`: editorial caption and credit
- `credit`: photographer, agency, or source
- `rights`: publication, license, or authorization status
- `archiveAssetId`: optional private identifier for the original/master asset
- `translationImagePolicy`: whether an English version uses the same image, a localized crop, or a separate approved image

The public `archiveAssetId` must never reveal a private-storage URL or credentials.

## Delivery rules

- Upload a clean master to private archival storage first when possible.
- Create a public derivative with appropriate dimensions and compression.
- Prefer WebP or optimized JPEG for web delivery when compatible with the publishing workflow.
- Keep image filenames descriptive and stable; avoid spaces and vague names such as `IMG_1234.jpg`.
- Include accurate captions, credits, rights status, and alt text before publishing.
- Use responsive variants later, rather than replacing all existing story images manually.

## Future upgrade path

When storage, budget, and workflow support it, introduce an image-delivery service or build-time image pipeline that generates multiple sizes from approved originals. Existing stories can retain their delivery-image reference while the implementation resolves a better variant behind the same content model.

## Rights and safety

Only publish images that the publication owns, is licensed to use, or has a documented editorial basis to publish. Preserve source and rights information with the archive record.
