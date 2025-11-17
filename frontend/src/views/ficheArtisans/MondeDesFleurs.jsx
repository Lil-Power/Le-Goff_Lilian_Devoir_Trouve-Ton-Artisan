import React from "react";
import ContactForm from "../components/contactForm";
import { Helmet } from "react-helmet-async";

function MondeDesFleurs() {
  return (
    <>
      <Helmet>
        <title>Le Monde des fleurs - fleuriste</title>
        <meta
          name="description"
          content="Le Monde des Fleurs, fleuriste à Annonay. Créations florales, bouquets sur mesure et compositions uniques."
        />
      </Helmet>

      <div className="container pt-5">
        <div className="row">
          {/* Colonne texte */}
          <div className="col-md-6 ps-5 text-center">
            <h1>Le monde des fleurs</h1>
            <p className="fs-4">Fleuriste</p>
            <p className="fs-4">
              Lorem ipsum dolor sit amet consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <p className="fs-4">📍 Annonay</p>
            <a
              className="text-decoration-none text-black fs-4"
              href="https://le-monde-des-fleurs-annonay.fr"
            >
              🌐 le-monde-des-fleurs-annonay.fr
            </a>
            <p className="fs-2">★★★★☆</p>
          </div>

          {/* Colonne image */}
          <div className="col-md-6">
            <img
              src="/fleuriste2.jpeg"
              alt="Préparation de fleurs"
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
        <ContactForm idArtisan={15} />
      </div>
    </>
  );
}

export default MondeDesFleurs;
