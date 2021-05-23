const express = require("express");
const app = express();
const path = require("path");
const methodOverride = require("method-override");
const mongoose = require("mongoose");
const seedDB = require("./seed");
const session = require('express-session')
const flash = require('connect-flash')

//Non default requirement
const productRoutes = require("./routes/product");

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

// Configuring the session
app.use(session({
  secret: 'new Secret',
  resave: false,
  saveUninitialized: true
}))
app.use(flash())
app.use((req,res,next)=>{
  res.locals.success = req.flash('success')
  res.locals.error = req.flash('error')
  next()
})


//Seeding DB
// seedDB();

// Routes
app.use(productRoutes);

app.listen(3000, () => {
  console.log("Starting the Server on port 3000");
});
