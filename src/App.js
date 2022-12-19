import { Routes, Route, redirect } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import Cookies from "universal-cookie";
import "./App.css";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import FooterNotFull from "./components/FooterNotFull";
import Landing from "./components/Landing/Landing";
import AboutUs from "./components/AboutUs/AboutUs";
import Register from "./components/Register";
import AddProfile from "./components/AddProfile";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import EditProfile from "./components/EditProfile"
import Activitiy from "./components/Activity";
import { PageContextProvider } from "./context/PageContext";

const App = () => {
  const [token, setToken] = useState(null);
  const [user, setUser] = useState(null);
  // isLoading ป้องกันโหลดหน้าแล้วจอดำ
  /* const [isLoading, setIsLoading] = useState(true) */

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
              setToken(cookies.get("refreshToken"));
              setUser(cookies.get("user"));
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
      }
      
    }, 1000);
    return () => {
      clearInterval(tid);
    };
  }, []);

  /*   useEffect(() => {
    if (token && user) {
      redirect("/dashboard", 302);
    } else {
      redirect("/", 302);
    }
  }, [token, user]); */

  return (
    <div className="App">
      {!token && !user && (
        <Routes>
          {/* Landing Page */}
          <Route path="" element={<Landing />} />
          {/* About-Us Page */}
          <Route path="about-us" element={<AboutUs />} />
          {/* Register Page */}
          <Route
            path="register"
            element={
              <>
                <Register />
                <FooterNotFull />
              </>
            }
          />

          {/* Login Page */}
          <Route
            path="login"
            element={
              <>
                <Login />
                <FooterNotFull />
              </>
            }
          />
        </Routes>
      )}

      {token && user && (
        <Routes>
          {/* Add-Profile Page */}
          <Route
            path="add-profile"
            element={
              <>
                <AddProfile />
                <Footer />
              </>
            }
          />

          {/* DashBoard Page */}
          <Route
            path="dashboard"
            element={
              <>
                <Nav />
                  <Dashboard />
                <Footer />
              </>
            }
          />

          <Route
            path="edit-profile"
            element={
              <>
                <Nav />
                <EditProfile />
                <Footer />
              </>
            }
          />



          {/* Activity Page */}
          <Route
            path="activity"
            element={
              <>
                <Nav />
                <PageContextProvider>
                  <Activitiy />
                </PageContextProvider>
              </>
            }
          />
        </Routes>
      )}
    </div>
  );
};

export default App;
