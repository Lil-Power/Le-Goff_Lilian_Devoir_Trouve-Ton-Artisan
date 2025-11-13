const express = require("express");
const router = express.Router();
const artisanController = require("../controllers/artisanController");
const verifieToken = require("../middlewares/admin");
const verifyAdmin = require("../middlewares/auth");

router.get("/", artisanController.getAllArtisans);
router.get("/:id", artisanController.getArtisanById);
router.patch(
  "/:id",
  verifieToken,
  verifyAdmin,
  artisanController.updateArtisan
);
router.delete(
  "/:id",
  verifieToken,
  verifyAdmin,
  artisanController.deleteArtisan
);

module.exports = router;
