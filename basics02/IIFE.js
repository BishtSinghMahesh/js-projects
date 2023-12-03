// Immediately Invoked Function Expression (IIFE)

// Reasons to use IIFE
/* Usually IIFE needs when a file has a Database connection, when the file executed we want Database to connect immediately
   And sometimes we don't want Globel Variable to change local functions
   We don't want pollution from the global scope */

   // Syntex for IIFE is (function)() , first parenthesis for function and second is for execution

   (function mahe(){
      // Named IIFE
    console.log(`DB CONNECTED`);
   })();


   // you can also use Arrow function for IIFE 
   // remember while using to IIFE use " ; " use semicolon in the end of first IIFE to avoid errors
  ( (name) => {
   console.log(`DB CONNECTED 2 ${name}`);
  } )("Mahesh")

  // pass variable simply like a normal function

  // Named IIFE, 1st function is Named IIFE 
