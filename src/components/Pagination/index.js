import styles from "./pagination.module.css";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import axios from "axios";
import Cookies from "universal-cookie";
import withReactContent from "sweetalert2-react-content";
import { BsFillPlusCircleFill } from "react-icons/bs";
import { useMediaQuery } from "react-responsive";
import { useState, useEffect } from "react";
import { MyPageContext } from "../../context/PageContext";

const Pagination = () => {
  // for select page by useContext
  const { setPageValue } = MyPageContext();

  // for add button
  const cookies = new Cookies();
  const handleAdd = async (e) => {
    e.preventDefault();
    const MySwal = withReactContent(Swal);
    try {
      const { value: result } = await MySwal.fire({
        title: "Add Activity",
        html: (
          <div className="add-modal">
            <div className="modal-input-group">
              <label htmlFor="swal-input2">Activity-Name </label>
              <input
                id="swal-input1"
                className="swal2-input swal-add"
                placeholder="Activity-Name"
              />
            </div>
            <div className="modal-input-group">
              <label htmlFor="swal-input2">Description </label>
              <textarea
                id="swal-input2"
                className="swal2-input swal-add"
                placeholder="Description"
              ></textarea>
            </div>
            <div className="modal-input-group">
              <label htmlFor="swal-input3">Sport type </label>
              <select id="swal-input3" className="swal2-input swal-add">
                <option value={0}>Please select activity type</option>
                <option value={1}>Running</option>
                <option value={2}>Walking</option>
                <option value={3}>Swimming</option>
                <option value={4}>Hiking</option>
                <option value={5}>Cycling</option>
              </select>
            </div>
            <div className="modal-input-group">
              <label htmlFor="swal-input4">Start Date </label>
              <input
                id="swal-input4"
                type="datetime-local"
                className="swal2-input swal-add"
              />
            </div>
            <div className="modal-input-group">
              <label htmlFor="swal-input5">End Date </label>
              <input
                id="swal-input5"
                type="datetime-local"
                className="swal2-input swal-add"
              />
            </div>
          </div>
        ),
        focusConfirm: false,
        preConfirm: () => {
          return [
            document.getElementById("swal-input1").value,
            document.getElementById("swal-input2").value,
            document.getElementById("swal-input3").value,
            document.getElementById("swal-input4").value,
            document.getElementById("swal-input5").value,
          ];
        },
        showCancelButton: true,
      });
      if (result) {
        const response = await axios.post(
          "http://localhost:4000/api/v1/activities/createActivity",
          {
            user: cookies.get("user"),
            refreshToken: cookies.get("refreshToken"),
            activity: {
              name: result[0],
              description: result[1],
              activityType: result[2],
              startDate: result[3],
              endDate: result[4],
            },
          }
        );
        if (response) {
          Swal.fire({
            title: `${response.data.msg}!`,
            icon: "success",
            confirmButtonText: "OK",
          });
        }
      }
    } catch (e) {
      if (e.response.status === 400) {
        Swal.fire({
          title: `Bad Request!`,
          text: `${e.response.data.msg}`,
          icon: "error",
          confirmButtonText: "OK",
        });
      }
    }
  };

  // for pagination
  const [isLoading, setIsLoading] = useState(true);
  const [pageArr, setPageArr] = useState([]);
  const isMobile = useMediaQuery({
    query: "(min-width: 320px) and (max-width: 819px)",
  });

  let perPage;
  if (isMobile) {
    perPage = 1;
  } else {
    perPage = 3;
  }

  useEffect(() => {
    let tid = setTimeout(() => {
      axios
        .get(`http://localhost:4000/api/v1/activities/getPage/${perPage}`, {
          headers: {
            user: cookies.get("user"),
            refreshtoken: cookies.get("refreshToken"),
          },
        })
        .then((response) => {
          if (response.data.numPage !== 0) {
            pageArr.splice(0, pageArr.length);
            for (let i = 1; i <= response.data.numPage; i++) {
              pageArr.push(i);
            }
            setPageValue(1)
            setIsLoading(false);
          }
        })
        .catch((e) => console.log(e));
    }, 100);

    return () => {
      setPageValue("")
      setIsLoading(true);
      clearTimeout(tid);
    };
  }, [perPage]);

  // for select page by useContext
  const handleClickPage = (e) => {
    setPageValue(e.target.innerText)
  }

  // jsx render
  return (
    <div className={styles["page-container"]}>
      <div className={styles["pagination-container"]}>
        <div className={styles["page_btn_number"]}>
          {!isLoading &&
            pageArr.map((e) => {
              return <button key={e} onClick={handleClickPage}>{e}</button>;
            })}
        </div>

        <div className={styles["page_btn_back"]}>
          <Link to={"/dashboard"} style={{ textDecoration: "none" }}>
            <button>Back</button>
          </Link>
        </div>

        <div className={styles["page_btn_plus"]} onClick={handleAdd}>
          <BsFillPlusCircleFill />
        </div>
      </div>
    </div>
  );
};

export default Pagination;
