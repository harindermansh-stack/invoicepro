# InvoicePro Setup Guide

This guide covers a basic local installation and a standard Vercel deployment. It is written for users who are comfortable creating GitHub and Vercel accounts but may not be developers.

## What you need

- A computer with internet access
- A GitHub account
- A Vercel account for hosted deployment
- Node.js 20 LTS or a compatible current LTS release
- Corepack and pnpm
- Basic ability to copy files and paste commands

Do not place passwords or secret API keys in the public GitHub repository.

## Option A: run locally

1. Extract this ZIP to a new folder.
2. Open a terminal in the extracted folder.
3. Enable Corepack:

   ```bash
   corepack enable
   ```

4. Install the package manager declared by the project:

   ```bash
   corepack install
   ```

5. Install dependencies:

   ```bash
   pnpm install
   ```

6. Copy `.env.example` to a new file named `.env.local`.
7. Keep optional integration values blank unless you intend to use those features.
8. Start the development server:

   ```bash
   pnpm run dev
   ```

9. Open `http://localhost:3000` in your browser.

## Option B: deploy with GitHub and Vercel

1. Create a new GitHub repository for your deployment.
2. Upload the extracted source files, including files whose names begin with a dot. Do not upload `.env.local`.
3. In Vercel, choose **Add New → Project**.
4. Import the GitHub repository you created.
5. Let Vercel detect the Next.js framework.
6. Add only the environment variables required by the optional features you intend to use.
7. Start the deployment.
8. When deployment finishes, open the generated preview URL and test the checklist below.

This is a standard deployment process, not a guaranteed one-click or five-minute setup. Build time and troubleshooting depend on your accounts, selected integrations and provider changes.

## Optional integrations

The basic browser invoice editor and PDF workflow should be evaluated separately from optional connected services. The repository's `.env.example` contains placeholders for:

- Resend — email features
- Upstash Redis — subscription-token functionality
- Google Drive API — Drive uploads
- Telegram Bot API — Telegram notifications
- Authentication token — protected API access
- Trigger.dev — scheduled/recurring workflow functionality in newer upstream revisions

Each service has its own account, pricing, security and configuration requirements. Velocity11 does not provide or control these services.

## Required launch test

After deployment, verify all of the following before using InvoicePro for business:

- The home/invoice page loads on desktop and mobile.
- Seller and buyer details can be entered and saved as expected.
- At least one line item can be added.
- Currency and tax calculations display correctly.
- Both included invoice designs render correctly.
- Your logo and QR code render correctly when used.
- PDF download works and the saved PDF opens.
- A multi-page invoice paginates acceptably.
- Any optional integration you enabled works with test—not live—credentials first.

## Updating

InvoicePro is based on an actively maintained upstream project, but this purchase does not guarantee that every future upstream change will be repackaged or supported by Velocity11. Review upstream release notes and back up your deployment before updating.

## Troubleshooting basics

- Recheck that the files were extracted completely.
- Confirm you are using a supported Node.js LTS version.
- Run `pnpm install` again after checking the terminal error.
- Confirm environment-variable names exactly match `.env.example`.
- Check the Vercel build log for the first reported error.
- Remove secrets from any screenshot before requesting help.

