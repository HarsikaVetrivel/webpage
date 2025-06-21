import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/AuthPlanet.css";

const mockUser = {
email: "harsha@example.com",
password: "serververse123",
};

const AuthPlanet = () => {
const [formData, setFormData] = useState({ email: "", password: "" });
const [message, setMessage] = useState("");
const [token, setToken] = useState(null);

const navigate = useNavigate(); // 🔹 Step 1: Initialize navigate

const handleChange = (e) => {
setFormData({ ...formData, [e.target.name]: e.target.value });
};

const handleLogin = (e) => {
e.preventDefault();

if (
  formData.email === mockUser.email &&
  formData.password === mockUser.password
) {
  const fakeToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...";
  setToken(fakeToken);
  setMessage("✅ Login Successful! Token stored.");
} else {
  setToken(null);
  setMessage("❌ Invalid email or password.");
}
};

return (
<div className="auth-container">
<h1>🔐 Welcome to Planet Authentication</h1>
<p>Learn how the server verifies user identity!</p>

  <form className="login-form" onSubmit={handleLogin}>
    <input
      type="email"
      name="email"
      placeholder="Email"
      value={formData.email}
      onChange={handleChange}
      required
    />
    <input
      type="password"
      name="password"
      placeholder="Password"
      value={formData.password}
      onChange={handleChange}
      required
    />
    <button type="submit">Login</button>
  </form>

  {message && <p className="auth-message">{message}</p>}

  {token && (
    <div className="token-box">
      <p>🎫 JWT Token:</p>
      <code>{token}</code>
    </div>
  )}

  {/* 🔹 Step 2: Next Page Button */}
  <button
    onClick={() => navigate("/deploy")}
    style={{
      marginTop: "2rem",
      padding: "10px 20px",
      fontSize: "16px",
      borderRadius: "8px",
      backgroundColor: "#0984e3",
      color: "white",
      border: "none",
      cursor: "pointer"
    }}
  >
    🚀 Next: Visit Planet Deployment
  </button>
</div>
);
};

export default AuthPlanet;
