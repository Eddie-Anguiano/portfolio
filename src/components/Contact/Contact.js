import githubImg from "../../images/social-icons/github.svg";
import linkedinImg from "../../images/social-icons/linkedin.svg";
import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  parentStagger,
  fadeLeftIn,
  scaleMiddleIn,
} from "../../models/animations";

export default function Contact() {
  const controlText = useAnimation();
  const [textRef, textInView] = useInView({
    threshold: 0.8,
    triggerOnce: true,
  });

  useEffect(() => {
    if (textInView) {
      controlText.start("animate");
    }
  }, [controlText, textInView]);

  return (
    <section className="Contact">
      <div className="Contact-wrapper wrapper">
        <motion.div
          ref={textRef}
          animate={controlText}
          initial="initial"
          variants={parentStagger}
          className="Contact-info">
          <motion.div
            variants={scaleMiddleIn}
            className="Contact-background"></motion.div>
          <motion.h2 variants={fadeLeftIn} className="Contact-header">
            Contact
          </motion.h2>
          <motion.div variants={fadeLeftIn} className="Contact-email">
            eddie@eamakes.com
          </motion.div>
          <motion.a
            whileHover={{ scale: 1.08 }}
            variants={fadeLeftIn}
            href="https://github.com/Eddie-Anguiano"
            className="Contact__github">
            <img src={githubImg} alt="github" className="Contact__icon" />
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.08 }}
            variants={fadeLeftIn}
            href="https://www.linkedin.com/in/eddie-anguiano-2a3442206/"
            className="Contact__linkedin">
            <img src={linkedinImg} alt="figma" className="Contact__icon" />
          </motion.a>
          <motion.p variants={fadeLeftIn} className="Contact-about">
            My name is Eddie Anguiano. I'm a front-end web developer focused on
            making beautiful, functional, and scalable websites and web apps.
            I'm currently working within the Jamstack, connecting dynamic React
            front-ends to flexible and scalable content management systems. So,
            what are we building?{" "}
          </motion.p>
        </motion.div>

        <form
          className="Contact-form"
          name="contact"
          method="POST"
          data-netlify="true">
          <input type="hidden" name="form-name" value="contact" />
          <div className="Contact-name-container">
            <div className="Contact-first-name">
              <label htmlFor="first_name" className="Contact-label">
                First Name
              </label>
              <input
                id="firstName"
                name="firstName"
                type="text"
                className="Contact-input"
              />
            </div>
            <div className="Contact-last_name">
              <label htmlFor="last_name" className="Contact-label">
                last Name
              </label>
              <input
                name="lastName"
                id="lastName"
                type="text"
                className="Contact-input"
              />
            </div>
            <div className="Contact-last_name"></div>
          </div>

          <label htmlFor="email" className="Contact-label">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            className="Contact-input"
          />

          <label htmlFor="message" className="Contact-label">
            Message
          </label>
          <textarea
            id="message"
            type="text"
            className="Contact-input Contact-textarea"
            name="message"
          />

          <motion.button
            whileHover={{ scale: 1.08 }}
            type="submit"
            className="Contact-button">
            Submit
          </motion.button>
        </form>
      </div>
    </section>
  );
}
