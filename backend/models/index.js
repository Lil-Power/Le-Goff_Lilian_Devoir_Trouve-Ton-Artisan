const db = require("../config/db");

//Importation des modèles

const Artisan = require("./artisanModel");
const Categorie = require("./categorieModel");
const Contact = require("./contactModel");
const Specialite = require("./specialiteModel");

// Définition des relations entre les modèles

Specialite.belongsTo(Categorie, { foreignKey: "id_categorie" });
Categorie.hasMany(Specialite, { foreignKey: "id_categorie" });
Artisan.belongsTo(Specialite, { foreignKey: "id_specialite" });
Specialite.hasMany(Artisan, { foreignKey: "id_specialite" });
Contact.belongsTo(Artisan, { foreignKey: "id_artisan" });
Artisan.hasMany(Contact, { foreignKey: "id_artisan" });

// Export des modèles

module.exports = {
  db,
  Artisan,
  Categorie,
  Specialite,
  Contact,
};
