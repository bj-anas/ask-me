# ask-me — YouCan theme app extension TODO

## Setup
- [ ] Create a dev store (Partner Dashboard → Stores → New Store)
- [ ] Set storefront password (Seller Area → Settings → General → Access Control) — expires every 2h
- [ ] `youcan auth login` → pick the dev store

## Scaffold
- [ ] `pnpm create @youcan/app@latest` → "Start with an extension only"
- [ ] `youcan app generate extension` → "Theme extension", name it
- [ ] `pnpm install`
- [ ] `git init` + commit the CLI-generated ids (youcan.app.json, youcan.extension.json)

## Decide before writing code
- [ ] Pick block target(s): `section` (placed in a section) / `body` or `head` (embed, every page)
- [ ] Decide final block file names + setting `id`s — they can NEVER change after release
- [ ] Decide data source: metafields for any repeated collection, block settings for appearance only

## Copy design system from ~/youcan/dev/trust-me
- [ ] `snippets/asset.app.liquid` (tokens + OKLCH palette + scoped reset)
- [ ] `asset.button.liquid` / `asset.modal.liquid` / `asset.carousel.liquid` + `assets/component.carousel.js` (only if needed)
- [ ] `component.icon.liquid`, `component.image-fallback.liquid`, `svg.*` (only if needed)

## Build
- [ ] `blocks/<name>.liquid`: global renders → CDN links → `{% case %}` dispatch → `{% schema %}`
- [ ] Schema: all labels as `t:` keys; use `"stylesheet"` / `"javascript"` for static assets
- [ ] Static CSS → `assets/*.css`; only setting-dependent CSS in `{% style %}`
- [ ] One `widget.X.liquid` + `asset.X.liquid` per variant
- [ ] Wire appearance on each widget root: `--brand-*`, `block-color`, `data-intensity`, `{{ block.youcan_attributes }}`
- [ ] Custom elements in `assets/*.js`, guarded with `if (!customElements.get(...))`, no Shadow DOM

## i18n
- [ ] `locales/en.default.json` + `en.schema.default.json`
- [ ] Add `fr.json` + `ar.json`
- [ ] Verify RTL (logical properties, `:dir(rtl)` transform flips)

## Test
- [ ] `youcan app dev` → press `i` to install on dev store
- [ ] Place the block: Themes → Customize → section → add block (embeds: App embeds panel)
- [ ] Check all breakpoints, both directions, all intensities, all radii

## Ship
- [ ] Write README: thumbnail, demo store link, settings tables, screenshots
- [ ] `youcan app config pull` (avoid config drift reverting dashboard changes)
- [ ] `youcan app deploy -m "<message>"`
- [ ] `youcan app versions` to confirm the active version

## Only if publishing to Marketplace
- [ ] Managed billing via YouCan
- [ ] Run automated checks (Distribution tab)
- [ ] Partners dashboard → Apps → Push For Review (3–5 business days)
