import express from "express";

const router=express.Router()

import Product from '../models/productModel.js'

import asyncHandler from 'express-async-handler'
 

const productRoutes=()=>{

//@desc Fetch all products
//@route GET /api/products
//@access Public
router.get('/',asyncHandler(
    async(req,res) => {
    const products=await Product.find({})
    res.json(products)
    }

))
//@desc Fetch single products
//@route GET /api/products/:_id
//@access Public
//Setting api for single product listing
router.get('/:id', asyncHandler(
async (req,res)=>{
   
    const product =await Product.findById(req.params.id)
    //checking id in url and matching with database-id
    if(product){
        res.json(product)
    }else{
        res.status(404)
        throw new Error("Product not found")
    }
    
}


))
}
 export default productRoutes;