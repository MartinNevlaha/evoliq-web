# Unflatten W Dense Release Implementation Plan

> **For agentic workers:** Use superpowers:executing-plans to implement this plan. Steps use checkbox syntax for tracking.

**Goal:** Publish verified Dense 1.0 release information on the existing localized Evoliq website.
**Architecture:** Retain current server components and next-intl messages. Centralize immutable release links/version, scope status badges per model, and add a localized release guide linked to maintained upstream documentation.
**Tech Stack:** Next.js 16, React 19, TypeScript, next-intl, Tailwind; no new dependencies.
**Spec:** `docs/superpowers/specs/2026-11-16-unflatten-dense-release-design.md`

## Global Constraints

- Support cs, sk and en; preserve homepage, AI Control, canonical routes and hreflang.
- Confirm public availability before a released claim; keep X/P/Forms/MoE previews.
- State diagnostic evaluation scope and licence accurately; no production-quality or FP8-release claims.
- Keep private source documents, credentials and internal infrastructure out of product content.

## Review Focus

- Mixed family availability must not label unreleased models available.
- Word-export success must not be presented as reconstruction accuracy.
- Model language capability must not be inferred from UI language.
- Old architecture artwork must not silently describe the released runtime.
- Public links and licence terms must match the final source repositories.

### Task 1: Release content, statuses and SEO

**Files:** localized `messages/{cs,sk,en}.json`; Labs/W page and shared components; `lib/labs-metadata.ts`; new `lib/unflatten-release.ts` and release-guide component; `tests/labs-smoke.test.mjs`.
**Interfaces:** one release constant provides confirmed model name/version and public model/tool/docs URLs to page components and JSON-LD; translated content provides public-facing text.

- [x] Contact release agent and audit current site; baseline smoke tests pass (7/7).
- [x] Confirm the model agent's release brief and public repository state.
- [x] Extend HTTP tests to require Dense release status and links, preview status on X/P/Forms, release JSON-LD, qualified evaluation, and current imagery.
- [x] Run against the old production build; expect release assertions to fail.
- [x] Implement localized guide, scoped status and consistent SEO using verified source facts.
- [x] Build and run all HTTP tests; expect exit 0 with all routes passing.

### Task 2: Verify and publish

**Files:** final branch and deployment; no additional product scope.
**Interfaces:** consumes Task 1's completed release page and tests.

- [x] Independently review facts, licence, status, links and implementation.
- [x] Check desktop/mobile and both themes; confirm no horizontal overflow or broken assets.
- [ ] Commit and open a reviewable PR; publish via the existing GitHub/Vercel path under the user's publishing authorization.
- [ ] Verify public production pages and report the live URL, validation and any remaining limitation.

Execution note: prepare the local draft from the existing release documents while publication proceeds. Final source confirmation and anonymous link checks remain mandatory before publishing. Baseline 7/7 passed; release regression tests fail on the expected missing released family-card status.

Verification: production build passed; HTTP tests 7/7 passed; 36 browser viewport/theme/locale checks passed without horizontal overflow or page errors. Independent review found no factual blockers. Applied suggestions to guide the primary CTA to setup, explain automatic model download, and consolidate repeated cautions. Public source availability and final release-agent brief are still pending; do not deploy before those checks.

Final source confirmation: publishing agent completed the release and supplied public docs/RELEASE.md on 16 November 2026. Anonymous model/repository API checks returned 200 with private=false; model card, licence, application README, launcher and API guide all returned 200. The final brief confirms the prepared facts and adds the normalized CER ≤ 2% tolerance definition and application v1.0.0 release. These details are linked and summarized on the page. The previous publication gate is satisfied.
