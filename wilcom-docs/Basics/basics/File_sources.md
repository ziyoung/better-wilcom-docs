# File sources

While embroidery files are broadly classified as ‘[design](../../glossary/glossary)’ (outline) or ‘machine’ (stitch), EmbroideryStudio internally tags files as belonging to one of four types – native design (A), imported outlines (B), processed stitches (C), or imported stitches (D).

| Grade | Description                                                                                                                                                                                            |
| ----- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| A     | Pure embroidery file created in EmbroideryStudio or similar software. These files contain objects, outlines and stitches.                                                                              |
| B     | Designs read from an outline format such as GNC and saved in ART / EMB / JAN format. Such designs cannot be read directly by EmbroideryStudio but once converted, they are treated as Grade B designs. |
| C     | Designs read from machine files – EXP, DST, PES, etc – where stitches have been converted to objects.                                                                                                  |
| D     | Designs read from machine files where stitches have NOT been converted to objects.                                                                                                                     |

Native EMB designs as well as ART and JAN files are all ‘Grade A’ embroidery formats read and written by EmbroideryStudio. They are called ‘Grade A’ because they contain a complete set of design information in a single file – object outlines, properties, stitches, thread colors, thumbnail image, and comments. There are three other grades of embroidery file. It goes without saying that only Grade A files provide 100% perfect scaling and transformation.

Note: For information about the source of a design file, refer to the Design Information docker.

## Related topics...

- [View design details in EmbroideryStudio](../view/View_design_details_in_EmbroideryStudio)
