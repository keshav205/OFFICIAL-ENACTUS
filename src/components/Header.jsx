import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import logo from "../asset/logo.png";

function Header() {
  return (
    <>
      <header>
        <img class="logo" src={logo} alt="" srcset="" width={80} />
        <input type="checkbox" id="nav-toggle" class="nav-toggle" />
        <nav>
          <ul>
            <li>
              <a href="/">HOME</a>
            </li>
            <li>
              <a
                href="/Users/jarvis/Desktop/Enactus react/src/pages/AboutPage.jsx"
                target="__blank"
              >
                ABOUT US
              </a>
            </li>
            <li>
              <a href="/Users/jarvis/Desktop/Enactus react/src/pages/ProjectsPage.jsx">
                PROJECTS
              </a>
            </li>
            <li>
              <a href="/Users/jarvis/Desktop/Enactus react/src/pages/Corepage.jsx">
                CORE
              </a>
            </li>
            <li>
              <a href="/Users/jarvis/Desktop/Enactus react/src/pages/ContactUsPage.jsx">
                CONTACT US
              </a>
            </li>
          </ul>
        </nav>
        <label for="nav-toggle" class="nav-toggle-label">
          <span></span>
        </label>
      </header>
    </>
  );
}

export default Header;
