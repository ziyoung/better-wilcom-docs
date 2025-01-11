# Other parameters

In addition to basic and decorative chenille stitch types and effects, you need to be aware of the following chenille settings...

## Scaling

As with lockstitch designs, any chenille design created in EmbroideryStudio can be scaled. Stitches are automatically recalculated from object outlines. Densities are preserved and there are no gaps or heavy over-stitching. Compound Chenille objects are recalculated together with their offset borders.

When old chenille designs are read from stitch data – e.g. Melco EXP, Tajima or Barudan disk – the EmbroideryStudio Stitch Processor converts them to objects. However, it does not fully recognize Coil and Square stitching. These will be converted to a series of Run stitch objects. This limits the scalability of these old designs to ±5-10%. However, old designs can be readily stitch-edited and sections re-digitized if required. [See Opening machine files for details.](../../Production/convert/Opening_machine_files)

## Trims

Few chenille machines have an automatic thread trim mechanism as connecting threads are under the fabric and are not visible. In this case, digitize all shapes and lines of the same color sequentially in order to minimize manual trims. This will reduce stitchout time. Be careful how you connect from one spot to another. Avoid long connecting stitches which may pull previous stitching and require trimming. Typically, most objects will include a chain run before the fill to tie-in, and another chain run after, to tie-off.

## Jumps

Jump(M) functions cause frame movements without needle penetrations. The use of jumps is not recommended because the pulling effect on the fabric during a jump may distort the design, especially if the fabric is thin. To avoid long connecting stitches, plan carefully the order in which you digitize shapes and lines. Use chain stitch rather than jumps when traveling across a shape filled with moss stitching as chain stitch will be hidden beneath moss stitching. Use Jump only if there is a significant contrast in colors, particularly if the current stitch is of a lighter color where the yarn may show through.

## Corners

Avoid corners with an angle smaller than 60° as this can cause a machine fault or loop stitching may be changed to chain. EmbroideryStudio automatically adds an extra stitch to avoid sharp corners within objects, including manual stitch objects. If you round off sharp corners in runs and complex fills, you can avoid both sharp angles and small stitches. However, sometimes an extra stitch causes chain stitches to swell, giving a poor finish.

Tip: Use Smart Corners to achieve smooth, even placement of stitches, and eliminate gaps in your design. Smart Corners can be used with Square stitch and Coil for Column C objects. [See Controlling corner stitching for details.](../../Quality/quality/Controlling_corner_stitching)
