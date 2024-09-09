// function  : 
function one(){
    const username = "hitesh"
    function two(){
        const website = "youtube"
        console.log(username)
    }
    // console.log(website) // this is not defined.
    two() ; 
}
one() ; 


if(true){
    const username = "hitesh" 
    if(username === "hitesh"){
        const website = "youtube"
        console.log(username + website)
    }
    // console.log(website) // not defined throws error
}
// console.log(username)// not defined throws error 

//++++++++++++++++++++++++Interesting++++++++++++++++++++++++++++++++

console.log(addOne(5))  // function call can happen before it's declaration.


function addOne(num){
    return num + 1 
}

// console.log(addTwo(9)); function call cannot happend before it is declared in the case of the functional-expressions.

// This is also function but sometimes it is called expression also:-
const addTwo = function (num){
    return num + 5 ; 
}
console.log(addTwo(9)); 