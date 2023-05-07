import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "./firebases";
import Chat from "./components/Chat";
import SignIn from "./components/SignIn";
import "./app.css";

function App() {
  const [user] = useAuthState(auth);

  return <>{user ? <Chat /> : <SignIn />}</>;
}

export default App;
