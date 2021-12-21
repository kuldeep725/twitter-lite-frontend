// React core components
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import { useState, useEffect } from "react";

// User defined components
import Home from "./Component/Home";
import Login from "./Component/Login";
import PrivateRoute from "./Utils/PrivateRoute";
import Logout from "./Component/Logout";
import WhoToFollow from "./Component/WhoToFollow";

// Css
import "./App.css";

// Utility functions
import { getToken, removeUserSession, setUserSession } from "./Utils/Common";
import * as Rest from "./Utils/Rest";

function App() {
  const [authLoading, setAuthLoading] = useState(true);

  useEffect(() => {
    const token = getToken();
    console.log({token});
    if (!token) return;

    try {
      const response = Rest.verifyToken(token);
      setUserSession(response.data.token, response.data.user);
      setAuthLoading(false);
    } catch (e) {
      console.log({ e });
      removeUserSession();
      setAuthLoading(false);
    }
  }, []);

  if (authLoading && getToken()) {
    return <div className="content">Checking Authentication...</div>;
  }

  return (
    <Router>
      <Routes>
        <Route path="/" element={<PrivateRoute />}>
          <Route index element={<Home />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/whotofollow" element={<WhoToFollow />} />
        </Route>
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
