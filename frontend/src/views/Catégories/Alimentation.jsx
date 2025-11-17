import React from "react";
import { NavLink } from "react-router-dom";
import { Helmet } from "react-helmet-async";

function Alimentation() {
  return (
    <>
      <Helmet>
        <title>Catégorie Alimentation</title>
        <meta
          name="description"
          content="Vous retrouverez sur cette page l'ensemble des artisans de la catégorie Alimentation."
        />
      </Helmet>
      {/* Hero section*/}
      <div className="hero-alimentation"></div>
      <div className="text-center pt-3">
        <h1>Artisans du secteur de l'alimentation</h1>
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
        Les artisans spécialisés dans les métiers de bouche
      </h2>
      {/* fiches artisans */}
      <div className="container my-5">
        <div className="row g-4">
          <div className="col-md-6">
            <NavLink
              to="/Alimentation/Dumont"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <div className="card shadow rounded">
                <div className="card-body text-center">
                  <h3 className="card-title">Boucherie Dumont</h3>
                  <p className="card-text fs-4">Boucher</p>
                  <p className="card-text fs-4">📍 Lyon</p>
                  <p className="fs-2">★★★★☆</p>
                </div>
              </div>
            </NavLink>
          </div>

          <div className="col-md-6">
            <NavLink
              to="/Alimentation/auPainChaud"
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

          <div className="col-md-6">
            <NavLink
              to="/Alimentation/Chocolaterie-Labbe"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <div className="card shadow rounded">
                <div className="card-body text-center">
                  <h3 className="card-title">Chocolaterie Labbé</h3>
                  <p className="card-text fs-4">Chocolatier</p>
                  <p className="card-text fs-4">📍 Lyon</p>
                  <p className="fs-2">★★★★☆</p>
                </div>
              </div>
            </NavLink>
          </div>

          <div className="col-md-6">
            <NavLink
              to="/Alimentation/Traiteur-Truchon"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <div className="card shadow rounded">
                <div className="card-body text-center">
                  <h3 className="card-title">Traiteur Truchon</h3>
                  <p className="card-text fs-4">Traiteur</p>
                  <p className="card-text fs-4">📍 Lyon</p>
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

export default Alimentation;
