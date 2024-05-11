const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const app = express()


app.use(express.json())
app.use(express.urlencoded({ extended: false }));
app.use(cors())
app.use(express.static('public'))

mongoose.connect("mongodb://127.0.0.1:27017/restaurant")
.then(()=>{
    console.log("DB connected")
    app.listen(3001,()=>{
        console.log("Server Started")
    })
})
.catch(error => {
    console.log(error)
})

const userRouter = require('./routes/userRouter')
const foodRouter = require('./routes/foodRouter')

app.use("/user",userRouter)
app.use("/food",foodRouter)