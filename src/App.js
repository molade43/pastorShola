import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Homepage from "./pages/homepage/Homepage";
import AboutMe from "./pages/aboutMe/AboutMe";
// import Agricprenuer from "./pages/agricprenuer/Agricprenuer";
import WhatIDo from "./pages/whatIDo/WhatIDo";
import TheMan from "./pages/theMan/TheMan";
import Ministry from "./pages/ministry/Ministry";
import Agricprenuer from "./pages/agricprenuer/Agricprenuer";
import Contact from "./pages/contact/Contact";
import Blog from "./pages/blog/Blog";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<Homepage />} />
        <Route path="/about-me" exact element={<AboutMe />} />
        <Route path="/what-i-do" exact element={<WhatIDo />} />
        <Route path="/agricprenuer" exact element={<Agricprenuer />} />
        <Route path="/the_Man" exact element={<TheMan />} />
        <Route path="/contact" exact element={<Contact />} />
        <Route path="/ministry" exact element={<Ministry />} />
        <Route path="/blog" exact element={<Blog />} />
      </Routes>
    </Router>
  );
}

export default App;
