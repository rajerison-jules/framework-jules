import logo from "./../../assets/img/logo.png";
import "./NavbarStyle.css";
function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light m-0 mt-0 border-bottom w-100 bd-highlight position-absolute">
      <div className=" d-md-flex align-items-center    mt-0  m-5 mb-0 pl-5 margin--perso ">
        <a className="navbar-brand" href="/">
          <img className="m-3" src={logo} alt="logo" />{" "}
        </a>
        <button
          className="navbar-toggler  border-0 menu  "
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon "></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <a className="nav-link" href="/">
                <span className="m-3">For you & familly </span>{" "}
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">
                <span className="m-3">For Business </span>{" "}
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
