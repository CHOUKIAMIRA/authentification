const express=require('express');
const config = require('./DB/config');
const cors=require("cors")
const userRouter = require('./router/user_router');
const app=express()
const port =8000;

app.use(express.json())//informer le server pour le format des objet json

app.use(cors({
   origin:"http://localhost:5173"
   
}))
config()
app.use("/user",userRouter)
app.listen(port,()=>{
    console.log("server is running")
})
