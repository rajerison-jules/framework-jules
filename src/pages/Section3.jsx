import React from "react";
import Card from "./../component/card/Step";
import img1 from "./../assets/images/Icon.svg";
import img2 from "./../assets/images/Icon@.png";
import img3 from "./../assets/images/Icon2.png";
import img4 from "./../assets/images/Icown.png";
import { AnimatedOnScroll } from "react-animated-css-onscroll";
export default function Section2() {
  return (
    <div className="step--component m-5 mb-0 pl-5">
      <AnimatedOnScroll animationIn="bounceInLeft">
        <div className="w-100 text-center mb-5">
          <span className="h3  titre4">
            My Skill <span className="titre4s">depends</span> on work.
          </span>
          <br />
          <p className="m-5 text-normal2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. blandit
            feugiat viverra est suspendisse porta tortor commodo, tellus. Neque,
          </p>
        </div>
      </AnimatedOnScroll>
      <div className=" row  list-card">
        <Card
          anim={"titre animate__animated animate__backInLeft"}
          bg="#F25A3C"
          title="Patient safety"
          niveau={img1}
        />
        <Card
          anim={"titre animate__animated animate__backInDown"}
          bg="#CC7926"
          title="Well Cared"
          niveau={img2}
        />
        <Card
          anim={"titre animate__animated animate__backInDown"}
          bg="#739D1E"
          title="24/7 Service"
          niveau={img3}
        />
        <Card
          anim={"titre animate__animated animate__backInRight"}
          bg="#20BBA1"
          title="Online support"
          niveau={img4}
        />
      </div>
    </div>
  );
}
