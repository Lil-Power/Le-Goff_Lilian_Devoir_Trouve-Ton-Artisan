const nodemailer = require("nodemailer");
const contactService = require("../services/contactService");
const { Artisan } = require("../models");

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
    // Enregistrement de la demande dans la BDD
    const savedContact = await contactService.createContact(req.body);

    // Récupération de l'artisan correspondant
    const artisan = await Artisan.findByPk(req.body.id_artisan);

    if (!artisan) {
      return res.status(404).json({ message: "Artisan introuvable" });
    }

    // Configuration de Nodemailer
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: process.env.SMTP_PORT,
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    // Construction de l'e-mail
    const mailOptions = {
      from: `"Trouve Ton Artisan" <${process.env.SMTP_USER}>`,
      to: artisan.email_artisan,
      subject: `Nouvelle demande de contact – ${req.body.nom_client}`,
      text: `
        Vous avez reçu un nouveau message depuis votre fiche artisan.

        Nom : ${req.body.nom_client}
        Email : ${req.body.email_client}
        Sujet : ${req.body.sujet}

        Message :
        ${req.body.message}

        — Trouve Ton Artisan
      `,
    };

    // Envoi du mail
    await transporter.sendMail(mailOptions);

    // Réponse au frontend
    res.status(201).json({
      message: "Message envoyé à l'artisan",
      contact: savedContact,
    });
  } catch (error) {
    console.error("Erreur envoi email :", error);
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
