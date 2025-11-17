import React from "react";
import ContactForm from "../components/contactForm";

function Vallis() {
  return (
    <>
      <div className="container pt-5">
        <div className="row">
          {/* Colonne texte */}
          <div className="col-md-6 ps-5 text-center">
            <h1>Vallis Bellemare</h1>
            <p className="fs-4">Plombier</p>
            <p className="fs-4">
              Lorem ipsum dolor sit amet consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <p className="fs-4">📍 Vienne</p>
            <a
              className="text-decoration-none text-black fs-4"
              href="https://plomberie-bellemare.com"
            >
              🌐 Plomberie-Bellemare.com
            </a>
            <p className="fs-2">★★★★☆</p>
          </div>

          {/* Colonne image */}
          <div className="col-md-6">
            <img
              src="/plombier.jpg"
              alt="Plombier sous un évier"
              className="img-fluid"
            />
          </div>
        </div>
      </div>

      {/* Formulaire de contact */}
      <div className="mb-5">
        <div className="separator-bar mt-5 mb-3"></div>
        <h2 className="ps-4 text-center mb-4">
          Prendre contact avec cet artisan
        </h2>
        <ContactForm idArtisan={8} />
      </div>
    </>
  );
}

export default Vallis;
