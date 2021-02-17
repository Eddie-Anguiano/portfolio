import { useEffect, useState } from "react";
import logo from "../../images/logo-black.svg";
import logoDark from "../../images/logo-bulb.svg";
import logoWhite from "../../images/logo-white.svg";
import { motion } from "framer-motion";

// Hamburger Variant

const hamburgerTop = {
  closed: {
    rotate: 0,
    y: 0,
  },
  open: {
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
    rotate: 0,
    y: 0,
  },
  open: {
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
      staggerChildren: 0.1,
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

export default function Header({ theme, toggleTheme }) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "unset";
  }, [isOpen]);

  function toggleHamburger() {
    setIsOpen((prevState) => !prevState);
  }

  function handleDarkModeClick() {
    toggleTheme();
  }

  let logoFile;
  let headerClass;

  if (theme === "light") {
    logoFile = logo;
    headerClass = "header header-light";
  } else if (theme === "dark") {
    logoFile = logoDark;
    headerClass = "header header-dark";
  } else {
    logoFile = logoWhite;
    headerClass = "header";
  }

  return (
    <header className="wrapper">
      <motion.div
        className={headerClass}
        variants={listVariants}
        initial="initial"
        animate="animate">
        <motion.div variants={itemVariants} className="header-logo-wrapper">
          <img src={logoFile} alt="logo" className="header-logo" />
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
          {theme && (
            <motion.li
              variants={itemVariants}
              className="header-link"
              onClick={handleDarkModeClick}>
              dark mode
            </motion.li>
          )}
        </ul>

        <nav className="header-hamburger" onClick={toggleHamburger}>
          <motion.div
            transition={{ ease: "easeIn" }}
            animate={isOpen ? "open" : "closed"}
            variants={hamburgerTop}
            className="header-line__top"></motion.div>
          <motion.div
            transition={{ ease: "easeIn" }}
            animate={isOpen ? "open" : "closed"}
            variants={hamburgerMiddle}
            className="header-line__middle"></motion.div>
          <motion.div
            transition={{ ease: "easeIn" }}
            animate={isOpen ? "open" : "closed"}
            variants={hamburgerBottom}
            className="header-line__bottom"></motion.div>
        </nav>
      </motion.div>
    </header>
  );
}
