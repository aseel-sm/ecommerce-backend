const router = require("express").Router();
const User = require("../models/User");
router.get("/register", async (req, res) => {
  const newUser = new User({
    username: req.body.username,
    email: req.body.email,
    password: req.body.password,
    username: req.body.username,
  });
  try {
    const savedUser = await newUser.save();
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
