import React from "react";

import LK from "./../assets/images/link-2.png";
import BG from "./../assets/images/star.png";
import ST from "./../assets/images/star-1.png";
import SP from "./../assets/images/Image (1).png";
import VC from "./../assets/images/Vector.svg";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
export default function Section6() {
  const percentage = 66;
  return (
    <div className=" sec6 d-flex align-items-center">
      <div className="  entrer align-items-start w-100 p-5">
        <div className=" mab2">
          <div>
            <div className=" w-100">
              <h2 className="text-uppercase">Schedule</h2>
            </div>
            <div className=" w-100">
              <span className="h3  titre4">
                <i className="me">let's See</i> my schedule time! When i &nbsp;{" "}
                <span className="titre4s">Free </span> .
              </span>
              <div className="pt-5">
                <p>Blandit feugiat viverra est tortor commodo, tellus Neque.</p>
                <p>
                  Diam, id felis viverra diam. Molestie sollicitudin semper
                  ornare dolor augue auctor eget nisl.Lorem ipsum dolor sit.
                </p>
              </div>
              <h4 className="">Medical check-up reviews:</h4>
              <div className="d-flex">
                <h6 className="m-3 ">
                  {" "}
                  <img src={LK} /> Heartbeat Rate
                </h6>
                <h6 className="m-3">
                  {" "}
                  <img src={LK} /> Glucose Tolerance Test
                </h6>
              </div>
              <div className="d-flex">
                <h6 className="m-3">
                  {" "}
                  <img src={LK} /> Blood Pressure
                </h6>
                <h6 className="m-3">
                  {" "}
                  <img src={LK} /> Blood Sugar Level
                </h6>
              </div>
            </div>
          </div>
        </div>
        <div className="  pt-0 dis2 ">
          <div
            className=" minicard2 d-flex justify-content-center flex-column
          "
          >
            <div className="w-100 d-flex justify-content-center">
              {" "}
              <h6 className="miniTT">Get an appoinment</h6>
            </div>
            <div className="w-100 d-flex justify-content-between">
              {" "}
              <div>
                Date <br />
                <select>
                  <option>25 AUG</option>
                  <option>26 AUG</option>
                  <option>27 AUG</option>
                  <option>28 AUG</option>
                  <option>29 AUG</option>
                </select>
              </div>
              <div>
                Time
                <br />
                <select>
                  <option>11:30 PM</option>
                  <option>12:30 PM</option>
                  <option>13:30 PM</option>
                  <option>14:30 PM</option>
                  <option>15:30 PM</option>
                </select>
              </div>
              <div>
                Location
                <br />
                <select>
                  <option>Sen Road</option>
                </select>
              </div>
            </div>
            <div className="w-100 d-flex justify-content-center mt-5">
              {" "}
              <button className="btn btn-primary btn--style">Select</button>
            </div>
          </div>
          <div className="">
            <img className="ima" src={SP} />
          </div>
        </div>
      </div>
    </div>
  );
}
