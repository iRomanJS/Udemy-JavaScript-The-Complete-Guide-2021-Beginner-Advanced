// class AgedPerson {
//     printAge() {
//         console.log(this.age);
//     }
// }

// class Person extends AgedPerson {
//     name = 'Max';

//     constructor() {
//         super();
//         this.age = 30;
//     }

//     greet() {
//         console.log('Hi, I am ' + this.name + ' and I am ' + this.age + ' years old.');
//     }
// }

// function Person() { // not realy matter it Person or person
//     this.age = 30;
//     this.name = 'Max';
//     this.greet = function() {
//         console.log('Hi, I am ' + this.name + ' and I am ' + this.age + ' years old.');
//     };
// }

// Person.prototype = {
//     printAge() {
//         console.log(this.age);
//     }
// }

// Person.prototype.printAge = function() {
//     console.log(this.age);
// };

// console.dir(Person);

// const person = new Person();    // 'new' help to create new constructor function
// person.greet();
// person.printAge();
// console.log(person.__proto__);
// const person2 = new person.__proto__.constructor();
// console.log(person2);


// const p = new Person();
// console.log(p);

const course = {      //new Object()
    title: 'JavaScript - The Complete Guide',
    rating: 5
};

// console.log(Object.getPrototypeOf(course));
Object.setPrototypeOf(course, {     // setPrototype take 2 value first it about in what obj we want to create new method or property and second will be data or function for that new obj
    ...Object.getPrototypeOf(course),
    printRating: function() {
        console.log(`${this.rating}/5`);
    }
});

const student = Object.create({            // obj create takes parametr of empty Obj with prototype in our case it is method printProgress
    printProgress: function() {
        console.log(this.progress);
    }
}, {
    name: {
        configurable: true,
        enumerable: true,
        value: 'Max',
        writable: true
    }
}); 

// student.name = 'Max';

Object.defineProperty(student, 'progress', {
    configurable: true,
    enumerable: true,
    value: 0.8,
    writable: false
})

console.log(student);
course.printRating();




