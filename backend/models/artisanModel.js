const { DataTypes } = require("sequelize");
const db = require("../config/db");

//Définition de la table Artisan

const Artisan = db.define(
  "Artisan",
  {
    id_artisan: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    nom_artisan: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    id_specialite: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    note_artisan: {
      type: DataTypes.FLOAT,
      defaultValue: 0,
    },
    ville_artisan: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    about_artisan: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    email_artisan: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true,
      },
    },
    site_artisan: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    top_artisan: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
  },
  {
    tableName: "Artisan",
    timestamps: false,
  }
);

module.exports = Artisan;
