import styles from './editmodal.module.css';
import { FaUser, FaBook, FaRunning, FaRegCalendarAlt } from "react-icons/fa";

const EditModal = () => {
  return (
    <div className={styles["edit-container"]}>
      <h1>Edit Activity</h1>
      <form className={styles["edit-form"]}>
        <div className={styles["form-control"]}>
            <FaUser className={styles["icon"]}/>
            <input 
                type="text" 
                name="username" 
                placeholder="Name"/>
        </div>

        <div className={styles["form-control"]}>
            <FaBook className={styles["icon"]}/>
            <input 
                type="text" 
                name="description" 
                placeholder="Description"/>
        </div>

        <div className={styles["form-control"]}>
            <FaRunning className={styles["icon"]}/>
            <select name="activity">
                <option value="Primaryschool" selected>- Activity -</option>
                <option value="University">Bicycle Riding</option>
                <option value="University">Hiking</option>
                <option value="University">Running</option>
                <option value="Primaryschool">Swimming</option>
                <option value="Highschool" >Walking</option>
            </select>
        </div>

        <div className={styles["form-control"]}>
            <FaRegCalendarAlt className={styles["icon"]}/>
            <input type="datetime-local" name="date"></input> 
        </div>

        <div className={styles["button"]}>
            <button type="submit" className={styles["btn-back"]}>Back</button>
            <button type="submit" className={styles["btn-save"]}>Save</button>
        </div>
      </form>
    </div>
  );
};

export default EditModal;
