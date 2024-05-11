const mongoose = require('mongoose')

const foodSchema = new mongoose.Schema({
    name:{
        type : String,
        required : true,
        unique : true
    },
    type : {
        type : String,
        required : true
    },
    price:{
        type : Number,
        required : true
    },
    description : {
        type : String,
        required : true
    },
    image : {
        type : String,
        required : true
    }
})

const foodModel = mongoose.model("food",foodSchema)

module.exports = foodModel