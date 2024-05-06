// CALL and THIS in javascript 
function setUserName(username){
      this.username = username;
}


/* here in createUser() username is passed to setUserName() to set the username 
but in call Stack createUser() function gets called first then its execution context gets removed
but we need createUser()'s context to be used in setUserName() which is being called after createUser() function 
so setUserName() dont have the username context
****** to solve this problem we use "call" with this in the argument
*/


function  createUser(username, email, password){
     setUserName(username);
     this.email = email;
     this.password = password;
}

// without ".call" setUserName() wont set
// use .call to call the outer function and use this in the parameter so it gets the createUser()'s context

/*
function  createUser(username, email, password){
     setUserName.call(this, username);
     this.email = email;
     this.password = password;
}
*/
const chai = new createUser("mahesh", "maheshsb025@gmail.com", "mahesh@2002");

console.log(chai);