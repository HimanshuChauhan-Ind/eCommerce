const express = require('express')
const router = express.Router()


//Signing up the user
router.get('/register',(req,res)=>{
    res.render('user/signUp.js')
})

module.exports = router