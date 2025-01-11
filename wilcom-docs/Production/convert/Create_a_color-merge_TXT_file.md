# Create a color-merge TXT file

Auto color merge reads and interprets a TXT file containing colors from a named thread chart. You can create this text file manually with a text editor such as MS Notepad. The text file must have the same file name as the CND file – e.g. Fish.TXT and Fish.CND. Both files must reside in the same folder. For the Auto color merge function to work correctly, information in the text file must be entered in a certain format. A typical text file might look like this:

Fish

Uses curve effects

File: Fish

55.9mmW X 74.5mmH

ST: 6,780

Colors: 8

1\. Tropical Sunset

2\. Saffron

3\. Pale powder Blue

4\. Tropical Sunset

5\. Pale powder Blue

Curve effect

6\. Tropical White

7\. Tropical Sunset

8\. Pale powder Blue

## Text file structure

All text files contain some or all of the following elements.

| Txt file item    | Mandatory | Description                                                                                                                                                              | Example              |
| ---------------- | --------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | -------------------- |
| Design name      |           | This is the name of the design as it appears in File > Information > Design Information > Subject.                                                                       | Fish                 |
| Comments         |           | Lines inserted here appear under File > Information > Design Information > Comments.                                                                                     | Uses curve effects   |
| File name        | l         | This is the file name of the CND design file. The file extension should not be included.                                                                                 | File: Fish           |
| Design size      |           | Enter the expected design size for the design. The actual design size is derived from the software.                                                                      | 55.9mmW X 74.5mmH    |
| Stitch count     |           | Enter the expected stitch count for the design. The actual stitch count is derived from the software.                                                                    | ST: 6,780            |
| Number of colors | l         | States the total number of colors in the design.                                                                                                                         | Colors: 8            |
| Thread name 1    | l         | Enter the first thread name. The name of the thread is searched against the Thread Chart. The thread name is shown in the File > Design Information > Stop Sequence tab. | 1\. Tropical Sunset  |
| Thread name 2    | l         | Enter the second thread name.                                                                                                                                            | 2\. Saffron          |
| Thread name 3    | l         | Enter the third thread name.                                                                                                                                             | 3\. Pale Powder Blue |
| Thread name 4    | l         | Enter the fourth thread name.                                                                                                                                            | 4\. Tropical Sunset  |
| Thread name 5    | l         | Add any extra threads to this list.                                                                                                                                      | 5\. Pale Powder Blue |
| Thread comments  |           | Place comments below the relevant thread number.                                                                                                                         | Curve effect         |
| Thread name 6    | l         |                                                                                                                                                                          | 6\. Tropical White   |
| Thread name 7    | l         |                                                                                                                                                                          | 7\. Tropical Sunset  |
| Thread name 8    | l         |                                                                                                                                                                          | 8\. Pale Powder Blue |
