import React from "react";
import "./../App.css";
import { SocialIcon } from "react-social-icons";
import pdf from './../resume.pdf';

function Header() {
  return (
    <div className="Header">
      <ul>
        <li>
          <a href="#title">Jaryd Fisher </a>
        </li>
        <li>
          <a href="#aboutMe">About Me </a>
        </li>
        <li>
          <a href="#skills">Skills</a>
        </li>
        <li>
          <a href="#projects">Projects</a>
        </li>
        <li className="navbar-right">
          <SocialIcon
            id="linkedin"
            url="https://www.linkedin.com/in/jaryd-fisher-0159b219a/"
          />
        </li>
        <li className="navbar-right">
        <a href={pdf} download="resume.pdf">Click to download manifest</a>  
        </li>
      </ul>
    </div>
  );
}

export default Header;
