import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

const Register = () => {
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

  const handleRegister = () => {
    const payload = {
      email: email,
      password: password,
    };

    setLoading(true);

    axios
      .post("https://reqres.in/api/register", payload)
      .then((res) => {
        setNotif("Register Success");
        const token = res?.data?.token;
        localStorage.setItem("access_token", token);
        setLoading(false);
        if (token) {
          setTimeout(() => {
            navigate("/users");
          }, 4000);
        }
      })
      .catch((err) => {
        setLoading(false);
        console.log(err.response);
        setNotif("Register Failed");
      });
  };

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap"
        rel="stylesheet"
      />
      <section
        className="vh-100"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1521193089946-7aa29d1fe776?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`,
          backgroundSize: "cover",
          borderRadius: "1rem",
        }}
      >
        <div
          className="container py-5 h-100"
          data-aos="fade-right"
          data-aos-duration="2000"
        >
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col col-xl-10">
              <div className="card" style={{ borderRadius: "1rem" }}>
                <div className="row g-0">
                  <div
                    className="col-md-6 col-lg-5 d-none d-md-block"
                    data-aos="fade-right"
                    data-aos-duration="2000"
                  >
                    <img
                      src="https://images.unsplash.com/photo-1527826507412-72e447368aa1?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                      alt="login form"
                      className="img-fluid"
                      style={{
                        borderRadius: "1rem 0 0 1rem",
                        width: "100%",
                        height: "100%",
                      }}
                    />
                  </div>
                  <div className="col-md-6 col-lg-7 d-flex align-items-center">
                    <div
                      className="card-body p-4 p-lg-5 text-black"
                      data-aos="fade-up"
                      data-aos-duration="1000"
                    >
                      {notif && (
                        <div
                          className={`alert ${
                            notif === "Login Berhasil"
                              ? "alert-light"
                              : "alert-light"
                          } alert-dismissible fade show`}
                          role="alert"
                          style={{
                            backgroundColor: "white",
                            color: "#393f81",
                            fontFamily: "Poppins",
                          }}
                        >
                          {notif}
                          <button
                            type="button"
                            className="btn-close"
                            data-bs-dismiss="alert"
                            aria-label="Close"
                          ></button>
                        </div>
                      )}
                      <form>
                        <div className="d-flex align-items-center mb-3 pb-1">
                          <i
                            className="fas fa-cubes fa-2x me-3"
                            style={{ color: "#ff6219" }}
                          ></i>
                          <span
                            className="h1 fw-bold mb-0"
                            style={{
                              fontFamily: "Poppins",
                              padding: "0 2rem",
                              fontWeight: 600,
                            }}
                          >
                            Register
                          </span>
                        </div>

                        <h5
                          className="fw-normal mb-3 pb-3"
                          style={{
                            letterSpacing: "1px",
                            fontFamily: "Poppins",
                          }}
                        >
                          Make your account
                        </h5>

                        <div className="form-outline mb-4">
                          <input
                            type="email"
                            onChange={handleEmail}
                            className="form-control form-control-lg"
                          />
                          <label
                            className="form-label"
                            style={{
                              letterSpacing: "1px",
                              fontFamily: "Poppins",
                            }}
                          >
                            Email address
                          </label>
                        </div>

                        <div className="form-outline mb-4">
                          <input
                            type="password"
                            onChange={handlePassword}
                            className="form-control form-control-lg"
                          />
                          <label
                            className="form-label"
                            style={{
                              letterSpacing: "1px",
                              fontFamily: "Poppins",
                            }}
                          >
                            Password
                          </label>
                        </div>

                        <div className="pt-1 mb-4">
                          <button
                            className="btn  btn-lg btn-block"
                            disabled={loading ? true : false}
                            onClick={handleRegister}
                            style={{
                              backgroundColor: "#0480b5",
                              color: "white",
                              fontFamily: "Poppins",
                            }}
                          >
                            {loading ? "Loading..." : "Login"}
                          </button>
                        </div>

                        <p
                          className="mb-5 pb-lg-2"
                          style={{ color: "#393f81", fontFamily: "Poppins" }}
                        >
                          have an account?{" "}
                          <a
                            href="/login"
                            style={{ color: "#393f81", fontFamily: "Poppins" }}
                          >
                            Login here
                          </a>
                        </p>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Register;
