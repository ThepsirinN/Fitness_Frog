// import { BroserRouter as Router, Routes, Route } from "react-router-dom";
import styles from "./activity.module.css";
import Card from "../Card/index";
import Footer from "../Footer/index";
import Pagination from "../Pagination/index";
import { useMediaQuery } from "react-responsive";
// import EditModal from "./components/EditModal";
// import AddModal from "./components/AddModal";
// import DeleteModal from "./components/DeleteModal";

const Activity = () => {
  const isMobile = useMediaQuery({
    query: "(min-width: 320px) and (max-width: 819px)",
  });
  const isDesktop = useMediaQuery({ minWidth: 820 });

  return (
    <>
      <div className={styles["activity-container"]}>
        <div className={styles["card_header"]}>
          <h1>My Activity</h1>
        </div>
        <div className={styles["card-container"]}>
          {isMobile && <Card number={10} />}
          {isDesktop && (
            <>
              <Card number={10} />
              <Card number={9} />
              <Card number={8} />
            </>
          )}
        </div>
      {/* <EditModal/> */}
      {/* <AddModal /> */}
      {/* <DeleteModal /> */}
      <Pagination />
      </div>
      <Footer />
    </>
  );
};

export default Activity;
