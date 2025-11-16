import React from "react";
import { NavLink } from "react-router-dom";

function Batiment() {
  return (
    <>
      {/* Hero section*/}
      <div className="hero-bat"></div>
      <div className="text-center pt-3">
        <h1>Artisans du Bâtiment</h1>
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
      <h2 className="ps-4">Les artisans du secteur du Bâtiment</h2>
      {/* fiches artisans */}
      <div className="container my-5">
        <div className="row g-4">
          <div className="col-md-6">
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

          <div className="col-md-6">
            <NavLink
              to="/Batiment/Mont-Blanc-Electricite"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <div className="card shadow rounded">
                <div className="card-body text-center">
                  <h3 className="card-title">Mont Blanc Électricité</h3>
                  <p className="card-text fs-4">Électricien</p>
                  <p className="card-text fs-4">📍 Chamonix</p>
                  <p className="fs-2">★★★★☆</p>
                </div>
              </div>
            </NavLink>
          </div>

          <div className="col-md-6">
            <NavLink
              to="/Batiment/Boutot-&-fils"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <div className="card shadow rounded">
                <div className="card-body text-center">
                  <h3 className="card-title">Bouto & fils</h3>
                  <p className="card-text fs-4">Menuisier</p>
                  <p className="card-text fs-4">📍 Bourg-en-bresse</p>
                  <p className="fs-2">★★★★☆</p>
                </div>
              </div>
            </NavLink>
          </div>

          <div className="col-md-6">
            <NavLink
              to="/Batiment/Vallis-Bellemare"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <div className="card shadow rounded">
                <div className="card-body text-center">
                  <h3 className="card-title">Vallis Bellemare</h3>
                  <p className="card-text fs-4">Plombier</p>
                  <p className="card-text fs-4">📍 Vienne</p>
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

export default Batiment;
