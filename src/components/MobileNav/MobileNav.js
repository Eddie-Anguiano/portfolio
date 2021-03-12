import { motion } from "framer-motion";
import logo from "../../images/logo-white.svg";
import { Link } from "react-router-dom";

export default function mobileNav() {
  return (
    <>
      <motion.div
        key="modal"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="MobileNav"></motion.div>
      <motion.div
        key="nav"
        initial={{ y: "-100%" }}
        animate={{ y: 0 }}
        exit={{ y: "-100%" }}
        transition={{ duration: 0.1, stiffness: 100, type: "tween" }}
        className="MobileNav-nav">
        <img className="MobileNav-logo" src={logo} alt="logo" />
        <ul className="MobileNav-list">
          <Link to="/">
            <li className="MobileNav-item">Home</li>
          </Link>
          <Link to="/singlelinklist">
            <li className="MobileNav-item">Algorithm Visualizers</li>
          </Link>
          <Link to="/resume">
            <li className="MobileNav-item">Resume</li>
          </Link>
        </ul>
      </motion.div>
    </>
  );
}
