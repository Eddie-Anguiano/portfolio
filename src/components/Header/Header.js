import React, { Component } from "react";
import logo from "../../images/my-logo.svg";
import logoDark from "../../images/my-logo-dark2.svg";

export default class Header extends Component {
  constructor(props) {
    super(props);
    this.toggleTheme = this.toggleTheme.bind(this);
  }

  toggleTheme() {
    this.props.toggleTheme();
  }

  render() {
    console.log(this.props);
    return (
      <div
        className={
          this.props.theme === "light"
            ? "header wrapper header-light"
            : "header wrapper header-dark"
        }>
        <div className="header-logo-wrapper">
          <img
            src={this.props.theme === "light" ? logo : logoDark}
            alt="logo"
            className="header-logo"
          />
        </div>

        <ul className="header-nav">
          <li className="header-link">projects</li>
          <li className="header-link">about</li>
          <li className="header-link">contact</li>
          <li className="header-link" onClick={this.toggleTheme}>
            dark mode
          </li>
        </ul>
      </div>
    );
  }
}
