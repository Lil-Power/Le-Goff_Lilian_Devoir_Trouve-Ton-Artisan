import React from "react";
import ContactForm from "../components/contactForm";
import { Helmet } from "react-helmet-async";

function Laderoute() {
  return (
    <>
      <Helmet>
        <title>Valérie Laderoute - toiletteur</title>
        <meta
          name="description"
          content="Valérie Laderoute s'occupe avec amour de vos petits compagnons à poils sur Valence."
        />
      </Helmet>

      <div className="container pt-5">
        <div className="row">
          {/* Colonne texte */}
          <div className="col-md-6 ps-5 text-center">
            <h1>Valérie Laderoute</h1>
            <p className="fs-4">Toilleteur</p>
            <p className="fs-4">
              Lorem ipsum dolor sit amet consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <p className="fs-4">📍 Valence</p>
            <p className="fs-2">★★★★☆</p>
          </div>

          {/* Colonne image */}
          <div className="col-md-6">
            <img
              src="/toilleteur.jpg"
              alt="chien chez le toiletteur"
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
        <ContactForm idArtisan={16} />
      </div>
    </>
  );
}

export default Laderoute;
