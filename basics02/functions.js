// *************************** Functions and Parameter ****************************************
//  function functionName(parameters, parameters){ 
//   return something;
//  }


function addTwoNumber(num1, num2){
  console.log(num1 + num2);
}

// only using function name shows "Reference"
addTwoNumber

// to call a function use  parenthesis "()"
addTwoNumber();
// this will print sum of num1 and num2 


//  but to assign the value of the result use Return keyword
function addTwoNumber(num1, num2){
  // let result = (num1 + num2);
  // return result;

  return num1 + num2;
  console.log("Mahesh");
}

const answer = addTwoNumber(4, 5);
console.log("Result: ", answer);

// Mahesh won't print because, it is after return statement 


function loginUserMessage(username){
  return `${username} just logged in`
}

loginUserMessage("Javascript Master");

//  just calling the function won't print anything 
// to print the return statement use console.log

console.log(loginUserMessage("javascript Master"));


// If u don't pass anything it shows Undefined
console.log(`If u don't pass anything it shows Undefined ${loginUserMessage()}`);


// check by IF statement if it undefined
function loginUserMessage(username){
 
  // if statement only return when condition is True 
  // 1 more IF condition way 
  // if(undefined) means if(false) , if statement won't execute
  // if(!username) means if(not username)
  if(username === undefined){
    console.log("Please enter a username");
    return
    // using return , to not let go to next statement , after return functions don't execute
  }
  return `${username} just logged in`

}


// u can also give default value to the finction
// means of no value id passed , default value runs
//  function loginUserMessage(username = "Ram")







// *************************** Functions with objects and array ***********************************


// find Shoping Cart price 
// as we don't know how many items are being added and how many prices to add

function calculateCartPrice(num1){
    return num1;
}

console.log(calculateCartPrice(200));
// it'll print or return only 200

console.log(calculateCartPrice(200, 100, 499));
// to print or return only 200 not 200, 100, 499 we need to use REST operator (...)


// to solve the problem we use REST operator (...num)
// (...) three dots are both REST and SPREAD operator, depends on the usecase



function calculateCartPrice(...num2){
    return num2;
}

console.log(calculateCartPrice(200, 100, 499));
// it'll return an array [200, 100, 499]
// then we can loop in array and add them



function calculateCartPrice(cal1 , val2, ...num3){
    return num3;
}

console.log(calculateCartPrice(300, 200, 199, 400));
// it'll return or print only [199, 400]
// because val1 = 300, val2 = 199



// Pass objects to Functions
 
const person = {
    username: "Mahesh",
    price: 200
}

// function to print objects 
function handleObject(anyObject){
    console.log(`Username is ${anyObject.usename} and price is ${anyObject.price}`);
}

handleObject(person);

// can also pass objects directly  

handleObject({
    username: "Ram",
    price: 200
})



//  Pass Arrays to functions

const newArray = [20, 40, 50, 70];

function returnArray(array){
     return array[1];
}

// can pass by name
console.log(returnArray(newArray));
 
// can pass it by array values
console.log(returnArray([200, 40, 50, 10]));








// ***************************** Arrow Functions and THIS *************************




// this use to refer current context 
// use THIS keyword as in welcomeUser function (this.UserName) is used instead of hard code like (UserName)
const user = {
    UserName: "Mahesh",
    Contact: 4444,
  
    welcomeUser : function() {
   console.log(`${this.UserName}, Welcome to the website`)
   console.log(this); // will print current whole object
    }
   }
  
   user.welcomeUser();
  
  
   // can also change the key values
   user.UserName = "Mahi"
   user.welcomeUser();
  
  
  console.log(this); // it will indicate to the global object which is an empty object {}
   // *important
   // " THIS in browser the global object is Window, that's why you can use window functions like 
  //  click, form submit etc "
  
  function test(){
    console.log(this);
  }
  test() // this will return lot of things
  // so using THIS inside a function will return many things
  
  function test(){
    username = "Mahesh"
    console.log(this.username);
  }
   /* it will show undefined , because you can't use this inside a normal function it has to 
    be inside a Object or object Functions */





   
  //  **************** Arrow Functions *******************


  const ArrowFun = (a,b) => {
    return a + b;
  } 
  
  // If using {} curly backets have to use return keyword 
  // If not using {} curly barckets then you can use () parenthesis or not omtting return keyword
  
  
  