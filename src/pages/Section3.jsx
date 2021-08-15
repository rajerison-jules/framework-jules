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
        <div className=" ">
          <Card bg="#96efff" title="Report Claim" niveau={1} />
        </div>
        <div className=" mt-5 pt-3 ">
          <img src={trans1} alt="" />
        </div>
        <div className=" ">
          <Card bg="#de34ed62" title="Report Claim" niveau={2} />
        </div>
        <div className=" mt-5 pt-3 ">
          <img src={trans2} alt="" />
        </div>
        <div className=" ">
          <Card bg="#81d37162" title="Report Claim" niveau={3} />
        </div>
      </div>
    </div>
  );
}
