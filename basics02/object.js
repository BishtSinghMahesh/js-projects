// can define ojects in two ways, 1. Literal ,2. Constructor

// const obj1 = Object.create" constructor method creates Singleton way

// object literal ; const obj1 = {key: value}

// object stores values in "key : value" pairs

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
console.log(obj["age"]);

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


// object inside object, nested object

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
 // This will result as object inside objects we don't want that 
 // Output :- { obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'c', '4': 'd' } }

 // Correct way to join objects is to use (assign()) :- syntax, "Object.assign({}, obj1, obj2)""
 // Object.assign(target, source)
 const obj4 = Object.assign({}, obj1, obj2);
 console.log(obj4);

 // join two objects with Spread oprator (...) *imp
  const obj5 = {...obj1,...obj2};
  console.log(obj5);



// example of data you get from database 
// array's of object 

const users = [
  {
 id: 1,
 name: "A"
  },
  {
    id: 2,
    name: "B"
  },
  {
   id: 3,
   name: "C"
  }
]


// Access object's value from the array

users[1].id;


// Access all the keys of an object
console.log(Object.keys(tinderUser2));
// Output :- [ 'id', 'name', 'isLoggedIn' ]

// Access all the values of an object 
console.log(Object.values(tinderUser2));
// Output:- [ 123, 'tom', false ]

// Access all the entries 
console.log(Object.entries(tinderUser2));
// Output:- [ [ 'id', 123 ], [ 'name', 'tom' ], [ 'isLoggedIn', false ] ]



// Check if the value exists (hasOwnProperty)
console.log(tinderUser2.hasOwnProperty("isloggedIn"));

// Optional chaining 
// regularUser.name?.fullname  , ? mark to check if there is a key or method present in the object 



//******************************  DE-STRUCTURING  ************************
 
const course = {
   price: 900,
   courseName: "Javascript",
   courseInstructor: "Hitesh"
}

//  object de-structing use const { name if the property: shortNamen}
const {courseName: CN} = course;
console.log(CN);

// de-structing is used in react

// JSON format
// {
//   "name": "Mahesh",
//   "course": "js",
//   "price": "free"
// }

// or other type of API format
[
  {},
  {}
]


