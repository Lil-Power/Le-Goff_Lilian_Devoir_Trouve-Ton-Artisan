const express = require("express");
const ENV = require("./backend/config");
const { db } = require("./backend/models");
const cookieParser = require("cookie-parser");
const cors = require("cors");

const app = express();

// importation des routes
const artisanRouter = require("./backend/routes/artisanRoute");
const categorieRouter = require("./backend/routes/categorieRoute");
const specialiteRouter = require("./backend/routes/specialiteRoute");
const contactRouter = require("./backend/routes/contactRoute");
const authRouter = require("./backend/routes/authRoute");

// port
const PORT = ENV.PORT || 8080;

// middleware
app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: "http://localhost:5173",
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);

// prefix
app.use("/api/artisan", artisanRouter);
app.use("/api/categorie", categorieRouter);
app.use("/api/specialite", specialiteRouter);
app.use("/api/contact", contactRouter);
app.use("/api/signin", authRouter);

//Middleware de gestion d'erreur
app.use((err, req, res, next) => {
  const status = err.status || 500;
  const message = err.message || "une erreur est survenue.";
  const details = err.details || null;

  res.status(status).json({
    error: {
      status,
      message,
      details,
    },
  });
});

// serveur
const startServer = async () => {
  try {
    await db.sync({ force: false });
    console.log("Database synced succesfully.");

    app.listen(PORT, () => {
      console.log(`server run on http://localhost:${PORT}`);
    });
  } catch (error) {
    console.log(`Error syncing database : `, error.message);
  }
};

startServer();
const express = require("express");
const ENV = require("./backend/config");
const { db } = require("./backend/models");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const path = require("path");

const app = express();

// importation des routes
const artisanRouter = require("./backend/routes/artisanRoute");
const categorieRouter = require("./backend/routes/categorieRoute");
const specialiteRouter = require("./backend/routes/specialiteRoute");
const contactRouter = require("./backend/routes/contactRoute");
const authRouter = require("./backend/routes/authRoute");

// PORT fourni par Render ou fallback local
const PORT = process.env.PORT || ENV.PORT || 8080;

// middleware
app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: "http://localhost:5173",
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);

// prefix
app.use("/api/artisan", artisanRouter);
app.use("/api/categorie", categorieRouter);
app.use("/api/specialite", specialiteRouter);
app.use("/api/contact", contactRouter);
app.use("/api/signin", authRouter);

// Middleware de gestion d'erreur
app.use((err, req, res, next) => {
  const status = err.status || 500;
  const message = err.message || "Une erreur est survenue.";
  const details = err.details || null;

  res.status(status).json({
    error: {
      status,
      message,
      details,
    },
  });
});

// Servir le frontend React build
const frontendPath = path.join(__dirname, "../frontend/dist");
app.use(express.static(frontendPath));

app.get("*", (req, res) => {
  res.sendFile(path.join(frontendPath, "index.html"));
});

// Démarrage serveur + synchronisation DB
const startServer = async () => {
  try {
    await db.sync({ force: false });
    console.log("Database synced successfully.");

    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  } catch (error) {
    console.error("Error syncing database: ", error.message);
  }
};

startServer();
