# Gunold PCH format

PCH ‘Punch and Stitch’ is the native file format of the Gunold Embroidery Design software. Gunold PCH designs can be directly converted to [EMB](../../glossary/glossary) files although EmbroideryStudio interprets some of the stitch types differently. This table details how Gunold PCH features are converted to EMB format.

| Gunold PCH                   | EMB                                                |
| ---------------------------- | -------------------------------------------------- |
| Outline types                |                                                    |
| Parallel                     | Column A                                           |
| Serial                       | Column C                                           |
| Block Outline                | Complex Fill                                       |
| Run                          | Run                                                |
| Incline                      | Run                                                |
| Manual                       | Manual                                             |
| Stitch types                 |                                                    |
| Satin                        | Satin                                              |
| Ceding                       | Tatami                                             |
| Random Ceding                | Tatami with random factor applied                  |
| Step                         | Tatami                                             |
| Piping                       | Contour                                            |
| OBI                          | Tatami                                             |
| Zigzag                       | Zigzag                                             |
| Cross                        | not supported                                      |
| Photo                        | not supported                                      |
| Satin underlays              |                                                    |
| none                         | none                                               |
| Single                       | Center Run                                         |
| Edge                         | Edge Run                                           |
| Zigzag                       | Zigzag                                             |
| Cross                        | Zigzag                                             |
| Edge Zigzag                  | Edge Run + Zigzag                                  |
| Edge Cross                   | Edge Run + Zigzag                                  |
| Netting                      | Double Zigzag                                      |
| Double Zigzag                | Double Zigzag                                      |
| Triple Zigzag                | Double Zigzag                                      |
| Step / block fill levels     |                                                    |
| Complex Fill                 | Holes in Complex Fill                              |
| Form Fill                    | User Defined Split in Complex Fill                 |
| Vector Fill                  | User Defined Split in Complex Fill                 |
| Block Fill                   | Program Split in Complex Fill                      |
| Miscellaneous                |                                                    |
| Branches                     | Grouped object (uses lettering sequence algorithm) |
| Random - side 1 / side 2     | Jagged Edge effect                                 |
| Pitch                        | Stitch Spacing                                     |
| Length                       | Stitch length                                      |
| Stitch angle                 | Complex Fill stitch angle                          |
| U turn                       | Backtrack                                          |
| Compensation                 | Pull Compensation                                  |
| Corner mode                  | Smart Corners                                      |
| Short / Long                 | Stitch Shortening                                  |
| Square backstitch Satin Step | Straight stitch Trapunto                           |
| Styles                       | Motifs                                             |
| Patterns                     | none                                               |
