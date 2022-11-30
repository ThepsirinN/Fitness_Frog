import styles from "./footer.module.css";
import fb from "./image/fb.png";
import IG from "./image/IG.png";
import twitter from "./image/twitter.png";

const Footer = () => {
  return (
    <>
      <footer className={styles["footer"]}>
        {/* <!-- Upper footer --> */}
        <div className={styles["footer_info"]}>
          <form className={styles["footer_form"]}>
            <button className="btn btn-lg btn-primary">subscribe</button>
            <input
              className={styles["form-control form-control-lg"]}
              type="email"
              name="email"
              placeholder="Your email here"
            />
          </form>

          <div className={styles["footer_follow"]}>
            <h3 className={styles["footer_follow_text"]}>FOLLOW US</h3>

            <ul className={styles["footer_follow_link"]}>
              <a href="www.facebook.com">
                <img src={fb} alt="facebook" />
              </a>
              <a href="www.instragram.com">
                <img src={IG} alt="instagram" />
              </a>
              <a href="www.twitter.com">
                <img src={twitter} alt="twitter" />
              </a>
            </ul>
          </div>
        </div>

        {/* <!-- Bottom footer --> */}
        <div className={styles["footer_bottom"]}>
          <ul>
            <p className={styles["footer_bottom_copyright"]}>
              Copyright &copy;
            </p>
            <p className={styles["copyright--mobile"]}>
              &copy; 2022 fitness Frog. All rights reserved
            </p>
            <button className={styles["bottom_link"]}>Fitness Frog</button>
            <button className={styles["bottom_link"]}>About Us</button>
            <button className={styles["bottom_link"]}>Privacy Policy</button>
            <button className={styles["bottom_link"]}>
              Terms & Conditions
            </button>
            <button className={styles["bottom_link"]}>Contact Us</button>
          </ul>
        </div>
      </footer>
    </>
  );
};

export default Footer;
