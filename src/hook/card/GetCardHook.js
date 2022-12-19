import { useState, useEffect } from "react";
import axios from "axios";
const GetCardData = (user, refreshToken) => {
  const [responseCard, setResponseCard] = useState(null);
  const [errorCard, setErrorCard] = useState(null);
  const [loadingCard, setLoadingCard] = useState(true);

  const fetchData = async () => {
    try {
      const res = await axios.get(
        process.env.REACT_APP_BACKEND_ROUTE + "/activities/getData",
        {
          headers: {
            user: user,
            refreshtoken: refreshToken,
          },
        }
      );
      if (res) {
        if (res.data.activitiesData) {
          setLoadingCard(false);
          setResponseCard(res.data.activitiesData)
        }
      }
      setErrorCard(null);
    } catch (err) {
      setErrorCard(err);
    } 
  };

  useEffect(() => {
    let tid = setTimeout(() => {
      fetchData();
    }, 5);
    return ()=>{
      clearTimeout(tid)
    }
  }, []);
  return { responseCard, errorCard, loadingCard };

};

export default GetCardData

