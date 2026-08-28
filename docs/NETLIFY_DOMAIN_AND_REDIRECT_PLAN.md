# Netlify domain and redirect plan

## Purpose

This document defines the production and testing domain roles for Crítica de Guerrero and identifies where each routing change must be made.

## Domain roles

| Domain or hostname | Role | Public/canonical use |
| --- | --- | --- |
| `criticadeguerrero.com.mx` | Official production domain | Yes. This is the canonical public hostname. |
| `www.criticadeguerrero.com.mx` | Production-domain alias | No. Redirect permanently to the bare canonical hostname. |
| `criticaguerrero.com` | Temporary test/staging address | No. Do not use in canonical tags, sitemap, public navigation, or social metadata. |
| Netlify `*.netlify.app` address | Deployment troubleshooting and previews | No. Never use as canonical production metadata. |

## Production decision

The official public address is:

`https://criticadeguerrero.com.mx/`

The `www` form must redirect to the bare domain:

`https://www.criticadeguerrero.com.mx/ruta/`

becomes:

`https://criticadeguerrero.com.mx/ruta/`

The redirect must preserve paths, query parameters when appropriate, and HTTPS.

## Responsibility split

### DNS registrar

The registrar or DNS provider controls whether a hostname points to Netlify.

Tasks:

- Add or update the DNS records Netlify provides.
- Keep domain registration active and auto-renewing.
- Enable registrar lock and two-factor authentication.
- Keep at least two independent recovery contacts.
- Do not copy DNS records from a domain the publication does not own.

### Netlify Domain Management

Netlify controls which domains belong to the deployed site and which hostname is primary.

Tasks:

1. Open the correct Netlify project.
2. Go to Domain management / Production domains.
3. Add `criticadeguerrero.com.mx`.
4. Add `www.criticadeguerrero.com.mx`.
5. Set `criticadeguerrero.com.mx` as the primary domain.
6. Configure the `www` hostname as a domain alias that redirects to the primary domain.
7. Confirm both domains are verified.
8. Confirm HTTPS certificates are active.
9. Confirm the production deploy is public and does not require a Netlify login or visitor password.
10. Confirm `main` is the production branch.

Primary-domain and alias settings should control the hostname redirect. Do not depend on an application-level redirect alone for the main `www` to bare-domain decision.

### GitHub repository

The repository controls static site files and metadata.

Tasks:

- Use `https://criticadeguerrero.com.mx/` in canonical tags and `og:url`.
- Do not use test/staging hostnames in public metadata.
- Use relative links for internal static assets where practical.
- Do not place DNS credentials, Netlify tokens, registrar passwords, or recovery codes in repository files.

## DNS verification

Use the exact record values shown in the Netlify dashboard for this specific project.

A common external-DNS pattern is:

| Host | Typical record | Typical target |
| --- | --- | --- |
| Apex / `@` | ALIAS, ANAME, or provider-flattened CNAME | Netlify apex load balancer |
| Apex fallback | A | Netlify-provided IP address |
| `www` | CNAME | Netlify-provided site target |

Do not treat the example values above as a substitute for Netlify's current instructions. Record values can differ by configuration and provider.

## Public-access requirement

This is a public news site. The production domain must be reachable without:

- A Netlify account.
- A Netlify team-login screen.
- A site password.
- An unapproved visitor-access rule.

Infrastructure administration should remain protected, but readers must be able to view the published site.

## Testing role for criticaguerrero.com

`criticaguerrero.com` may remain useful during the transition, but it must not become a competing production identity.

Use it only for:

- Checking a current production build before changing the public `.com.mx` host.
- Temporary testing while production DNS and certificates are being verified.
- Verifying design changes in a non-canonical location.

For safer unfinished-feature testing, prefer:

- The Netlify `*.netlify.app` deploy URL.
- A branch deploy.
- A future dedicated staging subdomain, such as `staging.criticadeguerrero.com.mx`, if needed.

Do not index or publicly promote test addresses.

## Verification checklist

- [ ] The apex domain is added to Netlify.
- [ ] The `www` hostname is added to Netlify.
- [ ] The apex domain is the Netlify primary domain.
- [ ] `www` redirects to the apex domain.
- [ ] Both hostnames have active HTTPS.
- [ ] The public homepage works in an incognito/private browser.
- [ ] The public homepage works on a mobile device.
- [ ] Netlify shows a successful deploy from `main`.
- [ ] The `*.netlify.app` address is not used in public canonical metadata.
- [ ] `criticaguerrero.com` is not used in public canonical metadata, social previews, navigation, or sitemap entries.
- [ ] Domain renewal and recovery details are recorded privately.
