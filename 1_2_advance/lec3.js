// this and the arrow function : 
// this is used to refer the current context

/* current context means inside the object everything is in the current
context  that is given in the below example*/ 

const user = {
    username : "hitesh",
    price : 999,
    welcomeMessage : function(){
        console.log(`${this.username} , welcome to website`)
        console.log(this)
    }
}

user.welcomeMessage()
user.username = "naman"
user.welcomeMessage()
console.log(this) // This will print the empty object
/*

Note if we do this inside the browser console then using this
keyword outside the object will print the window object  

*/
function chaiThis(){
    let username = "hitesh"
    console.log(this) ; 
    console.log(this.username) // this will print undefined because this.username ony works inside the object only
}
chaiThis()