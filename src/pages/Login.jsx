import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [notif, setNotif] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

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

    setLoading(true);

    axios
      .post("https://reqres.in/api/login", payload)
      .then((res) => {
        setNotif("Login Berhasil");
        const token = res?.data?.token;
        localStorage.setItem("access_token", token);
        setLoading(false);
        if (token) {
          setTimeout(() => {
            navigate("/users");
          }, 2000);
        }
      })
      .catch((err) => {
        setLoading(false);
        console.log(err.response);
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
        <button disabled={loading ? true : false} onClick={handleLogin}>
          {loading ? "Loading..." : "Login"}
        </button>
      </div>
    </div>
  );
};

export default Login;
