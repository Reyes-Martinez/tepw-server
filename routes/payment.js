const { Router } = require("express");
const {
  paymentGet,
  paymentPost,
  add_payment_metodPost,
} = require("../controllers/payment");
const router = Router();

router.get("/all", paymentGet);
router.post("/add", paymentPost);
router.post("/all/metod/:id", add_payment_metodPost);
module.exports = router;
