const jwt = require("jsonwebtoken");
const ENV = require("../config");
const createError = require("./error");

const verifieToken = (req, res, next) => {
  //récupération du token à partir des cookies
  const token = req.cookies.access_token;
  // Renvoie une erreur de type "accès refusé"
  if (!token) return next(createError(401, "Acces denied !"));
  //Vérification de la validité du token
  jwt.verify(token, ENV.TOKEN, (err, user) => {
    if (err) return next(createError(403, "Token non valide", err.message));

    req.user = user;

    next();
  });
};

module.exports = verifieToken;
