import React from "react";
import Navbar from "./components/Navbar";
import "./index.css";
import Hero from "./components/Hero";
import Info from "./components/Info";
import Newsletter from "./components/Newsletter";
import Cards from "./components/Cards";
import Footer from "./components/Footer";
import OurTeam from "./components/OurTeam";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Info />
      <section id="contactMe">
        <Newsletter />
      </section>
      <Cards />
      <OurTeam />
      <Footer />
    </div>
  );
}

export default App;
