// limiting the access or to give customise code in specific times
// getter and setter are used together

// setter "set" sets the value and getter "get" gets the value
// so we can set the different value and get different value by changing the get 
class user {
   constructor(username, email, password){
    this.email = email;
    this.password = password;
    this.username = username
   }


   //  use get to give different value 
   
  get email(){
    return  `${this._email}@gmail`;
  }

  set email(value){
    this._email = value;
  }

  get password(){
   return this._password.toUpperCase();
  }


// this way to setter and getter will throw an error of "Maximum call stack size exceeded"
// constructor and setter are both setting value one after another 
//   to overcome "Maximum call stack size exceeded" use different variable name like "_password"
  
  /* 
   set password(value){
   this.password = value;
   } 

   */
  
  set password(value){
   this._password = value;
  }
  
} 


const user1 = new user("userOne", "Uone", "abc");
console.log(user1.password);
console.log(user1.email);



//       (((((((((((((((((((    Getter and Setter using function property     )))))))))))))))))))

function user2(username, email, password){
          this._username = username;
          this._password = password;
          this._email = email

          Object.defineProperty(this, 'email', {
            get: function(){
               return this._email.toUpperCase();
            },
            set: function(value){
               this._email = value;
            }
          })
}






