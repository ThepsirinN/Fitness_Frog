import styles from "./footer.module.css";
import fb from "./image/fb.png";
import IG from "./image/IG.png";
import twitter from "./image/twitter.png";
import { Link } from "react-router-dom";

const Footer = () => {
  const year = new Date();
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
              <a href="https://www.facebook.com/">
                <img src={fb} alt="facebook" />
              </a>
              <a href="https://www.instragram.com/">
                <img src={IG} alt="instagram" />
              </a>
              <a href="https://www.twitter.com/">
                <img src={twitter} alt="twitter" />
              </a>
            </ul>
          </div>
        </div>

        {/* <!-- Bottom footer --> */}
        <div className={styles["footer_bottom"]}>
          <ul>
            <p className={styles["footer_bottom_copyright"]}>
              Copyright &copy; {year.getFullYear()}
            </p>
            <p className={styles["copyright--mobile"]}>
              &copy; {year.getFullYear()} Fitness Frog. All rights reserved
            </p>
            <Link to={"/"} style={{ textDecoration: "none" }}>
              <button className={styles["bottom_link"]}>Fitness Frog</button>
            </Link>
            <Link to={"/about-us"} style={{ textDecoration: "none" }}>
              <button className={styles["bottom_link"]}>About Us</button>
            </Link>
            <Link to={"#"} style={{ textDecoration: "none" }}>
              <button className={styles["bottom_link"]}>Privacy Policy</button>
            </Link>
            <Link to={"#"} style={{ textDecoration: "none" }}>
              <button className={styles["bottom_link"]}>
                Terms & Conditions
              </button>
            </Link>

            <button className={styles["bottom_link"]}>Contact Us</button>
          </ul>
        </div>
      </footer>
    </>
  );
};

export default Footer;
