import figmaImg from "../../images/social-icons/figma.svg";
import githubImg from "../../images/social-icons/github.svg";
import { Link } from "react-router-dom";

export default function Project({
  desktopImg,
  mobileImg,
  color,
  header,
  content,
  squareArray,
  theme,
  isLink,
  viewSite,
  figmaLink,
  gitLink,
}) {
  return (
    <div className="wrapper">
      <section className="Project">
        <div className="Project__screens">
          <div
            className="Project__background"
            style={{
              top: `${squareArray[0]}%`,
              right: `${squareArray[1]}%`,
              bottom: `${squareArray[2]}%`,
              left: `${squareArray[3]}%`,
              backgroundColor: color,
            }}></div>
          <img className="Project__desktopImg" src={desktopImg} alt="" />
          <img className="Project__mobileImg" src={mobileImg} alt="" />
        </div>
        <div className="Project__info">
          <h2
            style={theme === "dark" ? { color: "#fff" } : { color: "#1f1f1f" }}
            className="Project__header">
            {header}
          </h2>
          <p
            className="Project__content"
            style={theme === "dark" ? { color: "#fff" } : { color: "#1f1f1f" }}>
            {content}
          </p>
          {isLink ? (
            <Link
              to={viewSite}
              className="Project__siteBtn"
              style={{ backgroundColor: color }}>
              View Site
            </Link>
          ) : (
            <a
              href={viewSite}
              className="Project__siteBtn"
              style={{ backgroundColor: color }}>
              View Site
            </a>
          )}

          <a href={gitLink} className="Project__githubBtn">
            <img src={githubImg} alt="github" className="Project__icon" />
          </a>
          <a href={figmaLink} className="Project__figmaBtn">
            <img src={figmaImg} alt="figma" className="Project__icon" />
          </a>
        </div>
      </section>
    </div>
  );
}
