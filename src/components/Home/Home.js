import React, { Component } from "react";
import Header from "../Header/Header";
import Hero from "../Hero/Hero";
import SkillsSection from "../SkillsSection/SkillsSection";
import Project from "../Project/Project";
import Contact from "../Contact/Contact";
import puvuMobile from "../../images/projects/puvu-mobile.jpg";
import puvuDesktop from "../../images/projects/puvu-desktop.jpg";
import wuddleMobile from "../../images/projects/wuddle-mobile.jpg";
import wuddleDesktop from "../../images/projects/wuddle-desktop.jpg";
import linkListMobile from "../../images/projects/linkList-mobile.jpg";
import linkListDesktop from "../../images/projects/linkList-desktop.jpg";
import papaMobile from "../../images/projects/papa-mobile.jpg";
import papaDesktop from "../../images/projects/papa-desktop.jpg";

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      theme: "light",
    };
    this.toggleTheme = this.toggleTheme.bind(this);
  }

  toggleTheme() {
    this.setState((st) => {
      return { theme: st.theme === "light" ? "dark" : "light" };
    });
  }

  render() {
    return (
      <div
        className={
          this.state.theme === "light" ? "home home-light" : "home home-dark"
        }>
        <Header theme={this.state.theme} toggleTheme={this.toggleTheme} />
        <Hero theme={this.state.theme} />
        <SkillsSection />
        <Project
          viewSite="https://www.papasbellflower.com"
          isLink={false}
          theme={this.state.theme}
          desktopImg={papaDesktop}
          mobileImg={papaMobile}
          color="#5b2822"
          header="PapasBellflower.com"
          squareArray={[20, 20, -15, -10]}
          figmaLink="https://www.figma.com/file/ZK1uoZmkYlnq54XKBtBLiS/papa-joe?node-id=0%3A1"
          gitLink="https://github.com/Eddie-Anguiano/papaJoes.git"
          content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. A dolor in
            vestibulum ac id. Ornare morbi auctor malesuada magna arcu cras.
            Mauris tincidunt tristique pulvinar elit sed fusce semper tempus.
            Lectus sapien nulla eget mi. tincidunt tristique pulvinar elit sed
            fusce semper tempus. Lectus sapien nulla eget mi"
        />
        <Project
          viewSite="https://www.puvu.org"
          isLink={false}
          theme={this.state.theme}
          desktopImg={puvuDesktop}
          mobileImg={puvuMobile}
          color="#2e5081"
          header="Puvu.org"
          squareArray={[-10, 20, -10, 20]}
          figmaLink="https://www.figma.com/file/TuzwiAYtryJEZpnARsdUnH/Untitled?node-id=116%3A65"
          gitLink="https://github.com/Eddie-Anguiano/native-website.git"
          content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. A dolor in
            vestibulum ac id. Ornare morbi auctor malesuada magna arcu cras.
            Mauris tincidunt tristique pulvinar elit sed fusce semper tempus.
            Lectus sapien nulla eget mi. tincidunt tristique pulvinar elit sed
            fusce semper tempus. Lectus sapien nulla eget mi"
        />
        <Project
          viewSite="/singleLinkList"
          isLink={true}
          theme={this.state.theme}
          desktopImg={linkListDesktop}
          mobileImg={linkListMobile}
          color="#66c190"
          header="Linked List Visualizer"
          squareArray={[-20, -15, 15, 10]}
          figmaLink="https://www.figma.com/file/sHDW1JVbCJpRtcinr7Y5bc/Untitled?node-id=0%3A1"
          gitLink="https://github.com/Eddie-Anguiano/portfolio/blob/main/src/components/SingleLinkList/SingleLinkList.js"
          content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. A dolor in
            vestibulum ac id. Ornare morbi auctor malesuada magna arcu cras.
            Mauris tincidunt tristique pulvinar elit sed fusce semper tempus.
            Lectus sapien nulla eget mi. tincidunt tristique pulvinar elit sed
            fusce semper tempus. Lectus sapien nulla eget mi"
        />
        <Project
          viewSite="https://www.wuddle.tech"
          isLink={false}
          theme={this.state.theme}
          desktopImg={wuddleDesktop}
          mobileImg={wuddleMobile}
          color="#fdc961"
          header="Wuddle.tech"
          squareArray={[20, 20, -15, -10]}
          figmaLink="https://www.figma.com/file/C7IXh2YnXbSGT8BimHhV3i/stay"
          gitLink="https://github.com/Eddie-Anguiano/wuddle.it.git"
          content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. A dolor in
            vestibulum ac id. Ornare morbi auctor malesuada magna arcu cras.
            Mauris tincidunt tristique pulvinar elit sed fusce semper tempus.
            Lectus sapien nulla eget mi. tincidunt tristique pulvinar elit sed
            fusce semper tempus. Lectus sapien nulla eget mi"
        />
        <Contact />
      </div>
    );
  }
}
