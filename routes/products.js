const { Router } = require("express");
const {
  productGet,
  productGetByName,
  productPost,
  productPut,
  productDelete,
} = require("../controllers/product");
const router = Router();

//* products
router.get("/all", productGet);
router.get("/:name", productGetByName);
router.post("/add", productPost);
router.put("/update/:id", productPut);
router.delete("/delete/:id", productDelete);

module.exports = router;
