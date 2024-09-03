// Datatype :

/*There are categorisation of the data into the two part primitive datatype 
non-primitive datatype  , this cateogrisation take place on the basis 
that how the data is fetched from the memory and the how the data is 
stored in the memory */ 

//Primitive datatype : 
/*
Primitive datatypes are in the 7 categories  , primitive datatype are
the call by value *since ther is no change in the value of the varialbe 
when we try to pass it into the function , only the copy of these variables
are passed that does not changes whenver we make any changes in the variable
inside the function.

*/


// 7 category:
// String , Number , Boolean , null , undefined , Symbol , BignInt

// symbol is used to make something unique 
//BigInt is used to handle large values specially .
// javascript is dynamically typed language it's not statically typed we can define the variable without using the datatype

const score = 100
const scoreValue = 100.3

/**In the js there is not any seperate concept of the decimal every numeric value is the considered to be of the Number datatype */

let userEmail ;  // here userEmail is undefined by default

const id = Symbol("5252") ; 
const anotherid = Symbol("5252") ; 
console.log(id == anotherid) ;  // false 

/*even we have used the same value inside the Symbol()  it creates 
a differnet unique ids for the particular number the numbers are same*/

const bignumber = 452522522336351616165n // using the n in the last convert the number into the bigint
console.log(bignumber);
console.log(typeof bignumber);  //BigInt


//Reference (Non primitive) :

// Array , Objects , Functions :

// array 
const heros = ["shaktiman" , "naagraj" , "doga"] ; 

// objects ; 
let obj = {
    name  : "hitesh" , 
    age : 22 
}
//functions 
const myfunction  = function(){
    console.log("hello world") ; 
}

console.log(typeof myfunction) ; 
console.log(typeof obj) ; 
console.log(typeof heros); 

/*
jitne bhi non premitive datatype hote hae unka type object hota hae 
yaha function ka typeof karne par function print hota hae magar uska 
mtlb function object hota hae 
*/







