import React from "react";
import image from "./../assets/img/family-illustration.svg";
import shield from "./../assets/img/shield-1.png";

export default function Section7() {
  return (
    <div className="w-100 banner--perso">
      <div className="d-flex">
        <div className=" list--quest text-center m-5 margin--perso">
          <ul className="list-group">
            <li className="titre--perso list-group-item text-primary">
              What are the documents required for claiming?
            </li>
            <li className="list-group-item small sous-titre text-secondary">
              A pre-authorization form is required in case of cashless claims
              which are to be submitted to the TPA. Other documents might also
              be required and you should have the knowledge of the required
              documents.
            </li>
            <li className="titre--perso list-group-item text-primary">
              Which are the network hospitals in your vicinity?
            </li>
            <li className="titre--perso list-group-item text-primary">
              Will I get covered for my pre-existing illnesses?
            </li>
            <li className="titre--perso list-group-item text-primary">
              Is maternity covered in health insurance policies?
            </li>
          </ul>
        </div>
        <div className="familly">
          <img width="700" src={image} alt="" />
        </div>
      </div>
      <div className="w-100 d-flex align-items-center justify-content-center gar--perso2 ">
        <div className=" m-5 gar  d-flex align-items-center justify-content-between">
          <div className=" imgGar">
            <img className="imgar" src={shield} alt="" />
          </div>
          <div className="d-flex w-100 justify-content-between align-items-center">
            <div>
              <h5 className="titre--perso">Insurance made easy</h5>
              <span className="small text-secondary">
                At fincorp, we are commited to provide top-notch services to our
                customers.
              </span>
            </div>

            <div>
              <span className="btn btn-success btn-gar">
                Get your free Quote
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
