import React from "react";
import headshot from "../../images/hero-headshot.png";
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
    x: 60,
  },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.4,
    },
  },
};

export default function Hero(props) {
  return (
    <main className="wrapper hero-outer">
      <div className="hero">
        <motion.div
          className="hero-grid1"
          variants={ctaVariant}
          animate={"animate"}
          initial={"initial"}>
          <motion.h1 className="hero-heading" variants={textVariant}>
            Hi!
            <br />
            I'm <span className="hero-underline">Eddie</span>, a Front-End Web
            Developer
            <br />
            located in Los Angeles.
          </motion.h1>
          <motion.div className="hero-subheading" variants={textVariant}>
            (I make websites)
          </motion.div>
          <motion.button
            variants={textVariant}
            className="hero-btn"
            whileHover={{ scale: 1.08 }}>
            Contact Me
          </motion.button>
        </motion.div>

        <div className="hero-grid2">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="hero-background"></motion.div>
          <motion.img
            initial={{ opacity: 0, x: -80, y: 130 }}
            animate={{ opacity: 1, x: -0, y: 95 }}
            transition={{ duration: 0.6 }}
            src={headshot}
            alt="headshot"
            className="hero-headshot"
          />
        </div>
      </div>
    </main>
  );
}
