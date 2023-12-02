import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    // Simulate a simple login, you can replace this with actual authentication logic
    if (username === "user" && password === "password") {
      navigate("/");
    } else {
      alert("Invalid credentials");
    }
  };

  return (
    <div className="hero is-fullheight has-background-black">
      <div className="hero-body is-align-items-center">
        <div className="container has-text-centered">
          <div className="column is-6 is-offset-3">
            <div className="box has-background-white" style={{ height: "500px" }}>
              {/* Display the image/logo */}
              <img src="/user-icon.png" alt="Logo" style={{ width: "100px", marginBottom: "50px" }} />
              {/* Adjusted height to 500px */}
              <form>
                <div className="field">
                  <label className="label" style={{ width: "80px" }}>Username</label>
                  <div className="control">
                    <input
                      className="input has-background-grey-lighter"
                      type="text"
                      placeholder="Enter your username"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                    />
                  </div>
                </div>
                <div className="field" >
                  <label className="label" style={{ width: "80px" }} >Password </label>
                  <div className="control">
                    <input
                      className="input has-background-grey-lighter"
                      type="password"
                      placeholder="Enter your password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>
                </div>
                <div className="field">
                  <div className="control" >
                    <button
                      type="button"
                      className="button is-primary is-rounded"
                      onClick={handleLogin}
                    >
                      Login
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
    