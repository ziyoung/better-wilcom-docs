# Machine function types

EmbroideryStudio lets you manually insert color changes, thread trims, [jumps](../../glossary/glossary), machine stops, needles in and out, and boring functions, depending on the selected [machine format](../../glossary/glossary#machine-format).

## Color Change functions

Color Change functions tell the machine to use the next thread color in the design. They are automatically inserted when you select a new color from the [color palette](../../glossary/glossary#color-palette). [See Assign thread colors for details.](../../Basics/threads/Assign_thread_colors)

::: info Note
You only need to insert manual color change functions if you cannot recolor using standard methods – for example, when using multiple colors within a single object.
:::

## Trim functions

Trim functions instruct machines with trimmers to cut connecting threads before moving to the next object. You insert trims automatically by setting [connector](../../glossary/glossary) values or using the Trim tool. See [Automatic trim settings](../../Quality/connectors/Automatic_trim_settings) and [Add trims](../../Quality/connectors/Add_trims) for details.

If you need additional trims, you can insert the functions manually.

::: info Note
If a machine does not have a trimmer, the Trim function is ignored. Depending on the machine format, the Trim function may be a code or a sequence of jumps. [See Trim functions for details.](../../Setup/machines/Trim_functions)
:::

## Stop functions

If you want the embroidery machine to stop for any reason during stitching, you need to manually insert a Stop function in the stitching sequence.

::: tip
Because a Stop function may be inserted for various reasons, you should record the purpose of the stop on the [production worksheet](../../glossary/glossary#production-worksheet) to assist the machine operator.
:::

## Jump functions

Jump functions cause frame movements without needle penetrations and are used to move smoothly from one part of a design to another. There are various methods for automatically entering Jump functions.

- Apply Auto Jump to preserve long stitches. [See Preserve long stitches for details.](../../Quality/quality/Preserve_long_stitches)
- Digitize individual jumps by right-clicking the Manual icon. [See Digitizing manual stitches for details.](Digitizing_manual_stitches)
- Select jumps as connectors. [See Use jumps as connectors for details.](../../Quality/connectors/Use_jumps_as_connectors)
- Create jump connectors manually by digitizing with Penetrations deselected. [See Add jumps with penetrations off for details.](../../Quality/connectors/Add_jumps_with_penetrations_off)

If you need additional jumps, you can insert the functions manually.

## Begin/End Jump functions

The Begin/End Jump functions (formerly known as Needle Out/In) instruct the machine whether or not to use needle penetrations. You insert these functions automatically using the Penetrations tool (formerly known as Needles In). [See Add jumps with penetrations off for details.](../../Quality/connectors/Add_jumps_with_penetrations_off)

If you need additional Begin/End Jump functions, you can insert them manually.

::: info Note
Remember to insert a End Jump function to instruct the machine to resume normal stitching.
:::

## Borer In/Out functions

Borer In/Out functions are available for embroidery machines equipped with a borer. They instruct the machine when to use the boring knife or tool instead of a needle. You insert these functions automatically using the Borers tool (formerly known as Borers In). [See also Boring.](../../Applied/mixed/Boring)

If you need additional Borer In or Out functions, you can insert them manually.

## Sequin On/Off functions

Sequin On and Sequin Off functions are available for embroidery machines that are equipped with a sequin dispenser. The Sequin On function generally instructs the machine to physically lower the sequin dispenser into position for sequins to be placed (fed and cut). These functions are automatically inserted when using the Sequin tools. [See Sequin Embroidery for details.](../../Applied/sequin_basics/Sequin_Embroidery)

If you need additional Sequin On or Sequin Off functions, you can insert them manually. [See Insert sequin drops for details.](../../Applied/sequin_advanced/Insert_sequin_drops)

Some machines, notably Schiffli, use only explicit Drop Sequin functions. These instruct the machine to drop a sequin on the fabric for stitching. Schiffli machines, for example, do not require Sequin On/Off functions. See the ES Schiffli User Manual Supplement for details.

## Related topics...

- [Insert machine functions manually](Insert_machine_functions_manually)
- [Edit machine functions manually](Edit_machine_functions_manually)
