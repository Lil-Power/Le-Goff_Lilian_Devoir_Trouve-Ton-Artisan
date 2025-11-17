import React from "react";
import { Routes, Route } from "react-router-dom";

//Import des components
import NavBar from "./views/components/NavBar";
import Footer from "./views/components/Footer";
//Import des views
import Home from "./views/Home";
import Construction from "./views/Construction";
import NotFound from "./views/NotFound";
import Batiment from "./views/Catégories/Batiment";
import Services from "./views/Catégories/Services";
import Fabrication from "./views/Catégories/Fabrication";
import Alimentation from "./views/Catégories/Alimentation";
import Dumont from "./views/ficheArtisans/Dumont";
import AuPainChaud from "./views/ficheArtisans/AuPainChaud";
import Labbe from "./views/ficheArtisans/Labbe";
import Truchon from "./views/ficheArtisans/Truchon";
import Orville from "./views/ficheArtisans/Orville";
import MBE from "./views/ficheArtisans/MBE";
import Boutot from "./views/ficheArtisans/Boutot";
import Vallis from "./views/ficheArtisans/Vallis";
import Quinn from "./views/ficheArtisans/Quinn";
import Amitee from "./views/ficheArtisans/Amitee";
import Carignan from "./views/ficheArtisans/Carignan";
import Royden from "./views/ficheArtisans/Royden";
import Leala from "./views/ficheArtisans/Leala";
import SupHair from "./views/ficheArtisans/SupHair";
import MondeDesFleurs from "./views/ficheArtisans/MondeDesFleurs";
import Laderoute from "./views/ficheArtisans/Laderoute";
import CMGraphisme from "./views/ficheArtisans/CMGraphisme";

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
          <Route path="/Alimentation" element={<Alimentation />} />
          <Route path="/Alimentation/Dumont" element={<Dumont />} />
          <Route path="/Alimentation/AuPainChaud" element={<AuPainChaud />} />
          <Route path="/Alimentation/Chocolaterie-Labbe" element={<Labbe />} />
          <Route path="/Alimentation/Traiteur-Truchon" element={<Truchon />} />
          <Route path="/Batiment/Orville-Salmons" element={<Orville />} />
          <Route path="/Batiment/Mont-Blanc-Electricite" element={<MBE />} />
          <Route path="/Batiment/Boutot-&-fils" element={<Boutot />} />
          <Route path="/Batiment/Vallis-Bellemare" element={<Vallis />} />
          <Route path="/Fabrication/Claude-Quinn" element={<Quinn />} />
          <Route path="/Fabrication/Amitee-Lecuyer" element={<Amitee />} />
          <Route path="/Fabrication/Ernest-Carignan" element={<Carignan />} />
          <Route path="/Services/Royden-Charbonneau" element={<Royden />} />
          <Route path="/Services/Leala-Dennis" element={<Leala />} />
          <Route path="/Services/Cest-sup-hair" element={<SupHair />} />
          <Route
            path="/Services/Le-monde-des-fleurs"
            element={<MondeDesFleurs />}
          />
          <Route path="/Services/Valerie-Laderoute" element={<Laderoute />} />
          <Route path="/Services/CM-Graphisme" element={<CMGraphisme />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
