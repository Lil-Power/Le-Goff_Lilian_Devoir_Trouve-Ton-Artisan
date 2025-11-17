import React from "react";
import ContactForm from "../components/contactForm";
import { Helmet } from "react-helmet-async";

function Truchon() {
  return (
    <>
      <Helmet>
        <title>Traiteur Truchon - traiteur</title>
        <meta
          name="description"
          content="Le Traiteur Truchon propose une cuisine maison pour tous vos événements. Plats raffinés, produits frais et prestations personnalisées."
        />
      </Helmet>

      <div className="container pt-5">
        <div className="row">
          {/* Colonne texte */}
          <div className="col-md-6 ps-5 text-center">
            <h1>Traiteur Truchon</h1>
            <p className="fs-4">Traiteur</p>
            <p className="fs-4">
              Lorem ipsum dolor sit amet consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>

            <p className="fs-4">📍 Lyon</p>
            <a
              className="text-decoration-none text-black fs-4"
              href="https://truchon-traiteur.fr"
            >
              🌐 Truchon-Traiteur.fr
            </a>
            <p className="fs-2">★★★★☆</p>
          </div>

          {/* Colonne image */}
          <div className="col-md-6">
            <img
              src="/traiteur.jpg"
              alt="Service traiteur"
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
        <ContactForm idArtisan={4} />
      </div>
    </>
  );
}

export default Truchon;
