import React from "react";
import { NavLink } from "react-router-dom";

function Home() {
  return (
    <>
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
              to="/"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <div className="card shadow rounded">
                <div className="card-body text-center">
                  <h3 className="card-title">Au pain chaud</h3>
                  <p className="card-text fs-4">Boulanger</p>
                  <p className="card-text fs-4">📍 Montélimar</p>
                  <img
                    className="img-fluid w-100"
                    src="/4,8.png"
                    alt="notation du boulanger"
                  />
                </div>
              </div>
            </NavLink>
          </div>

          <div className="col-md-4">
            <NavLink
              to="/"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <div className="card shadow rounded">
                <div className="card-body text-center">
                  <h3 className="card-title">Chocolaterie labbé</h3>
                  <p className="card-text fs-4">Chocolatier</p>
                  <p className="card-text fs-4">📍 Lyon</p>
                  <img
                    className="img-fluid w-100"
                    src="/4,9.png"
                    alt="notation du chocolatier"
                  />
                </div>
              </div>
            </NavLink>
          </div>

          <div className="col-md-4">
            <NavLink
              to="/"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <div className="card shadow rounded">
                <div className="card-body text-center">
                  <h3 className="card-title">Orville Salmons</h3>
                  <p className="card-text fs-4">Chauffagiste</p>
                  <p className="card-text fs-4">📍 Evian</p>
                  <img
                    className="img-fluid w-100"
                    src="/5.png"
                    alt="notation du chauffagiste"
                  />
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
