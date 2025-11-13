const Artisan = require("../models/artisanModel");

// Récupérer tous les artisans
exports.getAllArtisan = async () => {
  try {
    const artisans = await Artisan.findAll({
      attributes: [
        "id_artisan",
        "nom_artisan",
        "id_specialite",
        "note_artisan",
        "ville_artisan",
        "about_artisan",
        "email_artisan",
        "site_artisan",
        "top_artisan",
      ],
    });
    return artisans;
  } catch (error) {
    throw new Error(
      "Erreur lors de la récupération des artisans : " + error.message
    );
  }
};

//Récupérer un artisan par son identifiant
exports.getArtisanById = async (id) => {
  try {
    const artisan = await Artisan.findByPk(id);
    return artisan;
  } catch (error) {
    throw new Error(
      "Erreur lors de la récupération de l'artisan : " + error.message
    );
  }
};

//modifier un élément d'un artisan
exports.patchArtisan = async (id, data) => {
  try {
    const artisan = await Artisan.findByPk(id);
    if (!artisan) return null;

    await artisan.update(data);
    return artisan;
  } catch (error) {
    throw new Error(
      "Erreur lors de la mise à jour de l'artisan : " + error.message
    );
  }
};

// Supprimer un artisan
exports.deleteArtisan = async (id) => {
  try {
    const artisan = await Artisan.findByPk(id);
    if (!artisan) return null;

    await artisan.destroy();
    return artisan;
  } catch (error) {
    throw new Error(
      "Erreur lors de la suppression de l'artisan : " + error.message
    );
  }
};
