# Product Brief

## Product

A modern public news website for **Crítica de Guerrero**, a Guerrero-based publication with roots in Acapulco. The redesigned experience will present local and state reporting with a clear editorial hierarchy and a publishing workflow that is simple for a small newsroom.

## Problem statement

The legacy front page uses an old, unmaintained news theme and depends on a WordPress/PHP installation that is currently difficult to administer. The existing copied HTML is not a maintainable site: it has no local asset structure, no content model, and no dependable publishing workflow.

## Primary audience

- Residents of Acapulco and the State of Guerrero seeking timely local news.
- Readers in Mexico and abroad following Guerrero public affairs, culture, security, sports, and community stories.
- Editors and contributors who need a low-friction publishing system.

## Product goals

1. Improve scanability and trust through a calmer, more legible editorial layout.
2. Make the homepage responsive and usable on phones, tablets, and desktops.
3. Support featured coverage, chronological news, category navigation, opinion, and breaking updates.
4. Establish a reusable component and content model before a CMS decision is made.
5. Support a responsible migration of authorized historical content, media, and URLs.

## Non-goals for the first release

- Rebuilding every historical article before the new foundation is validated.
- Recreating WordPress administrator features in a static prototype.
- Adding intrusive autoplay, ad-tech, or a ticker that harms accessibility.
- Copying content or media that the publication is not authorized to reuse.

## Homepage requirements

- Masthead with publication name and editorial descriptor.
- Primary navigation for editorial sections.
- Accessible breaking-news ticker below navigation.
- One dominant lead story, supporting featured stories, and latest-news feed.
- Reusable section modules, opinion/column module, footer, and search entry point.
- Clear date/time, byline, section labels, image alt text, and article links.

## Success criteria

- A reader can identify the lead story and find a section within seconds on a phone.
- Editors can create a standard article using a single documented set of fields.
- The homepage works without horizontal scrolling from 320px upward.
- Core content is readable without JavaScript.
- Production assets are local, optimized, and do not depend on the legacy domain.

## Open questions

- Which person or role has final editorial approval?
- Which categories are essential at launch, and which can be consolidated?
- Is the long-term target WordPress recovery, headless WordPress, a static CMS, or another newsroom CMS?
- Which historical URLs must be preserved for search traffic and links?
- What are the policies for comments, corrections, sponsored content, and advertising?
