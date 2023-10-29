// declare an array
const myArr = [1, 2, 3, 4, 5];
const stringArr = ["name", "class", "section", "roll no."]

// get element in an array
console.log(myArr[0])

//  ******* ARRAY METHODS *********
/*
 Array length            Array toString()
 Array pop()             Array push()
 Array shift()           Array unshift()
 Array join()            Array delete()           
 Array concat()          Array flat()           
 Array splice()          Array slice()

*/ 

// The length property returns the length (size) of an array "arr.length"
// The JavaScript method toString() converts an array to a string of (comma separated) array values
// The pop() method removes the last element and pop() method returns the value that was "popped out"
// The push() method adds a new element to an array (at the end) and push() method returns the new array length.
// shift() method removes the first array element and "shifts" all other elements to a lower index and shift() method returns the value that was "shifted out"
// unshift() method adds a new element to an array (at the beginning), and "unshifts" older elements and unshift() method returns the new array length
/* Warning !
   Array elements can be deleted using the JavaScript operator delete.

   Using delete leaves undefined holes in the array.

   Use pop() or shift() instead. */

 // delete fruits[0];

/* concat() method creates a new array by merging (concatenating) existing arrays 
   concat() method can take any number of array arguments
   concat() method can also take strings as arguments
   const myChildren = arr1.concat(arr2, arr3);
*/

/*
Flattening an Array
Flattening an array is the process of reducing the dimensionality of an array.

The flat() method creates a new array with sub-array elements concatenated to a specified depth.
*/

/*
                   SPLICE
splice() method can be used to add new items to an array
 
const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.splice(2, 0, "Lemon", "Kiwi");

The first parameter (2) defines the position where new elements should be added (spliced in).

The second parameter (0) defines how many elements should be removed.

The rest of the parameters ("Lemon" , "Kiwi") define the new elements to be added.
*/

/*  
 splice() method returns an array with the deleted items

const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.splice(2, 2, "Lemon", "Kiwi"); Output :-  Apple,Mango
 output:- New Array:
          Banana,Orange,Lemon,Kiwi

          Removed Items:
          Apple,Mango
*/

/*
Using splice() to Remove Elements
const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.splice(0, 1);

The first parameter (0) defines the position where new elements should be added (spliced in).

The second parameter (1) defines how many elements should be removed.

The rest of the parameters are omitted. No new elements will be added.
*/

/* SLICE

slice() method slices out a piece of an array into a new array
const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
const citrus = fruits.slice(1);
console.log(citrus)  , Output :- "Orange", "Lemon", "Apple", "Mango"

slice() method creates a new array.

slice() method does not remove any elements from the source array.

slice() method can take two arguments like slice(1, 3).

The method then selects elements from the start argument, and up to (but not including) the end argument
*/

// ***************** SORT() an numeric array using a function *******************8

const arr1 = [7,5,1,3,4,6,8,2];
let sort = arr1.sort(function(a,b){return a - b});

console.log(sort);

// Using Math.max() :-"Math.max.apply" on an Array to find Maximum value in an array
// Using Math.min() :-"Math.min.apply" on an Array to find the minimum value in an array