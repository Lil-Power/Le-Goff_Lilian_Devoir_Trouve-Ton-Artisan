const contactService = require("../services/contactService");

exports.getAllContacts = async (req, res) => {
  try {
    const contacts = await contactService.getAllContacts();
    res.json(contacts);
  } catch (error) {
    res.status(500).json({ message: "Erreur serveur", error: error.message });
  }
};

exports.getContactById = async (req, res) => {
  try {
    const contact = await contactService.getContactById(req.params.id);
    if (!contact)
      return res.status(404).json({ message: "Contact introuvable" });
    res.json(contact);
  } catch (error) {
    res.status(500).json({ message: "Erreur serveur", error: error.message });
  }
};

exports.createContact = async (req, res) => {
  try {
    const contact = await contactService.createContact(req.body);
    res.status(201).json(contact);
  } catch (error) {
    res.status(500).json({ message: "Erreur serveur", error: error.message });
  }
};

exports.updateContact = async (req, res) => {
  try {
    const contact = await contactService.updateContact(req.params.id, req.body);
    if (!contact)
      return res.status(404).json({ message: "Contact introuvable" });
    res.json(contact);
  } catch (error) {
    res.status(500).json({ message: "Erreur serveur", error: error.message });
  }
};

exports.deleteContact = async (req, res) => {
  try {
    const contact = await contactService.deleteContact(req.params.id);
    if (!contact)
      return res.status(404).json({ message: "Contact introuvable" });
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ message: "Erreur serveur", error: error.message });
  }
};
