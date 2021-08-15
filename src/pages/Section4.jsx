import React from "react";
import fond from "./../assets/img/Composed-layer-2.png";
import quote from "./../assets/img/quote.png";
export default function Section4() {
  return (
    <div>
      <div className=" m-0 mt-0 w-100 bd-highlight banner--perso2 ">
        <div className="  mt-0  m-5 mb-0 pl-5 margin--perso d-flex align-items-start ">
          <div className=" m-3 mt-5 ml-5 text--temoin  ">
            <div>
              <img src={quote} alt="quote" />
            </div>
            <br />
            <span className="h3 paragraph mt-5 ">
              I need to understand what’s going on – it’s my health and I want
              to feel secure in it. With my previous health insurance, I didn’t
              know how any of it worked.
            </span>
            <br />
            <div className="mt-5">
              <span className="titre--perso text-primary">Matthew Young</span>
              <br />

              <span className="sous--titre">
                Legal Consultant, United States
              </span>
            </div>
          </div>
          <div className="  image--temoin  margin--perso">
            <img className="tem" src={fond} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}
