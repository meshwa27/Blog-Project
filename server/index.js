const express=require("express")
const Connection=require("./config/db")
const blogrouter = require("./routes/blogRoutes")
const app=express()


app.use(express.json())
app.use("/blog",blogrouter)

app.listen(8080,async()=>{
   await Connection
   console.log("server is running on port 8080")
})