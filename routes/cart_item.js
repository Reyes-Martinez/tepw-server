const { Router } = require("express");
const { validateJWT } = require("../middleware/validar-jwt");
const { cart_itemGet, cart_itemPost } = require("../controllers/cart_item");

const router = Router();

router.post("/add", validateJWT, cart_itemPost);
router.get("/:id", validateJWT, cart_itemGet);
//router.delete("/singup", userPost);
// router.put("/:id", userPut);
module.exports = router;
