// import puvuMobile from "../../images/projects/puvu-mobile.png";
// import puvuDesktop from "../../images/projects/puvu-desktop.png";
import figmaImg from "../../images/social-icons/figma.svg";
import githubImg from "../../images/social-icons/github.svg";

export default function Project({
  desktopImg,
  mobileImg,
  color,
  header,
  content,
}) {
  return (
    <div className="wrapper">
      <section className="Project">
        <div className="Project__screens">
          <div
            className="Project__background"
            style={{
              top: "-10%",
              left: "20%",
              right: "20%",
              bottom: "-10%",
              backgroundColor: color,
            }}></div>
          <img className="Project__desktopImg" src={desktopImg} alt="" />
          <img className="Project__mobileImg" src={mobileImg} alt="" />
        </div>
        <div className="Project__info">
          <h2 className="Project__header">{header}</h2>
          <p className="Project__content">{content}</p>
          <div className="Project__siteBtn" style={{ backgroundColor: color }}>
            View Site
          </div>
          <div className="Project__githubBtn">
            <img src={githubImg} alt="github" className="Project__icon" />
          </div>
          <div className="Project__figmaBtn">
            <img src={figmaImg} alt="figma" className="Project__icon" />
          </div>
        </div>
      </section>
    </div>
  );
}
