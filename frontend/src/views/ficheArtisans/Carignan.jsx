import React from "react";
import ContactForm from "../components/contactForm";
import { Helmet } from "react-helmet-async";

function Carignan() {
  return (
    <>
      <Helmet>
        <title>Ernest Carignan - ferronier</title>
        <meta
          name="description"
          content="Ernest Carignan, artiste émérite, vous présente ses dernières créations"
        />
      </Helmet>

      <div className="container pt-5">
        <div className="row">
          {/* Colonne texte */}
          <div className="col-md-6 ps-5 text-center">
            <h1>Ernest Carignan</h1>
            <p className="fs-4">Ferronier</p>
            <p className="fs-4">
              Lorem ipsum dolor sit amet consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <p className="fs-4">📍 Le Puy-en-Velay</p>
            <p className="fs-2">★★★★★</p>
          </div>

          {/* Colonne image */}
          <div className="col-md-6">
            <img
              src="/sculpture.jpg"
              alt="sculture en fer"
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
        <ContactForm idArtisan={11} />
      </div>
    </>
  );
}

export default Carignan;
