import { Link } from "react-router-dom";
import styles from "./dashboard.module.css";
import user from "./img/img_avatar.png";
import completionChart from "./chart/completion";
import CompletionmobileChart from "./chart/completionmobile";
import DaysChart from "./chart/days-spent";
import DaysmobileChart from "./chart/day-spentmobile";
import SportType from "./chart/sporttype";
import Sportmobile from "./chart/sport-mobile";
import Cookies from "universal-cookie";
import GetUserData from "../../hook/userDetail/GetProfileDataHook";
import GetCardData from "../../hook/card/GetCardHook";
import { useEffect, useState } from "react";

const Dashboard = () => {
  const cookies = new Cookies();
  const { response, error, loading } = GetUserData(
    cookies.get("user"),
    cookies.get("refreshToken")
  );
  
  const { responseCard, errorCard, loadingCard } = GetCardData(
    cookies.get("user"),
    cookies.get("refreshToken")
  );


  const [totalActivitiesLength, setTotalActivitiesLength] = useState(1);
  const [successActivity, setSuccessActivity] = useState(0);
  const [totalDateSpend, setTotalDateSpend] = useState(0);
  const [sportType, setSportType] = useState([0,0,0,0,0]);
 
  const title = ["", "Mr.", "Ms."];
  const genderName = ["", "Male", "Female"];

  useEffect(() => {
    const responseData = [];
    let successCount = 0;
    let successDateSpendArr = []
    for (let i in responseCard) {
      responseData.push(responseCard[i]);
      if (responseCard[i].status === 1) {
        successCount++;
        if(!successDateSpendArr.includes(responseCard[i].startDate.slice(0,-13))){
          successDateSpendArr.push(responseCard[i].startDate.slice(0,-13))
        }
      }
      sportType[responseCard[i].activityType-1]++ // 1 => Running 2 => ...
    }

    const responseDataLength = responseData.length;
    const successDateSpendLength = successDateSpendArr.length

    setTotalActivitiesLength(responseDataLength);
    setSuccessActivity(successCount);
    setTotalDateSpend(successDateSpendLength)
  }, [loadingCard]);

  return (
    !loading &&
    !loadingCard && (
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
              <Link to="/edit-profile">
                <button
                  type="button"
                  className={`${styles["btnProfile"]} btn-light`}
                  src="#"
                >
                  EDIT PROFILE
                </button>
              </Link>
            </div>
          </div>
          <div className={styles["profile-sec-info"]}>
            <div className={styles["name-gender-age"]}>
              <p className={styles["name"]}>{`${title[response.gender]} ${
                response.fullName
              }`}</p>
              <p className={styles["gender-age"]}>
                {genderName[response.gender]},{`${response.age}`} years
              </p>
            </div>
            <div className={styles["height-weight"]}>
              <div className={styles["height-weight-side"]}>
                <p className={styles["height"]}>HEIGHT</p>
                <p className={styles["height-num"]}>{`${response.height}`}cm</p>
              </div>
              <div className={styles["height-weight-side"]}>
                <p className={styles["weight"]}>WEIGHT</p>
                <p className={styles["weight-num"]}>{`${response.weight}`}kg</p>
              </div>
            </div>
            <div className={styles["goal-sec"]}>
              <p className={styles["goal"]}>MY GOAL</p>
              <p className={styles["goal-num"]}>{`${response.goal}`} DAYS</p>
            </div>
          </div>
        </div>

        {/* ========= box section ========= */}

        <div className={styles["box"]}>
          <div className={styles["box_inside"]}>
            <div className={styles["frame"]}>
              <h1>
                {Math.round(
                  (response.weight / ((response.height / 100) ^ 2)) * 100
                ) / 100}
              </h1>
              <p>BMI</p>
            </div>
          </div>
          <div className={styles["box_inside"]}>
            <div className="frame">
              <img
                src={completionChart(
                  totalActivitiesLength,
                  successActivity
                ).getUrl()}
                className={styles["completion"]}
                alt="completetion"
              />
              <img
                src={CompletionmobileChart(
                  totalActivitiesLength,
                  successActivity
                ).getUrl()}
                className={styles["completionmobile"]}
                alt="completion-mobile"
              />
              <p>% OF COMPLETION</p>
            </div>
          </div>
          <div className={`${styles["box_inside"]} ${styles["box_down"]}`}>
            <div className="frame">
              <img
                src={DaysChart(response.goal,totalDateSpend).getUrl()}
                className={styles["dayspent"]}
                alt="day"
              />
              <img
                src={DaysmobileChart(response.goal,totalDateSpend).getUrl()}
                className={styles["dayspentmobile"]}
                alt="day-mobile"
              />
              <p>SUCCESS DAYS TO GOAL</p>
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
                <p>CYCLING</p>
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
    )
  );
};

export default Dashboard;
