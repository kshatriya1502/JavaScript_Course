// Numbers and maths:

const score = 400 ;   //automatically typecasting into the number
console.log(typeof score) ; 

const balance = new Number(100) ;// yaha par define karr rahe hae ki number hi hoga
console.log(balance) ; // yaha par balance ek number object bann gaya hae.
console.log(typeof balance) ;

console.log(balance.toString().length) ; // converted into the string using the to_string() and then string length functionality used to get the length of the number .
console.log(balance.toFixed(2)) ; 
const onum = 23.896 ; 
console.log(onum.toPrecision(2)) ; //24 
const num = 123.9582399 ; 
console.log(num.toPrecision(3))

/* 

toPrecision(2) function is used to find the  number upto the 2 decimal  places here in the number  after decimal 8 is there so number 
got rounded to 24.

*/

const hundreds = 1000000 ;
console.log(hundreds.toLocaleString()) ; 

/*converts the 100000 into the form of the 10,00,000 which is default US format we can make into the any format using various arguments */

console.log(hundreds.toLocaleString('en-US')) ;

console.log(Number.MAX_VALUE) ; 
console.log(Number.MAX_SAFE_INTEGER) ; 
console.log(Number.MIN_VALUE) ; 
console.log(Number.MIN_SAFE_INTEGER) ;


/*
 
   Number.MAX_VALUE is about the magnitude of the number, focusing on how      large a number can be.
 
   Number.MAX_SAFE_INTEGER is about the precision of integer values, ensuring accurate representation and operations.

    Number.MAX_VALUE pertains to floating-point numbers and their upper limit.

    Number.MAX_SAFE_INTEGER pertains specifically to integers and their safe representation.


    Beyond Number.MAX_VALUE, numbers are represented as Infinity, without consideration for precision.

    Beyond Number.MAX_SAFE_INTEGER, integer precision cannot be guaranteed, leading to potential inaccuracies in calculations.

 * 
 * 
 * 
 * 
 */

// *************************Maths******************************
console.log(Math) 
// Math is an object and has multiple methods.

console.log(Math.PI) ; 
console.log(Math.tan(45)) ;
console.log(Math.abs(-4)) ;

console.log(Math.round(4.3)) ; 
console.log(Math.round(4.6)) ; 

console.log(Math.ceil(4.2)) ; 
console.log(Math.floor(4.2)) ; 

console.log(Math.max(4,5,6,7,8)) ; 
console.log(Math.min(4,5,6,7,8)) ; 
 
console.log(Math.random()) ; // it's value always lies within [0  , 1] included

console.log(Math.round((Math.random()*10)+1)) ; 
console.log(Math.floor((Math.random()*10)+1)) ; 
console.log(Math.ceil((Math.random()*10)+1))  ; 

/* Math.random()*10+1 incase of the dies game where we should not get zero and non integer  */



const min = 1 ; 
const max = 5 ;

console.log(Math.floor(Math.random()*(max-min+1)) + min) ; 
// +min we are doing because it should contain a minimum value of the 10 atleast