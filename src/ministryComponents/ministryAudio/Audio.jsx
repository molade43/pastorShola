import React from "react";
import Frontend from "./Frontend";
// import Backend from "./Backend";
import "./audio.css";

const Audio = () => {
  return (
    <section className="audio section" id="audio">
      <h2 className="section__title">Audio</h2>
      <span className="section__subtitle">
        Listen to life changing Audio Messages
      </span>

      <div className="audio__container container grid">
        <Frontend />
        {/* <Backend /> */}
      </div>
    </section>
  );
};

export default Audio;
