import React from "react";
import { auth } from "../firebases";
import { signOut } from "firebase/auth";
const SignOut = () => {
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        console.log("logged out");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div>
      <button
        style={{
          padding: "20px",
          fontSize: "15px",
          borderRadius: "0",
          fontWeight: "600",
        }}
        onClick={handleSignOut}
      >
        Sign Out
      </button>
    </div>
  );
};

export default SignOut;
