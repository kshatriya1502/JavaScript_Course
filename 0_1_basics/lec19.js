

if (true){
    let a = 10 ; 
    const b = 20 ; 
    var c = 30 ; 
}
// console.log(a) ;  // these are not defined here 
// console.log(b) ;  // these are not defined here 
console.log(c) ;  // this is defined here also that's why we are advised to not to use the var  always use let and const.{}

m = 10  ; 
if(true){
    m = 6 ; 
    console.log(m) ; 
}
console.log(m)

/*note : scope in the console that we check is diffent from the scope that we do in the window in the vs code. */

n = 5 ; //global scoped variable.
if(true){
    n = 9  ; 
    console.log(n) ;
    if(true)
    {
        n = 65 ; 
        console.log(n); 
        if(true){
            n = 55 ; 
            console.log(n) ; 
        }
        console.log(n) ; 
        
    }
    console.log(n) ; 
}
console.log(n) ; 