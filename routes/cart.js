const express = require('express')
const router = express.Router()
const User = require('../models/user')
const { isLoggedIn } = require('../middlewares/verifier')

// Adding products to cart
router.post('/products/:id/cartAdd',isLoggedIn,async(req,res)=>{
   const user = await User.findById(req.user._id)
   user.cart.push(req.params.id)
   await user.save()
   res.redirect('/products')
})

// Displayig the cart
router.get("/user/:id/cart", isLoggedIn,async(req,res)=>{
   const cartItems = await User.findById(req.params.id).populate('cart')
   res.render('cart/view', { cartItems })
   // res.send(cartItems)
})

//Deleting the item form the cart
router.get('/user/:id/delete', isLoggedIn, async(req,res)=>{
   const user = req.user._id
   const productId = req.params.id;
   await User.findByIdAndUpdate(user,{$pull:{cart:productId}})
   res.redirect(`/user/${req.user._id}/cart`)
})

module.exports = router;