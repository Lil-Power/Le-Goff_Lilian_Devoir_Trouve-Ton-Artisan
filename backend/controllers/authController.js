const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const User = require("../models/userModel");
const ENV = require("../config");
const createError = require("../middlewares/error");

exports.signin = async (req, res, next) => {
  try {
    // Vérifie si l'utilisateur existe
    const user = await User.findOne({ where: { email: req.body.email } });
    if (!user) return next(createError(404, "Utilisateur non trouvé."));

    // Vérifie le mot de passe
    const isPasswordValid = await bcrypt.compare(
      req.body.password,
      user.password
    );
    if (!isPasswordValid)
      return next(createError(400, "Identifiants incorrects."));

    // Génération d'un token d'authentification
    const token = jwt.sign({ id: user.id }, ENV.TOKEN, { expiresIn: "96h" });

    // Exclut le mot de passe de la réponse
    const { password, ...userData } = user.dataValues;

    // cookie
    res
      .cookie("access_token", token, {
        httpOnly: true,
        secure: true,
        sameSite: "strict",
        maxAge: 24 * 60 * 60 * 1000, // 24h en millisecindes
      })
      .status(200)
      .json({
        message: "Connexion réussie",
        user: userData,
      });
  } catch (error) {
    next(createError(500, "Erreur lors de la connexion : " + error.message));
  }
};
