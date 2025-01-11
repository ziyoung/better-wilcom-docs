# Best EmbroideryStudio input methods for Melco CND output

This table details which input methods give the best results when digitizing a design for Melco EDS-III CND output.

| Input method           | Compatibility   | Notes                                                                                                                                                                                                           |
| ---------------------- | --------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Column A, B, C         | OK              | Use with Satin only.                                                                                                                                                                                            |
| Complex Fill           | OK              | Only use with Tatami fill. Do not digitize pointed ends as they will be ‘squared off’ during conversion. Cut off pointed ends with a straight line, parallel to the stitch angle, to avoid conversion problems. |
| Complex Turning        | Not recommended | Complex Turning objects are separated into a single object per segment. Conversions may produce undesired results.                                                                                              |
| Circle                 | OK              |                                                                                                                                                                                                                 |
| Ring                   | Not recommended | The exit point will be on the wrong side of the shape.                                                                                                                                                          |
| Star                   | Not recommended | The stitches are output as Walk.                                                                                                                                                                                |
| End - Keep Last Stitch | OK              | The exit point should always be on the opposite side to the entry point.                                                                                                                                        |
| End - Omit Last Stitch | Do not use      | Start digitizing the next shape on the opposite side instead.                                                                                                                                                   |
