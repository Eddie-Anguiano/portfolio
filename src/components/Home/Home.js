import React, { Component } from "react";
import Header from "../Header/Header";
import Hero from "../Hero/Hero";
import SkillsSection from "../SkillsSection/SkillsSection";

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
        <section>next section</section>
      </div>
    );
  }
}
