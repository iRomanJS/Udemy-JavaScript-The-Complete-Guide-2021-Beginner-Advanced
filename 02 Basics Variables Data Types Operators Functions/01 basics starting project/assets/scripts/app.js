// import {outputResult} from './vendor.js';
const defaultResult = 0;
let currentResult = defaultResult;
let logEntries = [];

function getUserNumberInput() {
    return parseInt(userInput.value); // for +userInput.value we can use parseInt(userInput.value) or parseFloat(userInput.value)  so the value become number
}

function createAndWriteOutput(operator, resultBeforeCalc, calcNumber) {
    const calcDescription = `${resultBeforeCalc} ${operator} ${calcNumber}`;
    outputResult(currentResult, calcDescription);
}

function writeToLog(operationIdentifier, prevResult, operationNumber, newResult) {
    const logEntry = {
        operation: operationIdentifier,
        prevResult: prevResult,
        number: operationNumber,
        result: newResult
    };
    logEntries.push(logEntry);
    console.log(logEntries);
}

function calculate(operation) {
    const enteredNumber = getUserNumberInput();
    const initialResult = currentResult;
    let operator;
    if (userInput.value == '') {
        return alert('write a number plz to field');
    }
    if (operation === 'ADD'){
        currentResult += enteredNumber; // same as currentResult = currentResult + enteredNumber;
        operator = '+';  
        
    } else if (operation === 'SUBTRACT') {
        currentResult -= enteredNumber; //same as currentResult = currentResult - enteredNumber
        operator = '-';
    } else if (operation === 'MULTIPLY') {
        currentResult *= enteredNumber;  // same as currentResult = currentResult * enteredNumber
        operator = '*';
    } else if (operation === 'DIVIDE') {
        currentResult /= enteredNumber;  // same as currentResult = currentResult / enteredNumber
        operator = '/';
    }
    createAndWriteOutput(operator, initialResult, enteredNumber);
    writeToLog(operation, initialResult, enteredNumber,currentResult);
    return userInput.value = null;
}

addBtn.addEventListener('click', calculate.bind(this, 'ADD'));
subtractBtn.addEventListener('click', calculate.bind(this, 'SUBTRACT'));
multiplyBtn.addEventListener('click', calculate.bind(this, 'MULTIPLY'));
divideBtn.addEventListener('click', calculate.bind(this, 'DIVIDE'));

