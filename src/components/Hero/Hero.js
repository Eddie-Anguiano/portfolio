import React from "react";
import headshot from "../../images/headshot.png";
import { motion } from "framer-motion";

const ctaVariant = {
  animate: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const textVariant = {
  initial: {
    opacity: 0,
    x: 50,
  },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.3,
    },
  },
};

export default function Hero(props) {
  return (
    <main className="wrapper hero-outer">
      <div
        className={
          props.theme === "light" ? "hero hero-light" : "hero hero-dark"
        }>
        <motion.div
          className="hero-grid1"
          variants={ctaVariant}
          animate={"animate"}
          initial={"initial"}>
          <motion.h1 className="hero-heading" variants={textVariant}>
            Hi!
            <br />
            I'm <span className="hero-underline">Eddie</span>, a freelance Web
            Developer
            <br />
            located in Los Angeles.
          </motion.h1>
          <motion.div className="hero-subheading" variants={textVariant}>
            (I make websites)
          </motion.div>
          <motion.button variants={textVariant} className="hero-btn">
            Contact Me
          </motion.button>
        </motion.div>

        <div className="hero-grid2">
          <motion.img
            initial={{ opacity: 0, x: -30, y: 85 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{ duration: 0.6 }}
            src={headshot}
            alt=""
            className="hero-headshot"
          />
        </div>
      </div>
    </main>
  );
}
