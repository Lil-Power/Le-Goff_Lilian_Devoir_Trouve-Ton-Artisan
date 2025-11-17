import React from "react";
import ContactForm from "../components/contactForm";
import { Helmet } from "react-helmet-async";

function AuPainChaud() {
  return (
    <>
      <Helmet>
        <title>Au pain chaud - boulangerie</title>
        <meta
          name="description"
          content="La boulangerie Au pain chaud vous propose une farandole de pains et de pâtisseries qui sauront vous râvir."
        />
      </Helmet>

      <div className="container pt-5">
        <div className="row">
          {/* Colonne texte */}
          <div className="col-md-6 ps-5 text-center">
            <h1>Au pain chaud</h1>
            <p className="fs-4">Boulanger</p>
            <p className="fs-4">
              Lorem ipsum dolor sit amet consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>

            <p className="fs-4">📍 Montélimar</p>
            <p className="fs-2">★★★★☆</p>
          </div>

          {/* Colonne image */}
          <div className="col-md-6">
            <img
              src="/baker.jpg"
              alt="Boulanger au travail"
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
        <ContactForm idArtisan={2} />
      </div>
    </>
  );
}

export default AuPainChaud;
