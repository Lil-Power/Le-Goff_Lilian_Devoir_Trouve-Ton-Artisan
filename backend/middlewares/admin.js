const createError = require("./error");

const verifyAdmin = (req, res, next) => {
  // req.user est défini par verifieToken
  if (!req.user) return next(createError(401, "Utilisateur non authentifié"));

  if (req.user.role !== "admin") {
    return next(createError(403, "Accès refusé : Admin uniquement"));
  }

  next();
};

module.exports = verifyAdmin;
