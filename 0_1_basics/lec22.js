//IIFE : immediately invoked function expression.
// it protects us from the global scope pollution and it also immediately inovkes the function.
//

// This is the syntax for the IIFE functions . 
// named IIFE
(function chai() {
    console.log('db connected')
})(); // we should use the ';' this one to end the function context.


// writing same function as a arrow function : 
// unamed IIFE
((name) => {
    console.log(`db connected 2 ${name}`)
})('aditya');
