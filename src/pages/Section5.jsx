import React from "react";
import shield from "./../assets/img/shield-2.png";
export default function Section5() {
  return (
    <div className="w-100 d-flex align-items-center justify-content-center gar--perso ">
      <div className=" m-5 gar  d-flex align-items-center justify-content-between">
        <div className=" imgGar">
          <img className="imgar" src={shield} alt="" />
        </div>
        <div className="d-flex w-100 justify-content-between align-items-center">
          <div>
            <h5 className="titre--perso">100% Satisfaction Guarantee</h5>
            <span className="small text-secondary">
              We offer no questions asked refund policy for 14 days from the
              policy date.
            </span>
          </div>

          <div>
            <span className="btn btn-success btn-gar">Get your free Quote</span>
          </div>
        </div>
      </div>
    </div>
  );
}
