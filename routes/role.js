const { Router } = require("express");
const {
  roleGet,
  rolePost,
  rolePut,
  roleDelete,
} = require("../controllers/role");
const router = Router();

router.get("/", roleGet);
router.post("/", rolePost);
router.put("/", rolePut);
router.delete("/", roleDelete);
module.exports = router;
