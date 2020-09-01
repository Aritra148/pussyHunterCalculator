// Variables
var lastResult = 0.0;
var buffer = 0.0;
var answer = 0.0;
var store = 0.0;
var command = 0;
var point = false;
var pointPos = 0;



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
        // look for 0 becouse its INT
        if( buffer == 0 ){
            buffer = num;
        } else {
            buffer *= 10;
            buffer += num;
        }
    }
    
}

additionalOpperation = () => {
    console.log(buffer);

    store = buffer;
    buffer = 0.0;
    point  = false;
    
    if(command > 0 ){
        exicuteCommand();
    } else {
        answer = store;
        command = 1;
    }
}

subtractionOpperation = () => {
    console.log(buffer);

    store = buffer;
    buffer = 0.0;
    point  = false;
    
    if(command > 0 ){
        exicuteCommand();
    } else {
        answer = store;
        command = 2;
    }
}

multipicationOpperation = () => {
    console.log(buffer);

    store = buffer;
    buffer = 0.0;
    point  = false;
    
    if(command > 0 ){
        exicuteCommand();
    } else {
        answer = store;
        command = 3;
    }
}

divitionOpperation = () => {
    console.log(buffer);

    store = buffer;
    buffer = 0.0;
    point  = false;
    
    if(command > 0 ){
        exicuteCommand();
    } else {
        answer = store;
        command = 4;
    }
}

// make the parfect result When it need
exicuteCommand = () => {
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
    exicuteCommand();
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
    addNumber(0);
    showBuffer();
}

button1 = () => {
    addNumber(1);
    showBuffer();
}

button2 = () => {
    addNumber(2);
    showBuffer();
}

button3 = () => {
    addNumber(3);
    showBuffer();
}

button4 = () => {
    addNumber(4);
    showBuffer();
}

button5 = () => {
    addNumber(5);
    showBuffer();
}

button6 = () => {
    addNumber(6);
    showBuffer();
}

button7 = () => {
    addNumber(7);
    showBuffer();
}

button8 = () => {
    addNumber(8);
    showBuffer();
}

button9 = () => {
    addNumber(9);
    showBuffer();
}

buttonAdd = () => {
    additionalOpperation();
    showBuffer();
}

buttonSub = () => {
    subtractionOpperation();
    showBuffer();
}

buttonMul = () => {
    multipicationOpperation();
    showBuffer();
}

buttonDiv = () => {
    divitionOpperation();
    showBuffer();
}

buttonDot = () => {
    point  = true;
    showBuffer();
}

buttonEql = () => {
    lastShowingResult();
}

buttonC = () => {
    allClear();
    showBuffer();
}