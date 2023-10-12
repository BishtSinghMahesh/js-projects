// can define ojects in two ways, 1. Literal ,2. Constructor

// "Object.create" constructor method and Singleton way

// object literal
// object stores values in key : value pairs

// declare Symbol
const mySym = Symbol("key1");

const obj = {
  name: "Mahesh",
  surname: "Singh",
  fullname: "Mahesh Singh",
  age: 20,
  location: "Noida",
  Email: "Maheshsb025@gmail.com",
  LoginDays: ["Monday", "Tuesday"],

  // syntax of using symbol inside an object
  [mySym]: "symbolValue",
};

// Access value of specific key
console.log(obj.age);

// Access value with another methods *important
// objectName["key"]
const access = obj["age"];
const access2 = obj["fullname"];
console.log(access);
console.log(access2);

// declare a Symbol and use it in an object
// Access symbol value inside an object
obj[mySym];
console.log(obj[mySym]);

// Change value in object
obj.Email = "MahesSingh@gamil.com";

// Freeze objects so they can't be changed
// "Object.freeze(obj);" **Imp

// Functions inside objects

obj.greeting = function () {
  console.log("Hello Human");
};

obj.greetingTwo = function () {
  console.log(`Using this keyword inside object function, ${this.fullname}`);
};

console.log(obj.greeting); // output:- [Function (anonymous)]  function reference
console.log(obj.greeting()); // output:- Hello Human
console.log(obj.greetingTwo()); // output:- Using this keyword inside object function, Mahesh Singh
