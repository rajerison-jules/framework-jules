import React from "react";

import quote from "./../assets/images/Icone.png";
import BG from "./../assets/images/Imwwage.png";
import quotes from "./../assets/images/Icones.png";
export default function Section4() {
  return (
    <div className="step--component">
      <div className="w-100 text-center mb-5">
        <span className="h3  titre4">
          Let’s see what <span className="titre4s">patient</span> says!
        </span>
      </div>

      <div
        className=" d-flex justify-content-between w-100 bg-coeur "
        style={{ backgroundImage: `url(${BG})` }}
      >
        <div className="w-100">jules</div>
        <div className="w-100">
          <div className=" w-75">
            <h6>
              <img
                className="m-4 mb-0"
                style={{ verticalAlign: "bottom" }}
                src={quote}
                alt=""
              />{" "}
              <i>
                Blandit feugiat viverra est tortor commodo, tellus. pellentesque
                diam, id felis viverra diam. Molestie solli semper ornare dolor
                augue aucto.{" "}
                <img
                  className="m-4 mt-0"
                  style={{ verticalAlign: "top" }}
                  src={quotes}
                  alt=""
                />
              </i>
            </h6>
          </div>
        </div>
      </div>
    </div>
  );
}
