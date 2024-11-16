// control-flow statement : 

// if(condition) {
//     // internal code
// }
// else{
//     //code 
// }

// For loop :


const arr = [1, 2, 3, 4, 5, 6, 7, 8];
const arr1 = [[1, 2, 3], [1, 2, 3], [1, 2, 3], [1, 2, 3]];

for (let index = 0; index <= arr.length; index++) {
    const element = arr[index];
    if (element == 3) continue;
    if (element == 5) { console.log('5 is best number'); break; }
    console.log(element);
}


// while loop : 
var index = 0;
while (index <= 5) {
    console.log(index);

    index++;
}

// do while loop : 
let score = 1;
do {
    console.log(`score is ${score}`);
    score++;
} while (score <= 10)


// for-of loop : 

arr2 = [
    "aditya", "boys", 5, [1, 2, 3, 4, 5],
    {
        "name": "aditya",
        "class": 6,
    },
    { "fav_song": "khwaish", "fav_actor": "salman khan" }
]

for (const it of arr2) {
    console.log(it);
}

const arr_num = [1,2,3,4,5]
for(const i of arr_num){
    console.log(i) ; 
}

// maps : 
const map  = new Map() 
map.set('IN' , "INDIA");
map.set('RU' , "INDIA");
map.set('FR' , "INDIA");
map.set('USA' , "INDIA");

// map stores unique key value pairs which contains the unique key 

console.log(map) ; 


//printing the key-value pair int he map:  
for(const [key , value] of map){
    console.log(key , value) ; 
}



const obj1 = {
    js : 'javascript' , 
    cpp: 'c++' , 
    rb :'ruby' , 
    swift :"swift by apple"
}
// const obj1 = {
//     "js" : 'javascript' , 
//     "cpp": 'c++' , 
//     "rb" :'ruby' , 
//     "swift" :"swift by apple"
// }

// for(const it of obj1){
//     console.log(it) ; 
// }   // this is not iterable so we cannot iterate this using the for-of loop : 

// let's use the for-in loop for this :
//printing key : 
for(const key in obj1){
    console.log(key) ; 
}

for(const key in obj1){
    console.log(`${key} of  the shortcut is ${obj1[key]}`) ; 
}
// for(const key in obj1){
//     console.log(`${key} of  the shortcut is ${obj1.key}`) ; 
// } undefined rahega value of the key is technique me 



// for -in in the arary : 
arr_1 = [1,2,3,4,5,6] ; 
for(let x in arr_1){
    console.log(x) ; 
}

// for(let x in map){
//     console.log(x) ; 
// } // we cannot iterate oover the map using the for-in 


// forEach loop : 
arr_1 = [7,8,5,2,4,2,1,3,6,5,8] ; 


// method1 of declaring the forEach() using the arrow functioN : 
arr_1.forEach(element => {
    console.log(element);
});
// arrow function with name :
arr_1.forEach(item = (element)=>{
    console.log(element) ; 
})
// arrow function without name :


arr_1.forEach((element)=>{
    console.log(element) ; 
})

// we can print the element , index, arr_list all together at the same time 

arr_1.forEach((element , index, arr_list)=>{
    console.log(element , index , arr_list) ; 
})

// method 2 of declaring the forEach()
console.log('forEach')
arr_1.forEach(function (item){
    console.log(item) ;
})

const mycoding = [
    {
        language : 'js' , 
        lang_file: '.js' , 
    } , 
    {
        language : 'java' , 
        lang_file: '.java' , 
    } , 
    {
        language : 'python' , 
        lang_file: '.py' , 
    } , 
    
]

// VVIP : widely used in the real life :
mycoding.forEach((element)=>{
    console.log(element['language'] , element['lang_file']) ;
})

mycoding.forEach((element)=>{
    console.log(element , element['language'] , element['lang_file']) ;
})



