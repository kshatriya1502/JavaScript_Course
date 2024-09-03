let score = "33"
console.log(typeof score) ;
console.log(typeof(score)) ;

let valueInNumber = Number (score) ; 
console.log(typeof valueInNumber) ;

score = "33abc" ;
valueInNumber = Number (score) ; 
console.log(typeof valueInNumber) ;
console.log(valueInNumber) ; // NaN(NOT A NUMBER)

score = null ;
valueInNumber = Number (score) ; 
console.log(typeof valueInNumber) ;
console.log(valueInNumber) ; // 0

score = true ;
valueInNumber = Number (score) ; 
console.log(typeof valueInNumber) ;
console.log(valueInNumber) ; //1

score = "string" ;
valueInNumber = Number (score) ; 
console.log(typeof valueInNumber) ;
console.log(valueInNumber) ; //NaN


// boolean conversion:-

let loggedin = 1;
let loggedIn = Boolean(loggedin) ;
console.log(loggedin) ;

// Boolean("") = false
// Boolean(1) = false
// Boolean(0) = false
// Boolean("hitesh") = false


// string conversion 
let num = 33;
let stringnum = String(num) ; 
console.log(typeof stringnum) ;

 