import React from "react";
import "./blog.css";
import Header from "../../components/header/Header";
import ComingSoon from "../../components/coming/ComingSoon";
import Footer from "../../components/footer/Footer";
import ScrollUp from "../../components/scrollUp/ScrollUp";

const Blog = () => {
  return (
    <div>
      <Header />
      <main className="main">
        <ComingSoon />
      </main>
      <Footer />
      <ScrollUp />
    </div>
  );
};

export default Blog;
