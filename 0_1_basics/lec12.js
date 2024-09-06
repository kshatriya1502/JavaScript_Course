const another_array = [1,2,3,[4,5,6],7,[6,7,8,[10,11,11]]] ; 
const real_array = another_array.flat(Infinity) ; 
console.log(real_array)

/* flat use to simplfy the array into the linear format instead of the 
nested format , It takes 'depth' as ans argument such Infinity , 0 , 1 ..etc */

console.log(Array.isArray("Hitesh")) // checks does the given variable value is an array  or not and here in this case it is not so the o/p is false

// converting the variable such as string into the array : 
console.log(Array.from("Hitesh")) ; 

//converts object to the array : 
console.log(Array.from({name : "hitesh" , 
    class : "v" 
})) // it will print the empty array.


let score1 = 100 
let score2 = 200
let score3 = 300
console.log(Array.of(score1 ,score2 , score3)) ; //  convert the values into the arrays 

// There are two ways of declaring the object  : 
// singleton mtlb koi bhi constructor se hum object bannate hae toh singleton bann jata hae


// object literal se kabhi singleton nahi banta hae.
// const jsuser = {}

// different way of creating object : 
// Object.create()// isi method se singleton bannta hae yahi constructor method hae


// how to user symbol in the object  : 
mysymbol = Symbol('key1') ; 
const userdata = {
    "name" : "hitesh" , 
    age : 18 , 
    location : "jaipur" ,
    email : "hitesh@google.com" , 
    isloggedin : false, 
    lastlogindays : ["monday" , "saturday"],
    [mysymbol] : "cigada33026" // way of the defining the symbol

};


console.log(userdata.name) ; 

console.log(userdata.age) ;
console.log(userdata['age'])
console.log(userdata.name) ;



console.log(userdata[mysymbol]) ; // way of accesing the symbol

// we can change the value of key also : 
userdata.age = 89 ; 
userdata[mysymbol] = "hhaj"
console.log(userdata)

// Object.freeze(userdata) ;
/*object.freeze(object_name) freezes the userdata and the which means it does not allows us to change the object
variables*/
userdata.email = "abc@gmail.com" ; 
userdata.email = "mno@gmail.com" ; 
console.log(userdata) ; 

userdata.greeting = function(){
    console.log("hello I am function inside the object")
}
console.log(userdata.greeting())
console.log(userdata.greeting)
console.log(userdata)

userdata.greeting2 = function getName(){
    console.log(`Hello ${this.name} how are you?`)
}
console.log(userdata.greeting2()) ; 
console.log(userdata)








