import React, { useState } from "react";
import List from "./components/List/List";
import Detail from "./components/Detail/Detail";
import Chat from "./components/Chat/Chat";
import Login from "./components/Login/Login";
import Notification from "./components/Notification/Notification";
const App = () => {
  const [user, setUser] = useState(true);
  return (
    <div className="container">
      {user ? (
        <>
          <List />
          <Chat />
          <Detail />
        </>
      ) : (
        <Login />
      )}
      <Notification />
    </div>
  );
};

export default App;
