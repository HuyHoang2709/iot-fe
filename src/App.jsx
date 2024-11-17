import { useEffect } from "react";
import "./App.css";
import { useState } from "react";
import { Authen } from "./Authen";
import { Dashboard } from "./Dashboard";

const App = () => {
  const [user, setUser] = useState({
    id: 1,
    name: "admin",
  });
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
    </>
  );
};

export default App;
