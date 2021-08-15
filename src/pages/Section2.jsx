import React from "react";
import Card from "./../component/card/Card";
import iconCard1 from "./../assets/img/home-insurance.svg";
import iconCard2 from "./../assets/img/car-insurance.svg";
import iconCard3 from "./../assets/img/life-insurance.svg";
import iconCard4 from "./../assets/img/business-insurance.svg";
import iconCard5 from "./../assets/img/travel-insurance.svg";
import iconCard6 from "./../assets/img/other-insurance.svg";
export default function Section2() {
  return (
    <div className="mt-0  m-5 mb-0 pl-5">
      <div className="w-100 text-center mb-5">
        <span className="h3  titre--perso">Choose your Insurance</span>
        <br />
        <span className="sous--titre">
          Keep Your Life Smile, Safe, and Wealthy
        </span>
      </div>
      <div className=" row margin--perso2">
        <div className="col-12 col-md-4">
          <Card image={iconCard1} bg="#96efff" title="Home Insurance" />
        </div>
        <div className="col-12 col-md-4">
          <Card image={iconCard2} bg="#de34ed62" title="Car Insurance" />
        </div>
        <div className="col-12 col-md-4">
          <Card image={iconCard3} bg="#81d37162" title="Life Insurance" />
        </div>
        <div className="col-12 col-md-4">
          <Card image={iconCard4} bg="#c8b54462" title="Business Insurance" />
        </div>
        <div className="col-12 col-md-4">
          <Card image={iconCard5} bg="#cd867562" title="Travel Insurance" />
        </div>
        <div className="col-12 col-md-4">
          <Card image={iconCard6} bg="#6767cb62" title="Other Insurance" />
        </div>
      </div>
    </div>
  );
}
