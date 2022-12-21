import { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import styles from "./Login.module.css";
import { Link } from "react-router-dom";
import logo from "./img/logo-fitness-fog.png";
import { FaUser, FaLock, FaHome } from "react-icons/fa";
import Cookies from "universal-cookie";

const Login = () => {
  const [username, setUsername] = useState("");
  const [pass, setPass] = useState("");

  const cookies = new Cookies();

  const login = async (e) => {
    e.preventDefault();
    try {
      const responseUser = await axios.post(
        process.env.REACT_APP_BACKEND_ROUTE + "/user/checkUser",
        {
          username: username,
          pass: pass,
        }
      );

      if (responseUser) {
        cookies.set("refreshToken", responseUser.data.refreshToken.key, {
          path: "/",
          expires: new Date(Date.now() + responseUser.data.refreshToken.exp),
        });
        cookies.set("user", responseUser.data.refreshToken.user, {
          path: "/",
          expires: new Date(Date.now() + responseUser.data.refreshToken.exp),
        });
        Swal.fire({
          title: `${responseUser.data.msg}!`,
          icon: "success",
          confirmButtonText: "OK",
        }).then((result) => {
          if (result.isConfirmed) {
            return window.location.assign("./dashboard");
          }
        });
      }
    } catch (err) {
      if (err.response.status === 400) {
        Swal.fire({
          title: `Bad Request!`,
          text: `${err.response.data.msg}`,
          icon: "error",
          confirmButtonText: "OK",
        });
      }
    }
  };
  return (
    <div className={styles["Login"]}>
      <div className={styles["img-bg"]}></div>
      <div className={styles["opa"]}></div>

      <header className={styles["logo-header"]}>
        <Link to={"../"} style={{ textDecoration: "none" }}>
          <img src={logo} width="63px" alt="fitness-frog logo" />
        </Link>
        <Link to={"../"} style={{ textDecoration: "none" }}>
          <h3>Fitness Frog</h3>
        </Link>
      </header>
      <main className={styles["login-container"]}>
        <section className={styles["login-header"]}>
          <h1>Fitness Frog</h1>
        </section>
        <section className={` ${styles["login-title"]}`}>
          <h2>Login</h2>
        </section>
        <form className={styles["login-Form"]} onSubmit={login}>
          <div className={styles["form-group"]}>
            <FaUser
              className={styles["iconForm"]}
              style={{ fontSize: "2rem", color: "#ffffffd9" }}
            />
            <input
              type="text"
              name="username-login"
              id="username-login-id"
              placeholder="Username*"
              autoComplete="off"
              value={username}
              onChange={({ target }) => {
                return setUsername(target.value);
              }}
              required
            />
          </div>
          <div className={styles["form-group"]}>
            <FaLock
              className={styles["iconForm"]}
              style={{ fontSize: "2rem", color: "#ffffffd9" }}
            />
            <input
              type="password"
              name="password-login"
              id="password-login-id"
              placeholder="Password*"
              autoComplete="off"
              value={pass}
              onChange={({ target }) => {
                return setPass(target.value);
              }}
              required
            />
            <p style={{textAlign:"right",color:"#ffffffd9",fontSize:"1.2rem",marginTop:"-3rem",marginBottom:"2rem"}}>* is required</p>
          </div>
          <section className={styles["login-button"]}>
              
            <button
              type="submit"
              className="text-white"
              id={styles["btn-login-id"]}
            >
              Login
            </button>
          </section>
        </form>
        <Link to={"/"} style={{ textDecoration: "none" }}>
          <button className={styles["home-btn"]}>
            <FaHome />
          </button>
        </Link>
      </main>
    </div>
  );
};

export default Login;
