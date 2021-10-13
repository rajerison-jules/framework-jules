import React from "react";
import { FaCalendar, FaGreaterThan } from "react-icons/fa";
import EL from "./../assets/images/Ellipse 6.png";
import BG from "./../assets/images/Image (2).png";
import SP from "./../assets/images/Image (3).png";
import quotes from "./../assets/images/Icones.png";
import user1 from "./../assets/images/User-1.png";
import user2 from "./../assets/images/User-2.png";
import user3 from "./../assets/images/User-3.png";
import user4 from "./../assets/images/User-4.png";
import user5 from "./../assets/images/User.png";
import Fleche from "./../assets/images/fleche.png";
export default function Section7() {
  return (
    <div className="w-100">
      <div className="w-100 text-center mb-5">
        <span className="h3  titre4">
          Let’s see Our <span className="titre4s">latest </span> news!
        </span>
      </div>

      <div className="far">
        <div className="  loh">
          <div className="w-100">
            <img className="w-100" src={BG} />
          </div>
          <div className="d-flex justify-content-between">
            <span className="d-flex justify-content-center align-items-center ">
              {" "}
              <img src={EL} /> By Maria Calzoni
            </span>
            <span className="d-flex justify-content-center align-items-center ">
              {" "}
              <FaCalendar className="m-3" /> 21/07/2021
            </span>
          </div>
          <div>
            <h1>Join me and respectfully fight COVID misinformation.</h1>
            <p>
              Blandit feugiat viverra est tortor commodo, tellus. Neque,
              pellentesque diam, id felis viverra diam. Molestie sollicitudin
              semper ornare dolor augue auctor eget nisl.Lorem ipsum dolor sit
              amet.
            </p>
            <p>
              Blandit feugiat viverra est tortor commodo, tellus. Neque,
              pellentesque diam, id felis viverra diam. Molestie sollicitudin
              semper ornare dolor augue auctor eget nisl.Lorem ipsum dolor sit
              amet.
            </p>
          </div>

          <div></div>
        </div>

        <div className=" w-100 abn">
          <div>
            <div className="h4"> Latest News:</div>
            <div className="d-flex ">
              <div className="">
                <img src={SP} />
              </div>

              <div className="  d-flex flex-column ">
                <span className="h4 ">
                  {" "}
                  I’m called anti-science I’m just an early...
                </span>
                <span className="text-danger">
                  {" "}
                  Read More <FaGreaterThan />
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
