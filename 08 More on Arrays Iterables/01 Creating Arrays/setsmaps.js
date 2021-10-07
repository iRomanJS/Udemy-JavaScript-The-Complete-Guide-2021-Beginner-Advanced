// const ids = new Set(['Hi', 'from', 'set!']);
// ids.add(2);

// if (ids.has('Hi')) {
//     ids.delete('Hi');
// }

// for (const entry of ids.entries()) {
//     console.log(entry[0]);
// }

// Set's are data structures which help u manage unice values 

// const person1 = {name: 'Max'};
// const person2 = {name: 'Manuel'};

// // const personData = new Map([['key', 'some value'], ]);
// const personData = new Map([[person1, [{date: 'yesterday', price: 10}]]]);

// personData.set(person2, [{date: 'two weeks ago', price: 100}]);

// console.log(personData);
// console.log(personData.get(person1));

// for (const [key, value] of personData.entries()) {
//     console.log(key, value);
// }

// for (const key of personData.keys()) {
//     console.log(key);
// }

// for (const value of personData.keys()) {
//     console.log(value);
// }

let person = {name: 'Max'};
const persons = new WeakSet();      // WeakSet allows garbeg collection to delete items that are part of the set as long as no other part off the code uses this items
persons.add(person);

// ... some operations 
// person = null;

console.log(persons);

const personData = new WeakMap();
personData.set(person, 'Extra info!');

person = null;

console.log(personData);
