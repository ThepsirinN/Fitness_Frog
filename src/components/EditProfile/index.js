import styles from "./editProfile.module.css";
import imgAvatar from './img/img_avatar.png'
import { FaUser, FaRuler, FaVenusMars, FaWeight,FaCalendarAlt, FaBullseye } from 'react-icons/fa'

const EditProfile = () => {
  return (
    <>
    <div className={styles["img-bg"]}></div>
    <div className={styles["edit-profile"]}>
    <h1 className={styles["Mobile"]}>Add Profile</h1>
      <div className={styles["pic-edit"]}>
        <img src={imgAvatar} alt="user_picture" width="150px" height="auto"></img>
        <button className="edit-btn">Edit Profile Picture</button>
      </div>
      <form className={styles["user-detail"]}>
        <h1 className={styles["username"]}>Mr.David Bond</h1>
        <div className={styles["form-group"]}>
          <label for="edit-fullname-id">Fullname</label>
          <FaUser className={styles["icon"]} style={{color:"#ffffffd9"}} />
          <input type="text" value={"Mr.David"} placeholder="Please Enter Fullname" id="edit-fullname-id"/>
        </div>
        <div className={styles["form-group"]}>
          <label for="edit-height-id">Height (cm.)</label>
          <FaRuler className={styles["icon"]} style={{color:"#ffffffd9"}} />
          <input type="text" value={"Mr.David"} placeholder="Please Enter Height (cm)" id="edit-height-id"/>
        </div>
        <div className={styles["form-group"]}>
          <label for="edit-gender-id">Gender</label>
          <FaVenusMars className={styles["icon"]} style={{color:"#ffffffd9"}} />
          <select id="edit-gender-id">
            <option value="male" selected>Male</option>
            <option value="female">Female</option>
          </select>
        </div>
        <div className={styles["form-group"]}>
          <label for="edit-weight-id">Weight (kg.)</label>
          <FaWeight className={styles["icon"]} style={{color:"#ffffffd9"}} />
          <input type="text" value={"Mr.David"} placeholder="Please Enter Weight" id="edit-weight-id"/>
        </div>
        <div className={styles["form-group"]}>
          <label for="edit-age-id">Date Of Birth</label>
          <FaCalendarAlt className={styles["icon"]} style={{color:"#ffffffd9"}} />
          <input type="date" value={"2022-11-25"} placeholder="Please Select Date Of Birth" id="edit-age-id"/>
          <span>age</span>
        </div>
        <div className={styles["form-group"]}>
          <label for="edit-goal-id">My Goal (Days)</label>
          <FaBullseye className={styles["icon"]} style={{color:"#ffffffd9"}} />
          <input type="text" value={"Mr.David"} placeholder="Please Enter Goals (Days)" id="edit-goal-id"/>
        </div>
        <div className={styles["btn-sub"]}>
          <button className={styles["back-btn"]}>Back</button>
          <button className={styles["save-btn"]}>Save</button>
        </div>
      </form>
    </div>
    </>
  );
};
export default EditProfile;
