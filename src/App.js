import { Routes, Route, useNavigate } from "react-router-dom";
import axios from "axios";
import jwt_decode from "jwt-decode";
import { useEffect, useState } from "react";
import Cookies from "universal-cookie";
import "./App.css";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Landing from "./components/Landing/Landing";
import AboutUs from "./components/AboutUs/AboutUs";
import Register from "./components/Register";
import AddProfile from "./components/AddProfile";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";

const App = () => {
  const [token, setToken] = useState(null);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const cookies = new Cookies();
    if (cookies.get("refreshToken") && cookies.get("user")) {
      try {
        const decoded = jwt_decode(cookies.get("refreshToken"));
        try {
          axios
            .post("http://localhost:4000/user/checkBcrypt", {
              userHash: decoded.userHash,
              user: cookies.get("user"),
            })
            .then((result) => {
              console.log(result);
              if (result.data.status) {
                setToken(cookies.get("refreshToken"));
                setUser(cookies.get("user"));
              }
            })
            .catch((e) => {
              cookies.remove("refreshToken")
              cookies.remove("user")
              console.log(e);
            });
        } catch (err) {
          console.log(err);
        }
      } catch (err) {
        console.log(err);
      }
    }
  }, []);
  const navigate = useNavigate();

  useEffect(() => {
    if (token && user) {
      navigate("/dashboard");
    } else {
      navigate("/");
    }
  }, [token, user]);

  return (
    <div className="App">
      <Routes>
        {!token && !user && (
          <>
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
                  <Footer />
                </>
              }
            />

            {/* Login Page */}
            <Route
              path="login"
              element={
                <>
                  <Login />
                  <Footer />
                </>
              }
            />
          </>
        )}

        {token && user && (
          <>
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
          </>
        )}
      </Routes>
    </div>
  );
};

export default App;
