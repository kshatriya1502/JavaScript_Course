// function : 
function sayMyname()
{
    console.log("h") ; 
    console.log("i") ;
    console.log("t") ;
}

sayMyname() ; 


// function with argument : 
function addTwoNumbers(n1 , n2) { 
    console.log(n1 + n2) ; 
}
function atn(n1 , n2) { 
    return n1 + n2 ; 
}
addTwoNumbers(1 , 4) ; 
console.log(atn(2 , 5)) ; 

function loggedin (username){
    return `${username} just logged in` 
}
console.log(loggedin('hitesh')) ; 
function logged_user(username = "sam"){
    if(username === undefined){
        console.log("please enter a username") ; 
        return 
    }
    console.log('outside the if-else block.')
    return `${username} just logged in` 
}
console.log(logged_user('aditya')) ; 
console.log(logged_user()); // undefined  no username input is given . 




