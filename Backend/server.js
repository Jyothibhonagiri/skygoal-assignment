const express = require("express")

const app = express();
app.use(express.json())
const cors = require("cors")
const mongoose= require("mongoose")
const userroutes  = require("./routes/Auth")
app.use(cors())
app.use("/auth",userroutes)
mongoose.connect("mongodb://localhost:27017/user-credentials");



app.listen(7000,()=>{
    console.log("server is running on port 7000")
})
