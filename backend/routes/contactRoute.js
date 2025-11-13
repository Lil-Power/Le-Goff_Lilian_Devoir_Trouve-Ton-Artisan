const express = require("express");
const router = express.Router();
const contactController = require("../controllers/contactController");
const verifieToken = require("../middlewares/admin");
const verifyAdmin = require("../middlewares/auth");

router.get("/", verifieToken, verifyAdmin, contactController.getAllContacts);
router.get("/:id", verifieToken, verifyAdmin, contactController.getContactById);
router.post("/", contactController.createContact);
router.patch(
  "/:id",
  verifieToken,
  verifyAdmin,
  contactController.updateContact
);
router.delete(
  "/:id",
  verifieToken,
  verifyAdmin,
  contactController.deleteContact
);

module.exports = router;
