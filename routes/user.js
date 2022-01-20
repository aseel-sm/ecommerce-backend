const router = require("express").Router();
const jwt = require("jsonwebtoken");
const { verifyToken, verifyTokenAndAuthorization } = require("./verifyToken");
router.put("/:id", verifyTokenAndAuthorization, (req, res) => {});

module.exports = router;
