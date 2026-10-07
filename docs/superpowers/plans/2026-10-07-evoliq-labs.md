# Evoliq Labs implementation plan

**Goal:** Integrate the approved Labs and Unflatten W research previews into the existing Evoliq website.

**Architecture:** Server-rendered localized page content, shared Labs components, and server-side metadata and JSON-LD. Existing navigation, footer, cookies, theme and next-intl routing remain the site shell.

**Spec:** The user's supplied implementation request and `evoliq-labs-unflatten-ready.zip`; the repository governs technical integration.

**Constraints:** Preserve the homepage and AI Control. Support cs, sk and en. Use the official Evoliq logos and supplied Unflatten family SVG. All models are Coming soon; links only explore research content. No new dependencies are needed.

## Tasks

- [x] Add an HTTP smoke test for six localized routes, metadata, preview status, family asset paths and sitemap entries; observe failure before page implementation.
- [x] Move supplied content into Labs, UnflattenW and LabsCommon translation namespaces, with equivalent copy and localized SVG labels.
- [x] Implement shared brand mark, badge, family cards, family visual and research-status components. Implement Labs and Unflatten W content with responsive pipeline, capabilities and technical summary.
- [x] Add validated server routes, locale-aware metadata and explicit research-preview JSON-LD.
- [x] Add localized desktop/mobile Labs navigation and sitemap entries using the existing routing configuration.
- [x] Run npm run build, HTTP smoke checks, and browser checks across locales, themes and mobile widths. Check image loading, language switching, menu keyboard use and preview-only CTAs.
- [x] Independently review the complete change and address material findings.

**Handoff:** Create `feature/evoliq-labs-unflatten`, commit with the requested message, push, and open a PR to `main`.

## Review focus

Locale switches preserve the Labs path; small viewports have accessible navigation and no horizontal overflow; dark mode retains readable visuals; translated content includes embedded SVG text; metadata and JSON-LD never imply public model availability.

## Verification results

- `npm run build`: successful, including TypeScript validation. Existing middleware/browser-data deprecation warnings remain nonblocking.
- Production HTTP smoke tests: 7 passed (six localized pages plus sitemap).
- Browser layout checks: 48 checks across cs/sk/en and widths 320–1440 px in light/dark modes; no overflow or broken loaded images.
- Mobile menu focus, Escape, localized links, language switching and saved theme preservation verified.
- Production browser console: no errors.
- Existing message values preserved; homepage and AI Control source files unchanged.
- Independent code review: no actionable findings.
