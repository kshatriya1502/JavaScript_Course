// dates and time : 

/* whenver  we calculate date na toh yeh 1970 January 1st se count
ab tak count hota hae */


// let mydate = new Date() ; 
// console.log(mydate);//2024-09-05T12:35:04.227Z
// console.log(mydate.toString());//Thu Sep 05 2024 18:05:04 GMT+0530 (India Standard Time)
// console.log(mydate.getDay()) ; //3 -- > wednesday
// console.log(mydate.toDateString());//Thu Sep 05 2024
// console.log(mydate.toLocaleDateString());//5/9/2024
// console.log(typeof mydate) ; //object

// we can create our own date also rather than the automatic dates
// let mycreatedDate = new Date(2023 , 0 , 23) ; 
// let mycreatedDate_2 = new Date(2023 , 0 , 23 , 5 , 3) ; 

// console.log(mycreatedDate.toDateString()) ; 
// console.log(mycreatedDate_2.toLocaleString()) ; 

// // yy-mm--dd : 
// let yymmdd = new Date("2023-01-14") ; 
// console.log(yymmdd.toLocaleString()) ; 


// // dd-mm-yy: 

// let ddmmyy = new Date("2023-01-14") ; 
// console.log(ddmmyy.toLocaleString()) ; 


// //timestamp : used in the quiz application.
// let mytimestamp = Date.now()
// console.log(mytimestamp) ; // this will o/p in the milliseconds ; 
// console.log(yymmdd.getTime()) ; 

// // getting time in the seconds 
// console.log(Math.floor(Date.now()/1000)) // dividing by hundred to convert the milli -> second


let newDate = new Date() 
// console.log(newDate.getFullYear()) ; 

const customized_date_type = newDate.toLocaleString('default' , {
    weekday:"short" ,  // short , long 
})

// /* this help us to define the various format defined for the each  of the
// the functionalities of the date object such as toLocaleString , toString() */

console.log(customized_date_type) ; 

let time = new Date() ; 
console.log(time.getTime()) ; 
console.log(time.toLocaleTimeString()) ; 
console.log(time.toTimeString())


