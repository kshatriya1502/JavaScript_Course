// map , filter , reduce . 

const coding = ["js" , "ruby" , "java"]

coding.forEach((item)=>{
   console.log(item) ; 
})
// it will run the function for the each item in the coding array and print that item . 


// let see what forEach loop return : 
const value = coding.forEach((item)=>{
    console.log(item) ; 
    //return item  -->undefined
})
console.log(value)

/* forEach loop does'nt return anything it return undefined */

