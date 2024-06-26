const router = require("express").Router();
const Product = require("../models/Product");
const {
  verifyTokenAndAdmin,
  verifyTokenAndAuthorization,
} = require("./verifyToken");
// create

router.post("/create", verifyTokenAndAdmin, async (req, res) => {
  const newProduct = new Product(req.body);

  try {
    const savedProduct = await newProduct.save();
    res.status(200).json(savedProduct);
  } catch (err) {
    res.status(500).json(err);
  }
});
// update
router.put("/:id", verifyTokenAndAdmin, async (req, res) => {
  try {
    const updatedProduct = await Product.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    return res.status(201).json(updatedProduct);
  } catch (err) {
    return res.status(500).json(err);
  }
});

// delete user
router.delete("/:id", verifyTokenAndAdmin, async (req, res) => {
  try {
    await Product.findByIdAndDelete(req.params.id);

    res.status(200).json("Product deleted");
  } catch (err) {
    return res.status(500).json(err);
  }
});

// get product
router.get("/find/:id", async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);

    res.status(200).json(product);
  } catch (err) {
    return res.status(500).json(err);
  }
});

// get all product
router.get("/", async (req, res) => {
  console.log("P");
  const qNew = req.query.new;
  const qCat = req.query.category;
  try {
    let products;
    if (qNew) products = await Product.find().limit(5).sort({ createdAt: -1 });
    else if (qCat)
      products = await Product.find({
        categories: {
          $in: [qCat],
        },
      });
    else products = await Product.find();
    res.status(200).json(products);
  } catch (err) {
    return res.status(500).json(err);
  }
});
module.exports = router;
