import { signInWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { auth } from "../../firebase";
import '../styles/SignIn.css';
const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const signIn = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log(userCredential);
      })
      .catch((error) => {
        console.log(error);
        setError(error.message);
      });
  };

  return (
    <div className="container">
        <div className="left-section">
            
            <form onSubmit={signIn}>
                <h1 >GROWNSEED<br/>@HOME<br/></h1>
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
                {error && (
            <h6 className="error-message">{error}</h6>
          )}
                <button type="submit" className="grownseed-button">Log In</button>
            </form>
        </div>
    <div className="right-section">
          {/* Content for the right section */}
          {/* Consider adding images, additional information, or functionality here */}
    </div>
      </div>
  );
};

export default SignIn;