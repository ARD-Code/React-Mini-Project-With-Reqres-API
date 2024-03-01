import axios from "axios";
import { useEffect, useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [notif, setNotif] = useState("");

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleLogin = () => {
    const payload = {
      email: email,
      password: password,
    };
    axios
      .post("https://reqres.in/api/login", payload)
      .then((res) => {
        setNotif("Login Berhasil");
        const token = res?.data?.token;
        localStorage.setItem("access_token", token);
      })
      .catch((err) => {
        setNotif(err?.response?.data?.error);
      });
  };

  return (
    <div>
      <h1 style={{ marginTop: "100px" }}>Login</h1>
      {!!notif.length && <h1>{notif}</h1>}
      <input type="email" placeholder="email" onChange={handleEmail} />
      <input type="password" placeholder="password" onChange={handlePassword} />
      <div>
        <button onClick={handleLogin}>Login</button>
      </div>
    </div>
  );
};

export default Login;
