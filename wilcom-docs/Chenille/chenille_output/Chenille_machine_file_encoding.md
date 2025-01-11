# Chenille machine file encoding

Select the correct machine format before outputting the design. Each machine requires its own machine file format. There is no chenille-specific machine file format as such. Typically:

| Machine type | File type   | Purpose                                                            |
| ------------ | ----------- | ------------------------------------------------------------------ | --- |
| Tajima       | DST         | For pure chenille machines                                         |
|              | TBF         | For combination chenille and regular embroidery (including sequin) |     |
| Barudan      | DSB         | For pure chenille machines                                         |
|              | U??         | For combination chenille and regular embroidery (including sequin) |     |
|              | (FDR-3) U?? | Barudan FDR-3 machines                                             |     |
| Dahao        | DST         | For Dahao-controlled chenille machines                             |
| Melco        | EXP         | For pure chenille machines                                         |
| ZSK          | Z??         | For ZSK chenille machines                                          |

Upon output, EmbroideryStudio translates chenille stitch types – Moss and Chain – into machine functions that can be understood by the selected machine. TBF and U?? are newer formats intended for combination chenille machines. Upon export, machine head assignments are automatically encoded in the machine file.

## Machine file encoding

Most chenille machine files are encoded in DOS format. Some older style files are encoded in proprietary embroidery disk formats.

| Disk type  | Melco format | Barudan format            | Tajima format         |
| ---------- | ------------ | ------------------------- | --------------------- |
| DOS        | Melco EXP    | Barudan 2HD Barudan S-FMC | Tajima T01 Tajima DST |
| Embroidery | Melco        | Barudan                   | Tajima                |

Check the following values before sending the design.

| Machine type    | Format     | Check...                          |
| --------------- | ---------- | --------------------------------- |
| Melco           | Melco EXP  |                                   |
| Barudan         | Barudan    | Jump stitch length is within 4mm. |
| Tajima TMCE-100 | Tajima DST | Shortcut angle is set to 60°      |
| Tajima TMCE-600 | Tajima DST | Shortcut angle is set to 60°      |

## Stop code sequence

- Tajima DST file uses ‘Stop Code’ to switch between Chain and Moss. By default, it starts with Chain on Tajima Chenille machines.
- Later, Tajima introduced the multi-color TMCE-600 Chenille machine. Some Stop codes are used for switching between Chain and Moss, while others are for color changes.
- It is machine operator’s task to set Stop codes correctly. Some may be used for switching between Chain and Moss, some for color changes.
- Later, Tajima introduced multi-color Chenille combination machine, mixing chenille with normal machine heads. In this scenario, the Stop code sequence becomes more complicated. In addition to switching between Chain and Moss, they also trigger normal head color changes.
- Needle height is another setting which operators need to program into the machine.
