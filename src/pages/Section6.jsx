import React from "react";
import Card from "./../component/card/Price";

export default function Section2() {
  return (
    <div className="price--component  pl-5">
      <div className="w-100  pl-5 text-center mb-5">
        <span className="h3  titre--perso">Honest Pricing</span>
        <br />
        <span className="sous--titre">
          Simple & honest pricing. No hidden fees.{" "}
        </span>
      </div>
      <div className=" m-5 mb-0 p-3 row  margin--perso2">
        <div className="col-sm-12 col-md-4">
          <Card bg="#96efff" title="BASIC" niveau={9} />
        </div>
        <div className="col-sm-12 col-md-4">
          <Card bg="#df530862" title="PROFESSIONAL" niveau={19} />
        </div>
        <div className="col-sm-12 col-md-4">
          <Card bg="#81d37162" title="PREMIUM" niveau={49} />
        </div>
      </div>
      <div className="w-100  pl-5 text-center mb-5">
        <span className="sous--titre">
          *Prices shown per month if paid annually
        </span>
      </div>
    </div>
  );
}
