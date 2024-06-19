import React, { useEffect, useState } from "react";
import List from "./components/List/List";
import Detail from "./components/Detail/Detail";
import Chat from "./components/Chat/Chat";
import Login from "./components/Login/Login";
import Notification from "./components/Notification/Notification";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./lib/firebase";
import { useUserStore } from "./store/userStore";
import { useChatStore } from "./store/chatStore";
const App = () => {
  const [user, setUser] = useState(false);
  const { isLoading, currentUser, fetchUserInfo } = useUserStore();
  const { chatId } = useChatStore();
  useEffect(() => {
    const unSub = onAuthStateChanged(auth, (user) => {
      fetchUserInfo(user?.uid);
    });
    return () => {
      unSub();
    };
  }, [fetchUserInfo]);

  if (isLoading) {
    return <div className="loading">Loading..</div>;
  }

  return (
    <div className="container">
      {currentUser ? (
        <>
          <List />
          {chatId && <Chat />}
          {chatId && <Detail />}
        </>
      ) : (
        <Login />
      )}
      <Notification />
    </div>
  );
};

export default App;
