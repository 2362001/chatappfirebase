import {
  collection,
  limit,
  onSnapshot,
  orderBy,
  query,
} from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { auth, db } from "../firebases";
import SendMessages from "./SendMessages";
import SignOut from "./SignOut";

const Chat = () => {
  const [messages, setMessages] = useState([]);
  useEffect(() => {
    const q = query(
      collection(db, "messages"),
      orderBy("createdAt"),
      limit(50)
    );
    onSnapshot(q, (snapshot) => {
      setMessages(snapshot.docs.map((doc) => doc.data()));
    });
  }, []);

  return (
    <>
      <SignOut />
      <div>
        {messages.map(({ id, text, photoURL, uid }) => (
          <div>
            <div
              key={id}
              className={`msg ${
                uid === auth.currentUser.uid ? "sent" : "received"
              }`}
            >
              <img src={photoURL} alt="" />
              <p>{text}</p>
            </div>
          </div>
        ))}
      </div>
      <SendMessages />
    </>
  );
};

export default Chat;
