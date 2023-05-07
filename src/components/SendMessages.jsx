import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import React, { useState } from "react";
import { auth, db } from "../firebases";

const SendMessages = () => {
  const [msg, setMsg] = useState("");

  const sendMessages = (e) => {
    e.preventDefault();

    console.log(msg);
    const { uid, photoURL } = auth.currentUser;

    console.log(uid);
    console.log(photoURL);

    addDoc(collection(db, "messages"), {
      text: msg,
      photoURL,
      uid,
      createdAt: serverTimestamp(),
    });
    setMsg("");
  };

  return (
    <div>
      <form onSubmit={sendMessages}>
        <div className="sendMsg">
          <input
            style={{
              width: "78%",
              fontSize: "15px",
              fontWeight: "550",
              marginLeft: "5px",
              marginBottom: "-3px",
            }}
            placeholder="Message..."
            type="text"
            value={msg}
            onChange={(e) => setMsg(e.target.value)}
          />
          <button
            style={{
              width: "18%",
              fontSize: "15px",
              fontWeight: "550",
              margin: "4px 5% -13px 5%",
              maxWidth: "200px",
            }}
            type="submit"
          >
            Send
          </button>
        </div>
      </form>
    </div>
  );
};

export default SendMessages;
