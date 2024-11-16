// arrow function  : 

const user = {
    username : "hitesh" , 
    price : 999 , 

    welcomeMessage : function(){
        console.log(`${this.username} , welcome to website`)
        console.log(this)
    }

}
user.welcomeMessage()// hitesh
user.username = "sam"
user.welcomeMessage() // sam

console.log(this) // it will print the empty object.


function chai() { 
    console.log(this.username) // undefined will be printed , this is only accessible in the object not in the function .
    console.log(this) ; 
}

chai()

// arrow function

const tea = () => {
    let username = "hitesh" 
    console.log(this.username) ; 
    console.log(this) ; 
}

tea ()


// this is also arrow function : 

// ()=>{}

const add = (n1 , n2) =>{
    return n1 + n2 ; 
}
console.log(add(4,5))

// implicit return in the arrow function  : 
const add1 = (n1 , n2) =>  n1 + n2 ; 


console.log(add1(5 , 8))

const arr = [1 , 3, 4 , 5] ; 
// arr.forEach(() => {})