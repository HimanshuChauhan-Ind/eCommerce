const express = require('express')
const router = express.Router()
const User = require('../models/user')
const passport = require('passport')


//Signing up the user
router.get('/register',(req,res)=>{
    res.render('user/signUp')
})

//Registering the user
router.post('/register', async(req,res)=>{
    try{
        const user = new User({username:req.body.username, email:req.body.email, phn:req.body.phn,role:req.body.role})
        await User.register(user, req.body.password)
        req.flash('success','Registered Successfully, please login again to continue')
        res.redirect('/products')
    }
    catch(e){
        req.flash('error',e.message)
        res.redirect('/register')
    }
    
})

//SignIn page
router.get('/signIn',(req,res)=>{
    res.render('user/signIn')
})

//Signing in user
router.post('/signIn',
passport.authenticate('local',
        {
            failureRedirect: '/login',
            failureFlash: true
        }
    ),(req,res)=>{
        req.flash('success',`Welcome ${req.user.username}`)
        res.redirect('/products')
    }
)

//LogOut
router.get('/logout', (req, res) => {
    req.logout();
    req.flash('success', 'Logged Out Successfully');
    res.redirect('/signIn');
})

module.exports = router