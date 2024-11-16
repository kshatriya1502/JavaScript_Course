fetch("http://localhost:3000/data")
.then((response)=>{
    return response.json() ;
})
.then((data)=>{
    console.log(data)
})