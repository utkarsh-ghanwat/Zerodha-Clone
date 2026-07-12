import React, { useEffect, useState } from "react";
import axios from "axios";

function ProtectedRoute({ children }) {
  const [loading, setLoading] = useState(true);
  const [auth, setAuth] = useState(false);

  useEffect(() => {
    const verifyUser = async () => {
      try {
        const res = await axios.get(
          "http://localhost:3002/api/verify",
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
    window.location.href = "http://localhost:3000/login";
    return null;
  }

  return children;
}

export default ProtectedRoute;