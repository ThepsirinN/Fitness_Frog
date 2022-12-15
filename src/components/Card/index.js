import styles from "./card.module.css";
import { FaEdit, FaTrashAlt, FaTimesCircle, FaCheckCircle } from "react-icons/fa";
import { useMediaQuery } from "react-responsive";
// import {Link} from "react-router-dom";

const Card = (props) => {
  const isMobile =  useMediaQuery({ query: '(min-width: 320px) and (max-width: 819px)' })
  const isDesktop =  useMediaQuery({ minWidth: 820 })
  const activity = ["Running","Walking","Swimming","Hiking","Cycling"]
  const status = ["pending", "Completed"]
  const startDate = new Date(props.startDate)
  const startDateString = startDate.toLocaleString()
  const endDate = new Date(props.endDate)
  const endDateString = endDate.toLocaleString()
  const minuteDuration = (endDate - startDate)/(60*1000)
  const hourDuration = Math.floor(minuteDuration / 60)
  const minuteRemainingDuration = minuteDuration % 60

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
            <strong>Name : </strong>
            <span>{props.name}</span>
            <FaTrashAlt className={styles["bin"]} /> {/* onClick={toggleBinDesk} */}
          </div>

          <div className={styles["card_activity size"]}>
            <strong>Activity : </strong>
            <span>{activity[props.activityType-1]}</span>
          </div>

          <div className={styles["card_date size"]}>
            <strong>StartDate : </strong>
            <span>{startDateString}</span>
          </div>

          <div className={styles["card_date size"]}>
            <strong>Duration : </strong>
            <span>{hourDuration > 0 ? `${hourDuration} hr.`: "" }</span>
            <span> {minuteRemainingDuration > 0 ? `${minuteRemainingDuration} min.`: "" }</span>
          </div>

          <div className={styles["card_status size"]}>
            <strong>Status : </strong>
            <span>{status[props.status]}</span>
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
            <strong>Name : </strong>
            <span>DDD</span>
            <FaTrashAlt className={styles["bin"]} />
          </div>

          <div className={styles["card_datail size"]}>
            <strong>Description : </strong>
            <span>DDD</span>
          </div>

          <div className={styles["card_activity size"]}>
            <strong>Activity : </strong>
            <span>DDD</span>
          </div>

          <div className={styles["card_date size"]}>
            <strong>Date : </strong>
            <span>10/10/2022 17.00</span>
          </div>

          <div className={styles["card_period size"]}>
            <strong>Duration : </strong>
            <span>DDD</span>
          </div>

          <div className={styles["card_status size"]}>
            <strong>Status : </strong>
            <span>pending</span>
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
