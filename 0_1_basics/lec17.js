// functions  continuation...

function calculateCartPrice(num1){
    return num1 
}

console.log(calculateCartPrice(200 , 400 ,500)) // op : 2o0 but we need all the three.

//use of the rest opertor ( ...)
function calculateCartPrice1(...num1)
{
    return  num1 
}
console.log(calculateCartPrice1(400,500,20,10,60,90)) // it will return all the values in the form of the array .

function calculateCartPrice2(val1 , val2 , ...num1)
{
    return  num1 
}
console.log(calculateCartPrice2(400,500,20,10,60,90)) // it will return this one : 20,10,60,90 and the 400 and 500 will go inside the val1 and val2


const user = {
    username : "hitesh" , 
    price : 99  ,
}
function handleObject(anyobject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`) ; 
}
handleObject(user); 

// we can pass object as an input directly into the fuction : 
 handleObject({
    username : "Rupesh" , 
    price : 233 
})

// arrays  : 

const mynewarray = [200,400,100,600]
function returnSecondValue(getarr){
    return getarr[0] ; 
}
console.log(returnSecondValue(mynewarray))

// or 
console.log(returnSecondValue([1,2,3,4])) 




