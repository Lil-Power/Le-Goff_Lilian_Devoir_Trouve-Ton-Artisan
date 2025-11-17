import React from "react";
import { NavLink } from "react-router-dom";
import { Helmet } from "react-helmet-async";

function Home() {
  return (
    <>
      <Helmet>
        <title>Page d'accueil - Trouve ton artisan</title>
        <meta
          name="description"
          content="Vous vous trouvez actuellement sur la page d'accueil du site Trouve ton artisan, de la région Auverge-Rhône-Alpes."
        />
      </Helmet>

      {/* Hero section*/}
      <div className="hero"></div>
      <div className="text-center pt-3">
        <h1>Comment trouver mon artisan ?</h1>
        <p>1. Choisir la catégorie d’artisanat dans le menu</p>
        <p>2. Choisir un artisan</p>
        <p>3. Le contacter via le formulaire de contact</p>
        <p>4. Une réponse sera apportée sous 48h</p>
      </div>
      {/* Artisans section */}
      <div className="separator-bar"></div>
      <h2 className="ps-4">Les artisans du mois</h2>
      {/* fiches artisans */}
      <div className="container my-5">
        <div className="row g-4">
          <div className="col-md-4">
            <NavLink
              to="/Alimentation/AuPainChaud"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <div className="card shadow rounded">
                <div className="card-body text-center">
                  <h3 className="card-title">Au pain chaud</h3>
                  <p className="card-text fs-4">Boulanger</p>
                  <p className="card-text fs-4">📍 Montélimar</p>
                  <p className="fs-2">★★★★☆</p>
                </div>
              </div>
            </NavLink>
          </div>

          <div className="col-md-4">
            <NavLink
              to="/Alimentation/Chocolaterie-Labbe"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <div className="card shadow rounded">
                <div className="card-body text-center">
                  <h3 className="card-title">Chocolaterie labbé</h3>
                  <p className="card-text fs-4">Chocolatier</p>
                  <p className="card-text fs-4">📍 Lyon</p>
                  <p className="fs-2">★★★★☆</p>
                </div>
              </div>
            </NavLink>
          </div>

          <div className="col-md-4">
            <NavLink
              to="/Batiment/Orville-Salmons"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <div className="card shadow rounded">
                <div className="card-body text-center">
                  <h3 className="card-title">Orville Salmons</h3>
                  <p className="card-text fs-4">Chauffagiste</p>
                  <p className="card-text fs-4">📍 Evian</p>
                  <p className="fs-2">★★★★★</p>
                </div>
              </div>
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
