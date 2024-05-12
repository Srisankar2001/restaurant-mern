const express = require('express')
const multer = require('multer')
const path = require('path')
const router = express.Router()
const foodModel = require('../models/foodSchema')

const storage = multer.diskStorage({
    destination : (req,file,cb) => {
        cb(null,'public/images')
    } , 
    filename : (req,file,cb)=>{
        cb(null,file.fieldname  + path.extname(file.originalname))
    }
})

const upload = multer({
    storage : storage
})

router.get("/",async(req,res)=>{
    try{
        const foods = await foodModel.find({})
        if(foods){
            res.status(200).json({status:true,data:foods})
        }else{
            res.status(500).json({status:false,message:"No foods avalible"})
        }
    }catch(error){
        res.status(500).json({status:false,message:error.message})
    }
})
router.post("/add",upload.single('image'),async(req,res)=>{
    const { name , type , price , description}  = req.body
    const image = req.file.filename
   try{
        if(!(name && price && description && image)){
            throw new Error('Name, price , description , image are required fields')
        }
        const food = new foodModel({
            name : name,
            type: type,
            price : price,
            description : description,
            image : image
        })
        await food.save()
        res.status(200).json({status:true})
   }catch(error){
        res.status(500).json({status:false,message:error.message})
   }
})

module.exports = router
