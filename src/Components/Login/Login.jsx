import { Link } from "react-router-dom";
import "./Login.css";
import { React, useState } from "react";
const Login = () => {
  const [username, setUsername] = useState("");
  const [route, setRoute] = useState("");

  function LoginHandler(e) {
    // e.preventDefault();
    if (username === "Admin1") {
      setRoute("Attendance");
    } else if (username === "User1") {
      setRoute("Eventpage");
    } else if (username === "") {
      alert("Please enter Username and Password");
    } else {
      alert("Username or Password Mismatch");
    }
  }

  return (
    <div className="login-div">
      <form className="form-container-login">
        <h4 className="form-header">LOGIN</h4>
        <label className="username-label">Username</label>
        <input
          value={username}
          className="name-input"
          placeholder="Type your username"
          type="text"
          onChange={(e) => {
            setUsername(e.target.value);
          }}
        />
        <label className="password-label">Password</label>
        <input
          className="password-input"
          placeholder="Type your password"
          type="password"
        />
        <Link to={`/${route}`}>
          <button onClick={LoginHandler} className="login-btn">
            Login
          </button>
        </Link>
      </form>
    </div>
  );
};

export default Login;
