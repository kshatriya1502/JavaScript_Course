// object destructring of an array and the object : 


//object destructuring : 
const course = {
    coursename : "js in hindi" , 
    price : "999" , 
    courseteacher : "hitesh"
}

//to access the elements  we write : 

// course.coursename.courseteacher  : multiple time writing this is hectic process , to overcome this we use this:

const {courseteacher} = course
console.log(courseteacher) // we will use this name for accessing the element courseteaher no need to write like this : course.coursename.courseteacher


// we can change the name courseteacher to instructor also as per the name.
const {courseteacher : instructor} = course
console.log(instructor)

// we use this technique of the destructring in extensively in the react 
const navbar = ({company}) =>{

}
navbar(company = "hitesh") 
