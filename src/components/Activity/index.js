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
  const { page, isChange, setIsChangeValue, data, setDataValue } = MyPageContext();

  const isMobile = useMediaQuery({
    query: "(min-width: 320px) and (max-width: 819px)",
  });
  const isDesktop = useMediaQuery({ minWidth: 820 });

  useEffect(() => {
    const cookies = new Cookies();
    let tid = setTimeout(() => {
      axios
        .get(process.env.REACT_APP_BACKEND_ROUTE+"/activities/getData", {
          headers: {
            user: cookies.get("user"),
            refreshtoken: cookies.get("refreshToken"),
          },
        })
        .then((response) => {
          if (response.data.activitiesData.length !== 0) {
            setDataValue(response.data.activitiesData.reverse());
            setIsChangeValue(false);
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
  }, [isChange]);

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
          <>
            {data.map((e, i) => {
              if (i === page - 1) {
                return (
                  <Card
                    key={e._id}
                    keys={e._id}
                    number={page}
                    name={e.name}
                    activityType={e.activityType}
                    startDate={e.startDate}
                    endDate={e.endDate}
                    status={e.status}
                  />
                );
              }
              return "";
            })}
          </>
        )}

        {/* 1 => 1 , 1 2 , 1 2 3
          2 => 4 , 4 5 , 4 5 6
          3 => 7 , 7 8 , 7 8 9
          4 => 10 , 10 11 , 10 11 12
          
          1, 4, 7, 10, ...
          
          n = page
          an = a1 + (n-1)*d
          an = 1 + (n-1)*3
          an = 1 + 3*n - 3
          an = 3*n - 2
          
          3, 6, 9, 12, ...
          an = 3*n */}
        {!isLoading && isDesktop && (
          <>
            {data.map((e, i) => {
              if (i >= 3 * page - 3 && i <= 3 * page - 1) {
                // minus 1 because array start from 0
                /* 
                [0,1,2,3,4,5,6,7] ; i is index in array
                page 1 : 3*page-3 => 0 && 3*page-1 => 2 ; [0,1,2]
                page 2 : 3*page-3 => 3 && 3*page-1 => 5 ; [3,4,5]
                page 3 : 3*page-3 => 6 && 3*page-1 => 8 ; [6,7]
                */
                // e = data[i]
                return (
                  <Card
                    key={e._id}
                    keys={e._id}
                    number={i + 1}
                    name={e.name}
                    description={e.description}
                    activityType={e.activityType}
                    startDate={e.startDate}
                    endDate={e.endDate}
                    status={e.status}
                  />
                );
              }
              return "";
            })}
          </>
        )}
      </div>
      <Pagination />
      <FooterNotFull />
    </div>
  );
};

export default Activity;
