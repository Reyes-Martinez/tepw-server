const { Router } = require("express");
const { validateJWT } = require("../middleware/validar-jwt");
const {
  userGet,
  userPost,
  userPut,
  userGetById,
  p,
  //userDelete,
} = require("../controllers/user");

const {
  addressGet,
  addressPut,
  addressPost,
} = require("../controllers/address");

const router = Router();

//*usuario
router.get("/", validateJWT, userGet);
router.get("/:id", userGetById);
router.post("/singup", userPost);
router.put("/:id", userPut);
//router.delete("/", userDelete);

//*address
router.get("/address/:user_id", addressGet);
router.post("/address/:user_id", addressPost);
router.put("/address/:id", addressPut);

module.exports = router;
