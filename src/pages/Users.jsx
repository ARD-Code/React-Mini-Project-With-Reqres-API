import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import axios from "axios";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";

const Users = () => {
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const getUsersData = (pageNumber) => {
    axios
      .get(`https://reqres.in/api/users?page=${pageNumber}`)
      .then((res) => {
        setUsers(res.data.data);
        setTotalPages(res.data.total_pages);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getUsersData(page);
  }, [page]);

  const nextPage = () => {
    if (page < totalPages) {
      setPage(page + 1);
    }
  };

  const prevPage = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };

  const changePage = (pageNumber) => {
    setPage(pageNumber);
  };

  return (
    <div>
      <Navbar />

      <div className="container mt-5 pt-5 ">
        <div className="row row-cols-1 row-cols-md-3 g-4">
          {users.map((user, index) => (
            <div key={index} className="col">
              <div className="card h-100">
                <img
                  src={user.avatar}
                  className="card-img-top img-fluid"
                  alt={`${user.first_name} ${user.last_name}`}
                  style={{ height: "200px", objectFit: "cover" }}
                />
                <div className="card-body">
                  <h5 className="card-title">
                    {`${user.first_name} ${user.last_name}`}
                  </h5>
                  <Link
                    to={`/userdetail/${user.id}`}
                    className="btn text-white rounded-pill"
                    style={{ backgroundColor: "#321f1c" }}
                  >
                    View Details
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="d-flex justify-content-center mt-4 mb-5">
        <button
          className="btn btn-primary me-2"
          onClick={prevPage}
          disabled={page === 1}
          style={{ backgroundColor: "#321f1c", borderColor: "#321f1c" }}
        >
          Previous
        </button>
        {[...Array(totalPages).keys()].map((pageNumber) => (
          <button
            key={pageNumber + 1}
            className={`btn ${
              page === pageNumber + 1 ? "btn-primary" : "btn-secondary"
            } me-2`}
            onClick={() => changePage(pageNumber + 1)}
            style={{
              backgroundColor: page === pageNumber + 1 ? "#321f1c" : "",
              borderColor: page === pageNumber + 1 ? "#321f1c" : "",
            }}
          >
            {pageNumber + 1}
          </button>
        ))}
        <button
          className="btn btn-primary"
          onClick={nextPage}
          disabled={page === totalPages}
          style={{ backgroundColor: "#321f1c", borderColor: "#321f1c" }}
        >
          Next
        </button>
      </div>

      <Footer />
    </div>
  );
};

export default Users;
