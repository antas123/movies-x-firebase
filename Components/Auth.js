import React, { useState } from "react";
import "./auth.css";
import app from "./firebase";
import logof from "../images/Movieslogo.png";
import { getAuth, createUserWithEmailAndPassword , signInWithEmailAndPassword} from "firebase/auth";

function Auth({ onAuth }) {
  const auth = getAuth(app);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signUp = () => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user);
        setEmail("");
        setPassword("");
        alert("Success. Now Sign In using same credentials to enter the site.");
      })
      .catch((error) => {
        const errorCode = error.code;
        //const errorMessage = error.message;
        console.log(errorCode);
        alert(errorCode);
      });
  };
  
  const signIn = () => {
  signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    onAuth();
    localStorage.setItem('token' , userCredential.user.accessToken);
  })
  .catch((error) => {
    const errorCode = error.code;
    alert(errorCode)
    // const errorMessage = error.message;
    
  });
  }

  return (
    <>
      <main className="form-signin text-center">
        <div>
        <img className="logof" src={logof} alt="logo"  width="100"
            height="150"/>
          {/* <img
            className="mb-4"
            src="/docs/5.0/assets/brand/bootstrap-logo.svg"
            alt=""
            width="72"
            height="57"
          /> */}
          <h1 className="h3 mb-3 fw-normal">Please sign in</h1>

          <div className="form-floating">
            <input
              type={"email"}
              className="form-control"
              id="floatingInput"
              placeholder="name@example.com"
              onChange={(e)=> setEmail(e.target.value)}
              value={email}
            />
            <label htmlFor="floatingInput">Email address</label>
          </div>
          <div className="form-floating">
            <input
              type={"password"}
              className="form-control"
              id="floatingPassword"
              placeholder="Password"
              onChange={(e)=> setPassword(e.target.value)}
              value={password}
            />
            <label htmlFor="floatingPassword">Password</label>
          </div>

          {/* <div className="checkbox mb-3">
            <label>
              <input type="checkbox" value="remember-me" /> Remember me
            </label>
          </div> */}
          <button onClick={signUp} className="w-100 btn btn-lg btn-primary">
            Sign Up
          </button>
          <button onClick={signIn} className="w-100 btn btn-lg btn-success">
            Sign In
          </button>
          <p className="mt-5 mb-3 text-muted">&copy; 2022-Antas Sachan</p>
        </div>
      </main>
    </>
  );
}

export default Auth;