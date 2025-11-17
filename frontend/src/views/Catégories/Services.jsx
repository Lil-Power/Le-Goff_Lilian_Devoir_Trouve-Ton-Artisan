import React from "react";
import { NavLink } from "react-router-dom";
import { Helmet } from "react-helmet-async";

function Services() {
  return (
    <>
      <Helmet>
        <title>Catégorie Services</title>
        <meta
          name="description"
          content="Vous retrouverez sur cette page l'ensemble des artisans de la catégorie Services."
        />
      </Helmet>

      {/* Hero section*/}
      <div className="hero-service"></div>
      <div className="text-center pt-3">
        <h1>Créateurs de services</h1>
        <p className="mx-5 my-4">
          Lorem ipsum dolor sit amet consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
          veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
          ea commodo consequat. Duis aute irure dolor in reprehenderit in
          voluptate velit esse cillum dolore eu fugiat nulla pariatur.
        </p>
      </div>
      {/* Artisans section */}
      <div className="separator-bar"></div>
      <h2 className="ps-4">
        Les artisans spécialisés dans la création de services
      </h2>
      {/* fiches artisans première ligne*/}
      <div className="container my-5">
        <div className="row g-4">
          <div className="col-md-4">
            <NavLink
              to="/Services/Royden-Charbonneau"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <div className="card shadow rounded">
                <div className="card-body text-center">
                  <h3 className="card-title">Royden Charbonneau</h3>
                  <p className="card-text fs-4">Coiffeur</p>
                  <p className="card-text fs-4">📍 Saint-Priest</p>
                  <p className="fs-2">★★★☆☆</p>
                </div>
              </div>
            </NavLink>
          </div>

          <div className="col-md-4">
            <NavLink
              to="/Services/Leala-Dennis"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <div className="card shadow rounded">
                <div className="card-body text-center">
                  <h3 className="card-title">Leala Dennis</h3>
                  <p className="card-text fs-4">Coiffeur</p>
                  <p className="card-text fs-4">📍 Chambéry</p>
                  <p className="fs-2">★★★☆☆</p>
                </div>
              </div>
            </NavLink>
          </div>

          <div className="col-md-4">
            <NavLink
              to="/Services/Cest-sup-hair"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <div className="card shadow rounded">
                <div className="card-body text-center">
                  <h3 className="card-title">C'est sup'hair</h3>
                  <p className="card-text fs-4">Coiffeur </p>
                  <p className="card-text fs-4">📍 Romans-sur-Isère</p>
                  <p className="fs-2">★★★★☆</p>
                </div>
              </div>
            </NavLink>
          </div>
        </div>
      </div>

      {/* fiches artisans seconde ligne*/}
      <div className="container my-5">
        <div className="row g-4">
          <div className="col-md-4">
            <NavLink
              to="/Services/Le-monde-des-fleurs"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <div className="card shadow rounded">
                <div className="card-body text-center">
                  <h3 className="card-title">Le monde des fleurs</h3>
                  <p className="card-text fs-4">Fleuriste</p>
                  <p className="card-text fs-4">📍 Annonay</p>
                  <p className="fs-2">★★★★☆</p>
                </div>
              </div>
            </NavLink>
          </div>

          <div className="col-md-4">
            <NavLink
              to="/Services/Valerie-Laderoute"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <div className="card shadow rounded">
                <div className="card-body text-center">
                  <h3 className="card-title">Valérie Laderoute</h3>
                  <p className="card-text fs-4">Toilletteur</p>
                  <p className="card-text fs-4">📍 Valence</p>
                  <p className="fs-2">★★★★☆</p>
                </div>
              </div>
            </NavLink>
          </div>

          <div className="col-md-4">
            <NavLink
              to="/Services/CM-Graphisme"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <div className="card shadow rounded">
                <div className="card-body text-center">
                  <h3 className="card-title">CM Graphisme</h3>
                  <p className="card-text fs-4">Webdesign</p>
                  <p className="card-text fs-4">📍 Valence</p>
                  <p className="fs-2">★★★★☆</p>
                </div>
              </div>
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
}

export default Services;
