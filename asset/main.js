// Variables
var lastResult = 0.0;
var buffer = 0.0;
var answer = 0.0;
var store = 0.0;
var command = 0;
var point = false;
var pointPos = 0;
var pressedEquel = false;
var pressedCommand = false;



//-----------------------------------------------------------------------------------------------------
// Show output Function
showBuffer = () => {
    if(point){
        document.getElementById("output").innerHTML = buffer.toFixed(3);
    } else {
        document.getElementById("output").innerHTML = buffer.toFixed(0);
    }
}

showAnswer = () => {
    document.getElementById("output").innerHTML = lastResult.toFixed(3);
}



//-----------------------------------------------------------------------------------------------------
// Buffer Controll
addNumber = (num) => {
    
    // For pointer value including
    if(point){
        let divNum = 10;
        let pointPosX = pointPos;

        while(pointPosX > 0){
            divNum *= 10;
            pointPosX--;
        }

        let newNum = num / divNum;
        buffer += newNum;
        pointPos++;
    } else {
        // look for 0 because its INT
        if( buffer == 0 ){
            buffer = num;
        } else {
            buffer *= 10;
            buffer += num;
        }
    }
    
    if(pressedEquel){
        pressedEquel = false;
        lastResult = 0;
    }
}

additionalOpperation = () => {
    store = buffer;
    buffer = 0.0;
    point  = false;
    pressedEquel = false;
    
    if(command > 0 ){
        executeCommand();
    } else {
        answer = store;
        command = 1;
    }
}

subtractionOpperation = () => {
    store = buffer;
    buffer = 0.0;
    point  = false;
    pressedEquel = false;
    
    if(command > 0 ){
        executeCommand();
    } else {
        answer = store;
        command = 2;
    }
}

multipicationOpperation = () => {
    store = buffer;
    buffer = 0.0;
    point  = false;
    pressedEquel = false;
    
    if(command > 0 ){
        executeCommand();
    } else {
        answer = store;
        command = 3;
    }
}

divitionOpperation = () => {
    store = buffer;
    buffer = 0.0;
    point  = false;
    pressedEquel = false;
    
    if(command > 0 ){
        executeCommand();
    } else {
        answer = store;
        command = 4;
    }
}

console.log("Made By Error6251");
// make the parfect result When it need.
executeCommand = () => {
    store = buffer;
    buffer = 0;

    switch(command){
        case(1) : 
            lastResult = (lastResult + answer) + store;
            break;
        case(2) : 
            lastResult = (lastResult + answer) - store;
            break;
        case(3) : 
            lastResult = (lastResult + answer) * store;
            break;
        case(4) : 
            lastResult = (lastResult + answer) / store;
            break;
    }
    console.log(lastResult);
    store = 0;
}

// Show result when '=' pressed
lastShowingResult = () => {
    executeCommand();
    showAnswer();
    command = 0;
}

// Clear all value for a fresh start
allClear = () => {
    command = 0;
    answer = 0;
    buffer = 0;
    store = 0;
    lastResult = 0;
    point = false;
    pointPos = 0;
}



//-----------------------------------------------------------------------------------------------------
// Button Controll Function
button0 = () => {
    pressedCommand = false;
    addNumber(0);
    showBuffer();
}

button1 = () => {
    pressedCommand = false;
    addNumber(1);
    showBuffer();
}

button2 = () => {
    pressedCommand = false;
    addNumber(2);
    showBuffer();
}

button3 = () => {
    pressedCommand = false;
    addNumber(3);
    showBuffer();
}

button4 = () => {
    pressedCommand = false;
    addNumber(4);
    showBuffer();
}

button5 = () => {
    pressedCommand = false;
    addNumber(5);
    showBuffer();
}

button6 = () => {
    pressedCommand = false;
    addNumber(6);
    showBuffer();
}

button7 = () => {
    pressedCommand = false;
    addNumber(7);
    showBuffer();
}

button8 = () => {
    pressedCommand = false;
    addNumber(8);
    showBuffer();
}

button9 = () => {
    pressedCommand = false;
    addNumber(9);
    showBuffer();
}

buttonAdd = () => {
    if(!pressedCommand){
        pressedCommand = true;
        additionalOpperation();
        document.getElementById("output").innerHTML = "+";
    }
}

buttonSub = () => {
    if(!pressedCommand){
        pressedCommand = true;
        subtractionOpperation();
        document.getElementById("output").innerHTML = "-";
    }
}

buttonMul = () => {
    if(!pressedCommand){
        pressedCommand = true;
        multipicationOpperation();
        document.getElementById("output").innerHTML = "*";
    }
}

buttonDiv = () => {
    if(!pressedCommand){
        pressedCommand = true;
        divitionOpperation();
        document.getElementById("output").innerHTML = "/";
    }
}

buttonDot = () => {
    pressedCommand = false;
    point  = true;
    showBuffer();
}

buttonEql = () => {
    pressedCommand = false;
    pressedEquel = true;
    lastShowingResult();
}

buttonC = () => {
    pressedCommand = false;
    allClear();
    showBuffer();
}