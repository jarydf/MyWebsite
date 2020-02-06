import React from "react";
import "./../App.css";
import { SocialIcon } from 'react-social-icons';

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
        <SocialIcon id="linkedin" url="https://www.linkedin.com/in/jaryd-fisher-0159b219a/" />
      </ul>
    </div>
  );
}

export default Header;
