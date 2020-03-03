import React from "react";
import "./../css/App.css";
import "./../css/header.css";
import { SocialIcon } from "react-social-icons";
import pdf from "./../images/Resume.pdf";

function Header() {
  return (
    <div className="Header">
      <ul>
        <li>
          <a href="#title">Jaryd Fisher </a>
        </li>
        <li>
          <a href="#about-section">About Me </a>
        </li>
        <li>
          <a href="#projects">Projects</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>

        <li className="navbar-right">
          <SocialIcon
            id="linkedin"
            url="https://www.linkedin.com/in/jaryd-fisher-0159b219a/"
          />
        </li>
        <li className="navbar-right">
          <a href={pdf} download="Resume.pdf">
            Resume
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Header;
