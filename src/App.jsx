import { useEffect } from "react";
import "./App.css";
import { useState } from "react";
import { Authen } from "./Authen";
import { Dashboard } from "./Dashboard";
import { user as mockUser } from "../data/mockData";
import { ToastContainer } from "react-toastify";

const App = () => {
  const [user, setUser] = useState(mockUser);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    if (user) {
      setIsAuthenticated(true);
    }
  }, [user]);

  return (
    <>
      {isAuthenticated && <Dashboard user={user} />}
      {!isAuthenticated && <Authen setUser={setUser} />}
      <ToastContainer />
    </>
  );
};

export default App;
