const jwt = require("jsonwebtoken");
const { Categorie } = require("../models");
const ENV = require("../config");
const createError = require("../middlewares/error");
const specialiteService = require("../services/specialiteService");

exports.getAllSpecialites = async (req, res) => {
  try {
    const specialites = await specialiteService.getAllSpecialites();
    res.json(specialites);
  } catch (error) {
    res.status(500).json({
      message: "Erreur serveur",
      error: error.message,
    });
  }
};

exports.getSpecialiteById = async (req, res) => {
  try {
    const specialite = await specialiteService.getSpecialiteById(req.params.id);
    if (!specialite)
      return res.status(404).json({ message: "Specialite introuvable" });
    res.json(specialite);
  } catch (error) {
    res.status(500).json({ message: "Erreur serveur", error: error.message });
  }
};

exports.updateSpecialite = async (req, res) => {
  try {
    const specialite = await specialiteService.patchSpecialite(
      req.params.id,
      req.body
    );
    if (!specialite)
      return res.status(404).json({ message: "Specialite introuvable" });
    res.json(specialite);
  } catch (error) {
    res.status(500).json({ message: "Erreur serveur", error: error.message });
  }
};

exports.deleteSpecialite = async (req, res) => {
  console.log("ID reçu :", req.params.id);
  const specialite = await specialiteService.deleteSpecialite(req.params.id);
  try {
    if (!specialite)
      return res.status(404).json({ message: "Specialite introuvable" });
    res.json(specialite);
  } catch (error) {
    res.status(500).json({ message: "Erreur serveur", error: error.message });
  }
};
