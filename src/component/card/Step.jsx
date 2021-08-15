import React from "react";
import "./cardStyle.css";
export default function Step(props) {
  return (
    <div className=" p-3 border-0 m-3">
      <div className="d-flex justify-content-center w-100 ">
        <div
          className="step--card text-center d-flex align-items-center justify-content-center"
          style={{ background: props.bg }}
        >
          <span className="chifre">{props.niveau}</span>
        </div>
      </div>

      <div className="text-center p-3 pt-3">
        <h6 className="card--title">{props.title}</h6>
        <p className="text-secondary small">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin quis
          nunc vitae velit rutrum suscipit non et eros.
        </p>
      </div>
    </div>
  );
}
