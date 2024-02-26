/*  **************** High Order Array Loops ******************
     
  for of Loop
  for (const iterator of object) {
    
}    

   array specific loops
   [" ", " ", " " , " " ] array of string
   [{}, {}, {}, {}] array of Objects
*/


// for of loop in array 
const arr = [1, 2, 3, 4, 5];

for (const i of arr) {
    console.log(i);
}

// for of loop in string
const string = "Mahesh say hello";
for (const str of string) {
  console.log(`Each char ${str}`);
}


// Maps are like array but it is an Object

const map = new Map();
map.set('IN', "India")
map.set('USA', "United States of America" )
map.set('Fr', "France")
map.set('IN', "India")

console.log(map);
 
// map holds values in ('key', "value") pair 
//  no duplicate value is added

// Loop for map

for (const key of map) {
  console.log(key);
}

// it'll print an array of (key , value) pair
// ['IN' , "India"]
// ['USA', "United States of America"]
// ['Fr', "France"]


// to print key and values differently 
//  use this loop

for (const [key, value] of map) {
  console.log(key, ':-' , value);
}



// for of loop on Object
//  objects are not iteratable in this way

const myObject = {
  'game1': 'NFS',
  'game2': 'Spiderman'
}

// for (const [key, value] of myObject) {
//   console.log(key, ':-' , value);
// }
//  it is not iterable

// ************ For In Loop ************

// tpo iterate in Objects use "for in loop"

for (const key in myObject) {
  console.log(`${key} games ${myObject[key]}`);
}