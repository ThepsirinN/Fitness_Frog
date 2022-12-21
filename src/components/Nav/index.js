import styles from "./nav.module.css";
import frog from "./img/frog.png";
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
      setNavMobile("flex");
    } else if ("flex") {
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
      <nav className={`${styles["navbar"]} ${styles["bg-dark"]}`}>
        <div className={styles["welcome"]}>
          <Link to={"/dashboard"} style={{ textDecoration: "none" }}>
            <h1>Fitness Frog</h1>
            <img src={frog} alt="frog-logo" />
          </Link>
          {/* name from Input {name}*/}
        </div>
        {/* "Hamburger menu" / "Bar icon" to toggle the navigation links */}
        <a href="/" className={styles["menu-icon"]} onClick={myFunction}>
          <CgMenuGridR
            className={styles["mobile-menu"]}
            style={{ color: "#fff", width: "2rem", height: "2rem" }}
          />
        </a>
      </nav>
      <div className={styles["btn-mobile"]} style={{ display: navMobile }}>
        <Link to={"/dashboard"} style={{ textDecoration: "none" }}>
          <button type="button" className={styles["btnNav"]}>
            HOME
          </button>
        </Link>
        <button
          type="button"
          className={styles["btnNav"]}
          onClick={handleOnclickLogout}
        >
          LOGOUT
        </button>
      </div>
    </div>
  );
  const DestopJSX = (
    <div>
      <nav className={`${styles["navbar"]} ${styles["bg-dark"]}`}>
        <div className={styles["welcome"]}>
          <Link to={"/dashboard"} style={{ textDecoration: "none" }}>
            <h1>Fitness Frog</h1> {/* name from Input {name}*/}
            <img src={frog} alt="frog-logo" />
          </Link>
        </div>
        <div className={styles["btn-group"]}>
          <Link to={"/dashboard"} style={{ textDecoration: "none" }}>
            <button type="button" className={styles["btnNav"]}>
              HOME
            </button>
          </Link>
          <button
            type="button"
            className={styles["btnNav"]}
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
