import { Modal } from "@mui/material";
import React, { useState, useContext } from "react";
import EmailIcon from "@mui/icons-material/Email";
import KeyIcon from "@mui/icons-material/Key";
import { toast } from "react-toastify";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { UserContext } from "./UserContext";
import { Link } from "react-router-dom";
import "./Login.css";
import logo from "./img/logo.png";

function Login(props) {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [name, setName] = useState("");
  const [valid, setValid] = useState(false);
  const { updateCurrentUser } = useContext(UserContext);

  async function handleClick(event) {
    event.preventDefault();
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_BACKEND_URL}/api/v1/tpo/validateCredentials`,
        {
          email,
          pass,
        }
      );
      const { success, message, faculty, userId } = response.data;

      if (success) {
        setValid(true);
        toast.success(message);
        updateCurrentUser({ userId, name, email, faculty }); // Update the current user
        navigate("/Home");
      } else {
        setValid(false);
        toast.error(message);
      }
    } catch (error) {
      console.error("Error validating credentials:", error);
      setValid(false);
      toast.error("Invalid Credentials");
    }
  }

  function handleInput(props) {
    const val = props.target.value;
    setEmail(val);
  }
  function handlePassword(props) {
    const val = props.target.value;
    setPass(val);
  }
  function handleName(props) {
    const val = props.target.value;
    setName(val);
  }
  return (
    <>
      <div className="login">
        {/* <div className="photo" style={{ backgroundImage: `url(${logo})` }} /> */}
        <Modal
          open={!valid}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          {/* {!valid && <img className="logo" src={logo} />} */}
          <div className="modal-overlay ">
            <div className="form-group-login">
              <div className="logo-container">
                <img className="logo" src={logo} />
              </div>
              <div className="form-container">
                <p>
                  <b>Hello {name}</b>
                </p>
                <form onSubmit={handleClick}>
                  <label htmlFor="name" className="form-label">
                    Name
                  </label>
                  <input
                    name="name"
                    style={{ marginLeft: 0 }}
                    className="form-control"
                    placeholder="Saiprem"
                    onChange={handleName}
                    value={name}
                  />
                  <label htmlFor="email" className="form-label">
                    <EmailIcon />
                  </label>
                  <input
                    name="email"
                    style={{ marginLeft: 0 }}
                    className="form-control"
                    type="email"
                    placeholder="name@gmail.com"
                    onChange={handleInput}
                    value={email}
                  />
                  <label htmlFor="password" className="form-label">
                    <KeyIcon />
                  </label>
                  <input
                    name="pass"
                    style={{ marginLeft: 0 }}
                    className="form-control"
                    type="password"
                    placeholder="**********"
                    onChange={handlePassword}
                    value={pass}
                  />
                  <Link to="/forgot-password" className="forgot-password-link">
                    Forgot Password?
                  </Link>
                  {/* Add the link to the ForgotPassword component */}
                  <button
                    type="submit"
                    className="btn btn-primary"
                    style={{
                      display: "block",
                      marginLeft: 10,
                      marginTop: 10,
                      marginBottom: 10,
                    }}
                  >
                    Log In
                  </button>
                  <button
                    onClick={() => props.onFormSwitch("Register")}
                    className="btn btn-primary"
                    style={{ marginLeft: 10, marginBottom: 10 }}
                  >
                    Don't have an Account? Register Here
                  </button>
                </form>
              </div>
            </div>
          </div>
        </Modal>
      </div>
    </>
  );
}

export default Login;
