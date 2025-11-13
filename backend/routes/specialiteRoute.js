const express = require("express");
const router = express.Router();
const specialiteController = require("../controllers/specialiteController");
const verifieToken = require("../middlewares/admin");
const verifyAdmin = require("../middlewares/auth");

router.get("/", specialiteController.getAllSpecialites);
router.get("/:id", specialiteController.getSpecialiteById);
router.patch(
  "/:id",
  verifieToken,
  verifyAdmin,
  specialiteController.updateSpecialite
);
router.delete(
  "/:id",
  verifieToken,
  verifyAdmin,
  specialiteController.deleteSpecialite
);

module.exports = router;
