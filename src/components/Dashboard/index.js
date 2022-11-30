import styles from './dashboard.module.css';
import user from './img/user.png';
import Completion from './chart/completion';
import Completionmobile from './chart/completionmobile';
import Days from './chart/days-spent';
import Daysmobile from './chart/day-spentmobile';
import SportType from './chart/sporttype';
import Sportmobile from './chart/sport-mobile';


const Dashboard = () => {

    return (
        <div className={styles["dashboard-container"]}>
            {/* ========= profile section ========= */}
            <div className={styles["profile"]}>
                <div className={styles["profile-sec"]}>
                    <div>
                        <img src={user} alt="user" width="150px" className={styles["img-user"]} />
                    </div>
                    <div>
                        <button type="button" className={`${styles["btnProfile"]} btn-light`} src="#">EDIT PROFILE</button>
                    </div>
                </div>
                <div className={styles["profile-sec"]}>
                    <div className={styles["name-gender-age"]}>
                        <div className={styles["name"]}>
                            Mr.David BOND
                        </div >
                        <div className={styles["gender-age"]}>
                            Male, 40 years
                        </div>
                    </div>
                    <div className={styles["height-weight"]}>
                        <div className={styles["height-weight-side"]}>
                            <div className={styles["height"]}>
                                HEIGHT
                            </div>
                            <div className={styles["height-num"]}>
                                178cm
                            </div>
                        </div>
                        <div className={styles["height-weight-side"]}>

                            <div className={styles["weight"]}>
                                WEIGHT
                            </div>
                            <div className={styles["weight-num"]}>
                                75kg
                            </div>
                        </div>
                    </div>

                </div>
                <div className={styles["profile-sec"]}>
                    <div className={styles["goal"]}>
                        MY GOAL
                    </div>
                    <div className={styles["goal-num"]}>
                        100 DAYS
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
                        <img src={Completion.getUrl()} className={styles["completion"]} />
                        <img src={Completionmobile.getUrl()} className={styles["completionmobile"]} />
                        <p>% OF COMPLETION</p>
                    </div>
                </div>
                <div className={`${styles["box_inside"]} ${styles["box_down"]}`}>
                    <div className="frame">

                        <img src={Days.getUrl()} className={styles["dayspent"]} />
                        <img src={Daysmobile.getUrl()} className={styles["dayspentmobile"]} />
                        <p>TOTAL DAYS SPENT</p>
                    </div>
                </div>
            </div>
            {/* ========= sport progress ========= */}
            <div className={styles["sportType"]}>
                <div className={styles["bar"]}>
                    <h2>SPORT PROGRESS</h2>
                    <img src={SportType.getUrl()} className={styles["sportbar"]} />
                    <img src={Sportmobile.getUrl()} className={styles["sportmobile"]} />
                </div>
                {/* ========= bar-color ========= */}
                <div className={styles["sportColor"]}>
                    <div className={styles["sportColor-in"]}>
                        <div className={styles["swimming"]}>

                        </div>
                        <div>
                            <p>SWIMMING</p>
                        </div>
                    </div>
                    <div className={styles["sportColor-in"]}>
                        <div className={styles["walking"]}>

                        </div>
                        <div>
                            <p>WALKING</p>
                        </div>
                    </div>
                    <div className={styles["sportColor-in"]}>
                        <div className={styles["hiking"]}>

                        </div>
                        <div>
                            <p>HIKING</p>
                        </div>
                    </div>
                    <div className={styles["sportColor-in"]}>
                        <div className={styles["bicycling"]}>

                        </div>
                        <div>
                            <p>BICYCLING</p>
                        </div>
                    </div>
                    <div className={styles["sportColor-in"]}>
                        <div className={styles["running"]}>

                        </div>
                        <div>
                            <p>RUNNING</p>
                        </div>

                    </div>
                </div>
            </div>

            {/* ========= button ========= */}
            <div className={styles["btn-act"]}>
                <button>View/Add/Edit Activity</button>
            </div>
        </div>
    )
}

export default Dashboard;