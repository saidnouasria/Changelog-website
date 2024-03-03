import express from "express"
import router from "./router"
const app = express()

app.get('/try',(req,res)=>{
    console.log("ninja turtles")
    res.status(200)
    res.json({"message":"Abdou is a good roommate"})

})

app.use('/api',router)

export default app