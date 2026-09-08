# Netlify CMS Setup

## Purpose

This runbook completes the secure editor configuration for `https://criticadeguerrero.com.mx/admin/` after the repository files have been deployed.

The repository contains the Decap CMS interface and Spanish article form. Authentication and permission management must be enabled in the Netlify dashboard before any editor can log in.

## Prerequisites

- The GitHub repository is connected to a Netlify site.
- Netlify deploys the `main` branch.
- `criticadeguerrero.com.mx` is configured as the production domain or an approved domain alias.
- The deployment containing `admin/index.html` and `admin/config.yml` has completed successfully.
- The technical administrator has access to Netlify and GitHub.

## Configure Netlify Identity

1. In Netlify, open the site dashboard.
2. Open **Integrations** or **Identity**, depending on the current dashboard layout.
3. Enable **Identity** for this site.
4. Set registration to **Invite only**. Do not enable public self-registration.
5. Set the external URL/site URL to `https://criticadeguerrero.com.mx` when prompted.
6. Configure email invitations and recovery messages to use a trusted sender/address.
7. Add the technical administrator as the first user.

## Enable Git Gateway

1. In the site’s Identity settings, open **Services**.
2. Enable **Git Gateway**.
3. Confirm Git Gateway is connected to `criticaguerrero/criticaguerrero` and the `main` branch.
4. Do not expose a GitHub personal access token in the repository, CMS configuration, browser, or chat.

## Verify the editor

1. Open `https://criticadeguerrero.com.mx/admin/` in a private/incognito window.
2. Use the invited administrator account to log in.
3. Confirm the Spanish collection named **Noticias** appears.
4. Open the supplied test article or select **Nueva nota**.
5. Create a non-sensitive test draft with a headline, section, author, date, and body.
6. Save it as a draft or submit it for review.
7. Confirm a change appears in the GitHub repository through Git Gateway.
8. Confirm Netlify starts a deployment.

At this stage, article files are stored correctly, but the public homepage will not automatically display them until the content-rendering implementation is complete.

## Invite the uncle only after testing

After the technical administrator verifies the test flow:

1. Open Netlify Identity users.
2. Send a separate invitation to the uncle’s individual email address.
3. Ask him to create a unique password.
4. Do not send GitHub, Netlify-owner, registrar, DNS, or Cloudflare credentials.
5. Give him the editor URL: `https://criticadeguerrero.com.mx/admin/`.
6. Send the Spanish publishing guide in a separate message.

## Troubleshooting

### `/admin/` returns 404

Verify `admin/index.html` and `admin/config.yml` exist in the deployed `main` branch. Trigger a fresh Netlify deploy after confirming the files.

### The CMS loads but login fails

Confirm Netlify Identity is enabled, the site URL matches the production domain, and the user was invited. Test in a private browser window.

### Login works but saving fails

Confirm Git Gateway is enabled and is connected to the correct repository. Check Netlify deploy and Identity logs. Do not try to solve this by adding a GitHub token to `config.yml`.

### Image upload fails

Confirm the repository contains `static/uploads/`, the CMS `media_folder` is `static/uploads`, and the `public_folder` is `/uploads`.

## Security checklist

- Invite-only registration is enabled.
- Each person has an individual identity account.
- Technical administrators use MFA.
- GitHub, registrar, DNS, and Netlify owner credentials remain private.
- The publication has at least two trusted recovery contacts.
- Test content can be rolled back through Git history.
- A real editor has completed one test publication before newsroom rollout.
