# Food Radar VN — global food media automation

A review-first pipeline that turns global food and **non-alcoholic** beverage stories into:

- one 9:16 MP4 for TikTok, Facebook Reels, and YouTube Shorts;
- six 9:16 vertical cards;
- six 4:5 Facebook carousel cards;
- a Vietnamese caption and hashtags;
- a Korean owner-review memo;
- a source and approval manifest.

The output is motion-card video rather than generative talking-head video. This keeps cost, rendering failures, and factual-image risk low while preserving a native short-form format.

## Operating model

1. RSS/Atom feeds are collected and deduplicated.
2. Age-restricted and unsuitable topics are rejected before generation.
3. Candidates are ranked by recency, source weight, and food-trend signals.
4. The source page is extracted when available.
5. The OpenAI Responses API creates a strict JSON editorial package in Vietnamese plus a Korean review summary.
6. Pillow renders cards and FFmpeg creates a 9:16 H.264 MP4.
7. Publishing remains blocked unless all of these are true:
   - `publishing.enabled: true`;
   - `approval_mode: auto`;
   - the platform is enabled;
   - confidence is at least 0.75;
   - `risk_flags` is empty;
   - the required platform credentials are present.

Default mode is **review**. The first operating phase should produce one post per day, review the first 20 packages, and only then consider guarded automation.

## Windows setup

From PowerShell:

```powershell
cd automation\foodworld
powershell -ExecutionPolicy Bypass -File scripts\setup_windows.ps1
winget install Gyan.FFmpeg
```

Fill `.env`, then run:

```powershell
powershell -ExecutionPolicy Bypass -File scripts\run_windows.ps1
```

The result appears under `runtime\output\<slug>\`. Open the newest review page with:

```powershell
powershell -ExecutionPolicy Bypass -File scripts\open_latest.ps1
```

After checking the video, every card, Vietnamese caption, sources, and Korean memo, approve that exact package:

```powershell
powershell -ExecutionPolicy Bypass -File scripts\approve_latest.ps1 -By "Kim"
```

Publishing remains off until `publishing.enabled` and at least one platform switch are set to `true` in `config.yml`. Once credentials and platform approvals are ready:

```powershell
powershell -ExecutionPolicy Bypass -File scripts\publish_latest.ps1
```

Approval stores SHA-256 hashes of `story.json` and `video.mp4`. Any edit after approval invalidates the approval and forces another review.

To convert a Korean-discovered topic or manually selected source:

```powershell
Copy-Item content\manual-topic.example.json content\manual-topic.json
# Edit the JSON with the original source URL and factual summary.
powershell -ExecutionPolicy Bypass -File scripts\run_windows.ps1 -Manual content\manual-topic.json
```

## Linux / CI setup

```bash
cd automation/foodworld
python -m venv .venv
. .venv/bin/activate
pip install -e '.[dev]'
cp config.example.yml config.yml
pytest
python -m foodworld --config config.yml generate
```

## Publishing adapters

- **Facebook Reels:** Graph API start → binary upload → finish/publish.
- **TikTok:** default is upload-to-inbox, which leaves the final confirmation in TikTok. Direct posting is available only after the app has the required approval and the user authorization supports it.
- **YouTube Shorts:** OAuth refresh token → resumable `videos.insert`; default privacy is `private`.

Platform applications, page/channel authorization, URL verification, and production app review are external account steps. Credentials belong only in local `.env` or GitHub Actions secrets—never in the repository.

## Editorial policy built into the pipeline

- No invented prices, sales figures, launch dates, taste claims, or Vietnam availability.
- Source URL is retained with every package.
- AI illustrations, when later enabled, must be labeled as illustration and must not be presented as documentary product photography.
- Alcohol, nicotine, cannabis, supplements, weight-loss pills, and similar categories are excluded by default.
- Health, legal, and safety claims require manual review.
- One strong post per day is the launch target; volume is increased only after retention and completion-rate data justify it.

## Files that matter most

- `config.yml`: sources, topic exclusions, output dimensions, platform switches.
- `.env`: credentials and API keys.
- `foodworld/editorial.py`: ranking, safety gate, structured editorial generation.
- `foodworld/render.py`: card and MP4 rendering.
- `foodworld/publishers.py`: platform upload adapters.
- `review.html`: local browser review page generated for every package.
- `approval.json`: cryptographic approval record bound to the reviewed story and video.
- `.github/workflows/foodworld-daily.yml`: daily review-package generation with deduplication state restored from Actions cache.
