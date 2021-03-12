import Header from "../Header/Header";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function Success() {
  return (
    <main className="Success">
      <Header theme="dark" />
      <div className="Success-messageContainer">
        <h2 className="Success-header">Message Sent</h2>
        <motion.div
          whileHover={{ scale: 1.08 }}
          className="Success-linkContainer">
          <Link to="/" className="Success-btn">
            Home Page
          </Link>
        </motion.div>
      </div>
    </main>
  );
}
