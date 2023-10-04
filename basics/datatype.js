// types of data are Premitive and Non-premitive
//  :- Primitive data types are not mutable.
// :- When we create a variable, it reserves a space for itself in the memory.
// :- An object holds a reference/address of a single key-value pair or many key-value pairs
// Whenever we refer to an object, we refer to an address in memory which contains the key-value pair.
//   If we assign an object ‘object1’ to another object ‘object2’, we are actually assigning the address
//   of ‘object1’ to ‘object2’ instead of the key-value pair which the ‘object1’ contains in memory.
// The Primitive Data types in JavaScript include Number, String, Boolean, Undefined, Null and Symbol.

// The Non-Primitive data type has only one member i.e. the Object.

// ******************************    STRINGS    **********************************

const name = "Mahesh ";
let repoCount = 40;

// old syntax to console.log() string
console.log(name + repoCount);

//New method for console.log() string with backticks `` and ${} it is string intercolation
// can use metods on the go like .toUppercase, .toLowercase or .length

console.log(`print the name ${name.toUpperCase()}and respository count ${repoCount}`);

console.log(typeof(name))

// another way to declare a String 
const game = new String("string in type of object key value pair")
