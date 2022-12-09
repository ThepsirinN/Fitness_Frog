import styles from "./AddProfile.module.css";
import imgAvatar from "./img/img_avatar.png";
import {
  FaUser,
  FaRuler,
  FaVenusMars,
  FaWeight,
  FaCalendarAlt,
  FaBullseye,
} from "react-icons/fa";

const AddProfile = () => {
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
        <form className={styles["user-detail"]}>
          <div className={styles["form-group"]}>
            <label for="edit-fullname-id">Fullname</label>
            <FaUser className={styles["icon"]} style={{ color: "#ffffffd9" }} />
            <input
              type="text"
              value={""}
              placeholder="Please Enter Fullname"
              id="edit-fullname-id"
            />
          </div>
          <div className={styles["form-group"]}>
            <label for="edit-height-id">Height (cm.)</label>
            <FaRuler
              className={styles["icon"]}
              style={{ color: "#ffffffd9" }}
            />
            <input
              type="text"
              value={""}
              placeholder="Please Enter Height (cm.)"
              id="edit-height-id"
            />
          </div>
          <div className={styles["form-group"]}>
            <label for="edit-gender-id">Gender</label>
            <FaVenusMars
              className={styles["icon"]}
              style={{ color: "#ffffffd9" }}
            />
            <select id="edit-gender-id">
              <option value="male" selected>
                Male
              </option>
              <option value="female">Female</option>
            </select>
          </div>
          <div className={styles["form-group"]}>
            <label for="edit-weight-id">Weight (kg.)</label>
            <FaWeight
              className={styles["icon"]}
              style={{ color: "#ffffffd9" }}
            />
            <input
              type="text"
              value={""}
              placeholder="Please Enter Weight (kg.)"
              id="edit-weight-id"
            />
          </div>
          <div className={styles["form-group"]}>
            <label for="edit-age-id">Date Of Birth</label>
            <FaCalendarAlt
              className={styles["icon"]}
              style={{ color: "#ffffffd9" }}
            />
            <input
              type="date"
              value={""}
              placeholder="Please Select Date Of Birth"
              id="edit-age-id"
            />
            <span>age</span>
          </div>
          <div className={styles["form-group"]}>
            <label for="edit-goal-id">My Goal (Days)</label>
            <FaBullseye
              className={styles["icon"]}
              style={{ color: "#ffffffd9" }}
            />
            <input
              type="text"
              value={""}
              placeholder="Please Enter Goals (Days)"
              id="edit-goal-id"
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
