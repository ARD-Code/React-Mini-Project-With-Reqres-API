import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import axios from "axios";

const Users = () => {
  const [users, setUsers] = useState();

  const getUsersData = () => {
    axios
      .get("https://reqres.in/api/users?page=1")
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getUsersData();
  }, []);

  // console.log("data", users);
  return (
    <div>
      <Navbar />
      <h1 style={{ marginTop: "100px" }}>User list Page</h1>
    </div>
  );
};

export default Users;
