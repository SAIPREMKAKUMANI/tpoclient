import React from "react";
import "./Footer.css";
import { FaFacebook, FaTwitter, FaLinkedin, FaEnvelope } from "react-icons/fa";

function Footer() {
  const date = new Date();
  return (
    <footer>
      <div className="footer-grid">
        <div className="footer-col">
          <h2>Contact Us</h2>
          <p>NIT Raipur, GEC Road, Amanaka, Raipur - 492001</p>
          <p>
            <a href="mailto:placements@nitrr.ac.in">placements@nitrr.ac.in</a>
          </p>
        </div>
        <div className="footer-col">
          <h2>Quick Links</h2>
          <ul>
            <li>
              <a href="https://www.nitrr.ac.in">NIT Raipur Website</a>
            </li>
            <li>
              <a href="https://www.ncs.gov.in">National Career Service</a>
            </li>
            <li>
              <a href="/alumni">Alumni Network</a>
            </li>
          </ul>
        </div>
        <div className="footer-col">
          <h2>Stay Connected</h2>
          <div className="social-icons">
            <a href="https://www.facebook.com/profile.php?id=100064637081795">
              <FaFacebook />
            </a>
            <a href="https://x.com/NITRR">
              <FaTwitter />
            </a>
            <a href="https://www.linkedin.com/school/national-institute-of-technology-raipur/posts/?feedView=all">
              <FaLinkedin />
            </a>
          </div>
        </div>
        <div className="footer-col">
          <h2>Campus Highlights</h2>
          <div className="campus-highlights">
            <p>
              Latest Achievement:{" "}
              <strong>Smart India Hackathon 2023 Winners</strong>
            </p>
            <p>
              Upcoming Event:{" "}
              <strong>Annual Tech Fest - TechXplore 2024</strong>
            </p>
          </div>
        </div>
        <div className="footer-copyright">
          <p>
            ALL RIGHTS RESERVED © {date.getFullYear()}.{" "}
            <strong>NIT RAIPUR.</strong>
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
