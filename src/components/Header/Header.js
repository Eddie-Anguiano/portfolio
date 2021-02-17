import logo from "../../images/logo-black.svg";
import logoDark from "../../images/logo-bulb.svg";
import logoWhite from "../../images/logo-white.svg";
import { motion } from "framer-motion";

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
      </motion.div>
    </header>
  );
}
