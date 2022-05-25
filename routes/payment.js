const { Router } = require("express");
const {
  paymentGet,
  paymentPost,
  add_payment_metodGet,
  add_payment_metodPost,
} = require("../controllers/payment");
const router = Router();

router.get("/order/all", paymentGet);
router.get("/all/metod/:id", add_payment_metodGet);
router.post("/order/create", paymentPost);
router.post("/add/metod/:id", add_payment_metodPost);
module.exports = router;
