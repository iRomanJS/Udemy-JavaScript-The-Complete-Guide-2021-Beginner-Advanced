const startGameBtn = document.getElementById('start-game-btn');


// const start = function() {  // if asaing a const or let for function. Function become expression otherwise it declaretion or statement
//     console.log('Game is starting ...');    // var start = () => {} can't be used before it declered otherwise function(){} can be used anywere don't need to be declere only after function
// };

// const person = {
//     name: 'Max',
//     greet: function greet() {           /// this is method inside obj person
//         console.log('Hello there!');
//     }
// };

// person.greet();

// console.dir(startGame); /// this comand show that function is a kind of obj


// startGame(); // direct execution

startGameBtn.addEventListener('click', function() {
    console.log('Game is starting ...');
});   // inderect execution // addEventListener is method which used for obj startGameBtn


