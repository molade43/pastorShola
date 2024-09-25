import React from "react";
import "./agricprenuer.css";
import Header from "../../components/header/Header";
import ComingSoon from "../../components/coming/ComingSoon";
import Footer from "../../components/footer/Footer";

const Agricprenuer = () => {
  return (
    <div>
      <Header />
      <main className="main">
        <ComingSoon />
      </main>
      <Footer />
    </div>
  );
};
export default Agricprenuer;
