import React from "react";
import "../../resources/spotIt.css";

function Card(props) {
  let { label, card = [], itemClicked = Function.prototype, position } = props;
  // let rotateAngle = Math.random() * 360;
  let rotateAngle = Math.random() * 360;
  return (
    <div
      className="spot-it-card"
      style={{
        ...position,
        backgroundColor: card.length > 0 ? "white" : "inherit",
      }}
    >
      <div style={{ position: "relative", bottom: 25 }}>{label}</div>
      {(card || []).map(function (id, idx) {
        let { top, left } = placement[idx];
        return (
          <div
            key={id}
            style={{
              color: "black",
              position: "absolute",
              display: "inline-block",
              top,
              left,
              transform: `rotate(${rotateAngle}deg)`,
            }}
            className="spot-it-image-container"
            onClick={function () {
              itemClicked(id);
            }}
          >
            <div
              style={{ transform: `rotate(${rotateAngle}deg)` }}
              className={`spot-it-image item-${id+1}`}
            ></div>
          </div>
        );
      })}
    </div>
  );
}

let placement = [
  { top: 5, left: 85 },
  { top: 45, left: 20 },
  { top: 50, left: 135 },
  { top: 110, left: 25 },
  { top: 125, left: 115 },
  { top: 160, left: 75 },
  { top: 105, left: 160 },
  { top: 75, left: 70 },
];

export default Card;
