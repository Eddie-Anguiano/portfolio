import { useEffect, useState } from "react";
import logoBlack from "../../images/logo-black.svg";
import logoWhite from "../../images/logo-white.svg";
import MobileNav from "../MobileNav/MobileNav";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";

// Hamburger Variant

const hamburgerTop = {
  closed: {
    backgroundColor: "#1f1f1f",
    rotate: 0,
    y: 0,
  },
  open: {
    backgroundColor: "#f5f5f5",
    rotate: 135,
    y: 11,
    transition: {
      ease: "easeIn",
    },
  },
};

const hamburgerTopDark = {
  closed: {
    backgroundColor: "#f5f5f5",
    rotate: 0,
    y: 0,
  },
  open: {
    backgroundColor: "#f5f5f5",
    rotate: 135,
    y: 11,
    transition: {
      ease: "easeIn",
    },
  },
};

const hamburgerMiddle = {
  closed: {
    x: 0,
  },
  open: {
    x: "100%",
    transition: {
      ease: "easeIn",
    },
  },
};

const hamburgerBottom = {
  closed: {
    backgroundColor: "#1f1f1f",
    rotate: 0,
    y: 0,
  },
  open: {
    backgroundColor: "#f5f5f5",
    rotate: -135,
    y: -12,
    transition: {
      ease: "easeIn",
    },
  },
};

const hamburgerBottomDark = {
  closed: {
    backgroundColor: "#f5f5f5",
    rotate: 0,
    y: 0,
  },
  open: {
    backgroundColor: "#f5f5f5",
    rotate: -135,
    y: -12,
    transition: {
      ease: "easeIn",
    },
  },
};

// Nav Variants

const listVariants = {
  animate: {
    transition: {
      staggerChildren: 0.07,
      staggerDirection: -1,
    },
  },
};

const itemVariants = {
  initial: {
    opacity: 0,
    x: -50,
  },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.4,
    },
  },
};

export default function Header({ theme }) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "unset";
  }, [isOpen]);

  function toggleHamburger() {
    setIsOpen((prevState) => !prevState);
  }

  return (
    <>
      <AnimatePresence>{isOpen && <MobileNav />}</AnimatePresence>
      <header className="wrapper">
        <motion.div
          className={
            theme === "light" ? "header header-light" : "header header-dark"
          }
          variants={listVariants}
          initial="initial"
          animate="animate">
          <motion.div
            variants={itemVariants}
            className="header-logo-wrapper"
            whileHover={{ scale: 1.08 }}>
            <Link to="/">
              <img
                src={theme === "light" ? logoBlack : logoWhite}
                alt="logo"
                className="header-logo"
              />
            </Link>
          </motion.div>

          <ul className="header-nav">
            <motion.li whileHover={{ scale: 1.08 }} variants={itemVariants}>
              <Link className="header-linkResume" to="/resume">
                Resume
              </Link>
            </motion.li>
          </ul>

          <nav className="header-hamburger" onClick={toggleHamburger}>
            <motion.div
              transition={{ ease: "easeIn" }}
              animate={isOpen ? "open" : "closed"}
              variants={theme === "light" ? hamburgerTop : hamburgerTopDark}
              className="header-line__top"></motion.div>
            <motion.div
              transition={{ ease: "easeIn" }}
              animate={isOpen ? "open" : "closed"}
              variants={hamburgerMiddle}
              className="header-line__middle"
              style={
                theme === "light"
                  ? { backgroundColor: "#1f1f1f" }
                  : { backgroundColor: "#f5f5f5" }
              }></motion.div>
            <motion.div
              transition={{ ease: "easeIn" }}
              animate={isOpen ? "open" : "closed"}
              variants={
                theme === "light" ? hamburgerBottom : hamburgerBottomDark
              }
              className="header-line__bottom"></motion.div>
          </nav>
        </motion.div>
      </header>
    </>
  );
}
