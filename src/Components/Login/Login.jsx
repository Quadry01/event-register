import "./Login.css";
import { React, useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { auth, provider } from "../../FirebaseConfig/Firebase";
import { FcGoogle } from "react-icons/fc";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const SignInUser = (e) => {
    window.location.replace("Eventpage");

    e.preventDefault();
  };
  const SignUpAsAdmin = () => {
    if (email === "Admin") {
      window.location.replace("Attendance");
    } else {
    }
  };
  const GoogleSignIn = async (e) => {
    try {
      await signInWithPopup(auth, provider);
      if (auth.currentUser) {
        console.log("then login", auth);
        SignInUser();
      } else {
        console.log("stranger");
      }
    } catch (error) {
      console.log(error);
    }
    e.preventDefault();
  };

  const Signup = (e) => {
    try {
      createUserWithEmailAndPassword(auth, email, password);
      if (auth.currentUser) {
        console.log("then login", auth);
        SignInUser();
      } else {
        console.log("stranger");
      }
    } catch (error) {}
    e.preventDefault();
  };

  return (
    <div className="login-div">
      <form className="form-container-login">
        <h4 className="form-header">LOGIN</h4>
        <label className="username-label">Username</label>
        <input
          required
          className="name-input"
          placeholder="Type your Email"
          type="email"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <label className="password-label">Password</label>
        <input
          required
          className="password-input"
          placeholder="Type your password"
          type="password"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />

        <button onClick={Signup} className="login-btn">
          Login
        </button>

        <div className="google-btn-container">
          <FcGoogle className="glogo" />
          <button className="googlebtn" onClick={GoogleSignIn}>
            Sign in with Google
          </button>
        </div>

        <button onClick={SignUpAsAdmin} className="login-btn">
          Admin
        </button>
      </form>
    </div>
  );
};

export default Login;
