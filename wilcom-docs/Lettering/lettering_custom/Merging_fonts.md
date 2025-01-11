# Merging fonts

You can merge letters from two or more fonts with the stand-alone font merging utility. Files to be merged must be placed in the EmbroideryStudio userletw folder of your installation.

## To merge fonts...

1. Select Start > Programs > MS-DOS Prompt.

2. When the command prompt appears, change to the BIN directory of your EmbroideryStudio installation. This is usually:

C:\\Program Files\\Wilcom\\EmbroideryStudio_e4.5\\BIN

3. Choose whether to automatically overwrite or receive prompt.

- To automatically overwrite the letters in the first file with letters of the same name from the other file(s), type:

alphcat.exe file1.ESA file2.ESA file3.ESA.

- To receive a prompt message before a letter is overwritten, type:

alphcat.exe file1.ESA file2.ESA file3.ESA /Y.

Press Y or N to confirm whether to overwrite.

4. Click Yes to merge.

## Related topics...

- [Converting TrueType fonts to embroidery](Converting_TrueType_fonts_to_embroidery)
- [Creating user-refined letters](Creating_user-refined_letters)
- [Creating custom fonts](Creating_custom_fonts)
