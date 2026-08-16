# Bắc Ninh Note content audit — 2026-08-04

This audit records the first remediation pass after the AdSense “low-value content” decision. It does not authorize or submit a reconsideration request.

## Baseline and decision rules

- Public sitemap before remediation: 105 URLs (9 section/static URLs and 96 article URLs).
- New automatic Vietnam-news and Korean-community publishing is paused.
- Existing URLs are not deleted. A page can remain reachable while being excluded from search with `noindex,follow`.
- A page is eligible for the sitemap only when it is already published and passes the current indexability review.
- Drafts and scheduled/future articles remain unavailable and are never listed in the sitemap.

## URL-level classification

| URL group | Count | Decision | Risk before action | Reason |
| --- | ---: | --- | --- | --- |
| `/` and six public trust/section pages | 7 | Keep and index | Medium | Useful navigation, but canonical and current AdSense-state wording needed correction. |
| `/chuyen-han-quoc` | 1 | Keep accessible; `noindex,follow`; remove from sitemap and primary navigation | High | Archive was dominated by reconstructed community motifs and presented a thin, repeated search surface. |
| `/bai-viet/*` where `kind === "story"` | 51 | Keep accessible; `noindex,follow`; remove from sitemap and recommendations | Critical | No first-hand evidence or visible primary source links; repeated templates and limited independent value. Each URL requires manual rewrite, consolidation or continued noindex. |
| Fresh, distinct Vietnam news with official sources | 23 | Keep and index | Medium | Strong source panels and explanatory sections; retain only distinct and current search intents. |
| First-hand `Kim ở Việt Nam` reviews | 3 | Keep and index | Low | Original owner-supplied photos, visit context, payment/sponsorship disclosure, positives and limitations. |
| Duplicate or expired Vietnam-news URLs listed below | 11 | Keep accessible; `noindex,follow`; remove from sitemap and recommendations | High | Overlap with a stronger page, expired forecast window, or time-bound product-update intent needing re-verification. |

Expected sitemap after this pass: **33 URLs** (7 section/static URLs + 26 articles).

### Eleven news URLs temporarily excluded

1. `/bai-viet/the-can-cuoc-duoc-tim-nhieu-lich-hen-sinh-trac-va-7-ngay`
2. `/bai-viet/giay-phep-lai-xe-tren-vneid-kiem-tra-va-doi-dung-cong-dich-vu`
3. `/bai-viet/nghi-dinh-168-cach-hieu-diem-giay-phep-lai-xe-va-phuc-hoi`
4. `/bai-viet/du-bao-thoi-tiet-viet-nam-thang-7-2026`
5. `/bai-viet/du-bao-thoi-tiet-viet-nam-21-30-7-2026`
6. `/bai-viet/thoi-tiet-viet-nam-25-7-mua-dong-bac-chieu-nam-bo`
7. `/bai-viet/mua-lon-27-29-7-2026-bac-bo-tay-nguyen-nam-bo`
8. `/bai-viet/thuy-trieu-viet-nam-19-28-7-2026`
9. `/bai-viet/song-dong-chay-bien-19-28-7-2026`
10. `/bai-viet/galaxy-z-fold8-ra-mat-viet-nam-checklist-truoc-khi-dat-truoc`
11. `/bai-viet/ios-26-6-phat-hanh-cach-cap-nhat-an-toan`

The stronger identity-card and driver-license explainers remain indexable:

- `/bai-viet/the-can-cuoc-vneid-va-can-cuoc-dien-tu`
- `/bai-viet/nghi-dinh-168-12-diem-gplx-tra-cuu-phuc-hoi`

## Top ten actions

1. Stop all automatic news and reconstructed-community publishing until editorial approval is restored.
2. Noindex all 51 reconstructed-community articles without deleting their URLs.
3. Noindex the Korean-story archive hub and remove it from sitemap and primary navigation.
4. Noindex 11 overlapping, expired or time-sensitive news pages pending manual merge or re-verification.
5. Build home, news, review and related-article feeds only from the reviewed indexable set.
6. Add exact self-canonicals to the home, section and trust pages.
7. Correct About, privacy and contact wording to state that AdSense verification exists but ad serving is not approved.
8. Expand the editorial policy with explicit correction, material-update, withdrawal, noindex and consolidation rules.
9. Add regression tests for sitemap membership, noindex behavior, canonicals and primary navigation.
10. Deploy, verify public HTTP/metadata, then wait for Google recrawling before proposing reconsideration to the CEO.

## Implemented in this pass

- Central `isPostIndexable` and `getIndexablePosts` rules.
- Per-article `index,follow` or `noindex,follow` metadata.
- Sitemap and all main recommendation surfaces use only the reviewed indexable set.
- Korean-story archive remains public but is clearly labeled as under editorial review.
- Current AdSense state, AI-use disclosure, author responsibility and correction policy are stated on trust pages.
- No article was deleted and no AdSense reconsideration was requested.

## Remaining risk and reconsideration gate

- Each of the 51 community-story URLs still needs a manual keep/rewrite/merge decision.
- The 11 news URLs need source re-verification or a safe consolidation/redirect plan.
- Indexed changes must be recrawled in Google Search Console before judging their effect.
- Reconsideration readiness after deployment is estimated at **55/100**: the critical index surface is corrected, but manual content remediation and recrawling remain.

The CEO must explicitly approve the final AdSense reconsideration request. This audit does not click or submit it.
