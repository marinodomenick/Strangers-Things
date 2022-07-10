import React, { useState } from "react";

import { registerUser } from "../api/auth";

export default function Register({ setToken }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div>
      <h4>Register:</h4>
      <form className="loginbox"
        onSubmit={async (e) => {
          e.preventDefault();
          const result = await registerUser(username, password);
          localStorage.setItem("token", result.data.token);
          setToken(result.data.token);
          setPassword("");
          setUsername("");
        }}
      >
        <input className="login"
          value={username}
          placeholder="username"
          onChange={(e) => setUsername(e.target.value)}
        />
        <input className="login"
          value={password}
          placeholder="password"
          type="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="login" type="submit">Submit!</button>
      </form>
    </div>
  );
}