# Image transparencies

Support is provided for transparent backgrounds in 24 bit and 32 bit images.

![bitmaps00060.png](assets/bitmaps00060.png)

If an image contains a transparent background:

- The background is automatically excluded from auto-digitizing.
- The image is automatically cropped to its visible extents.

Caution: Avoid using images that contain semi-transparent or transparent pixels within image color areas as these cause poor results when reducing the color count. The resulting pixels may end up as holes inside the image or significantly reduce color areas to the point where they are unnecessarily removed from the embroidery results.
