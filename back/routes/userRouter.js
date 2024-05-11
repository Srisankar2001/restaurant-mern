const express = require('express')
const router = express.Router()
const userModel = require('../models/userSchema')
router.post('/',async (req,res) =>{
    const { name , email , phone , orders } = req.body
    try{
        if (!(name && email &&  phone && orders )){
            throw new Error('Name, email, phone, and order are required fields')
        }
        const user = new userModel({
            name : name,
            email : email,
            phone : phone,
            orders : orders
        })
        await user.save()
        res.status(200).json({status:true})
    }catch(error){
        re.status(500).json({status:false,message:message.error})
    }
})
module.exports = router
