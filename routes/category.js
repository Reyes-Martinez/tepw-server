const { Router } = require("express");
const { categoryGet } = require("../controllers/category.js");
const router = Router();

//*Categories
router.get("/all", categoryGet);
module.exports = router;
