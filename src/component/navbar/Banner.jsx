import React from "react";
import "./NavbarStyle.css";
import banner from "./../../assets/images/Image.png";
import img2 from "./../../assets/images/Icon.png";
import img4 from "./../../assets/images/Shape.png";
import img3 from "./../../assets/images/Icon-1.png";
import img5 from "./../../assets/images/Blur 3.png";
import img6 from "./../../assets/images/Blur 4.png";
import img7 from "./../../assets/images/Blur 2.png";
import "animate.css";
export default function Banner() {
  return (
    <div className="banner--style">
      <div className="d-flex justify-content-between">
        <div className="d-flex justify-content-center  w-75 align-items-center position-relative content2">
          <div className="bg-blur3">
            <img className="im1" src={img7} />
          </div>
          <div className="text--ban position-absolute ">
            <div className="titre animate__animated animate__backInDown">
              {" "}
              Stay Strong, Live long.{" "}
            </div>
            <div className="titre2  animate__animated animate__backInLeft">
              {" "}
              <span className="titre2s"> Take care </span> of your body and it
              will take care of <span className="titre2s"> you </span>.
            </div>
            <div className="titre3 animate__animated animate__backInLeft">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. blandit
              feugiat viverra est suspendisse porta tortor commodo, tellus.
              Neque,
            </div>
            <div className="mt-5 ">
              {" "}
              <button className="btn btn-primary btn--style2">
                Get Appointment
              </button>
              <button className=" btn btn-primary btn--style3">
                View Profile
              </button>
            </div>
          </div>
        </div>
        <div className="position relative content3 w-100 ">
          <div className="imag3 ">
            <img className="im2" src={img2} />
          </div>
          <div className="imag2">
            <img className="im2" src={img3} />
          </div>
          <div className="imag1">
            <img className="im1" src={img4} />
          </div>
          <div className="">
            <img className="imag" src={banner} />
          </div>
          <div className="bg-blur">
            <img className="im1" src={img5} />
          </div>
          <div className="bg-blur2">
            <img className="im1" src={img6} />
          </div>
        </div>
      </div>
    </div>
  );
}
