function addone(num){ // this is called function 
    return num + 1 ;
}
console.log(addone(5))

const addTwo = function (num){ // this is also called function but sometimes called expression as well
    return num+2
}
console.log(addTwo(9))

/* 

I we are declaring function in the form of the expression function 
then in that we have to call the function only after its declaration 
if we are doing it before then it will throwf an  error.

But we can do in the normal function  , we can call it before it's declaration  . 

*/