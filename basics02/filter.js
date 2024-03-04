// ************************* Filter Map and Reduce *******************
      
// array.forEach(element => {
    
// });

//  forEach do not return any value 


// **************** filter *************

const mynums = [1,2,3,4,5,6,7,8];

// filter also takes a "call back function" inside 
// unlike forEach , filter returns you value 
const numValues = mynums.filter((num) => num > 4)
console.log(numValues);


// just because "filter" can Return value, when using "{}"
// using curly brackets in Filter Always use return key word !!!!!!


const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981,
    edition: 2004 }, 
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992,
    edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999,
    edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989,
     edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009,
    edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987,
    edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986,
     edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011,
     edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981,
     edition: 1989 },
];


const bookFilter = books.filter( (bk) => bk.genre === 'History');
// using filter to get genre of history

console.log(bookFilter);
//  it will print the array of objects with genre History


// print books publish after 2000
//  to overwrite any value just redeclare it
//  const values can not be redeclared "let" declared variables can be redeclared

const publishFil = books.filter( (bk) => {
    return bk.publish >= 2000
} )

console.log(publishFil)
//  it'll print array of objects books published in or after 2000



// using more than 1 filter 
//  use logical and operator && to check both condition   




// **************************** MAP *****************************

const myNumbers = [1,2,3,4,5,6,7,8,9];

// return numbers after increasing them with 10


// same as filter , if using {} curley brackets then use return keyword 
//  if not using {} curley brackets then just put things
const nums = myNumbers.map( (n) => {return n + 10})  
console.log(nums);


// ********** method Chaining ***********
// a.map().map().filter()


const chainmap = myNumbers
    .map( (num) => num * 20)
    .map(  (num) => num + 5)
    .filter( (num) => num >= 35 )

console.log(chainmap);

//  filter is a kind of true or false thing



//  ****************************** Reduce ***************************

const arr = [1 ,2 ,3]

const reTotal = arr.reduce(
 (acc, curval) => acc + curval 
 ,0
)
 