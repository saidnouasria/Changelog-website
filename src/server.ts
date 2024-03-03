import express from "express"

const app = express()

app.get('/try',(req,res)=>{
    console.log("ninja turtles")
    res.status(200)
    res.json({"message":"Abdou is a good roommate"})

})

export default app