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

function calculateResult(calculationType) {
    const enteredNumber = getUserNumberInput();
    const initialResult = currentResult;
    let mathOperator;
    if (!userInput.value || !enteredNumber) {               // same as     if (userInput.value == '' || enteredNumber === 0) {
        return alert('write a number plz to field');
    } 
    if (calculationType === 'ADD') {
        currentResult +=enteredNumber;
        mathOperator = '+';
    } else if (calculationType === 'SUBSTRACT'){
        currentResult -=enteredNumber;
        mathOperator = '-';
    } else if (calculationType === 'MULTIPLY' ) {
        currentResult *= enteredNumber;
        mathOperator = '*';
    } else if (calculationType === 'DIVIDE') {
        currentResult /= enteredNumber;
        mathOperator = '/';
    }
    createAndWriteOutput(mathOperator, initialResult, enteredNumber);
    writeToLog(calculationType, initialResult, enteredNumber,currentResult);
    return userInput.value = null;
}

function add() {
    calculateResult('ADD');
}

function subtract() {
    calculateResult('SUBSTRACT');
}

function multiply() {
    calculateResult('MULTIPLY');
}

function divide() {
    calculateResult('DIVIDE')
}

addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', subtract);
multiplyBtn.addEventListener('click', multiply);
divideBtn.addEventListener('click', divide);

