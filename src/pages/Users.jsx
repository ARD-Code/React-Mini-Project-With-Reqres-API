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
      <h1 style={{ marginTop: "100px" }}>User list Page</h1>
      {users.map((item, index) => (
        <div key={index}>
          <h1>{`${item.first_name} ${item.last_name}`}</h1>
          <Link to={`/userdetail/${item.id}`}>
            <img src={item.avatar} alt={item.first_name} />
          </Link>
        </div>
      ))}
      <div style={{ marginTop: "20px" }}>
        <button onClick={prevPage} disabled={page === 1}>
          Previous
        </button>
        {[...Array(totalPages).keys()].map((pageNumber) => (
          <button
            key={pageNumber + 1}
            onClick={() => changePage(pageNumber + 1)}
          >
            {pageNumber + 1}
          </button>
        ))}
        <button onClick={nextPage} disabled={page === totalPages}>
          Next
        </button>
      </div>
      <Footer />
    </div>
  );
};

export default Users;
