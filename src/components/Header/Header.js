import React, { Component } from "react";
import logo from "../../images/my-logo.svg";
import night from "../../images/switch.svg";

export default class Header extends Component {
  render() {
    return (
      <div className="header wrapper">
        <img src={logo} alt="logo" className="header-logo" />
        <ul className="header-nav">
          <li className="header-link">projects</li>
          <li className="header-link">about</li>
          <li className="header-link">contact</li>
          <li className="header-link">
            <span className="header-night">night mode</span>
            <img src={night} alt="" className="header-switch" />
          </li>
        </ul>
      </div>
    );
  }
}
