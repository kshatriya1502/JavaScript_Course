// comparison and the conditional loops : 

/*NOTE : comparison and the conditionals are slightly unpredictable also */
console.log(2 > 1) ;
console.log(2 >=1) ;
console.log(2 < 1) ;
console.log(2 == 1) ;
console.log(2 != 1) ;


console.log("2" > 1) ; // "2" get automaatically get converted into the number
console.log("02" > 1) ; // true ; 
console.log(typeof Number("02")) ;  //Number  hae 


// Note : we should avoid this tyepe conversion in the code : 
console.log(null > 0) ;  // false
console.log(null == 0) ;// false
console.log(null >= 0) ;// true

/*The reason is that an equality  check == and comparison > < >= <= 
 work differnetly .
 comparisons convert null to a number treating it as 0 
 that's why null >= 0  is true and (1) null > 0 is false 
 */

console.log(undefined == 0) ; //false 
console.log(undefined > 0) ; // false
console.log(undefined < 0) ; // false

console.log("2" === 2) ; //  false 
/*'===' also checks the datatype of the two element and then after 
it compares its value*/


