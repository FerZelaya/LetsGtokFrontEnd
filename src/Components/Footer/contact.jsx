import React, { useState } from "react";
import "./contact.css";
import email from "../../img/correo.png";
import TextField from "@material-ui/core/TextField";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";
import Backdrop from "@material-ui/core/Backdrop";
import CircularProgress from "@material-ui/core/CircularProgress";
import { makeStyles } from "@material-ui/core/styles";

import { db } from "../../firebase";

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const useStyles = makeStyles((theme) => ({
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: "#fff",
  },
}));

const Contact = () => {
  const classes = useStyles();
  const [state, setState] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const [alert, setAlert] = useState("");
  const [error, setError] = useState(false);

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  function handleChange(evt) {
    const value = evt.target.value;
    setState({
      ...state,
      [evt.target.name]: value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);

    if (state.name === "" || state.email === "" || state.message === "") {
      setOpen(true);
      setAlert("Empty Fields!");
      setError(true);
      setLoading(false);
    } else {
      db.collection("contacts")
        .add({
          name: state.name,
          email: state.email,
          message: state.message,
        })
        .then(() => {
          setAlert("Thank you! We will be in contact soon.");
          setOpen(true);
          setLoading(false);
          setError(false);
        })
        .then(() => {
          setState({
            name: "",
            email: "",
            message: "",
          });
        })
        .catch((error) => {
          setAlert("ERROR!");
          setOpen(true);
          setLoading(false);
          setError(false);
          alert(error.message);
        });
    }
  }

  return (
    <div className="footer-main" id="contact">
      <div className="inner-footer">
        <div className="emailLogo">
          <img src={email} alt="Lets Gtok" />
        </div>

        <div className="contactForm">
          <h1>
            Get in contact with <span className="purpleText">Lets Gtok</span>
          </h1>
          <div className="info">
            <TextField
              required
              fullWidth
              name="name"
              value={state.name}
              id="Name"
              label="Name"
              variant="outlined"
              onChange={handleChange}
            />
            <TextField
              required
              fullWidth
              name="email"
              value={state.email}
              id="Email"
              label="Email"
              variant="outlined"
              onChange={handleChange}
            />
            <TextField
              required
              fullWidth
              name="message"
              value={state.message}
              id="Message"
              label="Message"
              placeholder="Message"
              multiline
              variant="outlined"
              onChange={handleChange}
            />
          </div>

          <button
            onClick={handleSubmit}
            disabled={loading}
            style={{ background: loading && "rgba(102, 48, 220, 0.2)" }}
            className="shareButton"
          >
            Contact Us
          </button>
          <Snackbar open={open} autoHideDuration={2000} onClose={handleClose}>
            <Alert
              onClose={handleClose}
              severity={!error ? "success" : "error"}
            >
              {alert}
            </Alert>
          </Snackbar>
          <Backdrop
            className={classes.backdrop}
            open={open}
            onClick={handleClose}
          >
            <CircularProgress color="inherit" />
          </Backdrop>
        </div>
      </div>
    </div>
  );
};

export default Contact;
