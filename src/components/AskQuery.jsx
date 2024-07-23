import React, { useRef, useState } from "react";
import { Fab } from "@mui/material";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import Alert from "@mui/material/Alert";
import "./AskQuery.css";

function AskQuery(props) {
  const form = useRef();
  const [flag, setFlag] = useState(false);
  const [valid, setValid] = useState(true);

  const sendEmail = (e) => {
    e.preventDefault();

    setValid(true);
    setFlag((prev) => !prev);
  };
  function handleClick() {
    return setFlag((prev) => !prev);
  }
  return (
    <div>
      {!valid && (
        <Alert onClose={() => {}}>Please Enter Valid Credentials</Alert>
      )}
      <p style={{ position: "relative", left: 500, top: 20, marginBottom: 0 }}>
        <b>For Any Query Please Click Mail Icon</b>
      </p>
      {/* <button onClick={handleClick} className="modify-query-btn">Query</button> */}
      <Fab
        color="secondary"
        aria-label="add"
        onClick={handleClick}
        className="modify-query-btn"
      >
        <MailOutlineIcon />
      </Fab>
      {flag && (
        <form ref={form} onSubmit={sendEmail}>
          <div className="modifyQuery">
            <label for="exampleInputEmail1">
              <b>Name</b>
            </label>
            <input
              type="text"
              name="user_name"
              className="modifyInput"
              id="exampleInputEmail1"
              value={props.name}
            />
            <label for="exampleInputEmail1">
              <b>Email</b>
            </label>
            <input
              type="email"
              name="user_email"
              className="modifyInput"
              id="exampleInputEmail1"
              placeholder="Enter email"
              value={props.mail}
            />
            <small
              id="emailHelp"
              className="form-text text-muted"
              style={{ marginLeft: 10, display: "block" }}
            >
              We'll never share your email with anyone else.
            </small>
            <label>
              <b>Message</b>
            </label>
            <textarea name="message" className="modify-textArea" />
            <input
              type="submit"
              value="Send"
              className="btn btn-primary btn-lg btn-block"
            />
          </div>
        </form>
      )}
    </div>
  );
}

export default AskQuery;
