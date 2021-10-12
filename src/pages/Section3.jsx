import React from "react";
import Card from "./../component/card/Step";
import trans1 from "./../assets/img/after-blue.png";
import trans2 from "./../assets/img/after-pink.png";
export default function Section2() {
  return (
    <div className="step--component m-5 mb-0 pl-5">
      <div className="w-100 text-center mb-5">
        <span className="h3  titre--perso">Simplified Claims</span>
        <br />
        <span className="sous--titre">Easy as One, Two, Three</span>
      </div>
      <div className=" d-flex  margin--perso2">
        <Card bg="#F25A3C" title="Report Claim" niveau={1} />
      </div>
    </div>
  );
}
