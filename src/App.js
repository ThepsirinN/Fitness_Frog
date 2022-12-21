import { Routes, Route, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
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
import EditProfile from "./components/EditProfile";
import Activitiy from "./components/Activity";
import { MyAuthContext } from "./context/AuthContext";
import { PageContextProvider } from "./context/PageContext";

const App = () => {
  const { isAuth, isLoading, isLoadingAuth } = MyAuthContext();
  const navigate = useNavigate();

  useEffect(() => {
    let tid = setTimeout(() => {
      const arrPath = ["/", "/login", "/register", "/about-us"];
      if (isAuth && arrPath.includes(window.location.pathname)) {
        navigate("/dashboard");
      } else if (!isAuth && !arrPath.includes(window.location.pathname)) {
        navigate("/");
      }
    }, 100);
    return () => {
      clearTimeout(tid);
    };
  }, [isAuth]);

  return (
    <div className="App">
      {!isAuth && !isLoading && (
        <Routes>
          {/* Landing Page */}
          <Route path="/" element={<Landing />} />
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

      {isAuth && !isLoadingAuth && (
        <Routes>
          {/* Add-Profile Page */}
          <Route
            path="add-profile"
            element={
              <>
                <AddProfile />
              </>
            }
          />

          {/* DashBoard Page */}
          <Route
            path="dashboard"
            element={
              <>
                <Dashboard />
              </>
            }
          />

          <Route
            path="edit-profile"
            element={
              <>
                <EditProfile />
              </>
            }
          />

          {/* Activity Page */}
          <Route
            path="activity"
            element={
              <>
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
