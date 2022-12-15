// import { BroserRouter as Router, Routes, Route } from "react-router-dom";
import styles from "./activity.module.css";
import Card from "../Card/index";
import FooterNotFull from "../FooterNotFull";
import Pagination from "../Pagination/index";
import { useMediaQuery } from "react-responsive";
import { MyPageContext } from "../../context/PageContext";
import { useEffect, useState } from "react";
import axios from "axios";
import Cookies from "universal-cookie";

const Activity = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState("");

  const { page } = MyPageContext();

  const isMobile = useMediaQuery({
    query: "(min-width: 320px) and (max-width: 819px)",
  });
  const isDesktop = useMediaQuery({ minWidth: 820 });

  useEffect(() => {
    const cookies = new Cookies();
    let tid = setTimeout(() => {
      axios
        .get("http://localhost:4000/api/v1/activities/getData", {
          headers: {
            user: cookies.get("user"),
            refreshtoken: cookies.get("refreshToken"),
          },
        })
        .then((response) => {
          if (response.data.activitiesData.length !== 0) {
            setData(response.data.activitiesData.reverse());
            setIsLoading(false);
          }
        })
        .catch((e) => {
          console.log(e);
        });
    }, 100);
    return () => {
      clearTimeout(tid);
    };
  }, []);

  /*testArr = [
    {name:"prayut",surname:"sonteen"},
    {name:"prawit",surname:"painon"}
  ]
    testArr[0].name => "prayut"
    testArr[0].surname => "sonteen"
  */
  return (
    <div className={styles["activity-container"]}>
      <div className={styles["card_header"]}>
        <h1>My Activity</h1>
      </div>
      <div className={styles["card-container"]}>
        {!isLoading && isMobile && (
          <Card
            number={page}
            name={data[page - 1].name}
            activityType={data[page - 1].activityType}
            startDate={data[page - 1].startDate}
            endDate={data[page - 1].endDate}
            status={data[page - 1].status}
          />
        )}
        {!isLoading && isDesktop && (
          <>
            <Card number={10} />
            <Card number={9} />
            <Card number={8} />
          </>
        )}
      </div>
      <Pagination />
      <FooterNotFull />
    </div>
  );
};

export default Activity;
