import { useState, useEffect } from "react";
import axios from "axios";
const GetUserData = (user, refreshToken) => {
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    try {
      const res = await axios.get(
        process.env.REACT_APP_BACKEND_ROUTE + "/userDetail/getUserDetail",
        {
          headers: {
            user: user,
            refreshtoken: refreshToken,
          },
        }
      );
      if (res) {
        if (res.data.data) {
          setLoading(false);
          setResponse({ ...res.data.data, DOB : res.data.data.DOB.slice(0,-14)}); // slice for YYYY-MM-DDTxxxxxxxxxxxxxx
        }else{
          setError(true);
        }
      }
    } catch (err) {
      setError(err);
    } 
  };

  useEffect(() => {
    let tid = setTimeout(() => {
      fetchData();
    }, 1000);
    return ()=>{
      clearTimeout(tid)
    }
  }, []);
  return { response, error, loading };

};

export default GetUserData

