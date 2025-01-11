# Wilcom file formats

EmbroideryStudio uses its own native [EMB](../../glossary/glossary) embroidery file format which combines the advantages of design files and machine files. Outlines, stitches, thread colors, and other data are stored together. Outlines mean the file can be scaled and manipulated on an object basis while the stitch data preserves manual stitch-by-stitch edits and touchups. Features of most third-party formats are supported. Variants and precursors of the EMB file format are also shown in the table below.

| Extension         | Format | Read                                                     | Write |     |
| ----------------- | ------ | -------------------------------------------------------- | ----- | --- |
| EMB               |        | EmbroideryStudio design file (up to & including ES e4.5) | l     | l   |
| EMC               |        | Clipart files                                            | l     | l   |
| EMX               | ^      | Wilcom Cross Stitch                                      | l     |     |
| ESD               | †      | Wilcom DOS format                                        | l     |     |
| ESL               |        | Wilcom ESL                                               | l     | l   |
| ESS               |        | Wilcom ESS (Schiffli)                                    | l     | l   |
| INP               | ‡      | Wilcom condensed format                                  | l     |     |
| Legacy formats \* |        |                                                          |       |     |
| T01               |        | Tajima (Wilcom DST format)                               | l     | l   |
| T03               |        | Barudan (Wilcom DSB format)                              | l     | l   |
| T04               |        | Zangs                                                    | l     | l   |
| T05               |        | ZSK (Wilcom DSZ format)                                  | l     | l   |
| T09               |        | Pfaff (Wilcom KSM format)                                | l     | l   |
| T10               |        | Wilcom Plauen                                            | l     | l   |
| T15               |        | Wilcom Saurer                                            | l     | l   |

## Tips for use...

- ^ Can only be written by ES Cross Stitch application.
- † ESD is the native file format of DOS ES, the precursor to the current EmbroideryStudio. It is actually a machine file format with stitch blocks, stitch types and parameters, and an icon. It has few of the advantages of the current [EMB](../../glossary/glossary) file format.
- ‡ Wilcom INP is the native file format of Wilcom Computer Embroidery Design software. It is a design file format but it contains no stitch data. Wilcom INP designs can be directly converted to [EMB](../../glossary/glossary) files although EmbroideryStudio interprets some of the stitch types differently. [See Wilcom INP format for details.](Wilcom_INP_format)
- \* T0? formats contain stitch data that can be used to create paper tapes. This is the purpose for which they were originally created.
