const express = require("express")
const Connection = require("./config/db")
const blogrouter = require("./routes/blogRoutes")
const app = express()
const cors = require("cors");



app.use(express.json())
app.use(cors(
   { origin: "http://localhost:5173", credentials: true }
));
app.use("/blog", blogrouter)

app.listen(8080, async () => {
   await Connection
   console.log("server is running on port 8080")
})