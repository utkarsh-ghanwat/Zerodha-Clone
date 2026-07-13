import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
    return (
        <div className="container">
            <nav
                className="navbar fixed-top navbar-expand-lg bg-body-tertiary border-bottom"
                style={{ backgroundColor: "#FFF" }}
            >
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarText"
                    aria-controls="navbarText"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarText">
                    <img
                        src="/Media/Images/logo.svg"
                        alt="Logo"
                        style={{ width: "10%", marginLeft: "200px" }}
                    />

                    <ul className="navbar-nav m-auto p-auto mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link m-auto p-2 fs-6 active" to="/signup">
                                Signup
                            </Link>
                        </li>

                        <li className="nav-item">
                            <Link className="nav-link m-auto p-2 fs-6 active" to="/login">
                                Login
                            </Link>
                        </li>

                        <li className="nav-item">
                            <Link className="nav-link m-auto p-2 fs-6 active" to="/about">
                                About
                            </Link>
                        </li>

                        <li className="nav-item">
                            <Link className="nav-link m-auto p-2 fs-6 active" to="/products">
                                Products
                            </Link>
                        </li>

                        <li className="nav-item">
                            <Link className="nav-link m-auto p-2 fs-6 active" to="/pricing">
                                Pricing
                            </Link>
                        </li>

                        <li className="nav-item">
                            <Link className="nav-link m-auto p-2 fs-6 active" to="/support">
                                Support
                            </Link>
                        </li>

                        <li className="nav-item">
                            <i className="fa-solid fa-bars m-auto p-2"></i>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;
