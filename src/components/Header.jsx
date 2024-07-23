import React from "react";
import HomeIcon from "@mui/icons-material/Home";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { Link } from "react-router-dom";
import "./Header.css";
import { IoChatboxEllipses } from "react-icons/io5";

function Header() {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <a
          className="navbar-brand"
          href="http://www.nitrr.ac.in/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="/images/logo.png" alt="NIT RAIPUR" className="logo" />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <Link className="nav-link" to="/Home" aria-label="Home">
              <HomeIcon />
            </Link>
            <Link className="nav-link" to="/Training">
              TRAINING
            </Link>
            <Link className="nav-link" to="/Placement">
              PLACEMENT
            </Link>
            <Link className="nav-link" to="/AboutUs">
              ABOUT
            </Link>
            <Link className="nav-link" to="/Chat" aria-label="Chat">
              <IoChatboxEllipses />
            </Link>
            <Link className="nav-link" to="/Info" aria-label="User Info">
              <AccountCircleIcon />
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Header;
