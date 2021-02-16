import { useState } from "react";
import { RiReactjsLine } from "react-icons/ri";
import { CgFigma } from "react-icons/cg";
import { FaHtml5 } from "react-icons/fa";
import { CgFramer } from "react-icons/cg";
import { IoLogoJavascript } from "react-icons/io";
import { SiNetlify } from "react-icons/si";
import { BiGitBranch } from "react-icons/bi";
import { SiAffinityphoto } from "react-icons/si";
import { SiAffinitydesigner } from "react-icons/si";
import { DiSass } from "react-icons/di";
import { IoLogoCss3 } from "react-icons/io";
import { BsFillTerminalFill } from "react-icons/bs";
import nextLogo from "../../images/skills-icons/Nextjs-logo.svg";
import contentfulLogo from "../../images/skills-icons/contentfulLogo.svg";

export default function SkillsSection() {
  const [state] = useState([
    { logo: <CgFigma />, text: "Figma" },
    { logo: <SiAffinitydesigner />, text: "Affinity Designer" },
    { logo: <RiReactjsLine />, text: "React" },
    { logo: <FaHtml5 />, text: "Html" },
    { logo: <IoLogoJavascript />, text: "Javascript" },
    { logo: <SiNetlify />, text: "Netlify" },
    { logo: <BiGitBranch />, text: "Git" },
    { logo: <SiAffinityphoto />, text: "Affinity Photo" },
    { logo: <DiSass />, text: "Scss" },
    { logo: <IoLogoCss3 />, text: "Css" },
    { logo: <CgFramer />, text: "Framer Motion" },
    { logo: <BsFillTerminalFill />, text: "Unix" },
    {
      logo: (
        <img
          src={nextLogo}
          alt="next.js logo"
          className="marquee__logo--nonReactIcons"
        />
      ),
      text: "Next.js",
    },
    {
      logo: (
        <img
          src={contentfulLogo}
          alt="contentful logo"
          className="marquee__logo--nonReactIcons"
        />
      ),
      text: "Contentful",
    },
  ]);

  return (
    <section className="SkillsSection wrapper">
      <div className="headerMarquee">
        <div className="headerMarquee__zero">
          <h6 className="headerMarquee__item">Tools and Technologies</h6>
          <h6 className="headerMarquee__item">Tools and Technologies</h6>
          <h6 className="headerMarquee__item">Tools and Technologies</h6>
          <h6 className="headerMarquee__item">Tools and Technologies</h6>
        </div>
        <div className="headerMarquee__one">
          <h6 className="headerMarquee__item">Tools and Technologies</h6>
          <h6 className="headerMarquee__item">Tools and Technologies</h6>
          <h6 className="headerMarquee__item">Tools and Technologies</h6>
          <h6 className="headerMarquee__item">Tools and Technologies</h6>
        </div>
        <div className="headerMarquee__two">
          <h6 className="headerMarquee__item">Tools and Technologies</h6>
          <h6 className="headerMarquee__item">Tools and Technologies</h6>
          <h6 className="headerMarquee__item">Tools and Technologies</h6>
          <h6 className="headerMarquee__item">Tools and Technologies</h6>
        </div>
        <div className="headerMarquee__three">
          <h6 className="headerMarquee__item">Tools and Technologies</h6>
          <h6 className="headerMarquee__item">Tools and Technologies</h6>
          <h6 className="headerMarquee__item">Tools and Technologies</h6>
          <h6 className="headerMarquee__item">Tools and Technologies</h6>
        </div>
        <div className="headerMarquee__four">
          <h6 className="headerMarquee__item">Tools and Technologies</h6>
          <h6 className="headerMarquee__item">Tools and Technologies</h6>
          <h6 className="headerMarquee__item">Tools and Technologies</h6>
          <h6 className="headerMarquee__item">Tools and Technologies</h6>
        </div>
      </div>
      <div className="marquee">
        <div className="marquee__zero">
          {state.map((item) => (
            <div className="marquee__item" key={`${item.text}1`}>
              <div>{item.logo}</div>
              <div className="marquee__text">{item.text}</div>
            </div>
          ))}
        </div>
        <div className="marquee__one">
          {state.map((item) => (
            <div className="marquee__item" key={`${item.text}1`}>
              <div>{item.logo}</div>
              <div className="marquee__text">{item.text}</div>
            </div>
          ))}
        </div>
        <div className="marquee__two">
          {state.map((item) => (
            <div className="marquee__item" key={`${item.text}2`}>
              <div>{item.logo}</div>
              <div className="marquee__text">{item.text}</div>
            </div>
          ))}
        </div>
        <div className="marquee__three">
          {state.map((item) => (
            <div className="marquee__item" key={`${item.text}3`}>
              <div>{item.logo}</div>
              <div className="marquee__text">{item.text}</div>
            </div>
          ))}
        </div>
        <div className="marquee__four">
          {state.map((item) => (
            <div className="marquee__item" key={`${item.text}4`}>
              <div>{item.logo}</div>
              <div className="marquee__text">{item.text}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
