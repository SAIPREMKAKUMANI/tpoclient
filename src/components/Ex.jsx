import React from "react";
import vks from "./img/vks_1.jpeg";
import director from "./img/director.jpg";
import { NavLink } from "react-router-dom";
import "./Ex.css";

const Ex = (props) => (
  <div className="example">
    <div className="blog-card">
      <div className="meta">
        <div
          className="photo"
          style={{ backgroundImage: `url(${director})` }}
        />
        <ul className="details">
          <li className="author">Dr. N V Ramana Rao</li>
          <li className="date">Director</li>
          <li className="tags">
            <ul>
              <li>NIT</li>
              <li>RAIPUR</li>
            </ul>
          </li>
        </ul>
      </div>
      <div className="description">
        <h1>A Vision To Follow</h1>
        <h2>Industry and Institute collaborations and linkages</h2>
        <p>
          {" "}
          Industry and Institute collaborations and linkages are a must for
          sustainable growth of technology, economy, and human civilisation. NIT
          Raipur is sincerely working for symbiotic relationship with industries
          since its inception in 1956...{" "}
        </p>
        <p className="read-more">
          <NavLink to="/message/director" exact className="activeclass">
            Read More..
          </NavLink>
        </p>
      </div>
    </div>
    <div className="blog-card alt">
      <div className="meta">
        <div className="photo" style={{ backgroundImage: `url(${vks})` }} />
        <ul className="details">
          <li className="author">Dr. Manoj Kumar Chopkar</li>
          <li className="date">Training and Placement Officer</li>
          <li className="tags">
            <ul>
              <li>NIT</li>
              <li>RAIPUR</li>
            </ul>
          </li>
        </ul>
      </div>
      <div className="description">
        <h1>Exploring The Skies</h1>
        <h2>The Training and Placement cell </h2>
        <p>
          The aim of the Placement Cell is to provide good career opportunities
          to all the students of the institute. The department keeps close
          contact with potential employers and organises the campus placements
          for the students..{" "}
        </p>
        <p className="read-more">
          <NavLink to="/message/tpo" exact className="activeclass">
            Read More..
          </NavLink>
        </p>
      </div>
    </div>
  </div>
);

export default Ex;
