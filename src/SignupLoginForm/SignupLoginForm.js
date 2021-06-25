import React, { useState, useEffect } from "react";
import "./signupLoginForm.css";
import WidthSizeCustHook from "./WidthSizeCustHook";
// my SVGS and components
import PasswordStrength from "./components/PasswordStrength";

import LogInForm from "./components/LogInForm";
import SignUpForm from "./components/SignUpForm";

export default function SignupLoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [ConPassword, setConPassword] = useState("");

  const [showPassword, setShowPassword] = useState(false);

  const [showCssClasses, setShowCssClasses] = useState(false);
  const [showCssClassesTimeout, setShowCssClassesTimeout] = useState(false);
  const [matchingPasswords, setMatchingPasswords] = useState(false);
  // state for window width so i can render component conditinally:
  const [width, setWidth] = WidthSizeCustHook();
  // console.log(width)

  const emailHandler = (e) => {
    setEmail(e.target.value);
  };

  const ConfirmPasswordHandler = (e) => {
    setConPassword(e.target.value);
  };

  useEffect(() => {
    if (ConPassword === password) {
      setMatchingPasswords(true);
    }
    if (ConPassword !== password) {
      setMatchingPasswords(false);
    }
  }, [password, ConPassword]);

  const validatePassword = (e) => {
    setPassword(e.target.value);
  };

  const showPasswordHandler = (argument) => {
    if (argument) {
      setShowPassword(true);
    }
    if (!argument) {
      setShowPassword(false);
    }
  };

  const addCssClassesHandler = () => {
    if (showCssClasses) {
      setShowCssClasses(false);
      setShowCssClassesTimeout(false);
    }
    if (!showCssClasses) {
      setShowCssClasses(true);
      setTimeout(function () {
        setShowCssClassesTimeout(true);
      }, 600);
    }
  };
  if (width > 550) {
    return (
      <div className="sign-up-body">
        <div
          className={
            showCssClasses ? "container right-panel-active" : "container"
          }
          id="container"
        >
          <div className="overlay-container">
            <div className="overlay">
              <div className="overlay-panel overlay-left">
                <h1>Welcome Back!</h1>
                <p>
                  To keep connected with us please login with your personal info
                </p>
                <button
                  className="ghost"
                  id="signIn"
                  onClick={addCssClassesHandler}
                >
                  Sign In
                </button>
              </div>
              <div className="overlay-panel overlay-right">
                <h1>Hello, Friend!</h1>
                <p>Enter your personal details and start journey with us</p>
                <button
                  className="ghost"
                  id="signUp"
                  onClick={addCssClassesHandler}
                >
                  Sign Up
                </button>
              </div>
            </div>
          </div>
        </div>
        <div
          className={
            showCssClasses ? "login-div login-div-active" : "login-div"
          }
        >
          <LogInForm
            emailHandler={emailHandler}
            email={email}
            showPassword={showPassword}
            password={password}
            validatePassword={validatePassword}
            showPasswordHandler={showPasswordHandler}
          />
        </div>

        <div
          className={
            showCssClassesTimeout
              ? "login-div-login login-div-login-active"
              : "login-div-login "
          }
        >
          <SignUpForm
            showPassword={showPassword}
            PasswordStrength={PasswordStrength}
            emailHandler={emailHandler}
            email={email}
            password={password}
            validatePassword={validatePassword}
            ConPassword={ConPassword}
            ConfirmPasswordHandler={ConfirmPasswordHandler}
            showPasswordHandler={showPasswordHandler}
            matchingPasswords={matchingPasswords}
          />
        </div>
      </div>
    );
  } else {
    return (
      <div className="sign-up-body">
        <label className="switch" style={{ marginTop: "50px" }}>
          <input type="checkbox" id="togBtn" onClick={addCssClassesHandler} />
          <div className="slider round"></div>
        </label>
        <div
          className={
            showCssClassesTimeout
              ? "login-div-small  display-help "
              : "login-div-small "
          }
        >
          <LogInForm
            emailHandler={emailHandler}
            email={email}
            showPassword={showPassword}
            password={password}
            validatePassword={validatePassword}
            showPasswordHandler={showPasswordHandler}
          />
        </div>

        <div
          className={
            showCssClassesTimeout
              ? "login-div-small "
              : "login-div-small display-help"
          }
        >
          <SignUpForm
            showPassword={showPassword}
            PasswordStrength={PasswordStrength}
            emailHandler={emailHandler}
            email={email}
            password={password}
            validatePassword={validatePassword}
            ConPassword={ConPassword}
            ConfirmPasswordHandler={ConfirmPasswordHandler}
            showPasswordHandler={showPasswordHandler}
            matchingPasswords={matchingPasswords}
          />
        </div>
      </div>
    );
  }
}
