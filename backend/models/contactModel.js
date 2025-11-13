const { DataTypes } = require("sequelize");
const db = require("../config/db");

//Définition de la table Contact

const Contact = db.define(
  "Contact",
  {
    id_contact: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    id_artisan: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    nom_client: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email_client: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true,
      },
    },
    sujet: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    message: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
  },
  {
    tableName: "Contact",
    timestamps: false,
  }
);

module.exports = Contact;
