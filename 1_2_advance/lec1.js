function one(){
    const username = "hitesh"
    
    function two(){
        const website = "youtube"
        console.log(username)
    }
    two()
    console.log(website) // this will throw error
}

one()
