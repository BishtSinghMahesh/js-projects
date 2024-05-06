// ES 6



class user {
  constructor(userName, email, password) {
    this.userName = userName;
    this.email = email;
    this.password = password;
  }
  encryptPassword() {
    return `${this.password}abc`;
  }

  changeUserName() {
    return `${this.userName.toUpperCase()}`;
  }
}

// const chai = new user("mahesh", "mahesh@gmail.com", "mahe");
// console.log(chai.encryptPassword());
// console.log(chai.changeUserName());

//  Same thing but using Function
//  ********* behind the scenes  *************

function User(userName, email, password) {
  this.userName = userName;
  this.email = email;
  this.password = password;
}

User.prototype.encryptPassword = function () {
  return `${this.password}abc`;
};

User.prototype.changeUserName = function () {
  return `${this.userName.toUpperCase()}`;
};

const tea = new User("mahi", "mahi@gmail.com", "222");
console.log(tea.encryptPassword());
console.log(tea.changeUserName());





//    ((((((((((((((((((         INHERITENCE            ))))))))))))))))))

class client {
  constructor(userName) {
    this.userName = userName;
  }

  logClient() {
    console.log(`Username ${this.userName}`);
  }

  // using static to avoid every instance of this class to access createUniqueID
 static createUniqueID(){
    return `124`
  }
}


// here by using "extends" teacher class inherit client class
class teacher extends client {
  constructor(userName, email, password) {
    // using "super" to get the access of client username
    super(userName);
    this.email = email;
    this.password = password;
  }
  addCourse() {
    console.log(`A new course is added ${this.userName}`);
  }
}

const proTeacher = new teacher("jacob", "jacob@gamil.com", "332");
proTeacher.addCourse();
proTeacher.logClient();





 //               (((((((((((((((((    Objects hidden features       )))))))))))))))))           
            //  Object.getOwnPropertyDescriptor

 const descripter = Object.getOwnPropertyDescriptor(Math, 'PI');
 console.log(descripter);
// it shows the description of the properties 
/*  output for Math.PI object property is
{
  value: 3.141592653589793,
  writable: false,
  enumerable: false,
  configurable: false
} 
*/

  //  As here PI 'writable' property is false, so we cant override the property

  
  // example of object with property and how to change or add the property

  const chai = {
    name: "Addrak chai",
    price: 200,
    brand: "Tata",
    
     make: function(){
    console.log("Make tea");
     }
  }

  console.log(Object.getOwnPropertyDescriptor(chai, 'name'));
  // output for chai's name property which are shown below 
  /* {
    value: 'Addrak chai',
  writable: true,
  enumerable: true,
  configurable: true
}    */



// change or Add property description using ".defineProperty"

Object.defineProperty(chai, 'name', {
  value: 'Ginger Tea',
  writable: false,
  enumerable: false
})

console.log(Object.getOwnPropertyDescriptor(chai, 'name'));


// loop in object 
//  cant use object name directly, so we use "object."
for (const [key, value] of Object.entries(chai)) {
  // check to not print the function
  if(typeof value  !== 'function'){
    console.log(`${key} : ${value}`);
  }
}


// output of loop is given below but, " name: 'Ginger Tea' " was not there because we made the 
// "description property" enumerable : false
// so to enumetrate it has be to "true" 
  
/*
price : 200
brand : Tata
*/

