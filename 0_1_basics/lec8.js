// strings in the js  : 
const name = "hitesh" ; 
const repo = 20;
console.log(name + repo) ; // this technique is not used these days

// new technique :String interpolation
console.log(`hello my name is ${name} , my repo has ${50} visitors each month`)



// different technique string declaration : 
const getname = new String("hitesh") ; 
console.log(typeof getname) ; // object

console.log(getname[0]) ;
console.log(getname.__proto__) ; 
/*
console.log(getname.__proto__) ;

Yaha console par yeh ek empty object print karta hae  , agar same cheeze browser console me kare toh yeh list of all the string functions  like concat , charAt() , length show karta hae */

const str = new String("hellooworld") ;
console.log(str.length) ; 
console.log(str.toUpperCase) ;
console.log(str.charAt(2)) ;
console.log(str.indexOf('o')) ; 
console.log(str.slice(-11,4));
console.log(str.substring(0,5)) ;
const str1 = "    Hello WORLD   " ; 
console.log(str1) ;
console.log(str1.trim()) ;
const url = "https://hitesh.com/hitesh/%20/chaicode "
console.log(url.replace('%20' , '-')) ; // replace the certain character in the string .
console.log(url.includes('hitesh')) ; // tells the following string and character is present in the string or not .
const splitstr = url.split('/') ;
console.log(splitstr) ;



