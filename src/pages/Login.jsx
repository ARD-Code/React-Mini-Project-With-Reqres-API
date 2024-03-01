import axios from "axios";
import { useEffect, useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    axios
      .get("https://reqres.in/api/login")
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <h1 style={{ marginTop: "100px" }}>Login</h1>
      <input type="email" placeholder="email" />
      <input type="password" placeholder="password" />
      <div>
        <button>Login</button>
      </div>
    </div>
  );
};

export default Login;
