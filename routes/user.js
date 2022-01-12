const router = require("express").Router();

router.get("/usertest", (req, res) => {
  res.send("success");
});

module.exports = router;
