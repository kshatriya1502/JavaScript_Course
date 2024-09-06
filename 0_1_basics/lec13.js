// singleton object
// const tinderuser = new Object() // we can declare empty object in this way also 

// non-singleton object : 
tinderuser = {} 

tinderuser.id = "123abc"  
tinderuser.name = "sammy"
tinderuser.isloggedin = false 

const regularuser = {
    email : "some@gmail.com" , 
    fullname : {
        userfullname : {
            firstname : "hitesh" , 
            lastname :"choudhary" 
        }
    
    }
}
console.log(regularuser.fullname) ; 
console.log(regularuser.fullname.userfullname) ;

//combining the two objects : 
const obj1 = {1 : 'a' , 2 :'b'}
const obj2 = {3 : 'a' , 4 : 'b'} 
const obj3 = {5 : 'a' , 6 : 'b'} 
const obj4 = {7 : 'a' , 8 : 'b'} 

//combining the object : 
const obj_merge = Object.assign({} , obj1 , obj2 , obj3 , obj4) ; 
console.log(obj_merge) ; 


// we can also merge the objects like this : 
const obj_merge1 = {...obj1 , ...obj2 , ...obj3 , ...obj4} 
console.log(obj_merge1)


// objects inside the array : 
const user  = [{
    id : 1 , 
    email : "h@gmail.com"
}]


//  getting all the keys  and the values: 
console.log(Object.keys(tinderuser)) ;
console.log(Object.values(tinderuser)) ;
console.log(Object.entries(tinderuser)) ;

// does the object has the value : 
console.log(tinderuser.hasOwnProperty('isLoggedIn'))
