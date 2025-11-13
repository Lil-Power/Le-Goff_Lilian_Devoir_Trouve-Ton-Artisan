const { DataTypes } = require("sequelize");
const db = require("../config/db");

//Définition de la table Categorie

const Categorie = db.define(
  "Categorie",
  {
    id_categorie: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    nom_categorie: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    tableName: "Categorie",
    timestamps: false,
  }
);

module.exports = Categorie;
