import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Training from "./Training";
import Header from "./Header";
import Footer from "./Footer";
import Placement from "./Placement";
import AboutUs from "./AboutUs";
import Director from "./Director";
import Tpo from "./Tpo";
import Info from "./Info";
import Login from "./Login";
import Register from "./Register";
import NoMatch from "./NoMatch";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; // Import the CSS for styling
import { UserProvider } from "./UserContext";
import ForgotPassword from "./ForgotPassword";
import ResetPassword from "./ResetPassword";
import ChatApplication from "./ChatApplication";

function App() {
  const [currentForm, setCurrentForm] = useState("login");
  function toggleForm(formName) {
    setCurrentForm(formName);
  }

  return (
    <UserProvider>
      <Router>
        <div className="app-container">
          <Header />
          <main className="main-content">
            <Routes>
              <Route
                exact
                path="/"
                element={
                  currentForm === "login" ? (
                    <Login onFormSwitch={toggleForm} />
                  ) : (
                    <Register onFormSwitch={toggleForm} />
                  )
                }
              />
              <Route exact path="/Home" element={<Home />} />
              <Route exact path="/Training" element={<Training />} />
              <Route exact path="/Placement" element={<Placement />} />
              <Route exact path="/AboutUs" element={<AboutUs />} />
              <Route exact path="/message/director" element={<Director />} />
              <Route exact path="/message/tpo" element={<Tpo />} />
              <Route exact path="/Info" element={<Info />} />
              <Route exact path="/Header" element={<Header />} />
              <Route path="/forgot-password" element={<ForgotPassword />} />
              <Route exact path="/chat" element={<ChatApplication />} />
              <Route
                path="/reset-password/:token"
                element={<ResetPassword />}
              />{" "}
              <Route path="*" element={<NoMatch />} />
            </Routes>
          </main>
          <Footer />
        </div>
        <ToastContainer />
      </Router>
    </UserProvider>
  );
}

export default App;
