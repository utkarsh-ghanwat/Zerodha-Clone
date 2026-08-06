import React, { useEffect, useState } from "react";
import axios from "axios";

function ProtectedRoute({ children }) {
  const [loading, setLoading] = useState(true);
  const [auth, setAuth] = useState(false);

  // Verify user on first load
  useEffect(() => {
    const verifyUser = async () => {
      try {
        const res = await axios.get(
          "https://zerodha-clone-ucl6.onrender.com/api/verify",
          {
            withCredentials: true,
          }
        );

        if (res.data.success) {
          setAuth(true);
        } else {
          setAuth(false);
        }
      } catch (err) {
        console.error("Verify Error:", err);
        setAuth(false);
      } finally {
        setLoading(false);
      }
    };

    verifyUser();
  }, []);

  // Redirect only after verification is complete
  useEffect(() => {
    if (!loading && !auth) {
      window.location.href =
        "https://zerodha-clone-1-ezut.onrender.com/login";
    }
  }, [loading, auth]);

  if (loading) {
    return (
      <div
        style={{
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          fontSize: "24px",
        }}
      >
        Loading...
      </div>
    );
  }

  if (!auth) {
    return null;
  }

  return children;
}

export default ProtectedRoute;