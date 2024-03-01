import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import axios from "axios";
import { Link } from "react-router-dom";

const Users = () => {
  const [users, setUsers] = useState([]);

  const getUsersData = () => {
    axios
      .get("https://reqres.in/api/users?page=1")
      .then((res) => {
        setUsers(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getUsersData();
  }, []);

  console.log("data", users);
  return (
    <div>
      <Navbar />
      <h1 style={{ marginTop: "100px" }}>User list Page</h1>
      {users.map((item, index) => (
        <div key={index}>
          <h1>{`${item.first_name} ${item.last_name}`}</h1>
          <Link to={`/userdetail/${item.id}`}>
            <img src={item.avatar} alt={item.first_name} />
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Users;
