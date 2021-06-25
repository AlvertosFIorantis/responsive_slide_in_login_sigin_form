import React from "react";
import UserNameIcon from "../SVG/UsernameIcon";

export default function LogInForm(props) {
  return (
    <>
      {" "}
      <div className="logo"></div>
      <div className="title">Log in</div>
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
      </div>
      <button className="signin-button">Login</button>{" "}
    </>
  );
}
