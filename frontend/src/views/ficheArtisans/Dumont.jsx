import React from "react";
import { NavLink } from "react-router-dom";

function Dumont() {
  return (
    <>
      <div className="container pt-5">
        <div className="row">
          {/* Colonne texte */}
          <div className="col-md-6 ps-5 text-center">
            <h1>Boucherie Dumont</h1>
            <p className="fs-4">
              Lorem ipsum dolor sit amet consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <p className="fs-4">Boulanger</p>
            <p className="fs-4">📍 Montélimar</p>
            <p className="fs-2">★★★★☆</p>
          </div>

          {/* Colonne image */}
          <div className="col-md-6">
            <img
              src="/boucher.jpg"
              alt="Boucher au travail"
              className="img-fluid"
            />
          </div>
        </div>
      </div>

      {/* formulaire de contact */}
      <div className="separator-bar"></div>
      <h2 className="ps-4 text-center">Prendre contact avec cet artisan</h2>
    </>
  );
}

export default Dumont;
