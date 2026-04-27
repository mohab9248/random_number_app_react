import React from "react";

function Card(props) {
  return (
    <div className="card">
      <h1>This card's value is: {props.value}</h1>
      <p>this card is: {props.value > 50 ? "high" : "low"}</p>
    </div>
  );
}

export default Card;
