import styles from "./card.module.css";
import { FaEdit, FaTrashAlt, FaTimesCircle, FaCheckCircle } from "react-icons/fa";
import { useMediaQuery } from "react-responsive";
// import {Link} from "react-router-dom";

const Card = (props) => {

  // const usestate, toggle : Edit
  // const usestate, toggle : BinDesktop
  // const usestate, toggle : statusWrong
  // const usestate, toggle : statusCheck

  const isMobile =  useMediaQuery({ query: '(min-width: 320px) and (max-width: 819px)' })
  const isDesktop =  useMediaQuery({ minWidth: 820 })

    const mobileJSX = (
      <div className={styles["card_plate"]}>
        <form className={styles["card_data"]}>
          <div className={styles["card_head"]}>
            <h1>No.{props.number}</h1>
            <div className={styles["card_head_icon"]}>
              <FaEdit className={styles["edit"]} /> {/* onClick={toggleEdit} */}
              <FaTrashAlt className={styles["bin-mobile"]} />
            </div>
          </div>

          <div className={styles["card_name size"]}>
            <label>Name</label>
            <input type="text" placeholder="DDD" readOnly />
            <FaTrashAlt className={styles["bin"]} /> {/* onClick={toggleBinDesk} */}
          </div>

          <div className={styles["card_activity size"]}>
            <label>Activity</label>
            <input type="text" placeholder="DDD" readOnly />
          </div>

          <div className={styles["card_date size"]}>
            <label>Date</label>
            <input type="text" placeholder="10/10/2022 17.00" readOnly />
          </div>

          <div className={styles["card_status size"]}>
            <label>Status</label>
            <input type="text" placeholder="pending" readOnly />
            <div className={styles["card_status_btn"]}>
              <FaTimesCircle className={styles["wrong"]} /> {/* onClick={toggleWrong} */}
              <FaCheckCircle className={styles["check"]} /> {/* onClick={toggleCheck} */}
            </div>
          </div>
        </form>
      </div>
    )

    const DestopJSX = (
      <div className={styles["card_plate"]}>
        <form className={styles["card_data"]}>
          <div className={styles["card_head"]}>
            <h1>No.{props.number}</h1>
            <div className={styles["card_head_icon"]}>
              <FaEdit className={styles["edit"]} />
            </div>
          </div>

          <div className={styles["card_name size"]}>
            <label>Name</label>
            <input type="text" placeholder="DDD" readOnly />
            <FaTrashAlt className={styles["bin"]} />
          </div>

          <div className={styles["card_datail size"]}>
            <label>Description</label>
            <input type="text" placeholder="DDD" readOnly />
          </div>

          <div className={styles["card_activity size"]}>
            <label>Activity</label>
            <input type="text" placeholder="DDD" readOnly />
          </div>

          <div className={styles["card_date size"]}>
            <label>Date</label>
            <input type="text" placeholder="10/10/2022 17.00" readOnly />
          </div>

          <div className={styles["card_period size"]}>
            <label>Duration</label>
            <input type="text" placeholder="DDD" readOnly />
          </div>

          <div className={styles["card_status size"]}>
            <label>Status</label>
            <input type="text" placeholder="pending" readOnly />
            <div className={styles["card_status_btn"]}>
              <FaTimesCircle className={styles["wrong"]} />
              <FaCheckCircle className={styles["check"]} />
            </div>
          </div>
        </form>
      </div>
    )

  return (
    <>
      { isMobile && mobileJSX }
      { isDesktop && DestopJSX }
    </>
  );
};

export default Card;
