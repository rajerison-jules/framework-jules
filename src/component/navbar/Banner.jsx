import React from "react";
import "./NavbarStyle.css";
import banner from "./../../assets/img/banner-1.png";
import illustr from "./../../assets/img/health-family-1.png";
import icon from "./../../assets/img/tick.png";

export default function Banner() {
  return (
    <div>
      <div className=" m-0 mt-0 w-100 bd-highlight banner--perso  ">
        <div className="  mt-0  m-5 mb-0 pl-5 margin--perso d-flex align-items-center position--perso   ">
          <div className=" m-3 ml-5 titre--container ">
            <span className="sous--titre">HELLO, WE ARE FINCORP </span>
            <br />
            <span className=" mt-4 h1 bold titre--perso">
              {" "}
              Insurance <br /> made easy.
            </span>
            <br />
            <span className=" mt-4 btn button--titre">Get your free Quote</span>
            <br />
          </div>
          <div className="image--container pl-5 m-5  mt-0 p-5   ">
            <img width="1000px  " src={banner} alt="banner" />
          </div>
        </div>
      </div>
      <div className="position--perso2 banner--perso  w-100 ">
        <div className="w-100 text-center mb-5">
          <span className="h3  titre--perso"> A new take on insurance</span>
          <br />
          <span className="sous--titre">
            Great for individuals and business{" "}
          </span>
        </div>
        <div className=" mt-5 containt--body d-flex align-items-start">
          <div>
            <img width="100%" src={illustr} alt="illustration" />
          </div>
          <div className="contenue--text text-primary bold">
            <h5>
              Monotonectally deploy seamless data and resource maximizing
              systems.{" "}
            </h5>
            <h6 className="paragraph">
              Great for individuals and small families up to 4 members.{" "}
            </h6>
            <p className="paragraph small text-secondary">
              A strong, up-to-date, employee benefits health insurance program
              is vital for attracting and retaining good employees. It takes
              diligence, creativity and attention to detail to ensure you are
              getting the best “bang for your buck” each and every year.
            </p>
            <ul className="list-group w-100">
              <li className="list-group-item border-0 d-flex align-items-center w-100 list--perso m-1 cursor-pointer">
                <span>
                  <img src={icon} alt="icon" />
                </span>

                <span className="m-2">
                  <h6>COMPREHENSIVE INSURANCE</h6>
                  <p className="text-secondary small paragraph">
                    Dynamically repurpose e-business users rather than granular
                    products.
                  </p>
                </span>
              </li>
              <li className="list-group-item border-0 d-flex align-items-center w-100 list--perso m-1">
                <span>
                  <img src={icon} alt="icon" />
                </span>

                <span className="m-2">
                  <h6>SUPPORT IS JUST CALL AWAY</h6>
                  <p className="text-secondary small paragraph">
                    Rapidiously customize value-added platforms compliant action
                    items.
                  </p>
                </span>
              </li>
              <li className="list-group-item border-0 d-flex align-items-center w-100 list--perso m-1">
                <span>
                  <img src={icon} alt="icon" />
                </span>

                <span className="m-2">
                  <h6>SAY GOODBYE TO PAPERWORK</h6>
                  <p className="text-secondary small paragraph">
                    Globally deliver economically sound communities
                    relationships.
                  </p>
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
