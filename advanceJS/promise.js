// promise take callback
const promiseOne = new Promise( function(resolve, reject){
// Do an async task 
// DB calls , cryptography(password increption), network

setTimeout(function (){
    console.log('Async task is complete');
    resolve();
    // resolve() connected to ".then"
     }, 1000)

})

// .then() is connected or related to resolve
promiseOne.then(function(){
    console.log("Promise consumed");
})


// another way without holding in variable

new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("Async task 2");
        resolve()
    }, 1000)

}).then(function() {
    console.log("Async 2 resolved");
})



// 3 way of promise

const promiseThree = new Promise(function (resolve, reject) {
    setTimeout(function(){
        // data passed in resolve(data) is mostly object 
        /* object passed in resolve({name: "mahe",
                      age: "20"
                       })
        */ 

    resolve({username: "Mahesh", email:"mahesh@gmail.com"})
    }, 1000);
})

// values return in .then after calling resolve in promise function 
// parameter passed in resolve(), can be accssed in .then 
promiseThree.then(function (user) {
    console.log(user);
})



// 4th Promise 

const promiseFour = new Promise(function(resolve, reject) {
    setTimeout( function(){
        let error = false;
        // let error = true;

        if(!error){
            resolve({username: "Mahesh", password: "1234"})
        }else{
            reject('Error: Something went wrong ')
        }

    }, 2000);
})

// consume promiseFour 
// chaining of ".then"
// .catch() used for error handling

 promiseFour.then((user)=> {
    console.log(user);
    return user.username
 })
 .then( (username) => {
console.log(username);
 })
 .catch( function(error){
    console.log(error);
 } )
.finally(() => console.log("The promise either resolved or rejected") )


// finally checks if the work has been done, whether its resolved or rejected




// Promise Five

const promiseFive = new Promise(function (resolve, reject) {
    setTimeout(() => {
        let error = true;
        if(!error){
            resolve({username: "Javascript", password: "123"})
        }
        else{
            reject('Error: JS went wrong')
        }
    }, 1000);
})


// ************** impotant **************
//  promise can be consumed with "async await" 


async function consumePromiseFive(){
    try {
        const response = await promiseFive
        console.log(response);
    } catch (error) {
        console.log(error);   
    }
}

consumePromiseFive();


// Fetch 

async function getAllUsers(){
    try {
        const response = await fetch('https://api.github.com/users/BishtSinghMahesh')
        const data = await response.json()
        console.log(data);
    } catch (error) {
        console.log("E: ", error);
    }
} 

getAllUsers();


// fetch 
fetch('https://api.github.com/users/BishtSinghMahesh')
.then((response) => {
    return response.json()
})
.then( (data) => {
    console.log(data);
})
.catch((error) => console.log(error))


