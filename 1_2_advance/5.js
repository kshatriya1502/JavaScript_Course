// promise does : 
// asysnc task
// db calls , cryptography , network:


/* we can store promise in the variable also because it's an object also */
// const promiseOne  = new Promise(function(resolve , reject){

//     setTimeout(function(){
//         console.log('async taks is completed') ; 
//         // resolve()
//      } , 2000)
// }) ; 

//promises has two parts resolve and the rejection . 
// type of the promise is the object . 


// 
// console.log(promiseOne) ;  shows pending

// promiseOne.then(function(){
//     console.log("Promise consumed") ; 
// })


/* right now the promiseOne is not connected to the then function 
i.e 


    this one --  > 
    promiseOne.then(function(){
    console.log("Promise consumed") ; 
})

--- to connnect it we have to use resolve : 

*/

// setTimeout(function(){
//     console.log('async  task 1') ; 
//     resolve() ; 
// } , 2000)

 


// to create promise we don't need to use the variable .

// we can create in this way also : 

// new Promise(function(resolve , reject){
//     setTimeout(function(){
//         console.log('async task 2')
//         resolve() ; 
//     } , 3000)
// }).then(function(){
//     console.log('async function resolved')
// })

/*
\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\


resolve() ke andar jo bhi data hum pass karte
hae , toh use promise.then wale function me 
pass hota hae as a value : look at the given below example

new Promise(function(resolve , reject){
    setTimeout(function(){
        resolve({
            username : 'chai' , 
            email : 'chai@example.com'
        })
    } , 1000)
}).then(function(user){
    console.log(user) ; 
})


yaha par jo object username , email pass kiye hae wahi print ho ga



\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

*/


// new Promise(function(resolve , reject){
//     setTimeout(function(){
//         resolve({
//             username : 'chai' , 
//             email : 'chai@example.com'
//         })
//     } , 1000)
// }).then(function(user){
//     console.log(user) ; 
// })




    
const promise4 = new Promise(function (resolve , reject){
    setTimeout(function(){
        let error = true; 
        if(!error){
            resolve({
                username : "aditya" , 
                pass : "123"
            })
        }
        else
        {
            reject('ERROR : something went wrong')
        }
    },2000)
})



//console.log(promise) ;
       
                                             



const username = promise4.then((user)=>{
    console.log(user) ; 
    return  user.username ;   
}).catch(()=>{
    console.log('error')
})

// console.log(username) ;  // promise<pending>

/* 
    doing this will result in the promise pending so to avoid that 
    we do the chaining in the js : 
*/

promise4
.then((user)=>{
    console.log(user) ; 
    return  user.username ;       // whatever we are doing here is the actually promise chaining
})
.then((username)=>{
    console.log(username)
})
.catch((error)=>{
    console.log(error) ;
}).finally(()=>{
    console.log('finally the promise is either resolved or rejected')
})



// so finally run in the end of the statement ki jo run hota hi hota hae 

// instead of the promise we can also use the async - await 

// const promise5 = new Promise(function (resolve , reject){
//     setTimeout(function(){
//         let error = false; 
//         if(!error){
//             resolve({
//                 username : "aditya" , 
//                 pass : "123"
//             })
//         }
//         else{
//             reject('ERROR : something went wrong')
//         }
//     },5000)
// }) 


// without handling error : 
// async function consumePromise5(){
//     const response = await promise5 ; 
//     console.log(response) ;
//     console.log('hello') ; 
// }

// consumePromise5() ;


// handling error :
// async function consumePromise5(){
//     try{
//         const response = await promise5 ; 
//         console.log(response) ;
//         console.log('hello') ; 
//     }
//     catch(error)
//     {
//         console.log(error) ; 
//     }
    
// }



/* fetch : 

async function getallusers(){
    const response = await fetch ('https://jsonplaceholder.typicode.com/users') ;
    try {
        const data = response.json() ; 
        console.log(data) ; 

    } catch (error) {
        console.log(error) ; 
    }
}

getallusers() ; // promise<pending>

This code looks correct but still we cannot not get answer why ? 
becasue 
se have to await this one also : 

 const data = response.json() ;  this also takes time some time so to get  the output we have to await this statement





*/

// correc code : 

// async function getallusers(){
//     const response = await fetch ('https://jsonplaceholder.typicode.com/users') ;
//     try {
//         const data = await  response.json() ; 
//         console.log(data) ; 

//     } catch (error) {
//         console.log(error) ; 
//     }
// }

// getallusers() ;


// //  how to write this aync-await function in the .then format 


// console.log('-----------------------------------------------------')
// console.log('-----------------------------------------------------')
// console.log('-----------------------------------------------------')
// console.log('------------------------.THEN -----------------------------')

/* this method will not work gives output promise<pending> */

// const promiseuser = new Promise(function (resolve , reject){
    
//         const response = fetch('https://jsonplaceholder.typicode.com/users')
//         resolve(response); 
   
// }).then(function(response){
    
//     return response.json() ; 
    
// }).then((data)=>{
    
//     console.log(data)
// })



// console.log(promiseuser) ;



// fetch('https://jsonplaceholder.typicode.com/users')
// .then((response)=>{
//     return response.json() ;
// })
// .then((data)=>{
//     console.log(data) ; 
// })
// .catch((error) => console.log(error))
// .finally('respose perfect...')














