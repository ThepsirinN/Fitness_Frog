import styles from "./register.module.css";
import logo from "./img/logo-fitness-fog.png";
import { FaUser, FaLock } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

const Register = () => {
  return (
    <div className={styles["Register"]}>
      <div className={styles["img-bg"]}></div>
      <div className={styles["opa"]}></div>

      <header className={styles["register-logo-header"]}>
        <img src={logo} width="63px" alt="fitness-frog logo" />
        <h3>Fitness Frog</h3>
      </header>

      <main className={styles["register-container"]}>
        <section className={styles["register-title"]}>
          <h1 className="text-dark">Register</h1>
        </section>
        <form className={styles["register-Form"]}>
          <div className={styles["form-group"]}>
            <HiOutlineMail
              className={styles["iconShow"]}
              style={{ fontSize: "2.2rem", color: "#ffffffd9" }}
            />
            <input
              type="email"
              name="email-register"
              id="email-register-id"
              placeholder="E-mail"
            />
          </div>

          <div className={styles["form-group"]}>
            <FaUser
              className={styles["iconShow"]}
              style={{ fontSize: "2rem", color: "#ffffffd9" }}
            />
            <input
              type="text"
              name="username-register"
              id="username-register-id"
              placeholder="Username"
            />
          </div>

          <div className={styles["form-group"]}>
            <FaLock
              className={styles["iconShow"]}
              style={{ fontSize: "2rem", color: "#ffffffd9" }}
            />
            <input
              type="password"
              name="password-register"
              id="password-register-id"
              placeholder="Password"
            />
          </div>

          <div className={styles["form-group"]}>
            <FaLock
              className={styles["iconShow"]}
              style={{ fontSize: "2rem", color: "#ffffffd9" }}
            />
            <input
              type="password"
              name="confirm-password-register"
              id="confirm-password-register-id"
              placeholder="Confirm Password"
            />
          </div>
          <section className={styles["register-button"]}>
            <button type="submit" id={styles["btn-register-id"]}>
              Register
            </button>
          </section>
        </form>
      </main>
    </div>
  );
};

export default Register;
