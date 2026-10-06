# Image Credits

All photos are from [Unsplash](https://unsplash.com) and used under the
[Unsplash License](https://unsplash.com/license), which allows free commercial and
non-commercial use without permission. Attribution is not legally required, but
Unsplash asks for it, so the site credits each photographer in the footer.

Each file was downloaded from the Unsplash CDN as resized WebP and saved in
`src/assets/images/`.

| File | Used in | Photo | Photographer |
| --- | --- | --- | --- |
| `hero-blue-star-1920.webp`, `hero-blue-star-960.webp` | Hero background | [Blue sky with stars during night time](https://unsplash.com/photos/3o6NXErKXwo) | [Rylan Hill](https://unsplash.com/@rylanhill) |
| `nebula-blue.webp` | Why BlueStar | [A vibrant blue nebula in a starry night sky](https://unsplash.com/photos/4bVfDlj_yFE) | [Aron Visuals](https://unsplash.com/@aronvisuals) |
| `starfield-milky-way.webp` | CTA banner background | [Blue and white starry night sky](https://unsplash.com/photos/yEFtNvBB0QM) | [Timur Kozmenko](https://unsplash.com/@timrael) |
| `cloud-server-room.webp` | Services | [Woman in black top using Surface laptop](https://unsplash.com/photos/glRqyWJgUeY) | [Christina @ wocintechchat.com](https://unsplash.com/@wocintechchat) |
| `strategy-whiteboard.webp` | Process | [Three men sitting while using laptops and watching man beside whiteboard](https://unsplash.com/photos/wD1LRb9OeEo) | [Austin Distel](https://unsplash.com/@austindistel) |
| `team-collaboration.webp` | About | [Group of people using laptop computer](https://unsplash.com/photos/QckxruozjRg) | [Annie Spratt](https://unsplash.com/@anniespratt) |
| `public/og-image.jpg` | Social share preview (Open Graph) | Same photo as the hero (1200×630 crop) | [Rylan Hill](https://unsplash.com/@rylanhill) |

The star logo (`src/components/Logo.tsx`) and favicon (`public/favicon.svg`) are
original SVGs made for this site.

## Replacing an image

1. Save the new file in `src/assets/images/` (WebP or JPG, ~1000–1600 px wide).
2. Update the matching `import` and `alt` text in `src/content.ts`.
3. Update this table and the `imageCredits` list in `src/content.ts` (the footer reads from it).
