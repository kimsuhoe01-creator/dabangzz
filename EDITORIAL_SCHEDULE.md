# Dabangzz publishing schedule

Timezone: `Asia/Ho_Chi_Minh` (GMT+7). Every new post must include an ISO 8601
`publishedAt` value with the `+07:00` offset. Existing posts without the field
are already public.

## Daily volume

- 20 July–2 August 2026: 12 posts per day
- 3–9 August 2026: 18 posts per day
- From 10 August 2026: 30 posts per day, subject to the quality gate below

If fewer posts pass the quality gate, publish fewer. Never fill a quota with
duplicate, thin, unverifiable, or unsafe content.

The daily total includes both `Tin mới Việt Nam` explainers and Korean
community-inspired stories. Vietnam news is the primary product. Use this
target mix only when enough material passes review:

- 12-post phase: target 7 Vietnam news explainers + up to 5 Korean stories
- 18-post phase: target 11 Vietnam news explainers + up to 7 Korean stories
- 30-post phase: target 18 Vietnam news explainers + up to 12 Korean stories

Do not manufacture news to reach the mix. An uneventful day may contain fewer
news articles or fewer total articles.

## Publication slots

12-post phase:

`06:45, 07:45, 09:00, 10:30, 11:45, 12:45, 14:30, 16:30, 18:00, 19:30, 20:30, 21:30`

18-post phase:

`06:45, 07:45, 08:20, 09:00, 09:45, 10:30, 11:10, 11:45, 12:45, 13:30, 14:30, 15:30, 16:30, 17:15, 18:00, 19:30, 20:30, 21:30`

30-post phase:

Every 30 minutes from `06:30` through `21:00`.

## Daily automation runs

Content work runs three times in `Asia/Ho_Chi_Minh` so that Vietnam news is not
selected only once before the day begins:

- `01:30`: review seven-day and overnight demand, prepare the `06:45` and
  `07:45` Vietnam news slots, and schedule the day's Korean evergreen stories.
- `10:30`: recheck current Trends and official releases, then prepare or update
  the `11:45` and `14:30` Vietnam news slots.
- `17:30`: recheck afternoon official releases and prepare up to three verified
  Vietnam news articles for `18:00`, `19:30`, and `21:30`.

Do not pre-fill later news slots at 01:30 merely to reach the daily target. If a
topic develops during the day, update the existing article instead of creating
a near-duplicate URL.

## Google Trends input

Before selecting stories, review both:

- Vietnam, past 7 days: https://trends.google.com/trends/explore?date=now%207-d&geo=VN&hl=vi
- Vietnam, trending now: https://trends.google.com/trends/trendingsearches/daily?geo=VN&hl=vi

Treat trends as audience-demand signals, not as mandatory subjects. Select only
three to five signals that naturally connect to useful Vietnam news or service
information. A trend identifies a question, never proves a claim. Confirm every
publishable fact with a current official or primary source. Weather, transport,
education, public services, consumer rules, travel disruptions and digital
life are preferred when they have direct reader value.

Automatically exclude politics, gambling and lottery, medical diagnosis or
treatment, crime details, minors, explicit sexual content, and unverified claims
about named people. Do not make medical, legal, or financial promises.

## Chuyện Hàn Quốc source and quality rules

Allowed discovery sources: FMKorea, Nate Pann, Hotssul, Ruliweb community,
DCInside cosmetics, and Beautynury. Use public material only. Do not copy text,
images, names, usernames, screenshots, or distinctive identifying details.
Combine recurring themes from multiple public discussions and rewrite the story
from scratch for Vietnamese readers.

All Korean-derived material belongs to one public category: `Chuyện Hàn Quốc`.
Use a secondary descriptor after a middle dot only for orientation, such as
`Chuyện Hàn Quốc · Công sở` or `Chuyện Hàn Quốc · K-beauty`; do not create
separate top-level Korean category filters.

