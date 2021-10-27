function randomIntBetween(min, max) {
  // min: 5, max: 10
  return Math.floor(Math.random() * (max - min + 1) + min);
}

console.log(randomIntBetween(1, 10));

function productDescription(strings, productName, productPrice) {
  console.log(strings);
  console.log(productName);
  console.log(productPrice);
  let priceCategory = "cheap";
  if (productPrice > 20) {
    priceCategory = "fair";
  }
//   return `${strings[0]}${productName}${strings[1]}${priceCategory}${strings[2]}`;
return {name: productName, price: productPrice};
}

const prodName = "JavaScript Course";
const prodPrice = 29.99;

const productOutput = productDescription`This product (${prodName}) is ${prodPrice}.`;

console.log(productOutput);

const userInput = 'testtest.com'    // test@test.com must be
userInput.includes('@');    // true or false depents on what user put inside input

const regex = /^\S+@\S+\.\S+$/;

console.log(regex.test(userInput)); // show that our userInput false becouse it not what we exprect to recive from our user;


const regex2 = /hello/;

console.log(regex2.test('hello')); // test expression start chack for true or false of that expression 


const emailRegex = /^\S+@\S+\./;

// type google email js regex to find some ideas at stackoverflow

console.log(regex2.exec('start to end hello')); // expresion exec show null if that string dont have any match of words that inside const regex2 but if there is inside string any first word of match it will show index from when it start 


