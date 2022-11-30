import styles from "./pagination.module.css";
import { BsFillPlusCircleFill } from "react-icons/bs";

const Pagination = () => {
  return (
    <div className={styles["page-container"]}>
      <div className={styles["pagination-container"]}>
        <div className={styles["page_btn_number"]}>
          <button>1</button>
          <button>2</button>
          <button>3</button>
          <button>4</button>
          <button>5</button>
        </div>

        <div className={styles["page_btn_back"]}>
          <button>Back</button>
        </div>

        <div className={styles["page_btn_plus"]}>
          <BsFillPlusCircleFill />
        </div>
      </div>
    </div>
  );
};

export default Pagination;
