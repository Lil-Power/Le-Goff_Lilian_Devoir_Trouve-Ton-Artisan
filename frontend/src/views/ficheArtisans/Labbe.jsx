import React from "react";
import ContactForm from "../components/contactForm";
import { Helmet } from "react-helmet-async";

function Labbe() {
  return (
    <>
      <Helmet>
        <title>Chocolaterie Labbé - chocolatier</title>
        <meta
          name="description"
          content="La Chocolaterie Labbé, élue meilleure chocolaterie de Lyon en 2025, vous présente ses créations chocolatées."
        />
      </Helmet>

      <div className="container pt-5">
        <div className="row">
          {/* Colonne texte */}
          <div className="col-md-6 ps-5 text-center">
            <h1>Chocolaterie Labbé</h1>
            <p className="fs-4">Chocolatier</p>
            <p className="fs-4">
              Lorem ipsum dolor sit amet consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>

            <p className="fs-4">📍 Lyon</p>
            <a
              className="text-decoration-none text-black fs-4"
              href="https://chocolaterie-labbe.fr"
            >
              🌐 Chocolatierie-Labbé.fr
            </a>
            <p className="fs-2">★★★★☆</p>
          </div>

          {/* Colonne image */}
          <div className="col-md-6">
            <img
              src="/chocolatier.jpg"
              alt="Chocolatier au travail"
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
        <ContactForm idArtisan={3} />
      </div>
    </>
  );
}

export default Labbe;
