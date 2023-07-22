import { Link } from "react-router-dom";
import navlogo from "../../assets/img/softwarelogo.webp";
import { useState } from "react";
const Navbar = () => {
  let [closeOpen, setCloseOpen] = useState(true);
  let togglefun = () => {
    if (closeOpen) {
      setCloseOpen(false);
    } else {
      setCloseOpen(true);
    }
  };
  return (
    <>
      <header>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="navbar-box">
                <nav className="navbar navbar-expand-lg sticky-top fixed-top">
                  <Link className="navbar-brand" to="#">
                    <img src={navlogo} height="80" alt="" />
                    HR Service
                  </Link>
                  <button
                    className="navbar-toggler navbar-toggle"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                  >
                    {closeOpen ? (
                      <span
                        className="navbar-toggler-icon"
                        onClick={togglefun}
                      ></span>
                    ) : (
                      <span className="" onClick={togglefun}>
                        &times;
                      </span>
                    )}
                  </button>
                  <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                      <li className="nav-item list_nav">
                        <Link
                          className="nav-link active"
                          aria-current="page"
                          to="/"
                        >
                          Home
                        </Link>
                      </li>
                      <li className="nav-item list_nav">
                        <Link className="nav-link" to="/about">
                          About&nbsp;Us
                        </Link>
                      </li>
                      <li className="nav-item list_nav">
                        <Link className="nav-link" to="/Services">
                          Services
                        </Link>
                      </li>
                      <li className="nav-item list_nav">
                        <Link className="nav-link" to="/Product">
                          Portfolio
                        </Link>
                      </li>
                      <li className="nav-item list_nav">
                        <Link className="nav-link" to="/Product">
                          Contact
                        </Link>
                      </li>
                    </ul>
                    <div className="social_media-list">
                      <div className="social_media">
                        <a href="#">+917738442552</a>
                      </div>
                    </div>
                  </div>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;
