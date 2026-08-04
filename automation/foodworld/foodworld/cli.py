from __future__ import annotations

import argparse
import json
import os
from pathlib import Path

from .config import load_config
from .pipeline import approve_package, publish_reviewed_package, run_discovery_pipeline, run_manual_candidate


def build_parser() -> argparse.ArgumentParser:
    parser = argparse.ArgumentParser(description="Food Radar VN content automation")
    parser.add_argument("--config", default="config.yml", help="Path to YAML configuration")
    subparsers = parser.add_subparsers(dest="command", required=True)

    generate = subparsers.add_parser("generate", help="Discover and generate one review package")
    generate.add_argument("--publish", action="store_true", help="Attempt auto-publishing subject to config guardrails")

    manual = subparsers.add_parser("manual", help="Generate from a manually supplied candidate JSON")
    manual.add_argument("input", type=Path, help="Candidate JSON file")
    manual.add_argument("--publish", action="store_true", help="Attempt auto-publishing subject to config guardrails")

    approve = subparsers.add_parser("approve", help="Approve a rendered package after review")
    approve.add_argument("package", type=Path, help="Rendered package directory")
    approve.add_argument("--by", default=os.getenv("FOODWORLD_APPROVER", "owner"), help="Approver name")
    approve.add_argument("--note", default="", help="Approval note")
    approve.add_argument("--allow-risk", action="store_true", help="Approve despite recorded confidence/risk flags")

    publish = subparsers.add_parser("publish", help="Publish an already approved package")
    publish.add_argument("package", type=Path, help="Approved package directory")
    return parser


def main() -> None:
    args = build_parser().parse_args()
    config = load_config(args.config)
    if args.command == "generate":
        story, output, results, errors = run_discovery_pipeline(config, publish=args.publish)
        payload = {
            "slug": story.slug,
            "title": story.title_vi,
            "output": str(output),
            "review_html": str(output / "review.html"),
            "confidence": story.confidence,
            "risk_flags": story.risk_flags,
            "feed_errors": errors,
            "publish": [result.model_dump() for result in results],
        }
    elif args.command == "manual":
        story, output, results = run_manual_candidate(config, args.input, publish=args.publish)
        payload = {
            "slug": story.slug,
            "title": story.title_vi,
            "output": str(output),
            "review_html": str(output / "review.html"),
            "confidence": story.confidence,
            "risk_flags": story.risk_flags,
            "publish": [result.model_dump() for result in results],
        }
    elif args.command == "approve":
        approval = approve_package(
            args.package,
            approved_by=args.by,
            note=args.note,
            allow_risk_flags=args.allow_risk,
        )
        payload = {"package": str(args.package.resolve()), "approval": approval}
    else:
        story, results = publish_reviewed_package(config, args.package)
        payload = {
            "slug": story.slug,
            "package": str(args.package.resolve()),
            "publish": [result.model_dump() for result in results],
        }
    print(json.dumps(payload, ensure_ascii=False, indent=2))


if __name__ == "__main__":
    main()
