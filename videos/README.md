# UGC videos (Travel Finds)

Public cloud storage for the UGC pipeline output. Direct HTTPS URLs are usable by
Instagram/Facebook/TikTok APIs and by the Pinterest video CSV importer.

| File | Video | Duration | Cover |
|---|---|---|---|
| `city-breaks-en.mp4` | 5 affordable city breaks in Europe (EN) | 41.5 s | `city-breaks-en-cover.jpg` |
| `flights-en.mp4` | The flight search order that saves money (EN) | 34.2 s | `flights-en-cover.jpg` |
| `escapadas-es.mp4` | 5 escapadas por Europa sin gastar de más (ES) | 40.9 s | `escapadas-es-cover.jpg` |

- 1080×1920, H.264/AAC, 30 fps, 9:16.
- Captions with affiliate disclosure: [`social-captions.json`](social-captions.json).
- CTA: `https://travel-finds-usa.pages.dev/travel-finds/blog/...`.
- B-roll: Openverse CC0 photos (credits in each source `video.json`).
- Generated with `travel-affiliate/tools/make_ugc_video.py` (FFmpeg + Kokoro).
