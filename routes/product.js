const express = require("express");
const Product = require("../models/product");
const router = express.Router();
const {isLoggedIn, sellerConfirm,consumerConfirm} = require('../middlewares/verifier')
const Comment = require("../models/comments")
const meanFinder = require('../middlewares/meanFinder')

//Landing Page
router.get("/", (req, res) => {
  res.render('landing')
});

//About Us
router.get('/aboutus', (req,res)=>{
  res.render('about')
})

// All Products
router.get("/products", async (req, res) => {
  try {
    const products = await Product.find({}).populate('review')
    res.render("product/show", { products })
   
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
router.get('/products/:id',isLoggedIn, async(req,res)=>{
  try{
    const id = req.params.id
    const product = await Product.findById(id).populate('review')
    // const allReview = product.review
    // function meanFinder(allReview){
    //   for(let review of allReview){
    //     console.log(review.rating)
    //   }
    // }
    // meanFinder(allReview)
    res.render("product/single",{ product })
  }
  catch(err){
    req.flash('error','Something went wrong.')
    console.log(err)
  }
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

//Comment Section
router.post('/products/:id/review',async(req,res)=>{
  try{
    const product = await Product.findById(req.params.id)
    const review = new Comment({
      ...req.body,
      user:req.user.username
    })

    product.review.push( review )
    await review.save()
    await product.save()

    req.flash('success',"Comment added Successfully");
    res.redirect(`/products/${req.params.id}`)
  }
  catch(err){
    req.flash('error','Cannot add Comment right now')
    console.log(err)
  }
})

// Wrong Route Page
// router.get('*',(req,res)=>{
//   res.render('product/wrong')
// })


module.exports = router;
