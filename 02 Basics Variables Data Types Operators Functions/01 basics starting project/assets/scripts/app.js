// import {outputResult} from './vendor.js';
const defaultResult = 0;
let currentResult = defaultResult;



function getUserNumberInput() {
    return parseInt(userInput.value);
}

function createAndWriteOutput(operator, resultBeforeCalc, calcNumber) {
    const calcDescription = `${resultBeforeCalc} ${operator} ${calcNumber}`;
    outputResult(currentResult, calcDescription)
}

function add() {
    const enteredNumber = getUserNumberInput();
    const initialResult = currentResult;
    currentResult = currentResult + enteredNumber;  // for +userInput.value we can use parseInt(userInput.value) or parseFloat(userInput.value)  so the value become number
    createAndWriteOutput('+', initialResult, enteredNumber)
    return userInput.value = null;
}

function substract() {
    const enteredNumber = getUserNumberInput();
    const initialResult = currentResult;
    currentResult = currentResult - enteredNumber;  // for +userInput.value we can use parseInt(userInput.value) or parseFloat(userInput.value)  so the value become number
    createAndWriteOutput('-', initialResult, enteredNumber)
    return userInput.value = null;
}

function multiply() {
    const enteredNumber = getUserNumberInput();
    const initialResult = currentResult;
    currentResult = currentResult * enteredNumber;  // for +userInput.value we can use parseInt(userInput.value) or parseFloat(userInput.value)  so the value become number
    createAndWriteOutput('*', initialResult, enteredNumber)
    return userInput.value = null;
}

function divide () {
    const enteredNumber = getUserNumberInput();
    const initialResult = currentResult;
    currentResult = currentResult / enteredNumber;  // for +userInput.value we can use parseInt(userInput.value) or parseFloat(userInput.value)  so the value become number
    createAndWriteOutput('/', initialResult, enteredNumber)
    return userInput.value = null;
}

addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', substract);
multiplyBtn.addEventListener('click', multiply);
divideBtn.addEventListener('click', divide);

