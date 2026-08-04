# Codex instructions for Food Radar VN

These instructions apply to every file under `automation/foodworld/`.

## Goal

Maintain a review-first pipeline that turns global food and non-alcoholic beverage sources into Vietnamese motion-card content for TikTok, Facebook Reels, and YouTube Shorts.

## Mandatory safety and publishing rules

- Keep `publishing.enabled` set to `false` unless the repository owner explicitly asks to enable a named platform after account authorization is complete.
- Never invent, commit, print, or log API keys, OAuth tokens, refresh tokens, page IDs, or account credentials.
- Never commit `.env`, `config.yml`, `runtime/`, rendered media, caches, or approval files.
- Do not remove the confidence gate, risk flags, review mode, SHA-256 approval binding, or post-approval tamper check.
- Keep alcohol, nicotine, cannabis, supplements, weight-loss pills, and other excluded categories blocked by default.
- Do not present AI-generated images as documentary photographs of actual products or events.
- Do not add claims about price, sales, launch dates, taste, health effects, or Vietnam availability without source support.

## Windows setup task

When asked to install this module on the connected Windows PC:

1. Check out `agent/global-food-media-pipeline` or the branch that contains this folder.
2. Read `README_KO.md` before making changes.
3. Confirm Python 3.11 or newer is available.
4. Run `scripts/setup_windows.ps1`.
5. Confirm FFmpeg and `ffprobe` are available; install FFmpeg with the documented Windows command only when needed.
6. Copy example configuration files only if the real files do not already exist.
7. Leave all publishing switches off and do not request or fabricate credentials.
8. Run `pytest` from `automation/foodworld/` after the editable package installation.
9. Generate a sample from `content/manual-topic.example.json`.
10. Verify the sample MP4 is 1080×1920, H.264, 30 fps, with AAC audio, and confirm that `review.html`, six vertical cards, six carousel cards, the Vietnamese caption, Korean memo, story manifest, and source URLs exist.
11. Report exact commands, test results, generated paths, and any blocker. Do not claim installation success without terminal evidence.

## Development checks

Run these before committing code changes:

```bash
python -m pip install -e '.[dev]'
pytest
```

For rendering changes, also generate a sample package and inspect at least the first and last vertical cards plus `ffprobe` output.

## Scope

Keep this automation self-contained. Do not modify existing Dabangzz site routes, production workers, or unrelated business files unless the owner explicitly expands the task.
