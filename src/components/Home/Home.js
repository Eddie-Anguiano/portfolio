import React, { Component } from "react";
import Header from "../Header/Header";
import Hero from "../Hero/Hero";
import SkillsSection from "../SkillsSection/SkillsSection";
import Project from "../Project/Project";
import puvuMobile from "../../images/projects/puvu-mobile.png";
import puvuDesktop from "../../images/projects/puvu-desktop.png";

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
          desktopImg={puvuDesktop}
          mobileImg={puvuMobile}
          color="#2e5081"
          header="Puvu.org"
          content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. A dolor in
            vestibulum ac id. Ornare morbi auctor malesuada magna arcu cras.
            Mauris tincidunt tristique pulvinar elit sed fusce semper tempus.
            Lectus sapien nulla eget mi. tincidunt tristique pulvinar elit sed
            fusce semper tempus. Lectus sapien nulla eget mi"
        />
      </div>
    );
  }
}
