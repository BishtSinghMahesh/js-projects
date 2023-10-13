// can define ojects in two ways, 1. Literal ,2. Constructor

// const obj1 = Object.create" constructor method creates Singleton way

// object literal ; const obj1 = {key: value}

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


// ******************* object second part *************************
 
const tinderUser = new Object();  // declare object 1st way Singleton Object

const tinderUser2 = {}; // declare object 2nd way non-Singleton Object

tinderUser2.id = 123;
tinderUser2.name = "tom";
tinderUser2.isLoggedIn = false;


// object inside object

const gamePlayer = {
  name: "Player",
  rank: "vetran",
  badges: {
    silver: 4,
    gold: 3,
    bronze: 4,
    diamond: 6
  }
}

// Access objects inside object by using consecutive dot(.) notation 
 console.log(gamePlayer.badges.gold);


 // Merge Objects 

const obj1 = {1: "a", 2: "b"};
const obj2 = {3: "c", 4: "d"};

const obj3 = {obj1 , obj2};
console.log(obj3);
 // This will result as object having to objects we dont want that 
 // Output :- { obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'c', '4': 'd' } }

 // Correct way to join objects is to use (assign()) :- syntax, "Object.assign({}, obj1, obj2)""
  
 const obj4 = Object.assign({}, obj1, obj2);

























