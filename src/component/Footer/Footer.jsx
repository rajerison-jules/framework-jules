import React from "react";

export default function Footer() {
  return (
    <div className="bg-light p-5">
      <div className="margin--perso2 row justify-content-around">
        <div className="col-md-4">
          <h6 className="titre--perso">ADDRESS</h6>
          <span className="sous-titre text-secondary small">
            400-401 West Georgia Street
          </span>
          <br />
          <span className="sous-titre text-secondary small">
            Vancouver, BC, Canada, V6B 5A1
          </span>
          <br />
          <span className="sous-titre text-secondary small">
            +1 (123) 456 7890
          </span>
          <br />
          <span className="sous-titre text-secondary small">
            sales@insurance.com
          </span>
        </div>
        <div className="col-md-4">
          <h6 className="titre--perso">FOLLOW US</h6>
          <span className="sous-titre text-secondary small">Twitter</span>
          <br />
          <span className="sous-titre text-secondary small">Facebook</span>
          <br />
          <span className="sous-titre text-secondary small">LinkedIn</span>
          <br />
          <span className="sous-titre text-secondary small">Instagram</span>
        </div>
        <div className="col-md-4">
          <h6 className="titre--perso ">ABOUT US</h6>
          <span className="sous-titre text-secondary small">
            Compellingly myocardinate market-driven infrastructures before team
            driven manufactured products. Monotonectally exploit tactical
            markets vis-a-vis excellent deliverables.
          </span>
        </div>
      </div>
    </div>
  );
}
