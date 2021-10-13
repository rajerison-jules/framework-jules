import React from "react";

import quote from "./../assets/images/Icone.png";
import BG from "./../assets/images/Imwwage.png";
import SP from "./../assets/images/Shwape.png";
import quotes from "./../assets/images/Icones.png";
import user1 from "./../assets/images/User-1.png";
import user2 from "./../assets/images/User-2.png";
import user3 from "./../assets/images/User-3.png";
import user4 from "./../assets/images/User-4.png";
import user5 from "./../assets/images/User.png";
import Fleche from "./../assets/images/fleche.png";
export default function Section4() {
  return (
    <div className="step--component">
      <div className="w-100 text-center mb-5">
        <span className="h3  titre4">
          Let’s see what <span className="titre4s">patient</span> says!
        </span>
      </div>

      <div
        className=" d-flex justify-content-between w-100 bg-coeur position-relative "
        style={{ backgroundImage: `url(${BG})` }}
      >
        <div className="w-100 cont">
          <div className="position-absolute sp m-2">
            <img src={SP} />
          </div>
          <div className="main position-relative">
            <div className="cirlce1 animate__rubberBand animate__animated">
              <img src={user1} />
            </div>
            <div className="cirlce2 animate__rubberBand animate__animated">
              <img src={user2} />
            </div>
            <div className="cirlce3 animate__rubberBand animate__animated">
              <img src={user3} />
            </div>
            <div className="cirlce4 animate__rubberBand animate__animated">
              <img src={user4} />
            </div>
            <div className="cirlce5 animate__rubberBand animate__animated">
              <img src={user5} />
            </div>
            <div className="cirlcef animate__animated  animate__slower	5s animate__infinite	infinite">
              <img src={Fleche} />
            </div>
          </div>
        </div>
        <div className="w-100 d-flex" style={{ verticalAlign: "bottom" }}>
          <div className="imageq">
            <img className="m-4 mb-0" src={quote} alt="" />{" "}
          </div>

          <div>
            <div className=" w-100">
              <h6>
                <i>
                  Blandit feugiat viverra est tortor commodo, tellus.
                  pellentesque diam, id felis viverra diam. Molestie solli
                  semper ornare dolor augue aucto.{" "}
                  <img
                    className="m-4 mt-0"
                    style={{ verticalAlign: "top" }}
                    src={quotes}
                    alt=""
                  />
                </i>
              </h6>
            </div>
            <div className=" w-100">
              <h4>Justin Lubin</h4>
              <div>Patient</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
