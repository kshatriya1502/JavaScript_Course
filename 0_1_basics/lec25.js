// reduce
const mynums = [1,2,3,4,5] ;
init_value = 0 ; 

//  using the function : 

// const totalsum = mynums.reduce(function(acc , currval){
//     console.log(`acc : ${acc} and currval : ${currval}`)
//     return acc + currval ; 
// } , init_value)


// using the arrow function : 
const totalsum = mynums.reduce((acc , currval)=> acc+currval , 0)

console.log(totalsum) ;

const shoppingCart = [
    {itemname : "js course" , 
        price : 1000 
    } , 
    {itemname : "python" , 
        price : 3000
    } , 
    {itemname : "dbms" , 
        price : 5000 
    } , 
    {itemname : "c++" , 
        price : 1000
    } , 
    {itemname : "java" , 
        price : 2000 
    } , 
]
const totalprice = shoppingCart.reduce((acc , item)=>acc+item.price , 0)
console.log(totalprice)
