const express = require("express");
const router = express.Router();
const categorieController = require("../controllers/categorieController");
const verifieToken = require("../middlewares/admin");
const verifyAdmin = require("../middlewares/auth");

router.get("/", categorieController.getAllCategories);
router.get("/:id", categorieController.getCategorieById);
router.patch(
  "/:id",
  verifieToken,
  verifyAdmin,
  categorieController.updateCategorie
);
router.delete(
  "/:id",
  verifieToken,
  verifyAdmin,
  categorieController.deleteCategorie
);

module.exports = router;
