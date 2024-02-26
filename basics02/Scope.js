// Global and Local Scope

// let and const have local scope

// var has global scope
// avoid using var , if you don't want to mix local and global scope or work 

//  {} curley braces are scope


if(true){
    let a = 10;
    const b = 20;
    var c = 30;
}

// now a, b, c are in a block scope

console.log(a);
// it won't print anything , because it is out of scope

console.log(b);
// it won't print anything , because it is out of scope

console.log(c);
// it'll print 40, because var can print out of scope 

//  if another variable with "var c" defined outside it would overwrite the previous one


// if variable, defined with  "var" or without anything the variable's value can be overwrite

// Global scope are different in browser and node environment





// ************************ Scope Level and Mini Hoisting ************************ 


function one(){
    const username = "Mahesh";

    function two(){
     const website = "github/codespace";
     console.log(username);
    //  username can be accessed it is in scope of one()
    }
    console.log(website);
   // can't access website it is outside two() scope 
    two();
}

one();


 
//  u can access elemensts of functions in its scope 
//  u can not access elements and methods of a function outside its scope
 

//  ***** function declaration *****

// calling addOne() before declaratiom wont throw any error

//  normal declaration 
function addOne(num){
    return num +1;
}

console.log(addOne(4));


// calling  addTwo() here , before it's declared throws an error 

//  assigning function to a Variable
//  variable holds value of function 
const addTwo = function (num){
    return num + 2;
}

addTwo(6);


//  U can not call the variable holding function before declaration 
//  but u can call the normal function before declaration 