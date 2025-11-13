const Specialite = require("../models/specialiteModel");

// Récupérer toutes les spécialités
exports.getAllSpecialites = async () => {
  try {
    const specialites = await Specialite.findAll();
    return specialites;
  } catch (error) {
    throw new Error(
      "Erreur lors de la récupération des spécialités : " + error.message
    );
  }
};

//Récupérer une spécialité par son identifiant
exports.getSpecialiteById = async (id) => {
  try {
    const specialite = await Specialite.findByPk(id);
    return specialite;
  } catch (error) {
    throw new Error(
      "Erreur lors de la récupération de la specialité : " + error.message
    );
  }
};

//modifier une spécialité
exports.patchSpecialite = async (id, data) => {
  try {
    const specialite = await Specialite.findByPk(id);
    if (!specialite) return null;

    await specialite.update(data);
    return specialite;
  } catch (error) {
    throw new Error(
      "Erreur lors de la mise à jour de la spécialité : " + error.message
    );
  }
};

// Supprimer une spécialité
exports.deleteSpecialite = async (id) => {
  try {
    const specialite = await Specialite.findByPk(id);
    if (!specialite) return null;

    await specialite.destroy();
    return specialite;
  } catch (error) {
    throw new Error(
      "Erreur lors de la suppression de la spécialité : " + error.message
    );
  }
};
