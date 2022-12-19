import "./nav.css";
import { Link } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import { CgMenuGridR } from "react-icons/cg";
import { useState } from "react";
import axios from "axios";
import Cookies from "universal-cookie";

const Nav = () => {
  const cookies = new Cookies();
  const [navMobile, setNavMobile] = useState("none");

  const isMobile = useMediaQuery({
    query: "(min-width: 320px) and (max-width: 479px)",
  });
  const isDesktop = useMediaQuery({ minWidth: 480 });

  const myFunction = (e) => {
    e.preventDefault();
    if (navMobile === "none") {
      setNavMobile("block");
    } else if ("block") {
      setNavMobile("none");
    }
  };

  const handleOnclickLogout = async (e) => {
    e.preventDefault();
    let response = await axios.put(
      process.env.REACT_APP_BACKEND_ROUTE + "/user/logout",
      {
        user: cookies.get("user"),
        refreshToken: cookies.get("refreshToken"),
      }
    );

    if (response) {
      cookies.remove("refreshToken");
      cookies.remove("user");
      return window.location.assign("./");
    }
  };

  const mobileJSX = (
    <div>
      <nav className="navbar navbar-dark bg-dark">
        <div className="welcome">
          <h1>Fitness Frog</h1>
          {/* name from Input {name}*/}
        </div>
        {/* "Hamburger menu" / "Bar icon" to toggle the navigation links */}
        <a href="/" className="menu-icon" onClick={myFunction}>
          <CgMenuGridR
            className="mobile-menu"
            style={{ color: "#fff", width: "2rem", height: "2rem" }}
          />
        </a>
        <div className="btn-mobile" style={{ display: navMobile }}>
          <Link to={"/dashboard"} style={{ textDecoration: "none" }}>
            <button type="button" className="btn btn-outline-light btnNav">
              HOME
            </button>
          </Link>
          <button
            type="button"
            className="btn btn-outline-light btnNav"
            onClick={handleOnclickLogout}
          >
            LOGOUT
          </button>
        </div>
      </nav>
    </div>
  );
  const DestopJSX = (
    <div>
      <nav className="navbar navbar-dark bg-dark">
        <div className="welcome">
          <h1>Fitness Frog</h1> {/* name from Input {name}*/}
        </div>
        <div className="btn-group">
          <Link to={"/dashboard"} style={{ textDecoration: "none" }}>
            <button type="button" className="btn btn-outline-light btnNav">
              HOME
            </button>
          </Link>
          <button
            type="button"
            className="btn btn-outline-light btnNav"
            onClick={handleOnclickLogout}
          >
            LOGOUT
          </button>
        </div>
      </nav>
    </div>
  );
  return (
    <div>
      {isMobile && mobileJSX}

      {isDesktop && DestopJSX}
    </div>
  );
};

export default Nav;
