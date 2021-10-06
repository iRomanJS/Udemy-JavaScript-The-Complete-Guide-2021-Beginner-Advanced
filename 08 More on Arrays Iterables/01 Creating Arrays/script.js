// const numbers = [1, 2, 3];
// console.log(numbers);

// const moreNumbers = new Array(5);
// console.log(moreNumbers);

// const yetMoreNumbers = Array.of(1, 2);
// console.log(yetMoreNumbers);

// const listItems = document.querySelectorAll('li');
// console.log(listItems);

// const arrayListItems = Array.from(listItems);
// console.log(arrayListItems);

// const hobbies = ['Cooking', 'Sports'];
// const personalData = [30, 'Max', {moreDetail: []}];

// const analyticsData = [[1, 1.6], [-5.4, 2.1], 5];

// for (const data of analyticsData) {
//     // console.log(data);
//     for (const dataPoint of data ) {
//         console.log(dataPoint);
//     }
// }

// console.log(personalData[1]);


// const hobbies = ['Sports', 'Cooking'];
// hobbies.push('Reading'); // add element to arrey to the end of it
// hobbies.unshift('Codding'); // moved arrey to the right and insert element to front
// // hobbies.pop(); // toggle last element wat was pushed before to non meaning
// // hobbies.shift(); // moved arrey yo the left and delete item wich was shifted(moved)
// console.log(hobbies);

// hobbies[1] = 'Coding';
// // hobbies[5] = 'Reading'; // rarely used it create empty spaces inside Array if we dont have data for that places and create 'Reading' as a element after element number 5
// console.log(hobbies);

// hobbies.splice(1, 0, 'Good Food', 'Films'); // '1' argument mean from what element inside arrey we want to start do splice method
                                              //  '0' argument mean how many element inside aarey we want to remove in our case its 0 so it means none
                                             //   'Good Food' argument mean that we push this element inside arrey after first element in our case
                                            //    'Films' argument mean that we push this element inside arrey after Good Food
// console.log(hobbies);

// hobbies.splice(0, 1);    // it means that we removed first element inside our array hobbies
// console.log(hobbies);
// const removedElements = hobbies.splice(-2, -1); // it means we removed element from right side of array to right side so we start from second element of array and moved to first element if we counting from right side becouse of minus
// console.log(hobbies);

// const testResults = [1, 5.3, 1.5, 10.99, -5, 10];
// const storedResults = testResults.slice(2);
// const storedResults = testResults.concat([3.99, 2.99]);


// testResults.push(5.91);

// console.log(testResults, storedResults);
// console.log(testResults.indexOf(1.5));

// console.log(testResults.includes(10.99));
// console.log(testResults.indexOf(10.99) !== -1);

// const personData = [{name:'Max'}, {name: 'Manuel'}]; // this kind of data cannot work with method indexOf becouse in memory it is two diffrent peace of data (i mean console.log with indexOf)
// console.log(personData.indexOf({name: 'Manuel'}));  // indexOf create a copy of the array that why it is two diffrent peace of data

// const manuel = personData.find((person, index, persons) => {    // find working inside arrey and dont make copy of the array
//     return person.name === 'Manuel';
// });

// manuel.name = 'Anna';

// console.log(manuel, personData);

// const maxIndex = personData.findIndex((person, index, persons) => {    // find working inside arrey and dont make copy of the array
//     return person.name === 'Max';
// });

// console.log(maxIndex);

const prices = [10.99, 5.99, 3.99, 6.59];
const tax = 0.19;
// const taxAdjustedPrices = [];

// for (const price of prices) {
//     taxAdjustedPrices.push(price * (1 + tax));
// }

// prices.forEach((price, idx, prices) => {
//     const priceObj = {index: idx, teaxAdjPrice: price * (1 + tax)};
//     taxAdjustedPrices.push(priceObj);
// });

const taxAdjustedPrices = prices.map((price, idx, prices) => {
    const priceObj = {index: idx, teaxAdjPrice: price * (1 + tax)};
    return priceObj;
});


// console.log(prices, taxAdjustedPrices);

const sortedPrices = prices.sort((a, b) => {    //this kind of method help to sort from bigger number to smaller number if u swap -1 and 1 it will sort from smaller to bigger
    if (a > b) {
        return -1;
    } else if (a === b) {
        return 0;
    } else {
        return 1;
    }
});
console.log(sortedPrices.reverse()); // reverse() will made you array from end to begin as it mean reverse

// const filteredArray = prices.filter((price, index, prices) => { // this method will made new one array 
//     return price > 6;
// });  

const filteredArray = prices.filter(price => price > 6);  // arrow function can make like this what is very good

console.log(filteredArray);

// let sum = 0;

// prices.forEach((price) => {
//     sum += price;
// });

// console.log(sum);

// const sum = prices.reduce((prevValue, curValue, curIndex, prices) => {          // Reduce will reduces an arrey to a simpler value for example it reduce numbers of arrey to sum of number or can be reduce to single number or single string
//     return prevValue + curIndex;  // prevValue = 0; curValue = 10.99            // second argument inside Reduce after function its from what element inside array we are doing function

// }, 0);

const sum = prices.reduce((prevValue, curIndex) => prevValue + curIndex, 0);

console.log(sum);

const data = 'new york;10.99;2000';

const transformData = data.split(';');
transformData[1] = +transformData[1];
console.log(transformData);

const nameFragments = ['Max', 'Schwarz', 1];
const namez = nameFragments.join(' ');  // this make name Fragments [] to string Max Schwarz 1  if we write join() so it will be like Max, Schwarz, 1
console.log(namez);
