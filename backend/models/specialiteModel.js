const { DataTypes } = require("sequelize");
const db = require("../config/db");

//Définition de la table Specialite
const Specialite = db.define(
  "Specialite",
  {
    id_specialite: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    nom_specialite: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    id_categorie: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    tableName: "Specialite",
    timestamps: false,
  }
);

module.exports = Specialite;
