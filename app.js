// built -in modules

// 3 party modules
const express = require("express");
const app = express();
//------------------
require("dotenv").config();
//-----------------------
//modules
const { get404 } = require("./controllers/error");
const User = require("./models/user");
//database
const { mongoConnect, getDb } = require("./util/database");
// templating engine
app.set("view engine", "ejs");
app.set("views", "views");
//routes
const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");
//----------------------------------

//middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.static("public"));

app.use((req, res, next) => {
  User.findById("6a5d495c2edfb294b43ed041")
    .then((user) => {
      req.user = new User(user.userName, user.email, user.cart, user._id);
      next();
    })
    .catch((err) => {
      console.log(err);
    });
});
//routes
app.use("/admin", adminRoutes);
app.use(shopRoutes);
//404 handler
app.use(get404);
//-------------------
mongoConnect(() => {
  app.listen(5000);
});
