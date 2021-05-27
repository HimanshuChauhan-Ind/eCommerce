const express = require("express");
const Product = require("../models/product");
const router = express.Router();
const {isLoggedIn, sellerConfirm,consumerConfirm} = require('../middlewares/verifier')

//Landing Page
router.get("/", (req, res) => {
  res.send("Running Fine, Landing Page");
});

// All Products
router.get("/products", async (req, res) => {
  try {
    const products = await Product.find({})
    req.flash("success","Products Loaded Successfully")  
    res.render("product/show", { products });
   
  } catch (error) {
    console.log(error)
  }
  
});

// Creating the new product form
router.get('/products/new',isLoggedIn,sellerConfirm,(req,res)=>{
  res.render('product/new')
})

// Adding the new Product
router.post('/products',isLoggedIn,sellerConfirm, async(req,res)=>{
  const product = req.body
  await Product.create(product)
  res.redirect('/products')
})

// Viewing an individual product
router.get('/products/:id', async(req,res)=>{
  const id = req.params.id
  const product = await Product.findById(id)
  res.render("product/single",{ product })
})

// Getting the edit page
router.get('/products/:id/edit',isLoggedIn,sellerConfirm, async(req,res)=>{
  const id = req.params.id
  const product = await Product.findById(id)
  res.render('product/edit', { product })
})

// Updating the Editted Product
router.patch('/products/:id',isLoggedIn,sellerConfirm, async(req,res)=>{
  await Product.findByIdAndUpdate(req.params.id, req.body)
  res.redirect('/products')
})

// Deleting the Product
router.delete('/products/:id',isLoggedIn,sellerConfirm, async(req,res)=>{
  await Product.findByIdAndDelete(req.params.id)
  res.redirect('/products')
})


// Wrong Route Page
router.get('*',(req,res)=>{
  res.render('product/wrong')
})


module.exports = router;
