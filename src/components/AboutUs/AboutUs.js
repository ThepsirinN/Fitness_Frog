import { Link } from "react-router-dom";
import styles from "./AboutUs.module.css";
import fitnesslogo from "./img/logo-fitness-fog.png";

const AboutUs = () => {
  return (
    <div className={styles["AboutUs"]}>
      <div className={styles["AboutUs-img-bg"]}></div>
      <div className={styles["AboutUs-Bg-img-opacity"]}></div>

      {/*navbar start*/}
      <div className={styles["AboutUs-Nav"]}>
        <div className={styles["AboutUs-Nav-left"]}>
          <Link to={""} style={{ textDecoration: 'none' }}>
            <img
              className={styles["AboutUs-logo"]}
              src={fitnesslogo}
              alt="About-Us-Logo"
            />
          </Link>
          <Link to={"../"} style={{ textDecoration: "none" }}>
            <div className={styles["AboutUs-logo-p"]}>FITNESS FROG</div>
          </Link>
        </div>
        <Link className="text-white" to={"../"} style={{ textDecoration: "none" }}>
        <div className={styles["AboutUs-Nav-right"]}>
          <div className={styles["AboutUs-Home"]}>HOME</div>
          </div>
        </ Link>

      </div>
      {/*navbar end*/}

      {/*landing start-*/}
      <div className={styles["AboutUs-Container"]}>
        <div className={styles["AboutUs-Container-left"]}>
          <div className={styles["AboutUs-Container-left-AoutUs"]}>
            ABOUT US
          </div>

        </div>

        <div className={styles["AboutUs-Box"]}>
          <div className={styles["AboutUs-Text"]}>
            <div className={styles["AboutUs-Text-p"]}>
              " We are a social wellness club created to nurture a healthier,
              more fulfilling life. Our offerings you include a well-rounded
              balance of services, coaching, and amenities designed to
              strengthen your physical, social, spiritual, inspiration,
              motivation, friend workout, Well being, Good health life cycle
              <br />
              We want to help our members go further, so if you have any
              suggestions about our clubs, Teams, classes, personal training
              sessions or anything else, please come in and talk to one of our
              team member or if you prefer, drop us a note via our online
              enquiry forms "
            </div>
            <div className={styles["AboutUs-Text-StartYour"]}>START YOUR</div>
            <div className={styles["AboutUs-Text-Workout"]}>
              WORKOUT JOURNEY TODAY
            </div>
          </div>
          <Link to={"../register"} style={{ textDecoration: "none" }}>
          <div className={styles["AboutUs-Button"]}>
            <div className={styles["AboutUs-Join"]}>Join now</div>
            </div>
          </Link>
        </div>

        <div className={styles["AboutUs-Landing-right"]}>
          <div className={styles["AboutUs-Images"]}>
            <img
              className={styles["AboutUs-Shape"]}
              src={require("./img/blob-haikei.png")}
              alt="AboutUs-Shape"
            />
            <img
              className={styles["AboutUs-Woman"]}
              src={require("./img/fitness2.png")}
              alt="AboutUs-Woman"
            />
          </div>
        </div>
      </div>

      {/*landing end-*/}
    </div>
  );
};

export default AboutUs;
