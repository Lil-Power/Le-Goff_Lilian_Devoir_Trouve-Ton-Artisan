const Categorie = require("../models/categorieModel");

// Récupérer toutes les categories
exports.getAllCategories = async () => {
  try {
    const categories = await Categorie.findAll();
    return categories;
  } catch (error) {
    throw new Error(
      "Erreur lors de la récupération des catégories : " + error.message
    );
  }
};

//Récupérer une catégorie par son identifiant
exports.getCategorieById = async (id) => {
  try {
    const categorie = await Categorie.findByPk(id);
    return categorie;
  } catch (error) {
    throw new Error(
      "Erreur lors de la récupération de la categorie : " + error.message
    );
  }
};

//modifier une categorie
exports.patchCategorie = async (id, data) => {
  try {
    const categorie = await Categorie.findByPk(id);
    if (!categorie) return null;

    await categorie.update(data);
    return categorie;
  } catch (error) {
    throw new Error(
      "Erreur lors de la mise à jour de la categorie : " + error.message
    );
  }
};

// Supprimer une categorie
exports.deleteCategorie = async (id) => {
  try {
    const categorie = await Categorie.findByPk(id);
    if (!categorie) return null;

    await categorie.destroy();
    return categorie;
  } catch (error) {
    throw new Error(
      "Erreur lors de la suppression de la categorie : " + error.message
    );
  }
};