Each Korean story needs a useful headline, a concrete summary, natural
Vietnamese, a distinct angle, at least four substantive sections and roughly
700–1,100 Vietnamese words. Include specific context for Vietnamese readers and
practical decision criteria. Run a final safety and privacy review. Build the
site, verify that future posts remain unavailable, then publish the validated
change.

## Kim ở Việt Nam: first-hand reviews

`Kim ở Việt Nam` is reserved for genuine first-hand material supplied by the
site owner: personal notes, photographs they have the right to publish,
receipts with private data removed, purchase details, or a clearly described
visit. Never invent an experience, a purchase, a result, or a photograph to
fill this category.

Each first-hand article must state the author, approximate experience date and
area, what was personally observed, whether the item or visit was paid for,
and whether any sponsorship or free product existed. Include strengths,
limitations, who the experience may suit, and details another reader can
verify. Remove faces, vehicle plates, receipt identifiers, precise home
locations and other private or security-sensitive information.

A draft produced in Claude or another writing tool is input, not evidence.
Check it against the owner's factual notes and photographs, then edit for
natural Vietnamese, unsupported claims, promotional language, and disclosure.
Do not publish an empty category page. Add `Kim ở Việt Nam` to the primary
navigation and the first editorial block below the homepage hero only after at
least three substantial first-hand articles are ready. A first-hand article
replaces one Korean-story slot; it does not increase the daily total.

## Tin mới Việt Nam

News discovery may use reputable outlets, but factual publication must be
grounded in a primary official source whenever one exists: the responsible
agency, an original regulation, an official bulletin, or a named expert body.
Anonymous community posts are never confirmation of a news event.

Every news explainer must:

- use `kind: "news"` and the `Tin mới Việt Nam` category;
- display `publishedAt`, `updatedAt`, and visible `sourceLinks`;
- distinguish sourced facts from Dabangzz explanation;
- add independent value such as context, limitations, regional differences, a
  practical checklist, or a clear path to the newest official update;
- avoid copying the source's structure, wording, photographs, or headline;
- label AI art as illustration and never present it as a documentary image;
- correct material errors promptly and record the new update time.
- contain at least five substantive sections and roughly 900–1,400 Vietnamese
  words;
- surface dates, locations, units, comparison baselines and important numbers
  in a `keyFacts` block when the source provides them;
- explain what each number means, what it does not mean, regional differences,
  and the exact path to the newest official update;
- never pad length with repeated warnings, generic filler or paraphrases of the
  same fact.

Do not publish unverified breaking news. Exclude party politics, election
persuasion, graphic disasters, identifiable victims, active crime details,
lottery and gambling, medical diagnosis or treatment, individualized legal or
financial advice, and rumors about named people. Public-service information may
be covered neutrally when it is based on a current official source.

## AdSense-first quality gate

The editorial goal is a useful publication, not a page-volume shortcut. Before
publishing, confirm that the article is original, substantial, easy to navigate,
transparent about sources, and free of misleading claims. Reject simple
translation, sentence-level paraphrase, keyword stuffing, near-duplicate angles,
clickbait unsupported by the body, and pages created mainly to hold ads.

Keep the editorial-policy, privacy, and contact pages reachable from the site
footer. Do not add fake ad boxes. Do not add AdSense code, `ads.txt`, a publisher
ID, or a consent claim until the account owner supplies the real values and the
site is actually enrolled.

## AI image rules

Every new article must include one original AI-generated landscape editorial
image in its `images` array. Add a second image only when it materially helps
explain the article. Keep the established warm ivory, ink black, charcoal,
coral-red and dusty-blue visual language. Images must contain no readable text,
logos, brand marks, watermarks, copied people, or likenesses of named public
figures. Use fictional, non-identifiable people and write a useful Vietnamese
alt description. Optimize the final file for web delivery and store it under
`public/images/editorial/` before the article references it.
