const nums = [1,3,4,5,6,6,5,7]

const newnums = nums.filter((num) => num > 5)
console.log(newnums) // 6 6 7


const newnums2 = nums.filter((nums)=>{
    // nums > 3 ;  // it will return nothing because it is treated like a object and return empty array.

    return nums  > 3 ; // we have to write like this
})
console.log(newnums2)

/*filter function is use to filter out the values based on the condition
and return the certain values. */

// we can write the forEach with conditionals : 

myarr = []  
nums.forEach((nums)=>{
    if(nums > 4){
        myarr.push(nums)
    }
})

console.log(myarr) ;


const books = [
    {title : 'Book Five' , genre :'Science' , publish : 2009 , edition : 2014} ,
    {title : 'Book Six' , genre : 'Fiction' , publish : 1999 , edition : 2011} , 
    {title : 'Book four' , genre : 'Non-Fiction' , publish : 2008 , edition : 2011} , 
    {title : 'Book three' , genre : 'Fiction' , publish : 2009 , edition : 2012} , 
    {title : 'Book one' , genre : 'Fantasy' , publish : 1999 , edition : 2014} , 
    {title : 'Book seven' , genre : 'Non-Fiction' , publish : 2008 , edition : 2012} , 
]

const bookinfo1 = books.filter((bk)=>(bk.genre === 'Science'))
console.log(bookinfo1)

const bookinfo2 = books.filter((bk)=>(bk.publish > 2000))
console.log(bookinfo2)

// adding 10 in the each of the number using the map method : 
const mynum = [1,2,3,4,5,6,7]

const newmynum1 = mynum.map((num)=> num+10)
console.log(newmynum1)

const newmynum2 = mynum.map((num)=> {num+10})
console.log(newmynum2)

const newmynum3 = mynum.map((num)=> {return num+10})
console.log(newmynum3)

const newmynum4 = mynum.map((num)=> {
    if(num > 4){
        return num 
    }
})
console.log(newmynum4)


// chaining : 
const nnews = nums
              .map((num)=>num*10)
              .map((num)=>num+1)
              .filter((num)=>num>30)
console.log(nnews)