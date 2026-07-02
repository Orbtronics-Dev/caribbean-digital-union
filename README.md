# Caribbean Digital Union

The union portal and the full white paper, built as a single React site and deployed to GitHub Pages.

Live URL once deployed: **https://orbtronics-dev.github.io/caribbean-digital-union/**

## What is in here

- `cdu-portal.jsx` — the portal (Overview, Services, Constitution, White Paper, Capital Market, Treasury). All figures are illustrative.
- `Caribbean-Digital-Union-Whitepaper.md` — the full white paper. The White Paper tab renders this file directly, so editing the markdown updates the site.
- `main.jsx` — mounts the portal into the page.
- `index.html` — the page shell.
- `vite.config.js` — build config. `base` is set to `/caribbean-digital-union/` so assets resolve on GitHub Pages.
- `.github/workflows/deploy.yml` — builds and deploys to Pages on every push to `main`.

## Run it locally

Requires Node 20 or newer.

```bash
npm install
npm run dev      # local dev server, hot reload
npm run build    # production build into dist/
npm run preview  # preview the production build
```

## Deploy to GitHub Pages (one-time setup)

1. Commit these files to the `main` branch of the repo (see below).
2. On GitHub, go to **Settings → Pages**.
3. Under **Build and deployment → Source**, choose **GitHub Actions**.
4. Push to `main` (or trigger the workflow manually from the **Actions** tab). The workflow builds the site and publishes it.
5. After it finishes, the site is live at **https://orbtronics-dev.github.io/caribbean-digital-union/**.

Every later push to `main` redeploys automatically.

## Editing content

- To change the white paper, edit `Caribbean-Digital-Union-Whitepaper.md`. The table of contents in the White Paper tab is generated from the `##` and `###` headings.
- To change the dashboard numbers, edit the data constants near the top of `cdu-portal.jsx` (population, GDP per capita, treasury, listings, ledger, and so on).

## If you rename the repository

Update `base` in `vite.config.js` to match the new name, for example `base: "/new-repo-name/"`, then push. For a custom domain or a `username.github.io` repo, set `base: "/"`.

## Note on the figures

The economic figures are an illustration tuned to present the union as a strong economy. They are not modeled or audited. Treat the site as a prototype and design reference until the underlying numbers are grounded in a revenue model.
