import express from "express"
import router from "./router"
import morgan from "morgan"

const app = express()

app.use(morgan('dev'))
app.use(express.json())
app.use(express.urlencoded({extended : true}))

app.get('/try',(req,res)=>{
    console.log("ninja turtles")
    res.status(200)
    res.json({"message":"Abdou is a good roommate"})

})

app.use('/api',router)

export default app