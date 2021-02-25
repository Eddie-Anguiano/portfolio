import { motion } from "framer-motion";

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
        <ul className="MobileNav-list">
          <li className="MobileNav-item">Home</li>
          <li className="MobileNav-item">Algorithm Visualizers</li>
          <li className="MobileNav-item">Contact</li>
        </ul>
      </motion.div>
    </>
  );
}
