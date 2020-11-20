import React from "react";
import headshot from "../../images/headshot.png";

export default function Hero(props) {
  return (
    <div
      className={
        props.theme === "light"
          ? "hero wrapper hero-light"
          : "hero wrapper hero-dark"
      }>
      <div className="hero-grid1">
        <h1 className="hero-heading">
          Hi!
          <br />
          I'm <span className="hero-underline">Eddie</span>, a freelance Web
          Developer
          <br />
          located in Los Angeles.
        </h1>
        <div className="hero-subheading">i make websites ;)</div>
        <button className="hero-btn">contact me</button>
      </div>

      <div className="hero-grid2">
        <img src={headshot} alt="" className="hero-headshot" />
      </div>
    </div>
  );
}
