# Sequin machine formats

Before using the Sequin tools, you need to choose a suitable [machine format](../../glossary/glossary#machine-format). Only some machine formats support beading – e.g. Barudan FDR-3, Dahao, Tajima TBF, and SWF Twin Sequin. Refer to your machine manual for information about support for this type of decoration.

::: info Note
For machine formats that have no sequin capability, the sequin palette will display. However, if you attempt to create a sequin object, fixing stitches will be digitized without sequin drops.
:::

## Dahao machine format

EmbroideryStudio supports the Dahao machine format which in turn supports multi-sequin devices. Up to eight (8) sequins can be defined per device. The Dahao controller is used on many Chinese machines.

When you select Dahao as your machine type, Dahao multi-sequin DST file format is available on output. The Drop Sequin functions are inserted according to Dahao multi-sequin requirements.

The actual Dahao definition for multi-sequin drops is this: one Jump signifies drop sequin A, two Jumps on the same spot mean drop sequin B, three Jumps signify a sequin C drop, and so on.

Dahao control panels include a protocol to interpret this encoding. Tajima machines, on the other hand, strictly follow the DST file specification. Namely, one Jump per sequin drop.

::: info Note
The Dahao controller is configured according to the capabilities of the particular sequin device. The digitizer needs to know what the device is capable of – e.g. whether capable of sequin stacking, etc.
:::
