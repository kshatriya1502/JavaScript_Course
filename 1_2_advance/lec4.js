// Arrow function :
/** it allows you to write the function without writing function before this */

const chai = ()=>{
    console.log(this)
}

// basic arrow function strucyture  : () => {}
    const addtwo = (num1 , num2)=>{
        return num1+num2 
    }
    console.log(addtwo(4,5))

// It also helps in the implicit return : 

// we will be using the arrow function in the react js mainly
const addthree = (num1 , num2 , num3)=> num1 + num2 + num3 // implict return ;
console.log(addthree(4,2,5))

/**
 NOTE : 

 In the arrow function if we are using the curly brackets then 
 we have to write return statement  . 

 But in the implicity function that uses parentheses does not need any 
 return statement. 
 */


 // Returning object : 
const getobject = (num1 , num2)=>({username : (num1 + num2)})
console.log(getobject(6,9))



