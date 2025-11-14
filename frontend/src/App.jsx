import React from "react";
import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Home from "./views/Home";
import Construction from "./views/Construction";
import NotFound from "./views/NotFound";
import Batiment from "./views/Catégories/Batiment";
import Services from "./views/Catégories/Services";
import Fabrication from "./views/Catégories/Fabrication";

function App() {
  return (
    <>
      <NavBar />
      <div className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Construction" element={<Construction />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/Batiment" element={<Batiment />} />
          <Route path="/Services" element={<Services />} />
          <Route path="/Fabrication" element={<Fabrication />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
