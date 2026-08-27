# Internationalization plan

## Direction

Crítica de Guerrero is Spanish-first. Spanish reporting is the default and primary editorial record. English is an optional companion edition for readers who prefer it and for stories that receive a reviewed translation.

## URL structure

- Spanish homepage and content: `/es/`
- English homepage and content: `/en/`
- Spanish stories: `/es/noticias/<slug>/`
- English stories: `/en/news/<slug>/`

The root route may suggest a language based on browser preferences and approximate location only on a first visit. It must not force a permanent redirect based solely on IP location. A visible `ES | EN` language control must appear across the site, and the visitor's explicit choice should be remembered.

## Why choice matters

A visitor may travel, use a VPN, speak more than one language, or prefer the original Spanish reporting even outside Mexico. Stable language URLs are also necessary for sharing, indexing, and translation linking.

## Content workflow

Every article record should include:

- `language`: `es` or `en`
- `translationOf`: optional stable identifier of its paired counterpart
- `title`, `summary`, `body`, `author`, `publishedAt`, and `updatedAt` in the article's own language
- `section` using the localized section label and stable taxonomy identifier
- `status`: draft, review, scheduled, published, or unpublished

Publishing workflow:

1. Publish the Spanish original as soon as editorially ready.
2. Create an English translation only when it can be reviewed for accuracy, context, names, quotes, dates, and local meaning.
3. Link paired versions using `translationOf`.
4. Show `Read in English` or `Leer en español` only when a reviewed paired version exists.
5. Never silently machine-translate reporting at publication time.

## Technical requirements

- Use correct document language attributes: `lang="es"` and `lang="en"`.
- Add reciprocal `hreflang` metadata for verified translation pairs, plus an `x-default` strategy for the root language-selection page.
- Use canonical URLs per language version.
- Translate navigation, form labels, accessible names, dates, and interface copy—not just article text.
- Preserve separate stable URLs for each language; do not overwrite Spanish content with English text.
- Make language switching work without losing a visitor's current article when a paired translation exists.

## CMS requirements

The future CMS must let editors select article language, link an existing translation, save drafts, preview the correct locale, and publish only approved translations. The Spanish editor experience should be the default.

## Rollout sequence

1. Define the bilingual content model before importing stories.
2. Add Spanish-first templates and a language switcher.
3. Introduce `/en/` templates and translation-pair links.
4. Test indexing metadata and language persistence.
5. Train editors with one Spanish original and one reviewed English companion story.
