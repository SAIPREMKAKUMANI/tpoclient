import React, { useState } from "react";
import { Modal } from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import KeyIcon from "@mui/icons-material/Key";
import DriveFileRenameOutlineIcon from "@mui/icons-material/DriveFileRenameOutline";
import Alert from "@mui/material/Alert";
import axios from "axios";
import { toast } from "react-toastify";
import logo from "./img/logo.png";
import "./Register.css";

function Register(props) {
  const [details, setDetails] = useState({
    name: "",
    mail: "",
    pass: "",
    fac: false,
  });
  const [valid, setValid] = useState(false);
  // 'login'
  function isValid(val) {
    if ((val >= "a" && val <= "z") || (val >= "A" && val <= "Z") || val === " ")
      return true;
    return false;
  }
  function validString(val) {
    if (val.length) {
      let i = val.length - 1;
      while (val[i] === " ") i--;
      let start = 0;
      while (start <= i) {
        if (!isValid(val[start])) {
          break;
        }
        start++;
      }
      if (start > i) return true;
    }
    return false;
  }
  function computeLPSArray(pat, M, lps) {
    var len = 0;
    var i = 1;
    lps[0] = 0;
    while (i < M) {
      if (pat.charAt(i) === pat.charAt(len)) {
        len++;
        lps[i] = len;
        i++;
      } else {
        if (len != 0) {
          len = lps[len - 1];
        } else {
          lps[i] = len;
          i++;
        }
      }
    }
  }

  function KMPSearch(pat, txt) {
    var M = pat.length;
    var N = txt.length;
    var lps = [];
    var j = 0;
    computeLPSArray(pat, M, lps);
    var i = 0;
    while (N - i >= M - j) {
      if (pat.charAt(j) == txt.charAt(i)) {
        j++;
        i++;
      }
      if (j === M) {
        return true;
      } else if (i < N && pat.charAt(j) !== txt.charAt(i)) {
        if (j !== 0) j = lps[j - 1];
        else i = i + 1;
      }
    }
    return false;
  }

  function validMail(val) {
    if (val.length) {
      let i = val.length - 1;
      while (val[i] == " ") i--;
      let start = 0;
      while (start < val.length && val[start] != "@") ++start;
      if (start < val.length) {
        start++;
        return KMPSearch("gmail.com", val.substr(start));
      }
    }
    return false;
  }
  async function handleClick(event) {
    event.preventDefault();
    if (validString(details.name) && validMail(details.mail)) {
      try {
        const res = await axios.post(
          `${process.env.REACT_APP_BACKEND_URL}/api/v1/tpo/addCredentials`,
          {
            name: details.name,
            email: details.mail,
            pass: details.pass,
            faculty: details.fac,
          }
        );

        if (res.data.success) {
          toast.success(res.data.message);
          props.onFormSwitch("login");
        } else {
          toast.error(res.data.message);
          toast.error("Go To Login Page And Try Again");
          setValid(false);
        }
      } catch (error) {
        console.error("Error submitting credentials:", error);
        setValid(false);
      }
    } else {
      toast.error("Please Enter Valid Credentials");
      setValid(false);
    }
  }

  function handleChange(props) {
    const type = props.target.name;
    const val = type !== "fac" ? props.target.value : props.target.checked;
    setDetails((prevDetails) => {
      return {
        ...prevDetails,
        [type]: val,
      };
    });
  }

  return (
    <>
      <div className="register">
        {!valid && (
          <Alert onClose={() => {}}>Please Enter Valid Credentials</Alert>
        )}
        <Modal
          open={!valid}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <div className="form-group-register">
            <div className="logo-container">
              <img className="logo" src={logo} />
            </div>
            <div className="form-container">
              <form onSubmit={handleClick}>
                <p>
                  <b>Welcome {details.name}</b>
                </p>
                <label className="form-label">
                  <DriveFileRenameOutlineIcon />
                </label>
                <input
                  className="form-control"
                  name="name"
                  style={{ marginLeft: 0 }}
                  placeholder="Full Name"
                  onChange={handleChange}
                  value={details.name}
                />
                <label for="email" className="form-label">
                  <EmailIcon />
                </label>
                <input
                  name="mail"
                  className="form-control"
                  style={{ marginLeft: 0 }}
                  type="email"
                  placeholder="name@gmail.com"
                  onChange={handleChange}
                  value={details.mail}
                />
                <label for="password" className="form-label">
                  <KeyIcon />
                </label>
                <input
                  name="pass"
                  class="form-control"
                  style={{ marginLeft: 0 }}
                  type="password"
                  placeholder="**********"
                  onChange={handleChange}
                  value={details.pass}
                />
                <div class="form-check">
                  <input
                    name="fac"
                    class="form-check-input"
                    type="checkbox"
                    value={details.fac}
                    onChange={handleChange}
                    id="flexCheckChecked"
                  />
                  <label class="form-check-label" for="flexCheckChecked">
                    {" "}
                    Faculty{" "}
                  </label>
                </div>
                <button
                  type="submit"
                  className="btn btn-primary"
                  style={{ marginLeft: 10, marginTop: 10, marginBottom: 10 }}
                >
                  Register Here
                </button>
                <button
                  className="btn btn-primary"
                  style={{ marginLeft: 10, marginTop: 10, marginBottom: 10 }}
                  onClick={() => props.onFormSwitch("login")}
                >
                  Already Have An Account? Login Here
                </button>
              </form>
            </div>
          </div>
        </Modal>
      </div>
    </>
  );
}
export default Register;
