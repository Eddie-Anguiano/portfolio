import figmaImg from "../../images/social-icons/figma.svg";
import githubImg from "../../images/social-icons/github.svg";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  parentStagger,
  fadeUpIn,
  scaleMiddle,
  fadeRightIn,
  fadeUpLeftIn,
} from "../../models/animations";

export default function Project({
  desktopImg,
  mobileImg,
  color,
  header,
  content,
  squareArray,
  isLink,
  viewSite,
  figmaLink,
  gitLink,
}) {
  // Intersection Observer for text
  const controlText = useAnimation();
  const [textRef, textInView] = useInView({
    threshold: 0.8,
    triggerOnce: true,
  });

  // Text controller
  useEffect(() => {
    if (textInView) {
      controlText.start("animate");
    }
  }, [controlText, textInView]);

  // Intersection Observer for Image
  const controlImage = useAnimation();
  const [imageRef, imageInView] = useInView({
    threshold: 0.8,
    triggerOnce: true,
  });

  // Image controller
  useEffect(() => {
    if (imageInView) {
      controlImage.start("animate");
    }
  }, [controlImage, imageInView]);

  return (
    <div className="wrapper">
      <section className="Project">
        <motion.div
          ref={imageRef}
          animate={controlImage}
          initial="initial"
          variants={parentStagger}
          className="Project__screens">
          <motion.div
            variants={scaleMiddle}
            className="Project__background"
            style={{
              top: `${squareArray[0]}%`,
              right: `${squareArray[1]}%`,
              bottom: `${squareArray[2]}%`,
              left: `${squareArray[3]}%`,
              backgroundColor: color,
            }}></motion.div>
          <motion.img
            variants={fadeRightIn}
            className="Project__desktopImg"
            src={desktopImg}
            alt="desktop"
          />
          <motion.img
            variants={fadeUpLeftIn}
            className="Project__mobileImg"
            src={mobileImg}
            alt="mobile"
          />
        </motion.div>
        <motion.div
          ref={textRef}
          animate={controlText}
          initial="initial"
          variants={parentStagger}
          className="Project__info">
          <motion.h2 variants={fadeUpIn} className="Project__header">
            {header}
          </motion.h2>
          <motion.p variants={fadeUpIn} className="Project__content">
            {content}
          </motion.p>
          {isLink ? (
            <motion.div
              whileHover={{ scale: 1.08 }}
              variants={fadeUpIn}
              className="Project__linkWrapper">
              <Link
                to={viewSite}
                className="Project__siteBtn"
                style={{ backgroundColor: color }}>
                View Site
              </Link>
            </motion.div>
          ) : (
            <motion.a
              whileHover={{ scale: 1.08 }}
              variants={fadeUpIn}
              href={viewSite}
              className="Project__siteBtn"
              style={{ backgroundColor: color }}>
              View Site
            </motion.a>
          )}

          <motion.a
            whileHover={{ scale: 1.08 }}
            variants={fadeUpIn}
            href={gitLink}
            className="Project__githubBtn">
            <img src={githubImg} alt="github" className="Project__icon" />
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.08 }}
            variants={fadeUpIn}
            href={figmaLink}
            className="Project__figmaBtn">
            <img src={figmaImg} alt="figma" className="Project__icon" />
          </motion.a>
        </motion.div>
      </section>
    </div>
  );
}
