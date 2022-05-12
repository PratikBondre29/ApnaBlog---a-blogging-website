import React from "react";
import "../Login/Login.css";
import logo from "../../asset/image/logo-removebg-preview.png";
import { Link } from "react-router-dom";
const Register = () => {
  return (
    <div className="my-login-page">
      <section className="h-100">
        <div className="container h-100">
          <div className="row justify-content-md-center h-100">
            <div className="card-wrapper">
              <div className="brand">
                <img src={logo} alt="bootstrap 4 login page" />
              </div>
              <div className="card fat">
                <div className="card-body">
                  <h4 className="card-title">Register</h4>
                  <form
                    method="POST"
                    className="my-login-validation"
                    noValidate
                  >
                    <div className="form-group">
                      <label htmlFor="name">Name</label>
                      <input
                        id="name"
                        type="text"
                        className="form-control"
                        name="name"
                        required
                        autofocus
                      />
                      <div className="invalid-feedback">What's your name?</div>
                    </div>
                    <div className="form-group">
                      <label htmlFor="email">E-Mail Address</label>
                      <input
                        id="email"
                        type="email"
                        className="form-control"
                        name="email"
                        required
                      />
                      <div className="invalid-feedback">
                        Your email is invalid
                      </div>
                    </div>
                    <div className="form-group">
                      <label htmlFor="password">Password</label>
                      <input
                        id="password"
                        type="password"
                        className="form-control"
                        name="password"
                        required
                        data-eye
                      />
                      <div className="invalid-feedback">
                        Password is required
                      </div>
                    </div>
                    <div className="form-group">
                      <div className="custom-checkbox custom-control">
                        <input
                          type="checkbox"
                          name="agree"
                          id="agree"
                          className="custom-control-input"
                          required
                        />
                        <label htmlFor="agree" className="custom-control-label">
                          I agree to the <a href="#">Terms and Conditions</a>
                        </label>
                        <div className="invalid-feedback">
                          You must agree with our Terms and Conditions
                        </div>
                      </div>
                    </div>
                    <div className="form-group m-0">
                      <button
                        type="submit"
                        className="btn btn-primary btn-block"
                      >
                        Register
                      </button>
                    </div>
                    <div className="mt-4 text-center">
                      Already have an account? <Link to="/login">Login</Link>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Register;
