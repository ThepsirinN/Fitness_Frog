import styles from "./editProfile.module.css";
import imgAvatar from "./img/img_avatar.png";
import {
  FaUser,
  FaRuler,
  FaVenusMars,
  FaWeight,
  FaCalendarAlt,
  FaBullseye,
} from "react-icons/fa";
import Cookies from "universal-cookie";
import GetUserData from "../../hook/userDetail/GetProfileDataHook";
import axios from "axios";
import Swal from "sweetalert2";
import Nav from "../Nav";
import FooterNotFull from "../FooterNotFull";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const EditProfile = () => {
  const [fullName, setFullName] = useState("");
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [gender, setGender] = useState({ value: 0 });
  const [age, setAge] = useState("");
  const [goal, setGoal] = useState("");

  const cookies = new Cookies();
  const { response, error, loading } = GetUserData(
    cookies.get("user"),
    cookies.get("refreshToken")
  );

  useEffect(() => {
    let tid = setTimeout(() => {
      if (error) {
        return window.location.assign("./add-profile");
      }
      setFullName(response.fullName);
      setHeight(response.height);
      setWeight(response.weight);
      setGender({ value: response.gender });
      setAge(response.DOB);
      setGoal(response.goal);
    }, 1000);
    return () => {
      clearTimeout(tid);
    };
  }, [loading]);


  const handleOnSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.put(
        process.env.REACT_APP_BACKEND_ROUTE + "/userDetail/editUserDetail",
        {
          username: cookies.get("user"),
          refreshToken: cookies.get("refreshToken"),
          fullName,
          gender,
          age,
          height,
          weight,
          goal,
        }
      );
      if (response) {
        Swal.fire({
          title: `${response.data.msg}!`,
          icon: "success",
          confirmButtonText: "OK",
        }).then((result) => {
          if (result.isConfirmed) {
            return window.location.assign("./dashboard");
          }
        });
      }
    } catch (e) {
      let errMsg = "";
      if (e.response.status === 400) {
        errMsg = `Bad Request!`;
      } else if (e.response.status === 401) {
        errMsg = `Unauthorize!`;
      }

      Swal.fire({
        title: errMsg,
        text: `${e.response.data.msg}`,
        icon: "error",
        confirmButtonText: "OK",
      });
    }
  };

  // DOB ไม่ขึ้นเพราะ AGE เป็นอายุ ปรับ model และ Controller ใหม่
  return (
    !loading && (
      <>
      <Nav/>
        <div className={styles["edit-profile"]}>
          <h1 className={styles["Mobile"]}>Edit Profile</h1>
          <div className={styles["pic-edit"]}>
            <img
              src={imgAvatar}
              alt="user_picture"
              width="150px"
              height="auto"
            ></img>
            <button className="edit-btn">Edit Profile Picture</button>
          </div>
          <form className={styles["user-detail"]} onSubmit={handleOnSubmit}>
            <h1 className={styles["username"]}>Hi {response.fullName.toUpperCase()}</h1>
            <div className={styles["form-group"]}>
              <label htmlFor="edit-fullname-id">Fullname*</label>
              <FaUser
                className={styles["icon"]}
                style={{ color: "#ffffffd9" }}
              />
              <input
                type="text"
                placeholder="Please Enter Fullname"
                id="edit-fullname-id"
                defaultValue={response.fullName}
                onChange={({ target }) => {
                  return setFullName(target.value);
                }}
                required
              />
            </div>
            <div className={styles["form-group"]}>
              <label htmlFor="edit-height-id">Height (cm.)*</label>
              <FaRuler
                className={styles["icon"]}
                style={{ color: "#ffffffd9" }}
              />
              <input
                type="text"
                placeholder="Please Enter Height (cm)"
                id="edit-height-id"
                defaultValue={response.height}
                onChange={({ target }) => {
                  return setHeight(target.value);
                }}
                required
              />
            </div>
            <div className={styles["form-group"]}>
              <label htmlFor="edit-gender-id">Gender*</label>
              <FaVenusMars
                className={styles["icon"]}
                style={{ color: "#ffffffd9" }}
              />
              <select
                id="edit-gender-id"
                defaultValue={response.gender}
                onChange={({ target }) => {
                  return setGender({ value: target.value });
                }}
                required
              >
                <option value={0}>Please Select Gender</option>
                <option value={1}>Male</option>
                <option value={2}>Female</option>
              </select>
            </div>
            <div className={styles["form-group"]}>
              <label htmlFor="edit-weight-id">Weight (kg.)*</label>
              <FaWeight
                className={styles["icon"]}
                style={{ color: "#ffffffd9" }}
              />
              <input
                type="text"
                placeholder="Please Enter Weight"
                id="edit-weight-id"
                defaultValue={response.weight}
                onChange={({ target }) => {
                  return setWeight(target.value);
                }}
                required
              />
            </div>
            <div className={styles["form-group"]}>
              <label htmlFor="edit-age-id">Date Of Birth*</label>
              <FaCalendarAlt
                className={styles["icon"]}
                style={{ color: "#ffffffd9" }}
              />
              <input
                type="date"
                placeholder="Please Select Date Of Birth"
                id="edit-age-id"
                defaultValue={response.DOB}
                onChange={({ target }) => {
                  return setAge(target.value);
                }}
                required
              />
              <span>age</span>
            </div>
            <div className={styles["form-group"]}>
              <label htmlFor="edit-goal-id">My Goal (Days)*</label>
              <FaBullseye
                className={styles["icon"]}
                style={{ color: "#ffffffd9" }}
              />
              <input
                type="text"
                placeholder="Please Enter Goals (Days)"
                id="edit-goal-id"
                defaultValue={response.goal}
                onChange={({ target }) => {
                  return setGoal(target.value);
                }}
                required
              />
              </div>
              <p style={{textAlign:"right",color:"#ffffffd9",fontSize:"1.2rem"}}>* is required</p>
            <div className={styles["btn-sub"]}>
            <button className={styles["save-btn"]}>Save</button>
            <Link to={"/dashboard"} style={{ textDecoration: "none" }}>
              <button
                className={styles["back-btn"]}
              >
                Back
              </button>
            </Link>
            </div>
          </form>
        </div>
        <FooterNotFull/>
      </>
    )
  );
};
export default EditProfile;
