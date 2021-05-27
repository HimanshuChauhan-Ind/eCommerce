const isLoggedIn = (req,res,next) => {
    if (!req.isAuthenticated()) {
        req.flash('error', 'You Need To Login First');
        return res.redirect('/signIn');
    }
    next();
}

//Checking wheter the user is authenticated to cart or not 
const consumerConfirm = (req,res,next) =>{
    if(!(req.user.role === "consumer")){
        req.flash('error', 'You are not authenticaed, Sign Up as consumer');
        res.redirect('/signIn')
    }
    next()
}

// Checking wheter the user is autheniticated to the product or not
const sellerConfirm = (req,res,next)=>{
    if(!(req.user.role === "seller")){
        req.flash('error','Please sign in as the Seller');
        res.redirect('/signIn')
    }
    next()
}


module.exports = {
    isLoggedIn, consumerConfirm, sellerConfirm
}