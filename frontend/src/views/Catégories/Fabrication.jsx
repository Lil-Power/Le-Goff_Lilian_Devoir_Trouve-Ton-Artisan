import React from "react";
import { NavLink } from "react-router-dom";

function Fabrication() {
  return (
    <>
      {/* Hero section*/}
      <div className="hero-fabrication"></div>
      <div className="text-center pt-3">
        <h1>Artisans fabricans</h1>
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
      <h2 className="ps-4">Les artisans spécialisés dans la fabrication</h2>
      {/* fiches artisans */}
      <div className="container my-5">
        <div className="row g-4">
          <div className="col-md-4">
            <NavLink
              to="/Fabrication/Claude-Quinn"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <div className="card shadow rounded">
                <div className="card-body text-center">
                  <h3 className="card-title">Claude Quinn</h3>
                  <p className="card-text fs-4">Bijoutier</p>
                  <p className="card-text fs-4">📍 Aix-les-bains</p>
                  <p className="fs-2">★★★★☆</p>
                </div>
              </div>
            </NavLink>
          </div>

          <div className="col-md-4">
            <NavLink
              to="/Fabrication/Amitee-Lecuyer"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <div className="card shadow rounded">
                <div className="card-body text-center">
                  <h3 className="card-title">Amitee Lécuyer</h3>
                  <p className="card-text fs-4">Couturier</p>
                  <p className="card-text fs-4">📍 Annecy</p>
                  <p className="fs-2">★★★★☆</p>
                </div>
              </div>
            </NavLink>
          </div>

          <div className="col-md-4">
            <NavLink
              to="/Fabrication/Ernest-Carignan"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <div className="card shadow rounded">
                <div className="card-body text-center">
                  <h3 className="card-title">Ernest Carignan</h3>
                  <p className="card-text fs-4">Ferronier</p>
                  <p className="card-text fs-4">📍 Le Puy-en-Velay</p>
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

export default Fabrication;
