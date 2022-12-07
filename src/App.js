import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Landing from "./components/Landing/Landing";
import AboutUs from "./components/AboutUs/AboutUs";
import Register from "./components/Register";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
const App = () => {
  return (
    <div className="App">
      <Router>
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
        </Routes>
      </Router>
    </div>
  );
};

export default App;
