// Arrays :
const myArr = [0,1,2,3,4,5]
// note : arrays in the js are the adjustable in the size like a vector.
console.log(myArr[0]) ; // zero-based indexing 

// making copy of the arrays does the shallow copy.

const myHeros = ["shaktiman" , "comics"] ; 
console.log(typeof myHeros) ; 
const myArray2 = new Array("values" , "comics") ; 
console.log(typeof myArray2) ;
console.log(myArray2.__proto__) ;
console.log(myArr);
console.log(myArray2);     


// array methods  :
arr = [1 , 2 , 3  , 4  , 5] ;
arr.push(2) ; 
arr.push(7) ; 
console.log(arr) ;                                                              
                                  
//pop method :                                                    
arr.pop() ;                                                                   
console.log(arr) ; 
                                  
//unshift : it will add the element from the front
arr.unshift(99) ; // add 99 in the front of the array
console.log(arr) ;

// shift : it works like pop but the differenc is that it remove element from the front the arrays 
arr.shift() ;  
console.log(arr)  ; 

//quetionair methods inside the js  : 
console.log(arr.includes(8))  ; 
console.log(arr.indexOf(3)) ; 
 
// join method : 
/* It converts the array value into the string and also slightly shrinks
the string . */
const newarr = arr.join('&') ; 
console.log(newarr) ; 
console.log(typeof newarr);


// slics and splice : 

/* slice returns the section of the array */

console.log("a" , arr) ; 
const myn1 = arr.slice(1,3) ; 
console.log(myn1)
console.log("b" , arr);
const myn2 = arr.splice(1 , 3) ; 
console.log("c" ,arr) ; 
console.log("c" ,myn2) ; 

/*operation on the slice does not affect the original array while other operation on the array like splice
changes the original array i.e here in this case is arr */



const marvel_hero = ["thor" , "ironman" , "spiderman"] ; 
const dc = ["superman" , "flash" , "batman"] ; 




//concat : merges two differnt arrays .
new_hero = marvel_hero.concat(dc) ; 
console.log(new_hero) ; 

// push : 
/* push karne yeh array ko merge nahi karta balki array as a single data le leta hae mean array ke andar array like this  : [2 ,3 , [4 , 5]] */


// marvel_hero.push(dc) ; 
// console.log(marvel_hero) ; 


// spread operator : 
let new_spread_array = [...marvel_hero , ...dc] ; 
console.log(new_spread_array) ; 

/*spread out operator merges two arrays and spreads the elements */

let a = [1,2,3,4,5] ; 
let b = ["ham" , "rum" , "tam"]; 
let c = ["zaden" , "nucleya" , "ritwiz" , "alesso"] 

let new_arr_dj = [...a , ...b , ...c] ; 
console.log(new_arr_dj) ; 









