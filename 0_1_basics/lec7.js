// stack and heap memory
/*memory allocation in the js */

//**************************************************** */
// stack memory is used to store  all the primitive variables . 
// heap memory is used to store all the non primtive variables . 


let myYoutubename = "hiteshchowdhary" ; 
let anothername = myYoutubename ; 
anothername = "chaaurcode" ; 
console.log(myYoutubename) ; 
console.log(anothername) ; 

let user ={
    email : "user@gmail.com" , 
    name : "user"
}
console.log(user) ;

let user2 = user ; 
user2.email = "abc@gmail.com" ; 

/* 
changing here will also change the email
value in the  user also because when we make user2 that contains the user 
so here user2 does not contains the copy of the user instead it contains
the reference 
*/



console.log(user) ; 



