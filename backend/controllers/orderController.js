import Order from '../models/orderModel.js'

import asyncHandler from 'express-async-handler'


// @desc Create new order
// @route POST / api/orders
// @access Private
const addOrderItems  = asyncHandler(async (req, res) => {
    const  {orderItems, shippingAddress, paymentMethod, itemsPrice, taxPrice, shippingPrice, totalPrice } = req.body

    if(orderItems && orderItems.length === 0) {
        res.status(400)
        throw new Error ('No order items')
        return
    }  else {
        //if order exist 
        const order = new Order({
            orderItems, user: req.user._id, shippingAddress, paymentMethod, itemsPrice, taxPrice, shippingPrice, totalPrice
        })

        const createOrder = await order.save()
        res.status(201).json(createOrder)
    }

})

// @desc Get order by ID
// @route GET  / api/orders/:id
// @access Private
const getOrderById  = asyncHandler(async (req, res) => {
    const  order = await Order.findById(req.param.id).populate('user','name email')

    if(order) {
        res.json(order)
    } else {
        res.status(404)
        throw new Error('Order not found')
    }

})


// @desc Get  Update order to paid
// @route GET  / api/orders/:id/pay
// @access Private
const updateorderToPaid  = asyncHandler(async (req, res) => {
   const order = await Order.findById(req.params.id)

   if(order){
       order.isPaid = true 
       order.paidAt = Date.now()
       order.paymentResult = {
           id : req.body.id,
           status:req.body.status,
           update_time : req.body.update_time,
           email_address: req.body.payer.email_address
       }
       const updatedOrder = await order.save()

       res.json(updatedOrder)

   } else {
       res.status(404)
       throw new error('Order Not Found')
   }

})

// @desc Get  Update order to paid
// @route GET  / api/orders/:id/pay
// @access Private

const getMyOrders = asyncHandler(async(req, res)=>{
    const orders = await Order.F({ user: req.user._id})
    res.json(orders)
})

// deliver here


// @desc Get  Update order to Delivered
// @route GET  / api/orders/:id/deliver
// @access Private/Admin
const updateOrderToDelivered = asyncHandler(async (req, res) => {
    const order = await Order.findById(req.params.id)
 
    if(order){
        order.isDeliverd = true 
        order.dekiveredAt = Date.now()
        
        const updatedOrder = await order.save()
 
        res.json(updatedOrder)
 
    } else {
        res.status(404)
        throw new error('Order Not Found')
    }
 
 })
 //@desc Get all orders
 //@route GET/api/orders
 //@access private/Admin
 const getOrders = asyncHandler(async (req, res)=> {
     const Orders = await Order.find({}).populate('user','id name')
     res.json(Orders)
 })


export { addOrderItems , getOrderById, updateorderToPaid, getMyOrders, updateOrderToDelivered, getOrders}