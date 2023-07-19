import "./Login.css";
import { React, useState } from "react";
import { createUserWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { auth, provider } from "../../FirebaseConfig/Firebase";
import { FcGoogle } from "react-icons/fc";
import { SyncLoader } from "react-spinners";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading1, setIsLoading1] = useState(false);
  const [isLoading2, setIsLoading2] = useState(false);
  const [isLoading3, setIsLoading3] = useState(false);

  const SignInUser = (e) => {
    window.location.replace("Eventpage");

    e.preventDefault();
  };
  const SignUpAsAdmin = () => {
    setIsLoading1(true);
    if (email === "Admin") {
      setIsLoading1(true);
      window.location.replace("Attendance");
    } else {
      setIsLoading1(false);
      alert("Enter login details");
    }
  };
  const GoogleSignIn = async (e) => {
    setIsLoading2(true);
    try {
      await signInWithPopup(auth, provider);
      if (auth.currentUser) {
        console.log("then login", auth);
        console.log(auth.currentUser);
        SignInUser();
      } else {
        setIsLoading2(false);
        console.log("stranger");
      }
    } catch (error) {
      if (error.code === "auth/internal-error") {
        setIsLoading2(false);
        alert("Check Internet conection");
      } else if (error.code === "auth/popup-closed-by-user") {
        setIsLoading2(false);

        alert("Popup closed by user");
      }
      console.log(error.code);
    }
    e.preventDefault();
  };

  const Signup = async (e) => {
    try {
      setIsLoading3(true);
      await createUserWithEmailAndPassword(auth, email, password);
      if (auth.currentUser) {
        console.log("then login", auth);
        SignInUser();
      } else {
      }
    } catch (err) {
      setIsLoading3(false);
      if (err.code === "auth/invalid-email") {
        alert("Enter a valid Email and Password");
      } else if (email === "" && password === "") {
        alert("Enter a valid Email and Password");
      } else if (err.code === "auth/internal-error") {
        alert("Check Internet conection");
      }
    }

    e.preventDefault();
  };

  return (
    <div className="login-div">
      <form className="form-container-login">
        <h4 className="form-header">LOGIN</h4>
        <label className="username-label">Email</label>
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
          {isLoading3 ? (
            <SyncLoader height={5} width={4} size={7} color="#d6c138" />
          ) : (
            "Login"
          )}
        </button>

        <div className="google-btn-container">
          <FcGoogle className="glogo" />
          <button className="googlebtn" onClick={GoogleSignIn}>
            {isLoading2 ? (
              <SyncLoader height={5} width={4} size={7} color="#d6c138" />
            ) : (
              "Sign in with Google"
            )}
          </button>
        </div>

        <button onClick={SignUpAsAdmin} className="login-btn">
          {isLoading1 ? (
            <SyncLoader height={5} width={4} size={7} color="#d6c138" />
          ) : (
            "Admin"
          )}
        </button>
      </form>
    </div>
  );
};

export default Login;
