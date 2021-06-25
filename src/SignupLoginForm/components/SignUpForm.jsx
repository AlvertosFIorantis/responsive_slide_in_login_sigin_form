import React from "react";
import UserNameIcon from "../SVG/UsernameIcon";
import PasswordStrength from "./PasswordStrength";

export default function SignUpForm(props) {
  return (
    <>
      <div className="logo"></div>
      <div className="title">Sign Up</div>

      <div className="fields">
        <div className="username">
          <UserNameIcon className={"svg-icon"} fill={"#999"} />

          <input
            type="username"
            className="user-input"
            onChange={props.emailHandler}
            placeholder="email"
            value={props.email}
          />
        </div>

        <div className="password">
          <UserNameIcon className={"svg-icon"} fill={"#999"} />
          <input
            type={props.showPassword ? "text" : "password"}
            className="pass-input"
            placeholder="password"
            value={props.password}
            onChange={props.validatePassword}
          />
          <span
            className="toggle-password"
            onMouseEnter={() => props.showPasswordHandler(true)}
            onMouseLeave={() => props.showPasswordHandler(false)}
          >
            {props.showPassword ? "👁️" : "👁️"}
          </span>
        </div>

        <PasswordStrength password={props.password} />

        <div className="password">
          <UserNameIcon className={"svg-icon"} fill={"#999"} />
          <input
            type={props.showPassword ? "text" : "password"}
            className="pass-input"
            placeholder="Confirm Password"
            value={props.ConPassword}
            onChange={props.ConfirmPasswordHandler}
          />
          <span
            className="toggle-password"
            onMouseEnter={() => props.showPasswordHandler(true)}
            onMouseLeave={() => props.showPasswordHandler(false)}
          >
            {props.showPassword ? "👁️" : "👁️"}
          </span>
        </div>
      </div>

      <button
        type="button"
        disabled={!props.matchingPasswords}
        className="signin-button"
      >
        Sign Up
      </button>
    </>
  );
}
