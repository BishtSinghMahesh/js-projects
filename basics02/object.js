// can define ojects in two ways, 1. Literal ,2. Constructor

// "Object.create" constructor method and Singleton way

// object literal
// object stores values in key : value pairs

// declare Symbol
const mySym = Symbol("key1");

const obj = {
  name: "Mahesh",
  age: 20,
  location: "Noida",
  Email: "Maheshsb025@gmail.com",
  
  // syntax of using symbol inside an object
  [mySym]: "symbolValue"
};


// Access value of specific key
console.log(obj.age);

// Access value with another methods *important
// objectName["key"]
const access2 = obj["age"];
console.log(access2);

// declare a Symbol and use it in an object
// Access symbol value inside an object
obj[mySym]
console.log(obj[mySym]);



// Change value in object 
obj.Email = "MahesSingh@gamil.com";

// Freeze objects so they can't be changed
Object.freeze(obj);
