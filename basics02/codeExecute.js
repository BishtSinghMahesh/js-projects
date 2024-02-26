/* 
************* Javascript Execution Context *************
JS is Single Thread  


 1st {} Global Execution context gets created and it is referred to "This"
 Global Execution context of Browser's "This" is "Window Object"

 1. Execution Context are :-
 a. Global Execution Context 
 b. Function or Functional Execution Context  
(a.1 ) one more in Mongoose :- Eval Execution Context ,it's a property of  Global Execution Context 


 JS runs ur files in 3 phases
2.Mwmory Creation Phase or Creation Phase  (memory crated for variables in this)
3. Execution Phase (functions run in this phase)



Example code
(let val1 = 10;
let val2 = 40;
function addNum(num1 , num2){
    let result = num1 + num2;
    return result;
}
 let result1 = addNum(val1, val2);
 let result2 = addNum(50, 60);
 )



Phases Works
1. first code runs in Global Execution or environment and allocated to (This)
2. Memory creation Phase all variables given memory 
             *variable   
     val1 -> undefined   (it is given type undefined) 
     val2 -> undefined   (it is given type undefined)
             *Function   
     addNum -> Defination 
     result1 -> undefined
     result2 -> undefined

3. Exwcution Phase
    val1 -> 10
    val1 -> 40
     addNum(result1 gets called) -> (new variable environment + Execution Thread) ->"gets deleted after its work done"
                              | 
                          Memory Phase 
                              |
                (val1 -> undefined , val2 -> undefined)
                              |
                        Execution Context 
                              |
                        num1 -> 10
                        num2 -> 40       
                      result -> 50   -> "goes to Global Execution Context"
                      
                      
    result2(addNum) -> (new variable environment + Execution Thread) ->"gets deleted after its work done"
                      | 
                  Memory Phase 
                      |
        (val1 -> undefined , val2 -> undefined)
                      |
                Execution Context 
                      |
                num1 -> 50
                num2 -> 60       
              result -> 110   -> "goes to Global Execution Context"





********************************* Call Stack *******************************
      
             |                         |
             |                         |
             |                         |
             |                         |
             |                         |
             |                         |
             |                         |
             |                         |
             | Method or code)         |
             | deletes after execution |
             |_Global Execution        |



       LIFO Last in First Out (if function are nested Last in First out)
        
 
           
       
       */
