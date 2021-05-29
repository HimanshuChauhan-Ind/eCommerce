const express = require("express");
const app = express();
const path = require("path");
const methodOverride = require("method-override");
const mongoose = require("mongoose");
const seedDB = require("./seed");
const session = require('express-session')
const flash = require('connect-flash')
const passport = require('passport')
const LocalStrategy = require('passport-local')
const User = require('./models/user')

//Non default requirement
const productRoutes = require("./routes/product");
const userRoutes = require("./routes/user")
const cartRoutes = require('./routes/cart')

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "/public")));
app.use(methodOverride("_method"));

//Configuring the mongoose
mongoose
  .connect("mongodb://localhost:27017/shopApp", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("DB Connected");
  })
  .catch((err) => {
    console.log("DB not Connected");
    console.log(err);
  });

passport.use(new LocalStrategy(User.authenticate()))

passport.serializeUser(User.serializeUser())
passport.deserializeUser(User.deserializeUser())

// Configuring the session
app.use(session({
  secret: 'new Secret',
  resave: false,
  saveUninitialized: true
}))
//User Auth
app.use(passport.initialize())
app.use(passport.session())

app.use(flash())
app.use((req,res,next)=>{
  res.locals.success = req.flash('success')
  res.locals.error = req.flash('error')
  res.locals.currentUser = req.user
  next()
})


//Seeding DB
// seedDB();

// Routes
app.use(productRoutes);
app.use(userRoutes);
app.use(cartRoutes);

app.listen(3000, () => {
  console.log("Starting the Server on port 3000");
});
