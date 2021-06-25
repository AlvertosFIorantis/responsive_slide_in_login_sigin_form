import React, { useState, useEffect } from "react";

function PasswordStrength(props) {
  const password = props.password;
  const [validations, setValidations] = useState([]);
  useEffect(() => {
    setValidations([
      password.length > 5,
      password.search(/[A-Z]/) > -1,
      password.search(/[0-9]/) > -1,
      password.search(/[$&+,:;=?@!#]/) > -1,
    ]);
  }, [password]);
  return (
    <ul>
      <li> {validations[0] ? "✔️" : "❌"} must be at least 5 characters</li>
      <li> {validations[1] ? "✔️" : "❌"} must contain a capital letter</li>
      <li> {validations[2] ? "✔️" : "❌"} must contain a number</li>
      <li> {validations[3] ? "✔️" : "❌"} must contain one of $&+,:;=?@#</li>
    </ul>
  );
}

export default PasswordStrength;
