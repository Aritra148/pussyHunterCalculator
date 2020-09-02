# pussyHunterCalculator
A calculator for pussy level Noob Coders
Made with HTML, CSS, Javascript


# Manual

*lastResult* uses for containig the real result or the output result

*buffer* uses for showing the user their inputs

*answer* and *store* use for collecting temporary data from input's

*command* is for knowing whats the calculation method 1 = +, 2 = -, 3 = *, 4 = /.

*point* is for if we use float number as input and the position of that point value.

*pressed-Equel/Command* is use for knowing that is user is pressing that button or not...!

*SPECIAL_CONDITIONS:*

-> After getting the result if user pressed any command(+,-,*,/) then the new result will the modified result of the old result. exmp: 5 + 5 = 10 + 5 = 15 Otherwise the old result will be deleted. //pressedEquel is the reason for doing this.//

-> If user pressed more than one conmmand(+,-,*,/) the only the first command will be taken others will be ignored. //pressedCommand is the reason for doing this.//

*.toFixed()* function is used for limiting the output numbers after decimal.

*exicuteCommand()* do all the calculations. _Opperation use for tracking the command that need to exicute.

*addNumber()* is made for taking input data. If the input is a decimal number it will multiply the old number with 10 then add them. exmp: buffer = 12, input = 5 [ (buffer*10)+input ] = (12*10)+5 = 125. if the buffer is already empty then it just add the input istade of mulpication. Float number will be added as [ buffer + input/(10*floatPosition) ].

ID is used for uniquely know the button, so JS can manupulate the result as user want.

Made By Error6251© 👌