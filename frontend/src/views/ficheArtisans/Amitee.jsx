import React from "react";
import ContactForm from "../components/contactForm";
import { Helmet } from "react-helmet-async";

function Amitee() {
  return (
    <>
      <Helmet>
        <title>Amitee Lécuyer - Couturier</title>
        <meta
          name="description"
          content="Amitee Lécuyer, couturier à Annecy vous propose ses services de réparation, création et bien d'autres."
        />
      </Helmet>

      <div className="container pt-5">
        <div className="row">
          {/* Colonne texte */}
          <div className="col-md-6 ps-5 text-center">
            <h1>Amitee Lécuyer</h1>
            <p className="fs-4">Couturier</p>
            <p className="fs-4">
              Lorem ipsum dolor sit amet consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <p className="fs-4">📍 Annecy</p>
            <a
              className="text-decoration-none text-black fs-4"
              href="https://lecuyer-couture.com"
            >
              🌐 Lecuyer-Couture.com
            </a>
            <p className="fs-2">★★★★☆</p>
          </div>

          {/* Colonne image */}
          <div className="col-md-6">
            <img
              src="/couturier.jpg"
              alt="couturier et sa machine"
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
        <ContactForm idArtisan={10} />
      </div>
    </>
  );
}

export default Amitee;
