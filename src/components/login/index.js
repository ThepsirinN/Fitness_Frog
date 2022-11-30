import styles from "./login.module.css";
import logo from "./img/logo-fitness-fog.png";
import { FaUser, FaLock } from "react-icons/fa";
const Login = () => {
  return (
    <div className={styles["Login"]}>
      <div className={styles["img-bg"]}></div>
      <div className={styles["opa"]}></div>

      <header className={styles["logo-header"]}>
        <img src={logo} width="63px" alt="fitness-frog logo" />
        <h3>Fitness Frog</h3>
      </header>
      <main className={styles["login-container"]}>
        <section className={styles["login-header"]}>
          <h1 className="text-white">Fitness Frog</h1>
        </section>
        <section className={styles["login-title"]}>
          <h2>Login</h2>
        </section>
        <form className={styles["login-Form"]}>
          <div className={styles["form-group"]}>
              <FaUser className={styles["iconForm"]} style={{ fontSize: "2rem", color: "#ffffffd9" }} />
            <input
              type="text"
              name="username-login"
              id="username-login-id"
              placeholder="Username"
            />
          </div>
          <div className={styles["form-group"]}>
              <FaLock className={styles["iconForm"]} style={{ fontSize: "2rem", color: "#ffffffd9" }} />
            <input
              type="password"
              name="password-login"
              id="password-login-id"
              placeholder="Password"
            />
          </div>

          <section className={styles["login-button"]}>
            <button
              type="submit"
              className="text-white"
              id={styles["btn-forgot-id"]}
            >
              Forgot Password
            </button>
            <button
              type="submit"
              className="text-white"
              id={styles["btn-login-id"]}
            >
              Login
            </button>
          </section>
        </form>
      </main>
    </div>
  );
};

export default Login;
