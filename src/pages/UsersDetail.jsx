import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const UsersDetail = () => {
  const [user, setUser] = useState({});
  const { id } = useParams();

  const getUserDetail = () => {
    axios
      .get(`https://reqres.in/api/users/${id}`)
      .then((res) => {
        setUser(res?.data?.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getUserDetail();
  }, []);

  console.log("data", user);

  return (
    <div>
      <Navbar />
      <h1>User Details</h1>
      <img src={user.avatar} alt={user?.firstname} />
      <h1>First Name : {user?.first_name} </h1>
      <h1>Last Name : {user?.last_name}</h1>
      <p>Email : {user?.email}</p>
      <Footer />
    </div>
  );
};

export default UsersDetail;
