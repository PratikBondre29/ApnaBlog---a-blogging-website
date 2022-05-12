import React from "react";
import "./Login.css";
import logo from "../../asset/image/logo-removebg-preview.png";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="my-login-page">
      <section className="h-100">
        <div className="container h-100">
          <div className="row justify-content-md-center h-100">
            <div className="card-wrapper">
              <div className="brand">
                <img src={logo} alt="logo" />
              </div>
              <div className="card fat">
                <div className="card-body">
                  <h4 className="card-title">Login</h4>
                  <form
                    method="POST"
                    className="my-login-validation"
                    noValidate
                  >
                    <div className="form-group">
                      <label htmlFor="email">E-Mail Address</label>
                      <input
                        id="email"
                        type="email"
                        className="form-control"
                        name="email"
                        required
                        autofocus
                      />
                      <div className="invalid-feedback">Email is invalid</div>
                    </div>
                    <div className="form-group">
                      <label htmlFor="password">
                        Password
                        <a href="forgot.html" className="float-right">
                          Forgot Password?
                        </a>
                      </label>
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
                          name="remember"
                          id="remember"
                          className="custom-control-input"
                        />
                        <label
                          htmlFor="remember"
                          className="custom-control-label"
                        >
                          Remember Me
                        </label>
                      </div>
                    </div>
                    <div className="form-group m-0">
                      <button
                        type="submit"
                        className="btn btn-primary btn-block"
                      >
                        Login
                      </button>
                    </div>
                    <div className="mt-4 text-center">
                      Don't have an account?{" "}
                      <Link to="/register">Create One</Link>
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

export default Login;
