# Output to Tajima chenille machines

Tajima chenille machines have three functions – Chain, Moss and Color Change. The Tajima code system does not have specific codes assigned to these machine functions; each Tajima chenille machine uses different combinations of empty stitch and stop codes to indicate these machine functions. Chenille provides machine formats for both Tajima chenille machines.

There are two types of Tajima chenille machine – TMCE-100 and TMCE-600\. The newer Tajima TMCE-600 machine only uses single stop codes for switching between chain and moss stitching. The old ‘multistop’ TMCE-100 machine uses different combinations of multiple stop codes and empty stitch codes for the chain, moss and needle height functions. If you intend to stitch a design on one of these machines, make sure that you select the ‘Tajima Chenille multi-stop’ machine format. The chain, moss and needle height functions will be automatically converted to the correct combinations of empty stitch and stop codes.

| From  | Change color | Change needle height | To    | Function codes      | Machine setup for needle height |
| ----- | ------------ | -------------------- | ----- | ------------------- | ------------------------------- |
| Chain | 3            | 7                    | Chain | stop                | \-                              |
| Chain | 7            | 3                    | Chain | stop                | set new height                  |
| Chain | 3            | 3                    | Chain | stop-empty-stop     | set new height 2                |
| Chain | 7            | 7                    | Moss  | stop-stop           | \-                              |
| Chain | 3            | 7                    | Moss  | stop-stop-stop-stop | \-                              |
| Chain | 7            | 3                    | Moss  | stop-stop           | set new height                  |
| Chain | 3            | 3                    | Moss  | stop-stop-stop-stop | set new height 2                |
| Moss  | 3            | 7                    | Moss  | stop-stop           | \-                              |
| Moss  | 7            | 3                    | Moss  | stop-stop           | set new height                  |
| Moss  | 3            | 3                    | Moss  | stop-stop-stop-stop | set new height 2                |
| Moss  | 7            | 7                    | Chain | stop-stop           | \-                              |
| Moss  | 3            | 7                    | Chain | stop-empty-stop     | \-                              |
| Moss  | 7            | 3                    | Chain | stop                | set new height                  |
| Moss  | 3            | 3                    | Chain | stop-empty-stop     | set new height 2                |

The Tajima TMCE-S chenille machine only uses single stop codes for switching between chain and moss stitching. These machines cannot distinguish between the functions, so you need to select a function for each stop at the machine, in the same way as you select needle numbers for color stops. If you are using one of these machines, select the Tajima chenille TMCE-600 machine format. Each chain, moss and needle height function will be output as a single stop code.

## Condition file

When using TMCE-600 format and saving a design as a DST file, a condition file (\*.cc0) is saved alongside the design. This file contains information that the machine can read so that the setup process is partially automated.
