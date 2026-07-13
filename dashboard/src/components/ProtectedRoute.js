import React, { useEffect, useState } from "react";
import axios from "axios";

function ProtectedRoute({ children }) {
  const [loading, setLoading] = useState(true);
  const [auth, setAuth] = useState(false);

  useEffect(() => {
    const verifyUser = async () => {
      try {
        const res = await axios.get(
          "https://zerodha-clone-ucl6.onrender.com/api/verify",
          {
            withCredentials: true,
          }
        );

        console.log(res.data.username);


        if (res.data.success) {
          setAuth(true);
        } else {
          setAuth(false);
        }
      } catch (err) {
        console.error(err);
        setAuth(false);
      }

      setLoading(false);
    };

    verifyUser();
  }, []);

  if (loading) {
    return <h2>Loading...</h2>;
  }

  if (!auth) {
    window.location.href = "https://zerodha-clone-1-ezut.onrender.com/login";
    return null;
  }

  return children;
}

export default ProtectedRoute;