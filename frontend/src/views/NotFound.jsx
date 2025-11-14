import React from "react";
import { NavLink } from "react-router-dom";

function NotFound() {
  return (
    <>
      <div className="text-center pt-5 pb-5">
        <img
          className="w-50"
          src="/erreur.jpg"
          alt="Erreur 404, page non trouvée"
        />{" "}
        <br />
        <NavLink to="/" style={{ textDecoration: "none", color: "inherit" }}>
          <button
            type="submit"
            className="btn btn-outline-primary fs-1 text-black"
          >
            Cliquez moi pour revenir à l’accueil 👀{" "}
          </button>
        </NavLink>
      </div>
    </>
  );
}

export default NotFound;
