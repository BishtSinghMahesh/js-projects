/* types of data are Premitive and Non-premitive
  :- Primitive data types are not mutable.
  :- When we create a variable, it reserves a space for itself in the memory.
  :- An object holds a reference/address of a single key-value pair or many key-value pairs
  Whenever we refer to an object, we refer to an address in memory which contains the key-value pair.
  If we assign an object ‘object1’ to another object ‘object2’, we are actually assigning the address
  of ‘object1’ to ‘object2’ instead of the key-value pair which the ‘object1’ contains in memory.
  The Primitive Data types in JavaScript include Number, String, Boolean, Undefined, Null and Symbol. */

// The Non-Primitive data type has only one member i.e. the Object.

// ******************************    STRINGS    **********************************

const name = "Mahesh ";
let repoCount = 40;

// old syntax to console.log() string
console.log(name + repoCount);

//New method for console.log() string with backticks `` and ${} it is string intercolation
// can use metods on the go like .toUppercase, .toLowercase or .length

console.log(
  `print the name ${name.toUpperCase()} and respository count ${repoCount}`
);

console.log(typeof name);

// another way to declare a String using (new keyword) as an object
const game = new String("string in type of object (key value pair)");

console.log(game);
// On Logging it prints :- [String: 'string in type of object (key value pair)']
//***********************  NUMBER *****************************************

const balance = 500;

// declare number with new object keyword

const amount = new Number(600);

console.log(balance);
// output is 500

console.log(amount);
// output is [Number: 600]

// Number methods or prototype
/*
EPSILON
MAX_SAFE_INTEGER;
MAX_VALUE;
MIN_SAFE_INTEGER;

MIN_VALUE;

NEGATIVE_INFINITY;

POSITIVE_INFINITY;
isFinite();
isInteger();
isNaN();

isSafeInteger();

parseFloat;

parseFloat();

parseInt();
 */

/*
toExponential()
toFixed()
toLocaleString()
toPrecision()
toString()
valueOf()
*/

// toFixed() and toPrecision() are commonly used property

// ***************************** MATHS *****************************************

console.log(Math);
// Maths.abs returns positive value
console.log(Math.abs(-4));

// Maths.floor returns the value to lower digit
console.log(Math.floor(4.8));

// Maths.ceil returns the upper value
console.log(Math.ceil(7.2));

// Maths.round returns the round off the value
console.log(Math.round(4.6));
console.log(Math.round(4.2));

// Math.min returns the minimum value among the given values
console.log(Math.min(4, 5, 8));

// Math.max returns the maximum value amoung the given values
console.log(Math.max(9, 4, 2));

// Math.random returns a value between 0 and 1
console.log(
  `A random number between 1 and 10 is ${Math.floor(Math.random() * 10) + 1}`
);

// random number generation
const min = 10;
const max = 20;
console.log(
  `Random number between 10 and 20 is ${
    Math.floor(Math.random() * (max - min + 1)) + min
  }`
);

// *********************************** DATES *************************************

let myDate = new Date();
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleDateString());
console.log(myDate.toJSON());

let myCreatedDate = new Date(2023, 9, 5)
// format yy-mm-dd
let myCreatedDate2 = new Date("2023-10-05");
// format mm-dd-yy
let myCreatedDate3 = new Date("10-05-2023")
console.log(myCreatedDate.toDateString());
console.log(myCreatedDate2.toDateString());
console.log(myCreatedDate3.toDateString());


// get month 
const newDate = new Date();
console.log(newDate.getMonth() + 1);

// customise .toLocalString

newDate.toLocaleString('default', {
  weekday: "long"
})


