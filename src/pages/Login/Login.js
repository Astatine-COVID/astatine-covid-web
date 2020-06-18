import Button from "@material-ui/core/Button";
import Link from "@material-ui/core/Link";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import React, { useContext, useState } from "react";
import { Link as RouterLink } from "react-router-dom";

import { FirebaseContext } from "../../firebase";

const useStyles = makeStyles({
  root: {
    textAlign: "center",
    overflow: "auto",
    margin: "0 16px",
  },
  title: {
    margin: "80px 0",
  },
  subtitle: {
    fontSize: 24,
    fontWeight: "bold",
    margin: "12px 0",
  },
  container: {
    display: "flex",
    justifyContent: "center",
  },
  formContainer: {
    width: 400,
  },
  textFieldContainer: {
    display: "flex",
    justifyContent: "center",
    margin: "16px 0",
  },
  textField: {
    width: "100%",
  },
  button: {
    width: "100%",
    height: "40px",
  },
  signUpMessage: {
    marginTop: 20,
  },
});

export default function Login(props) {
  const classes = useStyles();
  const firebase = useContext(FirebaseContext);
  const [emailInput, setEmailInput] = useState("");
  const [passwordInput, setPasswordInput] = useState("");

  const handleEmailInputChange = (e) => {
    setEmailInput(e.target.value);
  };

  const handlePasswordInputChange = (e) => {
    setPasswordInput(e.target.value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className={classes.root}>
      <div className={classes.title}>
        <img
          alt="Logo"
          className ="logo"
          src="/images/logos/locator.png"
        />
       <br/>
       <br/>
        <Typography color="secondary" variant="h10">
          COVID-19 Testing Center Locator and Appointment Dashboard
        </Typography>
      </div>
      <p className={classes.subtitle}>Welcome Back!</p>
      <div className={classes.container}>
        <form className={classes.formContainer} onSubmit={handleFormSubmit}>
          <div className={classes.textFieldContainer}>
            <TextField
              className={classes.textField}
              label="Email"
              onChange={handleEmailInputChange}
              type="email"
              value={emailInput}
              variant="outlined"
              required
            />
          </div>
          <div className={classes.textFieldContainer}>
            <TextField
              className={classes.textField}
              label="Password"
              onChange={handlePasswordInputChange}
              type="password"
              value={passwordInput}
              variant="outlined"
              required
            />
          </div>
          <Button
            onClick={handleFormSubmit}
            className={classes.button}
            variant="contained"
            color="primary"
          >
            Sign In
          </Button>
        </form>
      </div>
      <div className={classes.signUpMessage}>
        <Typography variant="body1">
          Need an account for your testing center?{" "}
          <Link color="primary" component={RouterLink} to="/register">
            <strong>Register</strong>
          </Link>
        </Typography>
      </div>
    </div>
  );
}
