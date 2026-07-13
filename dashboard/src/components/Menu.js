// import React, { useState } from "react";

// import { Link } from "react-router-dom";

// import axios from "axios";

// const Menu = () => {
//   const [selectedMenu, setSelectedMenu] = useState(0);
//   const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);

//   const handleMenuClick = (index) => {
//     setSelectedMenu(index);
//   };

//   const handleProfileClick = () => {
//     setIsProfileDropdownOpen(!isProfileDropdownOpen);
//   };

//   const handleLogout = async () => {
//   try {
//     await axios.post(
//       "http://localhost:3002/api/logout",
//       {},
//       {
//         withCredentials: true,
//       }
//     );

//     window.location.href = "http://localhost:3000/login";
//   } catch (err) {
//     console.error("Logout failed:", err);
//   }
// };

//   const menuClass = "menu";
//   const activeMenuClass = "menu selected";


//   return (
//     <div className="menu-container">
//       <img src="logo.png" style={{ width: "50px" }} />
//       <div className="menus">
//         <ul>
//           <li>
//             <Link
//               style={{textDecoration:"none"}}
//               to="/"
//               onClick={() => handleMenuClick(0)}>
//                 <p className={selectedMenu===0 ? activeMenuClass : menuClass}>Dashboard</p>
//             </Link>
//           </li>
//           <li>
//             <Link
//               style={{textDecoration:"none"}}
//               to="/orders"
//               onClick={() => handleMenuClick(1)}>
//                 <p className={selectedMenu===1 ? activeMenuClass : menuClass}>Orders</p>
//             </Link>
//           </li>
//           <li>
//             <Link
//               style={{textDecoration:"none"}}
//               to="/holdings"
//               onClick={() => handleMenuClick(2)}>
//                 <p className={selectedMenu===2 ? activeMenuClass : menuClass}>Holdings</p>
//             </Link>
//           </li>
//           <li>
//             <Link
//               style={{textDecoration:"none"}}
//               to="/positions"
//               onClick={() => handleMenuClick(3)}>
//                 <p className={selectedMenu===3 ? activeMenuClass : menuClass}>Positions</p>
//             </Link>
//           </li>
//           <li>
//             <Link
//               style={{textDecoration:"none"}}
//               to="/funds"
//               onClick={() => handleMenuClick(4)}>
//                 <p className={selectedMenu===4 ? activeMenuClass : menuClass}>Funds</p>
//             </Link>
//           </li>
//           <li>
//             <Link
//               style={{textDecoration:"none"}}
//               to="/apps"
//               onClick={() => handleMenuClick(5)}>
//                 <p className={selectedMenu===5 ? activeMenuClass : menuClass}>Apps</p>
//             </Link>
//           </li>
//         </ul>
//         <hr />
//         <div className="profile" onClick={handleProfileClick}>
//   <div className="avatar">ZU</div>
//   <p className="username">USERID</p>
// </div>

// {isProfileDropdownOpen && (
//   <div
//     style={{
//       position: "absolute",
//       right: "20px",
//       top: "60px",
//       background: "#fff",
//       border: "1px solid #ddd",
//       borderRadius: "5px",
//       padding: "10px",
//       cursor: "pointer",
//       boxShadow: "0 2px 10px rgba(0,0,0,0.15)",
//     }}
//   >
//     <p
//       onClick={handleLogout}
//       style={{ margin: 0, color: "red" }}
//     >
//       Logout
//     </p>
//   </div>
// )}
//       </div>
//     </div>
//   );
// };

// export default Menu;


import React, { useState, useEffect } from "react";

import { Link } from "react-router-dom";

import axios from "axios";

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

    window.location.href = "https://zerodha-clone-1-ezut.onrender.com/login";
  } catch (err) {
    console.error("Logout failed:", err);
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
          <li>
            <Link
              style={{ textDecoration: "none" }}
              to="/apps"
              onClick={() => handleMenuClick(5)}>
              <p className={selectedMenu === 5 ? activeMenuClass : menuClass}>Apps</p>
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
            <p
              onClick={handleLogout}
              style={{ margin: 0, color: "red" }}
            >
              Logout
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Menu;