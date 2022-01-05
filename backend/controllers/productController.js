import Product from '../models/productModel.js'

import asyncHandler from  'express-async-handler'

// getting products

const getProducts = asyncHandler(async (req,res) => {
    const products=await Product.find({})
    res.json(products)
})

// for single products

const getProductById=  asyncHandler( async (req,res) => {
    const product = await  Product.findById(req.params.id)   // checking id in url and matching with database - id 

    if(product){
        res.json(product)

    } else {
        res.status(404)
        throw new Error("Product not found")


}
}
)

export {getProducts,getProductById}