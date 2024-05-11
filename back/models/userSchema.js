const mongoose = require('mongoose')
const foodModel = require('./foodSchema')


const userSchema = new mongoose.Schema({
    name : {
        type : String,
        required : true
    },
    email : {
        type : String,
        required : true,
        lowercase : true
    },
    phone : {
        type : String,
        required : true
    },
    orderDate : {
        type : Date,
        required : false,
        default : Date.now()
    },
    orderTime: {
        type: String,
        required: false,
        default: new Date().toLocaleTimeString()
    },
    order : [
        {
            food: {
                type: mongoose.Schema.Types.ObjectId, 
                ref: 'food' 
            },
            quantity : {
                type : Number,
                required : true
            }
        }
    ],
    completed : {
        type : Boolean,
        required : false,
        default : false
    }
})


const userModel = mongoose.model('user',userSchema)
module.exports = userModel