import React from "react";
import "./whatIDo.css";

import Header from "../../components/header/Header";
import Home from "../../whatIDoComponents/whatIDohome/Home";
import WhatIDoAbout from "../../whatIDoComponents/whatIDoabout/WhatIDoAbout";
import Footer from "../../components/footer/Footer";
import ScrollUp from "../../components/scrollUp/ScrollUp";

const WhatIDo = () => {
  return (
    <div>
      <Header />
      <main className="main">
        <Home />
        <WhatIDoAbout />
      </main>
      <Footer />
      <ScrollUp />
    </div>
  );
};

export default WhatIDo;
