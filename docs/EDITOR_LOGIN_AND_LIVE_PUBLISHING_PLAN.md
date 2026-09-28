# Editor login and live publishing plan

Status: proposal, not implemented. Reviewed September 27, 2026. Publication: Crítica de Guerrero.

## Goal

Give a trusted, nontechnical editor (the publisher's uncle) a Spanish-language login and form to write, preview, save drafts, and publish articles. Published articles should appear on article pages and the homepage without misleading placeholder headlines. The Última hora ticker should contain only current, explicitly designated breaking stories. Keep hosting predictable and retain publication-controlled recovery access.

## Existing repository state

- The public homepage is the root `index.html`; `old_index.html` is an archival WordPress capture and must not replace it.
- The current homepage and `assets/js/site.js` contain demonstration stories and a hard-coded ticker array. They are not a live news feed.
- `content/noticias/` has a test article, not an operational stream of published news.
- `admin/config.yml` exists, but `admin/index.html` is absent. An editor login and publishing pipeline have not been verified.
- `docs/CMS_EDITORIAL_WORKFLOW.md` and `docs/NETLIFY_CMS_SETUP.md` describe the earlier Decap CMS + Netlify Identity + Git Gateway design. Treat these as prior plans, not proof of a functioning editor.

## Architecture choices

### Option A: Git-backed editorial CMS

Decap CMS writes Markdown articles to GitHub; a successful production deploy makes new content visible after a build. The originally planned Netlify Identity + Git Gateway path would let editors log in without GitHub repository access. However, Netlify now labels Git Gateway deprecated and does not recommend new configurations. Netlify Identity alone authenticates a person; it does not publish articles or replace Git Gateway. Do not enable the old setup without reviewing current provider support and a secure Git authentication alternative.

On a credit-based Netlify team, each successful production deploy normally costs 15 credits, whether triggered by an article or another change. On a legacy team, builds use build minutes rather than that per-deploy credit charge; confirm the actual team's plan and allowance in Netlify. Saving a draft does not necessarily mean a successful production deploy.

### Option B: Firebase-backed editorial system (recommended for evaluation)

Use Firebase Authentication for individual editor logins and Firestore for article documents. Build a small Spanish editor at `/admin/` and make the public site display published Firestore records. Publishing a document can make it available without a GitHub commit or Netlify production deploy; clients still consume hosting bandwidth and Firebase reads/writes, subject to their respective limits and pricing. This is a custom implementation, not a drop-in replacement for Decap's editor, and it requires careful permissions, article rendering, and testing. Prefer a dedicated publication Firebase project rather than mixing editorial data with unrelated applications.

## Editorial data and permissions

Proposed fields: id/slug, title, summary, body, section, author/byline, createdAt, updatedAt, publishedAt, status (draft/published), featured, breaking, breakingExpiresAt, image URL, image alt text, caption, credit, and correction note. Use server-generated timestamps for publication ordering and store a stable URL identifier. Specify allowed formats and sanitize or safely render article content; do not trust raw HTML from a browser form.

Only designated editorial accounts may write. Readers may read published records only; unpublished drafts and private contact details must not be publicly readable. Enforce this in Firestore Security Rules, not only by hiding buttons. Admin-only roles must be assigned through a trusted administrative path, never by editing one's own user document in the browser. Test anonymous, editor, and administrator access and account recovery. Enable strong sign-in protection appropriate to the provider and keep privileged credentials out of GitHub.

## Homepage and ticker behavior

- Render recent published stories with working article links; sort by publishedAt, not creation time. Do not label archival or sample content as current.
- Render only published, editor-flagged breaking stories in Última hora. Remove a story when its expiry time passes, even if no new deployment occurs. If none qualify, hide the breaking bar or show a separately labeled latest-news view.
- Animate eligible headline links slowly right-to-left inside a clipped viewport while the label and controls remain fixed. Preserve previous/next and pause controls; pause on hover/focus, respect reduced-motion settings, and do not make the bar an intrusive screen-reader live region.
- Keep the test article out of public feeds, and replace placeholder `href="#"` links before launch.

## Implementation sequence

1. Decide between Git-backed and Firebase-backed publishing; verify which Netlify team/plan hosts production. This proposal does not silently override the earlier CMS documents.
2. For Firebase: set up a dedicated project, approved sign-in method, named editor accounts, Firestore collections, and tested rules; do not commit service-account credentials.
3. Build `/admin/` login, editor form, draft/preview/publish/correction controls, image upload and media-rights checks. Invite the technical administrator first; invite the uncle only after end-to-end testing.
4. Implement public article routes, section views, home feed, and filtering. Decide how static hosting will serve or route article URLs; verify direct-link reloads, metadata/SEO, and graceful errors.
5. Connect Última hora to eligible published content and then add scrolling animation. Test expiry, stale timestamps, mobile layout, keyboard access, and reduced motion.
6. Test publish, unpublish, rollback/corrections, account lockout, authorization failures, billing/usage monitoring, and recovery contacts before newsroom rollout.

## Decision still required

Approve the content source (GitHub Markdown or Firestore), the production Netlify team, the editorial approval policy, and whether published articles appear immediately or require review. No CMS, Firebase project, or deployment setting is created by this document.

## Vendor references

- Netlify Git Gateway status: https://docs.netlify.com/manage/security/secure-access-to-sites/git-gateway/
- Netlify credit accounting: https://docs.netlify.com/manage/accounts-and-billing/billing/billing-for-credit-based-plans/how-credits-work/
- Netlify legacy pricing: https://docs.netlify.com/manage/accounts-and-billing/billing/billing-for-legacy-plans/legacy-pricing-plans/
- Firebase Authentication: https://firebase.google.com/docs/auth/
- Firestore Security Rules: https://firebase.google.com/docs/firestore/security/get-started
