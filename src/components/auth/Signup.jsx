import React, { useState } from "react";
import { auth } from "../../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import '../styles/SignIn.css';
const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cpassword, setcPassword] = useState("");
  const [passwordsMatch, setPasswordsMatch] = useState(true);
  const [error, setError] = useState(null);
  const signUp = (e) => {
    e.preventDefault();
    if (password === cpassword) {
      // Passwords match, proceed with signup
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          console.log(userCredential);
        })
        .catch((error) => {
          console.log(error);
          setError(error.message);
        });
    } else {
      // Passwords do not match, set passwordsMatch state to false
      setPasswordsMatch(false);
    }
  };

  return (
    <div className="container">
        <div className="left-section">
            
            <form onSubmit={signUp}>
                <h1 >GET<br/>STARTED<br/>NOW<br/></h1>
                <h6 className="textcomment">Email address
                <br/> <input className="rounded-textfield"
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}>    
                </input>
                </h6>
                <h6 className="textcomment">Password
                <br/><input className="rounded-textfield"
                    type="password"
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}>
                </input>
                </h6>
                <h6 className="textcomment">Confirm Password
                <br/><input className="rounded-textfield"
                    type="password"
                    placeholder="Enter your password"
                    value={cpassword}
                      onChange={(e) => setcPassword(e.target.value)}>
                </input>
                </h6>
                {!passwordsMatch && (
                  <h6 className="error-message">Passwords do not match. Please try again.</h6>
                )}
                {error && (
                  <h6 className="error-message">{error}</h6>
                )}
                <button type="submit" className="grownseed-button">Sign Up</button>
            </form>
        </div>
    <div className="right-section">
          {/* Content for the right section */}
          {/* Consider adding images, additional information, or functionality here */}
    </div>
      </div>
  );
};

export default SignUp;