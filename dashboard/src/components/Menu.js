import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import { toast } from "react-toastify";

const Menu = () => {
  const [selectedMenu, setSelectedMenu] = useState(0);
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);
  const [username, setUsername] = useState("");

  const handleMenuClick = (index) => {
    setSelectedMenu(index);
  };

  const handleProfileClick = () => {
    setIsProfileDropdownOpen(!isProfileDropdownOpen);
  };

  const handleLogout = async () => {
  try {
    await axios.post(
      "https://zerodha-clone-ucl6.onrender.com/api/logout",
      {},
      {
        withCredentials: true,
      }
    );

    toast.success("👋 Logged out successfully!", {
      position: "top-right",
      autoClose: 2000,
      theme: "colored",
    });

    setTimeout(() => {
      window.location.replace(
        "https://zerodha-clone-1-ezut.onrender.com/login"
      );
    }, 2200);
  } catch (err) {
    toast.error("Logout failed!", {
      position: "top-right",
      autoClose: 2000,
      theme: "colored",
    });

    console.error(err);
  }
};
  const menuClass = "menu";
  const activeMenuClass = "menu selected";

  useEffect(() => {
    axios
      .get("https://zerodha-clone-ucl6.onrender.com/api/verify", {
        withCredentials: true,
      })
      .then((res) => {
        console.log("Verify Response:", res.data);

        if (res.data.success) {
          console.log("Username:", res.data.username);
          setUsername(res.data.username);
        }
      })
      .catch((err) => console.log(err));
  }, []);


  return (
    <div className="menu-container">
      <img src="logo.png" style={{ width: "50px" }} />
      <div className="menus">
        <ul>
          <li>
            <Link
              style={{ textDecoration: "none" }}
              to="/"
              onClick={() => handleMenuClick(0)}>
              <p className={selectedMenu === 0 ? activeMenuClass : menuClass}>Dashboard</p>
            </Link>
          </li>
          <li>
            <Link
              style={{ textDecoration: "none" }}
              to="/orders"
              onClick={() => handleMenuClick(1)}>
              <p className={selectedMenu === 1 ? activeMenuClass : menuClass}>Orders</p>
            </Link>
          </li>
          <li>
            <Link
              style={{ textDecoration: "none" }}
              to="/holdings"
              onClick={() => handleMenuClick(2)}>
              <p className={selectedMenu === 2 ? activeMenuClass : menuClass}>Holdings</p>
            </Link>
          </li>
          <li>
            <Link
              style={{ textDecoration: "none" }}
              to="/positions"
              onClick={() => handleMenuClick(3)}>
              <p className={selectedMenu === 3 ? activeMenuClass : menuClass}>Positions</p>
            </Link>
          </li>
          <li>
            <Link
              style={{ textDecoration: "none" }}
              to="/funds"
              onClick={() => handleMenuClick(4)}>
              <p className={selectedMenu === 4 ? activeMenuClass : menuClass}>Funds</p>
            </Link>
          </li>
        </ul>
        <hr />
        <div className="profile" onClick={handleProfileClick}>
          <div className="avatar">
            {username ? username.charAt(0).toUpperCase() : "U"}
          </div>
          <p className="username">{username}</p>
        </div>

        {isProfileDropdownOpen && (
          <div
            style={{
              position: "absolute",
              right: "20px",
              top: "60px",
              background: "#fff",
              border: "1px solid #ddd",
              borderRadius: "5px",
              padding: "10px",
              cursor: "pointer",
              boxShadow: "0 2px 10px rgba(0,0,0,0.15)",
            }}
          >
            <button
              onClick={() => alert("Button clicked")}
              style={{
                color: "red",
                border: "none",
                background: "white",
                cursor: "pointer",
              }}
            >
              Logout
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Menu;