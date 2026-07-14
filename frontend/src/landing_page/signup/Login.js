import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function Login() {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  function handleChange(e) {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      const res = await axios.post(
        "https://zerodha-clone-ucl6.onrender.com/api/login",
        {
          email: form.email,
          password: form.password,
        },
        {
          withCredentials: true,
        }
      );


      alert(res.data.message);

      // Redirect to dashboard
      console.log("Redirecting to dashboard...");
      window.location.href = "https://zerodha-clone-2-09mf.onrender.com";

    } catch (err) {
      alert(err.response?.data?.message || "Login Failed");
    }
  }

  return (
    <div className="container py-5">
      <div className="row align-items-center">
        <div className="col-md-6">

          <h1 className="display-6 mb-3">Login</h1>

          <form onSubmit={handleSubmit}>

            <div className="mb-3">
              <label>Email</label>

              <input
                type="email"
                name="email"
                className="form-control"
                value={form.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="mb-3">
              <label>Password</label>

              <input
                type="password"
                name="password"
                className="form-control"
                value={form.password}
                onChange={handleChange}
                required
              />
            </div>

            <button className="btn btn-primary w-100">
              Login
            </button>

          </form>

          <p className="mt-3">
            Don't have an account?{" "}
            <Link to="/signup">Signup</Link>
          </p>

        </div>

        <div className="col-md-6 text-center d-none d-md-block">
          <img
            src="/media/images/homeHero.svg"
            alt="Login"
            className="img-fluid"
          />
        </div>
      </div>
    </div>
  );
}

export default Login;