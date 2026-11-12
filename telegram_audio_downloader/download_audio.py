#!/usr/bin/env python3
"""Download audio from a Telegram channel/topic that permits saving content."""

import argparse
import asyncio
import os
import re
import sys
from pathlib import Path
from urllib.parse import urlparse

from telethon import TelegramClient

AUDIO_EXTENSIONS = {
    ".aac", ".aiff", ".amr", ".flac", ".m4a", ".mid", ".midi",
    ".mp3", ".oga", ".ogg", ".opus", ".wav", ".wma",
}


def parse_channel_link(value: str) -> tuple[str, int | None]:
    """Return channel reference and optional post/topic ID from a t.me link."""
    value = value.strip()
    if not value.startswith(("https://", "http://")):
        return value.lstrip("@"), None

    parsed = urlparse(value)
    if parsed.netloc.lower() not in {"t.me", "www.t.me", "telegram.me", "www.telegram.me"}:
        return value, None

    parts = [part for part in parsed.path.split("/") if part]
    if parts and parts[0] == "c":
        # Also accept a public username pasted with an unnecessary /c/ prefix.
        if len(parts) > 1 and not parts[1].isdigit():
            link_id = int(parts[2]) if len(parts) > 2 and parts[2].isdigit() else None
            return parts[1].lstrip("@"), link_id
        # Numeric /c/<id>/<post> links are private chat links; resolve by session.
        return value, None
    if parts:
        link_id = int(parts[1]) if len(parts) > 1 and parts[1].isdigit() else None
        return parts[0].lstrip("@"), link_id
    return value, None


def is_audio(message) -> bool:
    file = message.file
    if not file:
        return False
    mime_type = (file.mime_type or "").lower()
    extension = (file.ext or "").lower()
    return (
        mime_type.startswith("audio/")
        or extension in AUDIO_EXTENSIONS
        or bool(message.voice)
        or bool(message.audio)
    )


async def iterate_list(messages):
    for message in messages:
        yield message


async def download(channel_ref: str, output: Path) -> int:
    api_id = os.environ.get("TELEGRAM_API_ID", "")
    api_hash = os.environ.get("TELEGRAM_API_HASH", "")
    if not api_id.isdigit() or not api_hash:
        raise RuntimeError("Set TELEGRAM_API_ID and TELEGRAM_API_HASH environment variables first.")

    output.mkdir(parents=True, exist_ok=True)
    client = TelegramClient(
        str(Path(__file__).resolve().parent / "telegram_session"), int(api_id), api_hash
    )

    async with client:
        channel_ref, link_id = parse_channel_link(channel_ref)
        channel = await client.get_entity(channel_ref)
        if getattr(channel, "noforwards", False):
            print("Content protection is enabled for this chat; stopping.", file=sys.stderr)
            return 0

        topic_id = link_id if getattr(channel, "forum", False) else None
        post_id = link_id if link_id is not None and topic_id is None else None
        if topic_id is not None:
            print(f"Forum chat detected; downloading audio from topic {topic_id}.")
            messages = client.iter_messages(channel, reply_to=topic_id, reverse=True)
        elif post_id is not None:
            print(f"Regular channel detected; checking post {post_id}.")
            result = await client.get_messages(channel, ids=post_id)
            messages = [result] if result else []
        else:
            messages = client.iter_messages(channel, reverse=True)

        saved = 0
        inspected = 0
        is_single_post = post_id is not None
        async for message in messages if not is_single_post else iterate_list(messages):
            inspected += 1
            if getattr(message, "noforwards", False) or not is_audio(message):
                if is_single_post:
                    file = message.file
                    text = message.message or ""
                    if file:
                        print(
                            "Post found, but audio was not recognized: "
                            f"mime_type={file.mime_type!r}, ext={file.ext!r}, "
                            f"name={file.name!r}, text={text[:160]!r}"
                        )
                    else:
                        print(f"Post found, but it has no media attachment. Text: {text[:300]!r}")
                continue

            path = await message.download_media(file=str(output))
            if path:
                saved += 1
                print(f"[{saved}] {Path(path).name}")

    if post_id is not None and inspected == 0:
        print(f"Post {post_id} was not found in this channel.", file=sys.stderr)
    if topic_id is not None and inspected == 0:
        print(f"No messages found in forum topic {topic_id}.", file=sys.stderr)
    print(f"Saved {saved} audio file(s) to: {output}")
    return saved


def main() -> None:
    parser = argparse.ArgumentParser(
        description="Download audio from a channel or forum topic that allows saving content."
    )
    parser.add_argument("channel", help="Channel username or t.me link; /<number> selects a post/topic")
    parser.add_argument(
        "-o", "--output", type=Path,
        default=Path(__file__).resolve().parent.parent / "assets" / "telegram_audio",
        help="Output directory (default: ../assets/telegram_audio)",
    )
    args = parser.parse_args()
    try:
        asyncio.run(download(args.channel, args.output.expanduser()))
    except (ValueError, RuntimeError) as error:
        parser.error(str(error))
    except KeyboardInterrupt:
        print("\nCancelled.", file=sys.stderr)


if __name__ == "__main__":
    main()
