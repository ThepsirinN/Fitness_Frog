import React from "react";

import styles from './AboutUs.module.css';

const AboutUs = ()=>{

    // useEffect(() => {
    //     document.body.className = 'AboutUs-body';
    // }, []);

    return(
        <div className={styles["AboutUs"]}>

        <img className={styles["AboutUs-Bg-img-opacity"]} src={require("./img/routines-sporten-gym-opbouwen-1-scaled.jpg")}/>
        
        {/*navbar start*/}
        <div className={styles["AboutUs-Nav"]}>
            <div className={styles["AboutUs-Nav-left"]}>
                <img className={styles["AboutUs-logo"]} src={require('./img/logo-fitness-fog.png')} />
                <div className={styles["AboutUs-logo-p"]}>FITNESS FROG</div>
            </div>
            <div className={styles["AboutUs-Nav-right"]}>
                <div className={styles["AboutUs-Home"]} href="#">HOME</div>
            </div>
        </div>
        {/*navbar end*/}

        {/*landing start-*/}
        <div className={styles["AboutUs-Container"]}>

            <div className={styles["AboutUs-Container-left"]}>
                <div className={styles["AboutUs-Container-left-AoutUs"]}>ABOUT US</div>
            </div>

            <div className={styles["AboutUs-Box"]}>
                <div className={styles["AboutUs-Text"]}>
                    <div className={styles["AboutUs-Text-p"]}>" We are a social wellness club created to nurture a healthier, more fulfilling life. Our offerings you include a well-rounded balance of services, coaching, and amenities designed to strengthen your physical, social, spiritual, inspiration, motivation, friend workout, Well being, Good health life cycle
                    <br/>We want to help our members go further, so if you have any suggestions about our clubs, Teams, classes, personal training sessions or anything else, please come in and talk to one of our team member or if you prefer, drop us a note via our online enquiry forms "</div>
                    <div className={styles["AboutUs-Text-StartYour"]}>START YOUR</div>
                    <div className={styles["AboutUs-Text-Workout"]}>WORKOUT JOURNEY TODAY</div>
                </div>
                <div className={styles["AboutUs-Button"]}>
                    <div className={styles["AboutUs-Join"]}>Join now</div>
                </div>
            </div>

            <div className={styles["AboutUs-Landing-right"]}>
                <div className={styles["AboutUs-Images"]}>
                    <img className={styles["AboutUs-Shape"]} src={require("./img/blob-haikei.png")}/>
                    <img className={styles["AboutUs-Woman"]} src={require("./img/fitness2.png")}/>
                </div>
            </div>
        </div>
        
        {/*landing end-*/}

        </div>
    )
}

export default AboutUs;