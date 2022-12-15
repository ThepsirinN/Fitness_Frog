import styles from "./AddProfile.module.css";
import imgAvatar from "./img/img_avatar.png";
import { useState } from "react";
import Swal from "sweetalert2";
import axios from "axios";

import Cookies from "universal-cookie";
import {
  FaUser,
  FaRuler,
  FaVenusMars,
  FaWeight,
  FaCalendarAlt,
  FaBullseye,
} from "react-icons/fa";

const AddProfile = () => {
  const [fullName, setFullName] = useState("");
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [gender, setGender] = useState({value:0});
  const [age, setAge] = useState("");
  const [goal, setGoal] = useState("");

  const cookies = new Cookies();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:4000/api/v1/userDetail/createUserDetail",
        {
          username: cookies.get("user"),
          refreshToken: cookies.get("refreshToken"),
          fullName,
          gender,
          age,
          height,
          weight,
          goal,
          image: "1231as5d1",
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

  return (
    <div className="Add-Profile">
      <div className={styles["img-bg"]}></div>
      <div className={styles["add-profile"]}>
        <h1>Add Profile</h1>
        <div className={styles["pic-add"]}>
          <img
            src={imgAvatar}
            alt="user_picture"
            width="150px"
            height="auto"
          ></img>
          <button className="add-btn">Add Profile Picture</button>
        </div>
        <form className={styles["user-detail"]} onSubmit={handleSubmit}>
          <div className={styles["form-group"]}>
            <label htmlFor="edit-fullname-id">Fullname</label>
            <FaUser className={styles["icon"]} style={{ color: "#ffffffd9" }} />
            <input
              type="text"
              placeholder="Please Enter Fullname"
              id="edit-fullname-id"
              autoComplete="off"
              value={fullName}
              onChange={({ target }) => {
                return setFullName(target.value);
              }}
            />
          </div>
          <div className={styles["form-group"]}>
            <label htmlFor="edit-height-id">Height (cm.)</label>
            <FaRuler
              className={styles["icon"]}
              style={{ color: "#ffffffd9" }}
            />
            <input
              type="text"
              placeholder="Please Enter Height (cm.)"
              id="edit-height-id"
              autoComplete="off"
              value={height}
              onChange={({ target }) => {
                return setHeight(target.value);
              }}
            />
          </div>
          <div className={styles["form-group"]}>
            <label htmlFor="edit-gender-id">Gender</label>
            <FaVenusMars
              className={styles["icon"]}
              style={{ color: "#ffffffd9" }}
            />
            <select
              id="edit-gender-id"
              autoComplete="off"
              value={gender.value}
              onChange={({ target }) => {
                return setGender({value:target.value});
              }}
            >
              <option value={0} selected>
                Please Select Gender
              </option>
              <option value={1} >
                Male
              </option>
              <option value={2}>Female</option>
            </select>
          </div>
          <div className={styles["form-group"]}>
            <label htmlFor="edit-weight-id">Weight (kg.)</label>
            <FaWeight
              className={styles["icon"]}
              style={{ color: "#ffffffd9" }}
            />
            <input
              type="text"
              placeholder="Please Enter Weight (kg.)"
              id="edit-weight-id"
              autoComplete="off"
              value={weight}
              onChange={({ target }) => {
                return setWeight(target.value);
              }}
            />
          </div>
          <div className={styles["form-group"]}>
            <label htmlFor="edit-age-id">Date Of Birth</label>
            <FaCalendarAlt
              className={styles["icon"]}
              style={{ color: "#ffffffd9" }}
            />
            <input
              type="date"
              placeholder="Please Select Date Of Birth"
              id="edit-age-id"
              autoComplete="off"
              value={age}
              onChange={({ target }) => {
                return setAge(target.value);
              }}
            />
            <span>age</span>
          </div>
          <div className={styles["form-group"]}>
            <label htmlFor="edit-goal-id">My Goal (Days)</label>
            <FaBullseye
              className={styles["icon"]}
              style={{ color: "#ffffffd9" }}
            />
            <input
              type="text"
              placeholder="Please Enter Goals (Days)"
              id="edit-goal-id"
              autoComplete="off"
              value={goal}
              onChange={({ target }) => {
                return setGoal(target.value);
              }}
            />
          </div>
          <div className={styles["btn-sub"]}>
            <button className={styles["save-btn"]}>Save</button>
          </div>
        </form>
      </div>
    </div>
  );
};
export default AddProfile;
