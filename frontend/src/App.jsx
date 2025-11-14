import React from "react";
import NavBar from "./components/NavBar";
import { Routes, Route } from "react-router-dom";
import Home from "./views/Home";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
