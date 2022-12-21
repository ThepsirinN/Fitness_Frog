import { Link } from "react-router-dom";
import styles from "./Landing.module.css";

const Landing = () => {
  return (
    <div className={styles["Landing"]}>
      <div className={styles["Landing-Bg-img-opacity"]}></div>

      {/*navbar start*/}
      <div className={styles["Landing-Nav"]}>
        <div className={styles["Landing-Nav-left"]}>
          <Link to={"/"} style={{ textDecoration: "none" }}>
            <img
              className={styles["Landing-logo"]}
              src={require("./img/logo-fitness-fog.png")}
              alt="Fitness-Frog-Logo"
            />
          </Link>
          <Link to={"/"} style={{ textDecoration: "none" }}>
            <div className={styles["Landing-logo-p"]}>FITNESS FROG</div>
          </Link>
        </div>
        <div className={styles["Landing-Nav-right"]}>
          <Link to={"./about-us"} style={{ textDecoration: "none" }}>
            <div className={styles["Landing-AboutUs"]}>ABOUT US</div>
          </Link>
        </div>
      </div>
      {/*navbar end*/}

      {/*landing start-*/}
      <div className={styles["Landing-Container"]}>
        <div className={styles["Landing-Landing-left"]}>
          <div className={styles["Landing-Text"]}>
            <h1 className={styles["Landing-Text-StartYour"]}>START YOUR</h1>
            <h2 className={styles["Landing-Text-Workout"]}>
              WORKOUT JOURNEY TODAY
            </h2>
          </div>

          <div className={styles["Landing-Button"]}>
            <div className={styles["Landing-Button1"]}>
              <Link to={"./login"} style={{ textDecoration: "none" }}>
                <button className={styles["Landing-Login"]}>Log in</button>
              </Link>
              <Link to={"./register"} style={{ textDecoration: "none" }}>
                <button className={styles["Landing-Register"]}>Register</button>
              </Link>
            </div>

            {/*<div className={styles["Landing-Login-with-google-btn"]}>
                            <div className={styles["Landing-Box-a"]} href="#">
                                <img className={styles["Landing-Box-img"]} src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTgiIGhlaWdodD0iMTgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48cGF0aCBkPSJNMTcuNiA5LjJsLS4xLTEuOEg5djMuNGg0LjhDMTMuNiAxMiAxMyAxMyAxMiAxMy42djIuMmgzYTguOCA4LjggMCAwIDAgMi42LTYuNnoiIGZpbGw9IiM0Mjg1RjQiIGZpbGwtcnVsZT0ibm9uemVybyIvPjxwYXRoIGQ9Ik05IDE4YzIuNCAwIDQuNS0uOCA2LTIuMmwtMy0yLjJhNS40IDUuNCAwIDAgMS04LTIuOUgxVjEzYTkgOSAwIDAgMCA4IDV6IiBmaWxsPSIjMzRBODUzIiBmaWxsLXJ1bGU9Im5vbnplcm8iLz48cGF0aCBkPSJNNCAxMC43YTUuNCA1LjQgMCAwIDEgMC0zLjRWNUgxYTkgOSAwIDAgMCAwIDhsMy0yLjN6IiBmaWxsPSIjRkJCQzA1IiBmaWxsLXJ1bGU9Im5vbnplcm8iLz48cGF0aCBkPSJNOSAzLjZjMS4zIDAgMi41LjQgMy40IDEuM0wxNSAyLjNBOSA5IDAgMCAwIDEgNWwzIDIuNGE1LjQgNS40IDAgMCAxIDUtMy43eiIgZmlsbD0iI0VBNDMzNSIgZmlsbC1ydWxlPSJub256ZXJvIi8+PHBhdGggZD0iTTAgMGgxOHYxOEgweiIvPjwvZz48L3N2Zz4='/>
                                <div className={styles["Landing-Box-p"]}>Sign in with Google</div>
                            </div>
    </div>*/}
          </div>

          <div className={styles["Landing-Landing-right"]}>
            <div className={styles["Landing-Images"]}>
              <img
                className={styles["Landing-Shape"]}
                src={require("./img/blob-haikei.png")}
                alt="Landing-shape"
              />
              <img
                className={styles["Landing-Man"]}
                src={require("./img/fitness.png")}
                alt="Landing-man"
              />
            </div>
          </div>
        </div>
        {/*landing end-*/}
      </div>
    </div>
  );
};

export default Landing;
