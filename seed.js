const mongoose = require("mongoose");
const Product = require("./models/product");

const products = [
  {
    name: "Product 1",
    desc:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam urna nunc, interdum nec dignissim ut, finibus eu risus. Nam semper rhoncus sapien eget vulputate. Fusce scelerisque, neque sit amet malesuada feugiat, leo risus consequat sem, eu ullamcorper dui leo et sem. Aliquam posuere volutpat eros, quis rutrum mauris commodo vel. Suspendisse dapibus orci eu auctor consequat. Phasellus porta, sem at maximus dictum, lacus massa volutpat sem, sed eleifend ligula ante id massa. Pellentesque sollicitudin enim felis, at eleifend augue feugiat id. Nam vehicula et augue nec ultricies. In dolor dui, pretium quis viverra in, tempus ut libero. Aenean vel lobortis dui. Suspendisse id erat a arcu bibendum varius quis at diam.",
    price: "1222",
    img:
      "https://images.unsplash.com/photo-1580910051074-3eb694886505?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8cGhvbmV8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
  },
  {
    name: "Product 2",
    desc:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam urna nunc, interdum nec dignissim ut, finibus eu risus. Nam semper rhoncus sapien eget vulputate. Fusce scelerisque, neque sit amet malesuada feugiat, leo risus consequat sem, eu ullamcorper dui leo et sem. Aliquam posuere volutpat eros, quis rutrum mauris commodo vel. Suspendisse dapibus orci eu auctor consequat. Phasellus porta, sem at maximus dictum, lacus massa volutpat sem, sed eleifend ligula ante id massa. Pellentesque sollicitudin enim felis, at eleifend augue feugiat id. Nam vehicula et augue nec ultricies. In dolor dui, pretium quis viverra in, tempus ut libero. Aenean vel lobortis dui. Suspendisse id erat a arcu bibendum varius quis at diam.",
    price: "1222",
    img:
      "https://images.unsplash.com/photo-1580910051074-3eb694886505?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8cGhvbmV8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
  },
  {
    name: "Product 3",
    desc:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam urna nunc, interdum nec dignissim ut, finibus eu risus. Nam semper rhoncus sapien eget vulputate. Fusce scelerisque, neque sit amet malesuada feugiat, leo risus consequat sem, eu ullamcorper dui leo et sem. Aliquam posuere volutpat eros, quis rutrum mauris commodo vel. Suspendisse dapibus orci eu auctor consequat. Phasellus porta, sem at maximus dictum, lacus massa volutpat sem, sed eleifend ligula ante id massa. Pellentesque sollicitudin enim felis, at eleifend augue feugiat id. Nam vehicula et augue nec ultricies. In dolor dui, pretium quis viverra in, tempus ut libero. Aenean vel lobortis dui. Suspendisse id erat a arcu bibendum varius quis at diam.",
    price: "1222",
    img:
      "https://images.unsplash.com/photo-1580910051074-3eb694886505?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8cGhvbmV8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
  },
  {
    name: "Product 4",
    desc:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam urna nunc, interdum nec dignissim ut, finibus eu risus. Nam semper rhoncus sapien eget vulputate. Fusce scelerisque, neque sit amet malesuada feugiat, leo risus consequat sem, eu ullamcorper dui leo et sem. Aliquam posuere volutpat eros, quis rutrum mauris commodo vel. Suspendisse dapibus orci eu auctor consequat. Phasellus porta, sem at maximus dictum, lacus massa volutpat sem, sed eleifend ligula ante id massa. Pellentesque sollicitudin enim felis, at eleifend augue feugiat id. Nam vehicula et augue nec ultricies. In dolor dui, pretium quis viverra in, tempus ut libero. Aenean vel lobortis dui. Suspendisse id erat a arcu bibendum varius quis at diam.",
    price: "1222",
    img:
      "https://images.unsplash.com/photo-1580910051074-3eb694886505?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8cGhvbmV8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
  },
  {
    name: "Product 5",
    desc:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam urna nunc, interdum nec dignissim ut, finibus eu risus. Nam semper rhoncus sapien eget vulputate. Fusce scelerisque, neque sit amet malesuada feugiat, leo risus consequat sem, eu ullamcorper dui leo et sem. Aliquam posuere volutpat eros, quis rutrum mauris commodo vel. Suspendisse dapibus orci eu auctor consequat. Phasellus porta, sem at maximus dictum, lacus massa volutpat sem, sed eleifend ligula ante id massa. Pellentesque sollicitudin enim felis, at eleifend augue feugiat id. Nam vehicula et augue nec ultricies. In dolor dui, pretium quis viverra in, tempus ut libero. Aenean vel lobortis dui. Suspendisse id erat a arcu bibendum varius quis at diam.",
    price: "1222",
    img:
      "https://images.unsplash.com/photo-1580910051074-3eb694886505?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8cGhvbmV8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
  },
  {
    name: "Product 6",
    desc:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam urna nunc, interdum nec dignissim ut, finibus eu risus. Nam semper rhoncus sapien eget vulputate. Fusce scelerisque, neque sit amet malesuada feugiat, leo risus consequat sem, eu ullamcorper dui leo et sem. Aliquam posuere volutpat eros, quis rutrum mauris commodo vel. Suspendisse dapibus orci eu auctor consequat. Phasellus porta, sem at maximus dictum, lacus massa volutpat sem, sed eleifend ligula ante id massa. Pellentesque sollicitudin enim felis, at eleifend augue feugiat id. Nam vehicula et augue nec ultricies. In dolor dui, pretium quis viverra in, tempus ut libero. Aenean vel lobortis dui. Suspendisse id erat a arcu bibendum varius quis at diam.",
    price: "1222",
    img:
      "https://images.unsplash.com/photo-1580910051074-3eb694886505?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8cGhvbmV8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
  },
  {
    name: "Product 7",
    desc:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam urna nunc, interdum nec dignissim ut, finibus eu risus. Nam semper rhoncus sapien eget vulputate. Fusce scelerisque, neque sit amet malesuada feugiat, leo risus consequat sem, eu ullamcorper dui leo et sem. Aliquam posuere volutpat eros, quis rutrum mauris commodo vel. Suspendisse dapibus orci eu auctor consequat. Phasellus porta, sem at maximus dictum, lacus massa volutpat sem, sed eleifend ligula ante id massa. Pellentesque sollicitudin enim felis, at eleifend augue feugiat id. Nam vehicula et augue nec ultricies. In dolor dui, pretium quis viverra in, tempus ut libero. Aenean vel lobortis dui. Suspendisse id erat a arcu bibendum varius quis at diam.",
    price: "1222",
    img:
      "https://images.unsplash.com/photo-1580910051074-3eb694886505?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8cGhvbmV8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
  },
  {
    name: "Product 8",
    desc:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam urna nunc, interdum nec dignissim ut, finibus eu risus. Nam semper rhoncus sapien eget vulputate. Fusce scelerisque, neque sit amet malesuada feugiat, leo risus consequat sem, eu ullamcorper dui leo et sem. Aliquam posuere volutpat eros, quis rutrum mauris commodo vel. Suspendisse dapibus orci eu auctor consequat. Phasellus porta, sem at maximus dictum, lacus massa volutpat sem, sed eleifend ligula ante id massa. Pellentesque sollicitudin enim felis, at eleifend augue feugiat id. Nam vehicula et augue nec ultricies. In dolor dui, pretium quis viverra in, tempus ut libero. Aenean vel lobortis dui. Suspendisse id erat a arcu bibendum varius quis at diam.",
    price: "1222",
    img:
      "https://images.unsplash.com/photo-1580910051074-3eb694886505?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8cGhvbmV8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
  },
  {
    name: "Product 9",
    desc:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam urna nunc, interdum nec dignissim ut, finibus eu risus. Nam semper rhoncus sapien eget vulputate. Fusce scelerisque, neque sit amet malesuada feugiat, leo risus consequat sem, eu ullamcorper dui leo et sem. Aliquam posuere volutpat eros, quis rutrum mauris commodo vel. Suspendisse dapibus orci eu auctor consequat. Phasellus porta, sem at maximus dictum, lacus massa volutpat sem, sed eleifend ligula ante id massa. Pellentesque sollicitudin enim felis, at eleifend augue feugiat id. Nam vehicula et augue nec ultricies. In dolor dui, pretium quis viverra in, tempus ut libero. Aenean vel lobortis dui. Suspendisse id erat a arcu bibendum varius quis at diam.",
    price: "1222",
    img:
      "https://images.unsplash.com/photo-1580910051074-3eb694886505?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8cGhvbmV8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
  },
];

const seedDb = async () => {
  await Product.insertMany(products);
  try {
    console.log("DB seeded");
  } catch (error) {
    console.log("Failed Seeding");
    console.log(error);
  }
};

module.exports = seedDb;
