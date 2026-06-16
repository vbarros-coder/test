# Hero background assets (generate with Higgsfield)

The hero (`../index.html`) expects two Higgsfield-generated assets dropped in here.
Until they exist, the hero falls back gracefully to the deep-space base color.

## 1. `forest-space.jpg` — faint forest still ("mimic space")
Used as the `.hero__bg` layer and as the video `poster`/fallback.

**Higgsfield prompt:**
> Ultra-realistic photograph of a dense pine forest fading into the void of
> deep space, top of the trees dissolving into a star-flecked black cosmos,
> faint volumetric mist, extremely low light, cinematic, photorealistic,
> high detail, dark moody atmosphere, the forest barely visible like a distant
> memory. 16:9, 2000px wide.

Export: JPG/PNG, landscape (~2000×1125), dark exposure.

## 2. `forest-space.mp4` / `forest-space.webm` — slow 3D forest animation
Used as the `.hero__video` background layer (autoplay, muted, looped).

**Higgsfield prompt (image-to-video or text-to-video):**
> Ultra-realistic 3D cinematic flythrough of a misty forest at night,
> extremely slow and dramatic camera drift, volumetric god rays, drifting fog,
> subtle parallax between tree layers, photorealistic, the scene slowly
> dissolving into deep space at the edges, seamless loop. Very slow motion,
> dramatic, atmospheric.

Settings: slowest motion / longest duration available, seamless loop if
possible. Export MP4 (H.264) and ideally a WebM (VP9) for smaller size.

## After adding the files
No code change needed — the filenames above are already wired into
`index.html`. Just confirm the names match.
