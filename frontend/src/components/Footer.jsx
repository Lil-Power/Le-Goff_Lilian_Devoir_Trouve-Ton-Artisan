import React from "react";
import { NavLink } from "react-router-dom";

function Footer() {
  return (
    <>
      <footer className="text-center pt-4">
        <div className="container px-3">
          <NavLink
            className="linkFooter text-white fw-bold mx-5"
            to="/Construction"
          >
            Mentions légales
          </NavLink>

          <NavLink
            className="linkFooter text-white fw-bold mx-5"
            to="/Construction"
          >
            Données personnelles
          </NavLink>

          <NavLink
            className="linkFooter text-white fw-bold mx-5"
            to="/Construction"
          >
            Accessibilité
          </NavLink>

          <NavLink
            className="linkFooter text-white fw-bold mx-5"
            to="/Construction"
          >
            Cookies
          </NavLink>
        </div>
        <div className="text-center text-white mt-4">
          <h3>Antenne de Lyon</h3>
          <address className="small-spacing">
            <p>101 cours Charlemagne</p>
            <p>CS 20033</p>
            <p>69269 LYON CEDEX 02</p>
            <p>France</p>
            <a className="no-underline" href="tel:+33 (0)4 26 73 40 00">
              33 (0)4 26 73 40 00
            </a>
          </address>
        </div>
      </footer>
    </>
  );
}

export default Footer;
