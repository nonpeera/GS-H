import { onAuthStateChanged, signOut } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { auth } from "../../firebase";
import "../styles/Header.css";
import "../styles/Auth.css" ;
const AuthDetails = () => {
  const [authUser, setAuthUser] = useState(null);

  useEffect(() => {
    const listen = onAuthStateChanged(auth, (user) => {
      if (user) {
        setAuthUser(user);
      } else {
        setAuthUser(null);
      }
    });

    return () => {
      listen();
    };
  }, []);

  const userSignOut = () => {
    signOut(auth)
      .then(() => {
        console.log("sign out successful");
      })
      .catch((error) => console.log(error));
  };

  return (
    <div>
      {authUser ? (
        <>
          <div className="nav-item">{`Signed In as ${authUser.email}`}<button onClick={userSignOut} className="signout">Sign Out</button></div>
        </>
      ) : (
        <p> </p>
      )}
    </div>
  );
};

export default AuthDetails;