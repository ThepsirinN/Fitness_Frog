import { Link } from "react-router-dom";
import styles from "./dashboard.module.css";
import user from "./img/img_avatar.png";
import Completion from "./chart/completion";
import Completionmobile from "./chart/completionmobile";
import Days from "./chart/days-spent";
import Daysmobile from "./chart/day-spentmobile";
import SportType from "./chart/sporttype";
import Sportmobile from "./chart/sport-mobile";

const Dashboard = () => {
  return (
    <div className={styles["dashboard-container"]}>
      {/* ========= profile section ========= */}
      <div className={styles["profile"]}>
        <div className={styles["profile-sec-img"]}>
          <div className={styles["profile-img"]}>
            <img
              src={user}
              alt="user"
              width="150px"
              className={styles["img-user"]}
            />
            <button
              type="button"
              className={`${styles["btnProfile"]} btn-light`}
              src="#"
            >
              EDIT PROFILE
            </button>
          </div>
        </div>
        <div className={styles["profile-sec-info"]}>
          <div className={styles["name-gender-age"]}>
            <p className={styles["name"]}>Mr.David BOND</p>
            <p className={styles["gender-age"]}>Male, 40 years</p>
          </div>
          <div className={styles["height-weight"]}>
            <div className={styles["height-weight-side"]}>
              <p className={styles["height"]}>HEIGHT</p>
              <p className={styles["height-num"]}>178cm</p>
            </div>
            <div className={styles["height-weight-side"]}>
              <p className={styles["weight"]}>WEIGHT</p>
              <p className={styles["weight-num"]}>75kg</p>
            </div>
          </div>
          <div className={styles["goal-sec"]}>
            <p className={styles["goal"]}>MY GOAL</p>
            <p className={styles["goal-num"]}>100 DAYS</p>
          </div>
        </div>
      </div>

      {/* ========= box section ========= */}

      <div className={styles["box"]}>
        <div className={styles["box_inside"]}>
          <div className={styles["frame"]}>
            <h1>23.67</h1>
            <p>BMI</p>
          </div>
        </div>
        <div className={styles["box_inside"]}>
          <div className="frame">
            <img
              src={Completion.getUrl()}
              className={styles["completion"]}
              alt="completetion"
            />
            <img
              src={Completionmobile.getUrl()}
              className={styles["completionmobile"]}
              alt="completion-mobile"
            />
            <p>% OF COMPLETION</p>
          </div>
        </div>
        <div className={`${styles["box_inside"]} ${styles["box_down"]}`}>
          <div className="frame">
            <img src={Days.getUrl()} className={styles["dayspent"]} alt="day" />
            <img
              src={Daysmobile.getUrl()}
              className={styles["dayspentmobile"]}
              alt="day-mobile"
            />
            <p>TOTAL DAYS SPENT</p>
          </div>
        </div>
      </div>
      {/* ========= sport progress ========= */}
      <div className={styles["sportType"]}>
        <div className={styles["bar"]}>
          <h2>SPORT PROGRESS</h2>
          <img
            src={SportType.getUrl()}
            className={styles["sportbar"]}
            alt="sport-type"
          />
          <img
            src={Sportmobile.getUrl()}
            className={styles["sportmobile"]}
            alt="sport-type-mobile"
          />
        </div>
        {/* ========= bar-color ========= */}
        <div className={styles["sportColor"]}>
          <div className={styles["sportColor-in"]}>
            <div className={styles["swimming"]}></div>
            <div>
              <p>SWIMMING</p>
            </div>
          </div>
          <div className={styles["sportColor-in"]}>
            <div className={styles["walking"]}></div>
            <div>
              <p>WALKING</p>
            </div>
          </div>
          <div className={styles["sportColor-in"]}>
            <div className={styles["hiking"]}></div>
            <div>
              <p>HIKING</p>
            </div>
          </div>
          <div className={styles["sportColor-in"]}>
            <div className={styles["bicycling"]}></div>
            <div>
              <p>BICYCLING</p>
            </div>
          </div>
          <div className={styles["sportColor-in"]}>
            <div className={styles["running"]}></div>
            <div>
              <p>RUNNING</p>
            </div>
          </div>
        </div>
      </div>

      {/* ========= button ========= */}
      <div className={styles["btn-act"]}>
        <Link to={"/activity"} style={{ textDecoration: "none" }}>
          <button>View/Add/Edit Activity</button>
        </Link>
      </div>
    </div>
  );
};

export default Dashboard;
