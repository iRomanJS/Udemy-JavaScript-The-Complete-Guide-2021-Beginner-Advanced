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

function add() {
    const enteredNumber = getUserNumberInput();
    if (userInput.value == '') {
        return alert('write a number plz to field');
    }
    const initialResult = currentResult;
    currentResult += enteredNumber;  // same as currentResult = currentResult + enteredNumber;
    createAndWriteOutput('+', initialResult, enteredNumber);
    writeToLog('ADD', initialResult, enteredNumber,currentResult);
    return userInput.value = null;
}

function subtract() {
    const enteredNumber = getUserNumberInput();
    if (userInput.value == '') {
        return alert('write a number plz to field');
    }
    const initialResult = currentResult;
    currentResult -= enteredNumber; //same as currentResult = currentResult - enteredNumber
    createAndWriteOutput('-', initialResult, enteredNumber);
    writeToLog('SUBTRACT', initialResult, enteredNumber,currentResult);
    return userInput.value = null;
}

function multiply() {
    const enteredNumber = getUserNumberInput();
    if (userInput.value == '') {
        return alert('write a number plz to field');
    }
    const initialResult = currentResult;
    currentResult *= enteredNumber;  // same as currentResult = currentResult * enteredNumber
    createAndWriteOutput('*', initialResult, enteredNumber);
    writeToLog('MULTIPLY', initialResult, enteredNumber,currentResult);
    return userInput.value = null;
}

function divide() {
    const enteredNumber = getUserNumberInput();
    if (userInput.value == '') {
        return alert('write a number plz to field');
    }
    const initialResult = currentResult;
    currentResult /= enteredNumber;  // same as currentResult = currentResult / enteredNumber
    createAndWriteOutput('/', initialResult, enteredNumber);
    writeToLog('DIVIDE', initialResult, enteredNumber,currentResult);
    return userInput.value = null;
}

addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', subtract);
multiplyBtn.addEventListener('click', multiply);
divideBtn.addEventListener('click', divide);

