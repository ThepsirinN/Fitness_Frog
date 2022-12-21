import { createContext, useContext, useState, useEffect } from "react";
import Cookies from "universal-cookie";
import axios from "axios";

const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
  const [isAuth, setIsAuth] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [isLoadingAuth, setIsLoadingAuth] = useState(true);

  // isLoading ป้องกันโหลดหน้าแล้วจอดำ
  // const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    let tid = setTimeout(() => {
      const cookies = new Cookies();
      const checkToken = async () => {
        try {
          let response = await axios.get(
            process.env.REACT_APP_BACKEND_ROUTE + "/user/checkAuth",
            {
              headers: {
                Authorization: `Bearer ${cookies.get("refreshToken")}`,
                user: cookies.get("user"),
              },
            }
          );
          if (response) {
            if (response.data.status) {
              cookies.set("refreshToken", response.data.refreshToken.key, {
                path: "/",
                expires: new Date(Date.now() + response.data.refreshToken.exp),
              });
              cookies.set("user", response.data.userHash, {
                path: "/",
                expires: new Date(Date.now() + response.data.refreshToken.exp),
              });
              setIsAuth(true)
              setIsLoadingAuth(false)
            }
          }
        } catch (e) {
          cookies.remove("refreshToken");
          cookies.remove("user");
          console.log(e);
        }
      };
      if (cookies.get("refreshToken") && cookies.get("user")) {
        checkToken();
      }else{
        setIsLoading(false)
      }
    }, 1000);

    return () => {
      clearTimeout(tid);
    };
  }, []);
    

  return (
    <AuthContext.Provider value={{ isAuth,isLoading,isLoadingAuth }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContextProvider };

export const MyAuthContext = () => {
  return useContext(AuthContext);
};
