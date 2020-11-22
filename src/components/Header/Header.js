import React, { Component } from "react";
import logo from "../../images/my-logo.svg";
import logoDark from "../../images/my-logo-dark2.svg";
import { motion } from "framer-motion";

const listVariants = {
  animate: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  initial: {
    opacity: 0,
    y: -40,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
    },
  },
};

export default class Header extends Component {
  constructor(props) {
    super(props);
    this.toggleTheme = this.toggleTheme.bind(this);
  }

  toggleTheme() {
    this.props.toggleTheme();
  }

  render() {
    console.log(this.props);
    return (
      <motion.div
        className={
          this.props.theme === "light"
            ? "header wrapper header-light"
            : "header wrapper header-dark"
        }
        variants={listVariants}
        initial="initial"
        animate="animate">
        <motion.div variants={itemVariants} className="header-logo-wrapper">
          <img
            src={this.props.theme === "light" ? logo : logoDark}
            alt="logo"
            className="header-logo"
          />
        </motion.div>

        <ul className="header-nav">
          <motion.li variants={itemVariants} className="header-link">
            projects
          </motion.li>
          <motion.li variants={itemVariants} className="header-link">
            about
          </motion.li>
          <motion.li variants={itemVariants} className="header-link">
            contact
          </motion.li>
          <motion.li
            variants={itemVariants}
            className="header-link"
            onClick={this.toggleTheme}>
            dark mode
          </motion.li>
        </ul>
      </motion.div>
    );
  }
}
