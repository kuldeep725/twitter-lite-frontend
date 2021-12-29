import React, { useState } from "react";
import { setUserSession } from "../Utils/Common";
import Rest from "../Utils/Rest";
import { useNavigate } from "react-router-dom";

import "../Css/login.css";

const Login = () => {
  const [loading, setLoading] = useState(false);
  const usernameInput = useFormInput("");
  const passwordInput = useFormInput("");
  const [error, setError] = useState(null);
  let navigate = useNavigate();

  const handleLogin = async (e) => {
    console.log("handleLogin called...");
    e.preventDefault();
    setError(null);
    setLoading(true);
    try {
      const response = await Rest.login(
        usernameInput.value,
        passwordInput.value
      );
      setLoading(false);
      console.log({ response });
      setUserSession(response.data.token, response.data.user);
      let followings = (await Rest.getFollowings()).data;
      console.log({followings});
      navigate(followings.length ? "/" : "/whotofollow");
    } catch (error) {
      console.log({ error });
      setLoading(false);
      if ([400, 401].includes(error.response.data.status))
        setError(error.response.data.message);
      else setError("Something went wrong. Please try again later.");
    }
  };

  return (
    // <div className="container">
      <form className="container login-form">
        <h1 className="italic">Twitter-lite</h1>
        <div className="form-item">
          <input
            type="text"
            {...usernameInput}
            id="username"
            name="username"
            autoComplete="new-password"
            placeholder="Username"
          />
        </div>
        <div className="form-item">
          <input
            type="password"
            {...passwordInput}
            id="password"
            name="password"
            autoComplete="new-password"
            placeholder="Password"
          />
        </div>
        {error && (
          <div className="error">
            <small style={{ color: "red" }}>{error}</small>
          </div>
        )}
        <div className="login-btn">
          <input
            type="submit"
            value={loading ? "Loading..." : "Log in"}
            disabled={loading}
            onClick={handleLogin}
          />
        </div>
      </form>
    // </div>
  );
};

const useFormInput = (initalValue) => {
  const [value, setValue] = useState(initalValue);
  return {
    value,
    onChange: (e) => setValue(e.target.value),
  };
};

export default Login;
