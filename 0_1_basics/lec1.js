// const  , let  and var :

const accountId = 144553
let accountEmail = "abc@gmail.com"
var accountPassword = "12345"
accountCity = "jaipur"

// accountId = 2  not allowed

console.log(accountId) ; 
accountEmail = "cde@gmail.com"
accountPassword = "45212"
accountCity = "BENGALURU" // this is possible but not encouraged to use.
let accountState ;


// Using table method to print the multiple values at once instead of printing alone :
console.table([accountId , accountEmail , accountPassword , accountCity , accountState])

/*
NOTE :-

Prefer not to use the var because of the issue in the block scope and the
functional scope

*/





