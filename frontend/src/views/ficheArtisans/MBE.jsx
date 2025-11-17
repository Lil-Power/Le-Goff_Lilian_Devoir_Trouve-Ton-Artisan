import React from "react";
import ContactForm from "../components/contactForm";
import { Helmet } from "react-helmet-async";

function MBE() {
  return (
    <>
      <Helmet>
        <title>Mont Blanc Électricité - électricien</title>
        <meta
          name="description"
          content="Mont Blanc Électricité proposent ses services sur Chamonix, rénovation, mis en place, tout pour vos travaux électriques"
        />
      </Helmet>

      <div className="container pt-5">
        <div className="row">
          {/* Colonne texte */}
          <div className="col-md-6 ps-5 text-center">
            <h1>Mont Blanc Électricité</h1>
            <p className="fs-4">Électricien</p>
            <p className="fs-4">
              Lorem ipsum dolor sit amet consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <p className="fs-4">📍 Chamonix</p>
            <a
              className="text-decoration-none text-black fs-4"
              href="https://mont-blanc-electricite.com"
            >
              🌐 Mont-Blanc-Électricité.com
            </a>
            <p className="fs-2">★★★★☆</p>
          </div>

          {/* Colonne image */}
          <div className="col-md-6">
            <img
              src="/electricien.jpg"
              alt="Électricien au travail"
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
        <ContactForm idArtisan={6} />
      </div>
    </>
  );
}

export default MBE;
