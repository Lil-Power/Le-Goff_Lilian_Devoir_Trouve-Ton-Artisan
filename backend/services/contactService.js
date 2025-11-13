const Contact = require("../models/contactModel");

// Récupérer tous les contacts
exports.getAllContacts = async () => {
  try {
    return await Contact.findAll();
  } catch (error) {
    throw new Error(
      "Erreur lors de la récupération des contacts : " + error.message
    );
  }
};

// Récupérer un contact par ID
exports.getContactById = async (id) => {
  try {
    return await Contact.findByPk(id);
  } catch (error) {
    throw new Error(
      "Erreur lors de la récupération du contact : " + error.message
    );
  }
};

// Créer un nouveau contact
exports.createContact = async (data) => {
  try {
    return await Contact.create(data);
  } catch (error) {
    throw new Error("Erreur lors de la création du contact : " + error.message);
  }
};

// Mettre à jour un contact
exports.updateContact = async (id, data) => {
  try {
    const contact = await Contact.findByPk(id);
    if (!contact) return null;
    await contact.update(data);
    return contact;
  } catch (error) {
    throw new Error(
      "Erreur lors de la mise à jour du contact : " + error.message
    );
  }
};

// Supprimer un contact
exports.deleteContact = async (id) => {
  try {
    const contact = await Contact.findByPk(id);
    if (!contact) return null;
    await contact.destroy();
    return contact;
  } catch (error) {
    throw new Error(
      "Erreur lors de la suppression du contact : " + error.message
    );
  }
};
