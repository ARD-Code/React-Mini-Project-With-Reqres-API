import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const UsersDetail = () => {
  const [user, setUser] = useState({});
  const { id } = useParams();

  const getUserDetail = () => {
    axios
      .get(`https://reqres.in/api/users/${id}`)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getUserDetail();
  }, []);

  return (
    <div>
      <h1>This is users detail</h1>
    </div>
  );
};

export default UsersDetail;
