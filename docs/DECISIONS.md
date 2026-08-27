# Architecture Decision Log

This document records consequential choices so future contributors understand the reasoning and can revisit it deliberately.

## ADR-001: Begin with a static, self-contained prototype

**Status:** Accepted

**Context:** The current repository is a single captured homepage and the legacy WordPress administration route is not currently dependable. A standard WordPress/PHP site cannot be restored from copied HTML or deployed directly to Netlify.

**Decision:** Build the first redesign as a self-contained static front-end prototype with local assets and fixture content. Defer final CMS selection until authorized source-system access and editorial workflow needs are confirmed.

**Consequences:** The team can validate design, accessibility, performance, and information architecture quickly. Dynamic publishing, search, and archival migration remain later milestones.

## ADR-002: Preserve content as structured data

**Status:** Accepted

**Context:** Hard-coding headlines and story cards into a single HTML page makes routine publishing expensive and error-prone.

**Decision:** Use a documented article, section, author, and breaking-item model independent of the final CMS.

**Consequences:** The same content can be represented in Markdown, JSON, WordPress API responses, or a headless CMS. Components can be reused without redesigning for each story.

## ADR-003: Do not hotlink legacy production assets

**Status:** Accepted

**Context:** The existing copied page may depend on stylesheets, scripts, images, and fonts from the legacy domain.

**Decision:** Download and store only authorized assets in the new project or use approved replacements.

**Consequences:** The new site becomes independent of legacy hosting, avoids fragile cross-domain dependencies, and supports image optimization.

## ADR-004: Treat the ticker as an accessible update component

**Status:** Accepted

**Context:** The current design includes a revolving headline bar. Infinite motion can be distracting and inaccessible.

**Decision:** Implement a finite, controllable breaking-news ticker that respects reduced-motion settings and has pause/play controls.

**Consequences:** The ticker retains editorial utility without becoming the only channel for important information or blocking keyboard users.
