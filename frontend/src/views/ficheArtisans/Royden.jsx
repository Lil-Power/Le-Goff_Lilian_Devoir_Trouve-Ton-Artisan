import React from "react";
import ContactForm from "../components/contactForm";
import { Helmet } from "react-helmet-async";

function Royden() {
  return (
    <>
      <Helmet>
        <title>Royden Charbonneau - coiffeur</title>
        <meta
          name="description"
          content="Royden Charbonneau, spécialisé dans les coupes et les barbes hommes, vous accuille à Saint-Priest."
        />
      </Helmet>

      <div className="container pt-5">
        <div className="row">
          {/* Colonne texte */}
          <div className="col-md-6 ps-5 text-center">
            <h1>Royden Charbonneau</h1>
            <p className="fs-4">Coiffeur</p>
            <p className="fs-4">
              Lorem ipsum dolor sit amet consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <p className="fs-4">📍 Saint-Priest</p>
            <p className="fs-2">★★★☆☆</p>
          </div>

          {/* Colonne image */}
          <div className="col-md-6">
            <img
              src="/coiffeur1.jpg"
              alt="Coiffeuse et un enfant"
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
        <ContactForm idArtisan={12} />
      </div>
    </>
  );
}

export default Royden;
