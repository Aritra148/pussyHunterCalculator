# pussyHunterCalculator
A calculator for pussy level Noob Coders
Made with HTML, CSS, Javascript

![ScreenShort](https://github.com/Error6251/pussyHunterCalculator/blob/master/asset/Capture.PNG)

# Manual

[1] **lastResult** uses for containig the real result or the output result

[2] **buffer** uses for showing the user their inputs

[3] **answer** and **store** use for collecting temporary data from input's

[4] **command** is for knowing whats the calculation method 1 = +, 2 = -, 3 = *, 4 = /.

[5] **point** is for if we use float number as input and the position of that point value.

[6] **pressed-Equel/Command** is use for knowing that is user is pressing that button or not...!

[7] **SPECIAL_CONDITIONS:**

-> After getting the result if user pressed any command(+,-,*,/) then the new result will the modified result of the old result. exmp: 5 + 5 = 10 + 5 = 15 Otherwise the old result will be deleted. //pressedEquel is the reason for doing this.//

-> If user pressed more than one conmmand(+,-,*,/) the only the first command will be taken others will be ignored. //pressedCommand is the reason for doing this.//

[8] **.toFixed()** function is used for limiting the output numbers after decimal.

[9] **executeCommand()** do all the calculations. _Opperation use for tracking the command that need to execute.

[10] **addNumber()** is made for taking input data. If the input is a decimal number it will multiply the old number with 10 then add them. exmp: buffer = 12, input = 5 [ (buffer x 10)+input ] = (12 x 10)+5 = 125. if the buffer is already empty then it just add the input istade of mulpication. Float number will be added as [ buffer + input/(10 x floatPosition) ].

[11] ID is used for uniquely know the button, so JS can manupulate the result as user want.

Made By Error6251© 👌