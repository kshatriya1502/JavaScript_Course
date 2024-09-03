// Immediately Invoked Function Expression (IIFE)

// iife structure : 

// This also called named IIFE 
(function chai(){
    console.log('db connected')
})();

// using arrow in the IIFE : 
( ()=>{
    console.log('db connected')
})() ; 

//IIFE
( (name)=>{
    console.log(`db connected , ${name}`)
})('hitesh') ; 


/**It helps in the faster DB connection 
 * It helps us to prevent global variable pollution
 * 
 * 
 * 
 */