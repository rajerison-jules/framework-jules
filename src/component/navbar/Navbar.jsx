import logo from "./../../assets/images/LOGO.svg";
import shape from "./../../assets/images/Shapze.png";
import img5 from "./../../assets/images/Blur 1.png";
import "./NavbarStyle.css";
import "animate.css";
function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light m-0 m-0 p-0 w-100 position-absolute  bg-0">
      <div className="position-absolute">
        <img src={shape} alt="logo" />
      </div>
      <div className="bg-blur">
        <img className="im1" src={img5} />
      </div>
      <div className=" d-flex contain--style margin--perso  position-relative p-3 ">
        <span className="navbar-brand position-relative d-flex logo-display">
          <img
            className="ml-0 m-3 animate__animated animate__rubberBand"
            src={logo}
            alt="logo"
          />{" "}
        </span>
        <button
          className="navbar-toggler  border-0 menu  m-3"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon  "></span>
        </button>

        <div
          className="collapse navbar-collapse   w-100 position-relative navbar--style  animate__animated animate__backInDown "
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item  ">
              <span className="m-3 nav-link text-normal">Home</span>{" "}
            </li>
            <li className="nav-item ">
              <span className="m-3 nav-link text-normal">Work </span>{" "}
            </li>
            <li className="nav-item ">
              <span className="m-3 nav-link text-normal">About </span>{" "}
            </li>
            <li className="nav-item ">
              <span className="m-3 nav-link text-normal">Schedule </span>{" "}
            </li>
            <li className="nav-item ">
              <span className="m-3 nav-link text-normal">Reviews </span>{" "}
            </li>
            <li className="nav-item ">
              <span className="m-3 nav-link text-normal">Blog </span>{" "}
            </li>
            <div></div>
          </ul>
          <div className="navbar-expand-sm w-100 d-flex align-items-center justify-content-end content--button ml-5 ">
            <button className="btn btn-primary btn--style">Let’s Talk</button>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
