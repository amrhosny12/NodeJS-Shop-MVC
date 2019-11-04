const express = require("express");
const { body } = require("express-validator/check");

const adminController = require("../controllers/admin");
const isAuth = require("../middleware/is-auth");

const router = express.Router();

router.get("/add-product", isAuth, adminController.getAddProduct);

router.post(
  "/add-product",
  [
    body("title", "Title must be alpha numeric & at least 3 characters")
      .isLength({ min: 3 })
      .isString()
      .trim(),
    body("price", "Price must be a valid amount").isFloat(),
    body(
      "description",
      " Description mst be at least 5 character and at max 400 characters"
    )
      .isLength({ min: 5, max: 400 })
      .trim()
  ],
  isAuth,
  adminController.postAddProduct
);

router.get("/products", isAuth, adminController.getProducts);

router.get("/edit-product/:productId", isAuth, adminController.getEditProduct);

router.post(
  "/edit-product",
  [
    body("title", "Title must be alpha numeric & at least 3 characters")
      .isLength({ min: 3 })
      .isString()
      .trim(),
    body("price", "Price must be a valid amount").isFloat(),
    body(
      "description",
      " Description mst be at least 5 character and at max 400 characters"
    )
      .isLength({ min: 5, max: 400 })
      .trim()
  ],
  isAuth,
  adminController.postEditProduct
);

router.delete("/product/:productId", isAuth, adminController.deleteProduct);


module.exports = router;
