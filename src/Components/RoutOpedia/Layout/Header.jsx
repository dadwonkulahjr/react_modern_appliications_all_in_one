import React from "react";
import logo from "../../../images/react_logo.png";
import Footer from "./Footer";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg fixed-top navbar-dark bg-dark">
        <div className="container-fluid">
          <img
            src={logo}
            style={{ width: "35px", verticalAlign: "top" }}
            alt=""
            className="img-fluid"
          />
          <Link
            href="/"
            style={{ textDecoration: "none" }}
            className="text-white-50"
          >
            REACT COURSE
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "nav-link active text-danger" : "nav-link"
                  }
                  aria-current="page"
                  to="/"
                >
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "nav-link active text-danger" : "nav-link"
                  }
                  to="/about"
                >
                  About Us
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "nav-link active text-danger" : "nav-link"
                  }
                  to="/cryptodetail/btc/1996"
                >
                  Crypto Detail
                </NavLink>
              </li>
              <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Product
                </Link>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <Link className="dropdown-item" to="/product">
                      Product
                    </Link>
                  </li>
                  <li>
                    <NavLink className="dropdown-item" to="/product/list">
                      Product List
                    </NavLink>
                  </li>
                  <li>
                    <NavLink className="dropdown-item" to="/product/create">
                      Product Create
                    </NavLink>
                  </li>
                  {/* <li><hr class="dropdown-divider"></li> */}
                  <li>
                    <NavLink className="dropdown-item" to="/product/details/3">
                      Product Details
                    </NavLink>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link disabled"
                  href="#"
                  tabindex="-1"
                  aria-disabled="true"
                >
                  Disabled
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <Footer />
    </div>
  );
};

export default Header;
