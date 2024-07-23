import React from "react";
import BarChart from "./BarChart";
import "./Placement.css";

function Placement() {
  return (
    <div>
      <p className="place-p">PLACEMENT STATISTICS CSE</p>
      <div class="rcircle" style={{ width: 150, marginLeft: 350 }}>
        <div class="txt" style={{ top: 65 }}>
          Highest Package
        </div>
        <div class="txt" style={{ top: 85 }}>
          55 lpa
        </div>
      </div>
      <div class="rcircle" style={{ width: 150 }}>
        <div class="txt" style={{ top: 65 }}>
          Average Package
        </div>
        <div class="txt" style={{ top: 85 }}>
          15.48 lpa
        </div>
      </div>
      <div class="rcircle" style={{ width: 150 }}>
        <div class="txt" style={{ top: 65 }}>
          Median Package
        </div>
        <div class="txt" style={{ top: 85 }}>
          14 lpa
        </div>
      </div>
      <hr />
      <BarChart />
    </div>
  );
}

export default Placement;
