const userChosenKeyName = 'level';

let person = {
    'first name': 'Max',
    age: 30,
    hobbies: ['Sports', 'Cooking'],
    [userChosenKeyName]: '',
    greet: function () {
        alert('Hi there');
    },
    1.5: 'Hello'
};
// person.age = 31;
// delete person.age;
// person.age = undefined; // never asign undefined to value
person.age = null;
person.isAdmin = true;

const keyName = 'first name';

console.log(person[keyName]);
// console.log(person['first name']);
console.log(person[1.5]);
