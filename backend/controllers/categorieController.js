const jwt = require("jsonwebtoken");
const { Categorie } = require("../models");
const ENV = require("../config");
const createError = require("../middlewares/error");
const categorieService = require("../services/categorieService");

exports.getAllCategories = async (req, res) => {
  try {
    const categories = await categorieService.getAllCategories();
    res.json(categories);
  } catch (error) {
    res.status(500).json({
      message: "Erreur serveur",
      error: error.message,
    });
  }
};

exports.getCategorieById = async (req, res) => {
  try {
    const categorie = await categorieService.getCategorieById(req.params.id);
    if (!categorie)
      return res.status(404).json({ message: "Categorie introuvable" });
    res.json(categorie);
  } catch (error) {
    res.status(500).json({ message: "Erreur serveur", error: error.message });
  }
};

exports.updateCategorie = async (req, res) => {
  try {
    const categorie = await categorieService.patchCategorie(
      req.params.id,
      req.body
    );
    if (!categorie)
      return res.status(404).json({ message: "Categorie introuvable" });
    res.json(categorie);
  } catch (error) {
    res.status(500).json({ message: "Erreur serveur", error: error.message });
  }
};

exports.deleteCategorie = async (req, res) => {
  console.log("ID reçu :", req.params.id);
  const categorie = await categorieService.deleteCategorie(req.params.id);
  try {
    if (!categorie)
      return res.status(404).json({ message: "Categorie introuvable" });
    res.json(categorie);
  } catch (error) {
    res.status(500).json({ message: "Erreur serveur", error: error.message });
  }
};
