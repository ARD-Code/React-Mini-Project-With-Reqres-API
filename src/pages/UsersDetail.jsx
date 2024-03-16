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

  return (
    <div style={{ fontFamily: "Poppins, sans-serif" }}>
      <Navbar />
      <div className="container mt-5 pt-5">
        <div className="row justify-content-center">
          <div className="col-md-8">
            <div className="card border-primary">
              <div className="card-body">
                <div className="row">
                  <div className="col-md-6">
                    <img
                      src={user.avatar}
                      alt={user?.firstname}
                      className="img-fluid rounded"
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                      }}
                    />
                  </div>
                  <div className="col-md-6 d-flex align-items-center">
                    <div>
                      <h2 className="mb-3 border-bottom pb-2">
                        First Name: {user?.first_name}
                      </h2>
                      <h2 className="mb-3 border-bottom pb-2">
                        Last Name: {user?.last_name}
                      </h2>
                      <p className="mb-3 border-bottom pb-2">
                        Email: {user?.email}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UsersDetail;
