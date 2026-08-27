# Information Architecture

## Editorial navigation

Initial proposed navigation:

- Inicio
- Política
- Seguridad
- Acapulco
- Guerrero
- Cultura
- Deportes
- Espectáculos
- Sociedad
- Opinión
- Contacto

The final list should be based on actual editorial workflow and content volume. Avoid creating a navigation category that will rarely receive posts.

## Homepage structure

```text
Utility row
Masthead
Primary navigation
Breaking-news ticker
Lead story
Supporting featured stories
Latest news feed
Section modules
Opinion / columnists
Newsletter or social follow module
Footer
```

## Page types

### Homepage

Prioritizes timely reporting. Uses featured and latest content, but does not duplicate every article visually.

### Article

Includes section, headline, optional summary, byline, published and updated times, hero media, article body, captions, related stories, corrections policy, and social sharing.

### Category

A category landing page contains a lead article, recent stories, pagination, and a short description when useful.

### Author / columnist

Contains a byline profile, bio, portrait if provided, and chronological article list.

### Search

Search should be intentionally selected during implementation. For a static site, Pagefind is a viable local-first option; for a CMS-driven site, use its native search or a hosted index if needed.

### Contact and legal pages

Maintain contact, editorial policy, privacy policy, corrections policy, and advertising information as independently managed pages.

## URL principles

- Use human-readable, lowercase, hyphenated slugs.
- Keep canonical URLs stable after publication.
- Preserve historical URLs through one-to-one redirects wherever possible.
- Avoid date-based URLs unless there is a confirmed legacy requirement.
- Do not use `.html` rewrites for new content unless a legacy-redirect plan requires them.

Recommended new article pattern:

```text
/2026/08/example-headline/
```

Recommended category pattern:

```text
/politica/
```

## Ticker behavior

- Label it `Última hora` or `Historias principales`.
- Present a finite ordered set of timely links.
- Auto-advance only when the user has not enabled reduced motion.
- Provide pause/play control and keyboard-accessible links.
- Fall back to the first item if JavaScript is unavailable.
- Do not rely on the ticker as the only location for an important story.
