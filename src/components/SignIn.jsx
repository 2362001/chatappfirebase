import { signInWithPopup } from "firebase/auth";
import React from "react";
import { auth, provider } from "../firebases";

const SignIn = () => {
  function signInWithGoogle() {
    return signInWithPopup(auth, provider);
  }

  return (
    <div>
      <button
        style={{
          padding: "30px",
          fontSize: "20px",
          borderRadius: "0",
          fontWeight: "600",
        }}
        onClick={signInWithGoogle}
      >
        Sign in with Google
      </button>
    </div>
  );
};

export default SignIn;
