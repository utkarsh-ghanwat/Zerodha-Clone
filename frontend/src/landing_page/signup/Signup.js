import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

function Signup() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    username: "",
    email: "",
    mobile: "",
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

    console.log("Form data:", form);

    try {
      const res = await axios.post(
        "https://zerodha-clone-ucl6.onrender.com/api/signup",
        {
          username: form.username,
          email: form.email,
          mobile: form.mobile,
          password: form.password,
        },
        {
          withCredentials: true,
        }
      );

      alert(res.data.message);

      setForm({
        username: "",
        email: "",
        mobile: "",
        password: "",
      });

      navigate("/login");
    } catch (err) {
      console.error(err.response?.data || err);
      alert(err.response?.data?.message || "Signup failed");
    }
  }

  return (
    <div className="container py-5">
      <div className="row align-items-center">
        <div className="col-12 col-md-6">
          <h1 className="display-6 mb-3">Open your account</h1>
          <p className="text-muted mb-4">
            Start investing with a Zerodha-style account — fast and paperless.
          </p>

          <form
            onSubmit={handleSubmit}
            className="w-100"
            style={{ maxWidth: 520 }}
          >
            <div className="mb-3">
              <label className="form-label">Username</label>
              <input
                type="text"
                name="username"
                value={form.username}
                onChange={handleChange}
                required
                className="form-control form-control-lg"
                placeholder="Enter your username"
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Email</label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                className="form-control form-control-lg"
                placeholder="you@example.com"
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Mobile</label>
              <input
                type="tel"
                name="mobile"
                value={form.mobile}
                onChange={handleChange}
                required
                className="form-control form-control-lg"
                placeholder="Enter your mobile number"
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Password</label>
              <input
                type="password"
                name="password"
                value={form.password}
                onChange={handleChange}
                required
                className="form-control form-control-lg"
                placeholder="Choose a secure password"
              />
            </div>

            <div className="d-grid">
              <button type="submit" className="btn btn-primary btn-lg">
                Create Account
              </button>
            </div>
          </form>

          <p className="mt-3 text-muted">
            Already registered? <Link to="/login">Log in</Link>
          </p>
        </div>

        <div className="col-12 col-md-6 d-none d-md-block text-center">
          <img
            src="/media/images/homeHero.svg"
            alt="Signup illustration"
            className="img-fluid"
          />
        </div>
      </div>
    </div>
  );
}

export default Signup;